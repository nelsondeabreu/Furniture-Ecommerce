import React from "react";
import { Header } from "@/components/header/header";
import { Hero_Section } from "@/components/hero_section/hero_section";
import { Category_Section } from "@/components/category_section/category_section";
import { Product_Section } from "@/components/product_section/product_section";
import { Frame_Section } from "@/components/frame_section/frame_section";
import { Frame2_Section } from "@/components/frame2_section/frame2_section";
import { Tittle } from "@/components/tittle/tittle";
import { Gallery } from "@/components/gallery/gallery";
import { Comments } from "@/components/comments/comments";

const Home: React.FC =()=> {

  return (
    <main className="flex flex-col w-screen h-screen gap-8 overflow-x-hidden">
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
      <Tittle 
        text1="Check Our Collection" 
        text2="Our Furniture Gallery" 
        text3="Explore Our Gallery of Inspiring Designs"
      />
      <Gallery 
        img1="/image26.jpeg" img2="/image27.jpeg" img3="/image28.jpeg"
        img4="/image29.jpeg" img5="/image30.jpeg" img6="/image31.jpeg"
      />
      <div className="flex flex-col p-4 gap-4 bg-[#00000008]">
        <Tittle 
          text1="Check Our Collection" 
          text2="Our Furniture Gallery" 
          text3="Discover the Stories and Experiences of Our Delighted Customers"
        />
        
        <ul className="flex justify-center items-center gap-2">
          <li>
              <Comments 
                img1="/img_user_comment.jpeg" username=" Sarah Thompson"
                comment="I am genuinely impressed with the quality of the recliner chair I bought. 
                The comfort it provides is beyond compare, and the design perfectly complements our living room. 
                What sets apart is not just their exceptional products but also their commitment to customer satisfaction. 
                They went the extra mile to ensure I was completely satisfied with my purchase, which is a rarity in today's market."
              />
          </li>
          <li>
              <Comments 
                img1="/img_user_comment1.jpeg" username="Michael Roberts"
                comment="I recently purchased a beautiful dining table and it has completely transformed our dining area. 
                The craftsmanship and attention to detail are truly remarkable. 
                The table is not only a functional piece of furniture but also a work of art that our family and guests admire. 
                The process from selection to delivery was smooth, 
                and the customer support team was incredibly helpful throughout."
              />
          </li>
          <li>
              <Comments 
                img1="/img_user_comment2.jpeg" username="Marta Brown"
                comment="My experience has been consistently outstanding. 
                I've furnished my entire home with their products, and every piece has exceeded my expectations. 
                From the bedroom to the home office, offers a wide range of stylish and well-crafted furniture. 
                What truly sets them apart is their dedicated customer support."
              />
          </li>
        </ul>
    
      </div>

    </main>
  );
}
export default Home