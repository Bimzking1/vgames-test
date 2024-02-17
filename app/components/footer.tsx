import React from 'react'
import Image from "next/image";
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';

const footer = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#131167] z-50'>
      <div className='bg-[#131167] w-full xl:w-[1280px] text-gray-100 text-sm text-center md:text-left md:py-8 md:px-8 pb-8'>
        <div className='w-full md:flex'>

            <div className='flex justify-center items-center md:items-start flex-col w-full md:w-1/4 py-2 pt-8 md:pt-2 px-2 pl-4 lg:w-2/5'>
                <a href="#home" className='w-4/5 flex flex-col lg:flex-row justify-start items-center'>
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
                    <div className='pl-4 text-4xl font-black text-white rounded-full py-2 px-4 md:px-4 mb-2 md:mb-0  hover:text-[#16C829] duration-500'>
                        Vocagame
                    </div>
                </a>
                <div className='text-lg md:text-sm my-8 px-4 md:px-0 lg:w-4/5'>
                    Vocagame adalah perusahaan teknologi
                    terbesar di Indonesia. Kami memiliki misi untuk membantu
                    memnuhi kepuasan dari pelanggan.
                </div>
                <div className='flex justify-center md:justify-start py-4 gap-4'>
                    <a href='https://www.instagram.com/' target="_blank" className='w-[40px] md:w-[30px]'>
                        <AiOutlineInstagram style={{ width: '100%', height: '100%' }}/>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" className='w-[40px] md:w-[30px]'>
                        <BsFacebook style={{color: "#ffffff", width: '100%', height: '100%'}} />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" className='w-[40px] md:w-[30px]'>
                        <AiOutlineYoutube style={{color: "#ffffff", width: '100%', height: '100%' }} />
                    </a>
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2'>
                <div className='font-bold text-xl mb-2'>
                    Layanan
                </div>
                <div className='md:py-1'>
                    Voucher Games
                </div>
                <div className='md:py-1'>
                    Partner Bisnis
                </div>
                <div className='md:py-1'>
                    Go International
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2'>
                <div className='font-bold text-xl mb-2'>
                    Temukan
                </div>
                <div className='md:py-1'>
                    Diskon Terbaik
                </div>
                <div className='md:py-1'>
                    Produk Untuk Member
                </div>
                <div className='md:py-1'>
                    Penawaran Spesial
                </div>
                <div className='md:py-1'>
                    Komunitas
                </div>
                <div className='md:py-1'>
                    Game Terbaru
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2'>
                <div className='font-bold text-xl mb-2'>
                    Produk
                </div>
                <div className='md:py-1'>
                    Mobile Legend
                </div>
                <div className='md:py-1'>
                    Valorant
                </div>
                <div className='md:py-1'>
                    Hago
                </div>
                <div className='md:py-1'>
                    Steam
                </div>
                <div className='md:py-1'>
                    Epic Games
                </div>
            </div>

        </div>
        <hr className='mt-8'/>
        <div className='text-center md:flex gap-8 text-xs mt-8 lg:px-4'>
            <div className='mb-2'>
                © Vocagame - Bimo 2024. All Rights Reserved
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                About Us
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                User Agreement
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Privacy Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Terms of Services
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Cookie Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Copyright Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Brand Policy
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer