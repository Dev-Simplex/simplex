'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detecta se está no Hero (primeira seção)
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsInHero(heroBottom > 100); // Se Hero ainda visível
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { href: '#produtos', label: 'Produtos' },
    { href: '#solucoes', label: 'Soluções' },
    { href: '#setores', label: 'Setores' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-1' : 'py-2'
      } ${isInHero ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 pointer-events-auto translate-y-0'}`}
    >
      <div className="flex justify-center px-4">
        <nav
          className={`
            bg-white/10 backdrop-blur-lg 
            rounded-full 
            shadow-md 
            border border-white/20
            px-4 py-1
            max-w-fit mx-auto
            transition-all duration-300
            ${scrolled ? 'shadow-lg' : 'shadow-md'}
          `}
        >
          <ul className="flex items-center justify-center gap-1 md:gap-2 lg:gap-6 flex-wrap">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    px-2.5 py-1 
                    text-sm font-medium 
                    ${isInHero ? 'text-white' : 'text-gray-700'} 
                    hover:text-white 
                    hover:bg-white/20
                    rounded-full
                    transition-all duration-200
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
