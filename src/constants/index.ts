import { BiLogoSpringBoot } from 'react-icons/bi';
import { SiDocker, SiExpo, SiExpress, SiFacebook, SiFlutter, SiLaravel, SiLinkedin, SiMongodb, SiMysql, SiN8N, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSpringboot, SiTypescript, SiWhatsapp } from 'react-icons/si'



export const stats = [
  { num: 1, suffix: '+', label: 'An d\'expérience' },
  { num: 8, suffix: '+', label: 'Projets livrés' },
  { num: 3, suffix: 'k+', label: 'Commits GitHub' },
  { num: 8, suffix: '', label: 'Technos maîtrisées' },
];

export const codeLines = [
  { w: '38%', color: '#61dafb', op: 0.85, x: 0 },
  { w: '25%', color: '#e2e8f0', op: 0.30, x: 0, },
  { w: '13%', color: '#7c3aed', op: 0.80, x: 0 },
  { w: '44%', color: '#fbbf24', op: 0.75, x: 0, },
  { w: '19%', color: '#4ade80', op: 0.70, x: 0, },
  { w: '28%', color: '#ff3b1f', op: 0.80, x: 0 },
  { w: '34%', color: '#e2e8f0', op: 0.25, x: 0, },
  { w: '50%', color: '#3178c6', op: 0.85, x: 0 },
  { w: '19%', color: '#68a063', op: 0.80, x: 0, },
  { w: '38%', color: '#e2e8f0', op: 0.25, x: 0, },
  { w: '31%', color: '#ea4b71', op: 0.80, x: 0 },
  { w: '25%', color: '#4ade80', op: 0.50, x: 0, },
  { w: '63%', color: '#e2e8f0', op: 0.15, x: 0 },
];

