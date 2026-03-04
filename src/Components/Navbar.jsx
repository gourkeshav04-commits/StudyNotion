import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';

const Navbar = (props) => {
  let isloggedIn = props.isloggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-evenly items-center p-4 bg-slate-9540 text-white">
      
      <Link to="/"><img src={logo} alt="Logo" width={160} height={32} loading='lazy'/></Link>

      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>

        <div className="flex space-x-4 mr-6">

          { !isloggedIn && 
          <Link to="/Login">
            <button className="px-4 py-2 border border-none rounded-md  bg-slate-900 hover:text-gray-300">
                 Login
            </button>
          </Link>
          } 

         { !isloggedIn &&
          <Link to= "/Signup">
            <button className="px-4 py-2 border border-none rounded-md  bg-slate-900 hover:text-gray-300">
                SignUp
            </button>
          </Link>

         }
         { isloggedIn && 
         <Link to="/">
          <button onClick={() =>{
            setIsLoggedIn(false);
            toast.success("Logged Out")
          }} className="px-4 py-2 border border-none rounded-md bg-slate-900 hover:text-gray-300">
              LogOut
          </button>
         </Link>
         }

         { isloggedIn &&
          <Link to= "/Dashboard">
            <button onClick={() =>{
              setIsLoggedIn(true);

            }}
             className="px-4 py-2 border border-none rounded-md  bg-slate-900 hover:text-gray-300">
                Dashboard
            </button>
          </Link>

         } 

    

        </div>

    </div>
  )
}

export default Navbar
