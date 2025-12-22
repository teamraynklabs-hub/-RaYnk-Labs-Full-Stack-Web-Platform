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
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <div
              key={project.id}
              className="
                group relative flex h-full flex-col
                rounded-3xl border border-border bg-card
                p-8 transition-all duration-300
                hover:-translate-y-2 hover:border-primary
              "
            >
              {/* Glow Layer */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-3xl
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
                style={{
                  boxShadow:
                    'inset 0 0 0 1px oklch(1 0 0 / 6%), 0 0 80px oklch(0.62 0.22 259 / 0.18)',
                }}
              />

              {/* Icon */}
              <div
                className="
                  mb-5 flex h-14 w-14 items-center justify-center
                  rounded-xl bg-primary/10 text-primary
                  transition group-hover:scale-110
                "
              >
                <i className={`fas ${project.icon} text-xl`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground">
                {project.name}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="
                      rounded-full border border-border
                      bg-background/40 px-3 py-1
                      text-xs font-medium text-primary
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="mt-5">
                <span
                  className={`
                    inline-flex items-center gap-2 rounded-full px-4 py-1
                    text-xs font-semibold
                    ${
                      project.status === 'Live'
                        ? 'border border-primary/40 bg-primary/10 text-primary'
                        : 'border border-border bg-muted text-muted-foreground'
                    }
                  `}
                >
                  <i
                    className={`fas ${
                      project.status === 'Live'
                        ? 'fa-circle-check'
                        : 'fa-clock'
                    }`}
                  />
                  {project.status}
                </span>
              </div>

              {/* Action */}
              {project.status === 'Live' ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6 inline-flex items-center justify-center gap-2
                    rounded-full px-6 py-3 text-sm font-semibold
                    text-primary-foreground transition-all
                  "
                  style={{
                    background: 'var(--gradient-1)',
                    boxShadow:
                      '0 0 25px oklch(0.62 0.22 259 / 0.35)',
                  }}
                >
                  View Project
                  <i className="fas fa-arrow-right" />
                </a>
              ) : (
                <div className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-muted px-6 py-3 text-sm text-muted-foreground">
                  Coming Soon
                  <i className="fas fa-hourglass-end" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
