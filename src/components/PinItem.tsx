"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import UserProfileAndUsername from "./UserProfileAndUsername";
import { DataType } from "./data";



function PinItem({ text, image }: DataType) {
    const router = useRouter()
    return (
        <>
            <div
                className="relative 
                before:absolute
                before:h-full before:w-full
                before:z-10
                before:opacity-50
                cursor-pointer" onClick={() => router.push(`/pin/${5261626537}`)}>
                <Image
                    src={image}
                    alt=""
                    width={500}
                    height={500}
                    className="rounded-2xl 
     cursor-pointer relative z-0"
                />
                <div>
                    <h2 className="font-bold text-base mb-1 mt-2" >
                        {text.substring(0, 30)}...
                    </h2>

                    <UserProfileAndUsername imgUrl="" username="" />
                </div>

            </div>


        </>
    );
}

export default PinItem;
