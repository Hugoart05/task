export const templateInvite = `
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #007BFF;
            color: #ffffff;
            padding: 10px 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            font-size: 16px;
            color: #ffffff;
            background-color: #007BFF;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 4px;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 10px;
            background-color: #f4f4f4;
            border-radius: 0 0 8px 8px;
            font-size: 14px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Convite Especial</h1>
        </div>
        <div class="content">
            <p>Olá [Nome],</p>
            <p>Estamos muito felizes em convidá-lo para o nosso projeto.</p>
            <p><strong>Data:</strong> [Data do Evento]</p>
            <p><strong>Hora:</strong> [Hora do Evento]</p>
            <p><strong>Local:</strong> [Local do Evento]</p>
            <a href="http://ip:port/endpointapi" class="button">Aceitar</a>
            <p>Por favor, confirme sua presença clicando no botão acima. Esperamos vê-lo lá!</p>
        </div>
        <div class="footer">
            <p>Se você tiver alguma dúvida, entre em contato conosco.</p>
            <p>&copy; [Ano] Sua Empresa. Todos os direitos reservados.</p>
        </div>
    </div>
</body>
</html>

`