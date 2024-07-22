import { BadgeCheck, BaggageClaim, Handshake, Locate, PlayCircle } from "lucide-react";
import Image from "next/image";
import image1 from "../../../public/image1.jpeg"
import image_table from "../../../public/image_table.png"
import image_table_pc from "../../../public/image_table_pc.png"
import image_sofa from "../../../public/image_sofa.png"


export function Hero_Section() {
    return(
        <div className="w-[100%]">
            <div className="flex w-[100%] justify-between relative">
                <div className="flex flex-col gap-4">
                    <h1 className="text-7xl font-extrabold w-[35rem]">
                        Perfect Harmony: Comfort & Style
                    </h1>
                    <p className="w-[26rem] font-light text-gray-400">
                        Explore furniture that harmoniously combines comfort and style to elevate your home.
                    </p>
                    <ul className="flex justify-left items-center gap-4">
                        <li>
                            <button className="border border-black rounded-full p-2">Explore Our Offers</button>
                        </li>
                        <li>
                            <button className="flex justify-center items-center gap-1">
                                <PlayCircle color="#F5993C"/> <p className="text-gray-400 text-xs">Watch Video</p>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="w-[40rem] h-[30rem] rounded-3xl overflow-hidden">
                    <Image src={image1} alt="image" className="w-[100%] h-[100%] "/>
                </div>
                <div className="w-[70%] absolute top-[28em] rounded-full py-2 px-6 bg-white shadow-xl">
                    <ul className="flex justify-between items-center gap-8 text-gray-400">
                        <li>
                            <h1 className="font-semibold">Confort</h1>
                            <p className="flex justify-left gap-1 text-xs items-center">
                                <Locate color="#F5993C"/>
                                Cozy Seating
                            </p>
                        </li>
                        <li>
                            <h1 className="font-semibold">Quality Assurance</h1>
                            <p className="flex justify-left gap-1 text-xs items-center">
                                <Handshake color="#F5993C"/>
                                Cozy Seating
                            </p>
                        </li>
                        <li>
                            <h1 className="font-semibold">Free Shipping</h1>
                            <p className="flex justify-left gap-1 text-xs items-center">
                                <BaggageClaim color="#F5993C"/>
                                No-Cost Delivery
                            </p>
                        </li>
                        <li className="border-l border-gray-400 px-2">
                            <h1>Secure Checkout</h1>
                            <p className="flex justify-left gap-1 text-xs items-center">
                                <BadgeCheck color="#F5993C"/>
                                Secure Payment
                            </p>
                        </li>
                        <li>
                            <button className="border border-black rounded-full py-2 px-4">See More</button>
                        </li>
                    </ul>
                </div>
            </div>
                <ul className="flex justify-center items-center w-[100%] m-auto mt-16 gap-16 text-gray-400">
                    <li className="text-3xl font-extrabold">Lowes</li>
                    <li className="text-3xl font-extrabold">DeWalt</li>
                    <li className="text-3xl font-extrabold">Home Depot</li>
                    <li className="text-3xl font-extrabold">IKEA</li>
                    <li className="text-3xl font-extrabold">Makita</li>
                    <li className="text-3xl font-extrabold">3M</li>
                </ul>
        </div>
    )
}

export function Category_Section() {
    return(
        <div className="w-[100%]">
            <ul className="flex justify-between items-center">
                <li className="flex bg-[#EDEDED7D] px-4 rounded-2xl  justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-xl">Dining Tables</h1>
                        <button className="bg-white font-bold text-sm p-2 rounded-full">See More</button>
                    </div>
                    <div className="w-52 h-40 px-8">
                        <Image className="w-[100%] h-[100%]" src={image_table} alt="image"/>
                    </div>
                </li>
                <li className="flex bg-[#EDEDED7D] px-4 rounded-2xl  justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-xl">Chairs</h1>
                        <button className="bg-white font-bold text-sm p-2 rounded-full">See More</button>
                    </div>
                    <div className="w-52 h-40 px-8">
                        <Image className="w-[100%] h-[100%]" src={image_sofa} alt="image"/>
                    </div>
                </li>
                <li className="flex bg-[#EDEDED7D] px-4 rounded-2xl  justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-xl">Office Desks</h1>
                        <button className="bg-white font-bold text-sm p-2 rounded-full">See More</button>
                    </div>
                    <div className="w-52 h-40 px-8">
                        <Image className="w-[100%] h-[100%]" src={image_table_pc} alt="image"/>
                    </div>
                </li>
            </ul>
        </div>
    )
}