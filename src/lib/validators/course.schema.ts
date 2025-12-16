export function validateCourse(data: any) {
  const errors: string[] = [];

  if (!data.title) {
    errors.push("Course title is required");
  }

  if (!data.description) {
    errors.push("Course description is required");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
