import React from "react";
import { Header } from "@/components/header/header";
import { Hero_Section } from "@/components/hero_section/hero_section";
import { Category_Section } from "@/components/category_section/category_section";
import { Product_Section } from "@/components/product_section/product_section";
import { Frame_Section } from "@/components/frame_section/frame_section";


const Home: React.FC =()=> {

  return (
    <main className="flex flex-col w-screen h-screen items-center px-16 py-4 gap-8 overflow-x-hidden">
      <Header/>
      <Hero_Section/>
      <Category_Section image1="/image_table.png" image2="/image_table_pc.png" image3="/image_sofa.png"/>
      <Product_Section/>
      <Frame_Section src="/bed_white.jpeg"/>
    </main>
  );
}
export default Home