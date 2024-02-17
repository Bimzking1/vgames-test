import Image from "next/image";
import Link from 'next/link';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

export default function Home() {
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
              No Name
            </div>
          </div>

          <div className="hidden lg:flex bg-[#E3E6FD] px-6 py-2 text-[#321AC7] font-semibold rounded-full">
            Edit Profile
          </div>
        </div>

        {/* Profile Content */}
        <div className="w-full xl:w-[1280px] mt-8 flex xl:mb-4">

          {/* Sidebar */}
          <div className="hidden w-1/4 mr-[50px] h-fit xl:flex flex-col">
            <div className="pl-4 flex justify-start items-center gap-4 text-[#1c1c1c] dark:text-[#FBFAF5]">
              <div className="w-[30px] h-[30px]">
                <FaRegCircleUser className="w-full h-full"/>
              </div>
              <div className="">
                Profile
              </div>
            </div>
            <hr className="my-8 text-[#1c1c1c]"/>
            <div className="pl-4 flex justify-start items-center gap-4">
              <div className="w-[30px] h-[30px]">
                <IoLogOut className="w-full h-full text-[#DC2626]"/>
              </div>
              <div className="text-[#1c1c1c] dark:text-[#FBFAF5]">
                Logout
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full xl:w-3/4 xl:shadow-2xl xl:p-8 xl:rounded-xl">
            <div className="text-2xl font-bold text-[#1c1c1c] dark:text-[#FBFAF5]">
              Edit Profile
            </div>
            <hr className="my-4"/>

            <form className='text-[#1c1c1c] dark:text-[#FBFAF5]'>
                <div className="mb-2">
                    <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5]">
                        Username
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
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
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
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
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
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
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            placeholder="Masukkan kembali password anda"
                            className="w-full rounded-full border border-[#494949] bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                </div>

                <div className="">
                  <div
                      // onClick={handleSubmit}
                      className="w-full lg:w-1/4 text-center font-bold cursor-pointer rounded-full bg-[#E5E7FD] text-[#131167] p-4 transition duration-300 hover:bg-[#131167] hover:text-[#E5E7FD]"
                  >
                      Edit Profile
                  </div>
                </div>
            </form>

          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
