import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

const [error, setError] = useState(null)

    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin', values)
        .then(result => {
            if(result.data.loginStatus){
                navigate('/dashboard')
            }else{
                setError(result.data.Error)
            }
            
        })
        .catch(err => console.log(err) )
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-4 rounded w-30 border loginForm'>

            <div className="text-danger">
                {error && error}
            </div>

                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' name='email' placeholder='Enter email' autoComplete='off' onChange={(e) => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' name='password' placeholder='Enter password' autoComplete='off' onChange={(e)=>setValues({...values, password : e.target.value})} className='form-control rounded-0' />
                    </div>
                    <button className='btn btn-primary w-100 rounded-0 mb-2'>Login</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Login