import { type ClassValue, clsx } from "clsx"
import { Client } from "faunadb";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const client = new Client({
  secret: process.env.NEXT_PUBLIC_ADMIN_SECRET!,
});
