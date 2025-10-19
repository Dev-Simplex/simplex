'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, Plus, Minus, ClipboardList, Clock, Link, Headphones, Shield, DollarSign } from 'lucide-react';
import * as Icons from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export function FAQ({ faqs }: FAQProps) {
  const [openItem, setOpenItem] = useState<string | undefined>('1');

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-blue-50/20 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl" />

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-6 md:mb-8"
          >
            <Badge variant="secondary" className="bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border-primary/10 dark:border-primary/20 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2">
              <HelpCircle className="w-3 h-3 md:w-4 md:h-4 text-primary dark:text-accent mr-1.5 md:mr-2" />
              Dúvidas Comuns
            </Badge>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-4">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-6"
            value={openItem}
            onValueChange={setOpenItem}
          >
            {faqs.map((faq, index) => {
              const isOpen = openItem === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="group relative"
                >
                  {/* Glow Effect on Active/Hover */}
                  <div className={`absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 blur-lg transition-opacity duration-500 ${isOpen ? 'opacity-40' : 'group-hover:opacity-20'
                    }`} />

                  <AccordionItem
                    value={faq.id}
                    className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-2 transition-all duration-300 ${isOpen
                        ? 'border-accent/40 shadow-xl shadow-accent/5'
                        : 'border-gray-200/80 dark:border-gray-700/80 shadow-md hover:border-primary/30 hover:shadow-lg'
                      }`}
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4 md:py-5 lg:py-6 group/trigger">
                      <div className="flex items-start gap-3 md:gap-4 lg:gap-5 w-full pr-3 md:pr-4">
                        {/* Icon Badge */}
                        <motion.div
                          className={`flex-shrink-0 w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen
                              ? 'bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-accent/30'
                              : 'bg-gradient-to-br from-gray-100 to-gray-200 text-muted-foreground group-hover/trigger:from-primary/10 group-hover/trigger:to-accent/10 group-hover/trigger:text-primary'
                            }`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {(() => {
                            const Icon = (Icons[faq.icon as keyof typeof Icons] || Icons.HelpCircle) as any;
                            return <Icon className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" />;
                          })()}
                        </motion.div>

                        {/* Question */}
                        <span className={`font-bold text-sm md:text-base lg:text-lg leading-relaxed transition-colors duration-300 ${isOpen
                            ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'
                            : 'text-foreground group-hover/trigger:text-primary'
                          }`}>
                          {faq.question}
                        </span>

                        {/* Icon Indicator */}
                        <div className="ml-auto flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="flex items-center justify-center"
                          >
                            {isOpen ? (
                              <Minus className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                            ) : (
                              <Plus className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover/trigger:text-primary transition-colors" />
                            )}
                          </motion.div>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4 md:pb-5 lg:pb-6 pl-[52px] md:pl-[56px] lg:pl-[68px] pr-3 md:pr-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="pt-2"
                      >
                        {/* Decorative Line */}
                        <motion.div
                          className="h-0.5 bg-gradient-to-r from-primary via-accent to-transparent rounded-full mb-3 md:mb-4"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isOpen ? 1 : 0 }}
                          transition={{ type: "spring", stiffness: 100 }}
                          style={{ transformOrigin: 'left' }}
                        />

                        <p className="text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/10 dark:border-primary/20 rounded-xl md:rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Não encontrou sua resposta?
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">
              Nossa equipe está pronta para esclarecer qualquer dúvida sobre nossos serviços e soluções.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 text-sm md:text-base"
            >
              <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />
              Fale conosco agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
