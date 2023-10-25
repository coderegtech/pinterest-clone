"use client"

import Profile from "@/assets/me.jpeg"
import Comments from "@/components/Comments"
import PinItemHeader from "@/components/PinItemHeader"
import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
interface ParamType {
    pinId: string
}

function Pin(params: ParamType) {
    const id = params.pinId

    return (
        <div className=" w-full p-8">
            <Link href="/" className="hidden md:block absolute left-12 text-xl p-3 rounded-full bg-white"><FaArrowLeft /></Link>
            <div className=" max-w-5xl mx-auto w-full h-full md:h-screen shadow-xl rounded-3xl md:flex-row flex flex-col overflow-hidden ">
                <div className="w-full md:w-1/2 h-[50vh] bg-white">
                    <Image width={100} height={100} className="w-full object-cover" src="https://i.pinimg.com/564x/4f/cc/f3/4fccf32540cb345c377e1936aaeda57d.jpg" alt="" />
                </div>
                <div className="relative w-full md:w-1/2 items-center bg-white p-5  md:p-10 h-[80vh] md:h-full overflow-y-auto">
                    <PinItemHeader />


                    <div className="py-3">
                        <h2 className="text-3xl font-bold">Lorem ipsum dolor sit amet consectetur.</h2>

                        <p className="text-base py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi magnam veniam debitis, deserunt illo.  </p>
                    </div>

                    <div className="py-3 flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <Image
                                src={Profile}
                                alt=""
                                width={40}
                                height={40}
                                className="rounded-3xl cursor-pointer relative z-0" />
                            <span className="leading-3">
                                <p className="font-semibold text-base">CoderegTech</p>
                                <span className="text-sm">2.6k followers</span>
                            </span>
                        </div>

                        <div className="bg-neutral-200 font-bold py-3 px-4 rounded-3xl">
                            <p className="text-black text-base">Follow</p>
                        </div>
                    </div>

                    <Comments />


                </div>
            </div>






        </div>
    )
}

export default Pin