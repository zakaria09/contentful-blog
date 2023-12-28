import { client } from "../../../src/app/lib/contentful/client";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  console.log(slug)
  const res = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });
  console.log(res)
  return NextResponse.json(res);
}
