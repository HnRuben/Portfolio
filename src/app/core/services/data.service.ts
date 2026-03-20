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
          content: '[ À RÉDIGER — L\'utilisation d\'Angular dans ce portfolio personnel. ]',
          result: '[ À RÉDIGER — Ce que ça a apporté au projet. ]',
          realisationId: 'm-a-web'
        }
      ],
      relatedRealisations: ['m-a-web']
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
      definition: 'Le travail d\'équipe, c\'est bien plus que collaborer sur un projet. C\'est la capacité à créer une synergie où chaque membre apporte sa valeur ajoutée tout en s\'adaptant aux autres. Dans le développement informatique, cela implique de communiquer clairement sur des aspects techniques parfois complexes, de gérer les désaccords de manière constructive, et de maintenir une dynamique positive même sous pression. Après bientôt cinq années de projets variés à l\'école et en entreprise, j\'ai appris que le succès d\'un projet ne dépend pas uniquement des compétences techniques individuelles, mais surtout de la capacité de l\'équipe à fonctionner comme un organisme cohérent.',
      context: 'J\'ai développé cette compétence progressivement, à travers des expériences complémentaires. Chez Aubay, j\'ai découvert la réalité du travail en équipe dans un contexte professionnel : traduire les besoins des équipes RH en spécifications techniques, maintenir un dialogue constant avec des profils non-techniques, et contribuer à une équipe de développement agile. Mes projets à l\'ESIEA m\'ont appris une autre dimension essentielle : la confiance dans les compétences des coéquipiers. Sur DarwinSimulator, j\'ai réalisé qu\'en voulant tout contrôler, je freinais la créativité de l\'équipe. L\'organisation de Dessin Vivant m\'a enfin convaincu de la force de la complémentarité des rôles dans un binôme.',
      anecdotes: [
        {
          title: 'La fonctionnalité d\'historisation chez Aubay',
          content: 'Lors du développement d\'une fonctionnalité d\'historisation des candidatures sur FabTools, la livraison ne correspondait pas aux attentes des recruteurs. Plutôt que de rejeter la faute sur un manque de clarté des spécifications, j\'ai proposé d\'organiser une session de travail collaborative réunissant toutes les parties prenantes — développeurs, campus managers et recruteurs. Chacun a pu exprimer sa vision, et nous avons co-construit la solution finale ensemble.',
          result: 'Cette approche m\'a fait comprendre que le travail d\'équipe ne se limite pas à l\'équipe technique : il s\'étend à tous les utilisateurs finaux. La fonctionnalité livrée au second cycle a pleinement satisfait les recruteurs, et cette méthode de collaboration est depuis devenue un réflexe pour moi.',
          realisationId: 'm-a-web'
        },
        {
          title: 'La complémentarité sur l\'événement Dessin Vivant',
          content: 'Pour organiser Dessin Vivant, mon camarade et moi avons adopté une répartition naturelle des rôles sans règle formelle : je me suis concentré sur la création des visuels, des affiches et la communication digitale, tandis qu\'il prenait en charge les relations partenaires et la coordination logistique. Cette lecture honnête de nos forces respectives a été déterminante pour la fluidité de l\'organisation.',
          result: '47 participants sur les 50 attendus, et des retours très positifs de notre équipe pédagogique. Cette expérience m\'a convaincu que la complémentarité bien gérée vaut plus que la répartition artificielle des tâches à parts égales.',
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
      shortTitle: 'FabTools — Aubay',
      emoji: '🏢',
      type: 'entreprise',
      period: '2024 – 2026',
      coverGradient: 'linear-gradient(135deg, #0D9488 0%, #0284C7 100%)',
      shortDescription: 'Maintenance corrective et évolutive de FabTools, application web interne de gestion du recrutement chez Aubay, entreprise de services numériques.',
      context: 'Dans le cadre de mon alternance de deux ans au sein d\'Aubay, entreprise de services numériques, j\'ai intégré une équipe de développement travaillant sur FabTools (FTO), une application web interne dédiée à la gestion du recrutement de stagiaires et alternants au sein de "la Fabrique Aubay". L\'application, développée en Angular pour le frontend et Java Spring pour le backend, présentait des anomalies et des besoins d\'évolution remontés régulièrement par les équipes RH, campus managers et recruteurs qui l\'utilisaient au quotidien.',
      objective: 'Mon rôle consistait à assurer la maintenance corrective et évolutive de FabTools, aussi bien sur le backend Java Spring que sur le frontend Angular. L\'objectif était d\'optimiser les performances globales de l\'application, de corriger les anomalies critiques remontées par les utilisateurs, et de développer de nouvelles fonctionnalités pour mieux répondre aux besoins métiers des équipes RH.',
      actions: [
        'Résolution d\'anomalies critiques remontées par les utilisateurs, en diagnostiquant les causes profondes et en livrant des correctifs testés.',
        'Développement et enrichissement du système d\'historisation des candidatures, permettant de tracer intégralement le parcours d\'un candidat de sa candidature initiale jusqu\'à son intégration.',
        'Optimisation du workflow de recrutement autour de la table principale Candidacy, représentant l\'évolution d\'une candidature à travers ses différentes étapes métier.',
        'Collaboration étroite avec les campus managers, recruteurs et responsables RH pour comprendre leurs besoins et adapter l\'application à l\'évolution de leurs méthodes de travail.'
      ],
      team: 'J\'ai intégré une équipe de développement agile chez Aubay, en collaboration directe avec les équipes métiers (RH, campus managers, recruteurs) qui étaient à la fois commanditaires et utilisateurs finaux de l\'application. Les échanges réguliers avec ces profils non-techniques m\'ont appris à adapter ma communication et à centrer le développement sur les besoins réels plutôt que sur les contraintes techniques.',
      stakes: 'FabTools est un outil stratégique pour Aubay, utilisé quotidiennement par les équipes en charge du recrutement de la Fabrique. Une instabilité ou un manque de fonctionnalité impactait directement la fluidité des processus RH et la qualité de l\'expérience candidat. L\'enjeu était donc à la fois technique (robustesse, performance) et humain (satisfaction des utilisateurs internes, fiabilité du processus de recrutement).',
      results: 'L\'enrichissement du système d\'historisation a offert aux recruteurs une vision complète et précise du parcours de chaque candidat, réduisant les risques d\'oubli ou de perte d\'information. L\'optimisation des workflows a contribué à fluidifier le processus de recrutement, et la résolution des anomalies critiques a amélioré la stabilité et la confiance des utilisateurs envers l\'outil.',
      techStack: ['Java Spring', 'Angular', 'Git', 'CI/CD', 'API Rest'],
      competences: ['java-spring', 'angular', 'git', 'cicd', 'api-rest', 'algorithmique', 'agilite', 'travail-equipe', 'adaptabilite']
    },
    {
      id: 'simulateur-darwinien',
      title: 'Simulateur d\'évolution Darwinienne',
      shortTitle: 'DarwinSimulator',
      emoji: '🧬',
      type: 'personnel',
      period: '2023 – 2024',
      coverGradient: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
      shortDescription: 'Simulation interactive de l\'évolution darwinienne en 3D sous Unity, avec des agents autonomes évoluant via un système de réseaux de neurones NEAT.',
      context: 'DarwinSimulator est un projet étudiant réalisé en équipe de quatre personnes au semestre 6 de ma formation à l\'ESIEA. Passionné par les concepts d\'intelligence artificielle et par la théorie de l\'évolution, nous avons décidé de concevoir une simulation qui mettrait en œuvre ces deux domaines de manière concrète et visuelle, à travers un environnement 3D développé sous Unity.',
      objective: 'Concevoir une simulation interactive de l\'évolution darwinienne, où des agents autonomes (NPCs) évoluent dans un environnement 3D selon les principes de la sélection naturelle. Les utilisateurs peuvent configurer les paramètres de simulation (taille de carte, nombre de NPCs, densité de ressources) et observer en temps réel l\'émergence de comportements optimisés au fil des générations.',
      actions: [
        'Développement du module de gestion du terrain et des ressources : génération procédurale de la carte, spawn de nourriture et placement des obstacles.',
        'Conception d\'une interface utilisateur complète incluant les menus de paramétrage avant simulation et des visualisations dynamiques du réseau neuronal de chaque NPC.',
        'Intégration d\'un système d\'accélération du temps pour permettre d\'observer plus rapidement les mutations comportementales sur plusieurs générations successives.'
      ],
      team: 'Projet réalisé en équipe de quatre étudiants à l\'ESIEA. La complexité du projet (3D, IA évolutive, interface) a nécessité une répartition rigoureuse des tâches selon les points forts de chacun. C\'est sur ce projet que j\'ai appris à faire véritablement confiance aux compétences des autres membres, et que j\'ai réalisé qu\'en voulant tout contrôler, je freinais la créativité de l\'équipe.',
      stakes: 'Ce projet représentait un défi technique important : implémenter un système de réseaux de neurones évolutifs inspiré de NEAT (NeuroEvolution of Augmenting Topologies) dans un moteur 3D, tout en garantissant une simulation fluide et cohérente. L\'enjeu académique était fort, ce projet étant au cœur de nos apprentissages en intelligence artificielle et en développement 3D.',
      results: 'La simulation produite offre une expérience immersive où les comportements des NPCs évoluent de manière entièrement autonome et non scriptée. On observe l\'émergence progressive de stratégies de survie optimisées sur plusieurs générations, validant le bon fonctionnement du système NEAT implémenté. Le projet a été présenté avec succès dans le cadre de notre formation.',
      techStack: ['Unity', 'C#', 'NEAT', 'Algorithmique', 'Git'],
      competences: ['algorithmique', 'git', 'agilite', 'travail-equipe', 'adaptabilite', 'creativite']
    },
    {
      id: 'bot-discord',
      title: 'Gestionnaire de bot Discord — D3',
      shortTitle: 'Bot Discord D3',
      emoji: '🤖',
      type: 'personnel',
      period: '2023 – 2024',
      coverGradient: 'linear-gradient(135deg, #5865F2 0%, #7C3AED 100%)',
      shortDescription: 'Passerelle entre un bot Discord et une interface web immersive simulant un environnement de type système d\'exploitation pour administrer un serveur Discord.',
      context: 'D3 est un projet étudiant réalisé en équipe de quatre personnes au semestre 4 de ma formation à l\'ESIEA. Discord est une plateforme de communication très populaire, utilisée par des millions de communautés en ligne. L\'idée était de repousser les limites de ce qu\'on peut faire avec l\'API Discord, en combinant un bot interactif à une interface web immersive simulant un environnement de type système d\'exploitation.',
      objective: 'Créer une passerelle innovante entre un bot Discord (développé en Node.js) et une application web baptisée "Windaube XP-TDR", reproduisant l\'apparence d\'un ancien OS. L\'interface permettait aux administrateurs de gérer leur serveur Discord (membres, salons, rôles) via une expérience utilisateur originale, avec notamment un module d\'administration, un système de logs et des outils de personnalisation.',
      actions: [
        'Création et documentation des endpoints REST (Express) exposant les fonctionnalités de gestion du serveur Discord vers le frontend Vue.js.',
        'Développement et gestion du bot Discord : commandes, modération en temps réel (kick, ban, messagerie, gestion des salons vocaux).',
        'Structuration du projet avec une architecture modulaire pour faciliter l\'intégration future de nouvelles fonctionnalités Discord dans l\'environnement web.'
      ],
      team: 'Projet mené en équipe de quatre étudiants selon une approche agile, avec une mise en commun régulière des avancements. La séparation claire des responsabilités — bot, API REST et frontend — a permis un développement parallèle efficace tout en maintenant la cohérence globale du système.',
      stakes: 'L\'enjeu technique principal était d\'assurer une communication fiable et réactive entre l\'interface web et l\'API Discord, avec une architecture suffisamment modulaire pour évoluer facilement. L\'enjeu créatif était de proposer une expérience utilisateur originale et immersive, réellement différente des outils de gestion Discord classiques.',
      results: 'D3 a abouti à une plateforme fonctionnelle réunissant bot Discord et interface web simulant un OS, permettant une administration complète d\'un serveur Discord depuis un environnement inédit. Le projet a été salué pour son originalité et la qualité de son architecture modulaire, ouvrant de nombreuses possibilités d\'extension futures.',
      techStack: ['Node.js', 'Vue.js', 'Express', 'API Rest', 'Git'],
      competences: ['api-rest', 'git', 'algorithmique', 'agilite', 'travail-equipe', 'adaptabilite', 'creativite']
    },
    {
      id: 'jeu-2d-runner',
      title: 'Jeu 2D Runner — C2',
      shortTitle: 'Jeu 2D Runner C2',
      emoji: '🎮',
      type: 'personnel',
      period: '2022 – 2023',
      coverGradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
      shortDescription: 'Jeu de type runner 2D développé en Java avec JavaFX, intégrant un moteur physique maison et un éditeur de niveaux complet avec export JSON.',
      context: 'C2 est un projet étudiant réalisé en équipe de quatre personnes au semestre 3 de ma formation à l\'ESIEA. L\'objectif pédagogique était de concevoir un jeu vidéo complet en Java, en maîtrisant les fondamentaux de la programmation orientée objet, de l\'architecture logicielle et des mécaniques de jeu vidéo — sans s\'appuyer sur un moteur de jeu existant.',
      objective: 'Concevoir un runner 2D en Java avec JavaFX, proposant une expérience de jeu fluide et un éditeur de niveaux permettant aux joueurs de créer et exporter leurs propres cartes. Le jeu devait intégrer un moteur physique maison, un système de score, des effets sonores et une interface utilisateur complète.',
      actions: [
        'Développement du moteur physique du jeu : gestion de la gravité, des sauts, de la détection de collisions et des animations de mort (effet "ragdoll").',
        'Conception du système de progression, de score et de la caméra dynamique suivant le joueur.',
        'Développement de l\'interface utilisateur complète : menus principaux, écran de pause, victoire, et éditeur de niveaux visuel avec support du test immédiat des cartes créées.',
        'Mise en place d\'un EventBus pour découpler les événements du jeu (pause, mort, collisions) et garantir un gameplay fluide et modulaire.'
      ],
      team: 'Projet collaboratif en équipe de quatre étudiants à l\'ESIEA, structuré autour d\'une architecture MVC pour séparer clairement les responsabilités (modèle, vue, contrôleur). Le projet a été présenté lors des TechDays de l\'ESIEA.',
      stakes: 'L\'enjeu technique était de maîtriser la conception d\'un moteur de jeu 2D from scratch en Java, sans framework dédié, tout en livrant une expérience jouable et agréable. L\'enjeu pédagogique était d\'appliquer concrètement les principes d\'architecture logicielle — MVC, EventBus, gestion des ressources — sur un projet ambitieux et ludique.',
      results: 'C2 est un jeu runner 2D complet et jouable, avec un gameplay fluide, des effets sonores personnalisés, des animations et un éditeur de niveaux fonctionnel permettant l\'export en JSON. Le projet a été présenté avec succès aux TechDays de l\'ESIEA, illustrant la maîtrise de l\'architecture logicielle et des mécaniques de jeu vidéo en Java.',
      techStack: ['Java', 'JavaFX', 'Architecture MVC', 'Algorithmique'],
      competences: ['algorithmique', 'agilite', 'travail-equipe', 'adaptabilite', 'creativite']
    },
    {
      id: 'dessin-vivant',
      title: 'Événement "Dessin Vivant"',
      shortTitle: 'Dessin Vivant',
      emoji: '🎨',
      type: 'evenement',
      period: '2023',
      coverGradient: 'linear-gradient(135deg, #F97316 0%, #FACC15 100%)',
      shortDescription: 'Organisation d\'un événement culturel autour de l\'animation japonaise à l\'ESIEA : projections d\'animés, buffet asiatique et partenariats étudiants.',
      context: 'Dessin Vivant est un projet événementiel co-organisé avec un camarade dans le cadre du Projet de Formation Humaine (PFH) du semestre 4 à l\'ESIEA. L\'idée est née de notre envie de proposer quelque chose de différent : un événement culturel autour de l\'animation japonaise, mêlant projections d\'animés sélectionnés par sondage et dégustation de plats asiatiques, dans une atmosphère conviviale et accessible à tous les étudiants.',
      objective: 'Créer un événement culturel immersif autour de la culture japonaise au sein de l\'école, en transformant cinq salles en espaces de visionnage thématiques et en proposant un buffet japonais et chinois en partenariat avec un fournisseur local. L\'objectif était de réunir 50 participants dans un cadre unique, à mi-chemin entre soirée cinéma et découverte culturelle.',
      actions: [
        'Analyse du projet par une méthodologie SMART et une étude SWOT, avec plans de gestion des risques (panne matériel, affluence insuffisante, etc.).',
        'Création de l\'identité visuelle de l\'événement (logo, affiches, flyers) et déploiement d\'une campagne de communication multicanale (Instagram, mails, affichage physique).',
        'Mise en place de partenariats avec le Club Animé (prêt de comptes streaming) et In\'Con (promotion croisée), et coordination avec Lucky Box pour le buffet à prix abordables.',
        'Organisation logistique le jour J : répartition des bénévoles, gestion du buffet et suivi des diffusions simultanées sur les cinq salles.'
      ],
      team: 'Projet organisé en binôme avec un camarade, avec une répartition naturelle des rôles : je me suis concentré sur la création des visuels et la communication digitale, tandis qu\'il prenait en charge les relations partenaires et la coordination logistique. Cette complémentarité a été un facteur clé du bon déroulement de l\'événement.',
      stakes: 'Au-delà du défi organisationnel, l\'événement représentait un enjeu humain fort : offrir une expérience culturelle authentique à nos camarades. La gestion des partenariats, du budget et de la logistique en totale autonomie nous a confrontés à des responsabilités réelles de chefs de projet, avec de véritables contraintes à gérer (matériel, fournisseurs, communication).',
      results: 'L\'événement a réuni 47 participants sur les 50 attendus, validant l\'ensemble de notre stratégie de communication et d\'organisation. Les retours des participants ont été très positifs, soulignant la qualité de l\'ambiance et de l\'organisation. Le projet a été reconnu comme une réussite par notre équipe pédagogique.',
      techStack: [],
      competences: ['travail-equipe', 'adaptabilite', 'creativite']
    }
  ];

  readonly experiences: Experience[] = [
    {
      id: 'alternance-2024',
      company: 'Aubay',
      role: 'Développeur Full-Stack - Alternance',
      period: 'Sept. 2024 - Juil. 2026',
      type: 'alternance',
      description: 'Participation active à la maintenance corrective et évolutive de FabTools, application web interne de gestion du recrutement de stagiaires et alternants. Développement de nouvelles fonctionnalités sur le backend Java Spring et le frontend Angular, résolution d\'anomalies critiques et collaboration étroite avec les équipes RH, campus managers et recruteurs pour faire évoluer l\'outil selon leurs besoins métiers.',
      location: 'Paris',
      tags: ['Java Spring', 'Angular', 'Git', 'CI/CD', 'Agile']
    },
    {
      id: 'formation-esiea',
      company: 'ESIEA',
      role: 'Étudiant Mastère Expert Ingénierie de l\'IA et des Applications',
      period: 'Sept. 2024 - Juil. 2026',
      type: 'formation',
      description: 'Mastère Expert Bac+5 en Ingénierie de l\'Intelligence Artificielle et des Applications (titre RNCP niveau 7), en 100% alternance et distanciel. Formation aux architectures logicielles avancées, au Machine Learning, au DevOps, à la sécurité et au développement full-stack.',
      location: 'Distanciel',
      tags: ['Java Spring', 'Angular', 'Python', 'Machine Learning', 'DevOps', 'Architecture']
    },
    {
      id: 'stage-aubay',
      company: 'Aubay',
      role: 'Développeur Full-Stack - Stagiaire',
      period: 'Févr. 2024 - Juil. 2024',
      type: 'stage',
      description: 'Stage de 6 mois au sein du pôle DSIE (Direction Systèmes d\'Information Études) d\'Aubay. Travail sur la modernisation des applications internes. Migration Java 11 vers Java 17, maintenance et ajout de fonctionnalités, résolution de vulnérabilités de sécurité détectées par notre pipeline CI/CD.',
      location: 'Paris',
      tags: ['Java Spring', 'Microsoft Entra', 'LDAP', 'API REST', 'GitLab CI/CD', 'Sécurité']
    },
    {
      id: 'formation-bachelor',
      company: 'ESIEA',
      role: 'Étudiant Concepteur Développeur d\'applications',
      period: 'Sept. 2021 - Juil. 2024',
      type: 'formation',
      description: 'Bachelor Bac+3 en développement logiciel à l\'ESIEA (titre RNCP niveau 6). Formation aux langages de programmation, au développement web et mobile, aux bases de données et aux méthodes agiles.',
      location: 'Ivry-sur-Seine',
      tags: ['Java', 'JavaScript', 'C#', 'Unity', 'VueJs', 'SQL', 'Agile']
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