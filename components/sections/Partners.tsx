'use client';

import { motion } from 'framer-motion';

interface Partner {
  name: string;
  logo: string;
}

interface PartnersProps {
  partners: Partner[];
}

export function Partners({ partners }: PartnersProps) {
  // Duplicar os parceiros 3 vezes para garantir um loop seamless
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-2">Parceiros e Tecnologias</h3>
          <p className="text-muted-foreground">
            Trabalhamos com as melhores ferramentas do mercado
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradientes para fade nas bordas */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Container do carrossel */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{
                x: [0, -((partners.length * (128 + 32)))], // 128px width + 32px gap
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: partners.length * 3, // 3 segundos por item
                  ease: 'linear',
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 group"
                >
                  <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-transparent hover:border-accent/30 hover:shadow-md flex items-center justify-center p-4 transition-all">
                    <span className="text-xs font-semibold text-muted-foreground text-center">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Linha de descrição adicional */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Integração com sistemas open-source e corporativos de alta performance
        </motion.p>
      </div>
    </section>
  );
}
