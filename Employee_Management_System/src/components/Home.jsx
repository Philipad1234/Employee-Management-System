import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'


const Home = () => {
  const [adminTotal, setAdminTotal] = useState()
  const [employeeTotal, setEmployeeTotal] = useState()
  const [departmentTotal, setDepartmentTotal] = useState()
  // const [admins, setAdmins] = useState([])

  useEffect(() => {
    adminCount();
    employeeCount();
    departmentCount();
    // adminRecords();
  }, [])

// const adminRecords = () => {
//   axios.get('http://localhost:3000/auth/admin_records')
//   .then(result => {
//     if (result.data.Status) {
//       setAdmins(result.data.admins)
//     }
//   })
// }

  const adminCount = () => {
    axios.get('http://localhost:3000/auth/admin_count')
      .then(result => {
        if (result.data.Status) {
          setAdminTotal(result.data.adminCount)
        }
      })
  }

  const employeeCount = () => {
    axios.get('http://localhost:3000/auth/employee_count')
      .then(result => {
        if (result.data.Status) {
          setEmployeeTotal(result.data.employeeCount)
        }
      })
  }

  const departmentCount = () => {
    axios.get('http://localhost:3000/auth/department_count')
      .then(result => {
        if (result.data.Status) {
          setDepartmentTotal(result.data.departmentCount)
        }
      })
  }

  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Admins</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Employees</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Departments</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total: </h5>
            <h5>{departmentTotal}</h5>
          </div>
        </div>
      </div>
      </div>
      
   
  )
}

export default Home