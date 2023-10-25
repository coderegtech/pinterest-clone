"use client"

import logo from "@/assets/logo.png";
import profile from "@/assets/me.jpeg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidChevronDown } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";


const Header = () => {
  const pathName = usePathname()

  return (
    <div className='p-4 bg-white w-full flex gap-1 items-center fixed top-0 left-0 z-50'>
      <Link href="/" className="p-2 shrink-0">
        <Image src={logo} width={30} height={30} alt="" />
      </Link>
      <Link href="/" className={`${pathName === '/' ? 'bg-black text-white' : 'bg-none text-black'} font-bold  py-3 px-4 rounded-3xl`}>
        Home
      </Link>
      <Link href="/pin-builder" className="hidden px-3 md:flex gap-2 items-center cursor-pointer">
        <p className=" font-bold text-base">Create</p>
      </Link>

      {/* searchbar */}
      <input className=" focus:outline-blue-400 focus:outline-10 w-full 
      rounded-3xl p-3 border bg-neutral-200" placeholder="Search" />

      <div className="text-xl md:text-2xl text-gray-600 p-3 rounded-full hover:bg-neutral-200">
        <FaBell />
      </div>

      <div className="text-xl md:text-2xl text-gray-600 p-3 rounded-full hover:bg-neutral-200">
        <BsFillChatDotsFill />
      </div>

      <div className=" flex gap-1 items-center">
        <div className="p-2 w-12 h-12 rounded-full hover:bg-neutral-200">
          <Image className="w-full h-full rounded-full object-cover" src={profile} alt="" />
        </div>
        <div className="text-xl text-gray-600 p-1 rounded-full hover:bg-neutral-200">
          <BiSolidChevronDown />
        </div>
      </div>
    </div>
  )
}

export default Header