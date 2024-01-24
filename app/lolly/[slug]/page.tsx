import ClipboardButton from "@/components/clipboard-button";
import Lolly from "@/components/lolly";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { client } from "@/lib/utils";
import { query as q } from "faunadb";
import { Clipboard } from "lucide-react";
import Link from "next/link";

export const revalidate = 1;

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: {
    view: "public";
  };
}) {
  async function getLolly(slug: string) {
    const result = await client.query(
      q.Get(q.Match(q.Index("lolly_by_slug"), slug))
    );
    return result.data;
  }

  const lollyData = await getLolly(params.slug);
  const link = `https://virtual-lollypop.vercel.app/lolly/${lollyData.slug}?view=to`;

  return (
    <div>
      <div className="rounded-lg shadow-md flex max-md:flex-col justify-center min-h-screen items-center gap-14 container w-full items-center">
      <Lolly
        flavourTop={lollyData.flavorTop}
        flavourMiddle={lollyData.flavorMiddle}
        flavourBottom={lollyData.flavorBottom}
      />
      <div className="space-y-2">
        <Card className="w-[350px]">
          <CardContent className="py-6 space-y-2">
            <div>
              <p className="text-xs font-bold text-muted-foreground">FROM</p>
              <p className="text-lg font-bold">{lollyData.from}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground">TO</p>
              <p className="text-lg font-bold">{lollyData.to}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground">MESSAGE</p>
              <p className="text-base">{lollyData.message}</p>
            </div>
          </CardContent>
        </Card>
        {searchParams.view !== "public" && (
          <Card>
            <CardContent className="pt-6 space-y-2">
              <p className="text-xs font-bold text-muted-foreground">SHARE</p>
              <div className="flex">
                <Input className="rounded-r-none" defaultValue={link} />
                <ClipboardButton link={link} />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
      <Link href="/create-lolly" className={buttonVariants({variant: "link", className: "text-center flex w-full"})}>Want to create your own?</Link>
    </div>
  );
}
