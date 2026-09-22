"use client";

import React, { useEffect, useState, useRef } from "react";
import { Github, Mail, ExternalLink, X, Code2, FlaskConical, Rocket, Trophy, GraduationCap, Linkedin, Minus } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "../data/projects";
import Header from "./Header";
import TypewriterTitle from "./TypewriterTitle";
import Reveal from "./Reveal";

const SKILLS = [
  {
    group: "Backend",
    items: ["PHP", "Node.js", "API REST", "Query Builder & SQL brut", "Sessions & auth par rôles"],
  },
  {
    group: "Données & Ops",
    items: ["PostgreSQL", "PhpSpreadsheet", "Intégration RFID & QR", "Hygiène des identifiants .env", "Git & GitHub"],
  },
  {
    group: "Frontend",
    items: ["JavaScript", "jQuery", "Bootstrap", "Tableaux de bord Chart.js", "Mises en page responsives"],
  },
  {
    group: "Domaine",
    items: ["Paie et conformité pour gouvernements locaux", "Logistique de secours", "Dossiers de résidents", "Flottes et systèmes de transport"],
  },
];

const WHAT_I_CAN_DO = [
  {
    group: "IT, Développement web & Solutions numériques",
    description:
      "Conception et développement de solutions web modernes, de la création d'interfaces utilisateur au développement d'applications connectées à des bases de données. Je m'intéresse particulièrement à la conception d'interfaces performantes, à l'intégration frontend/backend, à la gestion des données et à la résolution de problèmes techniques afin de créer des applications fiables, fonctionnelles et adaptées aux besoins des utilisateurs.",
    visual: "qa",
    size: "large",
    items: [
      "Développement web",
      "Frontend & Backend",
      "React & TypeScript",
      "Laravel & PHP",
      "Node.js",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
      "PostgreSQL",
      "Bases de données",
      "API REST",
      "Tests & débogage",
      "Git & GitHub",
      "Déploiement & optimisation",
    ],
  },
  {
    group: "Assistanat virtuel & Opérations digitales",
    description: "Organisation et gestion des ressources numériques pour accompagner les projets et les équipes dans leurs activités quotidiennes. Structuration des informations, documentation technique, recherche en ligne et utilisation d'outils digitaux pour améliorer le suivi, la productivité et l'efficacité des workflows.",
    visual: "va",
    items: [
      "Gestion de données",
      "Documentation technique",
      "Recherche en ligne",
      "Organisation de projets",
      "Support numérique",
      "Google Workspace",
      "Gestion de contenu",
      "Outils collaboratifs",
    ],
  },
];

const SOCIALS = [
  { label: "E-mail", value: "gnatimatchame@gmail.com", href: "mailto:gnatimatchame@gmail.com", icon: Mail, color: "#000000" },
  { label: "GitHub", value: "github.com/matchamekevin", href: "https://github.com/matchamekevin", icon: Github, color: "#000000" },
  { label: "LinkedIn", value: "linkedin.com/in/richard-victor-miculob", href: "https://www.linkedin.com/in/richard-victor-miculob/", icon: Linkedin, color: "#000000" },
];

const CARDS = [
  "Résolveur de problèmes",
  "Soucieux du détail",
  "Fiable",
  "Organisé",
  "Curieux",
  "Apprend vite",
  "Créatif",
  "Adaptable",
  "Orienté utilisateur",
  "À l'écoute des retours",
];

const CARD_SCATTER = [
  { rot: -7, x: 6, y: -4 },
  { rot: 5, x: -8, y: 3 },
  { rot: -3, x: 10, y: 6 },
  { rot: 9, x: -5, y: -6 },
  { rot: -10, x: 4, y: 5 },
  { rot: 4, x: -10, y: -2 },
  { rot: -5, x: 9, y: -5 },
  { rot: 8, x: -3, y: 7 },
  { rot: -8, x: 7, y: 2 },
  { rot: 3, x: -6, y: -7 },
];

const CURRENTLY = [
  { icon: Code2, label: "Je crée", detail: "Des projets web et numériques" },
  { icon: FlaskConical, label: "J'explore", detail: "Le test de logiciels et la QA" },
  { icon: Rocket, label: "J'apprends", detail: "Le développement full-stack" },
];

const EXPERIENCE_FILES = [
  "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg",
  "11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg",
  "21.jpg","22.jpg","23.jpg","24.png","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg",
  "31.png","32.jpg","33.png","34.jpg","35.jpg",
];

