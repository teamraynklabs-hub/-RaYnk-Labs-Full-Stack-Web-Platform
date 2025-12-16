export const ROLES = {
  ADMIN: "admin",
  SUPER_ADMIN: "super-admin",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
