import { cookies } from "next/headers";
import { verifyJWT } from "./jwt";

export function requireAdmin() {
  const token = cookies().get("admin_token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  return verifyJWT(token);
}
