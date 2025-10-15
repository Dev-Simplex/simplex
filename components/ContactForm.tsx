'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const interestOptions = [
  { value: 'dev', label: 'Simplex Dev - Software sob Medida' },
  { value: 'network', label: 'Simplex Network - Infraestrutura de Rede' },
  { value: 'security', label: 'Simplex Security - Segurança' },
  { value: 'ip', label: 'Simplex IP - Telefonia IP' },
  { value: 'cloud', label: 'Simplex Cloud - Backup e DR' },
  { value: 'monitor', label: 'Simplex Monitor - Observabilidade' },
  { value: 'automation', label: 'Simplex Automação - RPA e IA' },
  { value: 'eagle', label: 'Simplex Eagle - Consultoria' },
  { value: 'chat-spx', label: 'Chat - SPX' },
  { value: 'mobile-app', label: 'App Mobile Chat - SPX' },
  { value: 'marketplace', label: 'Marketplace Dashboard' },
  { value: 'other', label: 'Outro' },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setIsSubmitting(false);

    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      interest: '',
      message: '',
    });

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome completo *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="Seu nome"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder="seu@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Empresa</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Nome da empresa"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest">Interesse *</Label>
        <Select
          value={formData.interest}
          onValueChange={(value) => setFormData({ ...formData, interest: value })}
          required
        >
          <SelectTrigger id="interest">
            <SelectValue placeholder="Selecione sua área de interesse" />
          </SelectTrigger>
          <SelectContent>
            {interestOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          placeholder="Conte-nos sobre seu projeto ou necessidade..."
          rows={5}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-primary hover:bg-primary/90"
      >
        {isSubmitting ? (
          'Enviando...'
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Enviar Mensagem
          </>
        )}
      </Button>

      {submitMessage && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-green-600 dark:text-green-400"
        >
          {submitMessage}
        </motion.p>
      )}
    </motion.form>
  );
}
