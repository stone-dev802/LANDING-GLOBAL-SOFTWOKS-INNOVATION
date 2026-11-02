export const companyInfo = {
  name: "GLOBAL Softworks INNOVATION",
  shortName: "GSI",
  slogan: "Innover • Développer • Sécuriser • Ensemble",
  tagline: "Des solutions numériques sur mesure pour un avenir plus connecté",
  description:
    "Global Softworks Innovation est une équipe de passionnés en technologie, spécialisée dans le développement logiciel, les réseaux, la cybersécurité et le déploiement d'applications. Nous aidons les entreprises et les organisations à innover, se protéger et performer dans le digital.",
  phone: "+237 691 862 447 / +237 670 092 318",
  whatsapp: "237691862447",
  email: "thomyashton@gmail.com",
  displayEmail: "contact@globalsoftworks-innovation.com",
  address: "Yaoundé, Cameroun",
  hours: "Lun - Ven : 8h - 18h",
  stats: [
    { value: "7+",    label: "Années d'expérience",     icon: "Award" },
    { value: "50+",   label: "Projets réalisés",         icon: "CheckCircle" },
    { value: "100%",  label: "Satisfaction client",      icon: "Smile" },
    { value: "30+",   label: "Partenaires & Clients",    icon: "Users" },
  ],
};

/* ─── HERO PILLARS ─────────────────────────────────────────────────── */
export const heroPillars = [
  { title: "Innovation continue",       desc: "Veille technologique permanente" },
  { title: "Experts qualifiés",         desc: "Ingénieurs certifiés & séniors"  },
  { title: "Solutions sur mesure",      desc: "Conçues pour vos contraintes"    },
  { title: "Accompagnement 24/7",       desc: "Support & suivi réactif"         },
];

