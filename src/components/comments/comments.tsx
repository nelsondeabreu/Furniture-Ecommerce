import React from 'react'
import Image from "next/image";
import { Star , StarHalf } from "lucide-react";

interface PropsComments{
    img1: string
    username: string
    comment: string
}

export const Comments: React.FC<PropsComments> =({img1 , username , comment})=>{
    return(
        <div className="flex flex-col p-4 gap-4 justity-center items-left bg-[#FFFFFF] w-[25.5rem]">
            <svg width="56" height="39" viewBox="0 0 56 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2716 19.2214L15.4365 18.3857C17.8562 18.3857 19.9966 19.2214 21.8579 
                20.8929C23.8122 22.4714 24.7893 
                24.8393 24.7893 27.9964C24.7893 31.0607 23.7656 33.6607 21.7183 35.7964C19.6709 
                37.9321 16.786 39 13.0635 39C9.43401 39 6.40947 37.6071 3.98985 34.8214C1.66328 
                32.0357 0.5 28.4607 0.5 24.0964C0.5 19.6393 2.17513 15.2286 5.52538 10.8643C8.9687 
                6.49999 13.8545 2.87857 20.1827 0L21.1599 2.36785C12.412 7.19642 8.03807 12.0714 
                8.03807 16.9929C8.03807 18.4786 8.78257 
                19.2214 10.2716 19.2214ZM40.9822 19.2214L46.1472 18.3857C48.5668 
                18.3857 50.7073 19.2214 52.5685 20.8929C54.5228 22.4714 55.5 
                24.8393 55.5 27.9964C55.5 31.0607 54.4763 33.6607 52.4289 
                35.7964C50.3815 37.9321 47.4966 39 43.7741 39C40.1447 39 37.1201 
                37.6071 34.7005 34.8214C32.3739 32.0357 31.2107 28.4607 31.2107 
                24.0964C31.2107 19.6393 32.8858 15.2286 36.236 10.8643C39.6794 
                6.49999 44.5651 2.87857 50.8934 0L51.8706 2.36785C43.1227 
                7.19642 38.7487 12.0714 38.7487 16.9929C38.7487 18.4786 
                39.4932 19.2214 40.9822 19.2214Z" fill="black"/>
            </svg>

            <p className="text-sm text-[#505050] flex-wrap w-[100%]">
                {
                    comment
                }
            </p>
            <div className="flex justify-between items-center w-[100%]">
                <ul className="flex justify-center items-center gap-2">
                    <li className="w-10 h-10 relative ">
                        <Image src={img1} className="rounded-full" alt="image" layout="fill" objectFit="cover"/>
                    </li>
                    <li className="text-sm font-semibold">{username}</li>
                </ul>

                <ul className="flex justify-center items-center gap-2 text-[#F2A156]">
                    <li><Star/></li>
                    <li><Star/></li>
                    <li><Star/></li>
                    <li><Star/></li>
                    <li><StarHalf/></li>
                </ul>
            </div>
        </div>
    )
}