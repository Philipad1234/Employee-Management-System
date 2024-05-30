import React from 'react'
import { Link } from 'react-router-dom'

const Departments = () => {
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Departments</h3>
        </div>
        <Link to='/dashboard/add_department' className='btn btn-primary'>Add Department</Link>

    </div>
  )
}

export default Departments