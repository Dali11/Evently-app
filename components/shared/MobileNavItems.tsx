import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems";


function MobileNavItems() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image 
               src='/assets/icons/menu.svg'
               alt="menu"
               width={24}
               height= {24}
               className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image 
               src='/assets/images/MUBAS Logo.png'
               width={35}
               height={35}
               alt="logo"
          />
          <Separator className="border border-gray-50"/>
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNavItems;
