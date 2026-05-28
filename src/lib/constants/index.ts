import type { NavItem, Project, Skill } from '@/types'

export const IDENTITY = {
  name: 'Akhilesh Singh',
  handle: '@singh_akhil2272',
  role: 'Backend & Systems Engineer',
  location: 'Rewa, India',
  email: 'singhakhilesh19468@gmail.com',
  github: 'https://github.com/Akhilesh-Singh-0',
  linkedin: 'https://linkedin.com/in/akhilesh-singh-dev',
  twitter: 'https://x.com/singh_akhil2272',
  headline: 'Engineering scalable real-time systems and backend infrastructure.',
  subheadline: 'I build production-focused backend systems with Node.js, TypeScript, PostgreSQL, Redis, BullMQ, and WebSockets — focused on scalability, concurrency, reliability, and clean architecture.',
  tagline: 'Built for scale, latency, and reliability.',
  shortIntro: 'My work focuses on distributed systems, async processing, real-time architectures, and API infrastructure. I enjoy solving engineering problems around concurrency, performance, fault tolerance, and system design.',
  availability: 'Open to backend engineering internships, remote roles, and systems-focused opportunities.',
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
    year: '2025',
    status: 'active',
    url: 'https://guardrail.live',
    github: 'https://github.com/Akhilesh-Singh-0',
  },
  {
    id: 'flowspace',
    title: 'FlowSpace',
    codename: 'OPERATION BLACKGATE',
    description: 'Real-time multi-tenant project management platform. 4-layer REST API, multi-tenant RBAC, Redis Pub/Sub decoupled WebSocket architecture. Load tested at 150 req/s, p95 latency 359ms.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ', 'WebSockets', 'Next.js 15', 'Prisma'],
    year: '2025',
    status: 'active',
    url: 'https://flowspace.live',
    github: 'https://github.com/Akhilesh-Singh-0',
  },
  {
    id: 'luminary',
    title: 'Luminary',
    codename: 'OPERATION ARCHIVE',
    description: 'Personal knowledge management platform. Save and organize YouTube videos, tweets, articles and links. Share entire collections publicly. Full-stack TypeScript with JWT authentication.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Next.js', 'JWT'],
    year: '2025',
    status: 'active',
    github: 'https://github.com/Akhilesh-Singh-0',
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