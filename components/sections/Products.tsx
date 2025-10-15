'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { QRPreview } from '@/components/QRPreview';
import { ExternalLink, Play } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  ctas: { text: string; variant: 'default' | 'outline' }[];
  image: string;
  showQR?: boolean;
}

interface ProductsProps {
  products: Product[];
}

export function Products({ products }: ProductsProps) {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nossos Produtos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de atendimento omnichannel, desenvolvidas para escalar seu negócio
          </p>
        </motion.div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-medium mb-4">
                      {product.name}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{product.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <p className="text-sm leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {product.ctas.map((cta, idx) => (
                        <Button
                          key={idx}
                          variant={cta.variant}
                          onClick={() => {
                            if (cta.text.includes('demo') || cta.text.includes('Demo')) {
                              window.open('https://demo.simplexsolucoes.com.br', '_blank');
                            } else if (cta.text.includes('acesso')) {
                              window.open('https://wa.me/5511999999999', '_blank');
                            } else {
                              window.open('https://wa.me/5511999999999', '_blank');
                            }
                          }}
                        >
                          {cta.text.includes('demo') || cta.text.includes('Demo') ? (
                            <Play className="w-4 h-4 mr-2" />
                          ) : (
                            <ExternalLink className="w-4 h-4 mr-2" />
                          )}
                          {cta.text}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className={`bg-muted p-8 flex items-center justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    {product.showQR ? (
                      <QRPreview />
                    ) : (
                      <div className="w-full aspect-video bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/20 rounded-xl shadow-lg flex items-center justify-center">
                        <div className="text-muted-foreground/40 text-4xl font-bold">
                          {product.name}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
