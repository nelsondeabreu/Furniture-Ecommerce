import { CircleChevronDown, GitCommitIcon, Mail, Phone, SquareCode, SquareTerminal, Star } from "lucide-react";

export function Header() {
    return(
        <div className="flex flex-col w-[100%]">
            <div className="flex justify-between border-b-2 border-gray-200 pb-4 mb-4">
                <ul className="flex gap-4">
                    <li className="flex gap-1">
                        <Phone color="#F5993C"/> <p>+xx xxx xxx x</p> 
                    </li>
                    <li className="flex gap-1">
                        <Mail color="#F5993C"/> <p>xxxxxxxx@xxxx.com</p> 
                    </li>
                </ul>

                <ul className="flex gap-6">
                    <li><Star/></li>
                    <li><SquareTerminal/></li>
                    <li><SquareCode/></li>
                    <li><GitCommitIcon/></li>
                </ul>
            </div>

            <div className="flex justify-between items-center text-sm">
                <h1 className="text-3xl font-extrabold">Furniture</h1>
                <ul className="flex gap-8 text-gray-300 justify-center items-center">
                    <li>Home</li>
                    <li>About</li>
                    <li className="flex justify-center items-center gap-1">Furniture <CircleChevronDown size="15"/></li>
                    <li>Car Catalogue</li>
                    <li>FAQ</li>
                </ul>
                <ul className="flex gap-8 text-[#F5993C] justify-center items-center">
                    <li>Sign In</li>
                    <li>
                        <button type="button" className="bg-[#F5993C]  text-white py-2 px-4 rounded-full">Sign Up</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}