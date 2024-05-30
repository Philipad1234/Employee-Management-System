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


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/adminlogin' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employees' element={<Employees />}></Route>
        <Route path='/dashboard/departments' element={<Departments />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>
        <Route path='/dashboard/add_department' element={<AddDepartment />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
