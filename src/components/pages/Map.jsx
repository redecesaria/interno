import React from 'react';
import InfoCard from '../common/InfoCard';


// Componente principal da Página de Mapa
const PaginaMapa = () => {
    return (
        <>
            {/* Seção 1: Introdução */}
            <section className="text-center mb-20">
                <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center mr-6">
                        <span className="text-4xl">🗺️</span>
                    </div>
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold main-title title-font text-slate-800">
                            Nossas Lojas
                        </h1>
                        <p className="text-xl text-gray-600">Localização e Informações</p>
                    </div>
                </div>
                <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    A Rede Cesária está estrategicamente localizada em pontos de fácil acesso em Embu das Artes, Taboão da Serra e região. Navegue pelo mapa para encontrar a localização de todas as nossas unidades.
                </p>
            </section>

            {/* Seção 2: Mapa Interativo */}
            <section className="mb-20">
                <h2 className="text-4xl font-bold mb-12 text-center section-title title-font text-slate-800">
                    Mapa Interativo<span className="text-red-500">.</span>
                </h2>
                <div className="p-8 bg-white rounded-2xl shadow-lg">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">📍</span>
                        </div>
                        <h3 className="text-2xl font-bold title-font" style={{ color: '#38bdf8' }}>
                            Todas as Unidades
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Clique nos marcadores para ver informações detalhadas de cada loja
                        </p>
                    </div>
                    <div className="bg-white p-2 sm:p-4 rounded-xl shadow-inner border border-gray-200">
                        <iframe
                            className="w-full h-[400px] md:h-[600px] border-0 rounded-lg"
                            src="https://www.google.com/maps/d/u/0/embed?mid=156H2YLl_Kj_P1GJFV6cTDTHl0baxhFc&ehbc=2E312F&noprof=1"
                            title="Mapa das Lojas da Rede Cesária"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Seção 3: Informações das Lojas */}
            <section className="mb-20">
                <h2 className="text-4xl font-bold mb-12 text-center section-title title-font text-slate-800">
                    Informações das Lojas<span className="text-red-500">.</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 title-font" style={{ color: '#fbbf24' }}>
                            Horário de Funcionamento
                        </h3>
                        <div className="space-y-4 text-gray-700">
                            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                                <span className="font-semibold">Segunda a Sábado:</span>
                                <span>7h às 22h</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                                <span className="font-semibold">Domingo:</span>
                                <span>8h às 20h</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                                <span className="font-semibold">Feriados:</span>
                                <span>Consultar cada unidade</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 bg-white rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 title-font" style={{ color: '#ef4444' }}>
                            Serviços Disponíveis
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            {['Medicamentos com e sem receita', 'Aplicação de injetáveis', 'Aferição de pressão arterial', 'Produtos de higiene e beleza', 'Convênios e planos de saúde', 'Entrega em domicílio'].map(service => (
                                <li key={service} className="flex items-start">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Seção 4: Facilidades */}
             <section>
                <h2 className="text-4xl font-bold mb-12 text-center section-title title-font text-slate-800">
                    Facilidades<span className="text-red-500">.</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <InfoCard icon="🛵" color="bg-blue-400">
                        <span style={{color: '#38bdf8'}}>Entregas e Transferências</span>
                        <span>Nosso sistema multi-lojas permite transferências de produtos e clientes em tempo real, suprindo necessidades entre unidades.</span>
                    </InfoCard>
                    <InfoCard icon="⏩" color="bg-green-400">
                         <span style={{color: '#10b981'}}>Praticidade</span>
                        <span>Buscamos inovar e otimizar processos continuamente para maior conforto, praticidade e qualidade de trabalho.</span>
                    </InfoCard>
                    <InfoCard icon="💻" color="bg-purple-400">
                        <span style={{color: '#8b5cf6'}}>Suporte</span>
                        <span>Nossa equipe está sempre pronta para prestar suporte a quaisquer dúvidas e possíveis problemas no ambiente de Trabalho.</span>
                    </InfoCard>
                </div>
            </section>
        </>
    );
};

// Componente App que renderiza a aplicação
export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-['Poppins',_sans_serif] text-slate-700">
      <style>{`.title-font { font-family: 'Space Mono', monospace; }`}</style>

      <main className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <PaginaMapa />
        </div>
      </main>

      <footer className="text-center p-6 text-gray-500 bg-white/50 backdrop-blur-sm mt-12">
        <p>&copy; 2025 Rede Cesária. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
