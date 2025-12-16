export function validateAdminLogin(data: any) {
  const errors: string[] = [];

  if (!data.email) {
    errors.push("Email is required");
  }

  if (!data.password) {
    errors.push("Password is required");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
