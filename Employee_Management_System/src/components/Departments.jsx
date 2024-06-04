import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Departments = () => {
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
    }, [])
    return (
        <div className='px-5 mt-3'>
            <div className='d-flex justify-content-center'>
                <h3>Departments</h3>
            </div>
            <Link to='/dashboard/add_department' className='btn btn-primary'>Add Department</Link>
            <div>
                <table className="table mt-5">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Name of Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            department.map(d => (
                                <tr>
                                    <td>
                                        {d.name}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Departments