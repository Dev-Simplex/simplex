'use client';

import { motion } from 'framer-motion';

interface Sector {
  id: string;
  name: string;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  angle: number;
}

interface SectorsProps {
  sectors: Sector[];
}

export function Sectors({ sectors }: SectorsProps) {
  return (
    <section id="setores" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nossas Áreas de Atuação</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nossos setores especializados no Hero acima - clique em cada pétala para descobrir como podemos transformar seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 hover:bg-accent/5 p-6 rounded-xl hover:shadow-md hover:border hover:border-accent/20 transition-all"
            >
              <h3 className="font-bold text-lg mb-2 text-accent">{sector.name}</h3>
              <p className="text-sm text-muted-foreground">{sector.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
