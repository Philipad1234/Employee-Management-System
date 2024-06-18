import React from 'react'
import { Link } from 'react-router-dom'

const Employees = () => {
  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Employees</h3>
      </div>
      <Link to='/dashboard/add_employee' className='btn btn-primary'>Add Employee</Link>
      <div className='mt-3'>
      </div>
    </div>
  )
}

export default Employees
