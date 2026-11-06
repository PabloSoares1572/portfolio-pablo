import { useEffect, useRef, useState } from "react";

const WHATSAPP = "https://wa.me/5537991990607";
const GITHUB = "https://github.com/PabloSoares1572";

const SKILLS = [
  "HTML", "CSS", "Python", "SQL", "MySQL", "React", "Git & GitHub",
  "Manutenção de Computadores", "Formatação de Computadores",
];

const STATS = [
  { to: 2, suffix: " anos", label: "de experiência profissional" },
  { to: 2, suffix: " meses", label: "de estágio em TI" },
  { to: 8, suffix: "º", label: "período de Sistemas de Informação" },
];

const EXPERIENCE = [
  {
    title: "Estagiário de TI",
    company: "Tele Técnico",
    period: "Estágio atual · 2 meses",
    desc: "Atuação em TI com foco em manutenção e suporte a computadores, incluindo formatação e diagnóstico de problemas.",
  },
  {
    title: "Entregador",
    company: "Antunes Imports",
    period: "2 anos",
    desc: "Organização, pontualidade e atendimento ao cliente nas entregas. Experiência que reforça comunicação e adaptação rápida.",
  },
];

const EDUCATION = [
  {
    title: "Bacharelado em Sistemas de Informação",
    place: "Graduação · cursando o 8º (último) período",
    desc: "Formação em desenvolvimento de software, banco de dados e gestão de sistemas.",
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    place: "Proz Educação",
    desc: "Certificado de conclusão do curso técnico.",
  },
];

const PROJECTS = [
  {
    name: "Projetos em Python",
    desc: "Scripts e aplicações de automação e lógica de programação. Substitua pela descrição do seu projeto real.",
    tags: ["Python"],
    link: GITHUB,
  },
  {
    name: "Banco de Dados com SQL",
    desc: "Modelagem e consultas em MySQL para organização de dados. Substitua pelo seu projeto real.",
    tags: ["SQL", "MySQL"],
    link: GITHUB,
  },
  {
    name: "Interface com React",
    desc: "Interfaces web interativas com componentes React. Substitua pelo seu projeto real.",
    tags: ["React", "CSS"],
    link: GITHUB,
  },
];

