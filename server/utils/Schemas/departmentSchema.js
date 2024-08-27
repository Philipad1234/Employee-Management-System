import mongoose from 'mongoose';
import dotenv from 'dotenv'


dotenv.config()


const MONGOOSE_URL = process.env.URL

mongoose
    .connect(MONGOOSE_URL)
    .then(() => {
        console.log('Database Connected!')
    })
    .catch((error) => {
        console.log(error)
    })

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})


const departmentModel = new mongoose.model('departments', departmentSchema)


export default departmentModel