const EXPERIENCE = [
  {
    title: "Stage en développement web frontend",
    org: "NANO INC",
    date: "Juillet – Décembre 2025",
    desc: "Expérience professionnelle orientée vers le développement d'interfaces web modernes et responsives. Participation à la conception et à l'intégration de solutions frontend, avec une utilisation de **Next.js** et **Tailwind CSS**. Cette expérience m'a permis de renforcer mes compétences en intégration d'interfaces, en organisation du code et en travail au sein d'un environnement professionnel.",
    tags: ["Next.js", "Tailwind CSS"],
    images: EXPERIENCE_FILES.map((f) => `/images/experience/stage-frontend/${f}`),
  },
  {
    title: "Développeur Frontend",
    org: "GROUPE ISD AFRIK",
    imageLeft: true,
    desc: "Participation au développement et à l'évolution de solutions numériques pour différents besoins métiers. Contribution à la conception des interfaces, à l'intégration des fonctionnalités frontend et à la collaboration avec les autres membres de l'équipe afin de faire évoluer les projets de manière structurée.\n\nTravail autour de projets web intégrant des fonctionnalités de réservation, de paiement, de gestion de données et d'interactions avec des services backend.",
    tags: ["Développement frontend", "Interfaces web", "API", "Travail en équipe", "Git & GitHub"],
    images: EXPERIENCE_FILES.map((f) => `/images/experience/developpeur-frontend/${f}`),
  },
  {
    title: "Projets personnels & expérimentations",
    desc: "Développement régulier de projets permettant de mettre en pratique mes connaissances et d'explorer de nouvelles technologies. Ces projets couvrent notamment le **e-commerce**, la gestion d'emplois du temps scolaires, la billetterie et le paiement en ligne.\n\nCette approche me permet de progresser continuellement, de mieux comprendre l'architecture des applications et de transformer des idées en solutions numériques fonctionnelles.",
    tags: ["React", "Tailwind CSS", "Node.js", "Laravel", "PHP", "PostgreSQL", "Git", "API"],
    images: EXPERIENCE_FILES.map((f) => `/images/experience/projets-personnels/${f}`),
  },
  {
    title: "Apprentissage continu",
    imageLeft: true,
    desc: "Veille technologique, apprentissage autonome et expérimentation quotidienne autour du développement web et des outils modernes de productivité et d'intelligence artificielle.\n\nUtilisation d'outils tels que **VS Code, Cursor, Zed, GitHub, Figma et différents assistants IA** pour accélérer l'apprentissage, explorer de nouvelles approches et améliorer mon workflow de développement.",
    images: EXPERIENCE_FILES.map((f) => `/images/experience/apprentissage-continu/${f}`),
  },
];

