export function validateTeamMember(data: any) {
  const errors: string[] = [];

  if (!data.name) {
    errors.push("Team member name is required");
  }

  if (!data.role) {
    errors.push("Team member role is required");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
