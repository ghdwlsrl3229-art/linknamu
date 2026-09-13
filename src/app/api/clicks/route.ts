import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

const TRACKABLE_IDS = ["profile", "github", "linkedin", "blog"];

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id : null;

  if (!id || !TRACKABLE_IDS.includes(id)) {
    return NextResponse.json({ error: "invalid id" }, { status: 400 });
  }

  const db = await getDb();
  await db
    .collection<{ _id: string; count: number }>("clicks")
    .updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });

  return NextResponse.json({ ok: true });
}
