import React from 'react';
import { useNavigate } from 'react-router-dom';

// Componente para a seção de conteúdo da página de Apps.
const AppsPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section id="apps" className="section py-16 md:py-24 text-center animate-on-scroll">
        <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-8xl font-bold main-title title-font text-gray-800">Aplicações Internas</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Conheça em detalhes todos os sistemas que utilizamos na Rede Cesária.
            Cada aplicação foi cuidadosamente selecionada e configurada para otimizar
            nossos processos e garantir a melhor experiência para funcionários e clientes.
          </p>
        </div>
      </section>

      {/* SEÇÃO 2: CESÁRIA APP */}
      <section id="cesariaapp" className="section py-16 md:py-24 animate-on-scroll">
        <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">📱</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold title-font" style={{ color: '#EF4444' }}>Cesária App</h2>
                  <p className="text-gray-600">Comunicação entre lojas</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O Cesária App é nossa ferramenta proprietária desenvolvida especificamente para facilitar
                a comunicação e integração entre todas as lojas da rede. Este aplicativo revolucionou
                a forma como gerenciamos transferências de produtos, comunicações urgentes e consultas
                de estoque entre unidades.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-4 mt-2"></span>
                  <div>
                    <h4 className="font-bold text-gray-800">Solicitação de Produtos</h4>
                    <p className="text-gray-600">Solicite produtos que estão em falta na sua unidade de forma rápida e automatizada</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-4 mt-2"></span>
                  <div>
                    <h4 className="font-bold text-gray-800">Avisos Urgentes</h4>
                    <p className="text-gray-600">Envie comunicações importantes para outras lojas instantaneamente</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-4 mt-2"></span>
                  <div>
                    <h4 className="font-bold text-gray-800">Transferências Automáticas</h4>
                    <p className="text-gray-600">Realize transferências de produtos entre lojas com poucos cliques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-4 mt-2"></span>
                  <div>
                    <h4 className="font-bold text-gray-800">Consulta Integrada</h4>
                    <p className="text-gray-600">Acesse estoque e dados de clientes de todas as unidades da rede</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-card p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 title-font" style={{ color: '#EF4444' }}>Manual Completo</h3>
              <p className="text-gray-700 mb-6">
                Acesse o manual detalhado do Cesária App com instruções passo a passo,
                capturas de tela e dicas para aproveitar ao máximo todas as funcionalidades.
              </p>
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <p className="text-red-800 font-semibold">⚠️ Importante:</p>
                <p className="text-red-700">
                  O manual do Cesária App também está disponível em versão PDF em todos os computadores onde ele está instalado. Basta clicar com o botão direito no ícone dele na bandeja de Apps do Windows e selecionar a opção 'Manual de Uso'
                </p>
              </div>
              <button onClick={() => navigate('/apps/cesariaapp/manual')} className="btn-primary block text-center py-3 px-6 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors duration-300">Acessar Manual do Cesária App</button>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: PHARMAGNO ERP */}
      <section id="pharmagno" className="section py-16 md:py-24 animate-on-scroll">
        <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="content-card p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 title-font" style={{ color: '#38BDF8' }}>Sistema Robusto</h3>
              <p className="text-gray-700 mb-6">
                O Pharmagno ERP é a espinha dorsal de nossas operações, integrando todos os
                processos de gestão em uma única plataforma confiável e eficiente.
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-bold text-blue-800">📊 Gestão Completa</h4>
                  <p className="text-blue-700 text-sm">Controle total sobre estoque, vendas e finanças</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-bold text-blue-800">📈 Relatórios Avançados</h4>
                  <p className="text-blue-700 text-sm">Análises detalhadas para tomada de decisões</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-bold text-blue-800">🔄 Integração Total</h4>
                  <p className="text-blue-700 text-sm">Sincronização com todos os outros sistemas</p>
                </div>
              </div>
              <button onClick={() => navigate('/apps/pharmagno/manual')} className="btn-primary block text-center py-3 px-6 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">Manual do Pharmagno ERP</button>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">💼</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold title-font" style={{ color: '#38BDF8' }}>Pharmagno ERP</h2>
                  <p className="text-gray-600">Sistema de gestão empresarial</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O Pharmagno é nosso sistema de gestão empresarial (ERP) completo, onde controlamos
                estoque, vendas, promoções e todas as operações financeiras da rede. É uma solução
                robusta que centraliza todas as informações críticas para o funcionamento eficiente
                de nossas lojas.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">📦</div>
                  <h4 className="font-bold text-blue-800">Estoque</h4>
                  <p className="text-blue-600 text-sm">Controle completo de produtos</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">💰</div>
                  <h4 className="font-bold text-blue-800">Vendas</h4>
                  <p className="text-blue-600 text-sm">Gestão de todas as transações</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">🏷️</div>
                  <h4 className="font-bold text-blue-800">Promoções</h4>
                  <p className="text-blue-600 text-sm">Campanhas e descontos</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-bold text-blue-800">Financeiro</h4>
                  <p className="text-blue-600 text-sm">Operações financeiras</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: MAGNO PDV */}
      <section id="magnopdv" className="section py-16 md:py-24 animate-on-scroll">
        <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">💰</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold title-font" style={{ color: '#10B981' }}>MagnoPDV</h2>
                  <p className="text-gray-600">Ponto de venda integrado</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O MagnoPDV é o ponto de venda do nosso sistema Pharmagno, identificado pelo ícone
                de uma moeda. É através dele que você realizará todas as operações de venda,
                consultas de estoque e preços, além do controle completo do caixa.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-2xl mr-4">🛒</span>
                  <div>
                    <h4 className="font-bold text-green-800">Registro de Vendas</h4>
                    <p className="text-green-600 text-sm">Processamento completo de transações</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-2xl mr-4">🔍</span>
                  <div>
                    <h4 className="font-bold text-green-800">Consulta de Estoque</h4>
                    <p className="text-green-600 text-sm">Verificação em tempo real de produtos</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-2xl mr-4">💳</span>
                  <div>
                    <h4 className="font-bold text-green-800">Controle de Caixa</h4>
                    <p className="text-green-600 text-sm">Abertura, fechamento e sangrias</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-2xl mr-4">🏷️</span>
                  <div>
                    <h4 className="font-bold text-green-800">Consulta de Preços</h4>
                    <p className="text-green-600 text-sm">Verificação rápida de valores</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-card p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 title-font" style={{ color: '#10B981' }}>Operação Diária</h3>
              <p className="text-gray-700 mb-6">
                O MagnoPDV é utilizado diariamente por todos os funcionários para as operações
                de venda. É essencial conhecer todas as suas funcionalidades para garantir
                eficiência no atendimento.
              </p>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-green-800 mb-2">🔑 Novo Sistema de Login</h4>
                <p className="text-green-700 text-sm mb-2">
                  Agora utilizamos o login <span className="font-mono font-bold">CAIXA</span>
                  (sem senha) para operações do PDV.
                </p>
                <p className="text-green-600 text-xs">
                  Para o Pharmagno gerencial, continue usando sua conta pessoal.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button onClick={() => navigate('/apps/magnopdv/manual')} className="btn-primary py-3 px-6 rounded-lg font-semibold text-center bg-green-600 text-white hover:bg-green-700 transition-colors duration-300">Manual Completo do MagnoPDV</button>
                <button onClick={() => navigate('/procedimentos/vendas')} className="btn-secondary py-3 px-6 rounded-lg font-semibold text-center bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors duration-300">Procedimentos de Vendas</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: INTEGRAÇÃO DOS SISTEMAS */}
      <section id="integracao" className="section py-16 md:py-24 animate-on-scroll">
        <div className="main-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-12 text-center section-title title-font" style={{ color: '#8B5CF6' }}>Integração dos Sistemas</h2>
          <div className="content-card p-8 bg-purple-50 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🔗</span>
              </div>
              <h3 className="text-3xl font-bold title-font" style={{ color: '#8B5CF6' }}>Ecossistema Integrado</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              Todos os nossos sistemas trabalham em perfeita harmonia, criando um ecossistema
              integrado que otimiza processos, reduz erros e aumenta a eficiência operacional.
              Cada aplicação complementa as outras, formando uma solução completa para gestão
              da nossa rede de drogarias.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Cesária App</h4>
                <p className="text-gray-600 text-sm">
                  Facilita comunicação e transferências entre lojas,
                  integrando-se com o estoque do Pharmagno
                </p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Pharmagno ERP</h4>
                <p className="text-gray-600 text-sm">
                  Centraliza todas as informações e alimenta
                  os outros sistemas com dados atualizados
                </p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">MagnoPDV</h4>
                <p className="text-gray-600 text-sm">
                  Processa vendas e atualiza automaticamente
                  o estoque no sistema principal
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button onClick={() => navigate('/guia')} className="btn-primary py-3 px-6 rounded-lg font-semibold text-center bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300">Voltar ao Guia Completo</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppsPage;
