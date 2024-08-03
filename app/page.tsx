import Cat from "@/components/Cat";
import Hero from "@/components/Hero";
import Ingredients from "@/components/Ingredients";
import OurProduct from "@/components/OurProduct";
import { ThemeToggler } from "@/components/ThemeToggler";
import { Button } from "@/components/ui/button";
import WheretoBuy from "@/components/WheretoBuy"; 
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <OurProduct/>
      <WheretoBuy/>
      <Cat/>
      <Ingredients/>
      <Button>Click Me</Button>
      {/*
      className="flex min-h-screen flex-col items-center justify-between p-24"
      */}
    </main>
  );
}
