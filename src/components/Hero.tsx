import { ArrowDown, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-5xl text-center">
        {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 opacity-0 animate-fade-in">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="text-sm font-medium text-foreground">Available for new projects</span>
        </div> */}

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-in-delay-1 sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm{' '}
          <span className="text-gradient">Simo</span>
          <br />
          <span className="text-muted-foreground">Full-Stack Developer</span>
        </h1>

        {/* <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-in-delay-2 md:text-xl">
          I create modern and engaging web experiences, 
          transforming ideas into digital products that make a difference.
        </p> */}

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
          >
            View Projects
            <ArrowRight className="h-5 w-5" />
          </Link>

          <a
            href="/image/brunelli_cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-4 font-semibold text-primary transition-all hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="h-5 w-5" />
            Download CV
          </a>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}