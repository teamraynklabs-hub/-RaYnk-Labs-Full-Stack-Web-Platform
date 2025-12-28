import { cookies } from "next/headers";

export async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }
}
