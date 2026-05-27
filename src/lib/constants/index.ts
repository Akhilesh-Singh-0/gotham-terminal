import type { NavItem, Project, Skill } from '@/types'

export const IDENTITY = {
  name:         'Akhilesh Singh',
  handle:       '@akhilesh',
  role:         'Full-Stack Engineer',
  tagline:      'Building systems that survive scale.',
  location:     'India',
  email:        'hello@akhileshsingh.dev',
  availability: 'Open to opportunities',
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About',    href: '#about',    index: '01' },
  { label: 'Skills',   href: '#skills',   index: '02' },
  { label: 'Projects', href: '#projects', index: '03' },
  { label: 'Contact',  href: '#contact',  index: '04' },
]

export const PROJECTS: Project[] = [
  {
    id:          'project-01',
    title:       'Guardian API',
    codename:    'OPERATION NIGHTWATCH',
    description: 'High-throughput REST API handling 2M+ daily requests with sub-50ms p99 latency.',
    tags:        ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    year:        '2024',
    status:      'active',
  },
  {
    id:          'project-02',
    title:       'Cipher Dashboard',
    codename:    'OPERATION BLACKGATE',
    description: 'Real-time analytics platform with live data streaming and role-based access control.',
    tags:        ['Next.js', 'WebSockets', 'Prisma', 'TypeScript'],
    year:        '2024',
    status:      'active',
  },
  {
    id:          'project-03',
    title:       'Arkham Infra',
    codename:    'OPERATION FOUNDRY',
    description: 'Zero-downtime Kubernetes deployment pipeline with automated rollback and alerting.',
    tags:        ['Kubernetes', 'Terraform', 'AWS', 'Go'],
    year:        '2023',
    status:      'archived',
  },
]

export const SKILLS: Skill[] = [
  { name: 'TypeScript', category: 'frontend',        level: 92 },
  { name: 'React',      category: 'frontend',        level: 90 },
  { name: 'Next.js',    category: 'frontend',        level: 88 },
  { name: 'Node.js',    category: 'backend',         level: 90 },
  { name: 'PostgreSQL', category: 'backend',         level: 82 },
  { name: 'Redis',      category: 'backend',         level: 78 },
  { name: 'Docker',     category: 'infrastructure',  level: 80 },
  { name: 'AWS',        category: 'infrastructure',  level: 75 },
  { name: 'Git',        category: 'tools',           level: 92 },
]