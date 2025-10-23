'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
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

interface ProductCardProps {
  product: Product;
  isDark?: boolean;
}

export function ProductCard({ product, isDark = false }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getImageSrc = (product: Product, isModal: boolean) => {
    if (product.id === 'chat-spx') {
      return isModal ? '/chatspx_mobile.png' : '/chatspx.png';
    }
    if (product.id === 'marketplace') {
      return isModal ? '/marketplace_celular.png' : '/marketplace.png';
    }
    return product.image; // default
  };

  // Função para esconder/mostrar widget do Chatwoot e bloquear scroll
  const toggleChatwootWidget = (hide: boolean) => {
    if (hide) {
      const scrollY = window.scrollY;
      scrollPositionRef.current = scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.classList.add('modal-open');
    } else {
      const scrollPos = scrollPositionRef.current;
      
      // Desabilita scroll-behavior smooth ANTES de tudo
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      
      const originalHtmlScrollBehavior = htmlElement.style.scrollBehavior;
      const originalBodyScrollBehavior = bodyElement.style.scrollBehavior;
      
      htmlElement.style.scrollBehavior = 'auto';
      bodyElement.style.scrollBehavior = 'auto';
      
      // Remove todos os estilos e classe
      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restaura scroll com fallback triplo
      requestAnimationFrame(() => {
        // Método 1: scrollTop direto (mais confiável)
        document.documentElement.scrollTop = scrollPos;
        document.body.scrollTop = scrollPos;
        
        // Método 2: window.scrollTo (fallback)
        window.scrollTo(0, scrollPos);
        
        // Método 3: window.scroll (segundo fallback)
        window.scroll(0, scrollPos);
        
        // Reativa scroll-behavior depois
        requestAnimationFrame(() => {
          htmlElement.style.scrollBehavior = originalHtmlScrollBehavior;
          bodyElement.style.scrollBehavior = originalBodyScrollBehavior;
        });
      });
    }
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
    toggleChatwootWidget(true); // Esconde widget
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    toggleChatwootWidget(false); // Mostra widget
  };

  const handleCtaClick = (e: React.MouseEvent, link?: string) => {
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <>
      {/* Card Principal */}
      <motion.div
        onClick={handleCardClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative cursor-pointer rounded-2xl overflow-hidden
          glass-card-hover ${isDark ? 'glass-card-dark glass-card-hover-dark' : 'glass-card'}
          h-[400px] group
        `}
      >
        {/* Imagem de Preview */}
        <div className="relative h-[240px] overflow-hidden">
          {product.showQR ? (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
              <div className="scale-75">
                {/* QR Preview placeholder - você pode importar o componente QRPreview aqui */}
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center text-gray-500">
                  QR Code
                </div>
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
              >
                <source src={product.image} type="video/mp4" />
              </video>
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
          
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Conteúdo do Card */}
        <div className="p-6 h-[160px] flex flex-col justify-between">
          {/* Badge e Título */}
          <div>
            <Badge className="mb-3 bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-wide text-xs">
              {product.name}
            </Badge>
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {product.title}
            </h3>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {product.badges.slice(0, 2).map((badge, idx) => (
              <Badge 
                key={idx}
                variant="outline" 
                className="bg-gray-900/80 dark:bg-white/10 backdrop-blur-sm border-gray-700/50 dark:border-white/20 text-gray-100 dark:text-white text-xs"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && mounted && createPortal(
        <div
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2147483647,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            padding: '1rem'
          }}
          onClick={handleCloseModal}
        >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`
                relative w-full max-w-5xl overflow-hidden rounded-2xl
                ${isDark ? 'glass-card-dark' : 'glass-card'}
                shadow-2xl
              `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão Fechar */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`flex ${product.isVideo ? 'flex-col lg:flex-row' : 'flex-col'} max-h-[90vh]`}>
                {/* PARTE SUPERIOR: Imagem/Video */}
                <div className={`${product.isVideo ? 'w-full lg:w-1/2' : 'w-full'} flex-shrink-0 flex items-center justify-center p-4 relative ${
                  product.id === 'mobile-app' ? 'glass-image-video' :
                  product.id === 'chat-spx' ? 'glass-image-chat' : 
                  product.id === 'marketplace' ? 'glass-image-marketplace' : 
                  'glass-image-container'
                }`}>
                  {product.showQR ? (
                    <div className="w-full h-full max-h-[40vh] md:max-h-[50vh] lg:max-h-[90vh] flex items-center justify-center">
                      <div className="scale-90">
                        {/* QR Preview placeholder */}
                        <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center text-gray-500">
                          QR Code
                        </div>
                      </div>
                    </div>
                  ) : product.isVideo ? (
                    <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-full lg:min-h-[500px] bg-black">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                      >
                        <source src={product.image} type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <img
                      src={getImageSrc(product, true)}
                      alt={product.title}
                       className="w-full h-auto max-h-[40vh] md:max-h-[50vh] lg:max-h-[90vh] object-contain"
                    />
                  )}
                </div>

                {/* PARTE INFERIOR: Conteúdo + Botões */}
                <div className={`${product.isVideo ? 'w-full lg:w-1/2' : 'w-full'} flex flex-col min-h-0`}>
                  {/* Área Scrollável */}
                  <div className="flex-1 overflow-y-auto p-5 md:p-6 lg:p-8 custom-scrollbar">
                    <div>
                      <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-wide text-sm">
                        {product.name}
                      </Badge>
                      
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                        {product.title}
                      </h2>
                      
                      <p className="text-sm md:text-base text-yellow-400 mb-4 sm:mb-6 font-medium">
                        {product.simpleBenefit}
                      </p>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                        {product.badges.map((badge, idx) => (
                          <Badge 
                            key={idx}
                            variant="outline" 
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="space-y-2 sm:space-y-3">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Botões Fixos */}
                  <div className="flex-shrink-0 p-4 md:p-6 bg-black/60 border-t border-white/10">
                    <div className="flex flex-col gap-2.5">
                      {product.ctas.map((cta, idx) => (
                        <Button
                          key={idx}
                          variant={cta.variant === 'default' ? 'default' : 'outline'}
                          onClick={(e) => handleCtaClick(e, cta.link)}
                          className={`
                            w-full h-auto py-3 px-4 text-sm font-medium flex items-center justify-center gap-2
                            ${cta.variant === 'default'
                              ? 'bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white shadow-lg hover:shadow-xl'
                              : 'border-white/40 hover:border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white'
                            }`}
                        >
                          {cta.text.includes('especialista') ? (
                            <FaWhatsapp className="w-4 h-4 flex-shrink-0" />
                          ) : (
                            <ExternalLink className="w-4 h-4 flex-shrink-0" />
                          )}
                          <span className="text-center">{cta.text}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>,
        document.body
      )}
    </>
  );
}
