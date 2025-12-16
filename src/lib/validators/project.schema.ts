export function validateProject(data: any) {
  const errors: string[] = [];

  if (!data.title) {
    errors.push("Project title is required");
  }

  if (!data.description) {
    errors.push("Project description is required");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
