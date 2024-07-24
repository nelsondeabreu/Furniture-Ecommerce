import { CircleCheckBig , MessageCircle , CircleCheck , UserRoundCheck } from "lucide-react";
import Image from "next/image";
import bed_white from "../../../public/bed_white.jpeg"
import img_user from "../../../public/img_user.jpeg"

export function Frame_Section(){
    return(
        <div className="w-[100%] flex justify-between items-center">
            <div className="flex flex-col gap-4">
                <h1 className="w-[21rem] font-bold text-3xl">
                    Elevate Your Space with Uncompromising Quality
                </h1>
                <p className="w-[29rem] text-sm">
                    Experience the epitome of furniture quality. 
                    Our products are meticulously crafted with an unwavering commitment to excellence. 
                    From the finest materials to expert craftsmanship, 
                    each piece embodies durability, comfort, and timeless style. 
                    Elevate your space with the assurance of exceptional quality and lasting beauty.
                </p>
                <ul className="flex flex-col justify-center items-left gap-4 text-sm font-semibold">
                    <li className="flex gap-2"> <CircleCheckBig color="#F97316"/> Experience Unparalleled Quality</li>
                    <li className="flex gap-2"> <CircleCheckBig color="#F97316"/> Built to Last for Generations</li>
                    <li className="flex gap-2"> <CircleCheckBig color="#F97316"/> Loved by Customers Worldwide</li>
                </ul>
                <button className="bg-black rounded-full text-white w-28 p-2 text-sm">Shop Now</button>
            </div>
            <div className="relative">
                <Image src={bed_white} alt="image" className="h-[30em] w-[30em]"/>
                <div className="flex justify-between items-center shadow-xl gap-2 bg-white w-[60%] px-3 py-2 absolute top-0 right-[18rem] mt-16 rounded-xl">
                    <div className="flex gap-2">
                        <Image src={img_user} alt="image user" className="w-12 h-12 rounded-full"/>
                        <ul>
                            <li><h1 className="font-semibold">Mark Anderson</h1></li>
                            <li><p className="text-xs">Furniture Craftsmanship</p></li>
                        </ul>
                    </div>
                    <span className="bg-[#F97316] text-white rounded-full p-2">
                        <MessageCircle size="1em"/>
                    </span>
                </div>

                <div className="flex justify-center items-center shadow-xl gap-1 bg-white w-[55%] py-4 absolute top-[26.5em] left-[16rem] rounded-xl">
                    <CircleCheck color="#F97316"/>
                    <p>
                        We think about every detail
                    </p>
                </div>

                <div className="flex justify-center items-center shadow-xl gap-2 -rotate-12 bg-[#F97316] text-white p-2 absolute top-[15em] right-[31em] rounded-xl">
                    <UserRoundCheck/>
                </div>
            </div>
        </div>
    )
}