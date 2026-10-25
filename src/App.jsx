
import { useEffect, useState } from "react";
import "./App.css";

import bsToolsImage from "./assets/bs-tools.png";
import controlMaxImage from "./assets/control-max.png";
import weineFoto from "./assets/weine-foto.png";
import React from "react";
import { FaBrain, FaDatabase, FaHeart,FaCode } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiMysql,
  SiSupabase,
  SiGithub,
  SiVercel,
  SiNetlify,

} from "react-icons/si";
 
const projetos = [
  {
    id: "bs-tools",
    nome: "BS TOOLS / Equip Master",
    categoria: "Sistema de Gestão de Estoque e Ferramentas",
    descricao:
      "Aplicação web para controle e organização de estoque e ferramentas, com autenticação de usuários e painel administrativo.",
    imagem: bsToolsImage,
    tecnologias: ["React", "TypeScript", "Supabase", "Tailwind"],
    icone: "🛠️",
  },
  {
    id: "control-max",
    nome: "Control Max",
    categoria: "Sistema de Controle de Produção",
    descricao:
      "Aplicação para acompanhamento da produção e gestão de obras, com registros de efetivos, atividades e relatórios.",
    imagem: controlMaxImage,
    tecnologias: ["React", "JavaScript", "SQL", "Tailwind"],
    icone: "📊",
  },
];

const tecnologias = [
  { nome: "JavaScript", icone: SiJavascript, cor: "#F7DF1E" },
  { nome: "TypeScript", icone: SiTypescript, cor: "#3178C6" },
  { nome: "React", icone: SiReact, cor: "#61DAFB" },
  { nome: "HTML5", icone: SiHtml5, cor: "#E34F26" },
  { nome: "CSS3", icone: SiCss, cor: "#1572B6" },
  { nome: "Node.js", icone: SiNodedotjs, cor: "#339933" },
  { nome: "SQL", icone: FaDatabase, cor: "#4479A1" },
  { nome: "Supabase", icone: SiSupabase, cor: "#3ECF8E" },
  { nome: "Git & GitHub", icone: SiGithub, cor: "#181717" },
  { nome: "Vercel & Netlify", icone: SiVercel, cor: "#000000" },
  { nome: "VS Code", icone: FaCode, cor: "#007ACC" },
 { nome: "Lovable", icone: FaHeart, cor: "#FF69B4" },
  { nome: "IA / Ferramentas de IA", icone: FaBrain, cor: "#7C3AED" },
];

// Coloque aqui os nomes exatos dos arquivos de cada pasta.
// Use caminhos relativos à pasta public, sem começar com "public/".
const galerias = {
  "bs-tools": [
    {
      arquivo: "projetos/bs-tools/Captura de tela 2026-10-25 013600.png",
      tipo: "imagem",
      titulo: "BS TOOLS — Tela 1",
    },
    {
      arquivo: "projetos/bs-tools/Captura de tela 2026-10-25 013625.png",
      tipo: "imagem",
      titulo: "BS TOOLS — Tela 2",
    },
    {
      arquivo: "projetos/bs-tools/Captura de tela 2026-10-25 013704.png",
      tipo: "imagem",
      titulo: "BS TOOLS — Tela 3",
    },
    {
      arquivo: "projetos/bs-tools/Captura de tela 2026-10-25 013720.png",
      tipo: "imagem",
      titulo: "BS TOOLS — Tela 4",
    },
    {
      arquivo: "projetos/bs-tools/Captura de tela 2026-10-25 013740.png",
      tipo: "imagem",
      titulo: "BS TOOLS — Tela 5",
    },
    {
      arquivo: "projetos/bs-tools/Captura de tela 2026-10-25 013801.png",
      tipo: "imagem",
      titulo: "BS TOOLS — Tela 6",
    },
  ],

  "control-max": [
    {
      arquivo: "projetos/control-max/Captura de tela 2026-10-25 013830.png",
      tipo: "imagem",
      titulo: "Control Max — Tela 1",
    },
    {
      arquivo: "projetos/control-max/Captura de tela 2026-10-25 013846.png",
      tipo: "imagem",
      titulo: "Control Max — Tela 2",
    },
    {
      arquivo: "projetos/control-max/Captura de tela 2026-10-25 013901.png",
      tipo: "imagem",
      titulo: "Control Max — Tela 3",
    },
    {
      arquivo: "projetos/control-max/Captura de tela 2026-10-25 013914.png",
      tipo: "imagem",
      titulo: "Control Max — Tela 4",
    },
    {
      arquivo: "projetos/control-max/Gravação de Tela 2026-10-25 014109.mp4",
      tipo: "video",
      titulo: "Demonstração do Control Max",
    },
  ],
};
function Icon({ children }) {
  return (
    <span className="icon" aria-hidden="true">
      {children}
    </span>
  );
}

