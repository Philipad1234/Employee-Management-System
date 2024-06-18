import axios from 'axios'
import React, { useEffect, useState } from 'react'


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
    axios.post('http://localhost:3000/auth/add_employee', employee)
    .then(result => console.log(result.data))
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