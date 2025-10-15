'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, MapPin, ArrowRight, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conecte-se com nossa equipe especializada e descubra como podemos impulsionar seu negócio com tecnologia de ponta
          </p>
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="p-8 bg-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  Diagnóstico Técnico Gratuito
                </h3>
                <p className="text-muted-foreground">
                  Análise completa da sua infraestrutura com recomendações personalizadas
                </p>
              </div>
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="flex-shrink-0"
              >
                <Phone className="w-5 h-5 mr-2" />
                Agendar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Cards de Contato */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 h-full bg-white hover:shadow-lg hover:border-accent/30 transition-all">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">WhatsApp Business</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Atendimento direto e personalizado
                  </p>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2 transition-colors"
                  >
                    (11) 9999-9999
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 h-full bg-white hover:shadow-lg hover:border-accent/30 transition-all">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">E-mail Corporativo</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Para propostas e parcerias
                  </p>
                  <a
                    href="mailto:contato@simplexsolucoes.com.br"
                    className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2 transition-colors break-all"
                  >
                    contato@simplexsolucoes.com.br
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 h-full bg-white hover:shadow-lg hover:border-accent/30 transition-all">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Onde Estamos</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Presença nacional com expertise local
                  </p>
                  <p className="text-accent font-medium">
                    São Paulo, SP<br />
                    <span className="text-muted-foreground text-sm">Atendimento em todo Brasil</span>
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Informação adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Tempo médio de resposta: <span className="text-accent font-semibold">2 horas úteis</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
