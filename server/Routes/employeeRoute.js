import express from 'express';
import adminModel from '../utils/Schemas/adminSchema.js';
import departmentModel from '../utils/Schemas/departmentSchema.js';
import employeeModel from '../utils/Schemas/employeeSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import path from 'path';
import mongoose from 'mongoose'
import dotenv from 'dotenv';


dotenv.config()

const router = express.Router();

const jwt_token = process.env.EMPLOYEE_TOKEN


router.post('/employeelogin', async (req, res) => {

    const employeeExist = await employeeModel.findOne({
        "email": req.body.email
    })
    if (employeeExist) {
        bcrypt.compare(req.body.password, employeeExist.password, (err, response) => {
            if (err) return res.json({ loginStatus: false, Error: "Wrong Password" })
            if (response) {
                const email = employeeExist.email;
                const token = jwt.sign(
                    { role: 'employee', email: email },
                    jwt_token,
                    { expiresIn: '1d' }
                )
                res.cookie('token', token)
                return res.json({ loginStatus: true })
            }
        })


    } else {
        return res.json({ loginStatus: false, Error: "Wrong email or password" })
    }


})

export { router as employeeRouter }