
import "./App.css";

const projetos = [
  {
    numero: "01",
    nome: "BS TOOLS / Equip Master",
    categoria: "Gestão de estoque e ferramentas",
    descricao:
      "Aplicação voltada ao controle de estoque, gerenciamento de ferramentas e organização de informações operacionais.",
    tecnologias: ["React", "JavaScript", "Supabase"],
  },
  {
    numero: "02",
    nome: "Control Max",
    categoria: "Gestão de produção",
    descricao:
      "Sistema desenvolvido para apoiar o controle de produção, obras e efetivos, facilitando a organização e a consulta de informações.",
    tecnologias: ["React", "JavaScript", "SQL"],
  },
];

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <a className="logo" href="#inicio">
          WG<span>.</span>
        </a>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">
              DESENVOLVIMENTO DE SOFTWARE
            </span>
            <h1>
              Olá, sou Weine.
              <br />
              <span>Desenvolvedor em evolução.</span>
            </h1>
            <p>
              Estudante de Análise e Desenvolvimento de Sistemas,
              aprendendo na prática e criando soluções digitais para
              problemas reais.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projetos">
                Conheça meus projetos ↗
              </a>
              <a className="button secondary" href="#contato">
                Entre em contato
              </a>
            </div>
            <div className="hero-note">
              <span className="status-dot" />
              Aberto à primeira oportunidade na área de tecnologia
            </div>
          </div>

          <div className="hero-card">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <small>weine.dev</small>
            </div>
            <div className="code-preview">
              <p><span className="code-purple">const</span> desenvolvedor = {"{"}</p>
              <p className="indent">nome: <span className="code-green">"Weine Gomes"</span>,</p>
              <p className="indent">foco: <span className="code-green">"Desenvolvimento Web"</span>,</p>
              <p className="indent">aprendizado: <span className="code-green">"Contínuo"</span>,</p>
              <p className="indent">objetivo: <span className="code-green">"Criar soluções"</span></p>
              <p>{"}"}</p>
              <p className="code-comment">// construindo o próximo passo...</p>
            </div>
          </div>
        </section>

        <section className="about section" id="sobre">
          <div className="section-label">01 — SOBRE MIM</div>
          <div>
            <h2>Aprendizado que vira projeto.</h2>
            <p>
              Comecei a estudar programação de forma autodidata e sigo
              desenvolvendo minhas habilidades enquanto curso Análise
              e Desenvolvimento de Sistemas na UniCesumar. Tenho
              experiência prática em projetos de aplicações web,
              organização de dados e construção de interfaces.
            </p>
            <p>
              Meu objetivo é conquistar minha primeira oportunidade
              profissional como Desenvolvedor de Software Júnior e
              continuar evoluindo em equipe.
            </p>
          </div>
        </section>

        <section className="projects section" id="projetos">
          <div className="section-label">02 — PROJETOS</div>
          <div className="section-main">
            <div className="section-heading">
              <h2>Experiência na prática.</h2>
              <p>
                Projetos apresentados de forma descritiva, sem expor
                sistemas internos ou dados confidenciais.
              </p>
            </div>

            <div className="project-grid">
              {projetos.map((projeto) => (
                <article className="project-card" key={projeto.numero}>
                  <div className="project-top">
                    <span className="project-number">{projeto.numero}</span>
                    <span className="project-symbol">↗</span>
                  </div>
                  <span className="project-category">{projeto.categoria}</span>
                  <h3>{projeto.nome}</h3>
                  <p>{projeto.descricao}</p>
                  <div className="tags">
                    {projeto.tecnologias.map((tecnologia) => (
                      <span key={tecnologia}>{tecnologia}</span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <span>Projeto prático</span>
                    <span>Dados não exibidos</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section" id="habilidades">
          <div className="section-label">03 — HABILIDADES</div>
          <div className="section-main">
            <h2>Tecnologias e ferramentas.</h2>
            <p className="section-description">
              Conhecimentos desenvolvidos nos estudos e na construção
              de projetos práticos.
            </p>
            <div className="skills-grid">
              {[
                ["01", "HTML & CSS", "Estrutura e estilização de interfaces"],
                ["02", "JavaScript", "Lógica e funcionalidades web"],
                ["03", "React", "Componentes e interfaces interativas"],
                ["04", "SQL & Supabase", "Dados e serviços de backend"],
                ["05", "Git & GitHub", "Versionamento de código"],
                ["06", "Vercel & Netlify", "Publicação de aplicações web"],
              ].map(([numero, nome, descricao]) => (
                <div className="skill-item" key={nome}>
                  <span>{numero}</span>
                  <div>
                    <h3>{nome}</h3>
                    <p>{descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contato">
          <div className="section-label">04 — CONTATO</div>
          <div className="contact-content">
            <span className="eyebrow">VAMOS CONVERSAR?</span>
            <h2>Estou pronto para o próximo passo.</h2>
            <p>
              Busco uma oportunidade para aprender, colaborar e
              contribuir com projetos de tecnologia.
            </p>
            <a className="button primary" href="mailto:weinegomes0@gmail.com">
              Falar por e-mail ↗
            </a>
            <div className="contact-details">
              <span>Altamira — PA, Brasil</span>
              <a href="mailto:weinegomes0@gmail.com">
                weinegomes0@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo" href="#inicio">WG<span>.</span></a>
        <p>Feito por Weine Gomes · Portfólio profissional</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </div>
  );
}

export default App;
