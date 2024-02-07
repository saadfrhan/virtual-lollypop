import Link from "next/link";
import Header from "@/components/header";
import Lolly from "@/components/lolly";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex w-full gap-10 justify-center items-center">
        <Lolly
          flavourTop="#FF6B81"
          flavourMiddle="#FF3E6B"
          flavourBottom="#FF1F58"
        />

        <Lolly
          flavourTop="#FFD53E"
          flavourMiddle="#FFAA00"
          flavourBottom="#FF8000"
          className="max-md:hidden"
        />

        <Lolly
          flavourTop="#6688FF"
          flavourMiddle="#3366FF"
          flavourBottom="#0033CC"
          className="max-md:hidden"
        />

        <Lolly
          flavourTop="#50D2C2"
          flavourMiddle="#00BFA6"
          className="max-md:hidden"
          flavourBottom="#009688"
        />
      </div>
      <div className="pt-[60px]">
        <div className="m-[0_auto] text-center">
          <Link href="/create-lolly" className={buttonVariants({})}>
            Freeze lolly
          </Link>
        </div>
      </div>
    </div>
  );
}
