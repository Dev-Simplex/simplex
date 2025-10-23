'use client';

import { useState, useEffect } from 'react';
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

  const getImageSrc = (product: Product, isModal: boolean) => {
    if (product.id === 'chat-spx') {
      return isModal ? '/chatspx_mobile.png' : '/chatspx.png';
    }
    if (product.id === 'marketplace') {
      return isModal ? '/marketplace_celular.png' : '/marketplace.png';
    }
    return product.image; // default
  };

  // Função para esconder/mostrar widget do Chatwoot
  const toggleChatwootWidget = (hide: boolean) => {
    if (hide) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
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
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 glass-modal flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`
                relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl
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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Imagem/Video */}
                <div className="relative h-[300px] lg:h-auto">
                  {product.showQR ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                      <div className="scale-90">
                        {/* QR Preview placeholder */}
                        <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center text-gray-500">
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
                      src={getImageSrc(product, true)}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Conteúdo */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-wide text-sm">
                      {product.name}
                    </Badge>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {product.title}
                    </h2>
                    
                    <p className="text-lg text-yellow-400 mb-6 font-medium">
                      {product.simpleBenefit}
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
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
                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-100 leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {product.ctas.map((cta, idx) => (
                      <Button
                        key={idx}
                        variant={cta.variant === 'default' ? 'default' : 'outline'}
                        size="lg"
                        onClick={(e) => handleCtaClick(e, cta.link)}
                        className={`
                          flex-1 text-sm font-medium
                          ${cta.variant === 'default'
                            ? 'bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white shadow-lg hover:shadow-xl'
                            : 'border-white/40 hover:border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white'
                          }`}
                      >
                        {cta.text.includes('especialista') ? (
                          <FaWhatsapp className="w-4 h-4 mr-2" />
                        ) : (
                          <ExternalLink className="w-4 h-4 mr-2" />
                        )}
                        {cta.text}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
