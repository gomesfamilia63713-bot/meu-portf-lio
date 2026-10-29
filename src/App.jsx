
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
      "Sistema web para organizar o estoque e controlar ferramentas, com autenticação de usuários e painel administrativo. Projeto prático voltado à organização e ao acompanhamento de informações.",
    imagem: bsToolsImage,
    tecnologias: ["React", "TypeScript", "Supabase", "Tailwind"],
    icone: "🛠️",
  },
  {
    id: "control-max",
    nome: "Control Max",
    categoria: "Sistema de Controle de Produção e Obras",
    descricao:
      "Sistema web para apoiar o acompanhamento de obras e da produção, com registros de efetivos, atividades por trabalhador e relatórios. Projeto prático voltado à organização das informações e à consulta dos registros.",
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
  { nome: "Git", icone: SiGithub, cor: "#F0F0F0" },
  { nome: "GitHub", icone: SiGithub, cor: "#F0F0F0" },
  { nome: "Vercel", icone: SiVercel, cor: "#F0F0F0" },
  { nome: "Netlify", icone: SiVercel, cor: "#00C7B7" },
  { nome: "VS Code", icone: FaCode, cor: "#007ACC" },
  { nome: "Lovable", icone: FaHeart, cor: "#FF69B4" },
  { nome: "Ferramentas de IA", icone: FaBrain, cor: "#7C3AED" },
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
           <h2 className="hero-subtitle">
  Desenvolvedor de Software Júnior | Sistemas Web
</h2>

<p>
  Desenvolvo projetos práticos com React, JavaScript e bancos de dados,
  buscando criar soluções digitais para facilitar rotinas e organizar
  informações. Tenho interesse especial em sistemas para construção civil,
  gestão de obras e pequenos negócios. Estou aberto a oportunidades
  profissionais e a conversar sobre novos projetos.
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
    href="https://wa.me/5593992349010?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20sistema."
    target="_blank"
    rel="noopener noreferrer"
  >
    Falar pelo WhatsApp
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
  Minha jornada na programação começou com o aprendizado autodidata
  e a criação de projetos práticos. Tenho desenvolvido aplicações
  web utilizando tecnologias como React, JavaScript, TypeScript e
  Supabase, buscando transformar necessidades reais em soluções
  digitais. Tenho interesse especial em sistemas de gestão,
  construção civil e organização de processos. Sou dedicado,
  gosto de aprender e estou em busca da minha primeira oportunidade
  profissional na área de desenvolvimento de software.
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
    <div className="contact-intro">
      <span className="section-kicker">CONTATO</span>

      <h2 className="section-title">
        Vamos tirar sua ideia do papel?
      </h2>

      <p>
        Estou aberto a oportunidades profissionais e a novos projetos.
        Se você precisa de um sistema web ou quer conversar sobre uma
        ideia, entre em contato comigo.
      </p>
    </div>

   
<div className="contact-links">
  <a
    className="contact-button whatsapp-button"
    href="https://wa.me/5593992349010?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20fazer%20um%20or%C3%A7amento%21"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      className="contact-original-icon"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M16 3a12.8 12.8 0 0 0-10.9 19.5L3.4 29l6.7-1.7A12.9 12.9 0 1 0 16 3Zm0 23.4c-2 0-3.9-.5-5.6-1.6l-.4-.2-4 .9 1-3.9-.3-.4A10.4 10.4 0 1 1 16 26.4Zm5.7-7.8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.5 8.5 0 0 1-2.6-1.6 9.7 9.7 0 0 1-1.8-2.3c-.2-.3 0-.5.2-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.4a12.6 12.6 0 0 0 4.8 4.2c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.5.2-1.6s-.2-.2-.5-.3Z"
      />
    </svg>

    <span>
      <strong>Fazer um orçamento pelo WhatsApp</strong>
      <small>Converse comigo diretamente</small>
    </span>

    <span className="contact-arrow">↗</span>
  </a>

  <a
    className="contact-button email-button"
   
href="https://mail.google.com/mail/?view=cm&fs=1&to=weinegomes0%40gmail.com&su=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento&body=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20fazer%20um%20or%C3%A7amento%21"

  >
    <svg
      className="contact-original-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
      />
    </svg>

    <span>
      <strong>Solicitar orçamento por e-mail</strong>
      <small>Envie os detalhes do seu projeto</small>
    </span>

    <span className="contact-arrow">↗</span>
  </a>

  <span className="contact-location">
    📍 Altamira - PA, Brasil
  </span>
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