'use client';

import { memo, useEffect, useState } from 'react';

export const GalaxyBackground = memo(function GalaxyBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduzir número de estrelas drasticamente para melhor performance
  const starCount = isMobile ? 15 : 25; // Era 100+ antes

  return (
    <>
      {/* Background galáxia com overlay escuro */}
      <div className="absolute inset-0 z-[-3]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://1yiyuhrfy1frfhlm.public.blob.vercel-storage.com/testee.jpg)',
          }}
        />
        <div 
          className="absolute inset-0 bg-black opacity-30 z-[-1]"
        />
      </div>

      {/* Star field otimizado com CSS Grid */}
      <div 
        className="star-field absolute inset-0 z-[-1]"
        style={{
          perspective: '600px',
          WebkitPerspective: '600px',
          willChange: 'transform',
          transform: 'translateZ(0)', // GPU acceleration
        }}
      >
        <div className="star-layer star-layer-1" />
        <div className="star-layer star-layer-2" />
        <div className="star-layer star-layer-3" />
      </div>

      <style jsx>{`
        @keyframes sf-fly-by-1 {
          from {
            transform: translateZ(-600px);
            opacity: 0.5;
          }
          to {
            transform: translateZ(0);
            opacity: 0.5;
          }
        }

        @keyframes sf-fly-by-2 {
          from {
            transform: translateZ(-1200px);
            opacity: 0.5;
          }
          to {
            transform: translateZ(-600px);
            opacity: 0.5;
          }
        }

        @keyframes sf-fly-by-3 {
          from {
            transform: translateZ(-1800px);
            opacity: 0.5;
          }
          to {
            transform: translateZ(-1200px);
            opacity: 0.5;
          }
        }

        .star-layer {
          /* Reduzir drasticamente o número de estrelas para melhor performance */
          box-shadow: ${Array.from({ length: starCount }, (_, i) => {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const opacity = Math.random() * 0.5 + 0.3;
            const color = `rgba(255, 255, 255, ${opacity})`;
            return `${x}px ${y}px ${color}`;
          }).join(', ')};
          transform-style: preserve-3d;
          position: absolute;
          top: 50%;
          left: 50%;
          height: 2px;
          width: 2px;
          border-radius: 1px;
          will-change: transform;
          transform: translateZ(0); /* GPU acceleration */
        }

        .star-layer-1 {
          animation: sf-fly-by-1 8s linear infinite;
        }

        .star-layer-2 {
          animation: sf-fly-by-2 8s linear infinite;
        }

        .star-layer-3 {
          animation: sf-fly-by-3 8s linear infinite;
        }

        /* Reduzir animações em dispositivos móveis */
        @media (max-width: 768px) {
          .star-layer-1 {
            animation: sf-fly-by-1 12s linear infinite;
          }

          .star-layer-2 {
            animation: sf-fly-by-2 12s linear infinite;
          }

          .star-layer-3 {
            animation: sf-fly-by-3 12s linear infinite;
          }
        }

        /* Desabilitar animações para usuários que preferem movimento reduzido */
        @media (prefers-reduced-motion: reduce) {
          .star-layer-1,
          .star-layer-2,
          .star-layer-3 {
            animation: none;
          }
        }
      `}</style>
    </>
  );
});
