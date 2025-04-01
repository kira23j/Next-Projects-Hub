import { Medal } from "lucide-react";
import {Poppins} from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
    src: "../fonts/font.woff2",
});

const textFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300","400", "500", "600", "700" ,"800", "900"],
})

const MarketingPage = () => {
  return (
    <div className={cn("flex items-center justify-center flex-col",headingFont.className)}>
     <div className="flex items-center justify-center flex-col">
<div className="flex mb-4 flex-items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
   <Medal className="h-6 w-6 mr-2"/>
   No 1 task mgmt
</div>
<h1 className="text-3xl md:text-6xl text-center text-neutral-800 ">Taskify helps teams move </h1>
     </div>
<div className="text-3xl md:text-6xl bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 p-2 rounded pb-4 w-fit">
    work forward
</div>
<div className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto ",textFont.className)}>Collaborate, manage projects, and reach new productivity peaks. from high rises to the home office, the way your teams works is unique - accomplish all with taskify</div>
<div>
    <Button className="mt-6 size:lg asChild ">
        <Link href="/signup">
    Get Taskify for free
        </Link>
        </Button>
</div>
    </div>
    
  );
}

export default MarketingPage;