function App() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const [midiaAmpliada, setMidiaAmpliada] = useState(null);

  useEffect(() => {
    function fecharComEsc(event) {
      if (event.key === "Escape") {
        setMidiaAmpliada(null);
        setProjetoSelecionado(null);
      }
    }

    window.addEventListener("keydown", fecharComEsc);
    return () => window.removeEventListener("keydown", fecharComEsc);
  }, []);

  function abrirProjeto(projeto) {
    setProjetoSelecionado(projeto);
    setMidiaAmpliada(null);
  }

  function fecharGaleria() {
    setProjetoSelecionado(null);
    setMidiaAmpliada(null);
  }

  return (
    <div className="site">
      <header className="topbar">
        <a className="logo" href="#inicio" aria-label="Weine Gomes, início">
          <span className="logo-symbol">&lt;/&gt;</span>
          <span>
            Weine <strong>Gomes</strong>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#inicio">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Tecnologias</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          className="button header-button"
          href="/curriculo.pdf"
          download="Curriculo-Weine-Gomes.pdf"
        >
          ↓ Baixar Currículo
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">Olá, eu sou</span>
            <h1>
              Weine da Silva <span>Gomes</span>
            </h1>
            <h2 className="hero-subtitle">Desenvolvedor de Software Júnior</h2>
            <p>
              Sou apaixonado por tecnologia e estou sempre em busca de aprender
              e evoluir. Tenho experiência prática no desenvolvimento de sistemas
              e aplicações web, com foco em soluções simples, funcionais e
              eficientes.
            </p>

            <div className="hero-contacts">
              <span>
                <Icon>📍</Icon> Altamira - PA
              </span>
              <a href="https://wa.me/5593992349010">
                <Icon>☎</Icon> (93) 99234-9010
              </a>
              <a href="mailto:weinegomes0@gmail.com">
                <Icon>✉</Icon> weinegomes0@gmail.com
              </a>
            </div>

            <div className="hero-actions">
              <a className="button primary" href="#projetos">
                ▦ &nbsp; Ver Projetos
              </a>
              <a
                className="button secondary"
                href="mailto:weinegomes0@gmail.com"
              >
                ↓ &nbsp; Entrar em contato
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <img
              src={weineFoto}
              alt="Weine da Silva Gomes"
              className="profile-photo"
            />
          </div>
        </section>

        <section className="projects section-light" id="projetos">
          <div className="section-container">
            <span className="section-kicker">PROJETOS</span>
            <h2 className="section-title">Meus Projetos</h2>
            <p className="section-description">
              Clique em um projeto para ver imagens e vídeos demonstrativos.
            </p>

            <div className="project-grid">
              {projetos.map((projeto) => (
                <button
                  className="project-card project-card-button"
                  key={projeto.nome}
                  type="button"
                  onClick={() => abrirProjeto(projeto)}
                  aria-label={`Abrir galeria do ${projeto.nome}`}
                >
                  <img
                    className="project-image"
                    src={projeto.imagem}
                    alt={`Imagem demonstrativa de ${projeto.nome}`}
                  />

                  <div className="project-info">
                    <h3>{projeto.nome}</h3>
                    <span className="project-category">
                      {projeto.categoria}
                    </span>
                    <p>{projeto.descricao}</p>

                    <div className="tags">
                      {projeto.tecnologias.map((tecnologia) => (
                        <span key={tecnologia}>{tecnologia}</span>
                      ))}
                    </div>

                    <div className="project-footer">
                      <span>▣ Projeto prático</span>
                      <span>Ver galeria ↗</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section-dark" id="habilidades">
          <div className="section-container skills-layout">
            <div className="skills-intro">
              <span className="section-kicker">TECNOLOGIAS</span>
              <h2 className="section-title">Tecnologias que utilizo</h2>
              <p>
                Conhecimentos desenvolvidos nos estudos e na construção de
                projetos práticos.
              </p>
            </div>

           <div className="skills-grid">
  {tecnologias.map((tecnologia) => {
    const Icone = tecnologia.icone;

    return (
      <div className="skill-card" key={tecnologia.nome}>
        <span className="skill-icon">
          <Icone
            size={32}
            color={tecnologia.cor}
            aria-hidden="true"
          />
        </span>
        <span>{tecnologia.nome}</span>
      </div>
    );
  })}
</div>
          </div>
        </section>

        <section className="about section-light" id="sobre">
          <div className="section-container about-layout">
            <div>
              <span className="section-kicker">SOBRE MIM</span>
              <h2 className="section-title">Minha jornada</h2>
              <p>
                Tenho facilidade para aprender novas tecnologias, sou proativo,
                dedicado e gosto de resolver problemas. Estou em constante
                evolução e busco minha primeira oportunidade profissional na
                área de tecnologia.
              </p>
            </div>

            <div className="strength-list">
              <span>🔹 Aprendizado contínuo</span>
              <span>🔹 Raciocínio lógico</span>
              <span>🔹 Trabalho em equipe</span>
              <span>🔹 Foco em resultados</span>
            </div>

            <div className="goal-card">
              <span className="goal-icon">🎯</span>
              <p>
                Meu objetivo é conquistar minha primeira oportunidade como
                <strong> Desenvolvedor de Software Júnior</strong>, contribuir
                com projetos reais e continuar evoluindo na área de tecnologia.
              </p>
            </div>
          </div>
        </section>

        <section className="contact section-dark" id="contato">
          <div className="section-container contact-layout">
            <div>
              <span className="section-kicker">CONTATO</span>
              <h2 className="section-title">Vamos conversar?</h2>
              <p>
                Estou aberto a oportunidades de início de carreira em tecnologia.
              </p>
            </div>

            <div className="contact-links">
              <a href="tel:+5593992349010">☎ &nbsp; (93) 99234-9010</a>
              <a href="mailto:weinegomes0@gmail.com">
                ✉ &nbsp; weinegomes0@gmail.com
              </a>
              <span>📍 &nbsp; Altamira - PA, Brasil</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#inicio">
          <span className="logo-symbol">&lt;/&gt;</span>
          <span>
            Weine <strong>Gomes</strong>
          </span>
        </a>
        <span>Desenvolvedor de Software Júnior</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>

      {projetoSelecionado && (
        <div
          className="gallery-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) fecharGaleria();
          }}
        >
          <section
            className="gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
          >
            <div className="gallery-header">
              <div>
                <span className="section-kicker">PORTFÓLIO</span>
                <h2 id="gallery-title">{projetoSelecionado.nome}</h2>
                <p>{projetoSelecionado.categoria}</p>
              </div>
              <button
                className="gallery-close"
                type="button"
                onClick={fecharGaleria}
                aria-label="Fechar galeria"
              >
                ✕
              </button>
            </div>

            <div className="gallery-content">
              {galerias[projetoSelecionado.id]?.length ? (
                <div className="gallery-grid">
                  {galerias[projetoSelecionado.id].map((midia) => (
                    <article className="gallery-item" key={midia.arquivo}>
                      {midia.tipo === "video" ? (
                        <video
                          src={`/${midia.arquivo}`}
                          controls
                          preload="metadata"
                          className="gallery-media"
                        />
                      ) : (
                        <button
                          type="button"
                          className="gallery-image-button"
                          onClick={() => setMidiaAmpliada(midia)}
                          aria-label={`Ampliar ${midia.titulo}`}
                        >
                          <img
                            src={`/${midia.arquivo}`}
                            alt={midia.titulo}
                            className="gallery-media"
                            loading="lazy"
                          />
                        </button>
                      )}
                      <p>{midia.titulo}</p>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="gallery-empty">
                  <span aria-hidden="true">{projetoSelecionado.icone}</span>
                  <h3>Galeria pronta para receber os materiais</h3>
                  <p>
                    As pastas já estão preparadas. Falta apenas cadastrar os
                    nomes exatos das imagens e dos vídeos no início do arquivo
                    App.jsx.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {midiaAmpliada && (
        <div
          className="image-viewer"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setMidiaAmpliada(null);
          }}
        >
          <button
            type="button"
            className="gallery-close image-viewer-close"
            onClick={() => setMidiaAmpliada(null)}
            aria-label="Fechar imagem ampliada"
          >
            ✕
          </button>
          <img
            src={`/${midiaAmpliada.arquivo}`}
            alt={midiaAmpliada.titulo}
          />
          <p>{midiaAmpliada.titulo}</p>
        </div>
      )}
    </div>
      );
}

export default App;