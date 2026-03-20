import { Injectable } from '@angular/core';
import { Competence, Realisation, Experience } from '../models';

@Injectable({ providedIn: 'root' })
export class DataService {

  readonly competences: Competence[] = [
    // ── TECH ─────────────────────────────────────────────────────────────────
    {
      id: 'java-spring',
      title: 'Java Spring',
      type: 'tech',
      level: 'Confirmé',
      icon: '☕',
      color: '#0D9488',
      colorLight: '#F0FDFA',
      shortDescription: 'Développement d\'APIs et d\'applications back-end robustes avec le framework Spring Boot.',
      definition: '[ À RÉDIGER — Je définis la compétence Java Spring en la situant dans un contexte professionnel et en la rapportant à une actualité du secteur. ]',
      context: '[ À RÉDIGER — Je décris le contexte dans lequel j\'ai développé cette compétence (formation, entreprise, projets personnels). ]',
      anecdotes: [
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 1 ]',
          content: '[ À RÉDIGER — Je décris une situation concrète où j\'ai mis en œuvre Java Spring, avec les détails techniques pertinents. ]',
          result: '[ À RÉDIGER — Le résultat mesurable obtenu grâce à cette mise en œuvre. ]',
          realisationId: 'm-a-web'
        },
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 2 ]',
          content: '[ À RÉDIGER — Je décris une deuxième situation concrète liée au jeu 2D Runner. ]',
          result: '[ À RÉDIGER — Le résultat et ma valeur ajoutée dans cette réalisation. ]',
          realisationId: 'jeu-2d-runner'
        }
      ],
      relatedRealisations: ['m-a-web', 'jeu-2d-runner']
    },
    {
      id: 'git',
      title: 'Git',
      type: 'tech',
      level: 'Confirmé',
      icon: '🔀',
      color: '#F97316',
      colorLight: '#FFF7ED',
      shortDescription: 'Gestion de versions, travail collaboratif et workflows de développement avec Git et GitHub/GitLab.',
      definition: '[ À RÉDIGER — Je définis Git comme outil de gestion de versions, en le situant dans les pratiques DevOps actuelles. ]',
      context: '[ À RÉDIGER — Comment j\'utilise Git au quotidien en entreprise et sur mes projets personnels. ]',
      anecdotes: [
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 1 ]',
          content: '[ À RÉDIGER — Une situation où la maîtrise de Git (branches, merge, rebase, conflits) a été déterminante. ]',
          result: '[ À RÉDIGER — Le résultat obtenu. ]',
          realisationId: 'm-a-web'
        },
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 2 ]',
          content: '[ À RÉDIGER — Un usage de Git sur un projet personnel ou collaboratif. ]',
          result: '[ À RÉDIGER — Ma valeur ajoutée. ]',
          realisationId: 'simulateur-darwinien'
        }
      ],
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner']
    },
    {
      id: 'cicd',
      title: 'CI/CD',
      type: 'tech',
      level: 'Autonome',
      icon: '⚙️',
      color: '#7C3AED',
      colorLight: '#F5F3FF',
      shortDescription: 'Mise en place de pipelines d\'intégration et de déploiement continu pour automatiser les livraisons.',
      definition: '[ À RÉDIGER — Je définis la CI/CD et son importance dans les pratiques DevOps modernes. ]',
      context: '[ À RÉDIGER — Comment j\'ai découvert et appliqué la CI/CD dans mon alternance et mes projets. ]',
      anecdotes: [
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 1 ]',
          content: '[ À RÉDIGER — Mise en place d\'un pipeline CI/CD sur un projet d\'entreprise. ]',
          result: '[ À RÉDIGER — Gain de temps et de fiabilité obtenu. ]',
          realisationId: 'm-a-web'
        },
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 2 ]',
          content: '[ À RÉDIGER — Application de la CI/CD sur le bot Discord. ]',
          result: '[ À RÉDIGER — Résultat et apprentissages. ]',
          realisationId: 'bot-discord'
        }
      ],
      relatedRealisations: ['m-a-web', 'bot-discord']
    },
    {
      id: 'api-rest',
      title: 'API Rest',
      type: 'tech',
      level: 'Autonome',
      icon: '🔌',
      color: '#2563EB',
      colorLight: '#EFF6FF',
      shortDescription: 'Conception et consommation d\'APIs RESTful, gestion des échanges entre front-end et back-end.',
      definition: '[ À RÉDIGER — Je définis les API REST, leur architecture et leur rôle dans les applications modernes. ]',
      context: '[ À RÉDIGER — Mon utilisation des API REST en entreprise et dans mes projets personnels. ]',
      anecdotes: [
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 1 ]',
          content: '[ À RÉDIGER — Conception ou consommation d\'une API REST dans mon alternance. ]',
          result: '[ À RÉDIGER — Le résultat technique et business. ]',
          realisationId: 'm-a-web'
        },
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 2 ]',
          content: '[ À RÉDIGER — Utilisation des API dans le bot Discord. ]',
          result: '[ À RÉDIGER — Ma valeur ajoutée. ]',
          realisationId: 'bot-discord'
        }
      ],
      relatedRealisations: ['m-a-web', 'bot-discord']
    },
    {
      id: 'algorithmique',
      title: 'Algorithmique',
      type: 'tech',
      level: 'Confirmé',
      icon: '🧮',
      color: '#DC2626',
      colorLight: '#FEF2F2',
      shortDescription: 'Conception et optimisation d\'algorithmes efficaces pour résoudre des problèmes complexes.',
      definition: '[ À RÉDIGER — Je définis l\'algorithmique et son importance dans le développement logiciel professionnel. ]',
      context: '[ À RÉDIGER — Comment j\'ai développé mes compétences algorithmiques à travers les projets et la formation. ]',
      anecdotes: [
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 1 ]',
          content: '[ À RÉDIGER — Un problème algorithmique complexe résolu dans mon alternance. ]',
          result: '[ À RÉDIGER — Le gain de performance ou la solution apportée. ]',
          realisationId: 'm-a-web'
        },
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 2 ]',
          content: '[ À RÉDIGER — L\'algorithme d\'évolution darwinienne et ses enjeux. ]',
          result: '[ À RÉDIGER — Les résultats de simulation obtenus. ]',
          realisationId: 'simulateur-darwinien'
        }
      ],
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner']
    },
    {
      id: 'angular',
      title: 'Angular',
      type: 'tech',
      level: 'Confirmé',
      icon: '🅰️',
      color: '#E11D48',
      colorLight: '#FFF1F2',
      shortDescription: 'Développement d\'applications web Single Page Application avec Angular et TypeScript.',
      definition: '[ À RÉDIGER — Je définis Angular comme framework front-end et l\'importance de TypeScript dans le développement moderne. ]',
      context: '[ À RÉDIGER — Mon parcours avec Angular, de la formation à la mise en pratique en entreprise et sur ce portfolio. ]',
      anecdotes: [
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 1 ]',
          content: '[ À RÉDIGER — Une feature développée en Angular dans mon alternance. ]',
          result: '[ À RÉDIGER — L\'impact utilisateur et technique de cette réalisation. ]',
          realisationId: 'm-a-web'
        },
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 2 ]',
          content: '[ À RÉDIGER — L\'utilisation d\'Angular dans le gestionnaire de bot Discord. ]',
          result: '[ À RÉDIGER — Ce que ça a apporté au projet. ]',
          realisationId: 'bot-discord'
        }
      ],
      relatedRealisations: ['m-a-web', 'bot-discord']
    },

    // ── HUMAINES ─────────────────────────────────────────────────────────────
    {
      id: 'agilite',
      title: 'Agilité',
      type: 'human',
      level: 'Confirmé',
      icon: '🔄',
      color: '#059669',
      colorLight: '#ECFDF5',
      shortDescription: 'Capacité à travailler selon les méthodes agiles (Scrum, Kanban) et à s\'adapter rapidement aux changements.',
      definition: '[ À RÉDIGER — Je définis l\'agilité comme compétence professionnelle : capacité à itérer, à collaborer et à s\'adapter dans un contexte de développement logiciel. ]',
      context: '[ À RÉDIGER — Comment j\'applique les méthodes agiles au quotidien en entreprise et dans mes projets. ]',
      anecdotes: [
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 1 ]',
          content: '[ À RÉDIGER — Une situation concrète en sprint Scrum en entreprise. ]',
          result: '[ À RÉDIGER — Le livrable et l\'impact sur l\'équipe. ]',
          realisationId: 'm-a-web'
        },
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 2 ]',
          content: '[ À RÉDIGER — Adaptation à un changement de specs en cours de projet. ]',
          result: '[ À RÉDIGER — Comment j\'ai géré le pivot et le résultat obtenu. ]',
          realisationId: 'simulateur-darwinien'
        }
      ],
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner']
    },
    {
      id: 'travail-equipe',
      title: 'Travail d\'équipe',
      type: 'human',
      level: 'Autonome',
      icon: '🤝',
      color: '#0284C7',
      colorLight: '#F0F9FF',
      shortDescription: 'Capacité à collaborer efficacement, à communiquer clairement et à contribuer à la dynamique d\'équipe.',
      definition: '[ À RÉDIGER — Je définis le travail d\'équipe comme compétence transversale : coordination, communication et synergie dans un contexte professionnel. ]',
      context: '[ À RÉDIGER — Mon expérience du travail en équipe en alternance, dans des projets de groupe et lors d\'événements. ]',
      anecdotes: [
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 1 ]',
          content: '[ À RÉDIGER — Une situation de collaboration en équipe sur un projet d\'entreprise. ]',
          result: '[ À RÉDIGER — Le résultat collectif et ma contribution. ]',
          realisationId: 'm-a-web'
        },
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 2 ]',
          content: '[ À RÉDIGER — Organisation d\'une équipe lors de l\'événement Dessin Vivant. ]',
          result: '[ À RÉDIGER — Le succès de l\'événement grâce au travail d\'équipe. ]',
          realisationId: 'dessin-vivant'
        }
      ],
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner', 'dessin-vivant']
    },
    {
      id: 'adaptabilite',
      title: 'Adaptabilité',
      type: 'human',
      level: 'Autonome',
      icon: '🌊',
      color: '#7C3AED',
      colorLight: '#F5F3FF',
      shortDescription: 'Capacité à s\'adapter rapidement à de nouveaux environnements, technologies et contraintes.',
      definition: '[ À RÉDIGER — Je définis l\'adaptabilité comme la capacité à évoluer dans un environnement changeant, à apprendre rapidement et à modifier son approche selon le contexte. ]',
      context: '[ À RÉDIGER — Les situations variées (nouvelles technologies, changements d\'équipe, nouvelles contraintes) dans lesquelles j\'ai démontré mon adaptabilité. ]',
      anecdotes: [
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 1 ]',
          content: '[ À RÉDIGER — Une situation où j\'ai dû m\'adapter rapidement à une nouvelle technologie ou une nouvelle organisation. ]',
          result: '[ À RÉDIGER — Comment cette adaptabilité a bénéficié au projet. ]',
          realisationId: 'm-a-web'
        },
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 2 ]',
          content: '[ À RÉDIGER — Adaptation à un contexte d\'événementiel inattendu lors de Dessin Vivant. ]',
          result: '[ À RÉDIGER — Le résultat de cette capacité d\'adaptation. ]',
          realisationId: 'dessin-vivant'
        }
      ],
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner', 'dessin-vivant']
    },
    {
      id: 'creativite',
      title: 'Créativité',
      type: 'human',
      level: 'Confirmé',
      icon: '💡',
      color: '#D97706',
      colorLight: '#FFFBEB',
      shortDescription: 'Capacité à concevoir des solutions innovantes, à penser hors des sentiers battus et à apporter une valeur créative aux projets.',
      definition: '[ À RÉDIGER — Je définis la créativité comme compétence professionnelle : aptitude à proposer des solutions originales, à innover et à apporter de la valeur par des approches nouvelles. ]',
      context: '[ À RÉDIGER — Comment ma créativité s\'exprime dans mes projets techniques et créatifs. ]',
      anecdotes: [
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 1 ]',
          content: '[ À RÉDIGER — La conception du simulateur d\'évolution darwinienne : la genèse de l\'idée et sa mise en œuvre. ]',
          result: '[ À RÉDIGER — Ce qu\'il y a de novateur dans ce projet et ce que ça m\'a apporté. ]',
          realisationId: 'simulateur-darwinien'
        },
        {
          title: '[ À RÉDIGER — Titre de l\'anecdote 2 ]',
          content: '[ À RÉDIGER — L\'organisation créative de l\'événement Dessin Vivant. ]',
          result: '[ À RÉDIGER — L\'impact créatif de l\'événement. ]',
          realisationId: 'dessin-vivant'
        }
      ],
      relatedRealisations: ['simulateur-darwinien', 'bot-discord', 'jeu-2d-runner', 'dessin-vivant']
    }
  ];

  readonly realisations: Realisation[] = [
    {
      id: 'm-a-web',
      title: 'Maintenance et amélioration d\'application Web en entreprise',
      shortTitle: 'App Web — Entreprise',
      emoji: '🏢',
      type: 'entreprise',
      period: '2024 – 2026',
      coverGradient: 'linear-gradient(135deg, #0D9488 0%, #0284C7 100%)',
      shortDescription: 'Développement et amélioration continue d\'une application web métier dans le cadre de mon alternance.',
      context: '[ À RÉDIGER — Dans quel contexte ce projet a été réalisé : l\'entreprise, l\'équipe, la situation existante. ]',
      objective: '[ À RÉDIGER — Quel était l\'objectif de l\'entreprise pour ce projet, et quel était mon rôle spécifique. ]',
      actions: [
        '[ À RÉDIGER — Action 1 : décrire une action concrète menée sur ce projet. ]',
        '[ À RÉDIGER — Action 2 : décrire une deuxième action. ]',
        '[ À RÉDIGER — Action 3 : décrire une troisième action. ]'
      ],
      team: '[ À RÉDIGER — Les parties prenantes du projet : équipe, rôles de chacun, mode de collaboration. ]',
      stakes: '[ À RÉDIGER — Les enjeux financiers, humains, techniques du projet. ]',
      results: '[ À RÉDIGER — Les résultats en faits précis : productivité, qualité, délais, satisfaction client... ]',
      techStack: ['Java Spring', 'Angular', 'Git', 'CI/CD', 'API Rest'],
      competences: ['java-spring', 'angular', 'git', 'cicd', 'api-rest', 'algorithmique', 'agilite', 'travail-equipe', 'adaptabilite']
    },
    {
      id: 'simulateur-darwinien',
      title: 'Simulateur d\'évolution Darwinienne',
      shortTitle: 'Simulateur Darwinien',
      emoji: '🧬',
      type: 'personnel',
      period: '2024',
      coverGradient: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
      shortDescription: 'Projet personnel de simulation de l\'évolution naturelle par algorithme génétique.',
      context: '[ À RÉDIGER — La genèse du projet : pourquoi ce sujet, dans quel contexte personnel ou académique. ]',
      objective: '[ À RÉDIGER — L\'objectif du projet : simuler l\'évolution darwinienne par algorithme, les résultats attendus. ]',
      actions: [
        '[ À RÉDIGER — Conception de l\'algorithme d\'évolution. ]',
        '[ À RÉDIGER — Implémentation et tests de la simulation. ]',
        '[ À RÉDIGER — Visualisation des résultats. ]'
      ],
      team: '[ À RÉDIGER — Projet solo ou en groupe ? Comment s\'est organisée la collaboration le cas échéant. ]',
      stakes: '[ À RÉDIGER — Les enjeux de ce projet personnel : apprentissage, challenge technique, visibilité. ]',
      results: '[ À RÉDIGER — Les résultats obtenus : comportements émergents simulés, complexité algorithmique, apprentissages. ]',
      techStack: ['Algorithmique', 'Git'],
      competences: ['algorithmique', 'git', 'agilite', 'travail-equipe', 'adaptabilite', 'creativite']
    },
    {
      id: 'bot-discord',
      title: 'Gestionnaire de bot Discord',
      shortTitle: 'Bot Discord',
      emoji: '🤖',
      type: 'personnel',
      period: '2024 – 2025',
      coverGradient: 'linear-gradient(135deg, #5865F2 0%, #7C3AED 100%)',
      shortDescription: 'Développement d\'une interface de gestion complète pour un bot Discord avec Angular.',
      context: '[ À RÉDIGER — Le contexte du projet : la communauté Discord, les besoins auxquels répondait le bot. ]',
      objective: '[ À RÉDIGER — L\'objectif du bot et de son interface de gestion : fonctionnalités visées, utilisateurs cibles. ]',
      actions: [
        '[ À RÉDIGER — Développement du bot (API Discord). ]',
        '[ À RÉDIGER — Développement de l\'interface Angular. ]',
        '[ À RÉDIGER — Mise en place de la CI/CD. ]'
      ],
      team: '[ À RÉDIGER — Les parties prenantes : qui a collaboré sur ce projet et comment. ]',
      stakes: '[ À RÉDIGER — Les enjeux : fiabilité du bot, expérience utilisateur, maintenabilité du code. ]',
      results: '[ À RÉDIGER — Les résultats : nombre d\'utilisateurs, fonctionnalités livrées, retours de la communauté. ]',
      techStack: ['Angular', 'API Rest', 'Git', 'CI/CD', 'Algorithmique'],
      competences: ['angular', 'api-rest', 'git', 'cicd', 'algorithmique', 'agilite', 'travail-equipe', 'adaptabilite', 'creativite']
    },
    {
      id: 'jeu-2d-runner',
      title: 'Jeu 2D Runner',
      shortTitle: 'Jeu 2D Runner',
      emoji: '🎮',
      type: 'personnel',
      period: '2023 – 2024',
      coverGradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
      shortDescription: 'Création d\'un jeu de type runner en 2D avec Java Spring, mêlant logique de jeu et algorithmique.',
      context: '[ À RÉDIGER — La genèse du projet : pourquoi créer un jeu, quel type de runner, quel public cible. ]',
      objective: '[ À RÉDIGER — Les objectifs du jeu : gameplay, expérience utilisateur, défi technique. ]',
      actions: [
        '[ À RÉDIGER — Conception du gameplay et des mécaniques de jeu. ]',
        '[ À RÉDIGER — Implémentation de la logique et des collisions. ]',
        '[ À RÉDIGER — Développement de l\'interface et des niveaux. ]'
      ],
      team: '[ À RÉDIGER — Projet solo ou collaboratif ? Rôles de chacun le cas échéant. ]',
      stakes: '[ À RÉDIGER — Les enjeux : challenge technique, plaisir du jeu, apprentissage de la programmation de jeux. ]',
      results: '[ À RÉDIGER — Les résultats : jouabilité, fonctionnalités livrées, retours des joueurs. ]',
      techStack: ['Java Spring', 'Algorithmique'],
      competences: ['java-spring', 'algorithmique', 'agilite', 'travail-equipe', 'adaptabilite', 'creativite']
    },
    {
      id: 'dessin-vivant',
      title: 'Évènement "Dessin Vivant"',
      shortTitle: 'Dessin Vivant',
      emoji: '🎨',
      type: 'evenement',
      period: '2023',
      coverGradient: 'linear-gradient(135deg, #F97316 0%, #FACC15 100%)',
      shortDescription: 'Organisation et animation d\'un événement créatif autour du dessin vivant.',
      context: '[ À RÉDIGER — Le contexte de l\'événement : qui l\'a initié, dans quel cadre (école, associatif, personnel), pour quel public. ]',
      objective: '[ À RÉDIGER — L\'objectif de l\'événement : rassembler des participants, créer une expérience artistique, sensibiliser à quoi. ]',
      actions: [
        '[ À RÉDIGER — Organisation logistique de l\'événement. ]',
        '[ À RÉDIGER — Communication et mobilisation des participants. ]',
        '[ À RÉDIGER — Animation et gestion le jour J. ]'
      ],
      team: '[ À RÉDIGER — L\'équipe organisatrice : rôles, coordination, parties prenantes. ]',
      stakes: '[ À RÉDIGER — Les enjeux humains, organisationnels et créatifs de cet événement. ]',
      results: '[ À RÉDIGER — Les résultats : nombre de participants, retours, impact de l\'événement. ]',
      techStack: [],
      competences: ['travail-equipe', 'adaptabilite', 'creativite']
    }
  ];

  readonly experiences: Experience[] = [
    {
      id: 'alternance-2024',
      company: '[ Nom de l\'entreprise ]',
      role: 'Développeur Full-Stack en alternance',
      period: 'Sept. 2024 — Juil. 2026',
      type: 'alternance',
      description: '[ À RÉDIGER — Décrire les missions principales, les technologies utilisées et les réalisations marquantes dans cette entreprise. ]',
      location: '[ Ville ]',
      tags: ['Java Spring', 'Angular', 'Git', 'CI/CD', 'Agile']
    },
    {
      id: 'formation-esiae',
      company: 'ESIAE',
      role: 'Étudiant Expert en Ingénierie Logicielle',
      period: 'Sept. 2024 — Juil. 2026',
      type: 'formation',
      description: 'Master Expert en Ingénierie Logicielle en alternance. Formation aux architectures logicielles avancées, aux pratiques DevOps, au développement full-stack et aux méthodes agiles.',
      location: 'Paris / Distanciel',
      tags: ['Java Spring', 'Angular', 'Python', 'CI/CD', 'Architecture']
    },
    {
      id: 'experience-anterieure',
      company: '[ Entreprise précédente ]',
      role: '[ Rôle ]',
      period: '[ Période ]',
      type: 'stage',
      description: '[ À RÉDIGER — Décrire une expérience précédente (stage, alternance en bachelor, etc.). ]',
      location: '[ Ville ]',
      tags: ['[ Tag 1 ]', '[ Tag 2 ]']
    }
  ];

  getCompetenceById(id: string): Competence | undefined {
    return this.competences.find(c => c.id === id);
  }

  getRealisationById(id: string): Realisation | undefined {
    return this.realisations.find(r => r.id === id);
  }

  getCompetencesByType(type: 'tech' | 'human'): Competence[] {
    return this.competences.filter(c => c.type === type);
  }

  getRealisationsByCompetence(competenceId: string): Realisation[] {
    return this.realisations.filter(r => r.competences.includes(competenceId));
  }

  getCompetencesByRealisation(realisationId: string): Competence[] {
    const realisation = this.getRealisationById(realisationId);
    if (!realisation) return [];
    return this.competences.filter(c => realisation.competences.includes(c.id));
  }
}
