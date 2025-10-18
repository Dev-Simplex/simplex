'use client';

import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

const quickLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Soluções & Serviços', href: '#solucoes-servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Parceiros', href: '#parceiros' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/simplex-solu%C3%A7%C3%B5es-tecnol%C3%B3gicas', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/simplexsolucoes/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/simplexsolucoes', label: 'Facebook' },
];

export const Footer = memo(function Footer() {
  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-[#1a2332] to-black text-white overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Simplex Tecnologia"
                width={160}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Tecnologia que conecta, protege e escala seu negócio. Soluções completas em infraestrutura, segurança e desenvolvimento.
            </p>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold mb-6 text-white text-lg bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold mb-6 text-white text-lg bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Contato
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <FaWhatsapp className="w-4 h-4 text-accent" />
                </div>
                <a 
                  href="https://wa.me/556696571379?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" 
                  className="hover:text-white transition-colors pt-1.5"
                >
                  (66) 9657-1379
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a 
                  href="mailto:sup@simplexsolucoes.com.br" 
                  className="hover:text-white transition-colors pt-1.5 break-all"
                >
                  sup@simplexsolucoes.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span className="pt-1.5">Sinop, Mato Grosso</span>
              </li>
            </ul>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold mb-6 text-white text-lg bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="relative p-3 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl transition-all duration-300 group overflow-hidden"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <social.icon className="w-5 h-5 relative z-10 text-white/80 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright Simplificado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Simplex Soluções Tecnológicas. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
});