const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#0a0a0b;color:#e6e6ea;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;overflow-x:hidden;line-height:1.6}
a{color:inherit;text-decoration:none}
body::after{content:"";position:fixed;inset:0;pointer-events:none;z-index:50;opacity:.06;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.bg{position:fixed;inset:0;z-index:0;pointer-events:none}
.cursor-glow{position:fixed;width:420px;height:420px;margin:-210px 0 0 -210px;border-radius:50%;background:radial-gradient(circle,rgba(220,220,235,.09),transparent 60%);pointer-events:none;z-index:2;transition:left .15s,top .15s}
.progress{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,#6b6b75,#e6e6ea);z-index:60;transition:width .1s}
.nav{position:fixed;top:0;left:0;right:0;z-index:40;display:flex;justify-content:space-between;align-items:center;padding:20px 6vw;transition:all .4s}
.nav.scrolled{background:rgba(10,10,11,.7);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.06);padding:12px 6vw}
.logo{font-weight:700;letter-spacing:.02em}
.links{display:flex;gap:28px;font-size:14px;color:#9a9aa3}
.links a{position:relative;transition:color .3s}
.links a:hover{color:#fff}
.links a::after{content:"";position:absolute;left:0;bottom:-4px;width:0;height:1px;background:#fff;transition:width .3s}
.links a:hover::after{width:100%}
section{position:relative;z-index:1;padding:110px 6vw}
.hero{min-height:100vh;display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center;padding-top:120px}
.hero .btns{margin-bottom:0}
@media(max-width:860px){.hero{grid-template-columns:1fr;text-align:center;padding-top:140px}.hero .btns{justify-content:center}.hero .lead{margin-left:auto;margin-right:auto}.links{display:none}}
.eyebrow{color:#8b8b94;font-size:13px;letter-spacing:.2em;text-transform:uppercase;margin-bottom:14px}
.title{font-size:clamp(44px,8vw,96px);font-weight:800;line-height:1.05;letter-spacing:-.03em;perspective:600px}
.role{font-size:clamp(18px,2.4vw,24px);color:#c9c9d1;margin:18px 0 10px;min-height:2em}
.rot{display:inline-block;color:#fff;font-weight:600;transition:opacity .4s,transform .4s,filter .4s}
.rot-out{opacity:0;transform:translateY(-12px);filter:blur(6px)}
.rot-in{opacity:1;transform:none;filter:none}
.lead{color:#9a9aa3;max-width:560px;margin-bottom:34px}
.blur-in{animation:blurIn 1.2s .6s both}
.btns{display:flex;gap:14px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 24px;border-radius:999px;font-size:15px;font-weight:600;transition:transform .25s ease-out,background .3s,color .3s,border-color .3s;will-change:transform}
.btn.solid{background:#e6e6ea;color:#0a0a0b}
.btn.solid:hover{background:#fff}
.btn.ghost{border:1px solid rgba(255,255,255,.18);color:#e6e6ea}
.btn.ghost:hover{border-color:#fff}
.split-char{display:inline-block;opacity:0;transform:translateY(70px) rotateX(-80deg);animation:charIn .9s cubic-bezier(.2,.7,.2,1) forwards}
@keyframes charIn{to{opacity:1;transform:none}}
@keyframes blurIn{from{opacity:0;filter:blur(12px);transform:translateY(20px)}to{opacity:1;filter:none;transform:none}}
.tilt{position:relative;transition:transform .25s ease-out;border-radius:20px;overflow:hidden}
.spot::before{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,.10),transparent 60%);opacity:0;transition:opacity .35s}
.spot:hover::before{opacity:1}
.photo-wrap{justify-self:center;width:min(420px,100%);aspect-ratio:4/5;border:1px solid rgba(255,255,255,.08);background:#111}
.photo-wrap img{width:100%;height:100%;object-fit:cover;display:block;filter:grayscale(.15) contrast(1.05)}
.kicker{color:#6b6b75;font-size:14px;margin-right:12px;font-variant-numeric:tabular-nums}
.h2{font-size:clamp(30px,4vw,44px);font-weight:700;letter-spacing:-.02em;margin-bottom:28px}
.para{color:#a1a1aa;max-width:720px;font-size:17px;margin-bottom:16px}
.grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px}
.card{background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.015));border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:28px;height:100%}
.card h3{font-size:19px;font-weight:600;margin-bottom:8px}
.card p{color:#9a9aa3;font-size:15px}
.stat-num{font-size:56px;font-weight:800;letter-spacing:-.03em;line-height:1.1}
.stat-label{color:#8b8b94;font-size:14px;margin-top:6px}
.chips{display:flex;flex-wrap:wrap;gap:12px}
.chip{display:inline-block;padding:10px 18px;border:1px solid rgba(255,255,255,.1);border-radius:999px;background:rgba(255,255,255,.03);font-size:14px;transition:all .3s}
.chip:hover{background:#e6e6ea;color:#0a0a0b;border-color:#e6e6ea}
.timeline{border-left:1px solid rgba(255,255,255,.1);margin-left:8px;padding-left:28px;display:grid;gap:36px}
.item{position:relative}
.item::before{content:"";position:absolute;left:-34px;top:8px;width:11px;height:11px;border-radius:50%;background:#e6e6ea;box-shadow:0 0 0 5px rgba(230,230,234,.12)}
.item h3{font-size:20px;font-weight:600}
.meta{color:#8b8b94;font-size:14px;margin:4px 0 10px}
.item p{color:#a1a1aa}
.tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}
.tag{font-size:12px;color:#c9c9d1;border:1px solid rgba(255,255,255,.1);padding:4px 10px;border-radius:999px}
.reveal{opacity:0;transform:translateY(40px);filter:blur(6px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1),filter .9s}
.reveal.on{opacity:1;transform:none;filter:none}
footer{position:relative;z-index:1;padding:40px 6vw;color:#6b6b75;font-size:14px;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.split-char{opacity:1;transform:none}.reveal{opacity:1;transform:none;filter:none}}
`;

function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext("2d");
    let w, h, pts = [], raf;
    const resize = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
      const n = Math.min(90, Math.floor((w * h) / 16000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      }));
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200,200,210,0.5)";
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(170,170,185,${0.25 * (1 - d / 130)})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="bg" />;
}

function CursorGlow() {
  useEffect(() => {
    const el = document.getElementById("cursor-glow");
    const move = (e) => {
      if (!el) return;
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div id="cursor-glow" className="cursor-glow" />;
}

function Progress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement;
      setP((h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100);
    };
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return <div className="progress" style={{ width: p + "%" }} />;
}

function SplitText({ text, delay = 0 }) {
  return (
    <span aria-label={text}>
      {text.split("").map((c, i) => (
        <span key={i} className="split-char" style={{ animationDelay: `${delay + i * 45}ms` }}>
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
}

function Rotator({ words }) {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setI((x) => (x + 1) % words.length);
        setShow(true);
      }, 400);
    }, 2800);
    return () => clearInterval(t);
  }, [words]);
  return <span className={`rot ${show ? "rot-in" : "rot-out"}`}>{words[i]}</span>;
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${on ? "on" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function CountUp({ to, suffix = "" }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    let started = false;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const dur = 1600;
          const tick = (now) => {
            const p = Math.min((now - t0) / dur, 1);
            setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function Tilt({ children, className = "" }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg) scale3d(1.02,1.02,1.02)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    ref.current.style.transform = "";
  };
  return (
    <div ref={ref} className={`tilt spot ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

function Magnetic({ href, className = "", children }) {
  const ref = useRef(null);
  const external = href.startsWith("http");
  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.25}px,${y * 0.35}px)`;
  };
  const onLeave = () => {
    ref.current.style.transform = "translate(0,0)";
  };
  return (
    <a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`btn ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#inicio" className="logo">Pablo Soares</a>
      <div className="links">
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#experiencia">Experiência</a>
        <a href="#formacao">Formação</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div>
        <p className="eyebrow">Divinópolis · MG</p>
        <h1 className="title"><SplitText text="Pablo Soares" /></h1>
        <p className="role">
          Sou{" "}
          <Rotator
            words={[
              "Estagiário de TI",
              "Estudante de Sistemas de Informação",
              "Técnico em Desenvolvimento de Sistemas",
              "Apaixonado por computadores",
            ]}
          />
        </p>
        <p className="lead blur-in">
          Comunicativo, criativo e rápido em me adaptar. Gosto de mexer e consertar computadores
          e de transformar problemas em soluções práticas.
        </p>
        <div className="btns">
          <a href="#projetos" className="btn ghost">Ver projetos</a>
          <Magnetic href={WHATSAPP} className="solid">Falar no WhatsApp</Magnetic>
        </div>
      </div>
      <Tilt className="photo-wrap">
        <img src="/foto.png" alt="Foto de Pablo Soares" />
         </Tilt>
    </section>
  );
}

function About() {
  return (
    <section id="sobre">
      <Reveal>
        <h2 className="h2"><span className="kicker">01</span>Sobre mim</h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="para">
          Sou estudante de Sistemas de Informação, no último período da graduação, e tenho certificado de
          Técnico em Desenvolvimento de Sistemas pela Proz Educação. Atuo como estagiário de TI, com foco em
          manutenção e formatação de computadores.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <p className="para">
          Sou comunicativo, criativo e me adapto rapidamente a novos desafios. Antes da área de TI, trabalhei
          como entregador, o que me deu responsabilidade, organização e atendimento ao cliente.
        </p>
      </Reveal>
    </section>
  );
}

function Stats() {
  return (
    <section>
      <div className="grid3">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 120}>
            <Tilt className="card">
              <div className="stat-num"><CountUp to={s.to} suffix={s.suffix} /></div>
              <div className="stat-label">{s.label}</div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="habilidades">
      <Reveal>
        <h2 className="h2"><span className="kicker">02</span>Habilidades</h2>
      </Reveal>
      <div className="chips">
        {SKILLS.map((s, i) => (
          <Reveal key={s} delay={i * 60}>
            <span className="chip">{s}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experiencia">
      <Reveal>
        <h2 className="h2"><span className="kicker">03</span>Experiência</h2>
      </Reveal>
      <div className="timeline">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.title} delay={i * 150}>
            <div className="item">
              <h3>{e.title}</h3>
              <div className="meta">{e.company} · {e.period}</div>
              <p>{e.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="formacao">
      <Reveal>
        <h2 className="h2"><span className="kicker">04</span>Formação</h2>
      </Reveal>
      <div className="grid3">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.title} delay={i * 120}>
            <Tilt className="card">
              <h3>{e.title}</h3>
              <p className="meta" style={{ margin: "0 0 10px" }}>{e.place}</p>
              <p>{e.desc}</p>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos">
      <Reveal>
        <h2 className="h2"><span className="kicker">05</span>Projetos</h2>
      </Reveal>
      <div className="grid3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <a href={p.link} target="_blank" rel="noreferrer" style={{ display: "block", height: "100%" }}>
              <Tilt className="card">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </Tilt>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato">
      <Reveal>
        <h2 className="h2"><span className="kicker">06</span>Contato</h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="para">Vamos conversar? Me chama no WhatsApp ou veja meus códigos no GitHub.</p>
      </Reveal>
      <Reveal delay={240}>
        <div className="btns" style={{ marginTop: 24 }}>
          <Magnetic href={WHATSAPP} className="solid">WhatsApp</Magnetic>
          <Magnetic href={GITHUB} className="ghost">GitHub</Magnetic>
        </div>
      </Reveal>
    </section>
  );
}

export default function App() {
  return (
    <>
      <style>{CSS}</style>
      <Particles />
      <CursorGlow />
      <Progress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Pablo Soares · Divinópolis, MG</span>
        <span>Feito com React</span>
      </footer>
    </>
  );
}