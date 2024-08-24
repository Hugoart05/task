import { Connection } from "mysql2";
import { DataBase } from "../context/data-base";

export async function InitializeDataBase() {
    const dbase = DataBase.getInstance()
    const conn = await dbase.getConnection()
    const createRoles = `
        CREATE TABLE IF NOT EXISTS roles (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL
        );`
    const createPlan = `
    CREATE TABLE IF NOT EXISTS planos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL
    );
    
    `
    const createUsers = `
        CREATE TABLE IF NOT EXISTS usuarios (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(60) NOT NULL,
                avatarurl VARCHAR(255) NOT NULL,
                roleid INT NOT NULL DEFAULT 1,
                planid INT NOT NULL DEFAULT 1,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (roleid) REFERENCES roles (id),
                FOREIGN KEY (planid) REFERENCES planos (id)
            );
    `
    const createProjects = `
    CREATE TABLE IF NOT EXISTS projetos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        proprietarioid INT,
        thumb VARCHAR(255),
        FOREIGN KEY (proprietarioid) REFERENCES usuarios (id)
        );
    `
    const createStatus = `
         CREATE TABLE IF NOT EXISTS status (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                projetoid INT,
                FOREIGN KEY (projetoid) REFERENCES projetos (id)
            );
    `

    const createAssigne = `
        CREATE TABLE IF NOT EXISTS participantes(
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            usuarioid INT,
            FOREIGN KEY(usuarioid) REFERENCES usuarios(id)
        );
    `
    const createTarefas = `
         CREATE TABLE IF NOT EXISTS tarefas(
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        descricao VARCHAR(255) NOT NULL,
        comentarios VARCHAR(255) NOT NULL,
        statusid INT NOT NULL,
        participanteid INT,
        targetcolor VARCHAR(7), 
        FOREIGN KEY(statusid) REFERENCES status(id),
        FOREIGN KEY(participanteid) REFERENCES participantes(id)
    );
    `
    await conn.query(createRoles)
    await conn.query(createPlan)
    await conn.query(createUsers)
    await conn.query(createProjects)
    await conn.query(createStatus)
    await conn.query(createAssigne)
    await conn.query(createTarefas)
    await conn.end()
    console.log("tabelas criadas")
}

 InitializeDataBase()




