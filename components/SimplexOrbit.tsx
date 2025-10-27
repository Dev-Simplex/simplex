'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectorIcon } from '@/components/SectorIcons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useModal } from '@/components/providers/ModalProvider';

interface SectionItem {
  icon: string;
  subtitle: string;
  description: string;
}

interface Section {
  title: string;
  items: SectionItem[];
}

interface Sector {
  id: string;
  name: string;
  title: string;
  logo: string;
  angle: number;
  cta: string;
  color: string;
  colorDark: string;
  sections: Section[];
}

interface SimplexOrbitProps {
  sectors: Sector[];
  isMobile?: boolean;
}

export function SimplexOrbit({ sectors, isMobile = false }: SimplexOrbitProps) {
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [clickedPosition, setClickedPosition] = useState<{ x: number, y: number } | null>(null);

  // Hook para gerenciar estado global do modal
  const { setIsModalOpen } = useModal();

  // Estado para controlar se modal está aberto (para reposicionar pétalas)
  const isModalOpen = selectedSector !== null;

  // Sincronizar estado do modal com o contexto global para esconder o widget Chatwoot
  useEffect(() => {
    setIsModalOpen(selectedSector !== null);
  }, [selectedSector, setIsModalOpen]);

  // Bloquear scroll da página quando modal está aberto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup ao desmontar
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleSectorClick = useCallback((sector: Sector) => {
    setSelectedSector(sector);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedSector(null);
  }, []);

  // Keyframes de animação para rotação das pétalas
  const orbitAnimation = `
    @keyframes orbit-rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  // Calcular posição das logos baseado no ângulo
  const getLogoPosition = (angle: number) => {
    const radius = isMobile ? 84 : 168; // raio proporcional para 350px  
    const center = isMobile ? 175 : 350; // centro 50% do container 350px
    const radians = (angle * Math.PI) / 180;
    return {
      x: center + Math.cos(radians) * radius,
      y: center + Math.sin(radians) * radius,
    };
  };

  // Calcular posição das pétalas baseado no ângulo e dimensões do SVG
  const getPetalPosition = (angle: number, svgWidth: number, svgHeight: number) => {
    const radius = isMobile ? 84 : 168; // raio proporcional para 350px
    const center = isMobile ? 175 : 350; // centro 50% do container 350px
    const radians = (angle * Math.PI) / 180;
    return {
      left: center + Math.cos(radians) * radius - svgWidth / 2,
      top: center + Math.sin(radians) * radius - svgHeight / 2,
    };
  };

  // Estrutura das pétalas - todas idênticas (SVG da IA) - voltadas para o centro
  // Rotação = (angle + 180) para que o TOPO/BICO (parte vermelha) aponte para o centro
  const petals = [
    { angle: 270, width: 227, height: 256, sector: 'ti', scale: isMobile ? 0.35 : 0.63 },
    { angle: 90, width: 227, height: 256, sector: 'chat', scale: isMobile ? 0.35 : 0.63 },
    { angle: 30, width: 227, height: 256, sector: 'ia', scale: isMobile ? 0.35 : 0.63 },
    { angle: 210, width: 227, height: 256, sector: 'dev', scale: isMobile ? 0.35 : 0.63 },
    { angle: 150, width: 227, height: 256, sector: 'ip', scale: isMobile ? 0.35 : 0.63 },
    { angle: 330, width: 227, height: 256, sector: 'eagle', scale: isMobile ? 0.35 : 0.63 }
  ];

  return (
    <>
      <style>{orbitAnimation}</style>
    <div className={`relative ${isMobile ? 'w-[350px] h-[350px]' : 'w-[700px] h-[700px]'}`}>
      {/* Círculo Central (Ellipse 1) */}
      <div 
        className="absolute"
        style={{
          width: isMobile ? 105 : 210,
          height: isMobile ? 105 : 210,
          background: 'radial-gradient(circle, #0A1F44 0%, #000132 100%)',
          borderRadius: '9999px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img 
          src="/images/sectors/SIMPLEX BRANCA.svg"
          alt="Simplex"
          className={`${isMobile ? 'w-[56px] h-[56px]' : 'w-28 h-28'} object-contain`}
        />
      </div>

      {/* Container com animação de rotação */}
      <div 
        className="absolute inset-0"
        style={{
          animation: `orbit-rotation ${isMobile ? '80s' : '60s'} linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      >
      {/* Pétalas posicionadas com trigonometria - todas idênticas (SVG da IA) voltadas para o centro */}
      {petals.map((petal) => {
        const position = getPetalPosition(petal.angle, petal.width, petal.height);
        const sector = sectors.find(s => s.id === petal.sector);
        const isHovered = hoveredSector === petal.sector;
        
        return (
          <motion.div 
            key={petal.sector}
            className="absolute cursor-pointer z-10"
            style={{
              left: position.left,
              top: position.top,
              width: petal.width,
              height: petal.height,
              transformOrigin: 'center center'
            }}
            initial={{ scale: petal.scale, rotate: petal.angle + 148 }}
            whileHover={isMobile ? {} : { 
              scale: petal.scale * 1.15,
              rotate: petal.angle + 148,
              filter: 'brightness(1.05) drop-shadow(0 4px 12px rgba(10, 98, 255, 0.2))',
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            whileTap={{ scale: petal.scale * 0.95 }}
            onMouseEnter={isMobile ? undefined : () => {
              setHoveredSector(petal.sector);
              setIsPaused(true);
            }}
            onMouseLeave={isMobile ? undefined : () => {
              setHoveredSector(null);
              setIsPaused(false);
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              setClickedPosition({ x: centerX, y: centerY });
              handleSectorClick(sector!);
            }}
          >
            {/* SVG da pétala */}
              <svg width="227" height="256" viewBox="0 0 227 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="1.0" d="M119.692 9.86871C136.256 -6.06442 162.914 -1.10976 173.735 19.1668L224.325 113.969C228.306 121.429 226.898 130.626 221.244 136.913C211.067 148.231 195.282 167.466 185.417 187.676C175.607 207.774 166.873 228.837 161.781 241.596C158.894 248.831 151.984 253.704 144.195 253.849L35.9658 255.87C13.0536 256.298 -4.25003 235.54 1.44042 213.342C9.9896 179.992 23.6316 134.517 40.819 103.513C58.2889 71.9991 93.4341 35.1271 119.692 9.86871Z" fill="white"/>
              </svg>
            
            {/* Logo centralizada DENTRO da pétala - MESMA orientação da SPX DEV */}
            {/* Wrapper externo - compensa rotação do orbit */}
            <div
              className="absolute inset-0 pointer-events-none"
                style={{
                  animation: `orbit-rotation ${isMobile ? '80s' : '60s'} linear infinite reverse`,
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
            >
              {/* Logo interna - compensa rotação da pétala */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `rotate(${-(petal.angle + 148)}deg)`,
                }}
                whileHover={isMobile ? {} : { 
                  scale: 1.3,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
              >
                <img 
                  src={sector?.logo} 
                  alt={sector?.name} 
                  className={`${isMobile ? 'w-[100px] h-[100px]' : 'w-28 h-28'} object-contain`}
                />
              </motion.div>
            </div>
            
          </motion.div>
        );
      })}
      
      </div>

      {/* Animação de transição da pétala para o modal */}
      {clickedPosition && (
        <motion.div
          className="fixed w-20 h-20 bg-gray-300 rounded-full shadow-2xl z-[10000]"
          initial={{
            left: clickedPosition.x - 40,
            top: clickedPosition.y - 40,
            scale: 1,
            opacity: 1
          }}
          animate={{
            left: typeof window !== 'undefined' ? window.innerWidth - 100 : 0,
            top: 50,
            scale: 0,
            opacity: 0
          }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          onAnimationComplete={() => setClickedPosition(null)}
        />
      )}

      {/* Drawer Lateral */}
      <AnimatePresence>
        {selectedSector && (
          <>
            {/* Background preto cobrindo TODA a tela */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9997]"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: '100%', opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                opacity: { duration: 0.4 },
                scale: { duration: 0.5 }
              }}
              className="fixed right-0 top-0 h-screen w-full sm:w-[85%] md:w-[65%] lg:w-[55%] xl:w-[50%] z-[9999] flex flex-col"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-gray-900 h-full flex flex-col shadow-2xl border-l-2 md:border-l-4" style={{ borderLeftColor: selectedSector.color }}>
                {/* Header Fixo */}
                <div 
                  className="relative p-3 sm:p-4 md:p-6 text-white flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${selectedSector.color} 0%, ${selectedSector.colorDark} 100%)`
                  }}
                >
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
            style={{ 
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                      }}
                    />
                  </div>

                  <div className="relative flex items-start gap-3 md:gap-4">
                    {/* Logo */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg p-1.5 md:p-2">
                      <img
                        src={selectedSector.logo}
                        alt={selectedSector.name}
                        width={48}
                        height={48}
                        className="object-contain"
            />
          </div>

                    <div className="flex-1 min-w-0 pr-12 sm:pr-14 md:pr-16">
                      {/* Nome do setor */}
                      <div className="text-[10px] sm:text-xs font-semibold opacity-80 mb-0.5 md:mb-1 uppercase tracking-wider">
                        {selectedSector.name}
                      </div>
                      {/* Título */}
                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight break-words whitespace-pre-line">{selectedSector.title}</h2>
                    </div>

                    {/* Botão Fechar */}
                    <button
                      onClick={handleClose}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110 hover:rotate-90"
                      aria-label="Fechar"
                    >
                      <X className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>

                {/* Conteúdo Scrollável */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 bg-gray-50 dark:bg-gray-950">
                  {selectedSector.id === 'ia' ? (
                    /* Sistema de Abas para Simplex IA */
                    <Tabs defaultValue="VENDAS" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 mb-6">
                        {selectedSector.sections.map((section, index) => (
                          <TabsTrigger key={section.title} value={section.title}>
                            {section.title}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {selectedSector.sections.map((section) => (
                        <TabsContent key={section.title} value={section.title} className="space-y-4">
                          <div className="space-y-4">
                            {section.items.map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: itemIndex * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <div className="flex-shrink-0 mt-1">
                                  <SectorIcon name={item.icon} className="w-10 h-10" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold uppercase text-sm mb-1" style={{ color: selectedSector.color }}>
                                    {item.subtitle}
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-300 uppercase text-xs leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  ) : (
                    /* Layout padrão para outros setores */
                    <div className="space-y-6">
                      {selectedSector.sections.map((section, sectionIndex) => (
                        <motion.div
                          key={section.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: sectionIndex * 0.1 }}
                          className="space-y-4"
                        >
                          <h3 className="font-bold uppercase text-lg" style={{ color: selectedSector.color }}>
                            {section.title}
                          </h3>
                          <div className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                                className="flex items-start gap-3"
                              >
                                <div className="flex-shrink-0 mt-1">
                                  <SectorIcon name={item.icon} className="w-10 h-10" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold uppercase text-sm mb-1" style={{ color: selectedSector.color }}>
                                    {item.subtitle}
                                  </h4>
                                  <p className="text-gray-600 dark:text-gray-300 uppercase text-xs leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Fixo */}
                <div className="p-3 sm:p-4 md:p-6 bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700 flex-shrink-0 shadow-lg dark:shadow-gray-900/50">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    {/* Glow Effect */}
                    <div 
                      className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${selectedSector.color}50 0%, ${selectedSector.colorDark}50 100%)`
                      }}
                    />

                    <Button
                      onClick={() => window.open('https://wa.me/556696571379?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista', '_blank')}
                      className="relative w-full text-white shadow-lg hover:shadow-xl transition-all duration-300 h-11 md:h-12 overflow-hidden group text-sm md:text-base"
                      style={{
                        background: `linear-gradient(135deg, ${selectedSector.color} 0%, ${selectedSector.colorDark} 100%)`
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 relative z-10 group-hover:scale-110 transition-transform" />
                      <span className="relative z-10">{selectedSector.cta}</span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}