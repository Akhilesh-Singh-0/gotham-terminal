import type { NavItem, Project, Skill } from '@/types'

export const IDENTITY = {
  name: 'Akhilesh Singh',

  role: 'Backend Engineer',

  focus: 'Exploring Applied AI',

  handle: '@singh_akhil2272',

  location: 'Gwalior, India',

  email: 'singhakhilesh19468@gmail.com',

  github: 'https://github.com/Akhilesh-Singh-0',
  linkedin: 'https://linkedin.com/in/akhilesh-singh-dev',
  twitter: 'https://x.com/singh_akhil2272',

  headline: 'Building reliable backend systems and AI-powered products.',

  subheadline:
  'I build backend systems with Node.js, TypeScript, PostgreSQL, Redis, BullMQ, and WebSockets. Currently expanding into Applied AI while continuing to deepen my expertise in distributed systems, scalability, and infrastructure.',

  tagline: 'Backend engineering. Real-time systems. Applied AI.',

  shortIntro:
    'My work focuses on distributed systems, async processing, real-time architectures, and developer infrastructure. I enjoy solving engineering problems around concurrency, performance, reliability, and system design while exploring Applied AI.',

  availability: 'Open to opportunities',

  ctaPrimary: 'View Projects',
  ctaSecondary: 'Contact Me',

  stats: [
    { value: '134/s', label: 'Peak req/s — Guardrail' },
    { value: '150/s', label: 'Peak req/s — FlowSpace' },
    { value: '359ms', label: 'p95 latency — FlowSpace' },
    { value: '0', label: 'Errors under load' },
  ],
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about', index: '01' },
  { label: 'Skills', href: '#skills', index: '02' },
  { label: 'Projects', href: '#projects', index: '03' },
  { label: 'Contact', href: '#contact', index: '04' },
]

export const PROJECTS: Project[] = [
  {
    id: 'guardrail',
    title: 'Guardrail',
    codename: 'OPERATION NIGHTWATCH',
    description: 'AI API cost enforcement reverse proxy. Atomic billing via Redis Lua scripts eliminates race conditions under concurrent load. Load tested at 134 req/s with zero errors.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ', 'WebSockets', 'Next.js 15', 'Turborepo'],
    year: '2026',
    status: 'active',
    image: '/project-guardrail.png',
    url: 'https://guardrail.live',
    github: 'https://github.com/Akhilesh-Singh-0',
    metrics: {
      throughput: '134 req/s',
      latency: '<50ms',
      errorRate: '0%',
      architecture: 'Client → Proxy → Redis → Provider → BullMQ → PostgreSQL',
    },
  },
  {
    id: 'flowspace',
    title: 'FlowSpace',
    codename: 'OPERATION BLACKGATE',
    description: 'Real-time multi-tenant project management platform. 4-layer REST API, multi-tenant RBAC, Redis Pub/Sub decoupled WebSocket architecture. Load tested at 150 req/s, p95 latency 359ms.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ', 'WebSockets', 'Next.js 15', 'Prisma'],
    year: '2026',
    status: 'active',
    image: '/project-flowspace.png',
    url: 'https://flowspace.live',
    github: 'https://github.com/Akhilesh-Singh-0',
    metrics: {
      throughput: '150 req/s',
      latency: '359ms p95',
      errorRate: '0%',
      architecture: 'REST API → Redis Pub/Sub → WebSocket → BullMQ Workers',
    },
  },
  {
    id: 'luminary',
    title: 'Luminary',
    codename: 'OPERATION ARCHIVE',
    description: 'Personal knowledge management platform. Save and organize YouTube videos, tweets, articles and links. Share entire collections publicly. Full-stack TypeScript with JWT authentication.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Next.js', 'JWT'],
    year: '2026',
    image: '/project-luminary.png',
    status: 'active',
    github: 'https://github.com/Akhilesh-Singh-0',
    metrics: {
      architecture: 'Next.js → PostgreSQL → Prisma ORM',
    },
  },
]

export const SKILLS: Skill[] = [
  { name: 'TypeScript', category: 'frontend', level: 92 },
  { name: 'Next.js', category: 'frontend', level: 88 },
  { name: 'React', category: 'frontend', level: 85 },
  { name: 'Node.js', category: 'backend', level: 93 },
  { name: 'PostgreSQL', category: 'backend', level: 88 },
  { name: 'Redis', category: 'backend', level: 85 },
  { name: 'WebSockets', category: 'backend', level: 82 },
  { name: 'BullMQ', category: 'backend', level: 80 },
  { name: 'Prisma', category: 'backend', level: 85 },
  { name: 'Docker', category: 'infrastructure', level: 78 },
  { name: 'Turborepo', category: 'infrastructure', level: 75 },
  { name: 'Vercel', category: 'infrastructure', level: 80 },
]