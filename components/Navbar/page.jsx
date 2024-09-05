import React from 'react'
import Link from 'next/link'

function Page() {
    return (
        <nav>
            <div className=" bg-black">
                <div className=" max-w-7xl mx-auto px-4 ">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <div className=" flex-shrink-0">
                                <Link href='/' className=' text-white text-2xl font-semibold ml-3' >
                                    Logo
                                </Link>
                            </div>
                        </div>
                        <div className=" hidden md:block">

                            <div className='ml-4 flex items-center space-x-4'>
                                <Link href='../../components/Login' className=' text-white  hover:bg-white hover:text-black p-2 px-3 rounded-md font-semibold mr-4'>
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Page