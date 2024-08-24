import express, { json } from 'express'
import { accountRoutes } from './routes/account-routes'
import { errorMiddleware } from '../middleware/errorMiddleware'

const app = express()

app.use(json)
app.use('/api', accountRoutes)

app.use(errorMiddleware)
app.listen(8080, ()=>{
    console.log("server rodando")
})