export interface ProjectMetrics {
    throughput?:   string
    latency?:      string
    errorRate?:    string
    architecture?: string
}
  
export interface Project {
    id:          string
    title:       string
    codename:    string
    description: string
    tags:        string[]
    year:        string
    status:      'active' | 'archived' | 'classified'
    url?:        string
    github?:     string
    image?:      string
    metrics?:    ProjectMetrics
}
  
export interface Skill {
    name:     string
    category: 'frontend' | 'backend' | 'infrastructure' | 'tools'
    level:    number
}
  
export interface NavItem {
    label: string
    href:  string
    index: string
}