import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import Link from 'next/link';

const page = () =>   {
    return (
        <>
            <div className=" *:m-0 p-0 box-border flex justify-center items-center min-h-screen
      bg-[url('https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg')] bg-no-repeat bg-cover bg-center">


                <div className='wrapper w-96 bg-transparent border-2 border-solid border-white backdrop-blur-md shadow-lg	  text-white rounded-xl py-8 px-12'>
                    <form action="">
                        <h1 className=' text-3xl font-semibold text-center'>
                            Register
                        </h1>
                        <div className="input-box relative w-full h-14 mt-10 ">
                            <input type="text" placeholder='Your Email ' className=' w-full h-full bg-transparent outline-none border-solid border-2 border-white rounded-full placeholder-white text-sm font-light py-5 px-6 pr-10' required />
                            <FaUser className=' absolute right-5 top-5 ' />

                        </div>
                        <div className="input-box relative w-full h-14 mt-4 ">
                            <input type="Password" placeholder='Your Password' className=' w-full h-full bg-transparent outline-none border-solid border-2 border-white rounded-full placeholder-white text-sm font-light py-5 px-6 pr-10 ' required />
                            <FaLock className=' absolute right-5 top-5' />
                        </div>
                        <div className="input-box relative w-full h-14 mt-4 ">
                            <input type="Password" placeholder='Confirm Password' className=' w-full h-full bg-transparent outline-none border-solid border-2 border-white rounded-full placeholder-white text-sm font-light py-5 px-6 pr-10 ' required />
                            <FaLock className=' absolute right-5 top-5' />
                        </div>


                        <button type=' submit' className=' bg-white  w-full h-11 border-none outline-none rounded-full shadow-lg cursor-pointer text-lg   text-gray-900 font-semibold my-4 '>
                            Register
                        </button>
                        <div className="register-link text-sm items-center">
                            <p className=' text-center'>Already Create an Account?
                                <Link href="../../components/Login" className='mx-1  font-semibold hover:underline text-blue-700	'>
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default page