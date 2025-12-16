import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyJWT } from "@/lib/auth/jwt";

export async function GET() {
  try {
    const token = cookies().get("admin_token")?.value;

    if (!token) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    const decoded = verifyJWT(token);

    return NextResponse.json(
      {
        authenticated: true,
        admin: decoded,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }
}
