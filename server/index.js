import express from 'express'
import 'dotenv/config'

const app = express();

port = process.env.PORT || 2800

app.listen(port, ()=>{
    console.log("Server is running")
})