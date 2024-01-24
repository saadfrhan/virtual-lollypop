"use server";

import { client } from "@/lib/utils";
import { query as q } from "faunadb";
import { revalidatePath } from "next/cache";


export default async function createLolly(lolly: {
  to: string;
  message: string;
  slug: string;
  from: string;
  flavorTop: string;
  flavorMiddle: string;
  flavorBottom: string;
}) {
  await client.query(
    q.Create(q.Collection("lollies"), {
      data: lolly,
    })
  );
  revalidatePath("/lolly/*");
}
