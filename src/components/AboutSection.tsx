import { Code2, Palette, Rocket } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Development',
    description:
      'React, Next.js, TypeScript, Node.js, and more to build fast, production-ready web applications.',
  },
  {
    icon: Palette,
    title: 'Design',
    description:
      'Clean, modern UI/UX with strong attention to detail and user experience.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description:
      'Focused on speed, reliability, and optimization across every project.',
  },
];


export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            About me
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            I build digital products
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Full-stack developer focused on performance, clean UX, and scalable systems.
            Turning ideas into real software.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <skill.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
