import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Setores', href: '#setores' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Cases', href: '#cases' },
  { label: 'Contato', href: '#contato' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SIMPLEX</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Tecnologia que conecta, protege e escala seu negócio. Soluções completas em infraestrutura, segurança e desenvolvimento.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-brand-300">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-brand-300">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/70">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contato@simplexsolucoes.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-brand-300">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href="https://portal.simplexsolucoes.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-brand-300 hover:text-white transition-colors"
            >
              Portal do Cliente →
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Simplex Soluções Tecnológicas. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <button className="hover:text-white transition-colors">Política de Privacidade</button>
            <button className="hover:text-white transition-colors">Termos de Uso</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
