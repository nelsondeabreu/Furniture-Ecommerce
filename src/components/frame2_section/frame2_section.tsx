import { Star , Sofa , Hammer , Download } from "lucide-react";

export const Frame2_Section =()=>{
    return(
        <div className="flex justify-between w-[100%] bg-black px-16 py-8 text-white gap-4">
            <div className="flex flex-col gap-8">
                <h1 className="w-[20rem] font-semibold text-4xl">Our Dedication to Your Satisfaction</h1>
                <p className="w-[35rem] text-sm">, we take pride in our unwavering commitment to quality and customer satisfaction. 
                    With a track record of excellence, 
                    we provide you with the finest furniture and a service you can trust.
                </p>
                
                
                <div className="flex justify-between items-center w-[20rem]">
                <ul>
                    <li className="flex gap-1 text-[#FFC728]"><Star/> <Star/> <Star/> <Star/> <Star/></li>
                    <li className="flex justify-left gap-1 items-center"> <span>4.9</span> <span className="text-xs">/ 5 rating</span> </li>
                    <li className="text-xs">Qualitity</li>
                </ul>

                <ul>
                <li className="flex gap-1 text-[#FFC728]"><Star/> <Star/> <Star/> <Star/> <Star/></li>
                    <li className="flex justify-left gap-1 items-center"> <span>4.8</span> <span className="text-xs">/ 5 rating</span> </li>
                    <li className="text-xs">Customer Satisfaction</li>
                </ul>
                </div>
            </div>

            <div >
                <ul className="flex flex-col gap-8">
                    <li>
                        <div className="flex jusify-center gap-2">
                            <Sofa size="2.5rem" color="#F97316"/>
                            <div>
                                <h1 className="font-bold text-xl">Quality Craftsmanship</h1>
                                <p className="w-[30em] text-sm">
                                    Our furniture is meticulously handcrafted to stand the test of time, 
                                    ensuring it can be enjoyed for generations to come.
                                </p>
                            </div>
                    </div>
                    </li>
                    <li>
                        <div className="flex jusify-center gap-2">
                            <Hammer size="2.5rem" color="#F97316"/>
                            <div>
                                <h1 className="font-bold text-xl">Extensive Selection</h1>
                                <p className="w-[30em] text-sm">
                                    Discover a wide variety of styles and options to suit your unique preferences and 
                                    needs.
                                </p>
                            </div>
                    </div>
                    </li>
                    <li>
                        <div className="flex jusify-center gap-2">
                            <Download size="2.5rem" color="#F97316"/>
                            <div>
                                <h1 className="font-bold text-xl">Dedicated Customer Support</h1>
                                <p className="w-[30em] text-sm">
                                    Quiuckly navigate you anda engage with your adience
                                </p>
                            </div>
                    </div>
                    </li>
                </ul>
                
            </div>
      </div>
    )
}