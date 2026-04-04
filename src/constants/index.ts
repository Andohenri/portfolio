import { BiLogoSpringBoot } from 'react-icons/bi';
import { SiClerk, SiDocker, SiExpo, SiExpress, SiFacebook, SiFlutter, SiJavascript, SiLaravel, SiLinkedin, SiMongodb, SiMysql, SiN8N, SiNestjs, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiSpringboot, SiTailwindcss, SiTypescript, SiWhatsapp } from 'react-icons/si'



export const stats = [
  { num: 10, suffix: '+', label: 'Projets réalisés' },
  { num: 7, suffix: '+', label: 'Technologies maîtrisées' },
  { num: 100, suffix: '%', label: 'Engagement projet' },
  { num: 24, suffix: 'h', label: 'Temps de réponse' },
]

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
    name: 'DÉVELOPPEMENT D’APPLICATIONS WEB',
    desc: "Conception et développement d’applications web complètes, de l’interface utilisateur jusqu’au système côté serveur. Je crée des solutions performantes, sécurisées et évolutives, adaptées aux besoins spécifiques de votre projet.",
  },
  {
    num: '02',
    name: 'APIS & GESTION DE DONNÉES',
    desc: "Création de systèmes backend robustes permettant la communication entre différentes applications. Conception et organisation de bases de données fiables pour garantir la performance, la sécurité et la cohérence des données.",
  },
  {
    num: '03',
    name: 'AUTOMATISATION DE PROCESSUS',
    desc: "Mise en place de solutions d’automatisation pour réduire les tâches répétitives, améliorer la productivité et connecter différents outils entre eux. Idéal pour optimiser vos workflows et gagner du temps.",
  },
  {
    num: '04',
    name: 'DÉPLOIEMENT & MISE EN PRODUCTION',
    desc: "Préparation et mise en ligne de vos applications dans des environnements fiables et sécurisés. Configuration d’infrastructures pour assurer stabilité, performance et facilité de maintenance.",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    cat: 'Next.js · TypeScript · MongoDB · Vapi · Clerk · shadcn/ui · Tailwind · CodeRabbit',
    title: 'Bookified. Transformez vos livres en conversations interactives avec l\'IA. Téléversez des PDF et discutez avec vos livres en utilisant la voix',
    bg: 'from-[#0f172a] to-[#1e3a5f]',
    bgImage: '/bookified.webp',
    liveUrl: 'https://django-bookified.vercel.app/',
    col: 'text-white',
    techIcons: [
      { icon: SiTypescript, color: '#3178c6' },
      { icon: SiNextdotjs, color: '#ffffff' },
      { icon: SiMongodb, color: '#4ade80' },
      { icon: SiClerk, color: '#ffffff' },
      { icon: SiTailwindcss, color: '#06b6d4' },
    ],
  },
  {
    id: 5,
    cat: 'Typescript · React · Nest · PostgreSQL',
    title: "Agri-Connect - Application de mise en relation entre paysans et collecteurs des matières premières",
    bg: 'from-red-900 to-red-700',
    bgImage: '/agriconnect.webp',
    col: 'text-white',
    techIcons: [
      { icon: SiTypescript, color: '#3178c6' },
      { icon: SiReact, color: '#61dafb' },
      { icon: SiNestjs, color: '#E0234E' },
      { icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    id: 2,
    cat: 'Typescript · Next.js · GSAP · Tailwind',
    title: "Mojito - Site vitrine pour presenter mes competences en integration et en design d'interface utilisateur animée",
    bg: 'from-green-900 to-green-700',
    col: 'text-white',
    bgImage: '/mojito.webp',
    liveUrl: 'https://websites-cocktails.vercel.app/',
    techIcons: [
      { icon: SiTypescript, color: '#3178c6' },
      { icon: SiNextdotjs, color: '#ffffff' },
      { icon: SiTailwindcss, color: '#06b6d4' },
    ],
  },
  {
    id: 3,
    cat: 'Typescript · Next.js · GSAP · Tailwind',
    title: "Awward - Site vitrine pour presenter mes competences en integration et en design moderne d'interface utilisateur animée",
    bg: 'from-green-900 to-green-700',
    col: 'text-white',
    bgImage: '/awward.webp',
    liveUrl: 'https://awward-hazel.vercel.app/',
    techIcons: [
      { icon: SiTypescript, color: '#3178c6' },
      { icon: SiNextdotjs, color: '#ffffff' },
      { icon: SiTailwindcss, color: '#06b6d4' },
    ],
  },
  {
    id: 4,
    cat: 'PHP · Laravel · Node.js · MySQL',
    title: "Système de ticket événementielle avec un scanner de vérification QRCode",
    bg: 'from-slate-900 to-slate-700',
    bgImage: '/ticket.webp',
    col: 'text-white',
    techIcons: [
      { icon: SiPhp, color: '#777bb4' },
      { icon: SiLaravel, color: '#ea4b71' },
      { icon: SiNodedotjs, color: '#68a063' },
      { icon: SiMysql, color: '#f59e0b' },
    ],
  },
  {
    id: 6,
    cat: 'JavaScript · React · Express · MongoDB',
    title: "Application de reservation des trains en ligne avec des suivis en temps réel",
    bg: 'from-yellow-900 to-yellow-700',
    col: 'text-white',
    techIcons: [
      { icon: SiJavascript, color: '#f7df1e' },
      { icon: SiReact, color: '#61dafb' },
      { icon: SiExpress, color: '#ffffff' },
      { icon: SiMongodb, color: '#4ade80' },
    ],
  },
  {
    id: 7,
    cat: 'JavaScript · React · MySQL · Java · Spring Boot',
    title: 'Application de messagerie en temps réel',
    bg: 'from-[#0f2e1a] to-[#1a5f3d]',
    col: 'text-white',
    techIcons: [
      { icon: SiJavascript, color: '#f7df1e' },
      { icon: SiReact, color: '#61dafb' },
      { icon: SiMysql, color: '#f59e0b' },
      { icon: SiSpringboot, color: '#6DB33F' },
    ],
  },
  {
    id: 8,
    cat: 'JavaScript · React · Node.js · Express · MongoDB',
    title: 'Application E-commerce',
    bg: 'from-[#1a0f2e] to-violet-800',
    col: 'text-white',
    techIcons: [
      { icon: SiJavascript, color: '#f7df1e' },
      { icon: SiReact, color: '#61dafb' },
      { icon: SiExpress, color: '#ffffff' },
      { icon: SiMongodb, color: '#4ade80' },
    ],
  },
  
]


export const socials: Social[] = [
  { icon: SiLinkedin, href: 'https://www.linkedin.com/in/ando-henri', label: 'LinkedIn' },
  { icon: SiWhatsapp, href: 'tel:+261349756246', label: 'WhatsApp' },
  { icon: SiFacebook, href: 'https://web.facebook.com/ando.henri.03/', label: 'Facebook' },
]

export const fields: InputFormField[] = [
  { id: 'firstname', label: 'Prénom', placeholder: 'Votre prénom', colSpan: false },
  { id: 'lastname', label: 'Nom', placeholder: 'Votre nom', colSpan: false },
  { id: 'email', label: 'Email', placeholder: 'jean@example.com', type: 'email' },
  { id: 'subject', label: 'Sujet', placeholder: 'Nouveau projet' },
]