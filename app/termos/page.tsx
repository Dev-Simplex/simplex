import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Termos() {
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
            Termos de Uso
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              1. Aceitação dos Termos
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Estes Termos de Uso regem o acesso e utilização do site da Simplex Soluções Tecnológicas 
              (CNPJ: 27.304.891/0001-26), bem como a contratação de nossos serviços e produtos.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ao acessar nosso site, contratar nossos serviços ou utilizar nossos produtos, você concorda 
              integralmente com estes termos. Caso não concorde com qualquer disposição, não utilize nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              2. Sobre a Empresa
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              A Simplex Soluções Tecnológicas é uma empresa especializada em soluções de tecnologia, 
              oferecendo serviços de:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Infraestrutura de rede e sistemas</li>
              <li>Segurança da informação e cibersegurança</li>
              <li>Desenvolvimento de software personalizado</li>
              <li>Automação de processos empresariais</li>
              <li>Soluções de atendimento omnichannel</li>
              <li>Consultoria em tecnologia da informação</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              3. Uso do Site
            </h2>
            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              3.1 Condições de Acesso
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              O acesso ao site é gratuito e destinado ao conhecimento de nossos serviços e produtos. 
              Você se compromete a:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Fornecer informações verdadeiras e atualizadas</li>
              <li>Não utilizar o site para fins ilegais ou não autorizados</li>
              <li>Respeitar a propriedade intelectual da empresa</li>
              <li>Não interferir no funcionamento do site</li>
              <li>Não realizar atividades que possam danificar ou sobrecarregar nossos sistemas</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              3.2 Proibições
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              É expressamente proibido:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Tentar acessar áreas restritas do site</li>
              <li>Utilizar bots, spiders ou outros mecanismos automatizados</li>
              <li>Copiar, modificar ou distribuir conteúdo sem autorização</li>
              <li>Transmitir vírus, malware ou outros códigos maliciosos</li>
              <li>Realizar engenharia reversa de nossos sistemas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              4. Contratação de Serviços
            </h2>
            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              4.1 Processo de Contratação
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              A contratação de nossos serviços segue o seguinte processo:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Solicitação de proposta através do site ou contato direto</li>
              <li>Análise das necessidades e elaboração de proposta técnica</li>
              <li>Aprovação da proposta pelo cliente</li>
              <li>Assinatura de contrato específico para cada projeto</li>
              <li>Execução dos serviços conforme cronograma acordado</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              4.2 Termos dos Contratos
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Cada contrato de prestação de serviços possui termos específicos que incluem:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Escopo detalhado dos serviços</li>
              <li>Prazos e cronograma de execução</li>
              <li>Valores e condições de pagamento</li>
              <li>Garantias e suporte pós-implementação</li>
              <li>Responsabilidades de cada parte</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              5. Produtos de Software
            </h2>
            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              5.1 Licenciamento
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Nossos produtos de software são licenciados conforme os termos específicos de cada licença, 
              que podem incluir:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Uso conforme especificado na licença</li>
              <li>Restrições de redistribuição</li>
              <li>Direitos de propriedade intelectual</li>
              <li>Limitações de responsabilidade</li>
              <li>Suporte técnico e atualizações</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              5.2 Propriedade Intelectual
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Todos os produtos de software desenvolvidos pela Simplex são protegidos por direitos de 
              propriedade intelectual. O cliente adquire apenas o direito de uso conforme licenciado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              6. Responsabilidades
            </h2>
            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              6.1 Responsabilidades da Simplex
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Prestar serviços com qualidade e competência técnica</li>
              <li>Cumprir prazos acordados nos contratos</li>
              <li>Manter confidencialidade das informações do cliente</li>
              <li>Fornecer suporte técnico conforme acordado</li>
              <li>Respeitar a propriedade intelectual do cliente</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              6.2 Responsabilidades do Cliente
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Fornecer informações precisas e necessárias</li>
              <li>Disponibilizar recursos e acesso conforme necessário</li>
              <li>Realizar pagamentos nos prazos acordados</li>
              <li>Respeitar os termos de licenciamento de software</li>
              <li>Manter backups de dados importantes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              7. Limitações de Responsabilidade
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              A Simplex não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Danos indiretos, lucros cessantes ou perda de dados</li>
              <li>Interrupções causadas por fatores externos (força maior)</li>
              <li>Uso inadequado ou não autorizado de nossos produtos</li>
              <li>Modificações realizadas pelo cliente sem nossa autorização</li>
              <li>Problemas em sistemas de terceiros integrados</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Nossa responsabilidade está limitada ao valor dos serviços contratados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              8. Garantias e Suporte
            </h2>
            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              8.1 Garantia de Serviços
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Garantimos a qualidade de nossos serviços por 90 dias após a conclusão, 
              corrigindo defeitos identificados sem custo adicional.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              8.2 Suporte Técnico
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Oferecemos suporte técnico conforme especificado em cada contrato, 
              através de nossos canais oficiais de atendimento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              9. Confidencialidade
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ambas as partes se comprometem a manter a confidencialidade de informações sensíveis 
              trocadas durante a prestação de serviços, conforme acordado em contratos específicos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              10. Alterações nos Termos
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Estes Termos de Uso podem ser alterados a qualquer momento. Alterações significativas 
              serão comunicadas através do site ou por e-mail aos clientes cadastrados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              11. Resolução de Conflitos
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Em caso de conflitos, as partes buscarão primeiro a resolução amigável. 
              Não sendo possível, os conflitos serão resolvidos pelo foro da comarca de Sinop, MT.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              12. Lei Aplicável
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Estes termos são regidos pela legislação brasileira, especialmente pela Lei Geral de 
              Proteção de Dados (LGPD) e demais normas aplicáveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              13. Contato
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Para esclarecimentos sobre estes Termos de Uso, entre em contato conosco:
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
