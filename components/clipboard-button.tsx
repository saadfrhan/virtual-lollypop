"use client";

import { Button } from "./ui/button";
import { Clipboard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useState } from "react";

export default function ClipboardButton({ link }: { link: string }) {
  const [open, setOpen] = useState(false);
  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={() => {
        setOpen(false)
      }} defaultOpen={open} disableHoverableContent>
        <TooltipTrigger autoFocus>
          <Button
            className="rounded-l-none"
            size="icon"
            onClick={async () => {
              await navigator.clipboard.writeText(link);
              setOpen(true)
            }}
          >
            <Clipboard />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Copied!</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
