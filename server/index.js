import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { adminRouter } from './Routes/adminRoute.js'


const app = express();
dotenv.config()
app.use(cors({ 
    origin: ['http://127.0.0.1:5173'],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
}
))
app.use(express.json())
const port = process.env.PORT || 2800

// Routes
app.use('/auth', adminRouter)



app.listen(port, () => {
    console.log("Server is running")
})