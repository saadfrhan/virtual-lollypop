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
          flavourTop="#C35671"
          flavourMiddle="#E93A3A"
          flavourBottom="#D52020"
        />
        <Lolly
          flavourTop="#C26671"
          flavourMiddle="#D94A3A"
          flavourBottom="#D53020"
        />
        <Lolly
          flavourTop="#C22671"
          flavourMiddle="#D92A3A"
          flavourBottom="#D51020"
        />
        <Lolly
          flavourTop="#C26671"
          flavourMiddle="#D92A3A"
          flavourBottom="#D53020"
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
