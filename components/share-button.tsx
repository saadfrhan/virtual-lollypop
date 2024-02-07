"use client";

import { RWebShare } from "react-web-share";
import { Button } from "./ui/button";

export default function ShareButton({ slug }: { slug: string }) {
  return (
    <RWebShare
      data={{
        url: `https://virtual-lollypop.vercel.app/lolly/${slug}?view=public`,
      }}
    >
      <Button className="flex w-full">Share 🔗</Button>
    </RWebShare>
  );
}
