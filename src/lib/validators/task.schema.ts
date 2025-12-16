export function validateTask(data: any) {
  const errors: string[] = [];

  if (!data.title) {
    errors.push("Task title is required");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
