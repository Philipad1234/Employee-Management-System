import mongoose from 'mongoose';
import dotenv from 'dotenv'



dotenv.config()


const MONGOOSE_URL = process.env.URL

mongoose
.connect(MONGOOSE_URL)
.then(() => {
    console.log('Database Connected!')
})
.catch((error)=>{
    console.log(error)
})

const employeeSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    salary: {
        type: Number
    },
    address: {
        type: String, 
        required: true
    },
    image: {
        type: String
    },
    department_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'departments' 
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})


const employeeModel = new mongoose.model('employees', employeeSchema)


export default employeeModel