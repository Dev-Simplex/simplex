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
    <section id="faq" className="py-32 bg-gradient-to-br from-white via-blue-50/20 to-white relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-8"
          >
            <Badge variant="secondary" className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/10">
              <HelpCircle className="w-4 h-4 text-primary mr-2" />
              Dúvidas Comuns
            </Badge>
          </motion.div>

          <h2 className="text-5xl font-bold mb-6">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                  <div className={`absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 blur-lg transition-opacity duration-500 ${
                    isOpen ? 'opacity-40' : 'group-hover:opacity-20'
                  }`} />

                  <AccordionItem
                    value={faq.id}
                    className={`relative bg-white/80 backdrop-blur-sm border-2 rounded-2xl px-8 py-2 transition-all duration-300 ${
                      isOpen 
                        ? 'border-accent/40 shadow-xl shadow-accent/5' 
                        : 'border-gray-200/80 shadow-md hover:border-primary/30 hover:shadow-lg'
                    }`}
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6 group/trigger">
                      <div className="flex items-start gap-5 w-full pr-4">
                        {/* Icon Badge */}
                        <motion.div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? 'bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-accent/30'
                              : 'bg-gradient-to-br from-gray-100 to-gray-200 text-muted-foreground group-hover/trigger:from-primary/10 group-hover/trigger:to-accent/10 group-hover/trigger:text-primary'
                          }`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {(() => {
                            const Icon = (Icons[faq.icon as keyof typeof Icons] || Icons.HelpCircle) as any;
                            return <Icon className="w-6 h-6" />;
                          })()}
                        </motion.div>

                        {/* Question */}
                        <span className={`font-bold text-lg leading-relaxed transition-colors duration-300 ${
                          isOpen 
                            ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' 
                            : 'text-foreground group-hover/trigger:text-primary'
                        }`}>
                          {faq.question}
                        </span>

                        {/* Icon Indicator */}
                        <div className="ml-auto flex-shrink-0 flex items-center justify-center w-10 h-10">
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="flex items-center justify-center"
                          >
                            {isOpen ? (
                              <Minus className="w-5 h-5 text-accent" />
                            ) : (
                              <Plus className="w-5 h-5 text-muted-foreground group-hover/trigger:text-primary transition-colors" />
                            )}
                          </motion.div>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[60px] pr-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="pt-2"
                      >
                        {/* Decorative Line */}
                        <motion.div 
                          className="h-0.5 bg-gradient-to-r from-primary via-accent to-transparent rounded-full mb-4"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isOpen ? 1 : 0 }}
                          transition={{ type: "spring", stiffness: 100 }}
                          style={{ transformOrigin: 'left' }}
                        />
                        
                        <p className="text-base">
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Não encontrou sua resposta?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer qualquer dúvida sobre nossos serviços e soluções.
            </p>
            <a 
              href="#contato" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
            >
              <HelpCircle className="w-5 h-5" />
              Fale conosco agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
