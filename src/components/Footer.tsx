import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-muted-foreground/30 py-12">
      <div className="container mx-auto px-6">
        {/* Top Row */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left Links */}
          <div className="flex gap-6">
            <Link to="/about" className="font-semibold text-foreground transition-colors hover:text-primary">
              About
            </Link>
          </div>

          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-primary">
            Simo
          </Link>

          {/* Right Links */}
          <div className="flex gap-6">
            <Link to="/projects" className="font-semibold text-foreground transition-colors hover:text-primary">
              Projects
            </Link>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Simo. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Purp7ePi3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
