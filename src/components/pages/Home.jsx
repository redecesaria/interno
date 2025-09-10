import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  // Estado para controlar qual seção está ativa e destacar o link no menu.
  const [activeSection, setActiveSection] = useState('inicio');

  // Refs para obter a posição de cada seção na página.
  const sectionRefs = {
    inicio: useRef(null),
    sobre: useRef(null),
    ferramentas: useRef(null),
    contato: useRef(null),
  };

  // Efeito para adicionar animações de "aparecer" aos elementos quando eles entram na tela.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // A animação dispara quando 10% do elemento está visível.
      }
    );

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach((el) => observer.observe(el));

    // Limpeza ao desmontar o componente.
    return () => elementsToAnimate.forEach((el) => observer.unobserve(el));
  }, []);

  // Efeito para detectar a rolagem da página e atualizar o link ativo no menu.
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = 'inicio';

      // Verifica a posição de cada seção para determinar a ativa.
      for (const sectionId in sectionRefs) {
        const section = sectionRefs[sectionId].current;
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Limpeza do evento ao desmontar o componente.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // A função de renderização que retorna o JSX (HTML do React).
  return (
    <div className="home-page-styles">
      {/* Os estilos que estavam no arquivo shared-styles.css foram recriados aqui 
        para manter a aparência original dentro de um único componente.
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Space+Mono:wght@400;700&display=swap');
        
        .home-page-styles {
          font-family: 'Poppins', sans-serif;
          background-color: #f8fafc;
          color: #334155;
        }

        .home-page-styles .title-font {
          font-family: 'Space Mono', monospace;
        }

        .home-page-styles .section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5rem 1rem;
          box-sizing: border-box;
        }

        .home-page-styles .main-container {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .home-page-styles .btn-primary, .home-page-styles .btn-secondary {
          display: inline-block;
          padding: 0.8rem 1.75rem;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-align: center;
          text-decoration: none;
          border: none;
        }

        .home-page-styles .btn-primary {
          background-color: #ef4444;
          color: white;
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);
        }
        .home-page-styles .btn-primary:hover {
          background-color: #dc2626;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
        }

        .home-page-styles .btn-secondary {
          background-color: #e5e7eb;
          color: #1f2937;
        }
        .home-page-styles .btn-secondary:hover {
          background-color: #d1d5db;
          transform: translateY(-3px);
        }

        .home-page-styles .content-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.05);
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .home-page-styles .content-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
        }

        .home-page-styles .highlight {
          background-color: rgba(251, 191, 36, 0.3);
          padding: 0.1rem 0.3rem;
          border-radius: 4px;
        }

        .home-page-styles .grid-responsive {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        /* Estilos para a animação de rolagem */
        .home-page-styles .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .home-page-styles .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <main>
        {/* PÁGINA 1: INÍCIO */}
        <section className="section" id="inicio" ref={sectionRefs.inicio}>
          <div className="text-center animate-on-scroll">
            <h1 className="text-6xl md:text-8xl font-bold main-title title-font">
              Rede Cesária<span style={{ color: '#ef4444' }}>.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Seu portal completo de acesso às ferramentas, guias e sistemas para o dia a dia. Tudo o que você precisa para trabalhar com excelência em nossa rede de drogarias.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#ferramentas" className="btn-primary">Explorar Ferramentas</a>
              <a href="#sobre" className="btn-secondary">Conhecer a Rede</a>
            </div>
          </div>
        </section>

        {/* PÁGINA 2: SOBRE A REDE */}
        <section className="section" id="sobre" ref={sectionRefs.sobre}>
          <div className="main-container">
            <h2 className="text-5xl font-bold mb-12 text-center section-title title-font animate-on-scroll">
              Sobre Nós
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll" style={{transitionDelay: '0.1s'}}>
                <div className="content-card">
                  <h3 className="text-2xl font-bold mb-4 title-font" style={{ color: '#fbbf24' }}>
                    Excelência no Atendimento
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A Rede Cesária é uma rede de drogarias que preza pela <span className="highlight">excelência no atendimento</span> e no relacionamento com os clientes. Nossa missão é proporcionar saúde e bem-estar para toda a comunidade.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Atualmente, temos <strong>5 lojas</strong> estrategicamente localizadas em Embu das Artes, Taboão da Serra e outras regiões, sempre próximas de você.
                  </p>
                </div>
              </div>
              <div className="animate-on-scroll" style={{transitionDelay: '0.2s'}}>
                <div className="content-card">
                  <h3 className="text-2xl font-bold mb-4 title-font" style={{ color: '#ef4444' }}>
                    Nossos Valores
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Organização e dedicação em cada seção</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Sistema de premiação por desempenho</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Tecnologia integrada para eficiência</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ambiente acolhedor para todos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PÁGINA 3: FERRAMENTAS */}
        <section className="section" id="ferramentas" ref={sectionRefs.ferramentas}>
          <div className="main-container">
            <h2 className="text-5xl font-bold mb-16 text-center section-title title-font animate-on-scroll">
              Nossas Ferramentas
            </h2>
            <div className="grid-responsive">
              <div className="content-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4"><span className="text-2xl">📋</span></div>
                  <h3 className="text-2xl font-bold title-font" style={{ color: '#fbbf24' }}>Guia do Colaborador</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">Tudo o que você precisa saber para começar com o pé direito na nossa equipe. Processos, sistemas, regras e procedimentos detalhados.</p>
                <button onClick={() => navigate('/guia')} className="btn-primary">Acessar Guia</button>
              </div>
              <div className="content-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mr-4"><span className="text-2xl">💻</span></div>
                  <h3 className="text-2xl font-bold title-font" style={{ color: '#38bdf8' }}>Aplicações Internas</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">Acesse os manuais e informações sobre nossos sistemas principais: Cesária App, Pharmagno ERP e MagnoPDV.</p>
                <button onClick={() => navigate('/apps')} className="btn-primary">Ver Aplicações</button>
              </div>
              <div className="content-card animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center mr-4"><span className="text-2xl">🎵</span></div>
                  <h3 className="text-2xl font-bold title-font" style={{ color: '#ec4899' }}>Rádios da Rede</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">Links diretos para as rádios exclusivas de cada uma de nossas lojas. Crie o ambiente perfeito para os clientes.</p>
                <button onClick={() => navigate('/radios')} className="btn-primary">Ouvir Rádios</button>
              </div>
              <div className="content-card animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mr-4"><span className="text-2xl">🗺️</span></div>
                  <h3 className="text-2xl font-bold title-font" style={{ color: '#10b981' }}>Localização das Lojas</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">Encontre todas as nossas unidades com endereços completos, horários de funcionamento e informações de contato.</p>
                <button onClick={() => navigate('/map')} className="btn-primary">Ver Mapa</button>
              </div>
            </div>
          </div>
        </section>

        {/* PÁGINA 4: CONTATO */}
        <section className="section" id="contato" ref={sectionRefs.contato}>
          <div className="main-container text-center">
            <h2 className="text-4xl font-bold section-title title-font mb-8 animate-on-scroll">
              Precisa de Ajuda?
            </h2>
            <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              Nossa equipe está sempre pronta para ajudar. Entre em contato com nossos responsáveis para esclarecimentos, suporte técnico ou qualquer dúvida.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <a href="https://wa.me/5515997245620" target="_blank" rel="noopener noreferrer" className="animate-on-scroll" style={{ textDecoration: 'none', color: 'inherit', transitionDelay: '0.2s' }}>
                  <div className="content-card text-left">
                    <h3 className="text-xl font-bold mb-4 title-font" style={{ color: '#fbbf24' }}>Administração</h3>
                    <p className="text-gray-700 mb-2"><strong>Daniele Corrêa</strong></p>
                    <p className="text-gray-600">Administradora responsável por questões gerais, senhas e procedimentos administrativos.</p>
                  </div>
                </a>
                <a href="https://wa.me/5511933854995" target="_blank" rel="noopener noreferrer" className="animate-on-scroll" style={{ textDecoration: 'none', color: 'inherit', transitionDelay: '0.3s' }}>
                  <div className="content-card text-left">
                    <h3 className="text-xl font-bold mb-4 title-font" style={{ color: '#ef4444' }}>Supervisão</h3>
                    <p className="text-gray-700 mb-2"><strong>Leonardo Gabriel</strong></p>
                    <p className="text-gray-600">Supervisor responsável por cronogramas, tarefas diárias e orientações operacionais.</p>
                  </div>
                </a>
                <a href="https://wa.me/5511911964201" target="_blank" rel="noopener noreferrer" className="animate-on-scroll" style={{ textDecoration: 'none', color: 'inherit', transitionDelay: '0.4s' }}>
                   <div className="content-card text-left">
                     <h3 className="text-xl font-bold mb-4 title-font" style={{ color: '#00f72d' }}>Suporte e TI</h3>
                     <p className="text-gray-700 mb-2"><strong>Luiz Guilherme</strong></p>
                     <p className="text-gray-600">Responsável por gerenciamento de computadores e Sistemas das Lojas.</p>
                   </div>
                </a>
                <a href="https://wa.me/5511945230488" target="_blank" rel="noopener noreferrer" className="animate-on-scroll" style={{ textDecoration: 'none', color: 'inherit', transitionDelay: '0.5s' }}>
                   <div className="content-card text-left">
                     <h3 className="text-xl font-bold mb-4 title-font" style={{ color: '#ff01c4' }}>Marketing</h3>
                     <p className="text-gray-700 mb-2"><strong>Maria Vitória</strong></p>
                     <p className="text-gray-600">Responsável por promoções, divulgação e anúncios de Marketing da Rede.</p>
                   </div>
                </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center p-6 text-gray-500 bg-white/50 backdrop-blur-sm">
        <p>&copy; 2024 Rede Cesária. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

