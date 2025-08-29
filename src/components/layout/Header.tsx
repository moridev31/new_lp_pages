import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="https://0e26855fc2ce419e804c85d0ecad7e35-ec73761b-8772-4572-9f47-2d6f79.fly.dev/?reload=0#" className="flex items-center">
            <div className="text-2xl font-display font-bold">
              <GradientText>Netwix</GradientText>
              <span className="ml-1">Tecnologia</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="https://0e26855fc2ce419e804c85d0ecad7e35-ec73761b-8772-4572-9f47-2d6f79.fly.dev/?reload=0#about" className="text-white/80 hover:text-white font-medium transition-colors">
            Sobre
          </a>
          <a href="#services" className="text-white/80 hover:text-white font-medium transition-colors">
            Serviços
          </a>
          <a href="#methodology" className="text-white/80 hover:text-white font-medium transition-colors">
            Metodologia
          </a>
          <Button 
            variant="primary" 
            className="ml-4"
            onClick={() => window.location.href = '#apply'}
          >
            Aplicar Agora
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-md absolute top-full left-0 right-0 border-t border-dark-700/50 animate-fade-in">
          <div className="py-5 px-6 flex flex-col space-y-6">
            <a 
              href="https://0e26855fc2ce419e804c85d0ecad7e35-ec73761b-8772-4572-9f47-2d6f79.fly.dev/?reload=0#about" 
              className="text-white/80 hover:text-white font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#services" 
              className="text-white/80 hover:text-white font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#methodology" 
              className="text-white/80 hover:text-white font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Metodologia
            </a>
            <Button 
              variant="primary" 
              className="w-full text-center py-3"
              onClick={() => {
                window.location.href = '#apply';
                setIsMenuOpen(false);
              }}
            >
              Aplicar Agora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const GradientText = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default Header;
