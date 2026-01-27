import { ArrowDown, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center px-6 py-20">
      {/* Foto in alto a destra */}
      <div className="absolute right-10 top-10 opacity-0 animate-fade-in">
        <img 
          src="/image/me.jpg" 
          alt="Simo" 
          className="h-32 w-32 rounded-full border-4 border-primary/30 object-cover shadow-lg shadow-primary/20 transition-transform hover:scale-105 md:h-40 md:w-40"
        />
      </div>

      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-in-delay-1 sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm{' '}
          <span className="text-gradient">Simo</span>
          <br />
          <span className="text-muted-foreground">Full-Stack Developer</span>
        </h1>

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