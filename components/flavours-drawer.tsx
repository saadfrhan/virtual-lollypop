import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Lollipop, Popsicle, X } from "lucide-react";
import { lollipops } from "@/lib/constants";
import Lolly from "./lolly";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

export default function FlavoursDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button
          size="icon"
          className="rounded-full fixed bottom-5 left-5"
          variant="outline"
        >
          <Popsicle className="h-6 w-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader className="flex w-full justify-between">
          <DrawerTitle>Pre-made Flavours</DrawerTitle>
          <DrawerClose>
            <Button size="icon" variant="ghost" className="rounded-full">
              <X />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className="grid grid-cols-6 max-[400px]:grid-cols-1 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 max-xl:grid-cols-5 gap-2 m-2 overflow-auto">
          {lollipops.map((lollipop, index) => (
            <Link key={index} href={`/create-lolly?flavour=${index}`}>
              <DrawerClose className="w-full">
                <Card>
                  <CardContent className="flex flex-col gap-2 hover:bg-secondary duration-300 pt-6 items-center">
                    <Lolly
                      flavourBottom={lollipop.flavourBottom}
                      flavourMiddle={lollipop.flavourMiddle}
                      flavourTop={lollipop.flavourTop}
                      className="h-[200px]"
                    />
                    <p>{lollipop.name}</p>
                  </CardContent>
                </Card>
              </DrawerClose>
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
