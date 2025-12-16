"use client";

import { useEffect, useState } from "react";

export function usePersonalTasks() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch("/api/admin/personal/tasks", {
        credentials: "include",
      });

      const data = await res.json();
      setTasks(data);
      setLoading(false);
    }

    fetchTasks();
  }, []);

  return { tasks, loading };
}
