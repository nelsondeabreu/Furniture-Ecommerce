import { BadgeCheck, BaggageClaim, Handshake, Locate, PlayCircle } from "lucide-react";
import Image from "next/image";
import image1 from "../../../public/image1.jpeg"

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