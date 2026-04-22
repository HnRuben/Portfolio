export interface Competence {
  id: string;
  title: string;
  type: 'tech' | 'human';
  level: 'Initié' | 'Autonome' | 'Confirmé' | 'Expert';
  icon: string;
  devicon?: string;
  svg?: string;
  color: string;
  colorLight: string;
  shortDescription: string;
  definition: string;
  context: string;
  anecdotes: Anecdote[];
  autocritique: string;
  evolution: string;
  relatedRealisations: string[];
}

export interface Anecdote {
  title: string;
  content: string;
  result: string;
  realisationId?: string;
}

export interface Realisation {
  id: string;
  title: string;
  shortTitle: string;
  emoji: string;
  type: 'entreprise' | 'esiea' | 'evenement';
  period: string;
  coverGradient: string;
  shortDescription: string;
  context: string;
  objective: string;
  actions: string[];
  team: string;
  stakes: string;
  results: string;
  lendemains: string;
  regardCritique: string;
  techStack: string[];
  competences: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: 'alternance' | 'stage' | 'formation' | 'projet';
  description: string;
  location: string;
  tags: string[];
  details?: string;
  relatedRealisations?: string[];
  relatedCompetences?: string[];
}
