import React from 'react';
import CardRadio from '../common/CardRadio';

// --- DADOS DAS RÁDIOS ---
const radios = [
  {
    name: 'Vista Alegre',
    description: 'Programação diversificada e acolhedora',
    features: ['Música ambiente relaxante', 'Anúncios promocionais'],
    color: '#EC4899',
    bgColor: 'bg-pink-400',
    lightBgColor: 'bg-pink-50',
    textColor: 'text-pink-700',
    link: 'http://radios.cesaria.shop/public/vista',
  },
  {
    name: 'Jardim da Luz',
    description: 'Ambiente urbano e dinâmico',
    features: ['Hits populares', 'Informações de saúde'],
    color: '#38BDF8',
    bgColor: 'bg-blue-400',
    lightBgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    link: 'http://radios.cesaria.shop/public/luz',
  },
  {
    name: 'Taboão',
    description: 'Programação focada no público local',
    features: ['Música contemporânea', 'Promoções especiais'],
    color: '#10B981',
    bgColor: 'bg-green-400',
    lightBgColor: 'bg-green-50',
    textColor: 'text-green-700',
    link: 'http://radios.cesaria.shop/public/taboao',
  },
  {
    name: 'Jardim Salete',
    description: 'Programação familiar e acolhedora',
    features: ['Música para toda família', 'Dicas de saúde'],
    color: '#FBBF24',
    bgColor: 'bg-yellow-400',
    lightBgColor: 'bg-yellow-50',
    textColor: 'text-yellow-700',
    link: 'http://radios.cesaria.shop/public/salete',
  },
  {
    name: 'Parque Pinheiros',
    description: 'Ambiente comunitário e próximo',
    features: ['Música regional', 'Avisos da comunidade'],
    color: '#8B5CF6',
    bgColor: 'bg-purple-400',
    lightBgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    link: 'http://radios.cesaria.shop/public/pinheiros',
  },
];

// Componente principal da Página de Rádios
const PaginaRadios = () => {
  return (
    <>
      {/* Seção de Introdução */}
      <section className="mb-20 text-center">
        <div className="mb-6 flex items-center justify-center">
          <div className="mr-6 flex h-20 w-20 items-center justify-center rounded-lg bg-pink-400">
            <span className="text-4xl">🎵</span>
          </div>
          <div>
            <h1 className="main-title title-font text-5xl font-bold text-slate-800 md:text-7xl">
              Rádios da Rede
            </h1>
            <p className="text-xl text-gray-600">
              Ambiente Musical Personalizado
            </p>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-gray-600">
          Cada loja da Rede Cesária possui sua própria rádio exclusiva,
          cuidadosamente selecionada para criar o ambiente perfeito para nossos
          clientes. Selecione a rádio da sua loja e dê o play para criar o
          ambiente musical ideal.
        </p>
      </section>

      {/* Seção de Estações */}
      <section>
        <h2 className="section-title title-font mb-12 text-center text-4xl font-bold text-slate-800">
          Nossas Estações<span className="text-red-500">.</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {radios.map((radio) => (
            <CardRadio key={radio.name} radio={radio} />
          ))}

          {/* Card de Configuração */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-red-400">
              <span className="text-3xl">🎛️</span>
            </div>
            <h3
              className="title-font mb-2 text-xl font-bold"
              style={{ color: '#EF4444' }}
            >
              Configuração
            </h3>
            <p className="mb-4 text-gray-600">
              Guia para personalizar playlists
            </p>
            <div className="mb-4 rounded-lg bg-red-50 p-4 text-left">
              <p className="text-sm font-semibold text-red-700">
                📋 Diretrizes importantes
              </p>
              <p className="text-sm font-semibold text-red-700">
                ⚙️ Como configurar
              </p>
            </div>
            <a
              href="#"
              className="inline-block rounded-lg border-none bg-red-500 px-6 py-2 text-center text-sm font-semibold text-white no-underline transition-all duration-300"
            >
              Ver Guia
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

// Componente App que renderiza a aplicação
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-['Poppins',_sans_serif] text-slate-700">
      <style>{`.title-font { font-family: 'Space Mono', monospace; }`}</style>

      <main className="px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PaginaRadios />
        </div>
      </main>

      <footer className="mt-12 bg-white/50 p-6 text-center text-gray-500 backdrop-blur-sm">
        <p>&copy; 2024 Rede Cesária. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
