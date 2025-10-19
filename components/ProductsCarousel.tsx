'use client';

import { useState, useCallback, useEffect, useMemo, memo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { QRPreview } from '@/components/QRPreview';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: string;
  name: string;
  title: string;
  simpleBenefit: string;
  description: string;
  badges: string[];
  features: string[];
  ctas: { text: string; variant: 'default' | 'outline'; link?: string }[];
  image: string;
  showQR?: boolean;
  isVideo?: boolean;
}

interface ProductsCarouselProps {
  products: Product[];
}

export const ProductsCarousel = memo(function ProductsCarousel({ products }: ProductsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();

  // Memoizar produtos duplicados para evitar re-criação em cada render
  const duplicatedProducts = useMemo(() =>
    [...products, ...products, ...products, ...products],
    [products]
  );

  const handleCardClick = useCallback((absoluteIndex: number) => {
    if (isDragging) return; // Ignora click se estiver arrastando

    if (activeIndex === absoluteIndex) {
      // Clicou no mesmo: fecha e retoma
      setActiveIndex(-1);
      setIsPaused(false);
    } else {
      // Clicou em outro: expande e pausa
      setActiveIndex(absoluteIndex);
      setIsPaused(true);
    }
  }, [activeIndex, isDragging]);

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
    setIsPaused(true);
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    // Pequeno delay antes de retomar
    setTimeout(() => {
      setIsPaused(false);
    }, 300);
  }, []);

  // Controle de animação com useAnimation
  useEffect(() => {
    if (!isPaused && !isDragging) {
      // Inicia animação contínua
      controls.start({
        x: -((products.length * 2) * (280 + 24)),
        transition: {
          duration: (products.length * 2) * 8,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }
      });
    } else {
      // Para durante hover, click ou drag
      controls.stop();
    }
  }, [isPaused, isDragging, controls, products.length]);

  // Listener ESC para fechar
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeIndex !== -1) {
        setActiveIndex(-1);
        setIsPaused(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [activeIndex]);

  const getImageSrc = (product: Product, isActive: boolean) => {
    if (product.id === 'chat-spx') {
      return isActive ? '/chatspx.png' : '/chatspx_mobile.png';
    }
    if (product.id === 'marketplace') {
      return isActive ? '/marketplace.png' : '/marketplace_celular.png';
    }
    return product.image; // default
  };

  return (
    <div className="relative">
      {/* Gradientes Fade nas Bordas - Mais Estreito */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-950 via-white/80 dark:via-gray-950/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-950 via-white/80 dark:via-gray-950/80 to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden py-8">
        <motion.div
          className="flex gap-4 md:gap-6"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -((products.length * 2) * (280 + 24)), right: 200 }}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!isDragging) {
              setIsPaused(false);
              // Fecha card expandido quando mouse sai da área
              if (activeIndex !== -1) {
                setActiveIndex(-1);
              }
            }
          }}
          style={{
            willChange: 'transform',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        >
          {duplicatedProducts.map((product, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={`${product.id}-${index}`}
                onClick={() => handleCardClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer flex items-end
                  transition-all duration-400 ease-out
                  ${isActive
                    ? 'w-[280px] md:w-[400px] lg:w-[480px] shadow-2xl ring-2 ring-primary/50'
                    : 'w-[200px] md:w-[240px] lg:w-[280px] shadow-lg hover:shadow-xl'
                  }
                  h-[450px] md:h-[520px] lg:h-[580px]
                `}
              >
                {/* Background de Mídia (sempre presente) */}
                {product.showQR ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div className="scale-90">
                      <QRPreview />
                    </div>
                  </div>
                ) : product.isVideo ? (
                  <div className="absolute inset-0 bg-black">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      style={{ transform: 'none' }}
                    >
                      <source src={product.image} type="video/mp4" />
                    </video>
                  </div>
                ) : (
                  <div className={`absolute inset-0 transition-all duration-400 ease-in-out ${isActive
                      ? 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4'
                      : 'bg-gray-900 dark:bg-gray-950'
                    }`}>
                    <img
                      src={getImageSrc(product, isActive)}
                      alt={product.title}
                      className={`w-full h-full transition-all duration-400 ease-in-out ${isActive ? 'object-contain' : 'object-cover'
                        }`}
                    />
                  </div>
                )}

                {/* Gradiente Overlay - de baixo pra cima */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

                {/* Conteúdo */}
                <div
                  className={`
                  relative z-20 w-full p-5 md:p-6 text-white overflow-hidden
                  transition-transform duration-400 ease-in-out
                  ${isActive
                      ? 'transform translate-y-0'
                      : 'transform translate-y-[calc(100%-48px)]'
                    }
                `}
                >
                  {/* Badge do Produto - Sempre visível */}
                  <motion.div
                    className="mb-2 -mt-2"
                    animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-wide">
                      {product.name}
                    </Badge>
                  </motion.div>

                  {/* Título - Só aparece quando expandido */}
                  <motion.h3
                    className="text-lg md:text-xl lg:text-2xl font-bold mb-3 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {product.title}
                  </motion.h3>

                  {/* Benefício Simples */}
                  <motion.p
                    className="text-sm md:text-base text-yellow-400 mb-3 leading-snug font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20
                    }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                  >
                    {product.simpleBenefit}
                  </motion.p>

                  {/* Badges */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20
                    }}
                    transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                  >
                    {product.badges.map((badge, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3, delay: 0.2 + idx * 0.05, ease: "easeOut" }}
                      >
                        <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                          {badge}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    className="space-y-2 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20
                    }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                  >
                    {product.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : -20
                        }}
                        transition={{ duration: 0.3, delay: 0.25 + idx * 0.05, ease: "easeOut" }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs md:text-sm text-gray-100 leading-snug">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTAs */}
                  <motion.div
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20
                    }}
                    transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                  >
                    {product.ctas.map((cta, idx) => (
                      <Button
                        key={idx}
                        variant={cta.variant === 'default' ? 'default' : 'outline'}
                        size="default"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (cta.link) {
                            window.open(cta.link, '_blank');
                          }
                        }}
                        className={
                          cta.variant === 'default'
                            ? 'bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white shadow-lg hover:shadow-xl w-full'
                            : 'border-white/40 hover:border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-full'
                        }
                      >
                        {cta.text.includes('especialista') ? (
                          <FaWhatsapp className="w-4 h-4 mr-2" />
                        ) : (
                          <ExternalLink className="w-4 h-4 mr-2" />
                        )}
                        {cta.text}
                      </Button>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
});

