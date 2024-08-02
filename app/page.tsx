import Hero from "@/components/Hero";
import OurProduct from "@/components/OurProduct";
import { ThemeToggler } from "@/components/ThemeToggler";
import { Button } from "@/components/ui/button";
import WheretoBuy from "@/components/wheretoBuy";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <OurProduct/>
      <WheretoBuy/>
      <Button>Click Me</Button>
      {/*
      className="flex min-h-screen flex-col items-center justify-between p-24"
      */}
    </main>
  );
}
