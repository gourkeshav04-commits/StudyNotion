import React from 'react'
import { useNavigate } from 'react-router-dom'
import frame from '../assets/frame.png'
import signupimg from '../assets/signup.png'
import googleimg from '../assets/google.png'
import toast from 'react-hot-toast'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react'

const Signup = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleRoleChange = (selectedRole) => {
  setRole(selectedRole);
  console.log(formData);

  // Reset form when switching
  setFormData({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  };

  return (
     <div className='flex flex-row justify-evenly min-h-screen gap-[1.5rem] mt-[70px] max-[750px]:flex-col max-[750px]:items-center max-[750px]:mt-10'>

      <div className='flex flex-col max-[750px]:items-center max-[750px]:text-center '>

        <h1 className='text-3xl font-bold mb-4'>Join millions learning code<br></br>with StudyNotion for free</h1>

        <p className='mb-6'>Build skills for today,tommorow and beyond.<br></br>
        <span className='text-teal-500'>Education to future-proof your carrer</span></p>


        <form className='form flex flex-col gap-4' onSubmit={(e) => {
          e.preventDefault();
          const password = document.getElementById('Password').value;
          const confirmPassword = document.getElementById('ConfirmPassword').value;
          if (password !== confirmPassword) {
            toast.error('Passwords do not match!');
             return;
          }
          else{
            navigate('/login'); 
          }
        }}>
          
          <div className='flex flex-row mb-4 w-[300px] h-[50px] bg-gray-800 rounded-full text-xl'>

            <button
              type="button"
              onClick={() => handleRoleChange("student")}
              className={`w-1/2 rounded-full m-[2px] duration-300 text-white 
                ${role === "student" ? "bg-slate-950" : "hover:bg-slate-950"}
              `}
            >
              Student
            </button>
              
            <button
              type="button"
              onClick={() => handleRoleChange("instructor")}
              className={`w-1/2 rounded-full m-[2px] duration-300 text-white 
                ${role === "instructor" ? "bg-slate-950" : "hover:bg-slate-950"}
              `}
            >
              Instructor
            </button>

          </div>

          <div className='flex flex-row gap-4'>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="FirstName" className='text-md font-medium'>First Name <sup className='text-red-500'>*</sup> </label>
              <input
                type="text"
                placeholder='Keshav'
                id='FirstName'
                required                
                className='px-4 py-2 border border-none bg-gray-800 rounded-md'
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor="LastName" className='text-md font-medium'>Last Name <sup className='text-red-500'>*</sup></label>
              <input
                type="text"
                placeholder='Gour'
                id='LastName'
                required                
                className='px-4 py-2 border border-none bg-gray-800 rounded-md'
              />
            </div>
          </div>  
          
          <label htmlFor="Email" className='text-md font-medium'>Email Address <sup className='text-red-500'>*</sup></label>

          <input
            type="email"
            placeholder='gourkeshav@gmail.com'
            id='Email'
            required                
            className='px-4 py-2 border border-none bg-gray-800 rounded-md'
          />

          <div className='flex flex-row gap-4'> 
            <div className='flex flex-col w-1/2'>
              <label htmlFor="Password" className='text-md font-medium'>Create Password <sup className='text-red-500'>*</sup></label>

              <div className="CreatePassword relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="eg. Ke7$1h@v45"
                  id='Password'
                  required                     
                  minLength={6}                   
                  className="px-4 py-2 border border-none bg-gray-800 rounded-md w-full"
                />

                  <button 
                    type='button' 
                    onClick={() => setShowPassword(prev => !prev)} 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>

              </div>
            </div>

            <div className='flex flex-col w-1/2'>
              <label htmlFor="ConfirmPassword" className='text-md font-medium'>Confirm Password <sup className='text-red-500'>*</sup></label>

              <div className="ConfirmPassword relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter Password"
                  id='ConfirmPassword'
                  required                     
                  minLength={6}
                                     
                  className="px-4 py-2 border border-none bg-gray-800 rounded-md w-full"
                />

                <button 
                    type='button' 
                    onClick={()=> setShowConfirmPassword(prev => !prev)} 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>

              </div>
            </div>

          </div>   

          <button
            type="submit"
            className="px-4 py-2 w-full bg-yellow-400 text-black font-semibold rounded-md"
          >
            Sign Up
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
        <img src={signupimg} alt="Signup Illustration" width={400} height={400} loading='lazy' className='absolute top-3 left-3'/>
      </div>

    </div>
  )
}
export default Signup

