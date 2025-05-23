
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <h1 className={cn(
              'font-playfair font-bold tracking-wide transition-all',
              isScrolled ? 'text-2xl text-beauty-dark' : 'text-3xl text-white'
            )}>
              <span className="text-beauty-gold">Radiance</span> Glow
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'font-medium transition-colors hover:text-beauty-gold',
                isScrolled ? 'text-beauty-dark' : 'text-white'
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/919876543210?text=Hi%20Radiance%20Glow%2C%20I%27d%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-beauty-gold hover:bg-beauty-gold/90 text-white px-4 py-2 rounded-full transition-all"
          >
            <Phone size={16} />
            <span>Book Now</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className={cn(
              'p-2 focus:outline-none',
              isScrolled ? 'text-beauty-dark' : 'text-white'
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-beauty-dark hover:text-beauty-gold font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/919876543210?text=Hi%20Radiance%20Glow%2C%20I%27d%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-beauty-gold hover:bg-beauty-gold/90 text-white px-4 py-2 rounded-full mt-3 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={16} />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
