"use client";

export function useAdminLogout() {
  const logout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/admin";
  };

  return { logout };
}
