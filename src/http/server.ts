import express, { json } from 'express'
import { errorMiddleware } from '../middleware/errorMiddleware.ts'
import { accountRoutes } from './routes/account-routes.ts'
import { projectRoutes } from './routes/project-routes.ts'

const app = express()

app.use(json())
app.use('/api', accountRoutes)
app.use('/api', projectRoutes)

app.use(errorMiddleware)
app.listen(8080, ()=>{
    console.log("server rodando")
})