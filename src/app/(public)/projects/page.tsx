'use client'

const projects = [
  {
    id: 1,
    name: 'Business Name Generator',
    description:
      'AI-powered tool that generates creative and unique business names based on your industry and preferences.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    url: 'https://book-irql.onrender.com',
    icon: 'fa-lightbulb',
    status: 'Live',
  },
  {
    id: 2,
    name: 'Spotify Clone',
    description:
      'Full-featured music streaming application with playlists, authentication, and real-time playback.',
    tech: ['React.js', 'Node.js', 'PostgreSQL'],
    url: 'https://spotify-clone-r4o0.onrender.com',
    icon: 'fa-music',
    status: 'Live',
  },
  {
    id: 3,
    name: 'URL Shortener',
    description:
      'Efficient URL shortening service with analytics, custom slugs, and expiration settings.',
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    url: 'https://url-shortner-self-seven.vercel.app',
    icon: 'fa-link',
    status: 'Live',
  },
  {
    id: 4,
    name: 'Portfolio Builder',
    description:
      'Drag-and-drop portfolio creation platform with templates and SEO optimization.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    url: '#',
    icon: 'fa-briefcase',
    status: 'Coming Soon',
  },
  {
    id: 5,
    name: 'AI Learning Assistant',
    description:
      'AI-based learning companion for personalized study plans, quizzes, and doubt solving.',
    tech: ['Python', 'TensorFlow', 'React'],
    url: '#',
    icon: 'fa-graduation-cap',
    status: 'Coming Soon',
  },
  {
    id: 6,
    name: 'Social Analytics Dashboard',
    description:
      'Analytics platform to track engagement, trends, and content performance in real-time.',
    tech: ['React.js', 'Django', 'PostgreSQL'],
    url: '#',
    icon: 'fa-chart-line',
    status: 'Coming Soon',
  },
]

export default function ProjectsPage() {
  return (
    <section className="bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-[var(--electric-purple)] py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
          Our Projects
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/90">
          Showcasing innovation and excellence through real-world applications
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-2 hover:border-primary hover:shadow-xl"
            >
              <div className="mb-4 text-4xl text-primary">
                <i className={`fas ${project.icon}`} />
              </div>

              <h3 className="text-xl font-bold text-foreground">
                {project.name}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold ${
                    project.status === 'Live'
                      ? 'border border-green-500/50 bg-green-500/10 text-green-500'
                      : 'border border-yellow-500/50 bg-yellow-500/10 text-yellow-500'
                  }`}
                >
                  <i
                    className={`fas ${
                      project.status === 'Live'
                        ? 'fa-check-circle'
                        : 'fa-clock'
                    }`}
                  />
                  {project.status}
                </span>
              </div>

              {project.status === 'Live' ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:translate-x-1"
                >
                  View Project <i className="fas fa-arrow-right" />
                </a>
              ) : (
                <span className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-muted px-6 py-3 text-sm text-muted-foreground">
                  Coming Soon <i className="fas fa-hourglass-end" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
