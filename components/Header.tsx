'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export const Header = memo(function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detecta se está no Hero verificando a próxima seção
      const solutionsSection = document.querySelector('#solucoes-servicos');
      if (solutionsSection) {
        const solutionsTop = solutionsSection.getBoundingClientRect().top;
        // Header só aparece quando a seção Soluções chegar no topo
        setIsInHero(solutionsTop > 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    
    // Também executa na montagem inicial
    handleScroll();
  }, []);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Fecha menu mobile após navegação
  }, []);

  // Bloquear scroll quando menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { href: '#solucoes-servicos', label: 'Soluções' },
    { href: '#produtos', label: 'Produtos' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#parceiros', label: 'Parceiros' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <>
      {/* Desktop Header - Oculto em mobile */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${scrolled ? 'py-1' : 'py-2'
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
            <ul className="flex items-center justify-center gap-2 lg:gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.href)}
                    className={`
                      rounded-full text-sm lg:text-base
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

      {/* Mobile Header - Visível apenas em mobile */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${scrolled || !isInHero ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/logo.png"
              alt="Simplex"
              width={120}
              height={40}
              className={`h-8 w-auto transition-all duration-300 ${
                scrolled || !isInHero ? 'brightness-0 dark:brightness-100' : ''
              }`}
              priority
            />
          </motion.div>

          {/* Right Side: Theme Toggle + Hamburguer */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-gray-900 z-[70] md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header do Drawer */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <Image
                    src="/logo.png"
                    alt="Simplex"
                    width={120}
                    height={40}
                    className="h-8 w-auto brightness-0 dark:brightness-100"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Fechar menu"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto py-6">
                  <ul className="space-y-2 px-4">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Button
                          variant="ghost"
                          onClick={() => scrollToSection(item.href)}
                          className="w-full justify-start text-lg py-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          {item.label}
                        </Button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer do Drawer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    © {new Date().getFullYear()} Simplex Soluções
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});
