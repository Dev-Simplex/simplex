'use client';

import { useState, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectorIcon } from '@/components/SectorIcons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
  sections: Section[];
}

interface SimplexOrbitProps {
  sectors: Sector[];
}

export const SimplexOrbit = memo(function SimplexOrbit({ sectors }: SimplexOrbitProps) {
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);
  const [clickedPosition, setClickedPosition] = useState<{x: number, y: number} | null>(null);

  const handleSectorClick = useCallback((sector: Sector) => {
    setSelectedSector(sector);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedSector(null);
  }, []);

  // Configurações para o novo layout baseado no SVG (MENOR) - memoizadas
  const orbitConfig = useMemo(() => ({
    containerSize: 500,
    centerX: 250,
    centerY: 250,
    orbitRadius: 180
  }), []);

  const { containerSize, centerX, centerY, orbitRadius } = orbitConfig;

  return (
    <div className="w-full h-full flex items-center justify-center min-h-[500px]">
      {/* Container com tamanho menor */}
      <div
        className="relative"
        style={{
          width: `${containerSize}px`,
          height: `${containerSize}px`,
        }}
      >
        {/* SVG Orbit como fundo - EXATAMENTE como está no arquivo */}
        <div className="absolute inset-0">
          <Image
            src="/images/sectors/orbit.svg"
            alt="Simplex Orbit"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Círculo gradiente moderno */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 500 500"
        >
          <defs>
            <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A62FF" /> {/* brand-600 - azul vibrante */}
              <stop offset="50%" stopColor="#123C8A" /> {/* brand-700 - azul médio */}
              <stop offset="100%" stopColor="#0B1B3B" /> {/* brand-900 - azul escuro */}
            </linearGradient>
          </defs>
          <circle cx="250" cy="250" r="105" fill="url(#centerGradient)" />
        </svg>

        {/* Logo da Simplex centralizada */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <Image
            src="/logo.png"
            alt="Simplex"
            width={140}
            height={140}
            priority
            className="object-contain"
          />
        </div>

        {/* Áreas clicáveis das pétalas INTEIRAS (120x120px) */}
        {sectors.map((sector, index) => {
          // Calcular posição baseada no ângulo do setor
          const angle = (sector.angle * Math.PI) / 180;
          const x = centerX + orbitRadius * Math.cos(angle);
          const y = centerY + orbitRadius * Math.sin(angle);
          const isHovered = hoveredSector === sector.id;

          return (
            <motion.div
              key={sector.id}
              className="absolute cursor-pointer z-10"
              style={{
                left: `${x - 90}px`, // -90 para centralizar (180/2)
                top: `${y - 90}px`,  // -90 para centralizar (180/2)
                width: '180px',
                height: '180px',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.1, // Reduzido de 1.2 para 1.1
                zIndex: 30,
                filter: "drop-shadow(0 5px 10px rgba(200, 200, 200, 0.3))", // Sombra menor
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredSector(sector.id)}
              onMouseLeave={() => setHoveredSector(null)}
            >
              {/* Brilho no hover */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-200/40 to-gray-300/40 blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              {/* Logo centralizada DENTRO da pétala */}
              <div 
                className="w-full h-full flex items-center justify-center relative z-10"
                onClick={(e) => {
                  const logoRect = e.currentTarget.getBoundingClientRect();
                  const centerX = logoRect.left + logoRect.width / 2;
                  const centerY = logoRect.top + logoRect.height / 2;
                  console.log('Clicked sector:', sector.name, 'Position:', centerX, centerY); // Debug
                  setClickedPosition({ x: centerX, y: centerY });
                  handleSectorClick(sector);
                  e.stopPropagation(); // Evitar duplo clique
                }}
              >
                {sector.logo ? (
                  <Image
                    src={sector.logo}
                    alt={sector.name}
                    width={sector.id === 'eagle' ? 130 : 115}
                    height={sector.id === 'eagle' ? 130 : 115}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-bold">?</span>
                  </div>
                )}
              </div>

              {/* Animação de hover - círculo pulsante */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gray-300"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.05, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Animação de transição da pétala para o modal */}
      {clickedPosition && (
        <motion.div
          className="fixed w-20 h-20 bg-gray-300 rounded-full shadow-2xl z-[10000]"
          initial={{ 
            left: clickedPosition.x - 40, // -40 = metade de 80px
            top: clickedPosition.y - 40,  // -40 = metade de 80px
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

      {/* Drawer Lateral RESTAURADO */}
      <AnimatePresence>
        {selectedSector && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
              style={{ zIndex: 9999 }}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: '100%', opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 1.2,
                ease: [0.4, 0, 0.2, 1],
                opacity: { duration: 0.9 },
                scale: { duration: 0.8 }
              }}
              className="fixed right-0 top-0 h-screen w-full sm:w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] z-[9999] flex flex-col"
              style={{ zIndex: 9999 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-gray-900 h-full flex flex-col shadow-2xl">
                {/* Header Fixo RESTAURADO */}
                <div className="relative bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-4 sm:p-6 text-white flex-shrink-0">
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                      }}
                    />
                  </div>

                  <div className="relative flex items-start gap-4">
                    {/* Logo */}
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg p-2">
                      <Image
                        src={selectedSector.logo}
                        alt={selectedSector.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0 pr-12">
                      {/* Nome do setor */}
                      <div className="text-xs font-semibold opacity-80 mb-1 uppercase tracking-wider">
                        {selectedSector.name}
                      </div>
                      {/* Título */}
                      <h2 className="text-xl sm:text-2xl font-bold leading-tight break-words whitespace-pre-line">{selectedSector.title}</h2>
                    </div>

                    {/* Botão Fechar */}
                    <button
                      onClick={handleClose}
                      className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110 hover:rotate-90"
                      aria-label="Fechar"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Conteúdo Scrollável */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6">
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
                                  <h4 className="text-[#0A62FF] font-bold uppercase text-sm mb-1">
                                    {item.subtitle}
                                  </h4>
                                  <p className="text-gray-600 uppercase text-xs leading-relaxed">
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
                          <h3 className="text-[#0A62FF] font-bold uppercase text-lg">
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
                                  <h4 className="text-[#0A62FF] font-bold uppercase text-sm mb-1">
                                    {item.subtitle}
                                  </h4>
                                  <p className="text-gray-600 uppercase text-xs leading-relaxed">
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
                <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
                  <Button
                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                    className="w-full bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {selectedSector.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
});