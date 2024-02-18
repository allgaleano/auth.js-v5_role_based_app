import { LoginSchema } from "@/schemas";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const values = await request.json();
  const validatedFields = LoginSchema.safeParse(values); 
  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid fields" });
  }
  return NextResponse.json({ success: "Email sent!" });
}