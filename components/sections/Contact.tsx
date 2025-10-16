'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, MapPin, ArrowRight, Phone, Zap, ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useRef } from 'react';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      id="contato" 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Subtle Gradient Orbs */}
      <motion.div 
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -200]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.3, 0.15])
        }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.3, 0.15])
        }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-bl from-accent/10 to-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 px-5 py-2.5 rounded-full mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-foreground/80 font-medium text-sm">Contato Rápido</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Transformar
            </span>{' '}
            seu Negócio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conecte-se com nossa equipe especializada e descubra como podemos impulsionar seu negócio com tecnologia de ponta
          </p>
        </motion.div>

        {/* CTA Principal com Shimmer Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="max-w-5xl mx-auto mb-16 group"
        >
          {/* Subtle Glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-700" />
          
          <Card className="relative p-10 md:p-12 bg-white border border-gray-200 shadow-xl overflow-hidden">
            {/* Shimmer/Shine Effect */}
            <motion.div
              className="absolute inset-0 -translate-x-full"
              animate={{ x: ['-100%', '200%'] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "linear"
              }}
            >
              <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12" />
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-center md:text-left flex-1">
                <h3 className="text-3xl font-bold mb-3">
                  Diagnóstico Técnico Gratuito
                </h3>
                <p className="text-muted-foreground text-lg">
                  Análise completa da sua infraestrutura com recomendações personalizadas
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => window.open('https://wa.me/556696571379?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista', '_blank')}
                  className="relative bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white shadow-2xl shadow-accent/50 px-8 py-6 text-lg font-bold group/btn overflow-hidden"
                >
                  {/* Button Inner Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  
                  <FaWhatsapp className="w-6 h-6 mr-2 relative z-10" />
                  <span className="relative z-10">Agendar Agora</span>
                  <ArrowRight className="w-6 h-6 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Cards de Contato */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: FaWhatsapp,
              title: 'WhatsApp Business',
              description: 'Atendimento direto e personalizado',
              link: 'https://wa.me/556696571379?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista',
              linkText: '(66) 9657-1379',
              delay: 0.1
            },
            {
              icon: Mail,
              title: 'E-mail Corporativo',
              description: 'Para propostas e parcerias',
              link: 'mailto:sup@simplexsolucoes.com.br',
              linkText: 'sup@simplexsolucoes.com.br',
              delay: 0.2
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, type: "spring" }}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              {/* Subtle Glow on Hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
              
              <Card className="relative p-8 h-full bg-white border border-gray-200 group-hover:border-accent/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <div className="flex flex-col items-center text-center gap-6">
                  {/* Animated Icon */}
                  <div className="relative">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-accent/20 rounded-2xl flex items-center justify-center relative z-10 group-hover:border-accent/40 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-10 h-10 text-accent" />
                    </motion.div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 text-xl">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-accent hover:text-accent/80 font-semibold inline-flex items-center gap-2 transition-colors group/link"
                      >
                        <span className="break-all">{item.linkText}</span>
                        <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <div>
                        <p className="text-accent font-semibold">{item.linkText}</p>
                        {item.subText && (
                          <p className="text-muted-foreground text-sm mt-1">{item.subText}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Seção de Localização com Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-6xl mx-auto mt-20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Informações de Endereço */}
            <Card className="p-8 bg-white border border-gray-200 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Nossa Localização</h3>
                  <p className="text-muted-foreground">Venha nos visitar</p>
                </div>
              </div>

              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Endereço:</strong><br />
                    Avenida Governador Júlio Campos, 1442<br />
                    Sala 8, Segundo Andar<br />
                    Galeria Tamoios
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">CEP:</strong> 78550-286
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Cidade:</strong> Sinop, Mato Grosso
                  </span>
                </p>
              </div>

              <a
                href="https://www.google.com/maps?q=-11.854281,-55.509909&z=17"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full mt-6 px-4 py-2 border border-accent/30 rounded-md text-sm font-medium hover:border-accent hover:bg-accent/5 transition-all duration-300 group/maps"
              >
                <MapPin className="w-4 h-4 mr-2 text-accent" />
                Abrir no Google Maps
                <ExternalLink className="w-4 h-4 ml-2 group-hover/maps:translate-x-1 transition-transform text-accent" />
              </a>
            </Card>

            {/* Google Maps Iframe */}
            <Card className="p-2 bg-white border border-gray-200 shadow-lg overflow-hidden">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=-11.854281,-55.509909&hl=pt-BR&z=17&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Simplex Soluções - Sinop, MT"
                  className="w-full"
                ></iframe>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <p className="text-muted-foreground">
              Tempo médio de resposta:{' '}
              <span className="text-accent font-bold">2 horas úteis</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
