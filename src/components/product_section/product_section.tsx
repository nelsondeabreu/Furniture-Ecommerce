import Image from "next/image";
import sofa_yellow from "../../../public/sofa_yellow.jpeg"
import sofa_white from "../../../public/sofa_white.jpeg"
import table_light from "../../../public/table_light.jpeg"
import marmore_table from "../../../public/marmore_table.jpeg";
import sofa_green from "../../../public/sofa_green.jpeg";
import cadeira from "../../../public/cadeira.jpeg";
import armario from "../../../public/armario.jpeg";
import sofa_yellow2 from "../../../public/sofa_yellow2.jpeg";


import { ShoppingCart } from "lucide-react";


export function Product_Section (){
    return(
        <div className="w-[100%] flex flex-col gap-4">
            <header className="w-[100%] flex justify-between items-center">
                <div className="flex flex-col gap-4">
                    <button className="bg-[#F5F5F5] w-44 rounded text-[#F73308] py-1 font-semibold">Check Our Product</button>
                    <h1 className="font-extrabold text-xl">Crafted with excellent material</h1>
                </div>
                

                <ul className="flex justify-center items-center gap-4 text-[#999999] text-xs">
                    <li><button className="border border-black text-black font-bold rounded-full px-3 py-1">Best Seller</button></li>
                    <li>Chair</li>
                    <li>Table</li>
                    <li>Bed</li>
                    <li>Closet</li>
                </ul>
            </header>


            <ul className="w-[100%] flex justify-between items-center flex-wrap gap-4">
                <li className="flex flex-col w-[23%] gap-2">
                    <div className="w-[100%] h-[17rem]">
                        <Image src={sofa_yellow} alt="image" className="w-[100%] h-[100%] rounded-t-xl"/>
                    </div>
                    <h3 className="font-bold">Fabric Chair</h3>
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <span className="text-[#bebebe] line-through">$105.00</span>
                            <span className="font-semibold">$95.00</span>
                        </div>
                        <ShoppingCart className="bg-gray-200 rounded-full p-1"/>
                    </div>
                </li>
                <li className="flex flex-col w-[23%] gap-2">
                    <div className="w-[100%] h-[17rem]">
                        <Image src={sofa_white} alt="image" className="w-[100%] h-[100%] rounded-t-xl"/>
                    </div>
                    <h3 className="font-bold">Fabric Chair</h3>
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <span className="text-[#bebebe] line-through">$105.00</span>
                            <span className="font-semibold">$95.00</span>
                        </div>
                        <ShoppingCart className="bg-gray-200 rounded-full p-1"/>
                    </div>
                </li>
                <li className="flex flex-col w-[23%] gap-2">
                    <div className="w-[100%] h-[17rem]">
                        <Image src={table_light} alt="image" className="w-[100%] h-[100%] rounded-t-xl"/>
                    </div>
                    <h3 className="font-bold">Fabric Chair</h3>
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <span className="text-[#bebebe] line-through">$105.00</span>
                            <span className="font-semibold">$95.00</span>
                        </div>
                        <ShoppingCart className="bg-gray-200 rounded-full p-1"/>
                    </div>
                </li>
                <li className="flex flex-col w-[23%] gap-2">
                    <div className="w-[100%] h-[17rem]">
                        <Image src={marmore_table} alt="image" className="w-[100] h-[100%] rounded-t-xl"/>
                    </div>
                    <h3 className="font-bold">Fabric Chair</h3>
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <span className="text-[#bebebe] line-through">$105.00</span>
                            <span className="font-semibold">$95.00</span>
                        </div>
                        <ShoppingCart className="bg-gray-200 rounded-full p-1"/>
                    </div>
                </li>
                <li className="flex flex-col w-[23%] gap-2">
                    <div className="w-[100%] h-[17rem]">
                        <Image src={sofa_green} alt="image" className="w-[100] h-[100%] rounded-t-xl"/>
                    </div>
                    <h3 className="font-bold">Fabric Chair</h3>
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <span className="text-[#bebebe] line-through">$105.00</span>
                            <span className="font-semibold">$95.00</span>
                        </div>
                        <ShoppingCart className="bg-gray-200 rounded-full p-1"/>
                    </div>
                </li>
                <li className="flex flex-col w-[23%] gap-2">
                    <div className="w-[100%] h-[17rem]">
                        <Image src={sofa_yellow2} alt="image" className="w-[100] h-[100%] rounded-t-xl"/>
                    </div>
                    <h3 className="font-bold">Fabric Chair</h3>
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <span className="text-[#bebebe] line-through">$105.00</span>
                            <span className="font-semibold">$95.00</span>
                        </div>
                        <ShoppingCart className="bg-gray-200 rounded-full p-1"/>
                    </div>
                </li>
                <li className="flex flex-col w-[23%] gap-2">
                    <div className="w-[100%] h-[17rem]">
                        <Image src={armario} alt="image" className="w-[100] h-[100%] rounded-t-xl"/>
                    </div>
                    <h3 className="font-bold">Fabric Chair</h3>
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <span className="text-[#bebebe] line-through">$105.00</span>
                            <span className="font-semibold">$95.00</span>
                        </div>
                        <ShoppingCart className="bg-gray-200 rounded-full p-1"/>
                    </div>
                </li>
                <li className="flex flex-col w-[23%] gap-2">
                    <div className="w-[100%] h-[17rem]">
                        <Image src={cadeira} alt="image" className="w-[100] h-[100%] rounded-t-xl"/>
                    </div>
                    <h3 className="font-bold">Fabric Chair</h3>
                    <div className="flex justify-between">
                        <div className="flex gap-4">
                            <span className="text-[#bebebe] line-through">$105.00</span>
                            <span className="font-semibold">$95.00</span>
                        </div>
                        <ShoppingCart className="bg-gray-200 rounded-full p-1"/>
                    </div>
                </li>
            </ul>
        </div>
    )
}