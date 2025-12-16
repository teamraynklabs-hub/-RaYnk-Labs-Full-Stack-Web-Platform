"use client";

import { useEffect, useState } from "react";

interface Admin {
  adminId: string;
  email: string;
  role: string;
}

export function useAdmin() {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function verifyAdmin() {
      try {
        const res = await fetch("/api/admin/verify", {
          credentials: "include",
        });

        if (!res.ok) {
          setAuthenticated(false);
          setAdmin(null);
        } else {
          const data = await res.json();
          setAuthenticated(true);
          setAdmin(data.admin);
        }
      } catch {
        setAuthenticated(false);
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    }

    verifyAdmin();
  }, []);

  return { admin, authenticated, loading };
}
