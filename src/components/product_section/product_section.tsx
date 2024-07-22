import Image from "next/image";


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


            <ul className="w-[100%] flex">
                <li>
                    <Image src={""} alt="image"/>
                </li>
            </ul>
        </div>
    )
}