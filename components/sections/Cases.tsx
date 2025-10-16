'use client';

import { motion } from 'framer-motion';
import { ExpandableCarousel } from '@/components/ExpandableCarousel';

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

interface CasesProps {
  cases: Case[];
}

export function Cases({ cases }: CasesProps) {
  return (
    <section id="cases" className="py-24 bg-brand-50 dark:bg-brand-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Cases de Sucesso</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projetos reais com resultados comprovados em diversos segmentos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <ExpandableCarousel cases={cases} />
        </motion.div>
      </div>
    </section>
  );
}
