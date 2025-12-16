import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Course from "@/lib/models/Course";
import { uploadImage, deleteImage } from "@/lib/cloudinary";
import fs from "fs";
import path from "path";
import os from "os";

/* =========================
   GET → Public courses
========================= */
export async function GET() {
  try {
    await connectDB();

    const courses = await Course.find({ isActive: true }).sort({
      createdAt: -1,
    });

    return NextResponse.json(courses, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}

/* =========================
   POST → Create course
========================= */
export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const duration = formData.get("duration") as string;
    const level = formData.get("level") as string;
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

      image = await uploadImage(tempPath, "courses");

      fs.unlinkSync(tempPath);
    }

    const course = await Course.create({
      title,
      description,
      duration,
      level,
      isActive,
      image,
    });

    return NextResponse.json(course, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Failed to create course" },
      { status: 500 }
    );
  }
}

/* =========================
   PUT → Update course
========================= */
export async function PUT(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();
    const id = formData.get("id") as string;

    if (!id) {
      return NextResponse.json(
        { message: "Course ID required" },
        { status: 400 }
      );
    }

    const course = await Course.findById(id);
    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    /* Optional image replace */
    const imageFile = formData.get("image") as File | null;

    if (imageFile) {
      if (course.image?.publicId) {
        await deleteImage(course.image.publicId);
      }

      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const tempPath = path.join(
        os.tmpdir(),
        `${Date.now()}-${imageFile.name}`
      );

      fs.writeFileSync(tempPath, buffer);

      const image = await uploadImage(tempPath, "courses");

      fs.unlinkSync(tempPath);

      course.image = image;
    }

    course.title =
      (formData.get("title") as string) || course.title;
    course.description =
      (formData.get("description") as string) ||
      course.description;
    course.duration =
      (formData.get("duration") as string) || course.duration;
    course.level =
      (formData.get("level") as string) || course.level;

    course.isActive = formData.get("isActive")
      ? formData.get("isActive") !== "false"
      : course.isActive;

    await course.save();

    return NextResponse.json(course, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to update course" },
      { status: 500 }
    );
  }
}

/* =========================
   DELETE → Remove course
========================= */
export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { id } = await req.json();

    const course = await Course.findById(id);
    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    if (course.image?.publicId) {
      await deleteImage(course.image.publicId);
    }

    await Course.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Course deleted successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Failed to delete course" },
      { status: 500 }
    );
  }
}