/* ─── SERVICES ─────────────────────────────────────────────────────── */
export const servicesData = [
  {
    id: "dev-logiciel",
    icon: "Code2",
    title: "Développement Logiciel",
    shortDesc: "Applications web, mobiles, desktop et solutions sur mesure adaptées à vos objectifs métier.",
    fullDesc: "Nous concevons des logiciels robustes, évolutifs et sécurisés. Du MVP agile au système d'entreprise complexe, nous maîtrisons l'ensemble de la chaîne de développement avec les technologies les plus modernes.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    features: [
      "Applications Web modernes (React, Next.js, Node.js) — ex : CHRACERH Portal, Global Softworks Platform",
      "Applications Mobiles cross-platform (React Native, Flutter) — ex : AgroLiv, FoodRush",
      "Logiciels de gestion & desktop sur mesure",
      "Conception d'APIs REST & GraphQL",
      "Architecture microservices & scalabilité",
    ],
    badge: "Populaire",
  },
  {
    id: "reseaux",
    icon: "Network",
    title: "Installation Réseau & Infrastructure",
    shortDesc: "Câblage informatique structuré, baies de brassage, fibre optique et configuration d'équipements réseaux.",
    fullDesc: "Une infrastructure réseau performante et certifiée est la colonne vertébrale de votre productivité. Nos spécialistes réalisent l'installation complète de réseaux informatiques (cuivre et fibre optique), la pose et le raccordement de baies de brassage, la configuration des équipements actifs (Cisco, MikroTik) et l'administration système pour une connectivité continue et sans faille.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    features: [
      "Installation de réseaux locaux (LAN/WLAN) & câblage informatique cat 6/6A/7",
      "Pose, organisation & raccordement de baies de brassage et armoires réseau",
      "Déploiement de fibre optique & liaisons point-à-point sans fil",
      "Configuration de routeurs, switches manageables & bornes Wi-Fi professionnelles",
      "Administration Windows Server (AD, DNS, DHCP) & interconnexion VPN multi-sites",
    ],
    badge: "Indispensable",
  },
  {
    id: "videosurveillance",
    icon: "Camera",
    title: "Installation Caméras & Vidéosurveillance",
    shortDesc: "Pose de caméras IP/HD, enregistreurs NVR/DVR, vision nocturne et visionnage à distance sur smartphone.",
    fullDesc: "Protégez vos locaux professionnels, commerces, entrepôts et résidences grâce à nos solutions de vidéosurveillance haute définition et sécurité électronique. Nous réalisons l'étude de couverture, le câblage dédié, l'installation de caméras intelligentes et la configuration de l'accès direct en temps réel sur smartphone, tablette et PC.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    features: [
      "Installation de caméras de surveillance IP, dômes, tubes et PTZ (Full HD / 4K)",
      "Configuration d'enregistreurs NVR / DVR & disques durs dédiés surveillance 24/7",
      "Visionnage et alertes en direct sur smartphone (iOS / Android) & PC à distance",
      "Détection intelligente de mouvements, vision nocturne infrarouge & audio bidirectionnel",
      "Contrôle d'accès (biométrie, badges RFID, interphonie) & systèmes anti-intrusion",
    ],
    badge: "Sécurité & Protection",
  },
  {
    id: "cybersecurite",
    icon: "ShieldCheck",
    title: "Cybersécurité",
    shortDesc: "Protection des données, audit de vulnérabilités, pare-feu nouvelle génération.",
    fullDesc: "Protégez votre patrimoine informationnel contre les ransomwares, intrusions et fuites de données. Nos ingénieurs assurent une posture offensive (Red Team / Pentesting) et défensive (Blue Team / SOC Analyst).",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    features: [
      "Tests d'intrusion (Pentesting) & audits de vulnérabilités",
      "Déploiement IDS/IPS (Suricata, Snort) & analyse réseau temps réel",
      "Cyber Range : simulation Kill Chain complète (Red Team & Blue Team)",
      "Pare-feu nouvelle génération (NGFW) & politiques de sauvegarde immuables",
      "Conformité RGPD, protection des données & réponse aux incidents (SOC)",
    ],
    badge: "Sécurité Maximale",
  },
  {
    id: "cloud",
    icon: "Cloud",
    title: "Cloud & Hébergement",
    shortDesc: "Migration cloud, serveurs dédiés et gestion haute disponibilité de vos applications.",
    fullDesc: "Accélérez votre transition vers le cloud pour bénéficier d'agilité totale et de coûts maîtrisés. Nous déployons et gérons vos environnements conteneurisés avec Docker et Kubernetes.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    features: [
      "Migration vers AWS, Azure et GCP",
      "Conteneurisation Docker & orchestration Kubernetes",
      "Serveurs dédiés et VPS infogérés",
      "Sauvegardes automatiques redondantes & SLA 99.9%",
      "Configuration CDN mondial & monitoring applicatif",
    ],
    badge: "Haute Dispo",
  },
  {
    id: "devops",
    icon: "Rocket",
    title: "Déploiement d'Applications",
    shortDesc: "Mise en production sécurisée, pipelines CI/CD et supervision proactive continue.",
    fullDesc: "Réduisez vos temps de mise sur le marché grâce à des pipelines de déploiement automatisés.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    features: [
      "Pipelines CI/CD (GitHub Actions, GitLab CI)",
      "Conteneurisation Docker & orchestration Kubernetes",
      "Déploiements sans interruption (Blue-Green)",
      "Monitoring d'erreurs en temps réel",
      "Maintenance corrective & préventive",
    ],
    badge: "DevOps",
  },
  {
    id: "ia-agents",
    icon: "Cpu",
    title: "IA & Agents Autonomes",
    shortDesc: "Chatbots sur mesure, agents intelligents et automatisation avancée des processus.",
    fullDesc: "Mettez la puissance des modèles IA de dernière génération au service de votre activité. De la génération de leads à l'automatisation des processus métier, nos agents travaillent 24/7 pour vous.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    features: [
      "Agents IA autonomes de prospection & qualification de leads — ex : Hermès Agent (+250% leads qualifiés)",
      "Automatisation des flux de travail (RPA) & traitement de documents (OCR)",
      "Intégration d'API LLM (OpenAI, Gemini, Anthropic)",
      "Assistants conversationnels personnalisés & support client 24/7",
      "Analyse prédictive, aide à la décision & reporting intelligent",
    ],
    badge: "Innovation Phare",
  },
  {
    id: "solutions-business",
    icon: "BarChart3",
    title: "Solutions Business",
    shortDesc: "ERP, CRM, gestion commerciale et outils d'optimisation de la productivité.",
    fullDesc: "Centralisez vos opérations commerciales, stocks, facturation et relations clients dans une plateforme unifiée. Nous intégrons des ERP reconnus ou développons des solutions sectorielles sur mesure.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: [
      "Intégration ERP (Odoo, Dolibarr) & CRM sur mesure pour le suivi commercial",
      "Portails métier sectoriels — ex : santé, agriculture (AgroLiv), restauration (FoodRush)",
      "Gestion des stocks, facturation & reporting en temps réel",
      "Tableaux de bord analytiques & aide à la décision",
      "Passerelles de paiement (Mobile Money, Orange Money, Carte bancaire)",
    ],
    badge: "Productivité",
  },
  {
    id: "maintenance-it",
    icon: "Wrench",
    title: "Maintenance & Support IT",
    shortDesc: "Dépannage, maintenance préventive et support technique pour vos parcs informatiques.",
    fullDesc: "Depuis 2020, nos techniciens assurent la disponibilité et la performance de vos équipements informatiques. Intervention rapide, maintenance préventive et curative, installation et durcissement des systèmes d'exploitation.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
    features: [
      "Maintenance préventive & curative des postes de travail (Windows & Linux)",
      "Installation & durcissement des systèmes d'exploitation",
      "Déploiement de logiciels métier & antivirus d'entreprise",
      "Support utilisateur & assistance à distance",
      "Gestion de parc informatique (inventaire, mises à jour, licences)",
    ],
    badge: "Support Actif",
  },
  {
    id: "formation",
    icon: "GraduationCap",
    title: "Formation & Conseil",
    shortDesc: "Accompagnement stratégique, audit de vos systèmes et transfert de compétences.",
    fullDesc: "Montez en compétences et faites les bons choix technologiques grâce à nos consultants.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    features: [
      "Formations pratiques (Dev, DevOps, Réseau, Sécurité)",
      "Audit stratégique du système d'information",
      "Schéma directeur informatique",
      "Coaching technique des équipes",
      "Assistance à maîtrise d'ouvrage (AMOA)",
    ],
    badge: "Expertise",
  },
];

