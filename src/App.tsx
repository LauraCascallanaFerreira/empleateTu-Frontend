import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import UserList from './pages/UserList'
import Navbar from './components/Navbar'
import OfferList from './pages/OfferList'
import OfferDetail from './pages/OfferDetail'
import OfferForm from './pages/OfferForm'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Toaster position='top-center' reverseOrder={false}/>
      <div className='container mx-auto px-8 py-12'></div>
        <Routes location={''} >
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/userList" element={<UserList/>}/>
          <Route path="/offers" element={<OfferList/>}/>
          <Route path="/offers/:id" element={<OfferDetail/>}/>
          <Route path="/offers/new" element={<OfferForm/>}/>
          <Route path="/offers/edit/:id" element={<OfferForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
