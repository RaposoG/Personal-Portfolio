import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const messagesDir = path.join(process.cwd(), "messages");
    const files = fs.readdirSync(messagesDir);
    const languages = files.filter((file) => file.endsWith(".json")).map((file) => file.replace(".json", ""));

    return NextResponse.json(languages);
  } catch (error) {
    // Fallback to default languages if there's an error
    return NextResponse.json(["en", "pt"]);
  }
}
