import { Injectable } from '@angular/core';
import { Competence, Realisation, Experience } from '../models';

@Injectable({ providedIn: 'root' })
export class DataService {

  readonly competences: Competence[] = [

// ── JAVA SPRING ──────────────────────────────────────────────────
    {
      id: 'java-spring',
      title: 'Java Spring',
      type: 'tech',
      level: 'Confirmé',
      icon: '☕',
      color: '#0D9488',
      colorLight: '#F0FDFA',
      shortDescription: 'Développement d\'APIs et d\'applications back-end robustes avec le framework Spring Boot.',
      definition: 'Java Spring, et plus précisément Spring Boot, est aujourd\'hui l\'un des frameworks back-end les plus utilisés dans l\'industrie pour créer des APIs et des applications web fiables et faciles à maintenir. Il repose sur des principes d\'injection de dépendances et d\'inversion de contrôle qui permettent d\'écrire du code plus modulable et plus simple à tester. En environnement professionnel, maîtriser Spring Boot, c\'est savoir concevoir une architecture claire avec des couches bien séparées (Controller, Service, Repository), gérer le cycle de vie des données, sécuriser ses endpoints et exposer des APIs REST que n\'importe quel frontend doit pouvoir appeler.',
      context: 'J\'ai découvert Java Spring lors de mon stage chez Aubay en 2024, sur une application assez ancienne en Java 8 puis Java 11. J\'y ai fait mes premières armes sur du code legacy, ce qui m\'a appris à lire et comprendre un projet existant depuis longtemps avant d\'y travailler et de le faire évoluer. Depuis septembre 2024, j\'utilise Spring Boot 3 avec Java 21 au quotidien dans le cadre de mon alternance à la CodeFactory d\'Aubay, sur deux projets web fullstack. C\'est là que j\'ai réellement pu apprendre et développer une bonne maîtrise de Spring Boot. J\'y ai travaillé sur des fonctionnalités métier parfois complexes avec une architecture propre et des exigences de qualité code (revue croisée, SonarQube, tests JUnit).',
      anecdotes: [
        {
          title: 'Gestion du cycle de vie des candidatures avec une StateMachine',
          content: 'Sur FabTools, l\'application principale de la CodeFactory, permettant la gestion du recrutement de nouveaux alternants et stagiaires, j\'ai pu travailler sur la manipulation d\'une StateMachine côté backend pour gérer le cycle de vie des candidatures. Chaque candidature pouvait évoluer à travers de nombreux états (candidature reçue, entretien planifié, acceptée, refusée...) avec des transitions strictement définies. J\'ai également travaillé sur la gestion des erreurs backend avec des codes HTTP personnalisés, pour que l\'API renvoie des réponses précises et plus compréhensible pour front.',
          result: 'Une gestion du cycle de vie fiable et lisible, qui a permis à l\'équipe frontend de consommer l\'API avec des messages d\'erreur clairs et compréhensibles.',
          realisationId: 'm-a-web'
        },
        {
          title: 'Envoi de mails via Microsoft Graph sur CoralVision',
          content: 'Sur le projet CoralVision (CVI), j\'ai développé le module d\'envoi automatique de mails via l\'API Microsoft Graph, côté Spring Boot. Il s\'agissait d\'intégrer un service dans notre projet, en gérant l\'authentification OAuth2, la construction des requêtes HTTP vers l\'API Graph et la gestion des erreurs de communication.',
          result: 'Le module d\'envoi de mails est opérationnel et intégré à l\'application lors de l\'inscription d\'un nouvel utilisateur.',
          realisationId: 'm-a-web'
        }
      ],
      relatedRealisations: ['m-a-web']
    },

    // ── GIT ──────────────────────────────────────────────────────────
    {
      id: 'git',
      title: 'Git',
      type: 'tech',
      level: 'Confirmé',
      icon: '🔀',
      color: '#F97316',
      colorLight: '#FFF7ED',
      shortDescription: 'Gestion de versions, travail collaboratif et workflows de développement avec Git et GitHub/GitLab.',
      definition: 'Dans la carrière d\'un développeur, Git est l\'outil incontournable à maitriser pour tout développement de logiciel moderne. En plus du simple suivi de fichiers, Git structure la collaboration en équipe, il permet de travailler en parallèle sur des branches isolées pour chaques devs, il permet fusionner les travaux de chacun de manière contrôlée, et de garder un historique clair et traçable de l\'évolution d\'un projet. Dans les projets professionnels ou non, Git est souvent le fil conducteur de toute la chaîne de livraison, de la branche de développement d\'un dev jusqu\'au déploiement à l\'environnement de production.',
      context: 'Avant même mes premiers projets à L\'ESIEA, Git était déjà un outil qui m\'était familier tant il est central, il fait partie de mon quotidien depuis que j\'ai commencé à apprendre à dev. À la CodeFactory, nous travaillons avec GitLab dans un workflow structuré : une branche par feature ou fix, des Merge Request systématique avec contrôle croisé par un autre développeur pour s\'assurer du respect des bonnes pratiques et de la demande client, pipeline CI/CD déclenchée automatiquement à chaque push. Sur tous mes projets personnels et professionels, Git était l\'outil central de coordination entre les membres de l\'équipe.',
      anecdotes: [
        {
          title: 'Workflow GitLab et contrôles croisés à la CodeFactory',
          content: 'Sur nos projets d\'entreprise, chaque développement, même mineur, passe par une Merge Request sur GitLab. J\'ai moi même fais de nombreuses revues de code en tant que reviewer et en tant que contributeur. À chaque MR, notre pipeline CI/CD se déclenche automatiquement (build, tests, analyse SonarQube), et la possibilité d\effectuer le merge n\'est donné qu\'après validation d\'au moins un autre développeur. Nous avions des règles strictes à suivre, comme rédiger des commits clairs, découper les changements en MR lisibles et donner des retours de revue constructifs pour le développeur.',
          result: 'Un historique de code propre et traçable sur le projet, des bugs détectés tôt grâce aux revues croisées, et une vraie culture de la qualité collective au sein de l\'équipe.',
          realisationId: 'm-a-web'
        },
        {
          title: 'Coordination Git sur un projet étudiant en groupe',
          content: 'Sur notre projet d\'école "DarwinSimulator", nous travaillions à quatre sur un projet Unity en C#, avec des modules bien séparés (terrain, IA, UI etc.). Git nous a permis de travailler en parallèle sans nous marcher dessus, en adoptant une convention de branches claire dès le début du projet et des règles strictes à suivre pour garder un arbre git propre. Nous avons géré plusieurs conflits lors de merges, notamment sur les fichiers de scène Unity qui sont souvent complexes à merger, et avons appris à les résoudre méthodiquement grâce à une bonne communication.',
          result: 'Aucune perte de code ou régression liée à un conflit mal résolu sur l\'ensemble du projet. La maîtrise de Git a été un facteur clé dans la livraison du projet dans les délais impartis.',
          realisationId: 'simulateur-darwinien'
        }
      ],
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner']
    },

    // ── CI/CD ─────────────────────────────────────────────────────────
    {
      id: 'cicd',
      title: 'CI/CD',
      type: 'tech',
      level: 'Autonome',
      icon: '⚙️',
      color: '#7C3AED',
      colorLight: '#F5F3FF',
      shortDescription: 'Mise en place et utilisation de pipelines d\'intégration et de déploiement continu pour automatiser les livraisons.',
      definition: 'Selon moi, la CI/CD (Intégration Continue / Déploiement Continu) c\'est l\'ensemble des outils et des pratiques qui permettent d\'automatiser la chaîne de livraison d\'un logiciel, en passant par plusieurs étapes : compilation, tests, analyse de qualité, et le déploiement. L\'intégration continue nous permet de s\'assurer que chaque modification de code est automatiquement analysée et vérifiée, tandis que le déploiement continu permet de livrer rapidement et de manière fiable vers  l\'environnement de test ou de production. Dans nos équipes lors de mon stage et de mon alternance, la CI/CD permettant une cadence de livraison soutenue en écnonmisant énormément de temps aux devs, sans sacrifier la qualité du rendu.',
      context: 'J\'ai utilisé pour la première fois une vraie pipeline CI/CD lors de mon stage chez Aubay via les pipelines GitLab qui permettaient d\'analyser et détecter automatiquement les vulnérabilités de sécurité à chaque push d\'un dev. À la CodeFactory, j\'utilise tous les jours notre chaîne CI/CD basée sur Git, Jenkins, SonarQube et Docker. Chaque Merge Request déclenche automatiquement le build, les tests unitaires (JUnit pour le back, Jasmine/Karma pour le front) et l\'analyse de qualité du code avec SonarQube. Une fois toutes ces étapes validées, le merge est autorisé. Si la pipeline plante à une de ces étapes, le développeur ne pourra pas faire merger son code et sa MR restera bloquée.',
      anecdotes: [
        {
          title: 'Détection de vulnérabilités au seins de la DSIE',
          content: 'Durant mon stage chez Aubay, j\'ai travaillé sur la résolution de vulnérabilités de sécurité détectées automatiquement par le scan de la pipeline GitLab (notamment CVE-2018-9206 par exemple, sur une dépendance de gestion d\'upload). La pipeline analysait le code à chaque push d\'un dev, et remontait les failles avec leur référence CVE. Pour l\'exemple de vulnérabilité que j\'ai cité, j\'ai dû identifier la version corrigée de la dépendance, puis vérifier sa compatibilité avec le reste du projet et relancer un scan pour confirmer la correction.',
          result: 'La faille a été corrigée et validée par le scan de sécurité sans introduction de nouvelles vulnérabilités. Cette expérience m\'a fait comprendre concrètement la valeur d\'une pipeline de sécurité automatisée dans un contexte professionnel.',
          realisationId: 'm-a-web'
        },
        {
          title: 'Chaîne Jenkins / SonarQube / Docker sur les projets CodeFactory',
          content: 'Sur nos applications web lors de mon alternance, chaque développement suit le même workflow : un push sur la branche, déclenchement automatique de la pipeline Jenkins qui d\'abord compile, joue les tests unitaires et envoie les résultats à SonarQube pour analyse de la dette technique et de la couverture de code par nos Tests Unitaires. On devait apprendre à lire et comprendre les rapports de SonarQube pour corriger les code smells et maintenir un score de qualité satisfaisant avant la validation de chaque MR.',
          result: 'Des livraisons fiables à chaque sprint, avec une couverture de tests maintenue et une dette technique maîtrisée. La CI/CD est devenue un réflexe naturel dans ma façon de développer.',
          realisationId: 'm-a-web'
        }
      ],
      relatedRealisations: ['m-a-web']
    },

    // ── API REST ──────────────────────────────────────────────────────
    {
      id: 'api-rest',
      title: 'API Rest',
      type: 'tech',
      level: 'Autonome',
      icon: '🔌',
      color: '#2563EB',
      colorLight: '#EFF6FF',
      shortDescription: 'Conception et consommation d\'APIs RESTful, gestion des échanges entre front-end et back-end.',
      definition: 'Une API REST (Representational State Transfer) c\'est une interface qui permet la communication entre plusieurs applications. Cette interface se base sur le protocole HTTP et les verbes standards GET, POST, PUT, DELETE. On doit y définir ce qu\'on appelle des "endpoints", pour pouvoir exposer des ressources que des clients frontend, web, application mobile ou service tiers pourront par la suite consommer de manière standardisée. Pour concevoir une bonne API REST, il faut d\'abord penser à la clarté des routes, à la cohérence des codes HTTP retournés, à la sécurité des accès et à l\'évolutivité des contrats d\'interface. De nos jours, c\'est le mode de communication largement dominant dans les architectures web modernes.',
      context: 'Les API REST sont un élément primordial dans ma vie de développeur, particulièrement depuis mon premier stage chez Aubay. En effet, côté backend, je conçois des endpoints Spring Boot qui sont par la suite utilisés par nos frontends Angular. Côté consommation, à travers mes projets j\'ai eu l\'occasion d\'intégrer plusieurs APIs tierces : l\'API Microsoft Graph (pour la gestion des utilisateurs Entra pendant mon stage, et pour l\'envoi de mails automatique pendant mon alternance), l\'API Discord sur le projet "D3", et l\'API AWS S3 pour l\'upload d\'images sur notre application CoralVision.',
      anecdotes: [
        {
          title: 'Conception des endpoints REST sur FabTools',
          content: 'Sur l\'application FabTools, j\'ai pu concevoir et développer plusieurs endpoints REST dans notre back Spring Boot pour exposer les fonctionnalités métier importantes (gestion des candidatures, transitions de StateMachine, pages CRUD) à notre frontend Angular. J\'ai même travaillé à la cohérence des codes HTTP retournés par notre back : des codes d\'erreur personnalisés pour chaque cas métier, afin que notre frontend puisse afficher des messages d\'erreur précis plutôt que des messages génériques avec le même code HTTP.',
          result: 'Des endpoints bien définis et documentés, qui ont facilité le travail de l\'équipe frontend et réduit les allers-retours entre back et front lors des intégrations.',
          realisationId: 'm-a-web'
        },
        {
          title: 'Intégration de l\'API MsGraph sur CoralVision',
          content: 'Sur l\'application CoralVision, j\'ai pu intégrer l\'API Microsoft Graph pour automatiser l\'envoi de mails depuis le backend Spring Boot. Pour ce faire, j\'ai du gérer l\'authentification OAuth2 auprès de Microsoft, construire les requêtes HTTP vers les endpoints Graph, et enfin traiter toutoes les réponses et erreurs qui peuvent être retournées. J\'avais déjà eu une première expérience avec Microsoft Graph lors de mon stage, ce qui m\'avait permis d\'avancer rapidement sur cette intégration dans CoralVision.',
          result: 'Le module d\'envoi de mails automatiques est opérationnel en production, avec une gestion des erreurs qui évite les échecs silencieux et permet de retracer les problèmes facilement.',
          realisationId: 'm-a-web'
        }
      ],
      relatedRealisations: ['m-a-web', 'bot-discord']
    },

    // ── ALGORITHMIQUE ─────────────────────────────────────────────────
    {
      id: 'algorithmique',
      title: 'Algorithmique',
      type: 'tech',
      level: 'Confirmé',
      icon: '🧮',
      color: '#DC2626',
      colorLight: '#FEF2F2',
      shortDescription: 'Conception et optimisation d\'algorithmes efficaces pour résoudre des problèmes complexes.',
      definition: 'Pour moi l\'algorithmique c\'est la discipline qui consiste imaginer des séquences d\'instructions afin de pouvoir résoudre un problème de manière optimisée. Dans le contexte du développement logiciel, l\'algorithmique peut se manifester à travers la modélisation des comportements métier complexes comme avec les machines à états, les règles de gestion, moteurs de calcul... Elle est aussi présente quand on parle d\'optimisation des performances, et de réduction de la complexité par exemple. C\'est une compétence indispensable qui est cache derrière chaque fonctionnalité qui sont un minimum complexes.',
      context: 'En tant que développeur, l\'algorithmique a évidemment été au cœur de plusieurs de mes projets. À l\'ESIEA, le projet DarwinSimulator m\'a confronté à l\'implémentation d\'un système de réseaux de neurones évolutifs (NEAT), c\'étais très probablement l\'un des défis algorithmiques les plus complexes auquel j\'ai été confronté. Java n\'était pas l\'idéal quand il s\'agit de créer des jeux, notre projet C2 nous a beaucoup challengé à ce niveau là, particulièrement pour la gestion de la gravité, des collisions et du scrolling.',
      anecdotes: [
        {
          title: 'Implémentation du système NEAT dans DarwinSimulator',
          content: 'Dans le projet DarwinSimulator, nous avons des agents autonomes qui évoluent via un système de réseaux de neurones inspiré de l\'algorithme NEAT (NeuroEvolution of Augmenting Topologies). Chaque agent possède un réseau neuronal qui détermine ses décisions (se déplacer, chercher de la nourriture, éviter les obstacles). Après chaque génération, seuls les agents ayant survécu transmettent leurs "gènes" (la topologie et les poids de leur réseau) aux suivants, avec des mutations aléatoires. J\'ai pu contribuer à ce projet en gérant entre autre la logique de gestion du terrain et à l\'interface de visualisation du réseau neuronal en temps réel pendant que le jeu tournait..',
          result: 'Des comportements émergents observables dès les premières générations : les agents développent progressivement des stratégies de survie non scriptées, validant le bon fonctionnement de l\'algorithme évolutif implémenté.',
          realisationId: 'simulateur-darwinien'
        },
        {
          title: 'Modélisation de la StateMachine de candidatures sur FabTools',
          content: 'Comme dit précédemment, sur l\'application FabTools, le cycle de vie d\'une candidature est modélisé par une machine à états finis dans notre backend Spring Boot. Chaque candidature peut passer d\'états en états (entretien, acceptée, refusée...) avec des transitions conditionnelles. J\'ai eu l\'occasion de travailler sur l\'implémentation et d\'ajouter de nouveaux états et nouvelles règles métier sur cette StateMachinen, à la demande du le client interne, tout faisant attention à ne pas casser la cohérence des transitions.',
          result: 'Un workflow de candidature plus riche et fidèle aux besoins métiers, avec un code maintenable et couvert par des tests unitaires garantissant que les transitions invalides sont correctement rejetées.',
          realisationId: 'm-a-web'
        }
      ],
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner']
    },

    // ── ANGULAR ───────────────────────────────────────────────────────
    {
      id: 'angular',
      title: 'Angular',
      type: 'tech',
      level: 'Confirmé',
      icon: '🅰️',
      color: '#E11D48',
      colorLight: '#FFF1F2',
      shortDescription: 'Développement d\'applications web Single Page Application avec Angular et TypeScript.',
      definition: 'Angular est un framework frontend développé et proposé par Google, permettant aux développeurs de construire des applications web Single Page Application (SPA) en suivant des règles rendant l\'application robustes et maintenables. Le framework est basé sur TypeScript, il nous impose une architecture structurée en composants, services et modules qui permet une bonne scalabilité et testabilité du code ts. Angular se distingue par sa rigueur : son typage fort, ses injection de dépendances native, la gestion réactive des données avec RxJS, et un outillage CLI puissant. C\'est aujourd\'hui un des frameworks frontend les plus utilisés dans les entreprises, particulièrement dans le contexte d\'applications métier complexes.',
      context: 'Angular est la technologie frontend que j\'utilise le plus intensément depuis que j\'ai commencé mon alternance. Tous nos projets sont à la dernière version de Angular, qui est actuellement Angular 19. J\'y développe quotidiennement des pages et composants pour nos applications : des pages CRUD, des formulaires, des appels HTTP vers nos APIs Spring Boot. J\'ai également utilisé Angular pour construire ce portfolio, cela m\'a permi de revoir mes bases après bientôt 2 ans passés sur des applications clients complexes.',
      anecdotes: [
        {
          title: 'Développement de pages CRUD et d\'upload d\'images',
          content: 'Sur l\'application CoralVision, j\'ai développé plusieurs écrans Angular permettant à des plongeurs d\'uploader leurs photos de coraux : formulaire de soumission, prévisualisation des images avant envoi, et intégration avec le backend Spring Boot qui gère l\'upload vers AWS S3. J\'ai également mis en place la couverture de tests avec Jasmine/Karma sur les composants développés, en m\'assurant que les cas nominaux et les cas d\'erreur (image trop lourde, format non supporté) étaient couverts.',
          result: 'Des composants fiables, testés et validés lors des revues croisées de l\'équipe. L\'upload d\'images fonctionne de bout en bout, depuis le formulaire Angular jusqu\'au stockage S3 en passant par le backend.',
          realisationId: 'm-a-web'
        },
        {
          title: 'Ce portfolio',
          content: 'Lors de la contruction de ce portfolio je me suis amusé à revoir ou explorer les dernières fonctionnalités d\'Angular. J\'ai pu experimenter et reproduire des pratiques que j\'ai apprise lors de mon alternance à la CodeFactory.',
          result: 'Un portfolio performant et maintenable, qui me sert aussi de référence technique pour appliquer les bonnes pratiques Angular dans mes projets professionnels.',
          realisationId: 'm-a-web'
        }
      ],
      relatedRealisations: ['m-a-web']
    },

    // ── AGILITÉ ───────────────────────────────────────────────────────
    {
      id: 'agilite',
      title: 'Agilité',
      type: 'human',
      level: 'Confirmé',
      icon: '🔄',
      color: '#059669',
      colorLight: '#ECFDF5',
      shortDescription: 'Capacité à travailler selon les méthodes agiles (Scrum, Kanban) et à s\'adapter rapidement aux changements.',
      definition: 'L\'agilité, au sens professionnel, c\'est la capacité à livrer de la valeur de manière itérative et incrémentale, en maintenant un dialogue constant avec les parties prenantes et en acceptant que les priorités évoluent. Dans le développement logiciel, la méthode Scrum structure ce fonctionnement en sprints courts, avec des cérémonies régulières, daily, sprint review, rétrospective, poker planning, qui permettent à l\'équipe de s\'aligner, de détecter les problèmes tôt et d\'ajuster le cap si nécessaire. L\'agilité n\'est pas seulement un processus : c\'est une posture qui favorise la transparence, la collaboration et l\'amélioration continue.',
      context: 'Je pratique Scrum au quotidien depuis mon arrivée à la CodeFactory en septembre 2024. Notre équipe de 4 à 7 développeurs travaille en sprints de 2 à 3 semaines, avec des dailies chaque matin, des sprint reviews avec le client interne (notre PO), des rétrospectives et des sessions de poker planning pour estimer les User Stories. J\'ai également participé à la rédaction des User Stories en collaboration avec le PO, ce qui m\'a donné une vision plus large du cycle de vie d\'une fonctionnalité, de l\'expression du besoin jusqu\'à la livraison.',
      anecdotes: [
        {
          title: 'Rédaction de User Stories et poker planning sur FabTools',
          content: 'Sur FabTools, j\'ai participé activement aux cérémonies Scrum et notamment aux sessions de rédaction des User Stories avec notre PO. Ce travail m\'a appris à d\'abord questionner le besoin métier avant de plonger dans le code : reformuler la demande, identifier les cas limites, définir les critères d\'acceptance. Lors des poker plannings, j\'ai également appris à estimer les tâches en tenant compte des dépendances techniques et des incertitudes, et à défendre mes estimations face à l\'équipe.',
          result: 'Des User Stories mieux définies en amont, qui ont réduit les allers-retours en cours de sprint et les mauvaises surprises lors des sprint reviews. Ma participation à cette phase de cadrage a été remarquée positivement par notre PO.',
          realisationId: 'm-a-web'
        },
        {
          title: 'Intégration dans une équipe à composition variable',
          content: 'À la CodeFactory, les équipes sont composées d\'alternants et de stagiaires qui arrivent et repartent régulièrement. Cela signifie que l\'équipe se recompose fréquemment, avec de nouveaux arrivants à embarquer et des départs qui emportent de la connaissance. L\'agilité dans notre cas nous permet de garder une certaine cohérence dans nos applications malgrés les turnovers : les cérémonies régulières maintiennent la cohésion, et la documentation des User Stories conserve la mémoire du projet.',
          result: 'Une équipe capable de maintenir sa vélocité malgré les changements de composition, grâce à des rituels bien ancrés et une culture de la documentation et du partage de connaissance.',
          realisationId: 'm-a-web'
        }
      ],
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner']
    },

    // ── ADAPTABILITÉ ─────────────────────────────────────────────────
    {
      id: 'adaptabilite',
      title: 'Adaptabilité',
      type: 'human',
      level: 'Autonome',
      icon: '🌊',
      color: '#7C3AED',
      colorLight: '#F5F3FF',
      shortDescription: 'Capacité à s\'adapter rapidement à de nouveaux environnements, technologies et contraintes.',
      definition: 'L\'adaptabilité, c\'est la capacité à rester efficace et serein face au changement, qu\'il s\'agisse d\'une nouvelle technologie, d\'un nouveau projet, d\'une équipe différente ou de contraintes imprévues. Dans le secteur informatique, où les outils évoluent rapidement et où les contextes de travail peuvent changer du jour au lendemain, cette compétence est fondamentale. Elle ne signifie pas de ne pas avoir de méthode, mais d\'être capable de remettre en question ses habitudes et d\'apprendre vite pour rester opérationnel.',
      context: 'Mon parcours est marqué par des transitions technologiques fréquentes : du HTML/CSS/JS legacy de Planning à Angular 19 et Spring Boot 3 à la CodeFactory, de Java au C# sur Unity, de Vue.js sur D3 à TypeScript sur mes projets Angular. À chaque projet, j\'ai dû m\'approprier rapidement un nouveau contexte technique ou organisationnel. La composition variable des équipes à la CodeFactory, où alternants et stagiaires arrivent et repartent régulièrement, m\'a aussi appris à m\'intégrer rapidement, à transmettre ce que je sais et à absorber ce que les nouveaux arrivants apportent.',
      anecdotes: [
        {
          title: 'Passage du code legacy de Planning à l\'environnement CodeFactory',
          content: 'Mon stage chez Aubay m\'a plongé dans un code Java legacy sur une application ancienne, avec des contraintes de compatibilité et une architecture loin des standards modernes. Six mois plus tard, j\'intégrais la CodeFactory avec une stack complètement différente : Angular 19, Java 21, Spring Boot 3, pipeline CI/CD Jenkins/SonarQube/Docker. Cette transition m\'a demandé de réapprendre certains réflexes tout en capitalisant sur les fondamentaux acquis. J\'ai été opérationnel sur les deux projets en quelques semaines.',
          result: 'Une montée en compétence rapide sur la stack CodeFactory, validée par mes premières Merge Requests livrées et acceptées dès le premier sprint. Cette capacité à m\'adapter rapidement à un nouvel environnement technique est devenue l\'une de mes forces identifiées.',
          realisationId: 'm-a-web'
        },
        {
          title: 'Gérer l\'imprévu le jour J de Dessin Vivant',
          content: 'Organiser un événement pour 50 personnes, c\'est accepter que tout ne se passe pas comme prévu. Lors de Dessin Vivant, nous avons dû faire face à plusieurs imprévus logistiques le jour J : des ajustements de dernière minute sur la disposition des salles, des participants plus nombreux qu\'attendu sur certaines projections et moins sur d\'autres, et des contraintes matérielles à gérer en temps réel. Sans pouvoir se replier sur un plan B entièrement préparé, il a fallu improviser des solutions rapidement, réaffecter les bénévoles et adapter le déroulé sans que les participants ne s\'en aperçoivent.',
          result: 'L\'événement s\'est déroulé sans accroc visible pour les participants, avec 47 présents sur 50 attendus et des retours très positifs sur l\'organisation.',
          realisationId: 'dessin-vivant'
        }
      ],
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner', 'dessin-vivant']
    },

    // ── CRÉATIVITÉ ────────────────────────────────────────────────────
    {
      id: 'creativite',
      title: 'Créativité',
      type: 'human',
      level: 'Confirmé',
      icon: '💡',
      color: '#D97706',
      colorLight: '#FFFBEB',
      shortDescription: 'Capacité à concevoir des solutions innovantes, à penser hors des sentiers battus et à apporter une valeur créative aux projets.',
      definition: 'La créativité dans un contexte technique, c\'est la capacité à imaginer des solutions là où d\'autres voient des contraintes, que ce soit dans la conception d\'une fonctionnalité, le choix d\'une architecture, ou la manière d\'aborder un problème complexe. Elle se manifeste aussi en dehors du code : dans la communication visuelle d\'un projet, la conception d\'une expérience utilisateur originale, ou l\'initiative de créer quelque chose qui n\'existait pas. La créativité est ce qui transforme un développeur technique en un créateur de valeur.',
      context: 'La créativité traverse l\'ensemble de mon parcours, sous des formes variées. Sur DarwinSimulator, c\'est l\'envie de donner vie à un concept scientifique complexe, l\'évolution darwinienne, qui a guidé tout le projet. Sur D3, c\'est l\'idée originale de simuler un OS entier pour gérer un serveur Discord qui a défini l\'identité du projet. En dehors du code, ma sensibilité au design graphique, développée notamment via Canva pour l\'événement Dessin Vivant et pour ce portfolio, est une autre expression de cette créativité.',
      anecdotes: [
        {
          title: 'L\'interface "Windaube XP" du projet D3',
          content: 'Sur le projet D3, plutôt que de faire une simple interface d\'administration Discord classique, nous avons eu l\'idée de simuler un environnement de type système d\'exploitation (inspiré de Windows XP) pour gérer un serveur Discord. Cette décision créative, proposer une expérience immersive et humoristique plutôt qu\'un dashboard fonctionnel ordinaire, a défini toute l\'architecture du projet et son identité. J\'ai contribué à la conception de l\'API REST qui permettait à cette interface de communiquer avec le bot Discord en temps réel.',
          result: 'Un projet remarqué pour son originalité, qui a démontré qu\'il est possible de combiner ambition technique et parti pris créatif fort, même dans un contexte académique.',
          realisationId: 'bot-discord'
        },
        {
          title: 'Communication visuelle de l\'événement Dessin Vivant',
          content: 'Pour Dessin Vivant, j\'ai pris en charge la création de l\'identité visuelle complète de l\'événement : logo, affiches, flyers, visuels pour les réseaux sociaux. En m\'appuyant sur Canva et ma sensibilité au design, j\'ai conçu une communication cohérente et attrayante qui a contribué directement à l\'attractivité de l\'événement. Cette dimension créative, moins visible dans le développement logiciel pur, est pourtant celle qui m\'a le plus naturellement attiré lors de l\'organisation de cet événement.',
          result: '47 participants sur les 50 attendus, avec une communication visuelle saluée par notre équipe pédagogique comme l\'un des points forts de l\'organisation.',
          realisationId: 'dessin-vivant'
        }
      ],
      relatedRealisations: ['simulateur-darwinien', 'bot-discord', 'jeu-2d-runner', 'dessin-vivant']
    },
  ];

