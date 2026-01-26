import { Code2, Database, Globe, Server, Cpu, Code } from 'lucide-react';

const technologies = [
  // Frontend
  { name: 'React', icon: Code2 }, { name: 'Next.js', icon: Globe }, { name: 'TypeScript', icon: Code2 },
  
  // Backend & Languages
  { name: 'Node.js', icon: Server }, { name: 'PHP', icon: Code }, { name: 'Java, Python, C#, C', icon: Code },

  // Other
  { name: 'Arduino', icon: Cpu }, { name: 'MongoDB & PostgreSQL', icon: Database },
];

export default function About() {
  return (
    <main className="py-12">
      {/* Hero */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            About me
          </span>
          <h1 className="mb-8 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Developer with a passion for{' '}
            <span className="text-gradient">design</span>
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground">
              I'm Simo, an Italian full-stack developer.
              I specialize in building modern, performant, 
              and visually appealing web applications.
            </p>
            <p className="text-lg text-muted-foreground">
              My approach combines solid technical skills with a keen eye for design and 
              user experience. I believe the best code is not only functional, but also 
              elegant, maintainable, and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies - Fan Layout */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Technologies</h2>
            <p className="text-muted-foreground">
              Tools I use daily to create quality projects
            </p>
          </div>
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-card"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <tech.icon className="h-8 w-8 text-primary" />
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Experience</h2>
            <div className="space-y-8">
              <div className="relative border-l-2 border-primary/30 pl-8">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary" />
                <span className="text-sm font-semibold text-primary">2023 - 2025</span>
                <h3 className="mt-1 text-xl font-bold text-foreground">karting pro (versteppen sposatti)</h3>
                <p className="mt-2 text-muted-foreground">
                  Guidiavo che ero uno scheggia, mai stato cosi veloce (mi battevano tutti)
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}