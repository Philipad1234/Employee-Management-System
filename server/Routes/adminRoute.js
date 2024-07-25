import express from 'express';
import adminModel from '../utils/Schemas/adminSchema.js';
import departmentModel from '../utils/Schemas/departmentSchema.js';
import employeeModel from '../utils/Schemas/employeeSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import multer from 'multer';
import path from 'path';
import dotenv from 'dotenv';
import { ObjectId } from 'mongodb'


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

// image upload start
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})
// image upload end

router.post('/add_employee', upload.single('image'), async (req, res) => {

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const user = ({
        "name": req.body.name,
        "email": req.body.email,
        "password": hashedPassword,
        "address": req.body.address,
        "salary": req.body.salary,
        "image": req.file.filename,
        "department_id": req.body.department_id
    })

    try {
        await employeeModel.create(user);
        return res.json({ Status: true });
    } catch (err) {
        return res.json({ Status: false, Error: 'Query Error' });
    }


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


router.get('/departments', async (req, res) => {
    await departmentModel.find()
        .then(departments => { return res.json({ Status: true, departments: departments }) })
        .catch(err => { return res.json({ Status: false, Error: 'Query Error' }) })
})


router.get('/employees', async (req, res) => {
    await employeeModel.find()
        .then(employees => { return res.json({ Status: true, employees: employees }) })
        .catch(err => { return res.json({ Status: false, Error: 'Query Error' }) })
})

router.get('/employees/:_id', async (req, res) => {

    const id = req.params._id
    await employeeModel.find({ "_id": id })
        .then(employee => { return res.json({ Status: true, employee: employee }) })
        .catch(err => { return res.json({ Status: false, Error: 'Query Error' }) })
})

router.put('/edit_employee/:_id', async (req, res) => {
    const id = req.params._id;
    console.log(id)
    await employeeModel.updateOne(
        { "_id": id },
        {
            $set: {
                "name": req.body.name,
                "email": req.body.email,
                "salary": req.body.salary,
                "address": req.body.address,
                "department_id": req.body.department_id
            }
        }
    )
        .then(employee => { return res.json({ Status: true, employee: employee }) })
        .catch(err => { return res.json({ Status: false, Error: 'Query Error' }) })

})




export { router as adminRouter }