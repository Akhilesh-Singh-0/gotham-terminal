export const SKILL_PROJECTS: Record<string, string[]> = {
    'Node.js':    ['Guardrail', 'FlowSpace', 'Luminary'],
    'TypeScript': ['Guardrail', 'FlowSpace', 'Luminary'],
    'PostgreSQL': ['Guardrail', 'FlowSpace', 'Luminary'],
    'Redis':      ['Guardrail', 'FlowSpace'],
    'WebSockets': ['Guardrail', 'FlowSpace'],
    'BullMQ':     ['Guardrail', 'FlowSpace'],
    'Prisma':     ['FlowSpace', 'Luminary'],
    'Next.js':    ['Guardrail', 'FlowSpace', 'Luminary'],
    'React':      ['Guardrail', 'FlowSpace', 'Luminary'],
    'Docker':     ['Guardrail', 'FlowSpace'],
    'Turborepo':  ['Guardrail', 'FlowSpace'],
    'Vercel':     ['Luminary'],
}

export const SKILL_DETAIL: Record<string, { role: string; notes: string[] }> = {
    'Node.js': {
      role: 'BACKEND RUNTIME',
      notes: [
        'REST APIs',
        'Async processing',
        'High-concurrency services',
      ],
    },
  
    'TypeScript': {
      role: 'APPLICATION LAYER',
      notes: [
        'Type-safe architecture',
        'Scalable codebases',
        'Developer experience',
      ],
    },
  
    'PostgreSQL': {
      role: 'DATA ENGINEERING',
      notes: [
        'Relational modeling',
        'Query optimization',
        'Transaction management',
      ],
    },
  
    'Redis': {
      role: 'PERFORMANCE LAYER',
      notes: [
        'Caching',
        'Pub/Sub systems',
        'Atomic operations',
      ],
    },
  
    'WebSockets': {
      role: 'REAL-TIME SYSTEMS',
      notes: [
        'Live collaboration',
        'Persistent connections',
        'Event-driven communication',
      ],
    },
  
    'BullMQ': {
      role: 'BACKGROUND PROCESSING',
      notes: [
        'Job queues',
        'Worker orchestration',
        'Reliable task execution',
      ],
    },
  
    'Prisma': {
      role: 'DATABASE TOOLING',
      notes: [
        'Schema design',
        'Type-safe queries',
        'Migration workflows',
      ],
    },
  
    'Next.js': {
      role: 'FULL-STACK DEVELOPMENT',
      notes: [
        'SSR & App Router',
        'Production deployments',
        'Modern web applications',
      ],
    },
  
    'React': {
      role: 'USER INTERFACES',
      notes: [
        'Component architecture',
        'Interactive experiences',
        'State management',
      ],
    },
  
    'Docker': {
      role: 'INFRASTRUCTURE',
      notes: [
        'Containerization',
        'Environment consistency',
        'Deployment workflows',
      ],
    },
  
    'Turborepo': {
      role: 'SCALING CODEBASES',
      notes: [
        'Monorepo architecture',
        'Shared packages',
        'Build optimization',
      ],
    },
  
    'Vercel': {
      role: 'DEPLOYMENT PLATFORM',
      notes: [
        'CI/CD pipelines',
        'Global deployments',
        'Production hosting',
      ],
    },
  
    'Python': {
      role: 'APPLIED AI FOUNDATION',
      notes: [
        'AI workflows',
        'Automation',
        'Data processing',
      ],
    },
  
    'OpenAI SDK': {
      role: 'LLM APPLICATIONS',
      notes: [
        'Tool calling',
        'Structured outputs',
        'Streaming responses',
      ],
    },
  
    'RAG': {
      role: 'KNOWLEDGE SYSTEMS',
      notes: [
        'Retrieval pipelines',
        'Context grounding',
        'Document search',
      ],
    },
  
    'AI Agents': {
      role: 'INTELLIGENT WORKFLOWS',
      notes: [
        'Agent orchestration',
        'Tool integration',
        'Multi-step execution',
      ],
    },
  
    'Vector Databases': {
      role: 'SEMANTIC RETRIEVAL',
      notes: [
        'Embeddings',
        'Similarity search',
        'Knowledge retrieval',
      ],
    },
}