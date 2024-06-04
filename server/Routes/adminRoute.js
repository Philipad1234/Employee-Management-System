import express from 'express';
import adminModel from '../utils/Schemas/adminSchema.js'
import departmentModel from '../utils/Schemas/departmentSchema.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

const router = express.Router();

const jwt_token = process.env.TOKEN

router.post('/adminlogin', async (req, res) => {

    const adminExist = await adminModel.findOne({
        "email": req.body.email,
        "password": req.body.password
    })
    if (adminExist) {
        const email = adminExist.email;
        const token = jwt.sign(
            { role: 'admin', email: email },
            jwt_token,
            { expiresIn: '1d' }
        )
        res.cookie('token', token)
        return res.json({ loginStatus: true })
    } else {
        return res.json({ loginStatus: false, Error: "Wrong email or password" })
    }


})



router.get('/departments', async (req, res) => {
  await departmentModel.find()
.then(departments => { return res.json({ Status: true, departments: departments })})
.catch(err => { return res.json({ Status: false, Error: 'Query Error' })})
})

router.post('/add_department', async (req, res) => {
    const department = req.body.department
    try {
        await departmentModel.create({
            "name": department
        });
        return res.json({ Status: true });
    } catch (err) {
        return res.json({ Status: false, Error: 'Query Error' });
    }


})






export { router as adminRouter }