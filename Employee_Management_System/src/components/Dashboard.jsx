import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Dashboard = () => {
    return (
        <div className='container-fluid'>
            <div className='row flex-nowrap'>
                <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'>
                    <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>

                        <Link
                            to="/dashboard"
                            className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none'
                        >
                            <span className='fs-5 fw-bolder d-none d-sm-inline'>
                                <img src='../src/assets/logo.png'></img>
                            </span>
                        </Link>

                        <ul
                            className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items align-items-sm-start' id='menu'
                        >
                            <li className='w-100 nav-link-container'>
                                <Link
                                    to="/dashboard"
                                    className='nav-link text-white px-0 align-middle'
                                >
                                    <i className="fs-5 ms-2 bi bi-speedometer"></i>
                                    <span className='ms-2 d-none d-sm-inline'>
                                        Dashboard
                                    </span>
                                </Link>
                            </li>
                            <li className='w-100 nav-link-container'>
                                <Link
                                    to="/dashboard/employees"
                                    className='nav-link text-white px-0 align-middle'
                                >
                                    <i className="fs-5 ms-2 bi bi-people-fill"></i>
                                    <span className='ms-2 d-none d-sm-inline'>
                                        Manage Employees
                                    </span>
                                </Link>
                            </li>
                            <li className='w-100 nav-link-container'>
                                <Link
                                    to="/dashboard/departments"
                                    className='nav-link text-white px-0 align-middle'
                                >
                                    <i className="fs-5 ms-2 bi bi-distribute-vertical"></i>
                                    <span className='ms-2 d-none d-sm-inline'>
                                        Departments
                                    </span>
                                </Link>
                            </li>
                            <li className='w-100 nav-link-container'>
                                <Link
                                    to="/dashboard/profile"
                                    className='nav-link text-white px-0 align-middle'
                                >
                                    <i className="fs-5 ms-2 bi bi-person-circle"></i>
                                    <span className='ms-2 d-none d-sm-inline'>
                                        Profile
                                    </span>
                                </Link>
                            </li>
                            <li className='w-100 nav-link-container mt-4'>
                                <Link

                                    className='nav-link text-white px-0 align-middle'
                                >
                                    <i className="fs-5 ms-2 bi bi-power"></i>
                                    <span className='ms-2 d-none d-sm-inline'>
                                        Logout
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='col p-0 m-0'>
                    <div className='p-3 d-flex justify-content-start shadow'>
                        <h2>Company Management System</h2>
                    </div>
                    
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default Dashboard