"use client"

import { BiSolidChevronDown } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { PiBookmarksSimpleBold, PiUploadSimpleBold } from "react-icons/pi"

function PinItemHeader() {
    return (
        <div className="flex w-full justify-between items-center ">
            <div className="flex  items-center gap-2">
                <div className="text-xl md:text-2xl text-black p-3 rounded-full hover:bg-neutral-200">
                    <BsThreeDots />
                </div>
                <div className="text-xl md:text-2xl text-black p-3 rounded-full hover:bg-neutral-200">
                    <PiUploadSimpleBold />
                </div>
                <div className="text-xl md:text-2xl text-black p-3 rounded-full hover:bg-neutral-200">
                    <PiBookmarksSimpleBold />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <div className="px-3 flex gap-2 items-center">
                    <p className=" font-bold text-base">My Saves</p>
                    <span><BiSolidChevronDown /></span>
                </div>
                <div className="bg-red-600 font-bold py-3 px-4 rounded-3xl">
                    <p className="text-white text-base">Save</p>
                </div>
            </div>


        </div>
    )
}

export default PinItemHeader