export const techBadges = [
  { icon: SiReact, label: 'React', color: '#61dafb' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#68a063' },
  { icon: SiDocker, label: 'Docker', color: '#2496ed' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
  { icon: SiN8N, label: 'n8n', color: '#ea4b71' },
]

export const skills = [
  { icon: SiReact, name: 'React / Next.js', level: 'Avancé', pct: 82, color: '#61dafb' },
  { icon: SiNodedotjs, name: 'Node.js / Express', level: 'Avancé', pct: 80, color: '#68a063' },
  { icon: SiDocker, name: 'Docker / K8s', level: 'Intermédiaire', pct: 65, color: '#2496ed' },
  { icon: SiMysql, name: 'MySQL', level: 'Avancé', pct: 76, color: '#f59e0b' },
  { icon: SiPostgresql, name: 'PostgreSQL', level: 'Avancé', pct: 75, color: '#336791' },
  { icon: BiLogoSpringBoot, name: 'Java / Spring Boot', level: 'Intermédiaire', pct: 65, color: '#6DB33F' },
  { icon: SiLaravel, name: 'PHP / Laravel', level: 'Avancé', pct: 70, color: '#FF2D20' },
  { icon: SiFlutter, name: 'Flutter', level: 'Intermédiaire', pct: 55, color: '#00B4D8' },
  { icon: SiExpo, name: 'Expo React Native', level: 'Intermédiaire', pct: 65, color: '#ffffff' },
  { icon: SiMongodb, name: 'MongoDB', level: 'Intermédiaire', pct: 68, color: '#4ade80' },
]

export const services: Service[] = [
  {
    num: '01',
    name: 'DÉVELOPPEMENT FULLSTACK',
    desc: "Création d'applications web complètes de A à Z : interfaces React/Next.js côté client, APIs Express/Node.js côté serveur, bases de données PostgreSQL ou MongoDB. Typage strict TypeScript et bonnes pratiques inclus.",
  },
  {
    num: '02',
    name: 'APIS & BASES DE DONNÉES',
    desc: "Conception et développement d'APIs RESTful robustes avec Node.js/Express. Modélisation de bases de données relationnelles (PostgreSQL, MySQL) et NoSQL (MongoDB), migrations, ORM Prisma.",
  },
  {
    num: '03',
    name: 'AUTOMATISATION N8N',
    desc: "Mise en place de workflows d'automatisation avec n8n : intégrations d'APIs tierces, automatisation de tâches répétitives, traitement de données, notifications et pipelines no-code/low-code.",
  },
  {
    num: '04',
    name: 'DÉPLOIEMENT DOCKER',
    desc: "Containerisation d'applications avec Docker et Docker Compose. Configuration d'environnements reproductibles, déploiement sur serveurs VPS, initiation à l'orchestration Kubernetes.",
  },
]

export const projects: Project[] = [
  {
    id: 1,
    cat: 'Next.js · TypeScript · GSAP',
    title: 'Site vitrine pour presenter une produit',
    bg: 'from-[#0f172a] to-[#1e3a5f]',
    col: 'text-white',
    techIcons: [
      { icon: SiNextdotjs, color: '#ffffff' },
      { icon: SiTypescript, color: '#3178c6' },
    ],
  },
  {
    id: 2,
    cat: 'React · Node.js · Express · MongoDB',
    title: 'Application E-commerce',
    bg: 'from-[#1a0f2e] to-violet-800',
    col: 'text-white',
    techIcons: [
      { icon: SiReact, color: '#61dafb' },
      { icon: SiExpress, color: '#ffffff' },
      { icon: SiMongodb, color: '#4ade80' },
    ],
  },
  {
    id: 3,
    cat: 'React · MySQL · Java · Spring Boot',
    title: 'Application de messagerie en temps réel',
    bg: 'from-[#0f2e1a] to-[#1a5f3d]',
    col: 'text-white',
    techIcons: [
      { icon: SiReact, color: '#61dafb' },
      { icon: SiMysql, color: '#f59e0b' },
      { icon: SiSpringboot, color: '#6DB33F' },
    ],
  },
  {
    id: 4,
    cat: 'Laravel · Node.js · MySQL',
    title: "Système de ticket événementielle avec vérification QRCode",
    bg: 'from-slate-900 to-slate-700',
    col: 'text-white',
    techIcons: [
      { icon: SiLaravel, color: '#ea4b71' },
      { icon: SiNodedotjs, color: '#68a063' },
      { icon: SiMysql, color: '#f59e0b' },
    ],
  },
  {
    id: 5,
    cat: 'React · Nest · PostgreSQL',
    title: "Application de mise en relation entre paysans et collecteurs des matières premières",
    bg: 'from-red-900 to-red-700',
    col: 'text-white',
    techIcons: [
      { icon: SiReact, color: '#61dafb' },
      { icon: SiNestjs, color: '#E0234E' },
      { icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    id: 6,
    cat: 'React · Express · MongoDB',
    title: "Application de reservation des trains en ligne avec des suivis en temps réel",
    bg: 'from-yellow-900 to-yellow-700',
    col: 'text-white',
    techIcons: [
      { icon: SiReact, color: '#61dafb' },
      { icon: SiExpress, color: '#ffffff' },
      { icon: SiMongodb, color: '#4ade80' },
    ],
  }
]


export const socials: Social[] = [
  { icon: SiLinkedin, href: 'https://www.linkedin.com/in/ando-henri-razafinatoandro-877041279', label: 'LinkedIn' },
  { icon: SiWhatsapp, href: 'tel:+261349756246', label: 'WhatsApp' },
  { icon: SiFacebook, href: 'https://web.facebook.com/ando.henri.03/', label: 'Facebook' },
]

export const fields: InputFormField[] = [
  { id: 'firstname', label: 'Prénom', placeholder: 'Votre prénom', colSpan: false },
  { id: 'lastname', label: 'Nom', placeholder: 'Votre nom', colSpan: false },
  { id: 'email', label: 'Email', placeholder: 'jean@example.com', type: 'email' },
  { id: 'subject', label: 'Sujet', placeholder: 'Nouveau projet' },
]