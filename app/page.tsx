import { ThemeToggler } from "@/components/ThemeToggler";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
     <ThemeToggler/>
     <Button>Click Me</Button>
    </main>
  );
}