function renderBold(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

function ExperienceImageStack({ images, title }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  return (
    <div
      className="experience-image-stack"
      onClick={() => setIndex((prev) => (prev + 1) % count)}
    >
      {images.map((src, i) => {
        const offset = (i - index + count) % count;
        const isExiting = offset === count - 1;
        if (offset > 2 && !isExiting) return null;

        const scatter = CARD_SCATTER[i % CARD_SCATTER.length];
        let style;

        if (isExiting) {
          style = {
            "--tx": `${scatter.x + 100}px`,
            "--ty": `${scatter.y - 40}px`,
            "--rot": `${scatter.rot + 25}deg`,
            "--sc": 0.88,
            "--op": 0,
            zIndex: 5,
          };
        } else {
          const depth = offset;
          const isFront = depth === 0;
          const calm = 0.4;
          const dir = depth % 2 === 1 ? -1 : 1;
          style = {
            "--tx": isFront ? "0px" : `${scatter.x * calm + depth * 8}px`,
            "--ty": isFront ? "0px" : `${scatter.y * calm + dir * depth * 10}px`,
            "--rot": isFront ? "0deg" : `${scatter.rot * calm + depth * (scatter.rot >= 0 ? 1.5 : -1.5)}deg`,
            "--sc": isFront ? 1 : 1 - depth * 0.06,
            "--op": isFront ? 1 : 0.75 - (depth - 1) * 0.2,
            zIndex: 30 - depth * 10,
          };
        }

        return (
          <img
            key={src}
            src={src}
            alt={`${title} ${i + 1}`}
            className={`stacked-image${offset === 0 ? " stacked-image-front" : ""}`}
            style={style}
          />
        );
      })}
    </div>
  );
}

function WorkAlbumStack({ projects, activeIndex, onAdvance }) {
  const count = projects.length;

  return (
    <div className="work-mobile-stack" onClick={onAdvance}>
      {projects.map((project, i) => {
        const offset = (i - activeIndex + count) % count;
        const isExiting = offset === count - 1;
        if (offset > 2 && !isExiting) return null;

        const scatter = CARD_SCATTER[i % CARD_SCATTER.length];
        let style;

        if (isExiting) {
          style = {
            "--tx": `${scatter.x + 100}px`,
            "--ty": `${scatter.y - 40}px`,
            "--rot": `${scatter.rot + 25}deg`,
            "--sc": 0.88,
            "--op": 0,
            zIndex: 5,
          };
        } else {
          const depth = offset;
          const isFront = depth === 0;
          const calm = 0.4;
          const dir = depth % 2 === 1 ? -1 : 1;
          style = {
            "--tx": isFront ? "0px" : `${scatter.x * calm + depth * 8}px`,
            "--ty": isFront ? "0px" : `${scatter.y * calm + dir * depth * 10}px`,
            "--rot": isFront ? "0deg" : `${scatter.rot * calm + depth * (scatter.rot >= 0 ? 1.5 : -1.5)}deg`,
            "--sc": isFront ? 1 : 1 - depth * 0.06,
            "--op": isFront ? 1 : 0.75 - (depth - 1) * 0.2,
            zIndex: 30 - depth * 10,
          };
        }

        return (
          <img
            key={project.num}
            src={project.image}
            alt={project.title}
            className={`stacked-image${offset === 0 ? " stacked-image-front" : ""}`}
            style={style}
            draggable={false}
          />
        );
      })}
    </div>
  );
}

export default function Portfolio() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const rootRef = useRef(null);
  const marqueeTrackRef = useRef(null);
  const heroRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [cardIndex, setCardIndex] = useState(0);
  const [cardPaused, setCardPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMinimized, setIsModalMinimized] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const activeProject = PROJECTS[activeIndex];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goTo = (index) => {
    const normalized = ((index % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;
    setActiveIndex(normalized);
  };

  useEffect(() => {
    const handleMouse = (e) => {
      if (!rootRef.current) return;
      const rect = rootRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const track = marqueeTrackRef.current;
    if (!track) return;

    const syncMarqueeSpeed = () => {
      const enterSeconds = 8;
      const pxPerSecond = window.innerWidth / enterSeconds;
      const loopDistance = track.scrollWidth / 2;
      const loopSeconds = loopDistance / pxPerSecond;
      heroRef.current?.style.setProperty("--marquee-loop-duration", `${loopSeconds}s`);
    };

    syncMarqueeSpeed();
    window.addEventListener("resize", syncMarqueeSpeed);
    return () => window.removeEventListener("resize", syncMarqueeSpeed);
  }, []);

  useEffect(() => {
    if (cardPaused) return;
    const id = setInterval(() => {
      setCardIndex((prev) => (prev + 1) % CARDS.length);
    }, 1500);
    return () => clearInterval(id);
  }, [cardPaused]);

  return (
    <div
  ref={rootRef}
  className="portfolio-root"
>
      <svg className="bg-lines" viewBox="0 0 1440 5000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width:'100%',height:'100%'}}>
        <g opacity="0.28">
          <path d="M-100 200 C 200 100, 500 300, 800 200 C 1100 100, 1300 280, 1540 180" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
          <path d="M0 350 C 300 250, 600 400, 900 320 C 1200 240, 1400 380, 1440 300" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
          <path d="M-80 500 C 240 420, 540 580, 840 500 C 1140 420, 1360 560, 1500 480" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
        </g>
        <g opacity="0.32">
          <path d="M0 700 C 320 620, 620 780, 920 700 C 1220 620, 1420 760, 1440 680" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
          <path d="M-100 850 C 260 780, 560 920, 860 860 C 1160 800, 1380 940, 1540 880" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
          <path d="M0 1000 C 300 940, 600 1060, 900 1000 C 1200 940, 1400 1080, 1440 1020" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
        </g>
        <g opacity="0.22">
          <path d="M-120 1250 C 200 1180, 500 1320, 820 1260 C 1140 1200, 1340 1340, 1560 1280" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
          <path d="M0 1400 C 280 1340, 580 1460, 880 1400 C 1180 1340, 1380 1480, 1440 1420" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
          <path d="M-60 1550 C 240 1490, 540 1610, 840 1550 C 1140 1490, 1360 1630, 1500 1570" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
          <path d="M0 1700 C 320 1640, 620 1760, 920 1700 C 1220 1640, 1420 1780, 1440 1720" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
        </g>
        <g opacity="0.3">
          <path d="M-140 1950 C 220 1880, 520 2020, 860 1960 C 1200 1900, 1400 2040, 1580 1980" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
          <path d="M0 2100 C 300 2040, 600 2160, 900 2100 C 1200 2040, 1400 2180, 1440 2120" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
          <path d="M-80 2250 C 240 2190, 540 2310, 840 2250 C 1140 2190, 1360 2330, 1500 2270" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
        </g>
        <g opacity="0.26">
          <path d="M0 2500 C 320 2440, 620 2560, 920 2500 C 1220 2440, 1420 2580, 1440 2520" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
          <path d="M-100 2650 C 260 2590, 560 2710, 860 2650 C 1160 2590, 1380 2730, 1540 2670" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
          <path d="M0 2800 C 300 2740, 600 2860, 900 2800 C 1200 2740, 1400 2880, 1440 2820" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
          <path d="M-60 2950 C 240 2890, 540 3010, 840 2950 C 1140 2890, 1360 3030, 1500 2970" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
        </g>
        <g opacity="0.34">
          <path d="M-120 3250 C 200 3180, 500 3320, 820 3260 C 1140 3200, 1340 3340, 1560 3280" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
          <path d="M0 3400 C 280 3340, 580 3460, 880 3400 C 1180 3340, 1380 3480, 1440 3420" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
          <path d="M-80 3550 C 240 3490, 540 3610, 840 3550 C 1140 3490, 1360 3630, 1500 3570" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
          <path d="M0 3700 C 320 3640, 620 3760, 920 3700 C 1220 3640, 1420 3780, 1440 3720" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
        </g>
        <g opacity="0.24">
          <path d="M-100 4050 C 260 3990, 560 4110, 860 4050 C 1160 3990, 1380 4130, 1540 4070" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
          <path d="M0 4200 C 300 4140, 600 4260, 900 4200 C 1200 4140, 1400 4280, 1440 4220" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
          <path d="M-60 4350 C 240 4290, 540 4410, 840 4350 C 1140 4290, 1360 4430, 1500 4370" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
        </g>
        <g opacity="0.3">
          <path d="M-140 4600 C 220 4540, 520 4660, 860 4600 C 1200 4540, 1400 4680, 1580 4620" stroke="var(--light-gray)" strokeWidth="1.5" fill="none"/>
          <path d="M0 4750 C 300 4690, 600 4810, 900 4750 C 1200 4690, 1400 4830, 1440 4770" stroke="var(--light-gray)" strokeWidth="1" fill="none"/>
        </g>
      </svg>
      <Header />

      {/* HERO */}
      <section id="hero" className="hero-root" ref={heroRef}>

<div className="bg-name-marquee">
          <div className="bg-name-track" ref={marqueeTrackRef}>
            <span className="bg-name-text">MATCHAME GNATI KEVIN</span>
            <span className="bg-name-text">MATCHAME GNATI KEVIN</span>
          </div>
        </div>

        {["t1", "t2", "t3", "t4", "b1", "b2", "b3", "b4"].map((pos) => (
          <div
            key={pos}
            className={`bg-name-marquee bg-name-marquee--mobile-extra bg-name-marquee--${pos}`}
            aria-hidden="true"
          >
            <div className="bg-name-track">
              <span className="bg-name-text">MATCHAME GNATI KEVIN</span>
              <span className="bg-name-text">MATCHAME GNATI KEVIN</span>
            </div>
          </div>
        ))}

        <div className="concentric-circles">
          <div className="circle circle-1" />
          <div className="circle circle-2" />
          <div className="circle circle-3" />
        </div>

        <div className="profile-wrap">
          <img src="/images/profile.png" alt="KEVIN" className="profile-image" draggable={false} />
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span className="scroll-text">Défiler</span>
        </div>
      </section>

      {/* WORK GALLERY */}
      <section id="work" className="section">
        <Reveal>
          <div className="work-header">
            <div>
              <div className="section-label">Projets sélectionnés</div>
              <TypewriterTitle text="Galerie de projets" />
              <div className="section-desc">Une collection de systèmes, de projets numériques et de travaux techniques que j'ai réalisés.</div>
            </div>
            <Link href="/work" className="work-album-btn-top">
              Voir plus de projets <ExternalLink size={14} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="work-album">
            <div className="work-album-inner">
              {PROJECTS.map((project, index) => {
                const total = PROJECTS.length;

                let diff = (index - activeIndex + total) % total;
                if (diff > total / 2) diff -= total;

                const isCenter = diff === 0;
                const distance = Math.abs(diff);
                const dir = isCenter ? 0 : diff / distance;

                const style = isCenter
                  ? {
                      transform: "translate(-50%, -50%) scale(1)",
                      zIndex: 5,
                      opacity: 1,
                    }
                  : {
                      transform: `translate(calc(-50% + ${
                        dir * (200 + (distance - 1) * 130)
                      }px), -50%) scale(${Math.max(0.55, 1 - distance * 0.28)})`,
                      zIndex: 5 - distance,
                      opacity: distance <= 2 ? Math.max(0, 0.85 - (distance - 1) * 0.55) : 0,
                      pointerEvents: distance <= 2 ? "auto" : "none",
                    };

                return (
                  <div
                    key={project.num}
                    className={`work-album-item${isCenter ? " work-album-item-center" : ""}`}
                    style={style}
                    onClick={() => !isCenter && goTo(index)}
                  >
                    <img src={project.image} alt={project.title} className="work-album-img" draggable={false} />
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="work-mobile-stack-wrap">
            <WorkAlbumStack
              projects={PROJECTS}
              activeIndex={activeIndex}
              onAdvance={() => goTo(activeIndex + 1)}
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="work-info" key={activeProject.num}>
            <h3 className="work-info-title">{activeProject.title}</h3>
            <p className="work-info-desc">{activeProject.desc}</p>

            <a
              href={activeProject.link}
              className="work-info-link"
              target={activeProject.link !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              {activeProject.linkText}
            </a>
          </div>
        </Reveal>
      </section>

      {/* WHAT I CAN DO */}
      <section id="what-i-can-do" className="section">
        <div className="what-i-can-do-grid">
          <div className="what-i-can-do-left">
            <Reveal>
              <div className="section-label">Mes compétences</div>
              <TypewriterTitle text="Ce que je sais faire" />
              <div className="what-i-can-do-desc">
                Développeur full-stack orienté front-end (React, Next.js, Tailwind CSS), je conçois des interfaces fiables tout en assurant la cohérence avec le back-end (PostgreSQL, Laravel). Je gère aussi bien le développement que le déploiement (Docker, CI/CD, Render/Vercel), le débogage de données et la documentation technique. Meneur d'une petite équipe front-end, j'allie rigueur technique et gestion de projet pour des livraisons efficaces.
              </div>
              <div className="tech-stack">
                <div className="tech-stack-column">
                  <div className="tech-stack-item">
                    <img src="/images/logos/html.png" alt="HTML" draggable={false} />
                    <span className="tech-stack-label">HTML</span>
                  </div>
                  <div className="tech-stack-item">
                    <img src="/images/logos/css.png" alt="CSS" draggable={false} />
                    <span className="tech-stack-label">CSS</span>
                  </div>
                  <div className="tech-stack-item">
                    <img src="/images/logos/js.png" alt="JavaScript" draggable={false} />
                    <span className="tech-stack-label">JavaScript</span>
                  </div>
                  <div className="tech-stack-item">
                    <img src="/images/logos/react.png" alt="React" draggable={false} />
                    <span className="tech-stack-label">React</span>
                  </div>
                  <div className="tech-stack-item">
                    <img src="/images/logos/python.png" alt="Python" draggable={false} />
                    <span className="tech-stack-label">Python</span>
                  </div>
                </div>
                <div className="tech-stack-column">
                  <div className="tech-stack-item">
                    <img src="/images/logos/typescript.svg" alt="TypeScript" draggable={false} />
                    <span className="tech-stack-label">TypeScript</span>
                  </div>
                  <div className="tech-stack-item">
                    <img src="/images/logos/php.png" alt="PHP" draggable={false} />
                    <span className="tech-stack-label">PHP</span>
                  </div>
                  <div className="tech-stack-item">
                    <img src="/images/logos/nodejs.svg" alt="Node.js" draggable={false} />
                    <span className="tech-stack-label">Node.js</span>
                  </div>
                  <div className="tech-stack-item">
                    <img src="/images/logos/postgres.svg" alt="PostgreSQL" draggable={false} />
                    <span className="tech-stack-label">PostgreSQL</span>
                  </div>
                </div>
                <div className="tech-stack-column workspace-column">
                  <div className="tech-stack-item">
                    <img src="/images/workspace/notion.png" alt="Notion" draggable={false} />
                    <span className="tech-stack-label">Notion</span>
                  </div>
                  <div className="tech-stack-item">
                    <img src="/images/workspace/google.png" alt="Google" draggable={false} />
                    <span className="tech-stack-label">Google</span>
                  </div>
                  <div className="tech-stack-item">
                    <img src="/images/workspace/trello.png" alt="Trello" draggable={false} />
                    <span className="tech-stack-label">Trello</span>
                  </div>
                  <div className="tech-stack-item">
                    <img src="/images/workspace/canva.png" alt="Canva" draggable={false} />
                    <span className="tech-stack-label">Canva</span>
                  </div>
                </div>
                <div className="tech-stack-column workspace-column">
                  <div className="tech-stack-item">
                    <img src="/images/workspace/figma.png" alt="Figma" draggable={false} />
                    <span className="tech-stack-label">Figma</span>
                  </div>
                  <div className="tech-stack-item">
                    <img src="/images/workspace/capcut.png" alt="CapCut" draggable={false} />
                    <span className="tech-stack-label">CapCut</span>
                  </div>
            </div>
          </div>
        </Reveal>
          </div>

          <div className="what-i-can-do-right">
            {WHAT_I_CAN_DO.map((group, index) => (
              <Reveal key={group.group} delay={150 + index * 120}>
                <div className={`bento-card ${group.size === "large" ? "bento-large" : "bento-medium"}`}>
                  <div className="bento-header">
                    <div className="bento-number">{String(index + 1).padStart(2, "0")}</div>
                    <div className="bento-category">{group.group}</div>
                  </div>

                  <div className="bento-visual">
                    {index === 0 && (
                      <img src="/images/gif/coding.gif" alt="Développement web & QA" className="bento-gif" draggable={false} />
                    )}
                    {index === 1 && (
                      <img src="/images/gif/assistant.gif" alt="Assistanat virtuel" className="bento-gif" draggable={false} />
                    )}
                    {index === 2 && (
                      <img src="/images/gif/social.gif" alt="Contenu & Digitale" className="bento-gif" draggable={false} />
                    )}
                  </div>

                  <p className="bento-desc">{group.description}</p>

                  <div className="bento-skills">
                    {group.items.map((item) => (
                      <span key={item} className="bento-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <Reveal>
          <div className="section-label">À PROPOS DE MOI</div>
          <TypewriterTitle text={isMobile ? "Développeur web frontend." : "Développeur web frontend."} />
        </Reveal>

        <Reveal delay={100}>
          <div className="about-profile-card">
            <div className="about-profile-header">
              <div className="about-profile-image-wrapper">
                <img src="/images/about/profile.png" alt="Profile" className="about-profile-image" draggable={false} />
              </div>
              <div className="about-profile-info">
                <div className="about-profile-name">
                  MATCHAME GNATI KEVIN
                  <img src="/images/about/badge.png" alt="Vérifié" className="about-profile-badge" draggable={false} />
                </div>
                <div className="about-profile-stats">
                  <div className="about-stat-item">
                    <span className="about-stat-label">PROJETS</span>
                    <span className="about-stat-value">20+</span>
                  </div>
                  <div className="about-stat-item">
                    <span className="about-stat-label">CERTIFICATS</span>
                    <span className="about-stat-value">9</span>
                  </div>
                  <div className="about-stat-item">
                    <span className="about-stat-label">LICENCE</span>
                    <span className="about-stat-value">2025</span>
                  </div>
                </div>
                <div className="about-description">
                  <p>
                    Je suis titulaire d'une licence obtenue en 2025, développeur web frontend passionné par la création d'interfaces modernes, claires et agréables à utiliser. J'aime transformer des maquettes et des idées en pages web fonctionnelles et responsives, en travaillant avec HTML, CSS, JavaScript et les frameworks frontend. Mon parcours m'a appris à allier créativité, sens du détail et rigueur pour livrer des expériences utilisateur soignées.
                  </p>
                  <p>
                    Vous voulez en savoir plus sur mon parcours ? <a href="/resume/CV.pdf" className="about-resume-link" target="_blank" rel="noopener noreferrer">Téléchargez mon CV</a>.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-bottom-row">
              <div className="currently-strip">
                <div className="currently-strip-label">ACTUELLEMENT</div>
                <div className="currently-strip-items">
                  {CURRENTLY.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div className="currently-item" key={item.label}>
                        <span className="currently-icon">
                          <Icon size={16} strokeWidth={2} />
                        </span>
                        <div className="currently-text">
                          <div className="currently-item-label">{item.label}</div>
                          <div className="currently-item-detail">{item.detail}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="card-stack">
                <div
                  className="card-stack-container"
                  onClick={() => setCardIndex((prev) => (prev + 1) % CARDS.length)}
                  onMouseEnter={() => setCardPaused(true)}
                  onMouseLeave={() => setCardPaused(false)}
                >
                {CARDS.map((trait, i) => {
                  const offset = (i - cardIndex + CARDS.length) % CARDS.length;
                  const isExiting = offset === CARDS.length - 1;
                  if (offset > 2 && !isExiting) return null;

                  const scatter = CARD_SCATTER[i];
                  let style;

                  if (isExiting) {
                    style = {
                      "--tx": `${scatter.x + 140}px`,
                      "--ty": `${scatter.y - 60}px`,
                      "--rot": `${scatter.rot + 40}deg`,
                      "--sc": 0.85,
                      "--op": 0,
                      zIndex: 5,
                    };
                  } else {
                    const depth = offset;
                    style = {
                      "--tx": `${scatter.x + depth * 10}px`,
                      "--ty": `${scatter.y + depth * 8}px`,
                      "--rot": `${scatter.rot + depth * (scatter.rot >= 0 ? 5 : -5)}deg`,
                      "--sc": 1 - depth * 0.045,
                      "--op": depth === 0 ? 1 : 0.55 + (2 - depth) * 0.15,
                      zIndex: 30 - depth * 10,
                    };
                  }

                  return (
                    <div
                      key={trait}
                      className={`card-stack-card${offset === 0 ? " card-stack-card-front" : ""}`}
                      style={style}
                    >
                      <div className="card-stack-label">ATOUT</div>
                      <div className="card-stack-value">{trait}</div>
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* AWARDS */}
      <section id="awards" className="section">
        <Reveal>
          <div className="section-label">Reconnaissance</div>
          <TypewriterTitle text="Distinctions et récompenses" />
          <div className="section-desc">
            Une collection de reconnaissances académiques et professionnelles qui reflètent mon engagement envers l'excellence.
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="awards-layout">
            <div className="awards-gallery">
              {Array.from({ length: 12 }, (_, i) => (
                <img
                  key={i}
                  src={`/images/awards/kevin/${String(i + 1).padStart(2, "0")}.webp`}
                  alt={`Distinction ${i + 1}`}
                  className="awards-gallery-img"
                  loading="lazy"
                  draggable={false}
                />
              ))}
            </div>
            <div className="awards-column">
              <a href="/awards/Dean_Lister.pdf" className="award-item" target="_blank" rel="noopener noreferrer">
                <div className="award-icon"><GraduationCap size={18} /></div>
                <div className="award-title">Tableau d'honneur</div>
                <ExternalLink size={12} style={{ marginLeft: 'auto', flexShrink: 0 }} />
              </a>
              <a href="/awards/Best_Capstone_Paper.pdf" className="award-item" target="_blank" rel="noopener noreferrer">
                <div className="award-icon"><Trophy size={18} /></div>
                <div className="award-title">Meilleur mémoire de fin d'études</div>
                <ExternalLink size={12} style={{ marginLeft: 'auto', flexShrink: 0 }} />
              </a>
              <a href="/awards/Best_Capstone_System.pdf" className="award-item" target="_blank" rel="noopener noreferrer">
                <div className="award-icon"><Trophy size={18} /></div>
                <div className="award-title">Meilleur système de fin d'études</div>
                <ExternalLink size={12} style={{ marginLeft: 'auto', flexShrink: 0 }} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
      <section id="trainings" className="section">
        <Reveal>
          <div className="section-label">Croissance & Expérience</div>
          <TypewriterTitle text="Expériences, projets et apprentissages" />
          <div className="section-desc">
            Un parcours construit à travers des expériences professionnelles, des projets web concrets et un apprentissage continu, avec une attention particulière portée au développement frontend, à l'intégration d'interfaces et à la conception de solutions numériques.
          </div>
        </Reveal>

        <div className="experience-list">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className={`experience-card${exp.images && exp.images.length > 0 ? "" : " experience-card--text"}${exp.imageLeft ? " experience-card-reverse" : ""}`}>
              <div className="experience-text">
                <div className="experience-header">
                  <div className="experience-title">
                    {exp.title}
                    {exp.subtitle && <div className="experience-subtitle">{exp.subtitle}</div>}
                  </div>
                  {exp.date && <div className="experience-date">{exp.date}</div>}
                </div>
                {exp.org && <div className="experience-org">{exp.org}</div>}
                {exp.desc.split("\n\n").map((paragraph, p) => (
                  <p key={p} className="experience-desc">{renderBold(paragraph)}</p>
                ))}
                {exp.tags && exp.tags.length > 0 && (
                  <div className="experience-tags">
                    {exp.tags.map((tag, t) => (
                      <span key={t} className="experience-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              {exp.images && exp.images.length > 0 && (
                <ExperienceImageStack images={exp.images} title={exp.title} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="contact-grid">
          <div className="contact-left">
            <Reveal>
              <div className="contact-eyebrow">CONTACTEZ-MOI</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="contact-headline">
                TRAVAILLONS<br />
                <span className="contact-headline-accent">ENSEMBLE</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="contact-description">Je cherche le prochain problème qui vaut la peine d'être résolu.</p>
            </Reveal>
            <Reveal delay={300}>
              <p className="contact-secondary">
                Je suis ouvert aux opportunités où je peux contribuer au test de logiciels, au développement web, aux opérations IT et aux flux de travail numériques.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <a href="/resume/CV.pdf" className="contact-resume-btn" target="_blank" rel="noopener noreferrer">TÉLÉCHARGER LE CV →</a>
            </Reveal>
          </div>

          <div className="contact-right">
            <div className="contact-cards">
              <Reveal delay={200}>
                <a href="mailto:gnatimatchame@gmail.com" className="contact-card" target="_blank" rel="noopener noreferrer">
                  <span className="contact-card-number">01</span>
                  <div className="contact-card-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-card-info">
                    <div className="contact-card-label">E-MAIL</div>
                    <div className="contact-card-value">gnatimatchame@gmail.com</div>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={280}>
                <a href="https://github.com/matchamekevin" className="contact-card" target="_blank" rel="noopener noreferrer">
                  <span className="contact-card-number">02</span>
                  <div className="contact-card-icon">
                    <Github size={20} />
                  </div>
                  <div className="contact-card-info">
                    <div className="contact-card-label">GITHUB</div>
                    <div className="contact-card-value">github.com/matchamekevin</div>
                  </div>
                  <ExternalLink size={16} className="contact-card-arrow" />
                </a>
              </Reveal>
              <Reveal delay={360}>
                <a href="https://www.linkedin.com/in/richard-victor-miculob/" className="contact-card" target="_blank" rel="noopener noreferrer">
                  <span className="contact-card-number">03</span>
                  <div className="contact-card-icon">
                    <Linkedin size={20} />
                  </div>
                  <div className="contact-card-info">
                    <div className="contact-card-label">LINKEDIN</div>
                    <div className="contact-card-value">linkedin.com/in/richard-victor-miculob</div>
                  </div>
                  <ExternalLink size={16} className="contact-card-arrow" />
                </a>
              </Reveal>
            </div>
            <Reveal delay={440}>
              <button className="contact-cta" onClick={() => { setIsModalOpen(true); setIsModalMinimized(false); }}>
                ENVOYEZ-MOI UN MESSAGE →
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className={`contact-modal${isModalMinimized ? " contact-modal--minimized" : ""}`}>
          <div className="contact-modal-header" onClick={() => isModalMinimized && setIsModalMinimized(false)}>
            <h3 className="contact-modal-title">Envoyez-moi un message</h3>
            <div className="contact-modal-controls">
              <button
                type="button"
                className="contact-modal-icon-btn contact-modal-minimize-btn"
                aria-label={isModalMinimized ? "Agrandir" : "Réduire"}
                onClick={(e) => { e.stopPropagation(); setIsModalMinimized((v) => !v); }}
              >
                <Minus size={16} />
              </button>
              <button
                type="button"
                className="contact-modal-icon-btn"
                aria-label="Fermer"
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isModalMinimized && (
            <div className="contact-modal-inner">
              <form
                className="contact-modal-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target;
                  const data = {
                    name: form.name.value.trim(),
                    email: form.email.value.trim(),
                    message: form.message.value.trim(),
                  };

                  setFormStatus("submitting");

                   try {
                     await fetch('https://script.google.com/macros/s/AKfycbz68sln0VIOOVOegEYiQLJwTdLonmPHMzq8jqzWCaqdgUAG2-LWxJVuRaEM5HQl6ABH/exec', {
                       method: 'POST',
                       mode: 'no-cors',
                       headers: { 'Content-Type': 'application/json' },
                       body: JSON.stringify(data),
                     });
                     setFormStatus("success");
                     form.reset();
                     setIsModalOpen(false);
                     setShowSuccessModal(true);
                   } catch (error) {
                     setFormStatus("error");
                   }
                }}
              >
                <div className="contact-modal-field">
                  <label className="contact-modal-label">Nom complet</label>
                  <input type="text" name="name" className="contact-modal-input" placeholder="Votre nom complet" required />
                </div>

                <div className="contact-modal-field">
                  <label className="contact-modal-label">Adresse e-mail</label>
                  <input type="email" name="email" className="contact-modal-input" placeholder="votre.email@exemple.com" required />
                </div>

                <div className="contact-modal-field contact-modal-field--grow">
                  <label className="contact-modal-label">Message</label>
                  <textarea rows="6" name="message" className="contact-modal-input" placeholder="Parlez-moi de votre projet..." required />
                </div>

                <button type="submit" className="contact-modal-submit" disabled={formStatus === "submitting"}>
                  {formStatus === "submitting" ? "ENVOI EN COURS..." : formStatus === "success" ? "MESSAGE ENVOYÉ" : "ENVOYER LE MESSAGE →"}
                </button>

                {formStatus === "error" && (
                  <div className="contact-modal-error">
                    Échec de l'envoi du message. Veuillez réessayer ou me contacter directement.
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      )}

      {showSuccessModal && (
        <div className="success-modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <button className="success-modal-close" onClick={() => setShowSuccessModal(false)}>
              <X size={20} />
            </button>
            <div className="success-modal-icon">✓</div>
            <h3 className="success-modal-title">Message envoyé !</h3>
            <p className="success-modal-text">Merci de m'avoir écrit. Je vous répondrai dès que possible.</p>
            <button className="success-modal-btn" onClick={() => setShowSuccessModal(false)}>
              CONTINUER À PARCOURIR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
