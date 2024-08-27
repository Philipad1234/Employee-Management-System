import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Employees from './components/Employees'
import Departments from './components/Departments'
import Profile from './components/Profile'
import AddDepartment from './components/AddDepartment'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'
import Landing from './components/Landing'
import EmployeeLogin from './components/EmployeeLogin'


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/landing' element={<Landing />}></Route>
        <Route path='/adminlogin' element={<Login />}></Route>
        <Route path='/employeelogin' element={<EmployeeLogin />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employees' element={<Employees />}></Route>
        <Route path='/dashboard/departments' element={<Departments />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>
        <Route path='/dashboard/add_department' element={<AddDepartment />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/edit_employee/:_id' element={<EditEmployee />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
