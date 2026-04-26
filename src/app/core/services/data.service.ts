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
      devicon: 'devicon-spring-plain',
      color: '#0D9488',
      colorLight: '#F0FDFA',
      shortDescription: `Développement d'APIs et d'applications back-end robustes avec le framework Spring Boot.`,
      definition: `Java Spring, et plus précisément **Spring Boot**, est aujourd'hui l'un des frameworks back-end les plus populaire pour créer des APIs et des applications web fiables et faciles à maintenir. Il repose sur des principes d'**injection de dépendances** et d'**inversion de contrôle** qui permettent d'écrire du code plus modulable et plus simple à tester. En environnement professionnel, maîtriser Spring Boot, c'est savoir concevoir une architecture claire avec des couches bien séparées (**Controller, Service, Repository**), gérer le cycle de vie des données, sécuriser ses endpoints et exposer des **APIs REST** que n'importe quel frontend doit pouvoir appeler. Le framework continue d'évoluer rapidement : **Spring Boot 4** se prépare à s'appuyer nativement sur les **virtual threads** de **Java 21+**, et l'émergence de **Spring AI** ouvre de nouveaux cas d'usage pour des applications backend capables d'interagir directement avec des modèles de langage.`,
      context: `J'ai découvert **Java Spring** lors de mon stage chez Aubay en 2024, sur une application assez ancienne en **Java 8** puis **Java 11**. J'y ai fait mes premières armes sur du code legacy, ce qui m'a appris à lire et comprendre un projet existant depuis longtemps avant d'y travailler et de le faire évoluer. Depuis septembre 2024, j'utilise **Spring Boot 3** avec **Java 21** au quotidien dans le cadre de mon alternance à la CodeFactory d'Aubay, sur deux projets web fullstack. C'est là que j'ai réellement pu apprendre et développer une bonne maîtrise de **Spring Boot**. J'y ai travaillé sur des fonctionnalités métier parfois complexes avec une architecture propre et des exigences de qualité code (revue croisée, **SonarQube**, tests **JUnit**).`,
      anecdotes: [
        {
          title: `Gestion du cycle de vie des candidatures avec une StateMachine`,
          content: `Sur FabTools, l'application principale de la CodeFactory, permettant la gestion du recrutement de nouveaux alternants et stagiaires, j'ai pu travailler sur la manipulation d'une StateMachine côté backend pour gérer le cycle de vie des candidatures. Chaque candidature pouvait évoluer à travers de nombreux états (candidature reçue, entretien planifié, acceptée, refusée...) avec des transitions strictement définies. J'ai également travaillé sur la gestion des erreurs backend avec des codes HTTP personnalisés, pour que l'API renvoie des réponses précises et plus compréhensible pour front.`,
          result: `Une gestion du cycle de vie fiable et lisible, qui a permis à l'équipe frontend de consommer l'API avec des messages d'erreur clairs et compréhensibles.`,
          realisationId: 'm-a-web'
        },
        {
          title: `Envoi de mails via Microsoft Graph sur CoralVision`,
          content: `Sur le projet CoralVision (CVI), j'ai développé le module d'envoi automatique de mails via l'API Microsoft Graph, côté Spring Boot. Il s'agissait d'intégrer un service dans notre projet, en gérant l'authentification OAuth2, la construction des requêtes HTTP vers l'API Graph et la gestion des erreurs de communication.`,
          result: `Le module d'envoi de mails est opérationnel et intégré à l'application lors de l'inscription d'un nouvel utilisateur.`,
          realisationId: 'm-a-web'
        }
      ],
      autocritique: `Je maîtrise bien les fondamentaux de **Spring Boot** dans un contexte professionnel : les couches **Controller/Service/Repository**, la gestion des entités **JPA**, la construction d'**APIs REST**, les tests **JUnit**. Là où je suis encore en progression, c'est sur les aspects plus avancés du framework : **Spring Security** dans des configurations complexes, la gestion fine des transactions, ou certains patterns d'architecture comme l'event sourcing que je n'ai pas eu l'occasion de pratiquer.\n\nDans mon poste actuel, ce niveau me permet de contribuer efficacement sans être bloquant pour l'équipe, mais je suis clairement encore loin d'un profil senior qui concevrait une architecture backend de bout en bout. Ce qui a rendu mon acquisition relativement rapide, c'est que j'avais déjà une base solide en **Java** pur depuis le Bachelor, ce qui m'a permis de me concentrer sur le framework plutôt que sur le langage. Si je devais conseiller quelqu'un qui commence, je dirais de ne pas chercher à tout apprendre de **Spring** en même temps : commencer par **Spring Boot** avec une vraie application, comprendre pourquoi les beans s'assemblent comme ils le font, puis aller chercher **Spring Security** et les transactions quand on en a vraiment besoin concrètement.`,
      evolution: `À moyen terme, je veux approfondir **Spring Security** et mieux comprendre les choix d'architecture backend qui se font dans les équipes seniors, notamment les patterns comme le **CQRS** ou l'event-driven. Mon alternance chez Aubay continue de me faire progresser naturellement sur ces sujets au fil des sprints. Côté formation, le Mastère aborde des architectures logicielles avancées qui devraient me donner un cadre théorique solide à combiner avec la pratique quotidienne.`,
      relatedRealisations: ['m-a-web']
    },

    // ── GIT ──────────────────────────────────────────────────────────
    {
      id: 'git',
      title: 'Git',
      type: 'tech',
      level: 'Confirmé',
      icon: '🔀',
      devicon: 'devicon-git-plain',
      color: '#F97316',
      colorLight: '#FFF7ED',
      shortDescription: `Gestion de versions, travail collaboratif et workflows de développement avec Git et GitHub/GitLab.`,
      definition: `Dans la carrière d'un développeur, **Git** est l'outil incontournable à maîtriser pour tout développement de logiciel moderne. En plus du simple suivi de fichiers, **Git** structure la collaboration en équipe, il permet de travailler en parallèle sur des branches isolées, de fusionner les travaux de chacun de manière contrôlée, et de garder un historique clair et traçable de l'évolution d'un projet. Dans les projets professionnels ou non, **Git** est souvent le fil conducteur de toute la chaîne de livraison, de la branche de développement d'un dev jusqu'au déploiement à l'environnement de production. En 2025, **GitHub** a franchi le cap des 180 millions de développeurs inscrits, et l'IA s'invite désormais directement dans le workflow : **GitHub Copilot** peut par exemple générer automatiquement des tests unitaires et augmenter la couverture de code sur les modules critiques, ce qui change progressivement la façon dont on produit et relit du code en équipe.`,
      context: `Avant même mes premiers projets à l'ESIEA, **Git** était déjà un outil qui m'était familier tant il est central, il fait partie de mon quotidien depuis que j'ai commencé à apprendre à dev. À la CodeFactory, nous travaillons avec **GitLab** dans un workflow structuré : une branche par feature ou fix, des **Merge Request** systématiques avec contrôle croisé par un autre développeur pour s'assurer du respect des bonnes pratiques et de la demande client, pipeline **CI/CD** déclenchée automatiquement à chaque push. Sur tous mes projets personnels et professionnels, **Git** était l'outil central de coordination entre les membres de l'équipe.`,
      anecdotes: [
        {
          title: `Workflow GitLab et contrôles croisés à la CodeFactory`,
          content: `Sur nos projets d'entreprise, chaque développement, même mineur, passe par une **Merge Request** sur **GitLab**. J'ai moi-même fait de nombreuses revues de code en tant que reviewer et en tant que contributeur. À chaque MR, notre pipeline **CI/CD** se déclenche automatiquement (build, tests, analyse **SonarQube**), et la possibilité d'effectuer le merge n'est donnée qu'après validation d'au moins un autre développeur. Nous avions des règles strictes à suivre, comme rédiger des commits clairs, découper les changements en MR lisibles et donner des retours de revue constructifs pour le développeur.`,
          result: `Un historique de code propre et traçable sur le projet, des bugs détectés tôt grâce aux revues croisées, et une vraie culture de la qualité collective au sein de l'équipe.`,
          realisationId: 'm-a-web'
        },
        {
          title: `Coordination Git sur un projet étudiant en groupe`,
          content: `Sur notre projet d'école "DarwinSimulator", nous travaillions à quatre sur un projet Unity en C#, avec des modules bien séparés (terrain, IA, UI etc.). Git nous a permis de travailler en parallèle sans nous marcher dessus, en adoptant une convention de branches claire dès le début du projet et des règles strictes à suivre pour garder un arbre git propre. Nous avons géré plusieurs conflits lors de merges, notamment sur les fichiers de scène Unity qui sont souvent complexes à merger, et avons appris à les résoudre méthodiquement grâce à une bonne communication.`,
          result: `Aucune perte de code ou régression liée à un conflit mal résolu sur l'ensemble du projet. La maîtrise de Git a été un facteur clé dans la livraison du projet dans les délais impartis.`,
          realisationId: 'simulateur-darwinien'
        }
      ],
      autocritique: `Git c'est une compétence que j'utilise tous les jours depuis plusieurs années, et je me sens vraiment à l'aise dessus. Ce que je fais couramment sans y penser : les branches, les merges, les rebases, la résolution de conflits, les revues de MR. Là où je suis encore perfectible, c'est sur des usages très avancés dans des contextes de gros monorepos ou des stratégies de branching élaborées que je n'ai pas encore eu l'occasion de pratiquer.\n\nDans mon profil d'ingénieur, Git est une compétence transversale indispensable : pas vraiment différenciante en soi, mais sa mauvaise maîtrise crée des frictions dans n'importe quelle équipe. Ce que j'aurais conseillé à mon moi de première année : apprendre Git en ligne de commande dès le début, pas avec une interface graphique. Comprendre ce qui se passe vraiment derrière les boutons, ça change tout.`,
      evolution: `Je ne prévois pas de formation spécifique sur **Git**, c'est une compétence qui progresse naturellement avec la pratique en équipe. Ce que je veux travailler sur le long terme, c'est avoir une discipline plus rigoureuse dans mes messages de commit et dans la structure de mes branches, des habitudes qui font la différence dans un projet professionnel. J'aimerais aussi pratiquer davantage avec **GitHub Actions** sur mes projets personnels. Mon alternance me donne régulièrement des occasions de me confronter à des situations **Git** complexes.`,
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner']
    },

    // ── CI/CD ─────────────────────────────────────────────────────────
    {
      id: 'cicd',
      title: 'CI/CD',
      type: 'tech',
      level: 'Autonome',
      icon: '⚙️',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>',
      color: '#7C3AED',
      colorLight: '#F5F3FF',
      shortDescription: `Utilisation de pipelines d'intégration et de déploiement continu pour automatiser les livraisons.`,
      definition: `Selon moi, la **CI/CD** (**Intégration Continue** / **Déploiement Continu**) c'est l'ensemble des outils et des pratiques qui permettent d'automatiser la chaîne de livraison d'un logiciel, en passant par plusieurs étapes : compilation, tests, analyse de qualité, et le déploiement. L'intégration continue nous permet de s'assurer que chaque modification de code est automatiquement analysée et vérifiée, tandis que le déploiement continu permet de livrer rapidement et de manière fiable vers l'environnement de test ou de production. Dans nos équipes lors de mon stage et de mon alternance, la **CI/CD** permettait une cadence de livraison soutenue en économisant énormément de temps aux devs, sans sacrifier la qualité du rendu. En 2025, selon une étude **GitLab**, 78 % des équipes de développement utilisent ou envisagent d'utiliser l'IA dans leur workflow **CI/CD**, et **GitHub Actions** est devenu l'outil de pipeline dominant, utilisé par plus de 55 % des développeurs professionnels.`,
      context: `J'ai utilisé pour la première fois une vraie pipeline **CI/CD** lors de mon stage chez Aubay via les pipelines **GitLab** qui permettaient d'analyser et détecter automatiquement les vulnérabilités de sécurité à chaque push d'un dev. À la CodeFactory, j'utilise tous les jours notre chaîne **CI/CD** basée sur **Git**, **Jenkins**, **SonarQube** et **Docker**. Chaque **Merge Request** déclenche automatiquement le build, les tests unitaires (**JUnit** pour le back, **Jasmine/Karma** pour le front) et l'analyse de qualité du code avec **SonarQube**. Une fois toutes ces étapes validées, le merge est autorisé. Si la pipeline plante à une de ces étapes, le développeur ne pourra pas faire merger son code et sa MR restera bloquée.`,
      anecdotes: [
        {
          title: `Détection de vulnérabilités au seins de la DSIE`,
          content: `Durant mon stage chez Aubay, j'ai travaillé sur la résolution de vulnérabilités de sécurité détectées automatiquement par le scan de la pipeline **GitLab** (notamment **CVE-2018-9206** par exemple, sur une dépendance de gestion d'upload). La pipeline analysait le code à chaque push d'un dev, et remontait les failles avec leur référence CVE. Pour l'exemple de vulnérabilité que j'ai cité, j'ai dû identifier la version corrigée de la dépendance, puis vérifier sa compatibilité avec le reste du projet et relancer un scan pour confirmer la correction.`,
          result: `La faille a été corrigée et validée par le scan de sécurité sans introduction de nouvelles vulnérabilités. Cette expérience m'a fait comprendre concrètement la valeur d'une pipeline de sécurité automatisée dans un contexte professionnel.`,
          realisationId: 'm-a-web'
        },
        {
          title: `Chaîne Jenkins / SonarQube / Docker sur les projets CodeFactory`,
          content: `Sur nos applications web lors de mon alternance, chaque développement suit le même workflow : un push sur la branche, déclenchement automatique de la pipeline **Jenkins** qui d'abord compile, joue les tests unitaires et envoie les résultats à **SonarQube** pour analyse de la dette technique et de la couverture de code par nos tests unitaires. On devait apprendre à lire et comprendre les rapports de **SonarQube** pour corriger les code smells et maintenir un score de qualité satisfaisant avant la validation de chaque **Merge Request**.`,
          result: `Des livraisons fiables à chaque sprint, avec une couverture de tests maintenue et une dette technique maîtrisée. La CI/CD est devenue un réflexe naturel dans ma façon de développer.`,
          realisationId: 'm-a-web'
        }
      ],
      autocritique: `Je me situe à un niveau Autonome sur la **CI/CD**, ce qui veut dire que je comprends bien les concepts et que j'ai travaillé sur des pipelines réels, mais que je n'ai pas encore la maîtrise suffisante pour en concevoir un de zéro ou pour optimiser une infrastructure complexe de manière autonome. Ce que je sais faire : lire, déboguer et modifier des pipelines existants, comprendre les étapes de build, test, qualité et déploiement, intégrer des outils d'analyse statique comme **SonarQube**. Ce que je sais moins bien : orchestrer des pipelines sur des architectures distribuées, gérer des déploiements multi-environnements complexes, ou configurer des runners dans des infrastructures cloud.\n\nDans mon profil, la **CI/CD** est une compétence que je considère importante mais pas centrale : c'est plutôt une compétence de "profil complet" que je cultive pour ne pas être dépendant d'un DevOps à chaque fois que je veux pousser du code. Sur la vitesse à laquelle je l'ai acquise, honnêtement ça n'est pas venu vite. C'est une compétence qui s'est construite par exposition progressive, en voyant tourner des pipelines au quotidien plutôt qu'en l'ayant apprise frontalement d'un coup. Ce que je conseillerais à quelqu'un qui commence, c'est de ne pas avoir peur de casser une pipeline, lire un log d'erreur **Jenkins** ou **GitHub Actions** de bout en bout, c'est souvent là qu'on comprend vraiment ce que fait chaque étape.`,
      evolution: `Je veux atteindre un niveau Confirmé d'ici la fin de mon alternance. Le Mastère aborde des modules DevOps approfondis qui devraient m'y aider sur le plan théorique. J'aimerais aussi pratiquer davantage avec **GitHub Actions** sur mes projets personnels, qui est un outil plus accessible que **Jenkins** pour commencer à construire ses propres pipelines depuis zéro.`,
      relatedRealisations: ['m-a-web']
    },

    // ── API REST ──────────────────────────────────────────────────────
    {
      id: 'api-rest',
      title: 'API Rest',
      type: 'tech',
      level: 'Autonome',
      icon: '🔌',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
      color: '#2563EB',
      colorLight: '#EFF6FF',
      shortDescription: `Conception et consommation d'APIs RESTful, gestion des échanges entre front-end et back-end.`,
      definition: `Une **API REST** (Representational State Transfer) c'est une interface qui permet la communication entre plusieurs applications. Cette interface se base sur le protocole **HTTP** et les verbes standards **GET, POST, PUT, DELETE**. On doit y définir ce qu'on appelle des **endpoints**, pour pouvoir exposer des ressources que des clients frontend, web, application mobile ou service tiers pourront par la suite consommer de manière standardisée. Pour concevoir une bonne **API REST**, il faut d'abord penser à la clarté des routes, à la cohérence des codes de retour **HTTP**, à la sécurité des accès et à l'évolutivité des contrats d'interface. De nos jours, c'est le mode de communication largement dominant dans les architectures web modernes : **REST** est utilisé dans plus de 83 % des services web en production. **GraphQL** gagne toutefois du terrain, avec une adoption en hausse de 340 % depuis 2023 ; les deux approches coexistent désormais dans la plupart des grandes organisations, chacune répondant à des besoins différents.`,
      context: `Les **API REST** sont un élément primordial dans ma vie de développeur, particulièrement depuis mon premier stage chez Aubay. En effet, côté backend, je conçois des endpoints **Spring Boot** qui sont par la suite utilisés par nos frontends **Angular**. Côté consommation, à travers mes projets j'ai eu l'occasion d'intégrer plusieurs APIs tierces : l'**API Microsoft Graph** (pour la gestion des utilisateurs **Entra** pendant mon stage, et pour l'envoi de mails automatique pendant mon alternance), l'**API Discord** sur le projet "D3", et l'**API AWS S3** pour l'upload d'images sur notre application CoralVision.`,
      anecdotes: [
        {
          title: `Conception des endpoints REST sur FabTools`,
          content: `Sur l'application FabTools, j'ai pu concevoir et développer plusieurs endpoints REST dans notre back Spring Boot pour exposer les fonctionnalités métier importantes (gestion des candidatures, transitions de StateMachine, pages CRUD) à notre frontend Angular. J'ai même travaillé à la cohérence des codes HTTP retournés par notre back : des codes d'erreur personnalisés pour chaque cas métier, afin que notre frontend puisse afficher des messages d'erreur précis plutôt que des messages génériques avec le même code HTTP.`,
          result: `Des endpoints bien définis et documentés, qui ont facilité le travail de l'équipe frontend et réduit les allers-retours entre back et front lors des intégrations.`,
          realisationId: 'm-a-web'
        },
        {
          title: `Intégration de l'API MsGraph sur CoralVision`,
          content: `Sur l'application CoralVision, j'ai pu intégrer l'API Microsoft Graph pour automatiser l'envoi de mails depuis le backend Spring Boot. Pour ce faire, j'ai du gérer l'authentification OAuth2 auprès de Microsoft, construire les requêtes HTTP vers les endpoints Graph, et enfin traiter toutoes les réponses et erreurs qui peuvent être retournées. J'avais déjà eu une première expérience avec Microsoft Graph lors de mon stage, ce qui m'avait permis d'avancer rapidement sur cette intégration dans CoralVision.`,
          result: `Le module d'envoi de mails automatiques est opérationnel en production, avec une gestion des erreurs qui évite les échecs silencieux et permet de retracer les problèmes facilement.`,
          realisationId: 'm-a-web'
        }
      ],
      autocritique: `Je me considère Autonome sur la conception et la consommation d'**APIs REST**. Je suis capable de concevoir des endpoints cohérents, de gérer les codes de retour **HTTP** correctement, de sécuriser des routes et d'intégrer des APIs tierces. Là où je manque encore d'expérience, c'est sur la conception d'APIs à grande échelle avec des contraintes de versioning, de rétrocompatibilité et de documentation formelle type **OpenAPI/Swagger** dans un vrai contexte de production. Dans mon alternance, j'ai surtout étendu des APIs existantes plutôt qu'en conçu des nouvelles de bout en bout, ce qui explique ce niveau Autonome plutôt que Confirmé.\n\nC'est une compétence centrale dans mon profil de développeur full-stack : sans une bonne maîtrise des **API REST**, il est impossible de faire travailler proprement un frontend et un backend ensemble. Ce que je conseillerais à quelqu'un qui commence, c'est de ne pas se précipiter sur les frameworks et de vraiment comprendre d'abord pourquoi **HTTP** fonctionne comme il fonctionne : les verbes, les codes de retour, la logique stateless. Une fois ça posé, le reste vient assez vite.`,
      evolution: `Je veux progresser vers un niveau Confirmé en travaillant sur la conception d'**APIs REST** complètes dans des projets où j'ai plus de latitude sur les choix d'architecture. Je m'intéresse aussi à **GraphQL** comme alternative à **REST** pour certains cas d'usage, un sujet que je compte explorer sur un projet personnel à moyen terme. Je compte aussi aller chercher des ressources sur les bonnes pratiques de documentation autour d'**OpenAPI**, notamment pour combler mon manque d'expérience sur cet aspect.`,
      relatedRealisations: ['m-a-web', 'bot-discord']
    },

    // ── ALGORITHMIQUE ─────────────────────────────────────────────────
    {
      id: 'algorithmique',
      title: 'Algorithmique',
      type: 'tech',
      level: 'Confirmé',
      icon: '🧮',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/><path d="M12 20v2M12 2v2M17 20v2M17 2v2M2 12h2M2 17h2M2 7h2M20 12h2M20 17h2M20 7h2M7 20v2M7 2v2"/></svg>',
      color: '#DC2626',
      colorLight: '#FEF2F2',
      shortDescription: `Conception et optimisation d'algorithmes efficaces pour résoudre des problèmes complexes.`,
      definition: `Pour moi l'**algorithmique** c'est la discipline qui consiste à imaginer des séquences d'instructions afin de pouvoir résoudre un problème de manière optimisée. Dans le contexte du développement logiciel, l'algorithmique peut se manifester à travers la modélisation des comportements métier complexes comme avec les **machines à états**, les règles de gestion, les moteurs de calcul... Elle est aussi présente quand on parle d'optimisation des performances et de réduction de la complexité. C'est une compétence indispensable qui se cache derrière chaque fonctionnalité un minimum complexe. Avec l'essor des **agents IA** autonomes, 75 % des entreprises prévoient d'y investir d'ici fin 2026, et l'entrée en vigueur de l'**AI Act** européen qui impose de justifier les décisions algorithmiques, savoir concevoir et critiquer des algorithmes est plus pertinent que jamais.`,
      context: `En tant que développeur, l'algorithmique a évidemment été au cœur de plusieurs de mes projets. À l'ESIEA, le projet **DarwinSimulator** m'a confronté à l'implémentation d'un système de réseaux de neurones évolutifs (**NEAT**), c'était très probablement l'un des défis algorithmiques les plus complexes auquel j'ai été confronté. **Java** n'était pas l'idéal quand il s'agit de créer des jeux, notre projet **C2** nous a beaucoup challengé à ce niveau-là, particulièrement pour la gestion de la gravité, des collisions et du scrolling sous **JavaFX**.`,
      anecdotes: [
        {
          title: `Implémentation du système NEAT dans DarwinSimulator`,
          content: `Dans le projet **DarwinSimulator**, nous avons des agents autonomes qui évoluent via un système de réseaux de neurones inspiré de l'algorithme **NEAT** (NeuroEvolution of Augmenting Topologies). Chaque agent possède un réseau neuronal qui détermine ses décisions (se déplacer, chercher de la nourriture, éviter les obstacles). Après chaque génération, seuls les agents ayant survécu transmettent leurs "gènes" (la topologie et les poids de leur réseau) aux suivants, avec des mutations aléatoires. J'ai pu contribuer à ce projet en gérant entre autres la logique de gestion du terrain et l'interface de visualisation du réseau neuronal en temps réel sous **Unity**.`,
          result: `Des comportements émergents observables dès les premières générations : les agents développent progressivement des stratégies de survie non scriptées, validant le bon fonctionnement de l'algorithme évolutif implémenté.`,
          realisationId: 'simulateur-darwinien'
        },
        {
          title: `Modélisation de la StateMachine de candidatures sur FabTools`,
          content: `Comme dit précédemment, sur l'application **FabTools**, le cycle de vie d'une candidature est modélisé par une **StateMachine** dans notre backend **Spring Boot**. Chaque candidature peut passer d'états en états (entretien, acceptée, refusée...) avec des transitions conditionnelles. J'ai eu l'occasion de travailler sur l'implémentation et d'ajouter de nouveaux états et nouvelles règles métier sur cette **StateMachine**, à la demande du client interne, tout en faisant attention à ne pas casser la cohérence des transitions.`,
          result: `Un workflow de candidature plus riche et fidèle aux besoins métiers, avec un code maintenable et couvert par des tests unitaires garantissant que les transitions invalides sont correctement rejetées.`,
          realisationId: 'm-a-web'
        }
      ],
      autocritique: `L'algorithmique est une compétence que j'ai construite progressivement et qui se manifeste dans mon travail au quotidien, surtout sur les problèmes de modélisation métier complexe et d'optimisation. Je me sens Confirmé sur les algorithmes classiques, les structures de données, la complexité. Ce que je maîtrise moins bien, c'est le domaine de l'algorithmique avancée type programmation dynamique ou les algorithmes de graphe complexes, des sujets que j'ai effleurés mais pas vraiment pratiqués en profondeur.\n\nDans mon métier de développeur full-stack, l'algorithmique n'est pas sollicitée à chaque ticket, mais elle fait la différence quand il faut optimiser un traitement lent ou analyser pourquoi quelque chose ne passe pas à l'échelle. Ce qui a surtout développé cette compétence, c'est le projet DarwinSimulator, qui m'a forcé à réfléchir à des problèmes de simulation impossibles à résoudre en cherchant juste Stack Overflow. Ce que je dirais à quelqu'un qui veut progresser en algorithmique, c'est de ne pas attendre d'avoir un "vrai" problème complexe pour s'y mettre. Les exercices sur Codingame ou LeetCode, même en dehors des cours, développent des réflexes qu'on ne trouve vraiment pas ailleurs.`,
      evolution: `Je veux maintenir ce niveau et progresser vers Expert sur les algorithmes liés à l'IA et au machine learning, dans le cadre de mon Mastère en ingénierie de l'IA. C'est un domaine où l'algorithmique et les mathématiques se rejoignent vraiment, et que je compte approfondir activement via les modules du Mastère et des projets personnels.`,
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner']
    },

    // ── ANGULAR ───────────────────────────────────────────────────────
    {
      id: 'angular',
      title: 'Angular',
      type: 'tech',
      level: 'Confirmé',
      icon: '🅰️',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z"/></svg>',
      color: '#E11D48',
      colorLight: '#FFF1F2',
      shortDescription: `Développement d'applications web Single Page Application avec Angular et TypeScript.`,
      definition: `**Angular** est un framework frontend développé et proposé par Google, permettant aux développeurs de construire des applications web **Single Page Application (SPA)** en suivant des règles rendant l'application robuste et maintenable. Le framework est basé sur **TypeScript**, il nous impose une architecture structurée en composants, services et modules qui permet une bonne scalabilité et testabilité du code. **Angular** se distingue par sa rigueur : son typage fort, son injection de dépendances native, la gestion réactive des données avec **RxJS**, et un outillage **CLI** puissant. C'est aujourd'hui un des frameworks frontend les plus utilisés dans les entreprises, particulièrement dans le contexte d'applications métier complexes. Le framework évolue vite : **Angular 20** généralise les **signals** comme moteur de réactivité principal et introduit le mode "zoneless" (sans **zone.js**), qui apporte 20 à 30 % de gain de performance sur les applications complexes. **Signal Forms**, attendu dans les prochaines versions, devrait réinventer la gestion des formulaires réactifs.`,
      context: `**Angular** est la technologie frontend que j'utilise le plus intensément depuis que j'ai commencé mon alternance. Tous nos projets sont à la dernière version de **Angular**, qui est actuellement **Angular 19**. J'y développe quotidiennement des pages et composants pour nos applications : des pages CRUD, des formulaires, des appels **HTTP** vers nos APIs **Spring Boot**. J'ai également utilisé **Angular** pour construire ce portfolio, cela m'a permis de revoir mes bases après bientôt 2 ans passés sur des applications clients complexes.`,
      anecdotes: [
        {
          title: `Développement de pages CRUD et d'upload d'images`,
          content: `Sur l'application CoralVision, j'ai développé plusieurs écrans **Angular** permettant à des plongeurs d'uploader leurs photos de coraux : formulaire de soumission, prévisualisation des images avant envoi, et intégration avec le backend **Spring Boot** qui gère l'upload vers **AWS S3**. J'ai également mis en place la couverture de tests avec **Jasmine/Karma** sur les composants développés, en m'assurant que les cas nominaux et les cas d'erreur (image trop lourde, format non supporté) étaient couverts.`,
          result: `Des composants fiables, testés et validés lors des revues croisées de l'équipe. L'upload d'images fonctionne de bout en bout, depuis le formulaire Angular jusqu'au stockage S3 en passant par le backend.`,
          realisationId: 'm-a-web'
        },
        {
          title: `Ce portfolio`,
          content: `Lors de la contruction de ce portfolio je me suis amusé à revoir ou explorer les dernières fonctionnalités d'Angular. J'ai pu experimenter et reproduire des pratiques que j'ai apprise lors de mon alternance à la CodeFactory.`,
          result: `Un portfolio performant et maintenable, qui me sert aussi de référence technique pour appliquer les bonnes pratiques Angular dans mes projets professionnels.`,
          realisationId: 'm-a-web'
        }
      ],
      autocritique: `**Angular** est le framework sur lequel j'ai passé le plus de temps en contexte professionnel, et c'est clairement ma compétence frontend principale. Je suis Confirmé : je maîtrise les composants, les services, le routing, les formulaires, **RxJS** pour les cas courants, et les **signals** depuis **Angular 17**. Là où je progresse encore, c'est sur les optimisations avancées de performance (fine-grained change detection, lazy loading poussé) et sur les patterns d'architecture frontend à grande échelle.\n\n**Angular** est très importante dans mon profil actuel parce que c'est le framework de FabTools et CoralVision, les deux applications sur lesquelles je travaille en alternance. J'ai acquis **Angular** relativement vite parce que j'avais déjà pratiqué **VueJS** en Bachelor, ce qui m'a donné les réflexes des frameworks à composants avant même de toucher **Angular**. Ce que je conseillerais à quelqu'un qui débute **Angular**, c'est de ne pas esquiver **RxJS** trop longtemps. C'est la partie la plus déroutante du framework au départ, mais la comprendre vraiment, pas juste copier des exemples en espérant que ça marche, ça change vraiment la façon dont on écrit ses composants et ses services.`,
      evolution: `Je veux approfondir la partie performance et architecture frontend, et mieux comprendre comment les grandes équipes organisent leurs projets **Angular** sur le long terme. Je suis aussi attentif aux évolutions du framework, notamment tout ce qui tourne autour des **signals** qui changent vraiment la façon d'écrire les composants. Ce portfolio m'a d'ailleurs permis de les explorer plus librement qu'en contexte professionnel. Je suis aussi le blog officiel **Angular** et les RFCs du framework pour ne pas rater les évolutions importantes, c'est pas vraiment une formation structurée, mais c'est ce qui me permet de rester à jour entre les sprints.`,
      relatedRealisations: ['m-a-web']
    },

    // ── AGILITÉ ───────────────────────────────────────────────────────
    {
      id: 'agilite',
      title: 'Agilité',
      type: 'human',
      level: 'Confirmé',
      icon: '🔄',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
      color: '#059669',
      colorLight: '#ECFDF5',
      shortDescription: `Capacité à travailler selon les méthodes agiles (Scrum, Kanban) et à s'adapter rapidement aux changements.`,
      definition: `Dans le contexte d'un projet professionnel, l'**agilité** c'est la capacité d'une équipe à planifier puis livrer leur travail de manière itérative en maintenant constamment un dialogue avec les différentes parties prenantes, tout en acceptant que ce qu'on a planifié au début d'un sprint ne soit pas forcément ce qu'on livre à la fin. En effet, dans un projet, les priorités et les besoins peuvent évoluer ou se préciser au fil du temps. **Scrum** structure ça avec des **sprints** courts et des cérémonies régulières comme les **dailys** pour se synchroniser, les **reviews** pour montrer ce qui a été fait, les **rétros** pour identifier ce qui s'est bien ou mal passé, le **poker planning** pour estimer en équipe les tickets. Cela permet à une équipe de ne pas se retrouver deux mois plus tard avec un résultat qui n'était pas celui désiré initialement. Ce n'est pas un sujet figé : en 2025-2026, de nombreuses entreprises revisitent leur rapport à l'agilité, avec une tendance à l'hybridation entre méthodes agiles et planification traditionnelle. Le terme "agile fatigue" est même apparu pour décrire des équipes lassées de rituels qui génèrent plus de bruit que de valeur réelle.`,
      context: `Je pratique **Scrum** au quotidien depuis ma toute première expérience professionnelle chez Aubay début 2024. Nous avons toujours travaillé de 4 à 7 développeurs par projet en **sprints** de 2 à 3 semaines, avec des **dailys** chaque matin, des **sprint reviews** avec le client interne (notre **PO**), des **rétrospectives** et des sessions de **poker planning** pour estimer les **User Stories**. J'ai également contribué moi-même à la rédaction des **User Stories** en collaboration avec le **PO**, ce qui m'a aidé à mieux comprendre le point de vue côté métier, et comment les tickets sont pensés pour pouvoir retranscrire au mieux la vision client aux développeurs.`,
      anecdotes: [
        {
          title: `Rédaction de User Stories et poker planning sur FabTools`,
          content: `Sur **FabTools**, j'ai participé activement aux cérémonies **Scrum** et notamment aux sessions de rédaction des **User Stories** avec notre **PO**. Ce travail m'a appris à d'abord questionner le besoin métier avant de plonger dans le code : reformuler la demande, identifier les cas limites, définir les critères d'acceptance. Lors des **poker plannings**, j'ai également appris à estimer les tâches en tenant compte des dépendances techniques et des incertitudes, et à défendre mes estimations face à l'équipe.`,
          result: `Des **User Stories** mieux définies en amont, qui ont réduit les allers-retours en cours de sprint et les mauvaises surprises lors des sprint reviews. Ma participation à cette phase de cadrage a été remarquée positivement par notre **PO**.`,
          realisationId: 'm-a-web'
        },
        {
          title: `Intégration dans une équipe à composition variable`,
          content: `À la CodeFactory, les équipes sont composées d'alternants et de stagiaires qui arrivent et repartent régulièrement. Cela signifie que l'équipe se recompose fréquemment, avec de nouveaux arrivants à embarquer et des départs qui emportent de la connaissance. L'agilité dans notre cas nous permet de garder une certaine cohérence dans nos applications malgrés les turnovers : les cérémonies régulières maintiennent la cohésion, et la documentation des User Stories conserve la mémoire du projet.`,
          result: `Une équipe capable de maintenir sa vélocité malgré les changements de composition, grâce à des rituels bien ancrés et une culture de la documentation et du partage de connaissance.`,
          realisationId: 'm-a-web'
        }
      ],
      autocritique: `Je me considère Confirmé sur l'agilité dans le sens où j'ai vraiment pratiqué les rituels agiles dans un contexte professionnel, pas seulement en simulation scolaire. Ce que je sais bien faire : m'inscrire dans un sprint, estimer des tâches, participer activement aux cérémonies, m'adapter à l'évolution des priorités en cours de sprint. Ce que je maîtrise moins bien, c'est la posture de facilitateur ou de **Scrum Master** : j'ai toujours été du côté développeur, jamais du côté animation des rituels d'équipe.\n\nL'agilité est une compétence transversale que je considère essentielle dans mon profil, pas parce que c'est à la mode, mais parce que sans elle, travailler en équipe sur un projet qui évolue devient vite ingérable. Ce que je conseillerais à quelqu'un qui commence : ne pas confondre "faire de l'agile" et "faire du **Scrum** avec **Jira**". L'essentiel c'est l'état d'esprit, pas les outils. Sur ma vitesse d'acquisition, je ne pense pas avoir été particulièrement rapide, c'est venu progressivement, sprint après sprint, en faisant des erreurs et en les corrigeant.`,
      evolution: `Je veux continuer à pratiquer l'agilité dans des contextes variés, et potentiellement aller vers une certification à moyen terme si l'occasion se présente. Ce qui m'intéresse aussi, c'est de mieux comprendre les limites de l'agilité dans certains contextes, les cas où le framework Scrum crée plus de bruit que de valeur, pour avoir un regard plus critique et mature sur cette méthode.`,
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner']
    },

    // ── ADAPTABILITÉ ─────────────────────────────────────────────────
    {
      id: 'adaptabilite',
      title: 'Adaptabilité',
      type: 'human',
      level: 'Autonome',
      icon: '🌊',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>',
      color: '#7C3AED',
      colorLight: '#F5F3FF',
      shortDescription: `Capacité à s'adapter rapidement à de nouveaux environnements, technologies et contraintes.`,
      definition: `Selon moi l'**adaptabilité**, c'est la capacité d'une personne à rester efficace quand les choses changent, et dans l'informatique, elles changent tout le temps, qu'il s'agisse d'une nouvelle techno, d'un nouveau projet, ou d'un changement d'équipe. Les outils avec lesquels on travaille au quotidien évoluent rapidement et les contextes de travail peuvent changer rapidement, ce qui rend cette compétence fondamentale pour un développeur. Mais ça ne veut pas dire qu'il faut rester sans méthode pour autant, selon moi, il s'agit plutôt d'être capable de remettre en question nos habitudes et d'apprendre vite pour ne pas bloquer et rester opérationnel quoi qu'il arrive.`,
      context: `Pendant mon parcours de dév, j'ai transitionné régulièrement de technologies en technologies, du **HTML/CSS/JS** legacy d'une vieille application de gestion pendant mon stage, aux versions les plus récentes d'**Angular** et de **Spring Boot** durant mon alternance. Pour les projets de cours, j'ai dû passer d'un semestre à l'autre du **Java** pur au **C#** sur **Unity**, de **Vue.js** à **TypeScript** sur mes projets **Angular**. À chaque nouveau projet, j'ai dû m'approprier rapidement le nouveau contexte technique et même organisationnel. La composition variable des équipes pendant mon alternance, où alternants et stagiaires arrivent et repartent régulièrement, m'a aussi appris à m'intégrer rapidement, à expliquer ce que je sais à quelqu'un qui débarque, mais aussi à apprendre des nouveaux qui apportent avec eux leur propre expérience passée.`,
      anecdotes: [
        {
          title: `Passage d'un code legacy vers un environnement moderne`,
          content: `Ma première expérience en tant que stagiaire chez Aubay m'a plongé dans un code **Java** legacy sur une application ancienne, avec des contraintes de compatibilité et une architecture loin des standards que l'on peut voir sur des applications plus récentes. Six mois plus tard, j'intégrais la CodeFactory avec une stack complètement différente : **Angular 19**, **Java 21**, **Spring Boot 3.5**, pipeline **CI/CD** **Jenkins**/**SonarQube**/**Docker**. Ce changement m'a fait réapprendre des réflexes que j'avais pris, sans en oublier pour autant l'expérience que j'avais acquise précédemment.`,
          result: `Une montée en compétence rapide sur la stack CodeFactory, validée par mes premières Merge Requests livrées et acceptées dès le premier sprint. Cette capacité à m'adapter rapidement à un nouvel environnement technique est devenue l'une de mes forces identifiées.`,
          realisationId: 'm-a-web'
        },
        {
          title: `Gérer l'imprévu le jour d'un évènement`,
          content: `Lorsque j'ai eu à organiser un événement pour 50 personnes, j'ai vite compris et accepté que tout ne pouvait pas se passer comme prévu. Pendant l'évènement "Dessin Vivant" que j'organisais, nous avons dû faire face à plusieurs imprévus logistiques le jour J : des ajustements de dernière minute sur la disposition des salles, des participants plus nombreux qu'attendu sur certaines projections et moins sur d'autres, et des contraintes matérielles à gérer en temps réel. Sans pouvoir se reposer sur un plan B entièrement préparé, il a fallu improviser des solutions rapidement, réaffecter les bénévoles et adapter le déroulé sans que les participants ne s'en aperçoivent.`,
          result: `L'événement s'est déroulé sans accroc visible pour les participants, avec 47 présents sur 50 attendus et des retours très positifs sur l'organisation.`,
          realisationId: 'dessin-vivant'
        }
      ],
      autocritique: `Je me situe à Autonome sur l'adaptabilité, et j'ai choisi ce niveau en toute honnêteté parce que je sais m'adapter, mais pas toujours aussi vite ou aussi confortablement que je le voudrais. Changer de technologie ne me fait pas peur, mais il m'arrive encore d'avoir des phases d'inconfort quand je dois basculer de contexte très rapidement, surtout quand les bases manquent. Ce que je fais bien : repartir de zéro sur une nouvelle techno sans me bloquer, poser les bonnes questions, aller chercher l'information moi-même. Ce que je veux améliorer : ma capacité à être efficace plus vite dans les premiers jours sur quelque chose de nouveau.\n\nDans mon profil, l'adaptabilité est centrale parce que le développement logiciel ne laisse pas beaucoup de place à ceux qui refusent de bouger. Ce qui m'aide le plus, c'est d'avoir acquis un socle de réflexes transversaux qui fonctionnent quelle que soit la techno : lire la doc officielle, comprendre les exemples avant de les copier, interroger les profils seniors. Sur la vitesse à laquelle je l'ai acquise, je ne pense pas que ça ait été remarquable dans un sens ou dans l'autre, c'est une compétence qui se renforce avec chaque changement de contexte, pas quelque chose qu'on apprend d'un coup. Ce que je conseillerais à quelqu'un qui veut vraiment la travailler, c'est de se mettre volontairement dans des situations inconfortables : prendre un projet sur une techno qu'on ne connaît pas, aller chercher un stage dans un domaine différent de ses habitudes. On n'apprend pas à s'adapter en restant dans sa zone de confort.`,
      evolution: `Je ne cherche pas à "former" mon adaptabilité au sens académique, c'est une compétence qui se développe en se jetant dans des situations nouvelles. Ce que je vais continuer à faire, c'est m'exposer volontairement à des technologies que je ne connais pas via des projets personnels, pour que le déstabilisant devienne progressivement familier.`,
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner', 'dessin-vivant']
    },

    // ── CRÉATIVITÉ ────────────────────────────────────────────────────
    {
      id: 'creativite',
      title: 'Créativité',
      type: 'human',
      level: 'Confirmé',
      icon: '💡',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
      color: '#D97706',
      colorLight: '#FFFBEB',
      shortDescription: `Capacité à concevoir des solutions innovantes, à penser hors des sentiers battus et à apporter une valeur créative aux projets.`,
      definition: `Dans le monde du développement, la **créativité** serait pour moi la capacité à imaginer les solutions les plus adaptées à un problème quand la voie évidente ne marche pas. Sans forcément innover à chaque fois ou inventer quelque chose de zéro, mais plutôt regarder les contraintes différemment et en faire quelque chose d'utile, que ce soit dans le choix d'une architecture ou la conception d'une nouvelle fonctionnalité. Elle se manifeste aussi en dehors du code, comme dans la communication visuelle d'un projet, la conception d'une expérience utilisateur originale, ou l'initiative de créer quelque chose qui n'existait pas. Cette compétence peut être ce qui différencie un développeur seulement technique d'un développeur qui crée de la valeur.`,
      context: `La créativité c'est quelque chose qui revient dans beaucoup de mes projets, pas toujours de la même façon. Sur mon projet "**DarwinSimulator**" c'est parti d'une envie de modéliser quelque chose de concret, l'évolution darwinienne, et de le voir fonctionner sous **Unity**. Sur mon projet "**D3**", l'idée de départ c'était de simuler un OS entier pour gérer un serveur **Discord**, ce qui a donné son identité au projet dès le début. Et en dehors du code, j'ai aussi une sensibilité au design graphique que j'ai mise en pratique sur **Canva**, notamment pour l'événement "**Dessin Vivant**".`,
      anecdotes: [
        {
          title: `L'interface web du projet D3`,
          content: `Sur notre projet D3 sur lequel on devait créer une interface d'administration web pour le projet, et plutôt que de faire une interface classique, nous avons préféré simuler un environnement style système d'exploitation, inspiré de Windows XP, pour gérer un serveur Discord. C'est une idée un peu folle mais au final c'est ce choix qui a donné à notre projet son identité et qui a conditionné une bonne partie de l'architecture derrière.`,
          result: `Un projet remarqué pour son originalité, qui a démontré qu'il est possible de combiner ambition technique et parti pris créatif fort, même dans un contexte académique.`,
          realisationId: 'bot-discord'
        },
        {
          title: `Communication visuelle de l'événement Dessin Vivant`,
          content: `Pour l'évènement Dessin Vivant, j'ai pris en charge la création de l'identité visuelle complète de l'événement : logo, affiches, flyers, visuels pour les réseaux sociaux. En m'appuyant sur **Canva** et ma sensibilité au design, j'ai conçu moi même une communication cohérente et attrayante qui a contribué directement à l'attractivité de l'événement. Cette dimension créative, qui moins visible dans le développement logiciel pur, est pourtant celle qui m'a le plus naturellement attiré lors de l'organisation de cet événement.`,
          result: `47 participants sur les 50 attendus, avec une communication visuelle saluée par notre équipe pédagogique comme l'un des points forts de l'organisation.`,
          realisationId: 'dessin-vivant'
        }
      ],
      autocritique: `La créativité, je la classe Confirmé parce qu'elle est vraiment présente dans ma façon de travailler et dans les projets que je choisis de faire, mais elle ne s'exprime pas de la même manière dans tous les contextes. En projet personnel ou événementiel, je me sens libre d'aller sur des idées un peu folles. En contexte professionnel, la créativité se traduit plutôt par la capacité à trouver des solutions élégantes à des problèmes contraints, ce qui est une forme différente mais tout aussi réelle.\n\nLà où je suis encore en progression, c'est sur la créativité de conception : savoir proposer une architecture ou une fonctionnalité originale en partant d'un besoin métier flou demande une expérience et une confiance que je n'ai pas encore complètement. Cette compétence n'est pas toujours visible sur un CV technique, mais c'est souvent elle qui fait la différence entre un développeur qui exécute et un développeur qui propose. Sur ma vitesse d'acquisition, c'est difficile à dire parce que la créativité ça ne s'apprend pas vraiment d'un coup. Elle s'est exprimée de plus en plus clairement au fil des projets, à mesure que j'avais plus de liberté sur les choix à faire. Ce que je dirais à quelqu'un qui pense ne pas être créatif en dev, c'est d'arrêter de chercher à innover pour innover. La créativité en développement c'est rarement de l'invention pure, c'est souvent juste regarder un problème sous un autre angle, et ça vient avec l'expérience.`,
      evolution: `Je veux continuer à cultiver cette compétence en dehors du travail, via des projets personnels et la création graphique. À moyen terme, j'aimerais mieux articuler créativité technique et créativité de conception, pour être capable de proposer des idées originales dès les phases de réflexion produit, pas seulement à l'implémentation. Je compte aussi me former un peu plus sérieusement sur le design UI/UX, probablement via des ressources en ligne comme Refactoring UI, pour mieux appuyer ma sensibilité visuelle sur des bases de conception plus solides.`,
      relatedRealisations: ['simulateur-darwinien', 'bot-discord', 'jeu-2d-runner', 'dessin-vivant']
    },

    // ── TRAVAIL EN ÉQUIPE ─────────────────────────────────────────────────
    {
      id: 'travail-equipe',
      title: 'Travail en équipe',
      type: 'human',
      level: 'Confirmé',
      icon: '🤝',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      color: '#0284C7',
      colorLight: '#E0F2FE',
      shortDescription: `Capacité à collaborer efficacement au sein d'équipes, à contribuer à une dynamique collective et à maintenir une communication claire avec tous les interlocuteurs.`,
      definition: `J'ai appris avec le temps et les expériences que travailler en équipe ce n'est pas juste se répartir des tickets et avancer chacun dans son coin. C'est plutôt construire quelque chose ensemble de manière cohérente, et ça implique de vraies habitudes de collaboration au quotidien : partager ce qu'on sait, relire le travail des autres avec bienveillance, poser des questions quand on bloque plutôt que de rester seul dessus pendant des heures. Dans un contexte professionnel, ça implique aussi de savoir communiquer avec des gens qui n'ont pas le même langage que soi, que ce soit un **PO**, un **RH** ou un client, et c'est souvent là que les vrais défis d'équipe se cachent, pas dans le code.`,
      context: `J'ai pratiqué le travail en équipe de manière intensive depuis mes premiers projets à l'ESIEA, toujours en groupes de quatre. En alternance à la CodeFactory, les équipes étaient plus grandes, entre 5 et 10 développeurs selon les périodes, avec un turnover régulier d'alternants et de stagiaires. Ce qui était particulier dans ce contexte, c'est qu'on avait à disposition des experts avec beaucoup plus d'expérience que nous, disponibles au quotidien pour nous accompagner. Ça m'a appris à ne pas hésiter à demander de l'aide et à profiter de cette proximité avec des profils seniors pour progresser vite. Sur tous ces projets, les rituels **Scrum** structuraient notre collaboration, et les contrôles croisés sur les **Merge Requests** étaient le moment où le travail d'équipe était le plus concret et le plus formateur.`,
      anecdotes: [
        {
          title: `Friction PO / développeurs sur la définition des tickets`,
          content: `Sur FabTools, l'une des difficultés récurrentes dans notre équipe n'était pas technique, c'était la communication avec notre PO. Ses tickets manquaient souvent de précision : les critères d'acceptance étaient flous, des cas limites n'étaient pas anticipés, et on se retrouvait parfois en fin de sprint avec un développement livré qui ne correspondait pas exactement à ce qui était attendu. J'ai compris assez rapidement que reprocher ça au PO ne servait à rien, et que le rôle de l'équipe de dev était aussi de poser les bonnes questions en amont pour clarifier le besoin avant de commencer. J'ai commencé à participer plus activement aux sessions de rédaction des User Stories pour contribuer à combler cet écart, en reformulant les demandes et en identifiant les cas non couverts.`,
          result: `Des tickets mieux cadrés en amont, moins d'allers-retours en cours de sprint, et une meilleure compréhension mutuelle entre le PO et l'équipe de développement. Cette expérience m'a surtout appris que la qualité d'une équipe ne se mesure pas seulement à son code, mais aussi à sa capacité à se comprendre collectivement.`,
          realisationId: 'm-a-web'
        },
        {
          title: `Contribuer efficacement sans chercher à tout contrôler`,
          content: `Sur mes projets étudiants, j'avais plutôt un rôle d'exécutant : je prenais en charge ma partie, je la livrais, et je m'assurais qu'elle s'intègre bien au reste. Ce positionnement m'a appris quelque chose d'important, à savoir que bien contribuer à un projet collectif, ce n'est pas forcément avoir la vue d'ensemble ou prendre les décisions, c'est d'abord faire son travail correctement et ne pas créer de friction pour les autres. Sur DarwinSimulator par exemple, j'avais la responsabilité du module de gestion du terrain et de l'interface de visualisation. Tant que cette partie fonctionnait bien et s'interfaçait correctement avec le reste, j'aidais l'équipe à avancer. J'ai aussi appris que faire confiance aux autres sur leur périmètre, sans aller vérifier systématiquement ce qu'ils faisaient, rendait l'équipe globalement plus efficace.`,
          result: `Des projets livrés dans les délais avec une cohérence technique satisfaisante, et une compréhension plus mature de ce que signifie vraiment contribuer à une équipe plutôt que simplement travailler à côté d'elle.`,
          realisationId: 'simulateur-darwinien'
        }
      ],
      autocritique: `J'estime être à niveau Confirmé sur le travail en équipe parce que c'est quelque chose que j'ai vraiment pratiqué dans des contextes variés, avec des équipes de tailles et de compositions très différentes. Ce que je fais naturellement bien : m'intégrer dans une équipe existante, contribuer sans créer de friction, adapter ma communication à mes interlocuteurs qu'ils soient développeurs, PO ou équipes RH. Ce que je veux encore développer, c'est ma capacité à prendre des initiatives sur l'organisation collective, proposer des améliorations dans les rituels ou dans la façon dont l'équipe communique, sans que ce soit perçu comme une ingérence.\n\nDans mon profil d'ingénieur, le travail en équipe n'est pas un "plus", c'est une condition de base. Un développeur qui ne sait pas collaborer ralentit tout le monde, peu importe son niveau technique. Ma vitesse d'acquisition sur ce point a été favorisée par le fait de pratiquer dès les premiers semestres à l'ESIEA, dans des groupes où on n'avait pas le choix que de s'organiser ensemble pour avancer. Ce que je conseillerais à quelqu'un qui commence à travailler en équipe, c'est de ne pas hésiter à dire quand on bloque. Rester dans son coin pendant des heures par peur de paraître incompétent, c'est l'erreur que je faisais au début, et c'est souvent ce qui ralentit l'équipe entière bien plus qu'une question posée directement.`,
      evolution: `Je veux progresser vers des rôles où j'ai plus de responsabilités collectives, idéalement prendre la coordination technique d'une équipe sur un projet à moyen terme, pas pour le titre, mais pour m'exercer à cette dimension de leadership qui me manque encore. Pas de formation spécifique prévue, mais je m'intéresse aux ressources sur les dynamiques d'équipe et la gestion de projet technique pour mieux comprendre ce qui fait qu'une équipe fonctionne vraiment bien.`,
      relatedRealisations: ['m-a-web', 'simulateur-darwinien', 'bot-discord', 'jeu-2d-runner', 'dessin-vivant']
    },
  ];

  readonly realisations: Realisation[] = [
    {
      id: 'm-a-web',
      title: `Gestion et évolution d'une application web de recrutement`,
      shortTitle: 'App web de recrutement',
      emoji: '🏢',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z"/></svg>',
      color: '#0D9488',
      colorLight: '#CCFBF1',
      type: 'entreprise',
      period: '2024 – 2026',
      coverGradient: 'linear-gradient(135deg, #0D9488 0%, #0284C7 100%)',
      shortDescription: `Maintenance corrective et évolutive de FabTools, application web interne de gestion du recrutement chez Aubay, entreprise de services numériques.`,
      context: `Dans le cadre de mon alternance de deux ans au sein d'Aubay, entreprise de services numériques, j'ai intégré une équipe de développement travaillant sur **FabTools** (FTO), une application web interne dédiée à la gestion du recrutement de stagiaires et alternants au sein de "la Fabrique Aubay". L'application, développée en **Angular** pour le frontend et **Java Spring** pour le backend, présentait des anomalies et des besoins d'évolution remontés régulièrement par les équipes RH, campus managers et recruteurs qui l'utilisaient au quotidien.`,
      objective: `Mon rôle consistait à assurer la maintenance corrective et évolutive de **FabTools**, aussi bien sur le backend **Java Spring** que sur le frontend **Angular**. L'objectif était d'optimiser les performances globales de l'application, de corriger les anomalies critiques remontées par les utilisateurs, et de développer de nouvelles fonctionnalités pour mieux répondre aux besoins métiers des équipes RH.`,
      actions: [
        `Résolution d'anomalies critiques remontées par les utilisateurs, en diagnostiquant les causes profondes et en livrant des correctifs testés.`,
        `Développement et enrichissement du système d'historisation des candidatures, permettant de tracer intégralement le parcours d'un candidat de sa candidature initiale jusqu'à son intégration.`,
        `Optimisation du workflow de recrutement autour de la table principale Candidacy, représentant l'évolution d'une candidature à travers ses différentes étapes métier.`,
        `Collaboration étroite avec les campus managers, recruteurs et responsables RH pour comprendre leurs besoins et adapter l'application à l'évolution de leurs méthodes de travail.`
      ],
      team: `J'ai intégré une équipe de développement agile chez Aubay, en collaboration directe avec les équipes métiers (RH, campus managers, recruteurs) qui étaient à la fois commanditaires et utilisateurs finaux de l'application. Les échanges réguliers avec ces profils non-techniques m'ont appris à adapter ma communication et à centrer le développement sur les besoins réels plutôt que sur les contraintes techniques.`,
      stakes: `FabTools est un outil stratégique pour Aubay, utilisé quotidiennement par les équipes en charge du recrutement de la Fabrique. Une instabilité ou un manque de fonctionnalité impactait directement la fluidité des processus RH et la qualité de l'expérience candidat. L'enjeu était donc à la fois technique (robustesse, performance) et humain (satisfaction des utilisateurs internes, fiabilité du processus de recrutement).`,
      risks: `Le risque côté utilisateurs était concret : **FabTools** est utilisé quotidiennement par des équipes RH dont le travail dépend de son bon fonctionnement. Introduire une régression sur la table Candidacy, par exemple, pouvait bloquer directement le suivi de candidatures réelles. Le risque pour moi était celui de tout alternant qui touche à du code de production : livrer quelque chose de cassé dans un environnement où ça a de vraies conséquences. Les pipelines **CI/CD** et les revues croisées existaient justement pour réduire ce risque, mais ça ne l'élimine pas complètement. Un correctif mal testé reste un correctif qui peut passer en prod.`,
      results: `L'enrichissement du système d'historisation a offert aux recruteurs une vision complète et précise du parcours de chaque candidat, réduisant les risques d'oubli ou de perte d'information. L'optimisation des workflows a contribué à fluidifier le processus de recrutement, et la résolution des anomalies critiques a amélioré la stabilité et la confiance des utilisateurs envers l'outil. Pour moi, ce projet a été l'environnement dans lequel j'ai vraiment appris à développer dans un contexte professionnel avec **Angular** et **Spring Boot** : c'est ici que j'ai compris la différence entre écrire du code qui marche et écrire du code qui tient dans le temps.`,
      lendemains: `Dans les semaines qui ont suivi le début de mon alternance, ma montée en compétence a été rapide : j'étais autonome sur les tickets de mon niveau dès le premier sprint, et j'ai commencé à faire des revues de code pour d'autres assez vite. Avec le recul, FabTools a vraiment été le projet qui m'a ancré dans une vraie façon de travailler. Aujourd'hui je suis encore en poste sur ce projet, et mon périmètre s'est élargi : je prends des tickets plus complexes, je participe à des décisions techniques, et j'ai une vision globale de l'application que je n'avais clairement pas en arrivant.`,
      regardCritique: `Ma valeur ajoutée sur ce projet a été d'être quelqu'un de fiable et non-bloquant pour l'équipe, surtout au début. Arriver en alternance dans une équipe avec des conventions établies et du code existant, c'est pas toujours évident, et ce que j'ai retenu c'est que le plus important c'est de lire avant d'écrire. Ce projet m'a aussi confronté à une réalité que les projets scolaires cachent : les vrais utilisateurs ont des besoins qui évoluent et qui ne sont pas toujours bien formulés. Si je devais refaire quelque chose différemment, ce serait de documenter plus systématiquement mes décisions techniques au fil des tickets, pour ne pas perdre de la connaissance quand les gens tournent dans l'équipe.`,
      techStack: ['Java Spring', 'Angular', 'Git', 'CI/CD', 'API Rest', 'Algorithmique'],
      competences: ['java-spring', 'angular', 'git', 'cicd', 'api-rest', 'algorithmique', 'agilite', 'travail-equipe', 'adaptabilite']
    },
    {
      id: 'simulateur-darwinien',
      title: `Simulateur d'évolution Darwinienne`,
      shortTitle: 'DarwinSimulator',
      emoji: '🧬',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z"/></svg>',
      color: '#7C3AED',
      colorLight: '#EDE9FE',
      type: 'esiea',
      period: '2023 – 2024',
      coverGradient: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
      shortDescription: `Simulation interactive de l'évolution darwinienne en 3D sous Unity, avec des agents autonomes évoluant via un système de réseaux de neurones NEAT.`,
      context: `**DarwinSimulator** est un projet étudiant réalisé en équipe de quatre personnes au semestre 6 de ma formation à l'ESIEA. Intéréssé par les concepts d'intelligence artificielle et par la théorie de l'évolution, nous avons décidé de concevoir une simulation qui mettrait en œuvre ces deux domaines de manière concrète et visuelle, à travers un environnement 3D développé sous **Unity**.`,
      objective: `Concevoir une simulation interactive de l'évolution darwinienne, où des agents autonomes (NPCs) évoluent dans un environnement 3D selon les principes de la sélection naturelle. Les utilisateurs peuvent configurer les paramètres de simulation (taille de carte, nombre de NPCs, densité de ressources) et observer en temps réel l'émergence de comportements optimisés au fil des générations.`,
      actions: [
        `Développement du module de gestion du terrain et des ressources : génération procédurale de la carte, spawn de nourriture et placement des obstacles.`,
        `Conception d'une interface utilisateur complète incluant les menus de paramétrage avant simulation et des visualisations dynamiques du réseau neuronal de chaque NPC.`,
        `Intégration d'un système d'accélération du temps pour permettre d'observer plus rapidement les mutations comportementales sur plusieurs générations successives.`
      ],
      team: `Projet réalisé en équipe de quatre étudiants à l'ESIEA. La complexité du projet (3D, IA évolutive, interface) a nécessité une répartition rigoureuse des tâches selon les points forts de chacun. C'est sur ce projet que j'ai appris à faire véritablement confiance aux compétences des autres membres, et que j'ai réalisé qu'en voulant tout contrôler, je freinais la créativité de l'équipe.`,
      stakes: `Ce projet représentait un défi technique important : implémenter un système de réseaux de neurones évolutifs inspiré de **NEAT** (NeuroEvolution of Augmenting Topologies) dans un moteur **3D** sous **Unity**, tout en garantissant une simulation fluide et cohérente. L'enjeu académique était fort, ce projet étant au cœur de nos apprentissages en intelligence artificielle et en développement 3D.`,
      risks: `Le risque principal était lié à l'ambition du projet : on avait choisi de faire quelque chose de techniquement très costaud pour un semestre, avec de la 3D, de l'IA évolutive et une interface complète en parallèle. Le risque c'était de ne pas finir, ou de finir quelque chose de bancal qu'on n'aurait pas eu le temps de stabiliser. Sur la partie **NEAT** notamment, on partait de presque rien : si l'implémentation ne marchait pas, tout le concept du projet tombait avec. Il y avait aussi un risque de coordination : quatre personnes sur **Unity** avec des modules interconnectés, les conflits sur les fichiers de scènes peuvent vite devenir ingérables si on ne s'impose pas des règles claires dès le départ.`,
      results: `La simulation produite offre une expérience immersive où les comportements des NPCs évoluent de manière entièrement autonome et non scriptée. On observe l'émergence progressive de stratégies de survie optimisées sur plusieurs générations, validant le bon fonctionnement du système **NEAT** implémenté. Le projet a été présenté avec succès dans le cadre de notre formation, réalisé sous **Unity**. Pour moi personnellement, DarwinSimulator a été le projet le plus techniquement ambitieux de mon cursus scolaire, celui qui m'a le plus poussé à réfléchir en dehors de ma zone de confort algorithmique.`,
      lendemains: `Juste après la présentation, le projet a été très bien reçu par nos enseignants, notamment pour l'ambition du sujet et la qualité de l'interface de visualisation. Avec le recul, c'est directement ce projet qui m'a orienté vers le Mastère Expert en ingénierie de l'IA : c'est en travaillant sur le NEAT que j'ai vraiment réalisé à quel point ce domaine m'intéressait. Aujourd'hui je cite régulièrement DarwinSimulator quand on me demande d'illustrer ma capacité à attaquer des problèmes algorithmiques complexes, parce que c'est clairement l'expérience qui m'a le plus formé à ce niveau.`,
      regardCritique: `Ce que j'ai surtout apporté sur ce projet c'est la rigueur sur les modules dont j'avais la charge : le terrain et l'interface de visualisation étaient fonctionnels, stables et bien intégrés au reste. Ce que j'aurais fait différemment, c'est définir plus tôt les interfaces entre nos modules : on a perdu du temps à recalibrer certaines choses parce qu'on n'avait pas assez anticipé comment les parties allaient se connecter. L'enseignement principal que j'en retire : sur un projet de cette complexité sous **Unity**, la phase de conception et la définition des contrats entre modules valent autant que le code lui-même.`,
      techStack: ['Unity', 'C#', 'NEAT', 'Algorithmique', 'Git'],
      competences: ['algorithmique', 'git', 'agilite', 'travail-equipe', 'adaptabilite', 'creativite']
    },
    {
      id: 'bot-discord',
      title: 'Bot Discord & interface web immersive style OS',
      shortTitle: 'Bot Discord OS',
      emoji: '🤖',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
      color: '#5865F2',
      colorLight: '#EEF0FE',
      type: 'esiea',
      period: '2023 – 2024',
      coverGradient: 'linear-gradient(135deg, #5865F2 0%, #7C3AED 100%)',
      shortDescription: `Passerelle entre un bot Discord et une interface web immersive simulant un environnement de type système d'exploitation pour administrer un serveur Discord.`,
      context: `**D3** est un projet étudiant réalisé en équipe de quatre personnes au semestre 4 de ma formation à l'ESIEA. **Discord** est une plateforme de communication très populaire, utilisée par des millions de communautés en ligne. L'idée était de repousser les limites de ce qu'on peut faire avec l'**API Discord**, en combinant un bot interactif à une interface web immersive simulant un environnement de type système d'exploitation.`,
      objective: `Créer une passerelle innovante entre un bot **Discord** (développé en **Node.js**) et une application web baptisée "Windaube XP", reproduisant l'apparence d'un ancien OS. L'interface permettait aux administrateurs de gérer leur serveur **Discord** (membres, salons, rôles) via une expérience utilisateur originale, avec notamment un module d'administration, un système de logs et des outils de personnalisation.`,
      actions: [
        `Création et documentation des endpoints REST (Express) exposant les fonctionnalités de gestion du serveur Discord vers le frontend Vue.js.`,
        `Développement et gestion du bot Discord : commandes, modération en temps réel (kick, ban, messagerie, gestion des salons vocaux).`,
        `Structuration du projet avec une architecture modulaire pour faciliter l'intégration future de nouvelles fonctionnalités Discord dans l'environnement web.`
      ],
      team: `Projet mené en équipe de quatre étudiants selon une approche agile, avec une mise en commun régulière des avancements. La séparation claire des responsabilités, bot, API REST et frontend, a permis un développement parallèle efficace tout en maintenant la cohérence globale du système.`,
      stakes: `L'enjeu technique principal était d'assurer une communication fiable et réactive entre l'interface web et l'API Discord, avec une architecture suffisamment modulaire pour évoluer facilement. L'enjeu créatif était de proposer une expérience utilisateur originale et immersive, réellement différente des outils de gestion Discord classiques.`,
      risks: `L'**API Discord** est une dépendance externe qu'on ne contrôle pas : une modification côté Discord pouvait rendre notre bot inutilisable du jour au lendemain, et ça nous est arrivé une fois en cours de développement. La synchronisation en temps réel entre le bot et l'interface web était aussi techniquement fragile, on avait sous-estimé la complexité de garder les deux côtés cohérents, et c'était un risque réel de stabilité qu'on a senti en fin de projet. Pour nous personnellement, le risque était que l'idée créative, simuler un OS entier, soit jugée trop folle et nuise à la perception technique du projet. Dans un contexte académique, proposer quelque chose d'aussi atypique, c'est un pari.`,
      results: `D3 a abouti à une plateforme fonctionnelle réunissant bot **Discord** et interface web simulant un OS, permettant une administration complète d'un serveur Discord depuis un environnement inédit. Le projet a été salué pour son originalité et la qualité de son architecture modulaire. Pour moi, c'est le projet qui m'a le plus appris sur la conception d'une **API REST** from scratch avec **Node.js** et **Express**, et sur l'importance des choix d'architecture dès le départ d'un projet.`,
      lendemains: `La présentation du projet a bien marqué les esprits pour son originalité, c'était clairement l'un des projets les plus créatifs de la promo cette année-là. Avec le recul, D3 a installé en moi un réflexe que j'ai encore aujourd'hui : questionner le parti pris d'une interface avant de la faire classique par défaut. Le projet n'est plus maintenu, c'était un projet scolaire, mais les compétences en conception d'API REST que j'y ai développées sont directement celles que j'utilise en entreprise au quotidien.`,
      regardCritique: `Le vrai point fort de D3 c'était l'idée de départ, et c'est quelque chose dont je suis assez fier parce que dans un contexte académique où beaucoup de projets se ressemblent, proposer quelque chose d'aussi différent c'est rare. Là où on aurait pu faire mieux, c'est sur la synchronisation en temps réel entre le bot et l'interface web : on avait sous-estimé la complexité de garder les deux côtés cohérents en permanence, et c'était parfois fragile. Ce que j'en retiens : une bonne idée créative sans une architecture solide derrière, ça tient pas longtemps.`,
      techStack: ['Node.js', 'Vue.js', 'Express', 'API Rest', 'Git', 'Algorithmique'],
      competences: ['api-rest', 'git', 'algorithmique', 'agilite', 'travail-equipe', 'adaptabilite', 'creativite']
    },
    {
      id: 'jeu-2d-runner',
      title: 'Jeu Runner 2D avec éditeur de niveaux en Java',
      shortTitle: 'Runner 2D Java',
      emoji: '🎮',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M11.915 0 11.7.215C9.515 2.4 7.47 6.39 6.046 10.483c-1.064 1.024-3.633 2.81-3.711 3.551-.093.87 1.746 2.611 1.55 3.235-.198.625-1.304 1.408-1.014 1.939.1.188.823.011 1.277-.491a13.389 13.389 0 0 0-.017 2.14c.076.906.27 1.668.643 2.232.372.563.956.911 1.667.911.397 0 .727-.114 1.024-.264.298-.149.571-.33.91-.5.68-.34 1.634-.666 3.53-.604 1.903.062 2.872.39 3.559.704.687.314 1.15.664 1.925.664.767 0 1.395-.336 1.807-.9.412-.563.631-1.33.72-2.24.06-.623.055-1.32 0-2.066.454.45 1.117.604 1.213.424.29-.53-.816-1.314-1.013-1.937-.198-.624 1.642-2.366 1.549-3.236-.08-.748-2.707-2.568-3.748-3.586C16.428 6.374 14.308 2.394 12.13.215zm.175 6.038a2.95 2.95 0 0 1 2.943 2.942 2.95 2.95 0 0 1-2.943 2.943A2.95 2.95 0 0 1 9.148 8.98a2.95 2.95 0 0 1 2.942-2.942zM8.685 7.983a3.515 3.515 0 0 0-.145.997c0 1.951 1.6 3.55 3.55 3.55 1.95 0 3.55-1.598 3.55-3.55 0-.329-.046-.648-.132-.951.334.095.64.208.915.336a42.699 42.699 0 0 1 2.042 5.829c.678 2.545 1.01 4.92.846 6.607-.082.844-.29 1.51-.606 1.94-.315.431-.713.651-1.315.651-.593 0-.932-.27-1.673-.61-.741-.338-1.825-.694-3.792-.758-1.974-.064-3.073.293-3.821.669-.375.188-.659.373-.911.5s-.466.2-.752.2c-.53 0-.876-.209-1.16-.64-.285-.43-.474-1.101-.545-1.948-.141-1.693.176-4.069.823-6.614a43.155 43.155 0 0 1 1.934-5.783c.348-.167.749-.31 1.192-.425zm-3.382 4.362a.216.216 0 0 1 .13.031c-.166.56-.323 1.116-.463 1.665a33.849 33.849 0 0 0-.547 2.555 3.9 3.9 0 0 0-.2-.39c-.58-1.012-.914-1.642-1.16-2.08.315-.24 1.679-1.755 2.24-1.781zm13.394.01c.562.027 1.926 1.543 2.24 1.783-.246.438-.58 1.068-1.16 2.08a4.428 4.428 0 0 0-.163.309 32.354 32.354 0 0 0-.562-2.49 40.579 40.579 0 0 0-.482-1.652.216.216 0 0 1 .127-.03z"/></svg>',
      color: '#F59E0B',
      colorLight: '#FEF3C7',
      type: 'esiea',
      period: '2022 – 2023',
      coverGradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
      shortDescription: `Jeu de type runner 2D développé en Java avec JavaFX, intégrant un moteur physique maison et un éditeur de niveaux complet avec export JSON.`,
      context: `**C2** est un projet étudiant réalisé en équipe de quatre personnes au semestre 3 de ma formation à l'ESIEA. L'objectif pédagogique était de concevoir un jeu vidéo complet en **Java**, en maîtrisant les fondamentaux de la programmation orientée objet, de l'architecture logicielle et des mécaniques de jeu vidéo, sans s'appuyer sur un moteur de jeu existant.`,
      objective: `Concevoir un runner 2D en **Java** avec **JavaFX**, proposant une expérience de jeu fluide et un éditeur de niveaux permettant aux joueurs de créer et exporter leurs propres cartes en **JSON**. Le jeu devait intégrer un moteur physique maison, un système de score, des effets sonores et une interface utilisateur complète.`,
      actions: [
        `Développement du moteur physique du jeu : gestion de la gravité, des sauts, de la détection de collisions et des animations de mort (effet "ragdoll").`,
        `Conception du système de progression, de score et de la caméra dynamique suivant le joueur.`,
        `Développement de l'interface utilisateur complète : menus principaux, écran de pause, victoire, et éditeur de niveaux visuel avec support du test immédiat des cartes créées.`,
        `Mise en place d'un EventBus pour découpler les événements du jeu (pause, mort, collisions) et garantir un gameplay fluide et modulaire.`
      ],
      team: `Projet collaboratif en équipe de quatre étudiants à l'ESIEA, structuré autour d'une architecture MVC pour séparer clairement les responsabilités (modèle, vue, contrôleur). Le projet a été présenté lors des TechDays de l'ESIEA.`,
      stakes: `L'enjeu technique était de maîtriser la conception d'un moteur de jeu 2D from scratch en Java, sans framework dédié, tout en livrant une expérience jouable et agréable. L'enjeu pédagogique était d'appliquer concrètement les principes d'architecture logicielle, MVC, EventBus, gestion des ressources, sur un projet ambitieux et ludique.`,
      risks: `Concevoir un moteur physique maison sans framework dédié, c'est s'exposer à des bugs de collision ou de physique très difficiles à reproduire et à déboguer. Le risque pour le rendu était concret : si le jeu crashait ou devenait injouable pendant la présentation aux TechDays, c'était visible devant tout le monde. Côté scope, le plus grand danger c'était de mal estimer le temps : un jeu complet avec moteur physique, éditeur de niveaux, effets sonores et interface en un semestre, c'est serré. On a failli rogner sur l'éditeur de niveaux pour tenir les délais, et on a dû faire des choix sur ce qu'on sacrifiait pour livrer quelque chose de stable.`,
      results: `C2 est un jeu runner 2D complet et jouable en **Java** / **JavaFX**, avec un gameplay fluide, des effets sonores personnalisés, des animations et un éditeur de niveaux fonctionnel permettant l'export en **JSON**. Le projet a été présenté avec succès aux TechDays de l'ESIEA. Pour moi, ce projet a été le premier où j'ai vraiment compris ce que ça voulait dire de concevoir une architecture logicielle propre : l'**EventBus**, le **MVC**, les responsabilités bien séparées, c'est là que ces concepts sont passés de théoriques à concrets.`,
      lendemains: `La présentation aux TechDays s'est très bien passée, et voir des gens jouer à notre jeu sur place c'était une satisfaction assez particulière pour un projet de cours. Dans les semaines qui ont suivi, j'ai réalisé à quel point le travail sur la physique et les collisions m'avait donné des réflexes très différents de ceux qu'on développe en faisant du web. Aujourd'hui, les patterns MVC et EventBus que j'ai utilisés sur C2 sont directement ceux que je retrouve dans Spring Boot et Angular, juste avec des noms différents.`,
      regardCritique: `Ce que j'ai apporté sur ce projet c'était principalement le moteur physique et l'interface utilisateur, deux parties qui demandaient de la précision et du débogage patient. On a livré quelque chose de complet et jouable, dont je suis fier. Ce qu'on aurait pu mieux faire : tester le jeu avec de vrais joueurs avant la présentation plutôt qu'entre nous, parce qu'on avait des angles morts sur la difficulté et certains bugs qu'on ne voyait plus à force de jouer. Ce projet m'a appris qu'un code qui compile et fonctionne pour le développeur, c'est pas la même chose qu'un produit vraiment fini.`,
      techStack: ['Java', 'JavaFX', 'Architecture MVC', 'Algorithmique', 'Git'],
      competences: ['algorithmique', 'git', 'agilite', 'travail-equipe', 'adaptabilite', 'creativite']
    },
    {
      id: 'dessin-vivant',
      title: `Événement "Dessin Vivant"`,
      shortTitle: 'Dessin Vivant',
      emoji: '🎨',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M2.909 13.436C2.914 7.61 7.642 2.893 13.468 2.898c5.576.005 10.137 4.339 10.51 9.819q.021-.351.022-.706C24.007 5.385 18.64.006 12.012 0S.007 5.36 0 11.988 5.36 23.994 11.988 24q.412 0 .815-.027c-5.526-.338-9.9-4.928-9.894-10.538Zm16.284.155a4.1 4.1 0 0 1-4.095-4.103 4.1 4.1 0 0 1 2.712-3.855 8.95 8.95 0 0 0-4.187-1.037 9.007 9.007 0 1 0 8.997 9.016q-.001-.847-.15-1.651a4.1 4.1 0 0 1-3.278 1.63Z"/></svg>',
      color: '#F97316',
      colorLight: '#FFF3E0',
      type: 'evenement',
      period: '2023',
      coverGradient: 'linear-gradient(135deg, #F97316 0%, #FACC15 100%)',
      shortDescription: `Organisation d'un événement culturel autour de l'animation japonaise à l'ESIEA : projections d'animés, buffet asiatique et partenariats étudiants.`,
      context: `Dessin Vivant est un projet événementiel co-organisé avec un camarade dans le cadre du Projet de Formation Humaine (PFH) du semestre 4 à l'ESIEA. L'idée est née de notre envie de proposer quelque chose de différent : un événement culturel autour de l'animation japonaise, mêlant projections d'animés sélectionnés par sondage et dégustation de plats asiatiques, dans une atmosphère conviviale et accessible à tous les étudiants.`,
      objective: `Créer un événement culturel immersif autour de la culture japonaise au sein de l'école, en transformant cinq salles en espaces de visionnage thématiques et en proposant un buffet japonais et chinois en partenariat avec un fournisseur local. L'objectif était de réunir 50 participants dans un cadre unique, à mi-chemin entre soirée cinéma et découverte culturelle.`,
      actions: [
        `Analyse du projet par une méthodologie SMART et une étude SWOT, avec plans de gestion des risques (panne matériel, affluence insuffisante, etc.).`,
        `Création de l'identité visuelle de l'événement sur **Canva** (logo, affiches, flyers) et déploiement d'une campagne de communication multicanale (**Instagram**, mails, affichage physique).`,
        `Mise en place de partenariats avec le "Club Anime" (prêt de comptes streaming) et l'évènement "In'Con" (promotion croisée), et coordination avec le restaurant "Lucky Box" pour le buffet à prix abordables.`,
        `Organisation logistique le jour J : répartition des bénévoles, gestion du buffet et suivi des diffusions simultanées sur les cinq salles.`
      ],
      team: `Projet organisé en binôme avec un camarade, avec une répartition naturelle des rôles : je me suis concentré sur la création des visuels et la communication digitale, tandis qu'il prenait en charge les relations partenaires et la coordination logistique. Cette complémentarité a été un facteur clé du bon déroulement de l'événement.`,
      stakes: `Au-delà du défi organisationnel, l'événement représentait un enjeu humain fort : offrir une expérience culturelle authentique à nos camarades. La gestion des partenariats, du budget et de la logistique en totale autonomie nous a confrontés à des responsabilités réelles de chefs de projet, avec de véritables contraintes à gérer (matériel, fournisseurs, communication).`,
      risks: `Les risques étaient surtout logistiques et humains. Côté participants, une faible affluence aurait directement mis en péril la viabilité de l'événement et sa note, c'était notre critère de réussite le plus exposé et le moins maîtrisable. On dépendait aussi de partenaires extérieurs, le restaurant Lucky Box, les comptes streaming du Club Anime, dont le désistement de dernière minute aurait été difficile à compenser avec notre budget. Pour nous deux, il y avait également un risque financier réel : en cas de dépassement, on aurait dû assumer personnellement la différence. C'est ce qui m'a appris à vraiment anticiper les risques en amont d'un projet, pas juste à les lister dans un tableau SWOT.`,
      results: `L'événement a réuni 47 participants sur les 50 attendus, validant l'ensemble de notre stratégie de communication et d'organisation. Les retours des participants ont été très positifs, soulignant la qualité de l'ambiance et de l'organisation. Le projet a été reconnu comme une réussite par notre équipe pédagogique. Pour moi, c'est la première fois que je gérais un projet de bout en bout avec de vraies contraintes externes : un budget, des partenaires, une date fixe, des personnes qui comptaient sur nous. Très différent des projets techniques, et clairement formateur sur tout ce qui touche à la coordination et à la communication.`,
      lendemains: `Le lendemain de l'événement, les retours des participants étaient vraiment positifs, ce qui a validé les choix qu'on avait faits sur la communication et la sélection des animés. Dans les semaines qui ont suivi, j'ai pu réinvestir les compétences visuelles développées pour cet événement, notamment dans la création de supports pour d'autres projets scolaires. Aujourd'hui, ce que je retiens surtout de Dessin Vivant c'est que j'ai une vraie capacité à m'impliquer sur des projets non-techniques, et que la créativité graphique mobilisée ici continue de teinter ma façon d'aborder les interfaces et la communication visuelle en général.`,
      regardCritique: `Ma valeur ajoutée principale sur cet événement c'est clairement la dimension visuelle : l'identité graphique que j'ai créée a donné une vraie cohérence à la communication, et ça s'est ressenti dans l'attractivité auprès des étudiants. Ce qu'on aurait pu améliorer, c'est l'estimation du temps que prennent les tâches non-techniques : on a sous-estimé le temps de relance des partenaires et la coordination logistique, ce qui a créé quelques tensions la semaine avant l'événement. L'enseignement que j'en retire : même dans un projet créatif, la gestion de planning et l'anticipation des délais, c'est ce qui fait la différence entre un projet qui se passe bien et un projet qui se passe bien malgré tout.`,
      techStack: [],
      competences: ['travail-equipe', 'adaptabilite', 'creativite']
    }
  ];

  readonly experiences: Experience[] = [
    {
      id: 'alternance-2024',
      company: 'Aubay',
      role: `Développeur Full-Stack - Alternance`,
      period: 'Sept. 2024 - Juil. 2026',
      type: 'alternance',
      description: `Participation active à la maintenance corrective et évolutive de FabTools, application web interne de gestion du recrutement de stagiaires et alternants. Développement de nouvelles fonctionnalités sur le backend Java Spring et le frontend Angular, résolution d'anomalies critiques et collaboration étroite avec les équipes RH, campus managers et recruteurs pour faire évoluer l'outil selon leurs besoins métiers.`,
      location: 'Paris',
      tags: ['Java Spring', 'Angular', 'Git', 'CI/CD', 'Agile'],
      details: `La CodeFactory d'Aubay est une structure dédiée à la montée en compétences des alternants et stagiaires sur des projets web réels pour des clients internes. J'y travaille au sein d'une équipe agile sur des applications métier complexes avec des exigences proches de celles d'un environnement de production : revues de code croisées, pipeline CI/CD Jenkins/SonarQube, respect des bonnes pratiques et livraisons régulières. Cette immersion professionnelle m'a permis de développer une vraie maîtrise des environnements de développement modernes.`,
      relatedRealisations: ['m-a-web'],
      relatedCompetences: ['java-spring', 'angular', 'git', 'cicd', 'api-rest', 'algorithmique', 'agilite', 'travail-equipe', 'adaptabilite'],
      logoUrl: 'logos/aubay.png',
      websiteUrl: 'https://aubay.com/'
    },
    {
      id: 'formation-esiea',
      company: 'ESIEA',
      role: `Étudiant Mastère Expert Ingénierie de l'IA et des Applications`,
      period: 'Sept. 2024 - Juil. 2026',
      type: 'formation',
      description: `Mastère Expert Bac+5 en Ingénierie de l'Intelligence Artificielle et des Applications (titre RNCP niveau 7), en 100% alternance et distanciel. Formation aux architectures logicielles avancées, au Machine Learning, au DevOps, à la sécurité et au développement full-stack.`,
      location: 'Distanciel',
      tags: ['Java Spring', 'Angular', 'Python', 'Machine Learning', 'DevOps', 'Architecture'],
      details: `L'ESIEA est une école d'ingénieurs reconnue dont la pédagogie s'appuie sur des projets pratiques en groupe et sur l'alternance en entreprise. Ce Mastère Expert 100% distanciel m'a appris à m'organiser de manière autonome tout en progressant sur des sujets avancés : intelligence artificielle, architectures distribuées, DevOps et sécurité. Le format alternance permet une mise en pratique immédiate des concepts abordés en cours, dans un contexte professionnel réel.`,
      relatedRealisations: [],
      relatedCompetences: ['java-spring', 'api-rest', 'git', 'cicd', 'algorithmique', 'agilite', 'travail-equipe', 'adaptabilite', 'creativite'],
      logoUrl: 'logos/esiea.png',
      websiteUrl: 'https://www.esiea.fr'
    },
    {
      id: 'stage-aubay',
      company: 'Aubay',
      role: `Développeur Full-Stack - Stagiaire`,
      period: 'Févr. 2024 - Juil. 2024',
      type: 'stage',
      description: `Stage de 6 mois au sein du pôle DSIE (Direction Systèmes d'Information Études) d'Aubay. Travail sur la modernisation des applications internes. Migration Java 11 vers Java 17, maintenance et ajout de fonctionnalités, résolution de vulnérabilités de sécurité détectées par notre pipeline CI/CD.`,
      location: 'Paris',
      tags: ['Java Spring', 'Microsoft Entra', 'LDAP', 'API REST', 'GitLab CI/CD', 'Sécurité'],
      details: `Aubay est une entreprise de services numériques (ESN) spécialisée dans l'accompagnement de grandes entreprises dans leur transformation digitale. La DSIE (Direction Systèmes d'Information Études) est le pôle interne en charge des outils informatiques de l'entreprise. Ce stage m'a permis de découvrir le monde professionnel dans un contexte de code legacy avec de vraies contraintes de compatibilité, de sécurité et de performance, très différentes des projets académiques.`,
      relatedRealisations: ['m-a-web'],
      relatedCompetences: ['java-spring', 'git', 'cicd', 'api-rest', 'travail-equipe', 'adaptabilite'],
      logoUrl: 'logos/aubay.png',
      websiteUrl: 'https://aubay.com/'
    },
    {
      id: 'formation-bachelor',
      company: 'ESIEA',
      role: `Étudiant Concepteur Développeur d'applications`,
      period: 'Sept. 2021 - Juil. 2024',
      type: 'formation',
      description: `Bachelor Bac+3 en développement logiciel à l'ESIEA (titre RNCP niveau 6). Formation aux langages de programmation, au développement web et mobile, aux bases de données et aux méthodes agiles.`,
      location: 'Ivry-sur-Seine',
      tags: ['Java', 'JavaScript', 'C#', 'Unity', 'VueJs', 'SQL', 'Agile'],
      details: `L'ESIEA propose un Bachelor en développement logiciel centré sur la pratique par projets. Chaque semestre est rythmé par un projet de groupe ambitieux, confrontant les étudiants à des problématiques concrètes de développement et les formant à travailler en équipe dans un cadre agile. Cette approche pédagogique par le concret m'a donné de solides bases techniques et humaines avant d'entrer dans le monde professionnel.`,
      relatedRealisations: ['simulateur-darwinien', 'bot-discord', 'jeu-2d-runner', 'dessin-vivant'],
      relatedCompetences: ['algorithmique', 'git', 'agilite', 'travail-equipe', 'adaptabilite', 'creativite'],
      logoUrl: 'logos/esiea.png',
      websiteUrl: 'https://www.esiea.fr'
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