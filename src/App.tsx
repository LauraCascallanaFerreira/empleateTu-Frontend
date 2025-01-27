
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
        <Routes location={''} >
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/" element={<Register/>}/>
          <Route path="/" element={<Profile/>}/>
          <Route path="/" element={<UserList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
