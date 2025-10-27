'use client';

import { memo, useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  speed: number;
}

export const GalaxyBackground = memo(function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Configurar tamanho do canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Número de estrelas baseado no dispositivo
    const starCount = isMobile ? 60 : 120;

    // Criar estrelas com diferentes profundidades (3 camadas)
    const createStars = () => {
      const stars: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 3, // 3 camadas de profundidade (0-3)
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          speed: Math.random() * 0.5 + 0.2,
        });
      }
      return stars;
    };

    starsRef.current = createStars();

    // Animação otimizada com requestAnimationFrame
    let lastTime = 0;
    const animate = (currentTime: number) => {
      // Throttle para 60fps
      if (currentTime - lastTime < 16) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      // Limpar canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenhar e animar estrelas
      starsRef.current.forEach((star) => {
        // Efeito parallax baseado na profundidade
        star.y += star.speed * (star.z + 1) * 0.5;

        // Resetar estrela quando sair da tela
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Efeito twinkle sutil
        const twinkle = Math.sin(currentTime * 0.001 + star.x) * 0.2 + 0.8;
        
        // Desenhar estrela com glow
        const finalOpacity = star.opacity * twinkle;
        const layerOpacity = 1 - (star.z / 3) * 0.3; // Camadas mais distantes mais transparentes

        // Glow effect
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${finalOpacity * layerOpacity})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${finalOpacity * layerOpacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Núcleo da estrela
        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity * layerOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Iniciar animação
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [isMobile]);

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

      {/* Canvas para estrelas animadas - Muito mais performático que box-shadow */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[-1] pointer-events-none"
        style={{
          willChange: 'contents',
          transform: 'translateZ(0)', // GPU acceleration
        }}
      />
    </>
  );
});
