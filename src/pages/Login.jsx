import React  from 'react'
import frame from '../assets/frame.png'
import loginimg from '../assets/login.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import googleimg from '../assets/google.png'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react'
import toast from 'react-hot-toast';


const Login = ({setIsLoggedIn}) => {
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  function handleShowPassword() {
    setShowPassword(prev => !prev);
  }
  
  return (
     <div className='flex flex-row justify-evenly min-h-screen  gap-[1.5rem] mt-[70px]  max-[750px]:flex-col max-[750px]:items-center max-[750px]:mt-10'>

      <div className='flex flex-col max-[750px]:items-center max-[750px]:text-center '>

        <h1 className='text-3xl font-bold mb-4'>Welcome Back</h1>

        <p className='mb-6'>Build skills for today,tommorow and beyond.<br></br>
        <span className='text-teal-500'>Education to future-proof your carrer</span></p>

        <form className='form flex flex-col gap-4' onSubmit={(e) => {
          e.preventDefault();
          navigate('/dashboard'); 
          toast.success("Logged In")
          setIsLoggedIn(true);

        }}>  

          <label htmlFor="Email" className='text-md font-medium'>Email Address <sup className='text-red-500'>*</sup></label>

          <input
            type="email"
            placeholder='Enter your Email Id'
            id='Email'
            required                
            className='px-4 py-2 border border-none bg-gray-800 rounded-md'
          />

          <label htmlFor="Password" className='text-md font-medium'>Password <sup className='text-red-500'>*</sup></label>

          <div className="Password-forgot relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Confirm Password"
              id='Password'
              required                     
              minLength={6}                   
              className="px-4 py-2 border border-none bg-gray-800 rounded-md w-full"
            />

            <button 
              type='button' 
              onClick={handleShowPassword} 
              className="absolute right-2 top-1/2 transform -translate-y-5 cursor-pointer">
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>

            <p className='text-xs text-teal-500 cursor-pointer mt-1'><a href="#">Forgot Password</a></p>

          </div>

          <Link to='/signup' className='text-sm text-teal-500 hover:underline mb-4'>
            Don't have an account? Sign Up
          </Link>

          <button
            type="submit"
            className="px-4 py-2 w-full bg-yellow-400 text-black font-semibold rounded-md"
          >
            Log In
          </button>

          <div className='flex items-center gap-2 mt-2 mb-1'>
            <div className='flex-1 border-t border-gray-600'></div>
            <span className='text-gray-500 text-xs px-1'>OR</span>
            <div className='flex-1 border-t border-gray-600'></div>
          </div>                   

          <button
            type="button"
            onClick={() => navigate('/GoogleSignin')}
            className="px-4 py-2 w-full bg-transparent text-white font-semibold rounded-md border border-gray-500 text-xs"
          > <img src={googleimg} alt="Google Logo" className="w-4 h-4 mr-2 inline-block" />
            Sign In with Google
        </button>
          
        </form>

        

      </div>

      <div className ='images relative max-[750px]:hidden'>
        <img src={frame} alt="Frame Illustration" width={400} height={400} loading='lazy'/>
        <img src={loginimg} alt="Login Illustration" width={400} height={400} loading='lazy' className='absolute top-3 left-3'/>
      </div>

    </div>
  )
}

export default Login
