"use client"

import Profile from "@/assets/me.jpeg"
import Image from 'next/image'
import { BiSolidChevronDown } from 'react-icons/bi'
import { BsSuitHeart } from 'react-icons/bs'

function Comments() {
    return (
        <div className=''>

            <div className="mt-12 flex gap-2 items-center font-bold text-xl">
                <p>Comments</p>
                <span><BiSolidChevronDown /></span>
            </div>

            <div className='px-5 md:px-10 py-3 w-full absolute left-0 bottom-0 bg-white   border-t border-black/10'>
                <div className='w-full flex justify-between items-center'>
                    <h2 className='text-xl font-bold text-black font-sans'>2 Comments</h2>
                    <span className="text-2xl"><BsSuitHeart /></span>
                </div>

                <div className="py-5 flex gap-3  items-center">
                    <Image src={Profile}
                        alt=""
                        width={50}
                        height={50}
                        className="rounded-3xl cursor-pointer relative z-0" />

                    <input className=" focus:outline-blue-400 focus:outline-10 w-full 
      rounded-3xl p-3 border bg-neutral-200" placeholder="Add a comment" />

                </div>

            </div>

        </div>
    )
}

export default Comments