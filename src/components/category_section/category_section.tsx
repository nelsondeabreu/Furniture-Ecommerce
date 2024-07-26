import Image from "next/image";
import React from "react";
interface ImagesProps{
    image1: string
    image2: string
    image3: string
    text1: string
    text2: string
    text3: string
}

export const Category_Section: React.FC<ImagesProps> = ({image1 , image2 , image3,text1,text2,text3})=> {
    
    return(
        <div className="w-[100%]">
            <ul className="flex justify-between items-center">
                <li className="flex bg-[#EDEDED7D] px-4 rounded-2xl  justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-xl">{text1}</h1>
                        <button className="bg-white font-bold text-xs p-2 rounded-full">See More</button>
                    </div>
                    <div className="w-52 h-40 px-8 relative">
                        <Image layout="fill" objectFit="cover" src={image1} alt="image"/>
                    </div>
                </li>
                <li className="flex bg-[#EDEDED7D] px-4 rounded-2xl  justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-xl">{text2}</h1>
                        <button className="bg-white font-bold text-xs p-2 rounded-full">See More</button>
                    </div>
                    <div className="w-52 h-40 px-8 relative">
                        <Image layout="fill" objectFit="cover" src={image2} alt="image"/>
                    </div>
                </li>
                <li className="flex bg-[#EDEDED7D] px-4 rounded-2xl  justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-xl">{text3}</h1>
                        <button className="bg-white font-bold text-xs p-2 rounded-full">See More</button>
                    </div>
                    <div className="w-52 h-40 px-8 relative">
                        <Image layout="fill" objectFit="cover" src={image3} alt="image"/>
                    </div>
                </li> 
            </ul>
        </div>
    )
}