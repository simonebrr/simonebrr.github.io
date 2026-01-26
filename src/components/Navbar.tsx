import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 px-[5%] py-5">
        <div className="mx-auto flex w-[90%] max-w-[1400px] items-center justify-between gap-4 rounded-full border border-border bg-navbar px-6 py-3.5 backdrop-blur-sm md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 md:px-12">
          {/* Logo */}
          <Link to="/" className="text-lg font-bold text-primary md:justify-self-start">
            Simo
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? 'text-primary' : 'text-navbar-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden rounded-full border border-foreground/20 bg-background px-5 py-2 font-medium text-foreground transition-all hover:bg-foreground hover:text-background md:block md:justify-self-end"
          >
            Hire me
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-navbar-foreground" />
          </button>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 z-[60] h-screen w-4/5 max-w-[350px] border-r border-border bg-background p-10 pt-24 shadow-xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center text-3xl text-muted-foreground transition-colors hover:text-primary"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-8 w-8" />
        </button>
        
        <nav className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`border-l-[3px] text-2xl font-semibold transition-all hover:border-primary hover:pl-4 hover:text-primary ${
                isActive(link.href)
                  ? 'border-primary pl-4 text-primary'
                  : 'border-transparent text-foreground/80'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border-l-[3px] border-transparent text-2xl font-semibold text-foreground/80 transition-all hover:border-primary hover:pl-4 hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
