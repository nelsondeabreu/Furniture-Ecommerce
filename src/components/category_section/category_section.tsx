import Image from "next/image";
import image_table from "../../../public/image_table.png"
import image_table_pc from "../../../public/image_table_pc.png"
import image_sofa from "../../../public/image_sofa.png"

export function Category_Section() {
    return(
        <div className="w-[100%]">
            <ul className="flex justify-between items-center">
                <li className="flex bg-[#EDEDED7D] px-4 rounded-2xl  justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-xl">Dining Tables</h1>
                        <button className="bg-white font-bold text-xs p-2 rounded-full">See More</button>
                    </div>
                    <div className="w-52 h-40 px-8">
                        <Image className="w-[100%] h-[100%]" src={image_table} alt="image"/>
                    </div>
                </li>
                <li className="flex bg-[#EDEDED7D] px-4 rounded-2xl  justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-xl">Chairs</h1>
                        <button className="bg-white font-bold text-xs p-2 rounded-full">See More</button>
                    </div>
                    <div className="w-52 h-40 px-8">
                        <Image className="w-[100%] h-[100%]" src={image_sofa} alt="image"/>
                    </div>
                </li>
                <li className="flex bg-[#EDEDED7D] px-4 rounded-2xl  justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-xl">Office Desks</h1>
                        <button className="bg-white font-bold text-xs p-2 rounded-full">See More</button>
                    </div>
                    <div className="w-52 h-40 px-8">
                        <Image className="w-[100%] h-[100%]" src={image_table_pc} alt="image"/>
                    </div>
                </li>
            </ul>
        </div>
    )
}