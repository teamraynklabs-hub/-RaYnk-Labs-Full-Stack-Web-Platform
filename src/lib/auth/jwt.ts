import jwt from "jsonwebtoken";

export interface AdminJWTPayload {
  adminId: string;
  email: string;
  role: string;
}

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

export function signJWT(payload: AdminJWTPayload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyJWT(token: string): AdminJWTPayload {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminJWTPayload;
  } catch {
    throw new Error("Invalid or expired token");
  }
}
