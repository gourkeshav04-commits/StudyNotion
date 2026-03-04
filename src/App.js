import React from 'react'
import {Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import GoogleSignInEmail from "./Components/GoogleSignin";
import GooglePassword from "./Components/Googlepassword";
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {

  const navigate = useNavigate();

    useEffect(() => {
    const isRefresh = !sessionStorage.getItem("visited");
    if (isRefresh) {
    sessionStorage.setItem("visited", "true");
    navigate("/");
    }
    },[navigate]);

  const [isloggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className='App bg-slate-950 min-h-screen text-white'>

      <Navbar isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path = "/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Home />} />
        <Route path="/GoogleSignin" element={<GoogleSignInEmail />} />
         <Route path="/GooglePassword" element={<GooglePassword />} />
      </Routes>

      

    </div>
  )
}

export default App
