"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import DarkModeSwitcher from '../components/DarkModeSwitcher';
import { addUser } from '../redux/slices/usersSlice';
import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
    
    const [username, setUsername] = useState<string>();
    const [handphone, setHandphone] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();

    const dispatch = useDispatch();
    const router = useRouter()

    const handleAddUser = (e: any) => {
      e.preventDefault();
  
      if (!username && !handphone && !password && !confirmPassword) return;
  
      const newUser = {
        id: Date.now().toString(),
        username,
        handphone,
        password,
        confirmPassword,
      };
  
      dispatch(addUser(newUser));

      toast.success('Register berhasil!', {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      
      setTimeout(() => { 
        router.push('/login')
      }, 2000)
    };

    return (
        <div className=''>
            <div className="h-[100vh] shadow-default">
                <div className="h-[100vh] flex flex-wrap items-center">

                    <div className="hidden xl:flex absolute top-[100px] left-[100px] flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5]">
                        <Image
                            className="rounded-xl px-4 mb-16"
                            src={'/voca.png'}
                            width={200}
                            height={200}
                            style={{ height: '80%', width: '80%' }}
                            alt="Logo"
                        />
                    </div>

                    <div className="w-full h-full flex flex-col justify-center items-center bg-[#FBFAF5] dark:bg-[#1c1c1c]">
                        
                        <div className='mb-4 w-full flex justify-end px-4 xl:px-32'>
                            <DarkModeSwitcher/>
                        </div>
                        <div className="w-full lg:w-1/2 p-4 sm:p-12.5 xl:p-0 xl:px-32">
                            <h1 className="w-full flex justify-start items-center mb-4 text-3xl xl:text-6xl font-bold text-black dark:text-[#FBFAF5] sm:text-title-xl2">
                                Daftarkan Akun
                            </h1>
                            <h1 className="w-full flex justify-start items-center mb-4 text-md xl:text-xl text-[#666666] dark:text-[#FBFAF5] sm:text-title-xl2">
                                Daftar akun anda  dengan mengisi form dibawah
                            </h1>

                            <form onSubmit={handleAddUser} className='text-[#1c1c1c] dark:text-[#FBFAF5]'>
                                <div className="mb-2">
                                    <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5]">
                                        Username
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Ketik nama anda disini..."
                                            className="w-full rounded-full border border-[#494949] bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>
                                
                                <div className="mb-2">
                                    <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5]">
                                        Nomor Handphone
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={handphone}
                                            onChange={(e) => setHandphone(e.target.value)}
                                            placeholder="Nomor handphone anda"
                                            className="w-full rounded-full border border-[#494949] bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5]">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Masukkan password anda"
                                            className="w-full rounded-full border border-[#494949] bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5]">
                                        Konfirmasi Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Masukkan kembali password anda"
                                            className="w-full rounded-full border border-[#494949] bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <button
                                        onClick={handleAddUser}
                                        className="w-full text-center font-bold cursor-pointer rounded-full bg-[#E5E7FD] text-[#131167] p-4 transition duration-300 hover:bg-[#131167] hover:text-[#E5E7FD]"
                                    >
                                        Daftar Sekarang
                                    </button>
                                </div>

                                <div className="mt-6 text-center">
                                    <Link href="/login" className='text-[#1c1c1c] dark:text-[#FBFAF5] w-full flex justify-center align-items-center text-center gap-2'>
                                        <p className='font-semibold'>Sudah punya akun?</p>
                                        <p className="font-semibold text-[#131167] dark:text-[#848eff]">Masuk Sekarang</p>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      
            <ToastContainer />
        </div>
    )
}

export default page