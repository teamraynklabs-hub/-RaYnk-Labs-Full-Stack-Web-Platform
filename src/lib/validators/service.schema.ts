export function validateService(data: any) {
  const errors: string[] = [];

  if (!data.title) {
    errors.push("Service title is required");
  }

  if (!data.description) {
    errors.push("Service description is required");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
