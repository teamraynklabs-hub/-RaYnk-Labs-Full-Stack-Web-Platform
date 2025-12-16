import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import TeamMember from "@/lib/models/TeamMember";
import { uploadImage, deleteImage } from "@/lib/cloudinary";

/* =========================
   GET → Public team list
========================= */
export async function GET() {
  try {
    await connectDB();
    const team = await TeamMember.find({ isActive: true }).sort({
      createdAt: -1,
    });

    return NextResponse.json(team, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch team" },
      { status: 500 }
    );
  }
}

/* =========================
   POST → Add team member
========================= */
export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const role = formData.get("role") as string;
    const bio = formData.get("bio") as string;
    const imageFile = formData.get("image") as File;

    if (!name || !role || !imageFile) {
      return NextResponse.json(
        { message: "Name, role and image are required" },
        { status: 400 }
      );
    }

    /* Upload image to Cloudinary */
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const tempPath = `/tmp/${Date.now()}-${imageFile.name}`;
    await import("fs").then((fs) =>
      fs.writeFileSync(tempPath, buffer)
    );

    const image = await uploadImage(tempPath, "team");

    await import("fs").then((fs) =>
      fs.unlinkSync(tempPath)
    );

    const member = await TeamMember.create({
      name,
      role,
      bio,
      image,
    });

    return NextResponse.json(member, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Failed to create team member" },
      { status: 500 }
    );
  }
}

/* =========================
   PUT → Update team member
========================= */
export async function PUT(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();
    const id = formData.get("id") as string;

    if (!id) {
      return NextResponse.json(
        { message: "Member ID required" },
        { status: 400 }
      );
    }

    const member = await TeamMember.findById(id);
    if (!member) {
      return NextResponse.json(
        { message: "Member not found" },
        { status: 404 }
      );
    }

    /* If new image provided → replace */
    const imageFile = formData.get("image") as File | null;

    if (imageFile) {
      await deleteImage(member.image.publicId);

      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const tempPath = `/tmp/${Date.now()}-${imageFile.name}`;
      await import("fs").then((fs) =>
        fs.writeFileSync(tempPath, buffer)
      );

      const image = await uploadImage(tempPath, "team");

      await import("fs").then((fs) =>
        fs.unlinkSync(tempPath)
      );

      member.image = image;
    }

    member.name = (formData.get("name") as string) || member.name;
    member.role = (formData.get("role") as string) || member.role;
    member.bio = (formData.get("bio") as string) || member.bio;

    await member.save();

    return NextResponse.json(member, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to update team member" },
      { status: 500 }
    );
  }
}

/* =========================
   DELETE → Remove team member
========================= */
export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { id } = await req.json();

    const member = await TeamMember.findById(id);
    if (!member) {
      return NextResponse.json(
        { message: "Member not found" },
        { status: 404 }
      );
    }

    /* Delete image from Cloudinary */
    await deleteImage(member.image.publicId);

    await TeamMember.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Team member deleted" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Failed to delete team member" },
      { status: 500 }
    );
  }
}
