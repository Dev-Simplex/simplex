'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Solution {
  id: string;
  title: string;
  icon: string;
  points: string[];
}

interface SolutionsProps {
  solutions: Solution[];
}

export function Solutions({ solutions }: SolutionsProps) {
  return (
    <section id="solucoes" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Soluções Integradas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos tecnologias de ponta para entregar resultados mensuráveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = (Icons[solution.icon as keyof typeof Icons] || Icons.Box) as LucideIcon;

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-white hover:shadow-lg hover:border-accent/20 transition-all">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                  <ul className="space-y-2">
                    {solution.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
