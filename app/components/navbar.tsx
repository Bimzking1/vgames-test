"use client"

import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { FaRegCircleUser } from "react-icons/fa6";
import DarkModeSwitcher from '../components/DarkModeSwitcher';

const navbar = () => {
    
    const router = useRouter();

    // const handleLogout = () => {
    //     localStorage.clear()
      
    //     setTimeout(() => { 
    //         router.push('/login');
    //     }, 2000)
    // }

  return (
    <div className='w-full flex flex-col items-center justify-center bg-[#131167] dark:bg-[#2e2e2e] z-50'>
        <div className='px-4 w-full flex justify-center items-center border-b border-[#FBFAF5] py-4 h-fit bg-[#131167] dark:bg-[#2e2e2e]'>
            <div className='w-full xl:w-[1280px] flex flex-row justify-between items-center'>
                <div className="flex flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5]">
                    <Image
                        className="rounded-xl"
                        src={'/voca.png'}
                        width={100}
                        height={100}
                        style={{ height: '80%', width: '80%' }}
                        alt="Logo"
                    />
                </div>
                <div className='flex justify-center items-center gap-8'>
                    <div className='w-full flex justify-end'>
                        <DarkModeSwitcher/>
                    </div>
                    <div className='w-[50px] h-[50px]'>
                        <FaRegCircleUser className='w-full h-full'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[15px] bg-[#131167]'></div>
    </div>
  )
}

export default navbar