import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddEmployee = () => {
    const [employee, setEmployee] = useState({

        name: '',
        email: '',
        password: '',
        salary: '',
        address: '',
        department_id: '',
        image: ''

    })
    const [department, setDepartment] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/auth/departments')
            .then(result => {
                if (result.data.Status) {
                    setDepartment(result.data.departments)
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => {
                console.log(err)
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', employee.name);
        formData.append('email', employee.email);
        formData.append('password', employee.password);
        formData.append('address', employee.address);
        formData.append('salary', employee.salary);
        formData.append('image', employee.image);
        formData.append('department_id', employee.department_id);

        axios.post('http://localhost:3000/auth/add_employee', formData)
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/employees')
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='p-3 rounded w-50 border'>

                <h3 className='text-center'>Add Employee</h3>
                <form className='row g-1' onSubmit={handleSubmit}>
                    <div className='col-12'>
                        <label for='inputName' className='form-label'>
                            Name
                        </label>
                        <input
                            type='text'
                            id='inputName'
                            placeholder='Enter name'
                            className='form-control rounded-0'
                            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                        />
                    </div>

                    <div className='col-12'>
                        <label for='inputEmail4' className='form-label'>
                            Email
                        </label>
                        <input
                            type='email'
                            id='inputEmail4'
                            placeholder='Enter email'
                            className='form-control rounded-0'
                            autoComplete='off'
                            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                        />
                    </div>

                    <div className='col-12'>
                        <label for='inputPassword4' className='form-label'>
                            Password
                        </label>
                        <input
                            type='password'
                            id='inputPassword4'
                            placeholder='Enter password'
                            className='form-control rounded-0'
                            onChange={(e) => setEmployee({ ...employee, password: e.target.value })}
                        />
                    </div>

                    <div className='col-12'>
                        <label for='inputSalary' className='form-label'>
                            Salary
                        </label>
                        <input
                            type='text'
                            id='inputSalary'
                            placeholder='Enter salary'
                            className='form-control rounded-0'
                            autoComplete='off'
                            onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                        />
                    </div>

                    <div className='col-12'>
                        <label for='inputAddress' className='form-label'>
                            Address
                        </label>
                        <input
                            type='text'
                            id='inputAddress'
                            placeholder='Enter address'
                            className='form-control rounded-0'
                            autoComplete='off'
                            onChange={(e) => setEmployee({ ...employee, address: e.target.value })}
                        />
                    </div>

                    <div className='col-12'>
                        <label for='department' className='form-label'>
                            Department
                        </label>
                        <select
                            name='department'
                            id='department'
                            className='form-select'
                            onChange={(e) => setEmployee({ ...employee, department_id: e.target.value })}
                        >
                            {department.map(d => {
                                return <option value={d._id}>{d.name}</option>
                            })}
                        </select>
                    </div>

                    <div className='col-12 mb-3'>
                        <label for='inputGroupFile01' className='form-label'>
                            Select Image
                        </label>
                        <input
                            type='file'
                            id='inputGroupFile01'
                            name='image'
                            className='form-control rounded-0'
                            onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
                        />
                    </div>

                    <div className='col-12'>
                        <button type='submit' className='btn btn-primary w-100'>
                            Add employee
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddEmployee