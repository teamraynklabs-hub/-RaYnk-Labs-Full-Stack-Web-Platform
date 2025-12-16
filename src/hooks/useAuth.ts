"use client";

import { useEffect, useState } from "react";

interface AuthState {
  authenticated: boolean;
  loading: boolean;
}

export function useAuth(): AuthState {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/verify", {
          credentials: "include",
        });

        if (res.ok) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  return { authenticated, loading };
}
