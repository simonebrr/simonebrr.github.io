import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Notes Management Platform',
    description:
      'Collaborative platform for managing and sharing study notes with friends. Features include real-time sharing, organization by subjects, and user authentication.',
    tags: ['HTML', 'CSS', 'PHP', 'JS'],
    image: '/image/Uninotes.png',
    github: 'https://github.com/Purp7ePi3',
    live: 'https://github.com/Mattia-Pozzati/UniNotes',
  },
  {
    id: 2,
    title: 'Java Game',
    description:
      'Interactive game developed in Java with custom graphics, game logic, and user interface. Built as a team project to learn object-oriented programming.',
    tags: ['Java', 'Game Development', 'OOP'],
    image: '/image/Uniescape.png',
    github: 'https://github.com/Purp7ePi3',
    live: 'https://github.com/Alejandro-the-Unyielding/OOP24-UE',
  },
  {
    id: 3,
    title: 'Trading Cards Marketplace',
    description:
      'E-commerce platform for buying and selling collectible trading cards. Features include user profiles, listings management, search filters, and secure transactions.',
    tags: ['HTML', 'CSS', 'PHP', 'JS'],
    image: '/image/Cardcollector.png',
    github: 'https://github.com/Purp7ePi3',
    live: 'https://github.com/Purp7ePi3/Database',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            My Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A selection of the projects I have worked on. Each one represents a
            unique challenge and an opportunity for growth.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
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
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.live}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-4 font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
