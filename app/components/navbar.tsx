"use client"

import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { FaRegCircleUser } from "react-icons/fa6";

const navbar = () => {
    
    const router = useRouter();

    // const handleLogout = () => {
    //     localStorage.clear()
      
    //     setTimeout(() => { 
    //         router.push('/login');
    //     }, 2000)
    // }

  return (
    <div className='flex flex-col w-full h-fit'>
        <div className='border-b border-[#FBFAF5] xl:px-32 py-4 w-full h-fit bg-[#131167] flex flex-row justify-between items-center'>
            <div className="flex flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5]">
                <Image
                    className="rounded-xl px-4"
                    src={'/voca.png'}
                    width={100}
                    height={100}
                    style={{ height: '80%', width: '80%' }}
                    alt="Logo"
                />
            </div>
            <div className='w-[50px] h-[50px]'>
                <FaRegCircleUser className='w-full h-full'/>
            </div>
        </div>
        <div className='h-[20px] bg-[#131167]'></div>
    </div>
  )
}

export default navbar