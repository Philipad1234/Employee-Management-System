import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EditEmployee = () => {
    const { _id } = useParams()
    const [employee, setEmployee] = useState({

        name: '',
        email: '',
        salary: '',
        address: '',
        department_id: ''
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

        axios.get('http://localhost:3000/auth/employees/'+_id)
            .then(result => {
               setEmployee({
                ...employee,
                name: result.data.employee[0].name,
                email: result.data.employee[0].email,
                address: result.data.employee[0].address,
                salary: result.data.employee[0].salary,
                department_id: result.data.employee[0].department_id
               })
            }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_employee/'+_id, employee)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/employees')
            }else{
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='p-3 rounded w-50 border'>

                <h3 className='text-center'>Edit Employee</h3>
                <form className='row g-1' onSubmit={handleSubmit}>
                    <div className='col-12'>
                        <label for='inputName' className='form-label'>
                            Name
                        </label>
                        <input
                            type='text'
                            id='inputName'
                            placeholder='Enter name'
                            value={employee.name}
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
                            value={employee.email}
                            className='form-control rounded-0'
                            autoComplete='off'
                            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
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
                            value={employee.salary}
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
                            value={employee.address}
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

                    <div className='col-12'>
                        <button type='submit' className='btn btn-primary w-100'>
                            Edit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default EditEmployee