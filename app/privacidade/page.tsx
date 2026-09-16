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

          {/* Exigida pelas lojas: o formulário de Segurança dos Dados (Google Play) e o
              App Privacy (Apple) só são aceitos se a política publicada cobrir os dados
              tratados PELO APLICATIVO. O restante desta página fala apenas do site.
              A diretriz 5.1.1(i) da Apple exige, textualmente: forma de coleta e todos os
              usos de cada dado, confirmação de que os terceiros dão proteção igual ou
              equivalente, retenção e como revogar consentimento e pedir exclusão. O item 6.6
              (âncora #exclusao-de-dados) também serve de URL de exclusão de dados do Google
              Play, que exige os passos e o que é excluído x mantido. */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              6. Aplicativo Chat SPX
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Esta seção descreve o tratamento de dados realizado pelo aplicativo móvel{' '}
              <strong>Chat SPX</strong> (Android e iOS). O Chat SPX é uma ferramenta profissional
              de atendimento ao cliente, destinada a equipes de empresas contratantes da nossa
              plataforma. O uso do aplicativo requer credenciais corporativas fornecidas pela
              empresa contratante.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              6.1 Dados tratados, forma de coleta e finalidades
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Os dados abaixo são coletados diretamente do usuário, quando ele os informa ou envia
              pelo aplicativo, ou automaticamente durante o uso, e são utilizados somente para as
              finalidades indicadas em cada item:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Dados de conta:</strong> nome, e-mail corporativo, credenciais de acesso e
                identificadores de usuário e de conta, informados pelo usuário no login ou recebidos
                da plataforma de atendimento. São utilizados para autenticar o usuário, manter a
                sessão ativa e identificá-lo nas conversas da plataforma de atendimento
              </li>
              <li>
                <strong>Conteúdo de atendimento:</strong> mensagens de texto, fotos, vídeos,
                gravações de áudio e arquivos enviados ou recebidos nas conversas, fornecidos pelo
                usuário ao utilizar o aplicativo. São utilizados exclusivamente para prestar o
                atendimento: enviar, receber, exibir e manter o histórico das conversas
              </li>
              <li>
                <strong>Contatos:</strong> a agenda do dispositivo é acessada somente quando o
                usuário opta por anexar um contato a uma conversa, e apenas o contato escolhido é
                enviado, com a única finalidade de compartilhá-lo naquela conversa — não há
                varredura, cópia ou envio da agenda em segundo plano
              </li>
              <li>
                <strong>Token de notificação push:</strong> identificador gerado pelo sistema do
                aparelho quando o usuário autoriza notificações e registrado na plataforma de
                atendimento, utilizado apenas para entregar alertas de novas mensagens
              </li>
              <li>
                <strong>Registros de falhas e diagnósticos:</strong> informações técnicas coletadas
                automaticamente quando ocorre um erro ou falha (como modelo do aparelho, versões do
                sistema e do aplicativo e detalhes do erro), com filtragem de dados pessoais antes
                do envio, utilizadas apenas para identificar e corrigir falhas e manter a
                estabilidade e o desempenho do aplicativo
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              O aplicativo não exibe anúncios, não rastreia o usuário em aplicativos ou sites de
              terceiros e não utiliza nenhum dos dados acima para publicidade.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              6.2 Permissões do dispositivo
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              O aplicativo solicita permissões sob demanda e as utiliza apenas para a função
              correspondente: <strong>câmera</strong> (enviar fotos e vídeos),{' '}
              <strong>microfone</strong> (gravar mensagens de áudio),{' '}
              <strong>galeria</strong> (anexar mídia), <strong>contatos</strong> (anexar contato,
              quando solicitado) e <strong>notificações</strong> (alertas de novas mensagens).
              Nenhuma permissão é utilizada fora do contexto da funcionalidade, e todas podem ser
              revogadas nas configurações do aparelho.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              6.3 Compartilhamento com terceiros e segurança
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Não vendemos dados pessoais e não compartilhamos dados do aplicativo com terceiros
              para fins de publicidade. O aplicativo não integra redes de anúncios nem SDKs de
              rastreamento. Os dados do aplicativo são compartilhados apenas com os seguintes
              suboperadores, na medida necessária para cada finalidade:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Infraestrutura de servidores da plataforma de atendimento</strong> contratada
                pela empresa: armazenamento e processamento dos dados de conta e do conteúdo de
                atendimento
              </li>
              <li>
                <strong>Google Firebase</strong> (Firebase Cloud Messaging): token de notificação
                push e dados necessários à entrega das notificações
              </li>
              <li>
                <strong>Sentry</strong>: registros de falhas e diagnósticos, para relatório de erros
                e análise de estabilidade do aplicativo
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Os suboperadores tratam os dados somente para as finalidades acima e estão obrigados,
              por contrato e por seus termos de proteção de dados, a oferecer aos dados pessoais
              proteção igual ou equivalente à descrita nesta Política de Privacidade e exigida pela
              LGPD. Os serviços do Google Firebase e do Sentry podem tratar dados em servidores
              localizados fora do Brasil, hipótese em que a transferência internacional observa os
              requisitos da LGPD. Fora dessas hipóteses, dados do aplicativo só são compartilhados
              para cumprimento de obrigação legal ou determinação de autoridade competente. Todo o
              tráfego entre o aplicativo e os servidores é criptografado (TLS/HTTPS).
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              6.4 Consentimento e revogação
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              O acesso a câmera, microfone, galeria e contatos e o envio de notificações dependem de
              autorização do usuário, que pode revogá-la a qualquer momento nas configurações do
              aparelho; a revogação desativa apenas a função correspondente. Ao sair da conta (opção
              “Sair” nas configurações do aplicativo), o token de notificação é desvinculado do
              servidor e os dados de sessão armazenados no aparelho são apagados, e a desinstalação
              do aplicativo remove os dados locais restantes. O usuário também pode revogar o
              consentimento, opor-se ao tratamento ou pedir a exclusão de seus dados a qualquer
              momento, conforme o item 6.6.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              6.5 Retenção dos dados
            </h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Dados de conta e conteúdo de atendimento:</strong> mantidos enquanto durar a
                relação contratual com a empresa contratante ou até a exclusão da conta
              </li>
              <li>
                <strong>Token de notificação push:</strong> mantido enquanto o usuário estiver
                conectado no aparelho e desvinculado ao sair da conta
              </li>
              <li>
                <strong>Registros de falhas e diagnósticos:</strong> mantidos por período limitado e
                excluídos automaticamente ao fim do prazo de retenção do serviço de diagnóstico
              </li>
              <li>
                <strong>Dados armazenados no aparelho:</strong> apagados ao sair da conta ou ao
                desinstalar o aplicativo
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Encerrado o tratamento, os dados são eliminados, ressalvadas as hipóteses de
              conservação previstas no art. 16 da LGPD, como o cumprimento de obrigação legal ou
              regulatória.
            </p>

            <h3
              id="exclusao-de-dados"
              className="text-xl font-medium mb-3 text-gray-900 dark:text-white scroll-mt-24"
            >
              6.6 Como solicitar a exclusão dos dados
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Para solicitar a exclusão da sua conta e dos dados pessoais tratados pelo Chat SPX, ou
              para exercer os demais direitos previstos na LGPD (acesso, correção, portabilidade,
              revogação do consentimento e oposição), siga os passos abaixo:
            </p>
            <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                Envie um e-mail para{' '}
                <a href="mailto:sup@simplexsolucoes.com.br" className="text-primary hover:underline">sup@simplexsolucoes.com.br</a>{' '}
                com o assunto “Exclusão de dados – Chat SPX”, preferencialmente a partir do e-mail
                da conta utilizada no aplicativo
              </li>
              <li>
                Informe seu nome, o e-mail da conta e a empresa à qual a conta está vinculada
              </li>
              <li>
                Se necessário, solicitaremos uma confirmação adicional para verificar a identidade do
                titular antes de excluir os dados
              </li>
              <li>
                Confirmada a identidade, a exclusão é realizada nos prazos previstos na LGPD e a
                conclusão é comunicada por e-mail
              </li>
            </ol>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              A exclusão da conta também pode ser solicitada ao administrador da empresa contratante,
              que pode removê-la diretamente na plataforma de atendimento.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              <strong>Dados excluídos:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                Nome, e-mail, credenciais de acesso e identificadores de usuário vinculados à conta
              </li>
              <li>Tokens de notificação push associados à conta</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              <strong>Dados que podem ser mantidos:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                Mensagens, arquivos e demais conteúdos trocados em conversas com clientes, que
                integram o histórico de atendimento da empresa contratante e permanecem armazenados
                enquanto durar a relação contratual com ela; a exclusão desse conteúdo pode ser
                solicitada pela própria empresa contratante
              </li>
              <li>
                Registros de falhas e diagnósticos, até a exclusão automática ao fim do prazo de
                retenção do serviço de diagnóstico
              </li>
              <li>
                Dados cuja conservação seja exigida por lei ou regulamento, como registros de acesso a
                aplicações de internet (art. 15 da Lei nº 12.965/2014 — Marco Civil da Internet),
                somente pelo prazo legal
              </li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
              6.7 Público
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              O Chat SPX é destinado a uso profissional por maiores de 18 anos e não coleta
              intencionalmente dados de menores.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              7. Compartilhamento de Dados
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
              8. Segurança da Informação
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
              9. Seus Direitos
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
              10. Retenção de Dados
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, 
              respeitando os prazos legais de retenção e nossas necessidades operacionais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              11. Alterações nesta Política
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você revise 
              regularmente esta página para estar ciente de eventuais alterações.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              12. Contato
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
