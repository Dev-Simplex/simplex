'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Header = memo(function Header() {
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const navItems = [
    { href: '#solucoes-servicos', label: 'Soluções' },
    { href: '#produtos', label: 'Produtos' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#parceiros', label: 'Parceiros' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'
        } ${isInHero ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 pointer-events-auto translate-y-0'}`}
    >
      <div className="flex justify-center px-4">
        <nav
          className={`
            bg-white/10 dark:bg-black/30 backdrop-blur-lg 
            rounded-full 
            shadow-md 
            border border-white/20 dark:border-white/10
            px-4 py-1
            max-w-fit mx-auto
            transition-all duration-300
            ${scrolled ? 'shadow-lg' : 'shadow-md'}
          `}
        >
          <ul className="flex items-center justify-center gap-1 md:gap-2 lg:gap-4 flex-wrap">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    rounded-full
                    ${isInHero
                      ? 'text-white hover:text-white hover:bg-white/20'
                      : 'text-gray-700 dark:text-gray-200 hover:text-brand-600 dark:hover:text-accent hover:bg-gray-100 dark:hover:bg-white/10'
                    } 
                  `}
                >
                  {item.label}
                </Button>
              </li>
            ))}
            <li className="ml-2 pl-2 border-l border-white/20 dark:border-white/10">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
});
