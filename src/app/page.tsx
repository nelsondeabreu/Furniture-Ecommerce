import { Header } from "@/components/header/header";
import { Hero_Section } from "@/components/hero_section/hero_section";
import { Category_Section } from "@/components/category_section/category_section";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen items-center px-16 py-4 gap-8 overflow-x-hidden">
      <Header/>
      <Hero_Section/>
      <Category_Section/>
    </main>
  );
}
