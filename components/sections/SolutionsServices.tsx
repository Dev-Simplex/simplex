'use client';

import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { Lightbulb, Wrench } from 'lucide-react';
import { iconMap } from '@/components/CustomIcons';

interface Solution {
  id: string;
  title: string;
  icon: string;
  points: string[];
}

interface Service {
  id: string;
  title: string;
  icon: string;
  points: string[];
}

interface SolutionsServicesProps {
  solutions: Solution[];
  services: Service[];
}

export function SolutionsServices({ solutions, services }: SolutionsServicesProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'all'>('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="solucoes-servicos"
      className="py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300"
      onMouseMove={handleMouseMove}
      ref={sectionRef}
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Spotlight Effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/10 dark:border-primary/20 px-5 py-2.5 rounded-full mb-8"
          >
            <Lightbulb className="w-4 h-4 text-primary dark:text-accent" />
            <span className="text-foreground/80 dark:text-foreground/90 font-medium text-sm">Soluções Sob Medida</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Soluções &{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tecnologia que impulsiona o crescimento do seu negócio
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 md:gap-4 mb-12 md:mb-16 px-4"
        >
          <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-1.5 md:p-2 border border-gray-200/50 dark:border-gray-700/50 shadow-lg w-full max-w-md md:max-w-none md:w-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`relative px-4 py-2.5 md:px-6 lg:px-8 md:py-3 lg:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${activeTab === 'overview'
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <span className="block sm:inline">Visão Geral</span>
              <span className="ml-1 md:ml-2 text-[10px] md:text-xs opacity-70">6</span>
              {activeTab === 'overview' && (
                <motion.div
                  className="absolute -bottom-1.5 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-white dark:bg-accent rounded-full"
                  layoutId="activeTabIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`relative px-4 py-2.5 md:px-6 lg:px-8 md:py-3 lg:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${activeTab === 'all'
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <span className="hidden sm:inline">Todos os Serviços</span>
              <span className="sm:hidden">Todos</span>
              <span className="ml-1 md:ml-2 text-[10px] md:text-xs opacity-70">12</span>
              {activeTab === 'all' && (
                <motion.div
                  className="absolute -bottom-1.5 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-white dark:bg-accent rounded-full"
                  layoutId="activeTabIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          </div>
        </motion.div>

        {/* Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto"
            >
              {solutions.map((solution, index) => {
                const IconComponent = iconMap[solution.icon] || iconMap['GlobeAlt'];

                return (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      y: -8,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative h-full"
                    style={{ perspective: 1000 }}
                  >
                    {/* Glassmorphism Card */}
                    <Card className="relative p-4 md:p-6 lg:p-8 h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group-hover:border-accent/30">
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Glow Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500 -z-10" />

                      <div className="relative z-10">
                        {/* Icon Container com Gradiente Animado */}
                        <motion.div
                          className="relative w-16 h-16 mb-6"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6, type: "spring" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/20 group-hover:border-accent/40 rounded-2xl flex items-center justify-center transition-all duration-300">
                            <IconComponent className="w-8 h-8 text-accent group-hover:text-primary transition-colors duration-300" />
                          </div>
                        </motion.div>

                        {/* Title com Gradient no Hover */}
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 lg:mb-5 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {solution.title}
                        </h3>

                        {/* Points List */}
                        <ul className="space-y-3">
                          {solution.points.map((point, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + idx * 0.05 }}
                              className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                            >
                              <motion.span
                                className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0"
                                whileHover={{ scale: 2 }}
                              />
                              <span className="leading-relaxed">{point}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Decorative Line */}
                        <motion.div
                          className="mt-6 h-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        />
                      </div>

                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="all-services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
            >
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || iconMap['Lifebuoy'];

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      y: -6,
                      rotateY: 3,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative h-full"
                    style={{ perspective: 1000 }}
                  >
                    {/* Glassmorphism Card */}
                    <Card className="relative p-4 md:p-6 lg:p-8 h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-accent/30">
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Glow Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500 -z-10" />

                      <div className="relative z-10">
                        {/* Icon Container com Gradiente Animado */}
                        <motion.div
                          className="relative w-20 h-20 mb-6"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6, type: "spring" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative w-full h-full bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 group-hover:border-accent/40 rounded-2xl flex items-center justify-center transition-all duration-300">
                            <IconComponent className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
                          </div>
                        </motion.div>

                        {/* Title com Gradient no Hover */}
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-5 lg:mb-6 group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {service.title}
                        </h3>

                        {/* Points List */}
                        <ul className="space-y-3">
                          {service.points.map((point, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.08 + idx * 0.05 }}
                              className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                            >
                              <motion.span
                                className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary mt-2 flex-shrink-0"
                                whileHover={{ scale: 2 }}
                              />
                              <span className="leading-relaxed">{point}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Decorative Line */}
                        <motion.div
                          className="mt-6 h-1 bg-gradient-to-r from-accent via-primary to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 + 0.4 }}
                        />
                      </div>

                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg px-4">
            Cada solução é{' '}
            <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              personalizada
            </span>{' '}
            para as necessidades do seu negócio
          </p>
        </motion.div>
      </div>
    </section>
  );
}
