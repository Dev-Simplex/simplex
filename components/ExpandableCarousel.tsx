'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface CaseMetric {
  label: string;
  value: string;
}

interface Case {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: CaseMetric[];
  image: string;
}

interface ExpandableCarouselProps {
  cases: Case[];
}

export function ExpandableCarousel({ cases }: ExpandableCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
    skipSnaps: false,
  });

  const handleCardClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selected = emblaApi.selectedScrollSnap();
      if (activeIndex !== selected) {
        setActiveIndex(selected);
      }
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, activeIndex]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4 md:gap-6 py-4">
        {cases.map((caseItem, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={caseItem.id}
              onClick={() => handleCardClick(index)}
              className={`
                relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer
                transition-all duration-500 ease-in-out
                ${isActive 
                  ? 'w-[270px] md:w-[400px] lg:w-[500px] shadow-2xl' 
                  : 'w-[200px] md:w-[260px] lg:w-[320px] shadow-lg hover:shadow-xl'
                }
                h-[280px] md:h-[360px] lg:h-[400px]
                bg-gradient-to-br from-brand-600 to-brand-700
              `}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)`,
                backgroundColor: '#1a1a1a',
              }}
            >
              {/* Gradiente overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" />

              {/* Conteúdo */}
              <div
                className={`
                  absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-20
                  transition-transform duration-500 ease-in-out
                  ${isActive 
                    ? 'translate-y-0' 
                    : 'translate-y-[calc(100%-54px)] md:translate-y-[calc(100%-62px)]'
                  }
                `}
              >
                {/* Categoria Badge */}
                <div className="inline-block px-3 py-1 bg-brand-500/30 backdrop-blur-sm border border-brand-400/40 rounded-full text-xs font-medium mb-2">
                  {caseItem.category}
                </div>

                {/* Título - Sempre visível */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
                  {caseItem.title}
                </h3>

                {/* Descrição - Aparece quando expandido */}
                <p
                  className={`
                    text-sm md:text-base text-gray-200 mb-4 leading-relaxed
                    transition-all duration-500 ease-in-out delay-100
                    ${isActive 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                    }
                  `}
                >
                  {caseItem.description}
                </p>

                {/* Métricas - Aparecem quando expandido */}
                <div
                  className={`
                    grid grid-cols-3 gap-2 md:gap-4 mb-4
                    transition-all duration-500 ease-in-out delay-150
                    ${isActive 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                    }
                  `}
                >
                  {caseItem.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-brand-300 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-300 leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Botão - Aparece quando expandido */}
                <Button
                  variant="outline"
                  size="sm"
                  className={`
                    w-full bg-white/10 hover:bg-white/20 border-white/30 text-white
                    transition-all duration-500 ease-in-out delay-200
                    ${isActive 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8 pointer-events-none'
                    }
                  `}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://wa.me/5511999999999', '_blank');
                  }}
                >
                  Ver Detalhes
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

