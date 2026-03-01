// Modifie uniquement ce fichier pour personnaliser ton portfolio.
// Ensuite ouvre `index.html` ou lance un serveur local (voir README).

window.PORTFOLIO_DATA = {
  basics: {
    name: "Farouk LAOUEDJ",
    kicker: "Alternant Management et Conseil en systèmes d'informations",
    role: "Chef de projet",
    lead:
      "Expert en devenir des SI, je bâtis des solutions numériques où l'IA et l'automatisation rencontrent la stratégie métier. J’aime transformer des problématiques complexes en processus simples, agiles et maîtrisés.",
    location: "Île-de-France, FR",
    specialty: "SI, IA & Automatisation des Processus",
    availability: "Ouvert aux opportunités",
    oneLiner: "Objectif: Transformer vos processus métiers grâce à l’IA et l'automatisation pour délivrer une valeur mesurable.",
    email: "farouklaouedj.pro@gmail.com",
    cvUrl: "source/CV LAOUEDJ Farouk Alternant.pdf",
  },

about: {
    subtitle: "Un peu de contexte, ma manière de travailler, et ce que je recherche.",
    paragraphs: [
      "Profil hybride entre technique et stratégie, je conçois des solutions SI où l’**IA** et l’**automatisation** servent directement l'efficacité métier. Mon focus : **optimisation des flux**, **fiabilité des données** et **valeur produite**.",
      "Je travaille avec une double approche : l'agilité pour piloter les projets avec rigueur, et une expertise technique pour garantir des architectures (API, Low-Code, Data) à la fois scalables et maintenables.",
      "Je recherche aujourd'hui une alternance où je peux piloter des projets ambitieux, traduire des besoins complexes en outils concrets, et accompagner la transformation digitale d'une équipe produit.",
    ],
  },

skills: [
    "Gestion de Projet SI (Agile/Scrum)",
    "IA Générative & LLM (Prompt Engineering)",
    "Automatisation (Power Automate / n8n)",
    "Business Intelligence (Power BI)",
    "Analyse de données (SQL)",
    "Développement Full Stack (React / Node.js)",
    "Architecture API & Flux EDI",
    "Spécifications Fonctionnelles & Recette",
    "Gouvernance Cloud (AWS / GCP)",
    "UI/UX & Accessibilité Numérique",
  ],

  social: [
    { label: "Télécharger mon CV", href: "source/CV LAOUEDJ Farouk Alternant.pdf" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/farouklaouedj/" },
  ],

  projects: [
    {
      title: "NoCookNoClean",
      status: "MVP",
      description:
        "Ce projet simule le rachart de l'enseigne Del Arte (90 restaurants, leader de la restauration italienne) par le groupe en forte expansion NoCookNoClean. L'objectif principal était de concevoir une stratégie de fusion des SI permettant d'unifier le pilotage du groupe tout en respectant les réalités opérationnelles du terrain.",
      stack: ["ERP (Dolibarr)", "CRM (Salesforce)", "SQL"],
      links: [
        
        { label: "PowerPoint", href: "source/Panorama-des-Systemes-dInformation (2).pptx.pdf" },
        { label: "Rapport", href: "source/2.pdf" },
      ],
    }, /* Livré */
    {
      title: "ActuTech — Co-fondateur & Product Lead",
      status: "En cours",
      description:
        "Je pilote le développement d'un média multi-plateforme (Instagram, TikTok) dédié à la veille technologique, où je transforme une stratégie de curation de données en un écosystème digital cohérent, de l'automatisation des flux à la conception de la future plateforme web.",
      stack: ["UI / UX", "API", "IA"],
      links: [
        { label: "Instagram", href: "https://www.instagram.com/actu_tech_fr/" },
        { label: "TikTok", href: "https://www.tiktok.com/@actu_tech_fr" },
      ],
    },
    {
      title: "StockBoard",
      status: "En cours",
      description:
        "Dashboard boursier qui affiche les données envoyées depuis Power Automate dans mes tables Supabase.",
      stack: ["IA", "API", "Perf"],
      links: [{ label: "StockBoard", href: "https://github.com/ton-profil/projet-a" },],
    },
  ],

  certifications: [
    {
      title: "Fundamentals of Machine Learning and Artificial Intelligence",
      issuer: "AWS",
      date: "2025",
      description: "Certification couvrant les fondamentaux du ML et de l'IA sur AWS.",
      image: "source/Fundamentals of Machine Learning and Artificial Intelligence (Français) certif_page-0001.jpg",
    },
    {
      title: "Optimizing Foundation Models on AWS",
      issuer: "AWS",
      date: "2025",
      description: "Certification spécialisée dans l'optimisation des modèles de fondation sur AWS.",
      image: "source/Optimizing Foundation Models.jpg",
    },
    {
      title: "Job Roles in the Cloud",
      issuer: "AWS",
      date: "2025",
      description: "Certification sur les rôles cloud et les métiers du cloud.",
      image: "source/Certificat Job Roles in the Cloud_page-0001.jpg",
    },
    {
      title: "Chef de Projet - Méthodes et Outils",
      issuer: "Udemy",
      date: "2024",
      description: "Certification en chefferie de projet, méthodes agiles et outils de gestion.",
      image: "source/UC-ccc4ffb6-9101-43ef-aba6-522177cf417b.jpg",
    },
  ],
};

