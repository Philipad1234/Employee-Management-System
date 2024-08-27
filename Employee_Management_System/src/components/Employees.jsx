import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Employees = () => {

    const [employee, setEmployee] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/auth/employees')
            .then(result => {
                if (result.data.Status) {
                    setEmployee(result.data.employees)
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (_id) => {
        axios.delete('http://localhost:3000/auth/delete_employee/'+_id)
            .then(result => {
                if (result.data.Status) {
                    window.location.reload()
                }else{
                    alert(result.data.Error)
                }
            })
    }
    return (
        <div className='px-5 mt-3'>
            <div className='d-flex justify-content-center'>
                <h3>Employees</h3>
            </div>
            <Link to='/dashboard/add_employee' className='btn btn-primary'>Add Employee</Link>
            <div className='mt-3'>
                <table className="table mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            employee.map(e => (
                                <tr>
                                    <td>{e.name}</td>
                                    <td><img src={`http://localhost:3000/images/` + e.image} className='employee_image' /></td>
                                    <td>{e.email}</td>
                                    <td>{e.address}</td>
                                    <td>{e.salary}</td>

                                    <Link to={`/dashboard/edit_employee/` + e._id} className='btn btn-primary me-2 p-1 mt-1'><span><i className="bi bi-pencil-square"></i></span></Link>
                                    <button className='btn btn-danger p-1 mt-1' onClick={() => handleDelete(e._id)}><span><i className="bi bi-trash"></i></span></button>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employees
