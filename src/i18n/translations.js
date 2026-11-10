export const translations = {
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      portfolio: 'Portfolio',
      team: 'Équipe',
      blog: 'Blog',
      contact: 'Contact',
      quote: 'Demander un devis',
      callUs: 'Appelez-nous',
    },
    // AI Assistant
    ai: {
      title: 'GSI Assistant IA',
      status: 'En ligne',
      welcomeTitle: 'Comment puis-je vous aider ?',
      welcomeSubtitle: 'Assistant officiel de Global Softworks Innovation pour vos projets d\'ingénierie logicielle, cybersécurité, réseaux et vidéosurveillance.',
      quickPromptsTitle: 'Suggestions rapides :',
      prompts: [
        {
          id: 'dev',
          icon: 'Globe',
          title: 'Développement Web & Mobile',
          desc: 'Applications sur-mesure, e-commerce, ERP & APIs performantes',
          query: 'Parlez-moi de vos services de développement web et mobile.'
        },
        {
          id: 'cyber',
          icon: 'ShieldCheck',
          title: 'Audit & Cybersécurité',
          desc: 'Pentest, conformité, protection des données & anti-ransomware',
          query: 'Quels services de cybersécurité proposez-vous ?'
        },
        {
          id: 'network_cctv',
          icon: 'Camera',
          title: 'Vidéosurveillance & Réseau',
          desc: 'Caméras HD/IP, câblage structuré, NVR & monitoring 24/7',
          query: 'Comment se passe une installation de caméras ou de câblage réseau ?'
        },
        {
          id: 'quote',
          icon: 'CreditCard',
          title: 'Tarifs & Devis Rapide',
          desc: 'Estimation gratuite sous 24h et accompagnement personnalisé',
          query: 'Combien coûte un projet et comment obtenir un devis gratuit ?'
        }
      ],
      inputPlaceholder: 'Écrivez votre message à GSI Assistant...',
      disclaimer: 'GSI Assistant IA peut faire des erreurs. Vérifiez les informations.',
      talkToHuman: 'Parler à un conseiller humain',
      typing: 'GSI Assistant analyse votre demande...',
      fallbackResponse: "Merci pour votre question ! Nos ingénieurs et consultants sont à votre écoute pour vous conseiller précisément. Vous pouvez demander un devis gratuit en 1 clic ou nous contacter directement.",
      actionQuote: 'Demander un devis gratuit',
      actionWhatsApp: 'Échanger sur WhatsApp',
    },
    // Hero
    hero: {
      tag: 'Votre partenaire tech & digital',
      title1: 'Des solutions numériques',
      title2: 'sur mesure',
      title3: 'pour un avenir',
      title4: 'plus connecté',
      desc: "Global Softworks Innovation transforme vos ambitions en réalités digitales : développement web & mobile, cybersécurité offensive et défensive, vidéosurveillance et infrastructure réseau certifiée.",
      ctaServices: 'Découvrir nos services',
      ctaPortfolio: 'Voir nos réalisations',
    },
    // Common
    common: {
      chatOnWhatsApp: 'Discuter sur WhatsApp',
      requestQuote: 'Demander un devis',
      viewProject: 'Voir le projet',
      allRightsReserved: 'Tous droits réservés.',
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio',
      team: 'Team',
      blog: 'Blog',
      contact: 'Contact',
      quote: 'Request a Quote',
      callUs: 'Call us',
    },
    // AI Assistant
    ai: {
      title: 'GSI AI Assistant',
      status: 'Online',
      welcomeTitle: 'How can I help you today?',
      welcomeSubtitle: 'Official assistant for Global Softworks Innovation: software engineering, cybersecurity, networks, and CCTV surveillance.',
      quickPromptsTitle: 'Quick suggestions:',
      prompts: [
        {
          id: 'dev',
          icon: 'Globe',
          title: 'Web & Mobile Apps',
          desc: 'Custom web platforms, iOS & Android apps, ERP & high-performance APIs',
          query: 'Tell me about your web and mobile development services.'
        },
        {
          id: 'cyber',
          icon: 'ShieldCheck',
          title: 'Cybersecurity & Audit',
          desc: 'Penetration testing, data security, SOC & anti-ransomware protection',
          query: 'What cybersecurity and pentesting services do you provide?'
        },
        {
          id: 'network_cctv',
          icon: 'Camera',
          title: 'CCTV & Network Cabling',
          desc: 'HD/IP cameras, structured cabling, NVR servers & 24/7 mobile monitoring',
          query: 'How does a CCTV camera or network cabling installation work?'
        },
        {
          id: 'quote',
          icon: 'CreditCard',
          title: 'Pricing & Instant Quote',
          desc: 'Free quote within 24 hours with dedicated expert guidance',
          query: 'How much does a project cost and how do I get a free quote?'
        }
      ],
      inputPlaceholder: 'Message GSI AI Assistant...',
      disclaimer: 'GSI AI Assistant can make mistakes. Please verify critical details.',
      talkToHuman: 'Talk to a human advisor',
      typing: 'GSI Assistant is typing...',
      fallbackResponse: "Thank you for reaching out! Our engineers and tech consultants are available to provide in-depth guidance. Feel free to request a free estimate or contact us directly on WhatsApp.",
      actionQuote: 'Request a free quote',
      actionWhatsApp: 'Chat on WhatsApp',
    },
    // Hero
    hero: {
      tag: 'Your tech & digital partner',
      title1: 'Tailored digital solutions',
      title2: 'engineered',
      title3: 'for a more',
      title4: 'connected future',
      desc: "Global Softworks Innovation turns your ambitions into digital realities: custom web & mobile platforms, offensive & defensive cybersecurity, CCTV surveillance, and certified network infrastructure.",
      ctaServices: 'Explore our services',
      ctaPortfolio: 'View our portfolio',
    },
    // Common
    common: {
      chatOnWhatsApp: 'Chat on WhatsApp',
      requestQuote: 'Request a quote',
      viewProject: 'View project',
      allRightsReserved: 'All rights reserved.',
    }
  }
};

