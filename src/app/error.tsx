"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        {/* Error label */}
        <p className="text-sm font-semibold text-muted-foreground">
          APPLICATION ERROR
        </p>

        {/* Title */}
        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="mt-4 text-muted-foreground">
          An unexpected error occurred. Please try again or return to the home page.
        </p>

        {/* Actions */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-md border px-5 py-2 text-sm font-medium hover:bg-muted"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