/* ─── PROCESS STEPS ────────────────────────────────────────────────── */
export const processSteps = [
  {
    number: "01",
    icon: "Lightbulb",
    title: "Écoute & Analyse",
    description: "Nous échangeons pour comprendre vos besoins, objectifs commerciaux et contraintes techniques.",
  },
  {
    number: "02",
    icon: "FileCheck",
    title: "Proposition sur mesure",
    description: "Cahier des charges précis, architecture technique claire et devis transparent sans surprise.",
  },
  {
    number: "03",
    icon: "Code2",
    title: "Développement & Tests",
    description: "Nos équipes codent votre solution avec démonstrations régulières et tests d'assurance qualité.",
  },
  {
    number: "04",
    icon: "Rocket",
    title: "Livraison & Support",
    description: "Mise en production sereine, formation de vos équipes et accompagnement continu.",
  },
];

/* ─── PORTFOLIO ────────────────────────────────────────────────────── */
export const portfolioProjects = [
  {
    id: 1,
    title: "Data Lineage — Afriland First Bank",
    category: "Web",
    tags: ["Data Lineage", "Banque & Finance", "Big Data", "Sécurité Bancaire", "Gouvernance des Données"],
    description: "Conception et mise en place d'une application permettant de gérer et de suivre un grand volume de données au sein d'Afriland First Bank. Traçabilité de bout en bout des flux financiers, cartographie du cycle de vie des données et conformité bancaire stricte.",
    impact: "Traçabilité & gouvernance critique pour Afriland First Bank",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    status: "En production",
    client: "Afriland First Bank",
    year: "2024",
    role: "Architecture logicielle, Pipeline de données & Sécurité",
    challenge: "Traitement et audit de volumes massifs d'opérations bancaires hétérogènes nécessitant une conformité réglementaire absolue et un temps de traçabilité quasi instantané.",
    solution: "Mise en place d'une cartographie dynamique des flux de données avec métadonnées enrichies, tableaux de bord de lignage et contrôles automatisés de l'intégrité.",
    results: [
      "Visibilité totale sur le cycle de vie de chaque transaction",
      "Auditabilité bancaire immédiate conforme aux normes",
      "Réduction majeure du temps de diagnostic des anomalies financières"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1000&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80"
    ]
  },
  {
    id: 2,
    title: "TurnerMarket",
    category: "Mobile",
    tags: ["React Native", "Google Play Store", "Marketplace", "E-learning", "Mobile Money"],
    description: "Application mobile de marketplace permettant aux utilisateurs de créer, publier et vendre leurs formations en ligne en toute simplicité. Système de paiement intégré, lecture multimédia fluide et gestion des apprenants. Disponible sur Google Play Store.",
    impact: "Disponible sur Google Play Store & monétisation active",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    status: "Sur Play Store",
    client: "Turner EdTech",
    year: "2023 - 2024",
    role: "Développement Mobile Fullstack & Intégration Paiements",
    challenge: "Offrir une expérience d'apprentissage fluide sur mobile sous faible bande passante tout en garantissant des transactions Mobile Money rapides et sécurisées.",
    solution: "Architecture React Native optimisée avec mise en cache des vidéos/ressources, passerelle de paiement Mobile Money résiliente et tableau de bord formateur intuitif.",
    results: [
      "Publication officielle sur le Google Play Store",
      "Gestion complète du catalogue de cours et streaming vidéo optimisé",
      "Paiements instantanés par Mobile Money & cartes bancaires"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=80"
    ]
  },
  {
    id: 3,
    title: "Gescam - Gestion Universitaire",
    category: "Web",
    tags: ["React", "Node.js / PHP", "ERP Éducation", "Gestion Académique", "Bases de Données"],
    description: "Application web de gestion universitaire complète destinée à faciliter le pilotage d'une université : inscriptions administratives, scolarité, gestion des cursus et emplois du temps, relevés de notes et portail sécurisé pour étudiants et enseignants.",
    impact: "Digitalisation intégrale des processus académiques",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    status: "Déployé",
    client: "Établissements d'Enseignement Supérieur",
    year: "2023",
    role: "Conception logicielle, Développement Web & Base de Données",
    challenge: "Remplacer des processus papiers dispersés par une plateforme centralisée accessible par des milliers d'étudiants simultanément lors des examens et rentrées.",
    solution: "Déploiement d'une application web modulaire avec portails dédiés (Administration, Enseignants, Étudiants), génération automatisée des bulletins et suivi des frais.",
    results: [
      "Zéro perte de données scolaires et temps d'inscription divisé par 4",
      "Consultation instantanée des notes et emplois du temps en ligne",
      "Automatisation des attestations et relevés académiques"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=80"
    ]
  },
  {
    id: 4,
    title: "Gestion des Emprunts & Assistante IA",
    category: "Web",
    tags: ["Gestion Financière", "Assistante IA", "Chatbot / NLP", "Automatisation", "React"],
    description: "Application web de gestion et suivi des emprunts intégrant une assistante conversationnelle automatisée pour guider les utilisateurs, calculer les échéances en temps réel, notifier les remboursements et automatiser le support 24/7.",
    impact: "Suivi automatisé & assistance conversationnelle 24/7",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    status: "En production",
    client: "Organisme de Crédit / Microfinance",
    year: "2024",
    role: "Développement Frontend, Intégration LLM & Moteur de Calcul",
    challenge: "Réduire les retards d'échéances et le temps passé par les gestionnaires de crédit à répondre aux interrogations récurrentes des emprunteurs.",
    solution: "Plateforme web combinant un tableau d'amortissement interactif et un agent conversationnel entraîné sur les conditions contractuelles pour des réponses instantanées.",
    results: [
      "Support emprunteur disponible 24h/24 sans délai d'attente",
      "Alertes automatiques avant échéances réduisant significativement les impayés",
      "Calculatrice d'emprunt et simulation de remboursement en temps réel"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1000&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1000&q=80",
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1000&q=80"
    ]
  },
  {
    id: 5,
    title: "Hermès Agent - IA Autonome de Leads",
    category: "IA & Agents",
    tags: ["Hermès Agent", "Agent IA Autonome", "Génération de Leads", "Automatisation", "LLM"],
    description: "Configuration & déploiement d'un agent IA autonome (Hermès Agent) dédié à la prospection ciblée, la qualification automatique et l'optimisation continue de la génération de leads B2B.",
    impact: "+250% d'opportunités qualifiées générées",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    status: "En production",
    client: "Global Softworks & Entreprises Partenaires",
    year: "2024",
    role: "Conception de l'agent IA, Intégration API LLM & Scraping éthique",
    challenge: "Automatiser la prospection commerciale fastidieuse tout en maintenant une ultra-personnalisation dans les messages de prise de contact.",
    solution: "Déploiement d'Hermès Agent avec moteur d'analyse des besoins prospects, qualification selon matrice BANT et intégration directe dans le CRM.",
    results: [
      "Hausse de 250% des leads qualifiés générés par mois",
      "Zéro intervention humaine requise sur la phase d'accroche initiale",
      "Taux de réponse commerciale multiplié par 3"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1000&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80"
    ]
  },
  {
    id: 6,
    title: "Cyber Range - Simulation Kill Chain",
    category: "Cybersécurité",
    tags: ["Cyber Range", "Kill Chain", "Pentesting", "Red Team", "Blue Team", "Simulation"],
    description: "Conception et déploiement d'un Cyber Range pour la simulation d'une kill chain d'attaque complète (reconnaissance, exploitation, escalade de privilèges, persistance, exfiltration) pour l'évaluation tactique et la défense.",
    impact: "Simulation réaliste d'attaques complexes",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    status: "Réalisé",
    client: "Environnement d'entraînement & Audit Sécurité",
    year: "2024",
    role: "Architecture de test, Simulation Offensive (Red) & Défensive (Blue)",
    challenge: "Fournir un banc d'essai sécurisé et isolé pour évaluer la résistance d'infrastructures réelles face à des attaques cyber sophistiquées.",
    solution: "Mise en place d'un réseau virtualisé scénarisant chaque phase de la cyber kill chain avec instrumentation de surveillance et journaux d'audit.",
    results: [
      "Cartographie précise des vulnérabilités critiques avant mise en prod",
      "Élaboration de guides de remédiation et durcissement des systèmes",
      "Formation pratique des équipes de défense face aux cyberattaques"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&q=80"
    ]
  },
  {
    id: 7,
    title: "Détection d'Intrusion (IDS Suricata)",
    category: "Cybersécurité",
    tags: ["Suricata", "IDS / IPS", "Analyse Réseau", "Détection Menaces", "SIEM"],
    description: "Déploiement d'un système de détection d'intrusion (IDS) avec Suricata. Analyse temps réel des flux réseau, surveillance des paquets suspects et génération d'alertes défensives automatiques.",
    impact: "Surveillance proactive & alertes temps réel",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    status: "Opérationnel",
    client: "Infrastructures d'Entreprise Protégées",
    year: "2023 - 2024",
    role: "Ingénierie Sécurité Réseau & Configuration SIEM",
    challenge: "Détecter les anomalies et tentatives d'intrusion périmétrique sans ralentir les débits réseaux des utilisateurs en interne.",
    solution: "Installation et réglage fin du moteur Suricata en écoute passive avec règles personnalisées et centralisation des alertes de sécurité.",
    results: [
      "Surveillance continue 24/7 de l'intégralité du trafic réseau entrant/sortant",
      "Alertes instantanées en cas de signature suspecte ou de scan de ports",
      "Visibilité totale sur les flux suspects et blocage proactif"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&q=80"
    ]
  },
  {
    id: 8,
    title: "Réseau d'Entreprise Simulé",
    category: "Réseau & Infra",
    tags: ["Windows Server", "Active Directory", "DNS / DHCP", "GPO", "Sécurité"],
    description: "Mise en place et administration d'une infrastructure réseau d'entreprise complète simulée sous Windows Server avec gestion centralisée des accès, rôles et politiques via Active Directory.",
    impact: "Administration centralisée & haute disponibilité",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    status: "Réalisé",
    client: "PME & Environnement Entreprise",
    year: "2023",
    role: "Administration Systèmes & Réseaux, Contrôleur de Domaine",
    challenge: "Structurer un domaine informatique d'entreprise sécurisé avec gestion granulaire des droits d'accès et continuité de service.",
    solution: "Déploiement sous Windows Server d'Active Directory, paramétrage DNS/DHCP redondant, politiques de groupe (GPO) restrictives et partages sécurisés.",
    results: [
      "Gestion centralisée de l'ensemble des comptes et terminaux du réseau",
      "Application immédiate des règles de sécurité via GPO",
      "Isolation des départements et sauvegarde automatisée des données"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1000&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80"
    ]
  },
  {
    id: 9,
    title: "Maintenance & Dépannage IT (Freelance)",
    category: "Réseau & Infra",
    tags: ["Maintenance IT", "Dépannage", "Windows & Linux", "Support Utilisateur", "Systèmes"],
    description: "Services de technicien informatique indépendant (depuis 2020) : maintenance préventive et curative des postes de travail, installation et durcissement des systèmes d'exploitation Windows et Linux, déploiement de logiciels métier.",
    impact: "+99% de disponibilité des parcs informatiques",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
    status: "Actif (2020 - Présent)",
    client: "Parcs informatiques d'entreprises & Professionnels",
    year: "2020 - Présent",
    role: "Support Technique, Maintenance Préventive & Curative",
    challenge: "Minimiser au maximum les temps d'arrêt des postes et pannes matérielles/logicielles qui impactent l'activité quotidienne des employés.",
    solution: "Plan de maintenance périodique, durcissement antivirus, nettoyage système, dépannage express sur site et téléassistance à distance.",
    results: [
      "Taux de disponibilité des postes maintenus supérieur à 99%",
      "Intervention rapide sur incidents bloquants en moins de 2 heures",
      "Sécurisation des sauvegardes et renouvellement maîtrisé du matériel"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1000&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80"
    ]
  },
  {
    id: 10,
    title: "AgroLiv",
    category: "Mobile",
    tags: ["React Native", "Node.js", "MongoDB"],
    description: "Plateforme mobile de mise en relation directe entre producteurs locaux et acheteurs agricoles.",
    impact: "+40% de revenus directs pour les coopératives",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&q=80",
    status: "En production",
    client: "Coopératives Agricoles & Distributeurs",
    year: "2023 - 2024",
    role: "Conception UI/UX, Développement Mobile React Native & Backend API",
    challenge: "Supprimer les intermédiaires abusifs dans la chaîne de distribution agricole et permettre aux producteurs ruraux de vendre directement à juste prix.",
    solution: "Application mobile intuitive intégrant le référencement des récoltes en temps réel, la commande directe et la gestion logistique des livraisons.",
    results: [
      "Augmentation constatée de +40% des revenus directs des coopératives",
      "Interface simple utilisable même sur smartphones d'entrée de gamme",
      "Suivi des commandes en direct et paiement sécurisé"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1000&q=80",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000&q=80",
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1000&q=80"
    ]
  },
];