export const bilingualKnowledge = [
  {
    keywordsFr: ["prix", "tarif", "coût", "cout", "combien", "budget", "facturation"],
    keywordsEn: ["price", "pricing", "cost", "how much", "budget", "rates", "fees"],
    responseFr: "Nos tarifs s'adaptent sur-mesure à vos exigences techniques : à partir de 500 000 FCFA pour une application web ou vitrine professionnelle, et sur devis personnalisé pour les projets d'envergure, la cybersécurité ou l'infrastructure réseau. Vous pouvez demander un devis gratuit en 1 clic !",
    responseEn: "Our pricing is tailored to your technical requirements: starting from 500,000 FCFA for custom web platforms, and tailored estimates for enterprise applications, cybersecurity audits, or network cabling. Request a free quote anytime!"
  },
  {
    keywordsFr: ["devis", "estimation", "commencer", "démarrer", "collaborer"],
    keywordsEn: ["quote", "estimate", "start", "proposal", "get started", "hire"],
    responseFr: "Pour obtenir un devis gratuit et détaillé sous 24h, cliquez sur le bouton jaune 'Demander un devis' en haut de page ou utilisez le formulaire de contact. Vous pouvez aussi joindre directement nos ingénieurs par téléphone au +237 691 862 447.",
    responseEn: "To receive a detailed free estimate within 24 hours, click the 'Request a Quote' button at the top of the page, or reach our engineering team directly at +237 691 862 447."
  },
  {
    keywordsFr: ["mobile", "application", "android", "ios", "appli", "smartphone"],
    keywordsEn: ["mobile", "app", "application", "android", "ios", "flutter", "react native"],
    responseFr: "Nous concevons des applications mobiles natives et cross-platform (React Native & Flutter) pour Android et iOS, avec synchronisation cloud, paiement mobile (Orange Money, MTN MoMo) et mode hors-ligne. Découvrez notamment TurnerMarket et AgroLiv dans notre portfolio !",
    responseEn: "We develop state-of-the-art mobile applications using React Native and Flutter for iOS & Android, including mobile payments (Orange Money, MTN MoMo) and offline-first capabilities. Check out TurnerMarket and AgroLiv in our portfolio!"
  },
  {
    keywordsFr: ["web", "site", "plateforme", "react", "logiciel", "erp", "saas"],
    keywordsEn: ["web", "website", "platform", "software", "react", "erp", "saas"],
    responseFr: "Nous développons des plateformes web modernes, rapides et hautement sécurisées : architectures React, Next.js, Node.js, Python, bases de données relationnelles et NoSQL. Nous avons notamment réalisé la solution Data Lineage pour Afriland First Bank et le progiciel Gescam.",
    responseEn: "We engineer modern, fast, and secure web platforms using React, Node.js, Python, and scalable cloud databases. Highlights include the critical Data Lineage system for Afriland First Bank and the Gescam academic platform."
  },
  {
    keywordsFr: ["sécurité", "securite", "cybersécurité", "cybersecurite", "piratage", "audit", "pentest", "intrusion"],
    keywordsEn: ["security", "cybersecurity", "hack", "pentest", "penetration testing", "audit", "firewall"],
    responseFr: "Notre division Cybersécurité protège votre infrastructure : audits de vulnérabilités, tests d'intrusion (Pentesting Red Team), supervision défensive (Blue Team / IDS Suricata) et conformité aux standards internationaux. Nos experts certifiés interviennent en toute confidentialité.",
    responseEn: "Our Cybersecurity department hardens your infrastructure against threats: vulnerability audits, penetration testing (Red Team), 24/7 intrusion detection (Suricata / Blue Team), and compliance with global security standards."
  },
  {
    keywordsFr: ["camera", "caméra", "vidéosurveillance", "videosurveillance", "cctv", "surveillance", "dôme", "nvr"],
    keywordsEn: ["camera", "cctv", "surveillance", "security camera", "nvr", "dvr", "monitoring"],
    responseFr: "Nous déployons des solutions complètes de vidéosurveillance HD et 4K pour bâtiments d'entreprises, résidences privées, commerces et entrepôts : caméras dômes orientables, vision nocturne infrarouge, enregistreurs NVR/DVR et visionnage en temps réel sur smartphone 24h/24.",
    responseEn: "We deliver turnkey HD and 4K CCTV surveillance systems for commercial buildings, company offices, private residences, and stores: discreet dome cameras, infrared night vision, NVR storage, and instant remote live streaming on smartphones 24/7."
  },
  {
    keywordsFr: ["câblage", "cablage", "réseau", "reseau", "baie", "brassage", "switch", "routeur", "fibre", "wifi"],
    keywordsEn: ["cabling", "network", "lan", "wan", "rack", "switch", "router", "fiber", "wifi", "ethernet"],
    responseFr: "Nos techniciens réalisent le câblage réseau informatique structuré (Cat 6/6A/7), l'aménagement de baies de brassage, la pose d'équipements actifs (Cisco, MikroTik), le raccordement fibre optique et la couverture Wi-Fi professionnelle sur vos chantiers et locaux.",
    responseEn: "Our technicians provide structured network cabling (Cat 6/6A/7), server rack patching, managed switch & router setup (Cisco, MikroTik), optical fiber links, and enterprise-grade Wi-Fi for buildings and workspaces."
  },
  {
    keywordsFr: ["délai", "delai", "durée", "duree", "combien de temps", "temps", "livraison"],
    keywordsEn: ["time", "duration", "timeline", "delay", "deadline", "how long", "delivery"],
    responseFr: "Nos délais moyens de réalisation : 1 à 2 semaines pour un site vitrine professionnel, 3 à 6 semaines pour une application métier ou mobile, et 3 à 5 jours pour un déploiement réseau ou vidéosurveillance. Un planning précis est établi dès le démarrage.",
    responseEn: "Our typical timelines: 1 to 2 weeks for a corporate website, 3 to 6 weeks for custom web or mobile applications, and 3 to 5 days for CCTV or network cabling installations. A detailed roadmap is shared upfront."
  },
  {
    keywordsFr: ["localisation", "adresse", "bureau", "yaoundé", "yaounde", "cameroun", "où êtes-vous", "ou etes vous"],
    keywordsEn: ["location", "address", "office", "yaounde", "cameroon", "where are you", "city"],
    responseFr: "Global Softworks Innovation est située à Yaoundé, Cameroun. Nous intervenons sur tout le territoire national (Douala, Bafoussam, etc.) et accompagnons également des clients internationaux à distance avec des méthodes agiles éprouvées.",
    responseEn: "Global Softworks Innovation is based in Yaounde, Cameroon. We operate across Cameroon (Douala, Bafoussam, etc.) and seamlessly collaborate with international clients across Africa, Europe, and North America."
  },
  {
    keywordsFr: ["contact", "téléphone", "telephone", "email", "mail", "whatsapp", "joindre"],
    keywordsEn: ["contact", "phone", "email", "call", "reach", "whatsapp", "talk"],
    responseFr: "Vous pouvez nous joindre par téléphone ou WhatsApp au +237 691 862 447 / +237 670 092 318, par email à contact@globalsoftworksinnovation.com, ou en cliquant sur le bouton vert WhatsApp en bas à droite !",
    responseEn: "You can reach us by phone or WhatsApp at +237 691 862 447 / +237 670 092 318, via email at contact@globalsoftworksinnovation.com, or by tapping the green WhatsApp button at the bottom right!"
  }
];
