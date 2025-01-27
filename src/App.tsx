
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Register from './pages/Register'
import UserList from './pages/UserList'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <div className='container mx-auto px-8 py-12'></div>
        <Routes location={''} >
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/userList" element={<UserList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
