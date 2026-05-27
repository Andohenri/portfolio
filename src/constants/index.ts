import { BiLogoSpringBoot } from 'react-icons/bi'
import { SiClerk, SiDocker, SiExpo, SiExpress, SiFacebook, SiFlutter, SiJavascript, SiLaravel, SiLinkedin, SiMongodb, SiMysql, SiN8N, SiNestjs, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiReact, SiSpringboot, SiTailwindcss, SiTypescript, SiWhatsapp } from 'react-icons/si'

export type Locale = 'fr' | 'en'

const sharedStats = {
  fr: [
    { num: 10, suffix: '+', label: 'Projets réalisés' },
    { num: 7, suffix: '+', label: 'Technologies maîtrisées' },
    { num: 100, suffix: '%', label: 'Engagement projet' },
    { num: 24, suffix: 'h', label: 'Temps de réponse' },
  ],
  en: [
    { num: 10, suffix: '+', label: 'Completed projects' },
    { num: 7, suffix: '+', label: 'Technologies mastered' },
    { num: 100, suffix: '%', label: 'Project commitment' },
    { num: 24, suffix: 'h', label: 'Response time' },
  ],
} as const

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
]

export const techBadges = [
  { icon: SiReact, label: 'React', color: '#61dafb' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#68a063' },
  { icon: SiDocker, label: 'Docker', color: '#2496ed' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
  { icon: SiN8N, label: 'n8n', color: '#ea4b71' },
]
export const portfolioContent = {
  fr: {
    nav: {
      links: ['À propos', 'Expertise', 'Projets', 'Contact'],
      cv: 'Mon CV',
      languageLabel: 'Passer en anglais',
      languageShort: 'EN',
    },
    hero: {
      badges: ['Développeur web et mobile', 'Créateur de solutions'],
      availability: 'Disponible pour projets',
      title: ['DÉVELOPPEUR', 'WEB et MOBILE,', 'SUR MESURE.'],
      description:
        "Je conçois des applications web et mobile modernes, rapides et adaptées à vos besoins. De l'idée à la mise en ligne, je vous accompagne pour créer des solutions fiables et évolutives.",
      cta: 'Démarrer un projet',
      scroll: 'Explorer',
    },
    about: {
      label: 'À propos de moi',
      title: ['CRÉER,', 'OPTIMISER,', 'FAIRE ÉVOLUER.'],
      description:
        "Je suis RAZAFINATOANDRO Ando Henri, développeur spécialisé dans la conception d'applications web et mobiles sur mesure. J'aide les entreprises et entrepreneurs à transformer leurs idées en solutions digitales performantes, fiables et évolutives.",
      badge: 'Disponible maintenant',
    },
    stats: sharedStats.fr,
    skills: {
      label: 'Expertise',
      title: ['CE QUE JE', 'MAÎTRISE'],
      description:
        'Conception, développement et optimisation de solutions digitales modernes, pensées pour la performance et l’évolutivité.',
      items: [
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
      ],
      tags: [
        'HTML / CSS', 'Animation GSAP', 'n8n', 'API REST', 'Git', 'Tailwind CSS',
        'Prisma', 'JWT', 'Linux', 'CI/CD', 'Agile / Scrum', 'WebSockets', 'Tests',
        'Microservices', 'Caching (Redis)', 'Queues (RabbitMQ)'
      ],
    },
    work: {
      label: 'Projets',
      title: ['MES', 'PROJETS'],
      description:
        'Une sélection de projets conçus pour allier performance, expérience utilisateur et impact visuel.',
      github: 'GitHub',
      servicesLabel: 'Services',
      servicesTitle: ['CE QUE JE', 'PROPOSE'],
      services: [
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
      ] satisfies Service[],
      projects: [
        {
          id: 1,
          cat: 'Next.js · TypeScript · MongoDB · Vapi · Clerk · shadcn/ui · Tailwind · CodeRabbit',
          title: "Bookified. Transformez vos livres en conversations interactives avec l'IA. Téléversez des PDF et discutez avec vos livres en utilisant la voix",
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
          title: 'Agri-Connect - Application de mise en relation entre paysans et collecteurs des matières premières',
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
          title: 'Système de ticket événementielle avec un scanner de vérification QRCode',
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
          title: 'Application de reservation des trains en ligne avec des suivis en temps réel',
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
      ] satisfies Project[],
    },
    contact: {
      label: 'Contact',
      title: ['TRAVAILLONS', 'ENSEMBLE.'],
      messageLabel: 'Message',
      messagePlaceholder: 'Décrivez votre projet…',
      submit: 'Envoyer le message →',
      alert: 'Message envoyé ! (fonctionnalité à implémenter)',
      emailLabel: 'Écrire un email',
    },
    footer: {
      rights: 'Tous droits réservés.',
      design: 'Design & Développement · Conçu avec ❤',
    },
    fields: [
      { id: 'firstname', label: 'Prénom', placeholder: 'Votre prénom', colSpan: false },
      { id: 'lastname', label: 'Nom', placeholder: 'Votre nom', colSpan: false },
      { id: 'email', label: 'Email', placeholder: 'jean@example.com', type: 'email' },
      { id: 'subject', label: 'Sujet', placeholder: 'Nouveau projet' },
    ] satisfies InputFormField[],
  },
  en: {
    nav: {
      links: ['About', 'Expertise', 'Projects', 'Contact'],
      cv: 'My CV',
      languageLabel: 'Switch to French',
      languageShort: 'FR',
    },
    hero: {
      badges: ['Web and mobile developer', 'Solution builder'],
      availability: 'Available for projects',
      title: ['DEVELOPER', 'WEB and MOBILE,', 'TAILORED.'],
      description:
        'I design modern, fast web and mobile applications adapted to your needs. From idea to launch, I help you build reliable and scalable solutions.',
      cta: 'Start a project',
      scroll: 'Explore',
    },
    about: {
      label: 'About me',
      title: ['CREATE,', 'OPTIMIZE,', 'EVOLVE.'],
      description:
        'I am RAZAFINATOANDRO Ando Henri, a developer specialized in crafting custom web and mobile applications. I help companies and founders turn ideas into high-performing, reliable and scalable digital products.',
      badge: 'Available now',
    },
    stats: sharedStats.en,
    skills: {
      label: 'Expertise',
      title: ['WHAT I', 'MASTER'],
      description:
        'Design, development and optimization of modern digital solutions built for performance and scalability.',
      items: [
        { icon: SiReact, name: 'React / Next.js', level: 'Advanced', pct: 82, color: '#61dafb' },
        { icon: SiNodedotjs, name: 'Node.js / Express', level: 'Advanced', pct: 80, color: '#68a063' },
        { icon: SiDocker, name: 'Docker / K8s', level: 'Intermediate', pct: 65, color: '#2496ed' },
        { icon: SiMysql, name: 'MySQL', level: 'Advanced', pct: 76, color: '#f59e0b' },
        { icon: SiPostgresql, name: 'PostgreSQL', level: 'Advanced', pct: 75, color: '#336791' },
        { icon: BiLogoSpringBoot, name: 'Java / Spring Boot', level: 'Intermediate', pct: 65, color: '#6DB33F' },
        { icon: SiLaravel, name: 'PHP / Laravel', level: 'Advanced', pct: 70, color: '#FF2D20' },
        { icon: SiFlutter, name: 'Flutter', level: 'Intermediate', pct: 55, color: '#00B4D8' },
        { icon: SiExpo, name: 'Expo React Native', level: 'Intermediate', pct: 65, color: '#ffffff' },
        { icon: SiMongodb, name: 'MongoDB', level: 'Intermediate', pct: 68, color: '#4ade80' },
      ],
      tags: [
        'HTML / CSS', 'GSAP Animation', 'n8n', 'REST API', 'Git', 'Tailwind CSS',
        'Prisma', 'JWT', 'Linux', 'CI/CD', 'Agile / Scrum', 'WebSockets', 'Testing',
        'Microservices', 'Caching (Redis)', 'Queues (RabbitMQ)'
      ],
    },
    work: {
      label: 'Projects',
      title: ['MY', 'PROJECTS'],
      description:
        'A curated selection of projects built to combine performance, user experience and visual impact.',
      github: 'GitHub',
      servicesLabel: 'Services',
      servicesTitle: ['WHAT I', 'OFFER'],
      services: [
        {
          num: '01',
          name: 'WEB APPLICATION DEVELOPMENT',
          desc: 'Design and development of complete web applications, from the user interface to the server-side system. I build performant, secure and scalable solutions tailored to your project requirements.',
        },
        {
          num: '02',
          name: 'APIs & DATA MANAGEMENT',
          desc: 'Creation of robust backend systems that enable communication between applications. Reliable database design and organization to ensure performance, security and data consistency.',
        },
        {
          num: '03',
          name: 'PROCESS AUTOMATION',
          desc: 'Automation solutions that reduce repetitive tasks, improve productivity and connect different tools together. Ideal for streamlining workflows and saving time.',
        },
        {
          num: '04',
          name: 'DEPLOYMENT & RELEASE',
          desc: 'Preparation and release of your applications in reliable and secure environments. Infrastructure setup to ensure stability, performance and ease of maintenance.',
        },
      ] satisfies Service[],
      projects: [
        {
          id: 1,
          cat: 'Next.js · TypeScript · MongoDB · Vapi · Clerk · shadcn/ui · Tailwind · CodeRabbit',
          title: 'Bookified. Turn your books into interactive conversations with AI. Upload PDFs and talk to your books using your voice',
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
          title: 'Agri-Connect - A platform connecting farmers and raw material collectors',
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
          title: 'Mojito - Showcase site presenting my integration and animated UI design skills',
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
          title: 'Awward - Showcase site presenting my integration and modern animated UI design skills',
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
          title: 'Event ticketing system with a QR code verification scanner',
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
          title: 'Online train booking application with real-time tracking',
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
          title: 'Real-time messaging application',
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
          title: 'E-commerce application',
          bg: 'from-[#1a0f2e] to-violet-800',
          col: 'text-white',
          techIcons: [
            { icon: SiJavascript, color: '#f7df1e' },
            { icon: SiReact, color: '#61dafb' },
            { icon: SiExpress, color: '#ffffff' },
            { icon: SiMongodb, color: '#4ade80' },
          ],
        },
      ] satisfies Project[],
    },
    contact: {
      label: 'Contact',
      title: ['LET US', 'WORK TOGETHER.'],
      messageLabel: 'Message',
      messagePlaceholder: 'Describe your project…',
      submit: 'Send message →',
      alert: 'Message sent! (feature to implement)',
      emailLabel: 'Write an email',
    },
    footer: {
      rights: 'All rights reserved.',
      design: 'Design & Development · Made with ❤',
    },
    fields: [
      { id: 'firstname', label: 'First name', placeholder: 'Your first name', colSpan: false },
      { id: 'lastname', label: 'Last name', placeholder: 'Your last name', colSpan: false },
      { id: 'email', label: 'Email', placeholder: 'john@example.com', type: 'email' },
      { id: 'subject', label: 'Subject', placeholder: 'New project' },
    ] satisfies InputFormField[],
  },
} as const

export const getPortfolioContent = (locale: Locale) => portfolioContent[locale]

export const socials: Social[] = [
  { icon: SiLinkedin, href: 'https://www.linkedin.com/in/ando-henri', label: 'LinkedIn' },
  { icon: SiWhatsapp, href: 'tel:+261349756246', label: 'WhatsApp' },
  { icon: SiFacebook, href: 'https://web.facebook.com/ando.henri.03/', label: 'Facebook' },
]