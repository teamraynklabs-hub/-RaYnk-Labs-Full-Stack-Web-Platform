export function validateSoftware(data: any) {
  const errors: string[] = [];

  if (!data.name) {
    errors.push("Software name is required");
  }

  if (!data.description) {
    errors.push("Software description is required");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
