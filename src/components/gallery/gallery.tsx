import React from "react";
import Image from "next/image";

interface PropsImage{
    img1: string
    img2: string
    img3: string
    img4: string
    img5: string
    img6: string
}

export const Gallery: React.FC<PropsImage> =({img1 , img2 , img3 , img4 , img5 , img6})=>{
    return(
        <div className="flex flex-col gap-4 w-[100%] px-16">
            <ul className="flex w-[100%] gap-4">
                <li className="w-[30%]">
                    <div className="w-[100%] h-[15rem] relative">
                        <Image src={img1} alt="image" layout="fill" objectFit="cover"/>
                    </div>
                </li>
                <li className="w-[30%]">
                    <div className="w-[100%] h-[15rem] relative">
                        <Image src={img2} alt="image" layout="fill" objectFit="cover"/>
                    </div>
                </li>
                <li className="w-[40%]">
                    <div className="w-[100%] h-[15rem] relative">
                        <Image src={img3} alt="image" layout="fill" objectFit="cover"/>
                    </div>
                </li>
            </ul>

            <ul className="flex justify-center items-center gap-4">
                <li className="w-[40%]">
                    <div className="w-[100%] h-[15rem] relative">
                        <Image src={img4} alt="image" layout="fill" objectFit="cover"/>
                    </div>
                </li>
                <li className="w-[30%]">
                    <div className="w-[100%] h-[15rem] relative">
                        <Image src={img5} alt="image" layout="fill" objectFit="cover"/>
                    </div>
                </li>
                <li className="w-[30%]">
                    <div className="w-[100%] h-[15rem] relative">
                        <Image src={img6} alt="image" layout="fill" objectFit="cover"/>
                    </div>
                </li>
            </ul>
        </div>
    )
}