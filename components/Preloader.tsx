'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let minTimeReached = false;
    let pageLoaded = false;

    // Timer para garantir tempo mínimo de 4 segundos
    const minTimer = setTimeout(() => {
      minTimeReached = true;
      checkIfCanHide();
    }, 4000);

    // Verificar se a página já carregou
    const checkPageLoad = () => {
      if (document.readyState === 'complete') {
        pageLoaded = true;
        checkIfCanHide();
      }
    };

    // Função para verificar se pode esconder o loader
    const checkIfCanHide = () => {
      if (minTimeReached && pageLoaded) {
        setIsLoaded(true);
        // Pequeno delay antes de iniciar fade out
        setTimeout(() => {
          setIsVisible(false);
        }, 100);
      }
    };

    // Listeners para eventos de carregamento
    if (document.readyState === 'complete') {
      pageLoaded = true;
      checkIfCanHide();
    } else {
      window.addEventListener('load', checkPageLoad);
      document.addEventListener('DOMContentLoaded', checkPageLoad);
    }

    // Cleanup
    return () => {
      clearTimeout(minTimer);
      window.removeEventListener('load', checkPageLoad);
      document.removeEventListener('DOMContentLoaded', checkPageLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeOut" }
          }}
          onAnimationComplete={() => {
            if (!isVisible) {
              // Remove o componente do DOM após animação
              const preloader = document.getElementById('preloader');
              if (preloader) {
                preloader.remove();
              }
            }
          }}
          id="preloader"
        >
          <div className="flex flex-col items-center justify-center">
            {/* SVG do Loading Goes Off Track - Simplificado */}
            <svg 
              className="pl" 
              viewBox="0 0 128 128" 
              width="96px" 
              height="96px" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(193,90%,55%)" />
                  <stop offset="100%" stopColor="hsl(223,90%,55%)" />
                </linearGradient>
              </defs>
              <circle 
                className="pl__ring" 
                r="48" 
                cx="64" 
                cy="64" 
                fill="none" 
                stroke="hsla(0,10%,10%,0.1)" 
                strokeWidth="12" 
                strokeLinecap="round" 
              />
              <path 
                className="pl__worm" 
                d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z" 
                fill="none" 
                stroke="url(#pl-grad)" 
                strokeWidth="12" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeDasharray="44 1111" 
                strokeDashoffset="10" 
              />
            </svg>
            
            {/* Texto opcional de carregamento */}
            <motion.div 
              className="mt-6 text-white/70 text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              Pensando...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