/* ─── TEAM ─────────────────────────────────────────────────────────── */
export const teamMembers = [
  {
    id: "dr-stone",
    name: "NDZANA ADJI SVENILYSTONE ASHTON THOMAS",
    alias: "DR_STONE",
    role: "Développeur Fullstack Web & Mobile",
    subtitle: "Frontend • Backend • Web • Mobile • UI/UX",
    category: "Fullstack Lead",
    specialties: [
      "Frontend Web Moderne", 
      "Backend & APIs (Node.js, PHP/Symfony)", 
      "Applications Mobiles", 
      "Design UI/UX & Ergonomie",
      "Architecture Logicielle"
    ],
    skills: [
      "React.js / Next.js",
      "React Native",
      "PHP / Symfony",
      "Node.js / Express",
      "Design UI/UX (Figma, Prototypage)",
      "Tailwind CSS",
      "PostgreSQL/ MySQL / MongoDB",
      "API REST & Webhooks",
      "Architecture MVC & Microservices",
      "Git & Déploiement CI/CD"
    ],
    experience: "Ingénierie Fullstack",
    projectsCount: "15+ Réalisations",
    desc: "Ingénieur en travaux informatique option Génie Logiciel. Développeur Fullstack polyvalent maîtrisant l'intégralité du cycle de vie des applications : interfaces web ergonomiques, architectures backend scalables et applications mobiles iOS / Android.",
    fullBio: "Connu sous le pseudonyme DR_STONE, Ndzana Adji Svenilystone Ashton Thomas est un développeur fullstack passionné et rigoureux. Il conçoit des solutions logicielles complètes et modernes en alliant design d'expérience utilisateur (UI/UX soigné), développement robuste (React, Node.js, PHP/Symfony) et portabilité mobile.",
    image: "/team/dr_stone.png",
    linkedin: "https://github.com/stone-dev802",
    github: "https://github.com/stone-dev802",
    email: "ndzanathomas119@gmail.com", 
    badge: "Softworks Engineer and Core Developer",
  },
  {
    id: "kelvyn-telecom",
    name: "DIFFO NGASSOP KEVIN DIBRIL",
    alias: "Kelvyn_Telecom",
    role: "Ingénieur Réseaux, Systèmes & Cybersécurité",
    subtitle: "Admin Réseaux • Cybersécurité • Ethical Hacking • SOC Analyst • UI/UX",
    category: "Réseaux & Cybersécurité",
    specialties: [
      "Administration Réseaux & Systèmes",
      "Cybersécurité & Défense Périmétrique",
      "Ethical Hacking & Tests d'Intrusion",
      "Analyse SOC & Réponse aux Incidents",
      "Design UI/UX & Expérience Utilisateur"
    ],
    skills: [
      "Architecture Réseau (Cisco, Mikrotik)",
      "Ethical Hacking & Pentesting",
      "SOC & Monitoring Sécurité (SIEM)",
      "Design UI/UX (Ergonomie & Maquettage)",
      "Pare-feu NGFW & Protocoles VPN",
      "Sécurisation Systèmes Linux & Windows",
      "Analyse de Vulnérabilités Réseau",
      "Routage & Commutation Avancée",
      "Politiques de Sauvegarde & PRA"
    ],
    experience: "Ingénierie Réseaux & Sécurité",
    projectsCount: "Infrastructures Protégées",
    desc: "Ingénieur en travaux informatique spécialisé en réseaux, systèmes et cybersécurité. Expert en administration d'infrastructures, ethical hacking et analyse SOC.",
    fullBio: "Connu sous le pseudonyme Kelvyn_Telecom, Diffo Ngassop Kevin Dibril est un ingénieur en travaux informatiques option Réseau, Système et Cybersécurité. Polyvalent entre la posture offensive (Ethical Hacking, pentesting) et défensive (SOC Analyst, administration sécurisée), il déploie des architectures réseau haute disponibilité et protège les systèmes contre les intrusions critiques.",
    image: "/team/kelvyn_telecom.png",
    linkedin: "https://www.linkedin.com/in/kelvyndiffo",
    github: "https://github.com/kelvyndiffo8-design",
    email: "kelvyndiffo8@gmail.com",
    badge: "Security Lead",
  },
  {
    id: "terminator",
    name: "KOH DJOUFO VALENTIN",
    alias: "Terminator",
    role: "Ingénieur Génie Logiciel & Fullstack",
    subtitle: "Génie Logiciel • Fullstack Web & Mobile • UI/UX Design",
    category: "Génie Logiciel & Fullstack",
    specialties: [
      "Conception & Génie Logiciel",
      "Frontend Web Moderne & Mobile",
      "Backend & APIs (PHP/Symfony, Node.js)",
      "Design UI/UX & Prototypage",
      "Architecture Logicielle & Bases de données"
    ],
    skills: [
      "PHP / Symfony",
      "React.js / Next.js",
      "React Native",
      "Node.js / Express",
      "Design UI/UX",
      "Tailwind CSS",
      "PostgreSQL / MySQL",
      "Architecture Logicielle & Design Patterns",
      "API REST & GraphQL",
      "Git & Déploiement CI/CD"
    ],
    experience: "Ingénierie Génie Logiciel",
    projectsCount: "Solutions Sur Mesure",
    desc: "Ingénieur en travaux informatique option Génie Logiciel. Développeur fullstack polyvalent spécialisé dans la conception de plateformes web, applications mobiles et architectures PHP/Symfony & Node.js.",
    fullBio: "Connu sous le pseudonyme Terminator, Koh Djoufo Valentin est un ingénieur en travaux informatiques option Génie Logiciel. Développeur fullstack accompli partageant une expertise pointue de bout en bout, il conçoit des architectures logicielles complètes, scalables et intuitives : du prototypage UI/UX soigné jusqu'au développement robuste avec PHP/Symfony, React, React Native et Node.js.",
    image: "/team/terminator_1.png",
    linkedin: "https://www.linkedin.com/in/valentindjoufo",
    github: "https://github.com/valentindjoufo",
    email: "valentindjoufo@gmail.com",
    badge: "Softworks Engineer",
  },
  {
    id: "paola",
    name: "BASSEK BRENDA PAOLA",
    alias: "Paola",
    role: "Ingénieure en Réseaux, Systèmes & Sécurité Informatique",
    subtitle: "Administration Réseaux • Sécurité IT • Vidéosurveillance & CCTV",
    category: "Réseaux & Systèmes",
    specialties: [
      "Administration Réseaux & Systèmes",
      "Sécurité Informatique & Défense en Profondeur",
      "Mise en Place d'Infrastructures Réseaux",
      "Installation de Systèmes de Vidéosurveillance (CCTV & IP)",
      "Installation & Maintenance des Systèmes Informatiques",
    ],
    skills: [
      "Câblage & Architecture Réseau",
      "Administration Systèmes (Windows & Linux)",
      "Sécurité des Réseaux & Systèmes",
      "Installation Caméras IP & CCTV",
      "Vidéosurveillance & Contrôle d'Accès",
      "Configuration Équipements Réseau (Cisco, Mikrotik)",
      "VPN & Sécurisation des Accès Distants",
      "Maintenance Préventive & Curative",
    ],
    experience: "Ingénierie Réseaux & Sécurité",
    projectsCount: "Infrastructures Déployées",
    desc: "Ingénieure en travaux informatiques spécialisée en réseaux, systèmes et sécurité. Experte en administration d'infrastructures, sécurisation des environnements et déploiement de systèmes de vidéosurveillance professionnels.",
    fullBio: "Connue sous le prénom Paola, Bassek Brenda Paola est ingénieure en travaux informatiques option Réseau, Système & Sécurité. Rigoureuse et polyvalente, elle assure l'administration et la sécurisation d'infrastructures réseau complexes, la mise en place d'équipements actifs et passifs (switches, routeurs, firewalls), ainsi que l'installation complète de systèmes de vidéosurveillance IP et CCTV pour les entreprises et organisations. Ses compétences s'étendent de la configuration d'équipements Cisco et Mikrotik à la mise en œuvre de solutions VPN et de contrôle d'accès, en passant par la maintenance préventive et curative des parcs informatiques.",
    image: "/team/paola.png",
    linkedin: "#",
    github: "#",
    email: "contact@globalsoftworks-innovation.com",
    badge: "Network Engineer",
  },
  
  {
    id: "alexias",
    name: "OMBALA FERNANDE ALEXIAS",
    alias: "Alexias",
    role: "Ingénieure en Réseaux Informatiques & Télécommunications",
    subtitle: "Infrastructures Réseaux • Télécoms & VDI • Vidéoprotection IP",
    category: "Réseaux & Systèmes",
    specialties: [
      "Architecture & Câblage Réseaux d'Entreprise (VDI)",
      "Déploiement d'Équipements Actifs (Cisco, MikroTik)",
      "Systèmes de Vidéoprotection IP & Contrôle d'Accès",
      "Sécurisation des Liaisons Réseau & Interconnexion de Sites",
      "Supervision & Maintenance Opérationnelle des Systèmes",
    ],
    skills: [
      "Ingénierie Réseau & Câblage Structuré (Baies & Brassage)",
      "Configuration Réseau Avancée (VLAN, Routage, NAT)",
      "Installation & Paramétrage Caméras IP & NVR/DVR",
      "Administration Systèmes Windows Server & Linux",
      "Protection Périmétrique & Filtrage Pare-feu",
      "Déploiement Wi-Fi Haute Densité & Hotspots",
      "Diagnostic, Dépannage & Haute Disponibilité",
      "Maintenance Préventive & Support Utilisateurs",
    ],
    experience: "Ingénierie Réseaux & Télécoms",
    projectsCount: "Infrastructures Déployées",
    desc: "Ingénieure en travaux informatiques spécialisée en réseaux et systèmes. Experte dans le dimensionnement, le câblage d'infrastructures d'entreprise et l'intégration de solutions modernes de vidéosurveillance connectée.",
    fullBio: "Connue sous le prénom Alexias, Ombala Fernande Alexias est ingénieure en travaux informatiques option Réseau, Système & Télécommunications. Spécialiste de terrain et de la mise en œuvre pratique, elle conçoit et maintient des architectures réseaux fiables, performantes et sécurisées adaptées aux contraintes des entreprises. De l'audit d'infrastructures au câblage structuré en baie de brassage, en passant par le paramétrage de routeurs/switchs managés et l'installation complète de parcs de vidéosurveillance IP avec monitoring en temps réel, elle assure une connectivité continue et un environnement informatique rigoureusement protégé.",
    image: "/team/alexias.png",
    linkedin: "#",
    github: "#",
    email: "contact@globalsoftworks-innovation.com",
    badge: "Network & Infra Engineer",
  },
];

