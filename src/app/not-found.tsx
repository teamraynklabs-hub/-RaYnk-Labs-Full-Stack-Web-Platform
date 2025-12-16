import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold text-muted-foreground">
          404 ERROR
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Page not found
        </h1>

        <p className="mt-4 text-muted-foreground">
          The page you are trying to access does not exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Go Home
          </Link>

          <Link
            href="/contact"
            className="rounded-md border px-5 py-2 text-sm font-medium hover:bg-muted"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
