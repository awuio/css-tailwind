import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className=" *:m-0 p-0 box-border flex justify-center items-center min-h-screen
      bg-[url('https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg')] bg-no-repeat bg-cover bg-center">


        <div className='wrapper w-96 bg-transparent border-2 border-solid border-white backdrop-blur-md shadow-lg	  text-white rounded-xl py-8 px-12'>
          <form action="">
            <h1 className=' text-3xl font-semibold text-center'>
              Login
            </h1>
            <div className="input-box relative w-full h-14 mt-10 ">
              <input type="text" placeholder='Your Email ' className=' w-full h-full bg-transparent outline-none border-solid border-2 border-white rounded-full placeholder-white text-sm font-normal py-5 px-6 pr-10' required />
              <FaUser className=' absolute right-5 top-5 ' />

            </div>
            <div className="input-box relative w-full h-14 mt-4 ">
              <input type="Password" placeholder='Your Password' className=' w-full h-full bg-transparent outline-none border-solid border-2 border-white rounded-full placeholder-white text-sm font-normal py-5 px-6 pr-10 ' required />
              <FaLock className=' absolute right-5 top-5' />
            </div>

            <div className="remember-forgot flex justify-between text-sm mt-3">
              <label><input type="checkbox" className=' accent-white mr-0.5' />Remember me</label>
              <a href="#" className=' hover:underline'>Forgot Password?</a>
            </div>

            <button type=' submit' className=' bg-white  w-full h-11 border-none outline-none rounded-full shadow-lg cursor-pointer text-lg   text-gray-900 font-semibold my-5'>
              Login
            </button>
            <div className="register-link text-sm items-center mb-4">
              <p className=' text-center'>Don't have an account?
                <a href="../components/Register" className='mx-1  font-semi hover:underline text-blue-600'>
                  Register 
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default page