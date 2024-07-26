import React from "react";
import { Header } from "@/components/header/header";
import { Hero_Section } from "@/components/hero_section/hero_section";
import { Category_Section } from "@/components/category_section/category_section";
import { Product_Section } from "@/components/product_section/product_section";
import { Frame_Section } from "@/components/frame_section/frame_section";
import { Frame2_Section } from "@/components/frame2_section/frame2_section";


const Home: React.FC =()=> {

  return (
    <main className="w-screen h-screen  overflow-x-hidden">
      <div className="flex flex-col w-[100%] items-center px-16 py-4 gap-8">
        <Header/>
        <Hero_Section/>
        <Category_Section
          text1="Dining Tables" text2="Chairs" text3="Office Desks" 
          image1="/image_table.png" image2="/image_table_pc.png" image3="/image_sofa.png"
        />
        <Product_Section/>
        <Frame_Section 
          src="/bed_white.jpeg" nameUser="Mark Anderson"  imageUser="/img_user.jpeg"  direction="row" right="18em"
        />
        <Category_Section
          text1="Sofa" text2="NightStand" text3="Bedroom" 
          image1="/image_sofa_blue.png" image2="/image_stand_green.png" image3="/image_bed_brown.png"
        />
        <Frame_Section 
          src="/bed_white.jpeg" nameUser="Victor Adams"  imageUser="/img_user1.jpeg" direction="row-reverse" right="15.5em"
        />
      </div>
      <Frame2_Section/>
      
    </main>
  );
}
export default Home