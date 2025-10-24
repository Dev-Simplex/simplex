import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Política de Privacidade
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              1. Introdução
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              A Simplex Soluções Tecnológicas (CNPJ: 27.304.891/0001-26), com sede em Sinop, Mato Grosso, 
              está comprometida com a proteção da privacidade e dos dados pessoais de nossos clientes, 
              usuários e visitantes de nosso site.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas 
              informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              2. Dados Coletados
            </h2>
            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              2.1 Dados Fornecidos Diretamente
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Coletamos informações que você nos fornece diretamente através de:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Formulários de contato em nosso site</li>
              <li>Chat de atendimento (Chatwoot)</li>
              <li>E-mails e comunicações</li>
              <li>Solicitações de orçamento e propostas</li>
              <li>Cadastros para newsletter e materiais</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              2.2 Dados Coletados Automaticamente
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Endereço IP e informações de navegação</li>
              <li>Cookies e tecnologias similares</li>
              <li>Dados de uso do site e páginas visitadas</li>
              <li>Informações do dispositivo e navegador</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              3. Finalidades do Tratamento
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Utilizamos seus dados pessoais para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Prestação de serviços de tecnologia e consultoria</li>
              <li>Comunicação e atendimento ao cliente</li>
              <li>Envio de propostas comerciais e orçamentos</li>
              <li>Melhoria de nossos serviços e experiência do usuário</li>
              <li>Cumprimento de obrigações legais e contratuais</li>
              <li>Marketing e divulgação de produtos e serviços (com consentimento)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              4. Base Legal
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses legais da LGPD:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Consentimento:</strong> Para comunicações de marketing e uso de cookies não essenciais</li>
              <li><strong>Execução de contrato:</strong> Para prestação de serviços contratados</li>
              <li><strong>Interesse legítimo:</strong> Para melhoria de serviços e análise de dados</li>
              <li><strong>Cumprimento de obrigação legal:</strong> Para atendimento a determinações legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              5. Cookies e Tecnologias de Rastreamento
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Utilizamos cookies e tecnologias similares para:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Funcionamento adequado do site</li>
              <li>Análise de uso e performance</li>
              <li>Personalização da experiência do usuário</li>
              <li>Integração com ferramentas de atendimento</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              6. Compartilhamento de Dados
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Seus dados pessoais podem ser compartilhados apenas nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Com prestadores de serviços terceirizados (parceiros tecnológicos)</li>
              <li>Para cumprimento de obrigações legais</li>
              <li>Em caso de reestruturação societária</li>
              <li>Com seu consentimento expresso</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              7. Segurança da Informação
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Criptografia de dados sensíveis</li>
              <li>Controle de acesso restrito</li>
              <li>Monitoramento de segurança</li>
              <li>Treinamento de equipe em proteção de dados</li>
              <li>Auditorias regulares de segurança</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              8. Seus Direitos
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Conforme a LGPD, você possui os seguintes direitos:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Acesso:</strong> Solicitar informações sobre seus dados</li>
              <li><strong>Correção:</strong> Corrigir dados incompletos ou incorretos</li>
              <li><strong>Exclusão:</strong> Solicitar a exclusão de dados desnecessários</li>
              <li><strong>Portabilidade:</strong> Transferir dados para outro fornecedor</li>
              <li><strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
              <li><strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              9. Retenção de Dados
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, 
              respeitando os prazos legais de retenção e nossas necessidades operacionais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              10. Alterações nesta Política
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você revise 
              regularmente esta página para estar ciente de eventuais alterações.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              11. Contato
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Simplex Soluções Tecnológicas</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                CNPJ: 27.304.891/0001-26
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                E-mail: <a href="mailto:sup@simplexsolucoes.com.br" className="text-primary hover:underline">sup@simplexsolucoes.com.br</a>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                WhatsApp: <a href="https://wa.me/556696571379" className="text-primary hover:underline">(66) 9657-1379</a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Endereço: Sinop, Mato Grosso
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
