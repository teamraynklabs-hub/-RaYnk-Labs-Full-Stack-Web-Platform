

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-tight">
        Welcome to the Home Page
      </h1>

      {/* Description */}
      <p className="mt-4 max-w-2xl text-muted-foreground">
        This is the starting point of the application.  
        Build, scale, and manage your web platform using modern tools and best practices.
      </p>

      {/* Call to Action */}
      <div className="mt-8 flex gap-4">
        <a
          href="/services"
          className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          View Services
        </a>

        <a
          href="/contact"
          className="rounded-md border px-6 py-2 text-sm font-medium hover:bg-muted"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
