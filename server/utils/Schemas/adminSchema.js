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

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


const adminModel = new mongoose.model('admins', adminSchema)


export default adminModel