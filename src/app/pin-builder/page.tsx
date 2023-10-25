import UserProfileAndUsername from "@/components/UserProfileAndUsername"
import { BiSolidChevronDown } from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { HiArrowCircleUp } from "react-icons/hi"

function PinBuilder() {
    return (
        <div className="w-full h-screen bg-neutral-200 p-10">
            <div className="mt-5 max-w-4xl h-full mx-auto rounded-2xl bg-white py-10 px-14">
                <div className="w-full flex justify-between items-center pb-3">
                    <div className="text-xl md:text-2xl text-black p-3 rounded-full hover:bg-neutral-200">
                        <BsThreeDots />
                    </div>
                    <div className="flex items-center bg-neutral-200 rounded-lg ">
                        <div className="px-3 flex gap-2 items-center">
                            <p className=" font-semibold text-sm">My Saves</p>
                            <span><BiSolidChevronDown /></span>
                        </div>
                        <div className="bg-red-600 font-bold px-4 py-2 rounded-tr-lg rounded-br-lg">
                            <p className="text-white text-base">Save</p>
                        </div>
                    </div>
                </div>


                <div className="flex justify-between gap-5">
                    <div className="max-w-[280px] w-full h-[30rem] bg-neutral-100 rounded-xl p-4 overflow-hidden">
                        <div className="flex items-center justify-center flex-col gap-5 relative w-full h-full border-dashed border-2 border-neutral-300 rounded-xl p-5">
                            <span className="text-3xl text-neutral-500"><HiArrowCircleUp /></span>
                            <p className="font-semibold text-sm text-center">Drag and drop or click to <br></br>upload</p>

                        </div>
                    </div>

                    <div className="p-5 flex flex-col justify-between">
                        <div className='w-[100%]'>
                            <input type="text" placeholder='Add your title'
                                className='text-[35px] outline-none font-bold w-full
        border-b-[2px] border-gray-400 placeholder-gray-400'/>
                            <h2 className='text-[12px] mb-8 w-full  text-gray-400'>The first 40 Charaters are
                                what usually show up in feeds</h2>

                            <UserProfileAndUsername imgUrl="" username="" />

                            <textarea
                                placeholder='Tell everyone what your pin is about'
                                className=' outline-none  w-full mt-8 pb-4 text-[14px]
        border-b-[2px] border-gray-400 placeholder-gray-400'/>

                        </div>

                        <div>
                            <input type="text"
                                placeholder='Add a Destination Link'
                                className=' outline-none  w-full  pb-4 mt-[90px] border-b-[2px] border-gray-400 placeholder-gray-400' />
                        </div>
                    </div>

                </div>


            </div>

        </div >
    )
}

export default PinBuilder