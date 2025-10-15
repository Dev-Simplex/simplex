'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-brand-600 to-brand-700 flex items-center justify-center">
                  <div className="text-white/40 text-2xl font-bold text-center px-4">
                    {caseItem.title}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3 self-start">
                    {caseItem.category}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{caseItem.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {caseItem.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 mt-auto">
                    {caseItem.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  >
                    Ver Detalhes
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
