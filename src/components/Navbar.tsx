
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { text: 'Problem', href: '#problem' },
    { text: 'Solution', href: '#solution' },
    { text: 'Market', href: '#market' },
    { text: 'How It Works', href: '#how-it-works' },
    { text: 'Team', href: '#team' },
    { text: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container max-w-[1400px] mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 z-10">
          <span className="text-xl font-bold font-display bg-gradient-to-r from-wattzy-blue to-wattzy-green text-transparent bg-clip-text">
            Wattzy
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-wattzy-blue transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href="#contact" className="hidden md:block btn-primary">
          Join the EV Revolution
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground z-10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-[5] flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-lg font-medium text-foreground/80 hover:text-wattzy-blue transition-colors"
              onClick={closeMenu}
            >
              {link.text}
            </a>
          ))}
          <a href="#contact" className="btn-primary mt-4" onClick={closeMenu}>
            Join the EV Revolution
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
