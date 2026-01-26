import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Notes Management Platform',
    description:
      'Collaborative platform for managing and sharing study notes with friends. Features include real-time sharing, organization by subjects, and user authentication.',
    tags: ['HTML', 'CSS', 'PHP', 'JS'],
    image:
      '/image/Uninotes.png',
    github: 'https://github.com/Purp7ePi3',
    live: 'https://github.com/Mattia-Pozzati/UniNotes',
  },
  {
    id: 2,
    title: 'Java Game',
    description:
      'Interactive game developed in Java with custom graphics, game logic, and user interface. Built as a team project to learn object-oriented programming.',
    tags: ['Java', 'Game Development', 'OOP'],
    image:
      '/image/Uniescape.png',
    github: 'https://github.com/Purp7ePi3',
    live: 'https://github.com/Alejandro-the-Unyielding/OOP24-UE',
  },
  {
    id: 3,
    title: 'Trading Cards Marketplace',
    description:
      'E-commerce platform for buying and selling collectible trading cards. Features include user profiles, listings management, search filters, and secure transactions.',
    tags: ['HTML', 'CSS', 'PHP', 'JS'],
    image:
      '/image/Cardcollector.png',
    github: 'https://github.com/Purp7ePi3',
    live: 'https://github.com/Purp7ePi3/Database',
  },
];

export default function Projects() {
  return (
    <main className="py-12">
      {/* Hero */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            My <span className="text-gradient">projects</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A selection of projects I've worked on with passion and dedication.
            Each project tells a story of challenges overcome and goals achieved.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Overlay Links */}
                <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <a
                    href={project.github}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>

                  <a
                    href={project.live}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h2 className="mb-3 text-2xl font-bold text-foreground">
                  {project.title}
                </h2>
                <p className="mb-6 text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
