import React from 'react';
import { useNavigate } from 'react-router-dom';


// Este componente representa a página "Guia do Colaborador".
// Ele contém a estrutura da página estilizada com Tailwind CSS.
export default function GuidePage() {
  const navigate = useNavigate();


  // A função de renderização que retorna o JSX (HTML do React).
  return (
    <>
      <main>
        {/* SEÇÃO 1: INTRODUÇÃO */}
        <section className="section min-h-screen flex items-center justify-center p-20 box-border" id="introducao">
          <div className="main-container max-w-6xl w-full mx-auto px-4 text-center">
            <h1 className="text-6xl md:text-8xl font-bold title-font font-['Space_Mono',_monospace]">Guia do Colaborador</h1>
            <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Bem-vindo(a) à Rede Cesária! Este guia completo foi desenvolvido para que você entenda como nossa rede funciona e tenha acesso rápido às informações mais importantes para o seu dia a dia. Aqui você encontrará tudo o que precisa para trabalhar com excelência e fazer parte do nosso time de sucesso.
            </p>
            <div className="mt-8">
              <a href="#organizacao" className="btn-primary inline-block py-3 px-7 rounded-lg font-semibold transition-all duration-300 text-center no-underline border-none bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40">Começar Leitura</a>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: ORGANIZAÇÃO E SEU PAPEL */}
        <section className="section min-h-screen flex items-center justify-center p-20 box-border" id="organizacao">
          <div className="main-container max-w-6xl w-full mx-auto px-4">
            <h2 className="text-5xl font-bold mb-12 text-center section-title title-font font-['Space_Mono',_monospace]">Organização e Seu Papel</h2>
            <div className="content-card bg-white p-8 rounded-2xl shadow-lg h-full transition-transform duration-300 mb-8 hover:-translate-y-1.5 hover:shadow-2xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A organização é um dos nossos pilares fundamentais na Rede Cesária. Cada funcionário é responsável por manter sua seção de trabalho organizada e bem abastecida, contribuindo para a excelência no atendimento que nos caracteriza. Sua dedicação individual reflete diretamente na experiência do cliente e no sucesso coletivo da nossa rede.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="content-card bg-white p-8 rounded-2xl shadow-lg h-full transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 title-font font-['Space_Mono',_monospace]" style={{color: '#FBBF24'}}>📦 Organização de Produtos</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mantenha sempre a sua seção organizada e limpa. Certifique-se de que os produtos estão dispostos de forma clara e visível para o cliente. A organização visual facilita a localização dos produtos pelos clientes e demonstra profissionalismo.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></span>Produtos similares devem ficar agrupados</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></span>Etiquetas de preço sempre visíveis e atualizadas</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2"></span>Prateleiras sempre limpas e bem abastecidas</li>
                </ul>
              </div>
              <div className="content-card bg-white p-8 rounded-2xl shadow-lg h-full transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 title-font font-['Space_Mono',_monospace]" style={{color: '#EF4444'}}>⏰ Controle de Validade</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Verifique a validade dos produtos regularmente. Remova os que estão próximos do vencimento e cole etiquetas de aviso para facilitar a venda e evitar perdas. Este controle é essencial para manter a qualidade dos produtos e a confiança dos clientes.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>Verificação diária dos produtos próximos ao vencimento</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>Etiquetas de desconto para produtos com validade próxima</li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>Comunicação imediata de produtos vencidos</li>
                </ul>
              </div>
            </div>
            <div className="content-card bg-white p-8 rounded-2xl shadow-lg h-full transition-transform duration-300 mt-8 hover:-translate-y-1.5 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 title-font font-['Space_Mono',_monospace]" style={{color: '#10B981'}}>🏆 Sistema de Premiação</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A dedicação é recompensada! Temos um sistema de premiação para os funcionários que se destacam nas vendas de determinadas classes de produtos. Mantenha os cadastros dos produtos sempre atualizados para que seu esforço seja reconhecido e recompensado adequadamente.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <p className="text-green-800 font-semibold">💡 Dica Importante:</p>
                <p className="text-green-700">
                  Verifique sempre os cadastros dos produtos, especialmente a classe e subclasse. Isso garante uma melhor organização e que as premiações sejam calculadas corretamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: SISTEMAS DE TRABALHO */}
        <section className="section min-h-screen flex items-center justify-center p-20 box-border" id="sistemas">
            <div className="main-container max-w-6xl w-full mx-auto px-4">
                <h2 className="text-5xl font-bold mb-12 text-center section-title title-font font-['Space_Mono',_monospace]">Nossos Sistemas de Trabalho</h2>
                <div className="content-card bg-white p-8 rounded-2xl shadow-lg h-full transition-transform duration-300 mb-8 hover:-translate-y-1.5 hover:shadow-2xl">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Utilizamos duas ferramentas principais para gerenciar o nosso dia a dia e manter a comunicação eficiente entre as lojas. Estes sistemas foram escolhidos e configurados especificamente para atender às necessidades da nossa rede, proporcionando agilidade e precisão nas operações.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="content-card bg-white p-8 rounded-2xl shadow-lg h-full transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mr-4"><span className="text-2xl">💼</span></div>
                            <h3 className="text-2xl font-bold title-font font-['Space_Mono',_monospace]" style={{color: '#38BDF8'}}>Pharmagno ERP</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            O Pharmagno é o nosso sistema de gestão empresarial, onde controlamos estoque, vendas, promoções e todas as operações financeiras da rede. É uma ferramenta robusta que centraliza todas as informações importantes para a gestão eficiente das nossas lojas.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span><span className="text-gray-700">Controle completo de estoque</span></div>
                            <div className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span><span className="text-gray-700">Gestão de vendas e promoções</span></div>
                            <div className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span><span className="text-gray-700">Relatórios financeiros detalhados</span></div>
                        </div>
                        <button onClick={() => navigate('/apps/pharmagno/manual')} className="btn-primary inline-block py-3 px-7 rounded-lg font-semibold transition-all duration-300 text-center no-underline border-none bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40">Manual Completo do Pharmagno</button>
                    </div>
                    <div className="content-card bg-white p-8 rounded-2xl shadow-lg h-full transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-400 rounded-lg flex items-center justify-center mr-4"><span className="text-2xl">📱</span></div>
                            <h3 className="text-2xl font-bold title-font font-['Space_Mono',_monospace]" style={{color: '#EF4444'}}>Cesária App</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Desenvolvemos o Cesária App especificamente para facilitar a comunicação entre as lojas da nossa rede. Esta ferramenta exclusiva permite uma integração perfeita entre todas as unidades, otimizando processos e melhorando a eficiência operacional.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span><span className="text-gray-700">Solicitar produtos em falta na sua unidade</span></div>
                            <div className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span><span className="text-gray-700">Enviar avisos urgentes para outras lojas</span></div>
                            <div className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span><span className="text-gray-700">Realizar transferências automáticas de produtos</span></div>
                            <div className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span><span className="text-gray-700">Consultar estoque e dados de clientes</span></div>
                        </div>
                        <button onClick={() => navigate('/apps/cesariaapp/manual')} className="btn-primary inline-block py-3 px-7 rounded-lg font-semibold transition-all duration-300 text-center no-underline border-none bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40">Manual Completo do Cesária App</button>
                    </div>
                </div>
            </div>
        </section>

        {/* SEÇÃO 4: RÁDIOS DAS LOJAS */}
        <section className="section min-h-screen flex items-center justify-center p-20 box-border" id="radios">
          <div className="main-container max-w-6xl w-full mx-auto px-4">
            <h2 className="text-5xl font-bold mb-12 text-center section-title title-font font-['Space_Mono',_monospace]">Rádios das Lojas</h2>
            <div className="content-card bg-white p-8 rounded-2xl shadow-lg h-full transition-transform duration-300 mb-8 hover:-translate-y-1.5 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pink-400 rounded-lg flex items-center justify-center mr-6"><span className="text-3xl">🎵</span></div>
                <div>
                  <h3 className="text-2xl font-bold title-font font-['Space_Mono',_monospace]" style={{color: '#EC4899'}}>Ambiente Musical Personalizado</h3>
                  <p className="text-gray-600">Cada loja tem sua identidade sonora única</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cada loja da Rede Cesária tem uma rádio exclusiva, com uma seleção de músicas e anúncios personalizados para criar um ambiente agradável e acolhedor para nossos clientes. A música ambiente é uma ferramenta importante para criar uma experiência positiva de compra e fortalecer a identidade da nossa marca.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">🎧 Como Acessar</h4>
                  <p className="text-pink-700">As rádios estão disponíveis através do nosso portal. Basta escolher a da sua loja e dar o play para começar a transmissão.</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">🎼 Personalização</h4>
                  <p className="text-pink-700">Temos um guia sobre como configurar playlists próprias. A leitura é recomendada antes de fazer qualquer alteração.</p>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-6">
                <p className="text-yellow-800 font-semibold">⚠️ Importante:</p>
                <p className="text-yellow-700">Lembre-se de que o ambiente deve ser acolhedor para todos. Escolha músicas com conteúdo apropriado para adultos, crianças e idosos. Evite músicas com linguagem inadequada ou temas controversos.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate('/radios')} className="btn-primary inline-block py-3 px-7 rounded-lg font-semibold transition-all duration-300 text-center no-underline border-none bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40">Acessar Rádios das Lojas</button>
                <button onClick={() => navigate('/radios/guia')} className="btn-secondary inline-block py-3 px-7 rounded-lg font-semibold transition-all duration-300 text-center no-underline border-none bg-gray-200 text-gray-800 hover:bg-gray-300 hover:-translate-y-1">Guia de Configuração de Playlists</button>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: PROCEDIMENTOS DE VENDAS */}
        <section className="section min-h-screen flex items-center justify-center p-20 box-border" id="vendas">
            <div className="main-container max-w-6xl w-full mx-auto px-4">
                <h2 className="text-5xl font-bold mb-12 text-center section-title title-font font-['Space_Mono',_monospace]">Procedimentos de Vendas</h2>
                <div className="content-card bg-white p-8 rounded-2xl shadow-lg h-full transition-transform duration-300 mb-8 hover:-translate-y-1.5 hover:shadow-2xl">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center mr-6"><span className="text-3xl">💰</span></div>
                        <div>
                            <h3 className="text-2xl font-bold title-font font-['Space_Mono',_monospace]" style={{color: '#10B981'}}>MagnoPDV - Ponto de Venda</h3>
                            <p className="text-gray-600">Sistema integrado para todas as operações de venda</p>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Para registrar as vendas e fazer outras operações diárias, utilizamos o MagnoPDV, que é o ponto de venda do nosso sistema Pharmagno. O ícone do MagnoPDV é uma moeda, e é através dele que você dará baixa nas vendas, consultará estoque e preços, e fará o controle de caixa.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                            <div className="text-3xl mb-2">🛒</div>
                            <h4 className="font-bold text-green-800 mb-2">Registro de Vendas</h4>
                            <p className="text-green-700 text-sm">Baixa automática no estoque e emissão de cupom fiscal</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                            <div className="text-3xl mb-2">📊</div>
                            <h4 className="font-bold text-green-800 mb-2">Consulta de Estoque</h4>
                            <p className="text-green-700 text-sm">Verificação em tempo real da disponibilidade de produtos</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                            <div className="text-3xl mb-2">💳</div>
                            <h4 className="font-bold text-green-800 mb-2">Controle de Caixa</h4>
                            <p className="text-green-700 text-sm">Abertura, fechamento e controle de todas as transações</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => navigate('/apps/pharmagno/manual')} className="btn-primary inline-block py-3 px-7 rounded-lg font-semibold transition-all duration-300 text-center no-underline border-none bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40">Manual Completo do MagnoPDV</button>
                        <button onClick={() => navigate('/procedimentos/vendas')} className="btn-secondary inline-block py-3 px-7 rounded-lg font-semibold transition-all duration-300 text-center no-underline border-none bg-gray-200 text-gray-800 hover:bg-gray-300 hover:-translate-y-1">Procedimentos Detalhados de Vendas</button>
                    </div>
                </div>
            </div>
        </section>

        {/* SEÇÃO 6: CONCLUSÃO */}
        <section className="section min-h-screen flex items-center justify-center p-20 box-border" id="conclusao">
          <div className="main-container max-w-6xl w-full mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold section-title title-font font-['Space_Mono',_monospace] mb-8">Bem-vindo(a) ao Time!</h2>
            <div className="content-card bg-white p-8 rounded-2xl shadow-lg h-full transition-transform duration-300 max-w-4xl mx-auto hover:-translate-y-1.5 hover:shadow-2xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Esperamos que este guia completo ajude você a se adaptar rapidamente à nossa equipe e aos nossos processos. A Rede Cesária valoriza cada colaborador e acredita que o sucesso coletivo depende do comprometimento individual de cada um.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Lembre-se: estamos aqui para apoiá-lo em sua jornada conosco. Não hesite em buscar ajuda sempre que necessário. Juntos, continuaremos construindo uma rede de drogarias de excelência, focada no atendimento de qualidade e no bem-estar de nossos clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => navigate('/apps')} className="btn-primary inline-block py-3 px-7 rounded-lg font-semibold transition-all duration-300 text-center no-underline border-none bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40">Explorar Sistemas</button>
                <button onClick={() => navigate('/')} className="btn-secondary inline-block py-3 px-7 rounded-lg font-semibold transition-all duration-300 text-center no-underline border-none bg-gray-200 text-gray-800 hover:bg-gray-300 hover:-translate-y-1">Voltar ao Início</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center p-6 text-gray-500 bg-white/50 backdrop-blur-sm">
        <p>&copy; 2025 Rede Cesária. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

