import { NextResponse } from "next/server";
import { uploadImage } from "@/lib/cloudinary";
import fs from "fs";
import path from "path";
import os from "os";

/* Required for file upload */
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const folder = (formData.get("folder") as string) || "uploads";

    if (!file) {
      return NextResponse.json(
        { message: "No file provided" },
        { status: 400 }
      );
    }

    /* Convert file to temp path */
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const tempDir = os.tmpdir();
    const tempFilePath = path.join(
      tempDir,
      `${Date.now()}-${file.name}`
    );

    fs.writeFileSync(tempFilePath, buffer);

    /* Upload to Cloudinary */
    const image = await uploadImage(tempFilePath, folder);

    /* Remove temp file */
    fs.unlinkSync(tempFilePath);

    return NextResponse.json(image, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Image upload failed" },
      { status: 500 }
    );
  }
}
