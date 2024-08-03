import React from "react";

interface PropsText{
    text1: String
    text2: String
    text3: String
}

export const Tittle: React.FC<PropsText> = ({text1 , text2 , text3})=>{
    return(
        <div className="w-[100%]">
            <ul className="flex flex-col justify-center items-center gap-2">
                <li> <button className="font-semibold text-[#D64D00] bg-[#F5F5F5] p-2 rounded-xl">{text1}</button> </li>
                <li> <h1 className="font-bold text-3xl">{text2}</h1> </li>
                <li> <p className="text-xs">{text3}</p> </li>
            </ul>
        </div>
    )
}