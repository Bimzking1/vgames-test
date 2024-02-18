"use client"

import Image from "next/image";
import Link from 'next/link';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateUser } from './redux/slices/usersSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const router = useRouter()
  const users = useSelector((state: any) => state.users);
  const [user, setUser] = useState([])
  const dispatch = useDispatch();
  const [initialized, setInitialized] = useState(false);
  
  const [loggeduser, setLoggedUser] = useState<any>();
  const [id, setId] = useState<any>();
  const [username, setUsername] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [handphone, setHandphone] = useState<any>();
  const [confirmPassword, setConfirmPassword] = useState<any>();

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers && !initialized) {
      setUser(JSON.parse(storedUsers));
      setInitialized(true);
    }
  }, [initialized]);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem('users', JSON.stringify(users));
    }
    if (users.length < 2) {
      setId(localStorage.getItem('id'))
      setUsername(localStorage.getItem('username'))
      setHandphone(localStorage.getItem('handphone'))
      setPassword(localStorage.getItem('password'))
      setConfirmPassword(localStorage.getItem('confirmPassword'))
    }
  }, [initialized, users]);

  useEffect(() => {
    if (localStorage.getItem("username") == null) {
      router.push('/login')
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < users.length; i++) {
      if (users.length > 1){
        if ((users[i].username === (localStorage.getItem("username"))) && (users[i].password === (localStorage.getItem("password")))) {
          setId(users[i].id)
          setUsername(users[i].username)
          setPassword(users[i].password)
          setHandphone(users[i].handphone)
          setConfirmPassword(users[i].confirmPassword)
          localStorage.setItem("id", users[i].id)
          localStorage.setItem("handphone", users[i].handphone)
          localStorage.setItem("confirmPassword", users[i].confirmPassword)
        }
      }
    }
  }, [])

  const handleEditUser = (e: any) => {
    e.preventDefault();

    if (!username && !handphone && !password && !confirmPassword) return;

    const newUser = {
      id: id,
      username: username,
      handphone: handphone,
      password: password,
      confirmPassword: confirmPassword,
    };

    localStorage.setItem("id", id)
    localStorage.setItem("username", username)
    localStorage.setItem("handphone", handphone)
    localStorage.setItem("password", password)
    localStorage.setItem("confirmPassword", confirmPassword)

    dispatch(updateUser(newUser));

    toast.success('Data user berhasil diubah!', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
  };

  const handleLogout = () => {
    localStorage.clear()

    toast.success('Logout berhasil!', {
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

  console.log('users: ', users)
  console.log('localstorage username: ', username)
  console.log('localstorage password: ', password)
  console.log('loggedUser: ', loggeduser)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>

      {/* Content */}
      <div className="px-4 pb-4 bg-[#FBFAF5] dark:bg-[#1c1c1c] w-full flex flex-col justify-center items-center">

        {/* Jumbotron */}
        <div className="px-4 w-full xl:w-[1280px] bg-[#131167] dark:bg-[#2e2e2e] rounded-2xl my-8 py-8 flex flex-col justify-center items-center">
          <div className="text-5xl font-bold mb-2">
            LOREM
          </div>
          <div className="text-center">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          </div>
          <div className="text-center">
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
          </div>
        </div>

        {/* Profile Header */}
        <div className="w-full xl:w-[1280px] flex justify-between xl:px-8">
          <div className="flex justify-center items-center gap-4">
            <div className="w-[40px] h-[40px]">
              <FaRegCircleUser className='w-full h-full text-[#1c1c1c] dark:text-[#FBFAF5]'/>
            </div>
            <div className="text-xl font-semibold text-[#1c1c1c] dark:text-[#FBFAF5]">
              {username}
            </div>
          </div>

          <div className="hidden lg:flex bg-[#E3E6FD] px-6 py-2 text-[#321AC7] font-semibold rounded-full">
            Edit Profile
          </div>
        </div>

        {/* Profile Content */}
        <div className="w-full xl:w-[1280px] mt-8 flex xl:mb-4">

          {/* Sidebar */}
          <div className="hidden w-1/4 mr-[50px] pt-8 h-fit xl:flex flex-col">
            <div className="pl-4 flex justify-start items-center gap-4 text-[#1c1c1c] dark:text-[#FBFAF5]">
              <div className="w-[30px] h-[30px]">
                <FaRegCircleUser className="w-full h-full"/>
              </div>
              <div className="">
                Profile
              </div>
            </div>
            <hr className="my-8 text-[#1c1c1c]"/>
            <button onClick={handleLogout} className="pl-4 flex justify-start items-center gap-4">
              <div className="w-[30px] h-[30px]">
                <IoLogOut className="w-full h-full text-[#DC2626]"/>
              </div>
              <div className="text-[#1c1c1c] dark:text-[#FBFAF5]">
                Logout
              </div>
            </button>
          </div>

          {/* Form */}
          <div className="w-full xl:w-3/4 xl:shadow-2xl xl:p-8 xl:rounded-xl">
            <div className="text-2xl font-bold text-[#1c1c1c] dark:text-[#FBFAF5]">
              Edit Profile
            </div>
            <hr className="my-4"/>

            <form onSubmit={handleEditUser} className='text-[#1c1c1c] dark:text-[#FBFAF5]'>
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

                <div className="">
                  <div
                      onClick={handleEditUser}
                      className="w-full lg:w-1/4 text-center font-bold cursor-pointer rounded-full bg-[#E5E7FD] text-[#131167] p-4 transition duration-300 hover:bg-[#131167] hover:text-[#E5E7FD]"
                  >
                      Edit Profile
                  </div>
                </div>
            </form>

          </div>
        </div>
      </div>

      <ToastContainer />

      <Footer/>
    </div>
  );
}
