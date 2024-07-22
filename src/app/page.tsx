import { Header } from "@/components/header/header";
import { Category_Section, Hero_Section } from "@/components/cards/cards";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen items-center px-16 py-4 gap-8 overflow-x-hidden">
      <Header/>
      <Hero_Section/>
      {<Category_Section/>}
    </main>
  );
}
