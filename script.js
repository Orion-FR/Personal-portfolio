// Portfolio interactions: i18n (FR/EN/ES/IT), scroll reveal, nav state, mobile menu.

(() => {
  'use strict';

  /* ---------------- Translations ---------------- */
  const translations = {
    en: {
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.education': 'Education',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Available for Summer 2026 · Toulouse, France',
      'hero.greeting': "Hi, I'm",
      'hero.subtitle': 'Computer Engineering Student at EPITA · Web Development Intern at Airbus',
      'hero.tagline': 'Crafting intuitive interfaces and clean code. Passionate about computer engineering, cars, and everything in between.',
      'hero.cta_primary': 'Get in touch',
      'hero.cta_secondary': 'See my work',

      'about.title': 'About me',
      'about.p1': "I'm a computer engineering student at <strong>EPITA</strong>, currently interning as a front-end developer at <strong>Airbus</strong>. I enjoy turning complex business needs into interfaces that just feel right.",
      'about.p2': "Beyond code, I'm a car enthusiast and proud <strong>Alfa Romeo</strong> brand ambassador. Whether I'm building a proof of concept or tuning an engine, I care about the same thing: precision, craft, and details that make the whole thing sing.",
      'about.facts_title': 'Quick facts',
      'about.fact_1': 'Toulouse, France',
      'about.fact_2': 'EPITA · Eng. 2029',
      'about.fact_3': 'Exchange · RMIT Vietnam',
      'about.fact_4': 'Intern @ Airbus',
      'about.fact_5': 'Alfa Romeo ambassador',

      'exp.title': 'Experience',
      'exp.airbus_role': 'Web Development Intern',
      'exp.airbus_org': 'Airbus · Internship',
      'exp.airbus_date': 'Apr 2026 — May 2026',
      'exp.airbus_location': 'Blagnac, Occitanie · On-site',
      'exp.airbus_b1': 'Front-end development of a web application for an innovative internal project.',
      'exp.airbus_b2': 'Designed and delivered a proof of concept to validate new features technically.',
      'exp.airbus_b3': 'Worked in an agile team to turn business needs into intuitive interfaces.',
      'exp.alfa_role': 'Brand Ambassador',
      'exp.alfa_org': 'Alfa Romeo · Freelance',
      'exp.alfa_date': 'Apr 2025 — Present',
      'exp.alfa_desc': 'Representing the Alfa Romeo brand at events and online, sharing the passion for Italian design and engineering with a growing community.',
      'exp.norauto_role': 'Mechanic / Fitter',
      'exp.norauto_org': 'Norauto France · Fixed-term contract',
      'exp.norauto1_date': 'Jul — Aug 2025',
      'exp.norauto2_date': 'Jul — Aug 2024',
      'exp.norauto_location': 'Toulouse, Occitanie · On-site',

      'edu.title': 'Education',
      'edu.epita_date': 'Sep 2023 — Jun 2029',
      'edu.epita_title': 'EPITA',
      'edu.epita_org': 'School of Computer Science Engineering',
      'edu.epita_desc': 'Engineering degree (M.Sc.) in Computer Engineering — a five-year program focused on software engineering, algorithms, and systems.',
      'edu.rmit_date': 'Feb — Jun 2025',
      'edu.rmit_title': 'RMIT University Vietnam',
      'edu.rmit_org': 'Computer Programming, Specific Applications',
      'edu.rmit_desc': 'International exchange semester, broadening my perspective on software development and cross-cultural teamwork.',
      'edu.lycee_date': 'Sep 2019 — Jun 2022',
      'edu.lycee_title': 'Lycée Émilie de Rodat',
      'edu.lycee_org': 'French Baccalaureate — with honors',
      'edu.lycee_desc': 'Specializations in Mathematics and Computer Science (NSI).',

      'proj.title': 'Projects',
      'proj.crossword_date': 'Sep — Dec 2024 · EPITA',
      'proj.crossword_title': 'Computer Vision–Based Crossword Solver',
      'proj.crossword_desc': 'An OCR pipeline and solving engine that reads a crossword grid from an image and fills it in automatically.',
      'proj.crossword_b1': 'Built an OCR system that dynamically extracts grid structures from images.',
      'proj.crossword_b2': 'Implemented a logic-solving engine to automate complex puzzle processing.',
      'proj.crossword_b3': 'Optimized image preprocessing for reliable recognition in variable conditions.',
      'proj.soon_title': 'More coming soon',
      'proj.soon_desc': 'New projects and experiments will land here. Check back, or ping me on LinkedIn to chat about what I\'m working on.',

      'cert.title': 'Certifications',
      'cert.task_date': 'Issued Sep 2025',
      'cert.task_title': 'TASK — Assessment of Sustainability Knowledge',
      'cert.task_org': 'Sulitest',
      'cert.camb_date': 'Issued Jul 2020',
      'cert.camb_title': 'Cambridge English — ESOL International (Entry 3)',
      'cert.camb_org': 'Cambridge English · ID B2309458',

      'lang.title': 'Languages',
      'lang.fr_name': 'French',
      'lang.fr_level': 'Native speaker',
      'lang.en_name': 'English',
      'lang.en_level': 'C1 — Advanced',
      'lang.es_name': 'Spanish',
      'lang.es_level': 'B2 — Upper intermediate',
      'lang.it_name': 'Italian',
      'lang.it_level': 'A2 — Beginner',

      'contact.title': "Let's talk",
      'contact.lead': "I'm always open to chatting about internships, collaborations, or anything web and cars.",

      'footer.text': 'Paul Robain',
    },

    fr: {
      'nav.about': 'À propos',
      'nav.experience': 'Expérience',
      'nav.education': 'Formation',
      'nav.projects': 'Projets',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Disponible été 2026 · Toulouse, France',
      'hero.greeting': 'Salut, moi c\'est',
      'hero.subtitle': 'Étudiant en ingénierie informatique à l\'EPITA · Stagiaire développement web chez Airbus',
      'hero.tagline': 'Je conçois des interfaces intuitives et du code propre. Passionné d\'informatique, de voitures, et de tout ce qu\'il y a entre les deux.',
      'hero.cta_primary': 'Me contacter',
      'hero.cta_secondary': 'Voir mon travail',

      'about.title': 'À propos',
      'about.p1': "Je suis étudiant en ingénierie informatique à l'<strong>EPITA</strong>, actuellement en stage de développeur front-end chez <strong>Airbus</strong>. J'aime transformer des besoins métiers complexes en interfaces qui semblent évidentes.",
      'about.p2': "Au-delà du code, je suis passionné d'automobile et fier ambassadeur <strong>Alfa Romeo</strong>. Que je construise un POC ou que je règle un moteur, je cherche la même chose : précision, soin du détail, et cette petite touche qui fait toute la différence.",
      'about.facts_title': 'En bref',
      'about.fact_1': 'Toulouse, France',
      'about.fact_2': 'EPITA · Ing. 2029',
      'about.fact_3': 'Échange · RMIT Vietnam',
      'about.fact_4': 'Stagiaire @ Airbus',
      'about.fact_5': 'Ambassadeur Alfa Romeo',

      'exp.title': 'Expérience',
      'exp.airbus_role': 'Stagiaire développement web',
      'exp.airbus_org': 'Airbus · Stage',
      'exp.airbus_date': 'Avr. 2026 — Mai 2026',
      'exp.airbus_location': 'Blagnac, Occitanie · Sur site',
      'exp.airbus_b1': 'Développement front-end d\'une application web pour un projet interne innovant.',
      'exp.airbus_b2': 'Conception et réalisation d\'un proof of concept pour valider techniquement de nouvelles fonctionnalités.',
      'exp.airbus_b3': 'Collaboration en équipe agile pour transformer les besoins métiers en interfaces intuitives.',
      'exp.alfa_role': 'Représentant de marque',
      'exp.alfa_org': 'Alfa Romeo · Indépendant',
      'exp.alfa_date': 'Avr. 2025 — Aujourd\'hui',
      'exp.alfa_desc': 'Je représente la marque Alfa Romeo lors d\'événements et en ligne, pour partager la passion du design et de l\'ingénierie italienne avec une communauté grandissante.',
      'exp.norauto_role': 'Monteur / Mécanicien',
      'exp.norauto_org': 'Norauto France · CDD',
      'exp.norauto1_date': 'Juil. — Août 2025',
      'exp.norauto2_date': 'Juil. — Août 2024',
      'exp.norauto_location': 'Toulouse, Occitanie · Sur site',

      'edu.title': 'Formation',
      'edu.epita_date': 'Sept. 2023 — Juin 2029',
      'edu.epita_title': 'EPITA',
      'edu.epita_org': 'École d\'ingénieurs en informatique',
      'edu.epita_desc': 'Diplôme d\'ingénieur (M.Sc.) en ingénierie informatique — cursus de cinq ans axé sur le génie logiciel, les algorithmes et les systèmes.',
      'edu.rmit_date': 'Fév. — Juin 2025',
      'edu.rmit_title': 'RMIT University Vietnam',
      'edu.rmit_org': 'Computer Programming, Specific Applications',
      'edu.rmit_desc': 'Semestre d\'échange international, qui a élargi ma vision du développement logiciel et du travail en équipe multiculturelle.',
      'edu.lycee_date': 'Sept. 2019 — Juin 2022',
      'edu.lycee_title': 'Lycée Émilie de Rodat',
      'edu.lycee_org': 'Baccalauréat — mention Bien',
      'edu.lycee_desc': 'Spécialités Mathématiques et Numérique et Sciences Informatiques (NSI).',

      'proj.title': 'Projets',
      'proj.crossword_date': 'Sept. — Déc. 2024 · EPITA',
      'proj.crossword_title': 'Solveur de mots croisés par vision par ordinateur',
      'proj.crossword_desc': 'Pipeline d\'OCR et moteur de résolution qui lit une grille de mots croisés depuis une image et la remplit automatiquement.',
      'proj.crossword_b1': 'Système d\'OCR extrayant dynamiquement la structure des grilles depuis des images.',
      'proj.crossword_b2': 'Moteur logique automatisant la résolution de puzzles complexes.',
      'proj.crossword_b3': 'Optimisation du pré-traitement d\'image pour une reconnaissance fiable en conditions variables.',
      'proj.soon_title': 'D\'autres projets arrivent',
      'proj.soon_desc': 'De nouveaux projets et expérimentations viendront s\'ajouter ici. Revenez y jeter un œil, ou écrivez-moi sur LinkedIn pour en discuter.',

      'cert.title': 'Certifications',
      'cert.task_date': 'Émise en sept. 2025',
      'cert.task_title': 'TASK — Assessment of Sustainability Knowledge',
      'cert.task_org': 'Sulitest',
      'cert.camb_date': 'Émise en juil. 2020',
      'cert.camb_title': 'Cambridge English — ESOL International (Entry 3)',
      'cert.camb_org': 'Cambridge English · ID B2309458',

      'lang.title': 'Langues',
      'lang.fr_name': 'Français',
      'lang.fr_level': 'Langue maternelle',
      'lang.en_name': 'Anglais',
      'lang.en_level': 'C1 — Avancé',
      'lang.es_name': 'Espagnol',
      'lang.es_level': 'B2 — Intermédiaire avancé',
      'lang.it_name': 'Italien',
      'lang.it_level': 'A2 — Débutant',

      'contact.title': 'Parlons-en',
      'contact.lead': 'Toujours partant pour discuter d\'un stage, d\'une collaboration, de web ou de voitures.',

      'footer.text': 'Paul Robain',
    },

    es: {
      'nav.about': 'Sobre mí',
      'nav.experience': 'Experiencia',
      'nav.education': 'Formación',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',

      'hero.eyebrow': 'Disponible verano 2026 · Toulouse, Francia',
      'hero.greeting': 'Hola, soy',
      'hero.subtitle': 'Estudiante de ingeniería informática en EPITA · Becario de desarrollo web en Airbus',
      'hero.tagline': 'Creo interfaces intuitivas y código limpio. Apasionado por la ingeniería informática, los coches y todo lo que hay en medio.',
      'hero.cta_primary': 'Contactar',
      'hero.cta_secondary': 'Ver mi trabajo',

      'about.title': 'Sobre mí',
      'about.p1': 'Soy estudiante de ingeniería informática en <strong>EPITA</strong> y actualmente becario como desarrollador front-end en <strong>Airbus</strong>. Me gusta convertir necesidades de negocio complejas en interfaces que simplemente fluyen.',
      'about.p2': 'Más allá del código, soy un apasionado del automóvil y orgulloso embajador de la marca <strong>Alfa Romeo</strong>. Ya sea construyendo un POC o afinando un motor, busco lo mismo: precisión, oficio y esos detalles que lo cambian todo.',
      'about.facts_title': 'En breve',
      'about.fact_1': 'Toulouse, Francia',
      'about.fact_2': 'EPITA · Ing. 2029',
      'about.fact_3': 'Intercambio · RMIT Vietnam',
      'about.fact_4': 'Becario @ Airbus',
      'about.fact_5': 'Embajador Alfa Romeo',

      'exp.title': 'Experiencia',
      'exp.airbus_role': 'Becario de desarrollo web',
      'exp.airbus_org': 'Airbus · Prácticas',
      'exp.airbus_date': 'Abr. 2026 — Mayo 2026',
      'exp.airbus_location': 'Blagnac, Occitania · Presencial',
      'exp.airbus_b1': 'Desarrollo front-end de una aplicación web para un proyecto interno innovador.',
      'exp.airbus_b2': 'Diseño y entrega de una prueba de concepto para validar técnicamente nuevas funcionalidades.',
      'exp.airbus_b3': 'Trabajo en equipo ágil para transformar necesidades de negocio en interfaces intuitivas.',
      'exp.alfa_role': 'Embajador de marca',
      'exp.alfa_org': 'Alfa Romeo · Autónomo',
      'exp.alfa_date': 'Abr. 2025 — Actualidad',
      'exp.alfa_desc': 'Represento a la marca Alfa Romeo en eventos y en redes, compartiendo la pasión por el diseño y la ingeniería italianos con una comunidad en crecimiento.',
      'exp.norauto_role': 'Montador / Mecánico',
      'exp.norauto_org': 'Norauto France · Contrato temporal',
      'exp.norauto1_date': 'Jul. — Ago. 2025',
      'exp.norauto2_date': 'Jul. — Ago. 2024',
      'exp.norauto_location': 'Toulouse, Occitania · Presencial',

      'edu.title': 'Formación',
      'edu.epita_date': 'Sep. 2023 — Jun. 2029',
      'edu.epita_title': 'EPITA',
      'edu.epita_org': 'Escuela de Ingeniería Informática',
      'edu.epita_desc': 'Título de Ingeniero (M.Sc.) en Ingeniería Informática — programa de cinco años centrado en ingeniería del software, algoritmos y sistemas.',
      'edu.rmit_date': 'Feb. — Jun. 2025',
      'edu.rmit_title': 'RMIT University Vietnam',
      'edu.rmit_org': 'Computer Programming, Specific Applications',
      'edu.rmit_desc': 'Semestre de intercambio internacional, que amplió mi perspectiva sobre el desarrollo de software y el trabajo en equipo multicultural.',
      'edu.lycee_date': 'Sep. 2019 — Jun. 2022',
      'edu.lycee_title': 'Lycée Émilie de Rodat',
      'edu.lycee_org': 'Bachillerato francés — con honores',
      'edu.lycee_desc': 'Especialidades en Matemáticas e Informática (NSI).',

      'proj.title': 'Proyectos',
      'proj.crossword_date': 'Sep. — Dic. 2024 · EPITA',
      'proj.crossword_title': 'Solucionador de crucigramas por visión por computador',
      'proj.crossword_desc': 'Pipeline de OCR y motor de resolución que lee una cuadrícula de crucigrama desde una imagen y la completa automáticamente.',
      'proj.crossword_b1': 'Sistema OCR que extrae dinámicamente la estructura de cuadrículas desde imágenes.',
      'proj.crossword_b2': 'Motor lógico que automatiza la resolución de puzzles complejos.',
      'proj.crossword_b3': 'Optimización del preprocesado de imagen para un reconocimiento fiable en condiciones variables.',
      'proj.soon_title': 'Más proyectos próximamente',
      'proj.soon_desc': 'Aquí irán llegando nuevos proyectos y experimentos. Vuelve a echar un vistazo, o escríbeme en LinkedIn para charlar.',

      'cert.title': 'Certificaciones',
      'cert.task_date': 'Emitido sep. 2025',
      'cert.task_title': 'TASK — Assessment of Sustainability Knowledge',
      'cert.task_org': 'Sulitest',
      'cert.camb_date': 'Emitido jul. 2020',
      'cert.camb_title': 'Cambridge English — ESOL International (Entry 3)',
      'cert.camb_org': 'Cambridge English · ID B2309458',

      'lang.title': 'Idiomas',
      'lang.fr_name': 'Francés',
      'lang.fr_level': 'Lengua materna',
      'lang.en_name': 'Inglés',
      'lang.en_level': 'C1 — Avanzado',
      'lang.es_name': 'Español',
      'lang.es_level': 'B2 — Intermedio alto',
      'lang.it_name': 'Italiano',
      'lang.it_level': 'A2 — Principiante',

      'contact.title': 'Hablemos',
      'contact.lead': 'Siempre abierto a charlar sobre prácticas, colaboraciones, web o coches.',

      'footer.text': 'Paul Robain',
    },

    it: {
      'nav.about': 'Chi sono',
      'nav.experience': 'Esperienza',
      'nav.education': 'Formazione',
      'nav.projects': 'Progetti',
      'nav.contact': 'Contatti',

      'hero.eyebrow': 'Disponibile estate 2026 · Tolosa, Francia',
      'hero.greeting': 'Ciao, sono',
      'hero.subtitle': 'Studente di ingegneria informatica all\'EPITA · Stagista sviluppo web in Airbus',
      'hero.tagline': 'Creo interfacce intuitive e codice pulito. Appassionato di ingegneria informatica, auto, e tutto quello che c\'è in mezzo.',
      'hero.cta_primary': 'Contattami',
      'hero.cta_secondary': 'Vedi il mio lavoro',

      'about.title': 'Chi sono',
      'about.p1': 'Sono studente di ingegneria informatica all\'<strong>EPITA</strong> e attualmente stagista come sviluppatore front-end in <strong>Airbus</strong>. Mi piace trasformare esigenze di business complesse in interfacce che sembrano ovvie.',
      'about.p2': 'Oltre al codice, sono un appassionato di automobili e fiero ambasciatore del marchio <strong>Alfa Romeo</strong>. Che stia costruendo un POC o mettendo a punto un motore, cerco la stessa cosa: precisione, cura e quei dettagli che fanno la differenza.',
      'about.facts_title': 'In breve',
      'about.fact_1': 'Tolosa, Francia',
      'about.fact_2': 'EPITA · Ing. 2029',
      'about.fact_3': 'Scambio · RMIT Vietnam',
      'about.fact_4': 'Stagista @ Airbus',
      'about.fact_5': 'Ambasciatore Alfa Romeo',

      'exp.title': 'Esperienza',
      'exp.airbus_role': 'Stagista sviluppo web',
      'exp.airbus_org': 'Airbus · Stage',
      'exp.airbus_date': 'Apr. 2026 — Maggio 2026',
      'exp.airbus_location': 'Blagnac, Occitania · In sede',
      'exp.airbus_b1': 'Sviluppo front-end di un\'applicazione web per un progetto interno innovativo.',
      'exp.airbus_b2': 'Progettazione e realizzazione di una proof of concept per validare tecnicamente nuove funzionalità.',
      'exp.airbus_b3': 'Lavoro in un team agile per trasformare esigenze di business in interfacce intuitive.',
      'exp.alfa_role': 'Ambasciatore del marchio',
      'exp.alfa_org': 'Alfa Romeo · Indipendente',
      'exp.alfa_date': 'Apr. 2025 — Oggi',
      'exp.alfa_desc': 'Rappresento il marchio Alfa Romeo durante eventi e online, condividendo la passione per il design e l\'ingegneria italiana con una community in crescita.',
      'exp.norauto_role': 'Montatore / Meccanico',
      'exp.norauto_org': 'Norauto France · Contratto a termine',
      'exp.norauto1_date': 'Lug. — Ago. 2025',
      'exp.norauto2_date': 'Lug. — Ago. 2024',
      'exp.norauto_location': 'Tolosa, Occitania · In sede',

      'edu.title': 'Formazione',
      'edu.epita_date': 'Set. 2023 — Giu. 2029',
      'edu.epita_title': 'EPITA',
      'edu.epita_org': 'Scuola di Ingegneria Informatica',
      'edu.epita_desc': 'Laurea magistrale in ingegneria informatica — corso quinquennale focalizzato su ingegneria del software, algoritmi e sistemi.',
      'edu.rmit_date': 'Feb. — Giu. 2025',
      'edu.rmit_title': 'RMIT University Vietnam',
      'edu.rmit_org': 'Computer Programming, Specific Applications',
      'edu.rmit_desc': 'Semestre di scambio internazionale, che ha ampliato la mia visione dello sviluppo software e del lavoro in team multiculturali.',
      'edu.lycee_date': 'Set. 2019 — Giu. 2022',
      'edu.lycee_title': 'Lycée Émilie de Rodat',
      'edu.lycee_org': 'Maturità francese — con lode',
      'edu.lycee_desc': 'Specializzazioni in Matematica e Informatica (NSI).',

      'proj.title': 'Progetti',
      'proj.crossword_date': 'Set. — Dic. 2024 · EPITA',
      'proj.crossword_title': 'Risolutore di cruciverba con computer vision',
      'proj.crossword_desc': 'Pipeline OCR e motore di risoluzione che legge una griglia di cruciverba da un\'immagine e la completa automaticamente.',
      'proj.crossword_b1': 'Sistema OCR che estrae dinamicamente la struttura delle griglie dalle immagini.',
      'proj.crossword_b2': 'Motore logico per automatizzare la risoluzione di puzzle complessi.',
      'proj.crossword_b3': 'Ottimizzazione del preprocessing delle immagini per un riconoscimento affidabile in condizioni variabili.',
      'proj.soon_title': 'Altri progetti in arrivo',
      'proj.soon_desc': 'Qui arriveranno nuovi progetti ed esperimenti. Torna a dare un\'occhiata, o scrivimi su LinkedIn per parlarne.',

      'cert.title': 'Certificazioni',
      'cert.task_date': 'Rilasciato set. 2025',
      'cert.task_title': 'TASK — Assessment of Sustainability Knowledge',
      'cert.task_org': 'Sulitest',
      'cert.camb_date': 'Rilasciato lug. 2020',
      'cert.camb_title': 'Cambridge English — ESOL International (Entry 3)',
      'cert.camb_org': 'Cambridge English · ID B2309458',

      'lang.title': 'Lingue',
      'lang.fr_name': 'Francese',
      'lang.fr_level': 'Madrelingua',
      'lang.en_name': 'Inglese',
      'lang.en_level': 'C1 — Avanzato',
      'lang.es_name': 'Spagnolo',
      'lang.es_level': 'B2 — Intermedio alto',
      'lang.it_name': 'Italiano',
      'lang.it_level': 'A2 — Principiante',

      'contact.title': 'Parliamone',
      'contact.lead': 'Sempre aperto a parlare di stage, collaborazioni, web o auto.',

      'footer.text': 'Paul Robain',
    },
  };

  const SUPPORTED = ['en', 'fr', 'es', 'it'];
  const STORAGE_KEY = 'paulr.lang';

  const detectInitialLang = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : 'en';
  };

  const applyLang = (lang) => {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (value === undefined) return;
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = value;
      else el.textContent = value;
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  };

  let currentLang = detectInitialLang();
  applyLang(currentLang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem(STORAGE_KEY, currentLang);
      applyLang(currentLang);
    });
  });

  /* ---------------- Scroll reveal ---------------- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  /* ---------------- Nav scroll state ---------------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile menu ---------------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links?.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );

  /* ---------------- Footer year ---------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
