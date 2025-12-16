import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Service from "@/lib/models/Service";
import { uploadImage, deleteImage } from "@/lib/cloudinary";
import fs from "fs";
import path from "path";
import os from "os";

/* =========================
   GET → Public services
========================= */
export async function GET() {
  try {
    await connectDB();

    const services = await Service.find({ isActive: true }).sort({
      createdAt: -1,
    });

    return NextResponse.json(services, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

/* =========================
   POST → Create service
========================= */
export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const isActive = formData.get("isActive") !== "false";
    const imageFile = formData.get("image") as File | null;

    if (!title || !description) {
      return NextResponse.json(
        { message: "Title and description are required" },
        { status: 400 }
      );
    }

    let image;

    /* Optional image upload */
    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const tempPath = path.join(
        os.tmpdir(),
        `${Date.now()}-${imageFile.name}`
      );

      fs.writeFileSync(tempPath, buffer);

      image = await uploadImage(tempPath, "services");

      fs.unlinkSync(tempPath);
    }

    const service = await Service.create({
      title,
      description,
      isActive,
      image,
    });

    return NextResponse.json(service, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Failed to create service" },
      { status: 500 }
    );
  }
}

/* =========================
   PUT → Update service
========================= */
export async function PUT(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();
    const id = formData.get("id") as string;

    if (!id) {
      return NextResponse.json(
        { message: "Service ID required" },
        { status: 400 }
      );
    }

    const service = await Service.findById(id);
    if (!service) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    /* Optional image replace */
    const imageFile = formData.get("image") as File | null;

    if (imageFile) {
      if (service.image?.publicId) {
        await deleteImage(service.image.publicId);
      }

      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const tempPath = path.join(
        os.tmpdir(),
        `${Date.now()}-${imageFile.name}`
      );

      fs.writeFileSync(tempPath, buffer);

      const image = await uploadImage(tempPath, "services");

      fs.unlinkSync(tempPath);

      service.image = image;
    }

    service.title =
      (formData.get("title") as string) || service.title;
    service.description =
      (formData.get("description") as string) ||
      service.description;

    service.isActive = formData.get("isActive")
      ? formData.get("isActive") !== "false"
      : service.isActive;

    await service.save();

    return NextResponse.json(service, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to update service" },
      { status: 500 }
    );
  }
}

/* =========================
   DELETE → Remove service
========================= */
export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { id } = await req.json();

    const service = await Service.findById(id);
    if (!service) {
      return NextResponse.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    if (service.image?.publicId) {
      await deleteImage(service.image.publicId);
    }

    await Service.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Service deleted successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Failed to delete service" },
      { status: 500 }
    );
  }
}