/* ─── BLOG ARTICLES ────────────────────────────────────────────────── */
export const blogPosts = [
  {
    id: 1,
    title: "Comment l'IA transforme le service client en Afrique",
    excerpt: "Les agents IA autonomes permettent désormais aux PME africaines d'offrir un support 24/7 sans coût prohibitif.",
    category: "IA & Innovation",
    date: "10 Octobre 2026",
    author: "Sophie Awono",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80",
  },
  {
    id: 2,
    title: "Cybersécurité 2026 : Les 5 menaces critiques à surveiller",
    excerpt: "Ransomwares évolués, deepfakes professionnels, attaques sur la supply chain... ce que votre DSI doit savoir.",
    category: "Cybersécurité",
    date: "3 Octobre 2026",
    author: "Rodrigue Fotso",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&q=80",
  },
  {
    id: 3,
    title: "React Native vs Flutter : Quel choix pour votre app mobile ?",
    excerpt: "Comparaison objective des deux frameworks leaders du développement mobile cross-platform en 2026.",
    category: "Développement",
    date: "25 Septembre 2026",
    author: "Fatime Bello",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80",
  },
];

/* ─── AI BOT KNOWLEDGE BASE ────────────────────────────────────────── */
export const aiBotKnowledge = [
  {
    keywords: ["prix", "tarif", "coût", "combien", "budget"],
    response: "Nos tarifs dépendent de la complexité du projet. Pour une application web, comptez à partir de 500 000 FCFA. Pour un devis précis et gratuit, cliquez sur 'Demander un devis' en haut de la page !",
  },
  {
    keywords: ["devis", "estimation", "commencer", "contact"],
    response: "Pour un devis gratuit, cliquez sur le bouton jaune 'Demander un devis' en haut à droite, ou appelez-nous au +237 670 092 318 / +237 691 862 447. Réponse garantie sous 24h !",
  },
  {
    keywords: ["mobile", "application", "android", "ios"],
    response: "Oui ! Nous développons des applications mobiles React Native et Flutter pour Android et iOS, comme FoodRush et AgroLiv dans notre portfolio.",
  },
  {
    keywords: ["sécurité", "cybersécurité", "piratage", "audit", "protection"],
    response: "Notre pôle Cybersécurité réalise des tests d'intrusion, pare-feu nouvelle génération et protection anti-ransomware. Nos ingénieurs sont certifiés CISSP et CEH.",
  },
  {
    keywords: ["ia", "intelligence artificielle", "agent", "chatbot", "automatisation"],
    response: "Nous intégrons des agents IA autonomes connectés à vos données d'entreprise : support client, automatisation, génération de documents et analyse prédictive.",
  },
  {
    keywords: ["cameroun", "yaoundé", "afrique", "localisation"],
    response: "Nous sommes basés à Yaoundé, Cameroun, et accompagnons des clients partout en Afrique et à l'international grâce à nos méthodes de travail agiles.",
  },
  {
    keywords: ["délai", "durée", "combien de temps", "rapide"],
    response: "Un site vitrine : 1 à 2 semaines. Une application complète : 4 à 8 semaines. Un audit cybersécurité : 1 à 3 semaines selon le périmètre.",
  },
  {
    keywords: ["camera", "caméra", "vidéosurveillance", "videosurveillance", "cctv", "surveillance"],
    response: "Nous installons des systèmes complets de vidéosurveillance (caméras IP/HD, vision nocturne, enregistreurs NVR/DVR) avec visionnage en direct sur votre smartphone (iOS/Android) et contrôle d'accès sécurisé.",
  },
  {
    keywords: ["câblage", "cablage", "installation réseau", "installation reseau", "baie de brassage", "fibre", "wifi"],
    response: "Nous réalisons l'installation complète de votre réseau d'entreprise : câblage structuré cat 6/6A/7, baies de brassage, fibre optique, routeurs & switchs Cisco / MikroTik, et Wi-Fi professionnel haute couverture.",
  },
];
