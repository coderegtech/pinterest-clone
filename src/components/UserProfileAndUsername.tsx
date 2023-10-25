"use client"
import Profile from "@/assets/me.jpeg"
import Image from "next/image"

interface CurrentUserProps {
    imgUrl: string,
    username: string
}

function UserProfileAndUsername(user: CurrentUserProps) {
    return (
        <div className="flex gap-3 items-center">
            <Image
                src={Profile}
                alt=""
                width={40}
                height={40}
                className="rounded-3xl cursor-pointer relative z-0" />
            <p className="font-bold">CoderegTech</p>
        </div>
    )
}

export default UserProfileAndUsername