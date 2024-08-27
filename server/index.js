import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { adminRouter } from './Routes/adminRo ute.js'
import { employeeRouter } from './Routes/EmployeeRoute.js'



const app = express();
dotenv.config()
app.use(cors({ 
    origin: ['https://employee-management-system-rosy.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}
))

const port = process.env.PORT || 2800

app.use(express.json())

// Router
app.use('/auth', adminRouter)
app.use('/employee', employeeRouter)

app.use(express.static('public'))



app.listen(port, () => {
    console.log("Server is running")
})