  readonly realisations: Realisation[] = [
    {
      id: 'm-a-web',
      title: 'Maintenance et amélioration d\'application Web en entreprise',
      shortTitle: 'FabTools - Aubay',
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
      title: 'Gestionnaire de bot Discord, D3',
      shortTitle: 'Bot Discord D3',
      emoji: '🤖',
      type: 'personnel',
      period: '2023 – 2024',
      coverGradient: 'linear-gradient(135deg, #5865F2 0%, #7C3AED 100%)',
      shortDescription: 'Passerelle entre un bot Discord et une interface web immersive simulant un environnement de type système d\'exploitation pour administrer un serveur Discord.',
      context: 'D3 est un projet étudiant réalisé en équipe de quatre personnes au semestre 4 de ma formation à l\'ESIEA. Discord est une plateforme de communication très populaire, utilisée par des millions de communautés en ligne. L\'idée était de repousser les limites de ce qu\'on peut faire avec l\'API Discord, en combinant un bot interactif à une interface web immersive simulant un environnement de type système d\'exploitation.',
      objective: 'Créer une passerelle innovante entre un bot Discord (développé en Node.js) et une application web baptisée "Windaube XP", reproduisant l\'apparence d\'un ancien OS. L\'interface permettait aux administrateurs de gérer leur serveur Discord (membres, salons, rôles) via une expérience utilisateur originale, avec notamment un module d\'administration, un système de logs et des outils de personnalisation.',
      actions: [
        'Création et documentation des endpoints REST (Express) exposant les fonctionnalités de gestion du serveur Discord vers le frontend Vue.js.',
        'Développement et gestion du bot Discord : commandes, modération en temps réel (kick, ban, messagerie, gestion des salons vocaux).',
        'Structuration du projet avec une architecture modulaire pour faciliter l\'intégration future de nouvelles fonctionnalités Discord dans l\'environnement web.'
      ],
      team: 'Projet mené en équipe de quatre étudiants selon une approche agile, avec une mise en commun régulière des avancements. La séparation claire des responsabilités, bot, API REST et frontend, a permis un développement parallèle efficace tout en maintenant la cohérence globale du système.',
      stakes: 'L\'enjeu technique principal était d\'assurer une communication fiable et réactive entre l\'interface web et l\'API Discord, avec une architecture suffisamment modulaire pour évoluer facilement. L\'enjeu créatif était de proposer une expérience utilisateur originale et immersive, réellement différente des outils de gestion Discord classiques.',
      results: 'D3 a abouti à une plateforme fonctionnelle réunissant bot Discord et interface web simulant un OS, permettant une administration complète d\'un serveur Discord depuis un environnement inédit. Le projet a été salué pour son originalité et la qualité de son architecture modulaire, ouvrant de nombreuses possibilités d\'extension futures.',
      techStack: ['Node.js', 'Vue.js', 'Express', 'API Rest', 'Git'],
      competences: ['api-rest', 'git', 'algorithmique', 'agilite', 'travail-equipe', 'adaptabilite', 'creativite']
    },
    {
      id: 'jeu-2d-runner',
      title: 'Jeu 2D Runner, C2',
      shortTitle: 'Jeu 2D Runner C2',
      emoji: '🎮',
      type: 'personnel',
      period: '2022 – 2023',
      coverGradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
      shortDescription: 'Jeu de type runner 2D développé en Java avec JavaFX, intégrant un moteur physique maison et un éditeur de niveaux complet avec export JSON.',
      context: 'C2 est un projet étudiant réalisé en équipe de quatre personnes au semestre 3 de ma formation à l\'ESIEA. L\'objectif pédagogique était de concevoir un jeu vidéo complet en Java, en maîtrisant les fondamentaux de la programmation orientée objet, de l\'architecture logicielle et des mécaniques de jeu vidéo, sans s\'appuyer sur un moteur de jeu existant.',
      objective: 'Concevoir un runner 2D en Java avec JavaFX, proposant une expérience de jeu fluide et un éditeur de niveaux permettant aux joueurs de créer et exporter leurs propres cartes. Le jeu devait intégrer un moteur physique maison, un système de score, des effets sonores et une interface utilisateur complète.',
      actions: [
        'Développement du moteur physique du jeu : gestion de la gravité, des sauts, de la détection de collisions et des animations de mort (effet "ragdoll").',
        'Conception du système de progression, de score et de la caméra dynamique suivant le joueur.',
        'Développement de l\'interface utilisateur complète : menus principaux, écran de pause, victoire, et éditeur de niveaux visuel avec support du test immédiat des cartes créées.',
        'Mise en place d\'un EventBus pour découpler les événements du jeu (pause, mort, collisions) et garantir un gameplay fluide et modulaire.'
      ],
      team: 'Projet collaboratif en équipe de quatre étudiants à l\'ESIEA, structuré autour d\'une architecture MVC pour séparer clairement les responsabilités (modèle, vue, contrôleur). Le projet a été présenté lors des TechDays de l\'ESIEA.',
      stakes: 'L\'enjeu technique était de maîtriser la conception d\'un moteur de jeu 2D from scratch en Java, sans framework dédié, tout en livrant une expérience jouable et agréable. L\'enjeu pédagogique était d\'appliquer concrètement les principes d\'architecture logicielle, MVC, EventBus, gestion des ressources, sur un projet ambitieux et ludique.',
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