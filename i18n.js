/* ═══════════════════════════════════════════════
   i18n.js — Globalny system tłumaczeń
   Importowany przez main.js na każdej podstronie.
   Język przechowywany w localStorage('lang').
═══════════════════════════════════════════════ */

window.I18N = (function () {

  /* ── SŁOWNIK ────────────────────────────────── */
  const T = {

    /* ════ NAVBAR (wszystkie strony) ════ */
    'nav.projects': { pl: 'Projekty',    en: 'Projects' },
    'nav.contact':  { pl: 'Kontakt',     en: 'Contact'  },
    'nav.cv':       { pl: 'Pobierz CV',  en: 'Download CV' },
    'nav.home':     { pl: 'Home',        en: 'Home'     },

    /* ════ FOOTER (wszystkie strony) ════ */
    'footer.copy': { pl: '© 2026 Andrii Torianyk', en: '© 2026 Andrii Torianyk' },

    /* ════ HOME — index.html ════ */
    'home.badge':       { pl: 'Poszukuję pracy\u00a0·\u00a0Kraków, Rzeszów, Tarnów / Remote',
                          en: 'Open to work\u00a0·\u00a0Kraków, Rzeszów, Tarnów / Remote' },
    'home.title.line':  { pl: 'Nazywam się',  en: 'My name is' },
    'home.role':        { pl: 'Full-stack Developer | Student III roku Informatyki',
                          en: 'Full-stack Developer | 3rd-year CS Student' },
    'home.desc':        { pl: 'Buduję skalowalne aplikacje webowe i systemy, łącząc wydajną logikę backendową z dopracowanymi interfejsami użytkownika. Skupiam się na pisaniu czystego kodu, bezpieczeństwie danych oraz optymalizacji wydajności systemów.',
                          en: 'I build scalable web applications and systems, combining efficient backend logic with polished user interfaces. I focus on writing clean code, data security, and performance optimization.' },
    'home.btn.projects': { pl: 'Moje projekty',        en: 'My projects'  },
    'home.btn.contact':  { pl: 'Formularz kontaktowy', en: 'Contact form' },
    'home.card.role':    { pl: 'Full-stack Developer', en: 'Full-stack Developer' },
    'home.card.years':   { pl: 'lata studiów',  en: 'years of study' },
    'home.card.repos':   { pl: 'repozytoriów',  en: 'repositories'  },
    'home.card.tech':    { pl: 'technologii',   en: 'technologies'  },
    'home.about.eyebrow': { pl: 'Profil zawodowy', en: 'Professional profile' },
    'home.about.title':   { pl: 'Rozwiązania Full-stack:<br><span class="gradient-text">od architektury po UI</span>',
                            en: 'Full-stack Solutions:<br><span class="gradient-text">from architecture to UI</span>' },
    'home.about.p1': { pl: 'Jako student Inżynierii Oprogramowania podchodzę do tworzenia aplikacji w sposób kompleksowy. Moje kompetencje obejmują budowę skalowalnych API, zarządzanie relacyjnymi bazami danych oraz implementację nowoczesnych, intuicyjnych frontendów.',
                       en: 'As a Software Engineering student, I take a holistic approach to application development. My competencies include building scalable APIs, managing relational databases, and implementing modern, intuitive frontends.' },
    'home.about.p2': { pl: 'Równolegle rozwijam projekty mobilne i desktopowe, dbając o spójność technologiczną i wysoką jakość dostarczanego oprogramowania niezależnie od platformy docelowej.',
                       en: 'I also develop mobile and desktop projects, ensuring technological consistency and high software quality regardless of the target platform.' },
    'home.about.link': { pl: 'Przeglądaj stos technologiczny →', en: 'Browse tech stack →' },
    'home.tl.1.title': { pl: 'Studia Inżynierskie: Informatyka',         en: "Bachelor's: Computer Science" },
    'home.tl.1.sub':   { pl: 'Akademia Tarnowska (spec. Inżynieria Oprogramowania)', en: 'Tarnów Academy (Software Engineering)' },
    'home.tl.2.title': { pl: 'Rozwój projektów mobilnych i desktopowych', en: 'Mobile & Desktop Project Development' },
    'home.tl.2.sub':   { pl: 'Implementacja w środowiskach Android Studio oraz Spring Boot', en: 'Built with Android Studio and Spring Boot' },
    'home.tl.3.title': { pl: 'Freelance: Strony internetowe',             en: 'Freelance: Web Development' },
    'home.tl.3.sub':   { pl: 'Architektura i wdrożenia systemów CMS/E-commerce', en: 'CMS/E-commerce architecture & deployments' },
    'home.tl.4.title': { pl: 'Poszukuję pracy',       en: 'Looking for a job' },
    'home.tl.4.sub':   { pl: 'Junior Software Engineer', en: 'Junior Software Engineer' },

    /* ════ CONTACT — contact/index.html ════ */
    'contact.eyebrow':   { pl: 'Kontakt',     en: 'Contact' },
    'contact.title':     { pl: 'Porozmawiajmy', en: "Let's talk" },
    'contact.desc':      { pl: 'Szukam pracy jako Junior Developer. Chętnie porozmawiam o projekcie, współpracy.',
                           en: "I'm looking for a Junior Developer position. Happy to discuss a project or collaboration." },
    'contact.email.label':   { pl: 'Email',    en: 'Email'    },
    'contact.linkedin.label':{ pl: 'LinkedIn', en: 'LinkedIn' },
    'contact.github.label':  { pl: 'GitHub',   en: 'GitHub'   },
    'contact.form.name':     { pl: 'Imię i nazwisko',   en: 'Full name'  },
    'contact.form.name.ph':  { pl: 'Anna Nowak',        en: 'John Smith' },
    'contact.form.email':    { pl: 'Email',              en: 'Email'      },
    'contact.form.email.ph': { pl: 'anna@firma.pl',     en: 'john@company.com' },
    'contact.form.msg':      { pl: 'Wiadomość',          en: 'Message'    },
    'contact.form.msg.ph':   { pl: 'Cześć Andrii, chciałem/am...', en: 'Hi Andrii, I wanted to...' },
    'contact.form.send':     { pl: 'Wyślij wiadomość',  en: 'Send message' },

    /* ════ PROJECTS LIST — projects/index.html ════ */
    'projects.eyebrow':  { pl: 'Moje prace', en: 'My work'  },
    'projects.title':    { pl: 'Projekty',   en: 'Projects' },
    'projects.desc':     { pl: 'Aplikacje webowe, mobilne, gry i narzędzia backendowe — tu trafia wszystko co zbudowałem.',
                           en: 'Web apps, mobile apps, games and backend tools — everything I have built.' },
    'projects.osk.desc':    { pl: 'Strona internetowa dla ośrodka szkolenia kierowców — freelance. Panel admina do zarządzania kursami, aktualnościami i statystykami odwiedzin. Projekt live.',
                              en: 'Website for a driving school — freelance project. Admin panel for managing courses, news and visit statistics. Live project.' },
    'projects.osk.link':    { pl: 'Zobacz projekt', en: 'View project' },
    'projects.racing.desc': { pl: 'Autorski silnik wyścigowy napisany od zera w C++ i OpenGL 3.3 — bez Unity ani Unreal. Pełna fizyka, AI na waypointach, shadery Phonga i system ekonomii z garażem 7 samochodów.',
                              en: 'Custom racing engine written from scratch in C++ and OpenGL 3.3 — no Unity or Unreal. Full physics, waypoint AI, Phong shaders and economy system with a 7-car garage.' },
    'projects.racing.link': { pl: 'Zobacz projekt', en: 'View project' },
    'projects.wyspa.desc':  { pl: 'Survivalowa gra FPS z systemem zagadek logicznych. Eksploruj niebezpieczną wyspę, unikaj wilka i zapal ognisko pomocy przed zapadnięciem zmroku.',
                              en: 'Survival FPS game with a logic puzzle system. Explore the dangerous island, avoid the wolf and light the campfire before nightfall.' },
    'projects.wyspa.link':  { pl: 'Zobacz projekt', en: 'View project' },
    'projects.blog.desc':   { pl: 'Fullstackowa aplikacja blogowa — Angular + Node.js. System postów, komentarzy, ocen i ulubionych. Panel admina, autoryzacja JWT i Server-Side Rendering.',
                              en: 'Fullstack blog application — Angular + Node.js. Posts, comments, ratings and favourites. Admin panel, JWT auth and Server-Side Rendering.' },
    'projects.blog.link':   { pl: 'Zobacz projekt', en: 'View project' },
    'projects.ualingo.desc':{ pl: 'Aplikacja mobilna Android do nauki języka ukraińskiego — quizy z timerem, gra Word Search, memy edukacyjne i autoryzacja Firebase. 18 ekranów, 10 tematów, 120 pytań.',
                              en: 'Android mobile app for learning Ukrainian — timed quizzes, Word Search game, educational memes and Firebase auth. 18 screens, 10 topics, 120 questions.' },
    'projects.ualingo.link':{ pl: 'Zobacz projekt', en: 'View project' },

    /* ════ SHARED — project detail pages ════ */
    'proj.back':          { pl: 'Wróć do projektów',   en: 'Back to projects'    },
    'proj.screenshots':   { pl: 'Screenshots',          en: 'Screenshots'         },
    'proj.gallery.title': { pl: 'w akcji',              en: 'in action'           },
    'proj.all':           { pl: 'Wszystkie projekty',   en: 'All projects'        },
    'proj.github':        { pl: 'GitHub',               en: 'GitHub'              },
    'proj.live':          { pl: 'Zobacz na żywo',       en: 'View live'           },
    'proj.tech.label':    { pl: 'Technologie',          en: 'Technologies'        },
    'proj.tech.title':    { pl: 'Stack technologiczny', en: 'Tech stack'          },
    'proj.arch.label':    { pl: 'Architektura',         en: 'Architecture'        },
    'proj.func.label':    { pl: 'Funkcjonalności',      en: 'Features'            },
    'proj.howworks':      { pl: 'Jak to działa',        en: 'How it works'        },
    'proj.install.label': { pl: 'Instalacja',           en: 'Installation'        },
    'proj.install.title': { pl: 'Jak uruchomić',        en: 'How to run'          },
    'proj.author.label':  { pl: 'Autor',                en: 'Author'              },
    'proj.team.label':    { pl: 'Zespół',               en: 'Team'                },
    'proj.individual':    { pl: 'Projekt indywidualny', en: 'Individual project'  },
    'proj.req.title':     { pl: 'Wymagania',            en: 'Requirements'        },
    'proj.goal.label':    { pl: 'Cel projektu',         en: 'Project goal'        },
    'proj.routes.label':  { pl: 'Trasy aplikacji',      en: 'App routes'          },
    'proj.routing':       { pl: 'Routing',              en: 'Routing'             },
    'proj.scope.label':   { pl: 'Zakres prac',          en: 'Scope of work'       },
    'proj.delivered':     { pl: 'Co zostało dostarczone', en: 'What was delivered' },
    'proj.controls.label':{ pl: 'Sterowanie',           en: 'Controls'            },
    'proj.controls.kbd':  { pl: 'Klawiatura',           en: 'Keyboard'            },
    'proj.controls.kbdmouse': { pl: 'Klawiatura i mysz', en: 'Keyboard & mouse'  },
    'proj.screens.label': { pl: 'Ekrany',               en: 'Screens'             },

    /* ════ RACING 3D ════ */
    'racing.category':  { pl: 'Game Development · Grafika 3D', en: 'Game Development · 3D Graphics' },
    'racing.tagline':   { pl: 'Autorski silnik wyścigowy napisany w C++ i OpenGL 3.3 — od renderowania shaderów po symulację fizyki Bullet Physics.',
                          en: 'Custom racing engine written in C++ and OpenGL 3.3 — from shader rendering to Bullet Physics simulation.' },
    'racing.goal.h2':   { pl: 'Autorski silnik<br><span class="grad">od zera</span>', en: 'Custom engine<br><span class="grad">from scratch</span>' },
    'racing.goal.p1':   { pl: 'Kluczowym założeniem było stworzenie trójwymiarowego symulatora wyścigów bez użycia gotowych silników jak Unity czy Unreal Engine. Cały potok renderowania, fizyka i logika gry zostały napisane w C++17 od podstaw.',
                          en: 'The key goal was to create a 3D racing simulator without ready-made engines like Unity or Unreal Engine. The entire rendering pipeline, physics and game logic were written from scratch in C++17.' },
    'racing.goal.p2':   { pl: 'Projekt był realizowany w ramach przedmiotu Grafika 3D i programowanie kart graficznych na Akademii Tarnowskiej.',
                          en: 'The project was completed as part of the 3D Graphics and GPU Programming course at Tarnów Academy.' },
    'racing.gallery':   { pl: 'Gra w akcji', en: 'Game in action' },
    'racing.feat.1.title': { pl: 'Rozbudowane menu',   en: 'Full menu'        },
    'racing.feat.1.desc':  { pl: 'Wybór auta, trasy, liczby okrążeń i ustawień grafiki', en: 'Car, track, laps and graphics settings selection' },
    'racing.feat.2.title': { pl: 'Dwa tryby kamery',   en: 'Two camera modes' },
    'racing.feat.2.desc':  { pl: 'TPP (za samochodem) i FPP (widok z kokpitu)', en: 'TPP (behind car) and FPP (cockpit view)' },
    'racing.feat.3.title': { pl: 'Przeciwnik AI',       en: 'AI Opponent'      },
    'racing.feat.3.desc':  { pl: 'System waypointów z algorytmem P-Controller', en: 'Waypoint system with P-Controller algorithm' },
    'racing.feat.4.title': { pl: 'System ekonomii',    en: 'Economy system'   },
    'racing.feat.4.desc':  { pl: 'Wirtualna waluta, garaż z 7 samochodami do odblokowania', en: 'Virtual currency, garage with 7 cars to unlock' },
    'racing.feat.5.title': { pl: 'Dynamiczny dźwięk',  en: 'Dynamic sound'    },
    'racing.feat.5.desc':  { pl: 'Pitch silnika zmienia się proporcjonalnie do prędkości', en: 'Engine pitch changes proportionally to speed' },
    'racing.ctrl.1': { pl: 'Przyspieszenie',               en: 'Accelerate'          },
    'racing.ctrl.2': { pl: 'Hamowanie / Wsteczny',         en: 'Brake / Reverse'     },
    'racing.ctrl.3': { pl: 'Skręt w lewo',                 en: 'Steer left'          },
    'racing.ctrl.4': { pl: 'Skręt w prawo',                en: 'Steer right'         },
    'racing.ctrl.5': { pl: 'Hamulec ręczny (drift)',       en: 'Handbrake (drift)'   },
    'racing.ctrl.6': { pl: 'Zmiana kamery TPP / FPP',     en: 'Switch camera TPP/FPP'},
    'racing.ctrl.7': { pl: 'Menu / Pauza',                 en: 'Menu / Pause'        },
    'racing.ctrl.8': { pl: 'Alternatywne sterowanie',      en: 'Alternative controls'},

    /* ════ WYSPA MYSTERY ════ */
    'wyspa.category': { pl: 'Game Development · Unity 3D', en: 'Game Development · Unity 3D' },
    'wyspa.tagline':  { pl: 'Survivalowa gra FPS z systemem zagadek logicznych. Eksploruj niebezpieczną wyspę, unikaj drapieżnika i znajdź sposób na wezwanie pomocy przed zapadnięciem zmroku.',
                        en: 'Survival FPS game with a logic puzzle system. Explore the dangerous island, avoid the predator and find a way to call for help before nightfall.' },
    'wyspa.goal.h2':  { pl: 'Przeżyj noc<br><span class="wyspa-grad">lub zgiń próbując</span>', en: 'Survive the night<br><span class="wyspa-grad">or die trying</span>' },
    'wyspa.goal.p1':  { pl: 'Wyspa Mystery to survivalowa gra FPS stworzona w Unity 3D jako projekt indywidualny. Gracz ląduje na tajemniczej wyspie i musi znaleźć sposób na wezwanie ratunku zanim zapadnie zmrok.',
                        en: 'Wyspa Mystery is a survival FPS game created in Unity 3D as an individual project. The player lands on a mysterious island and must find a way to call for rescue before nightfall.' },
    'wyspa.goal.p2':  { pl: 'Projekt skupia się na budowaniu napięcia atmosferycznego — gęsta mgła, aktywny wulkan i AI wilka tworzą środowisko, w którym każda decyzja ma znaczenie.',
                        en: 'The project focuses on building atmospheric tension — dense fog, an active volcano and wolf AI create an environment where every decision matters.' },
    'wyspa.gallery':  { pl: 'Rzut oka na wyspę', en: 'A glimpse of the island' },
    'wyspa.feat.1.title': { pl: 'Otwarty świat wyspy',     en: 'Open island world'    },
    'wyspa.feat.1.desc':  { pl: 'Eksploracja terenu z wulkanem, lasem i domem jako głównym celem', en: 'Explore terrain with a volcano, forest and house as the main objective' },
    'wyspa.feat.2.title': { pl: 'AI Drapieżnika',          en: 'Predator AI'          },
    'wyspa.feat.2.desc':  { pl: 'Wilk patroluje teren i wykrywa gracza w zasięgu wzroku — Chase AI', en: 'Wolf patrols the terrain and detects the player in line of sight — Chase AI' },
    'wyspa.feat.3.title': { pl: 'Minigra zręcznościowa',  en: 'Skill minigame'       },
    'wyspa.feat.3.desc':  { pl: 'Rzucanie kokosami w 3 cele w ciągu 5 sekund — odblokowanie skrzyni', en: 'Throw coconuts at 3 targets in 5 seconds — unlock the chest' },
    'wyspa.feat.4.title': { pl: 'System interakcji FPS',  en: 'FPS interaction system'},
    'wyspa.feat.4.desc':  { pl: 'Raycasting — podnoszenie przedmiotów, otwieranie drzwi, zapalanie ogniska', en: 'Raycasting — pick up items, open doors, light campfire' },
    'wyspa.feat.5.title': { pl: 'Atmosfera i efekty',     en: 'Atmosphere & effects' },
    'wyspa.feat.5.desc':  { pl: 'Gęsta mgła ograniczająca widoczność i efekty cząsteczkowe wulkanu', en: 'Dense fog limiting visibility and volcano particle effects' },
    'wyspa.ctrl.1': { pl: 'Ruch postacią',              en: 'Move character'       },
    'wyspa.ctrl.2': { pl: 'Rozglądanie się',            en: 'Look around'          },
    'wyspa.ctrl.3': { pl: 'Interakcja z obiektami',     en: 'Interact with objects'},
    'wyspa.ctrl.4': { pl: 'Rzut kokosem / akcja',       en: 'Throw coconut / action'},
    'wyspa.ctrl.5': { pl: 'Sprint',                     en: 'Sprint'               },
    'wyspa.ctrl.6': { pl: 'Pauza / Menu',               en: 'Pause / Menu'         },

    /* ════ BLOG APP ════ */
    'blog.category':  { pl: 'Web Development · Fullstack', en: 'Web Development · Fullstack' },
    'blog.tagline':   { pl: 'Fullstackowa aplikacja blogowa zbudowana w Angular + Node.js — system postów, komentarzy, ocen i ulubionych. Panel admina, autoryzacja JWT i Server-Side Rendering.',
                        en: 'Fullstack blog application built with Angular + Node.js — posts, comments, ratings and favourites. Admin panel, JWT auth and Server-Side Rendering.' },
    'blog.goal.h2':   { pl: 'Fullstack<br><span class="blog-grad">od loginu po admina</span>', en: 'Fullstack<br><span class="blog-grad">from login to admin</span>' },
    'blog.goal.p1':   { pl: 'Blog App to kompletna aplikacja webowa zrealizowana w ramach przedmiotu Technologie aplikacji webowych na Akademii Tarnowskiej. Projekt obejmuje cały stos — od komponentów Angular po REST API w Node.js.',
                        en: 'Blog App is a complete web application built for the Web Application Technologies course at Tarnów Academy. The project covers the full stack — from Angular components to a Node.js REST API.' },
    'blog.goal.p2':   { pl: 'Każdy zalogowany użytkownik może pisać posty, komentować, oceniać i zapisywać ulubione wpisy. Administrator zarządza użytkownikami i treścią przez dedykowany panel.',
                        en: 'Every logged-in user can write posts, comment, rate and save favourite entries. The administrator manages users and content through a dedicated panel.' },
    'blog.gallery':   { pl: 'Aplikacja w akcji', en: 'App in action' },
    'blog.feat.1.title': { pl: 'CRUD postów',           en: 'Post CRUD'        },
    'blog.feat.1.desc':  { pl: 'Tworzenie, edycja i usuwanie wpisów z uploadem obrazów (multer, max 5MB)', en: 'Create, edit and delete entries with image upload (multer, max 5MB)' },
    'blog.feat.2.title': { pl: 'Komentarze i oceny',    en: 'Comments & ratings'},
    'blog.feat.2.desc':  { pl: 'System komentarzy per post oraz oceny gwiazdkowe z liczeniem średniej', en: 'Per-post comments and star ratings with average calculation' },
    'blog.feat.3.title': { pl: 'Autoryzacja JWT',       en: 'JWT auth'         },
    'blog.feat.3.desc':  { pl: 'Rejestracja, logowanie i ochrona tras przez AuthGuard i AdminGuard', en: 'Registration, login and route protection via AuthGuard and AdminGuard' },
    'blog.feat.4.title': { pl: 'Ulubione & aktywność',  en: 'Favourites & activity' },
    'blog.feat.4.desc':  { pl: 'Zapisywanie ulubionych postów i dziennik wszystkich akcji użytkownika', en: 'Save favourite posts and a log of all user actions' },
    'blog.feat.5.title': { pl: 'Wyszukiwanie i filtry', en: 'Search & filters' },
    'blog.feat.5.desc':  { pl: 'Filtrowanie po kategorii, tagach, autorze i dacie z paginacją listy', en: 'Filter by category, tags, author and date with list pagination' },
    'blog.feat.6.title': { pl: 'Dark / Light mode',    en: 'Dark / Light mode' },
    'blog.feat.6.desc':  { pl: 'Przełącznik motywu z zapisem preferencji w localStorage', en: 'Theme switcher with preferences saved in localStorage' },
    'blog.team.role':    { pl: 'Frontend · Backend · UI Design · Testy', en: 'Frontend · Backend · UI Design · Testing' },
    'blog.routes.public': { pl: 'Publiczna', en: 'Public' },
    'blog.routes.auth':   { pl: 'Auth',      en: 'Auth'   },
    'blog.routes.admin':  { pl: 'Admin',     en: 'Admin'  },

    /* ════ OSK EXPERT ════ */
    'osk.category':  { pl: 'Web Development · Freelance', en: 'Web Development · Freelance' },
    'osk.tagline':   { pl: 'Kompletna strona internetowa dla ośrodka szkolenia kierowców — od projektu UI po wdrożenie. Panel administracyjny, system aktualności, terminy kursów i statystyki odwiedzin dla właściciela.',
                       en: 'Complete website for a driving school — from UI design to deployment. Admin panel, news system, course dates and visit statistics for the owner.' },
    'osk.goal.h2':   { pl: 'Freelance dla<br><span class="grad-green">prawdziwego klienta</span>', en: 'Freelance for<br><span class="grad-green">a real client</span>' },
    'osk.goal.p1':   { pl: 'Właściciel OSK Expert potrzebował nowoczesnej strony internetowej, która przyciągnie nowych kursantów i jednocześnie ułatwi codzienne zarządzanie treścią bez pomocy programisty.',
                       en: 'The owner of OSK Expert needed a modern website to attract new students while making daily content management easy without developer help.' },
    'osk.goal.p2':   { pl: 'Zaprojektowałem i wdrożyłem całą stronę od zera — projekt graficzny, kodowanie frontendu, backend w PHP oraz panel administracyjny dostępny tylko dla właściciela.',
                       en: 'I designed and deployed the entire site from scratch — visual design, frontend coding, PHP backend and an admin panel accessible only to the owner.' },
    'osk.gallery':   { pl: 'Strona w akcji', en: 'Site in action' },
    'osk.live.btn':  { pl: 'Zobacz na żywo', en: 'View live'      },
    'osk.feat.1.title': { pl: 'Zarządzanie kursami',  en: 'Course management'  },
    'osk.feat.1.desc':  { pl: 'Admin ustawia daty: poprzedniego, najbliższego i kolejnego kursu — automatycznie aktualizują się na stronie', en: 'Admin sets previous, nearest and next course dates — they update automatically on the site' },
    'osk.feat.2.title': { pl: 'System aktualności',   en: 'News system'        },
    'osk.feat.2.desc':  { pl: 'Właściciel dodaje posty z panelu — publikacja bez znajomości kodu', en: 'Owner adds posts from the panel — publishing without coding knowledge' },
    'osk.feat.3.title': { pl: 'Statystyki odwiedzin', en: 'Visit statistics'   },
    'osk.feat.3.desc':  { pl: 'Panel pokazuje liczbę odwiedzin w danym dniu — prosta analityka własna', en: 'Panel shows daily visit count — simple custom analytics' },
    'osk.feat.4.title': { pl: 'Timeline "Jak zacząć"', en: '"How to start" timeline' },
    'osk.feat.4.desc':  { pl: 'Krok po kroku: Zapisz się → PKK → Kurs → Egzamin', en: 'Step by step: Sign up → PKK → Course → Exam' },
    'osk.feat.5.title': { pl: 'FAQ accordion',        en: 'FAQ accordion'      },
    'osk.feat.5.desc':  { pl: 'Najczęściej zadawane pytania w formie rozwijalnych kart — zmniejsza liczbę telefonów do biura', en: 'Frequently asked questions as expandable cards — reduces calls to the office' },
    'osk.feat.6.title': { pl: 'Responsywny design',   en: 'Responsive design'  },
    'osk.feat.6.desc':  { pl: 'Strona działa płynnie na telefonach, tabletach i komputerach', en: 'The site works smoothly on phones, tablets and computers' },
    'osk.scope.label': { pl: 'Zakres prac',            en: 'Scope of work'      },
    'osk.scope.title': { pl: 'Co zostało dostarczone', en: 'What was delivered' },
    'osk.deliv.1.title': { pl: 'Projekt UI/UX',  en: 'UI/UX Design'   },
    'osk.deliv.1.desc':  { pl: 'Cały layout pod brand klienta — niebieska paleta, czytelna typografia, ikony sekcji', en: 'Full layout for the client brand — blue palette, readable typography, section icons' },
    'osk.deliv.2.title': { pl: 'Frontend',       en: 'Frontend'        },
    'osk.deliv.2.desc':  { pl: 'HTML, CSS, JS — pełna responsywność, animacje, płynna nawigacja z ikonami', en: 'HTML, CSS, JS — full responsiveness, animations, smooth navigation with icons' },
    'osk.deliv.3.title': { pl: 'Backend + DB',   en: 'Backend + DB'    },
    'osk.deliv.3.desc':  { pl: 'PHP + MySQL: aktualności, kursy, licznik odwiedzin, panel admina', en: 'PHP + MySQL: news, courses, visit counter, admin panel' },
    'osk.deliv.4.title': { pl: 'Wdrożenie',      en: 'Deployment'      },
    'osk.deliv.4.desc':  { pl: 'Konfiguracja hostingu, domeny, SSL — strona live na osk-expert.com.pl', en: 'Hosting, domain, SSL configuration — site live at osk-expert.com.pl' },
    'osk.team.role': { pl: 'Projekt UI · Frontend · Backend · Wdrożenie', en: 'UI Design · Frontend · Backend · Deployment' },
    'osk.client.role': { pl: 'Klient — Ośrodek Szkolenia Kierowców', en: 'Client — Driving School' },

    /* ════ UALINGO ════ */
    'ualingo.category': { pl: 'Mobile Development · Android', en: 'Mobile Development · Android' },
    'ualingo.tagline':  { pl: 'Aplikacja mobilna Android do nauki języka ukraińskiego — interaktywne quizy, gry słowne, memy edukacyjne i system autoryzacji Firebase. Duolingo-like experience w natywnym Javie.',
                          en: 'Android mobile app for learning Ukrainian — interactive quizzes, word games, educational memes and Firebase auth. Duolingo-like experience in native Java.' },
    'ualingo.goal.h2':  { pl: 'Nauka języka<br><span class="ualingo-grad">przez zabawę</span>', en: 'Language learning<br><span class="ualingo-grad">through play</span>' },
    'ualingo.goal.p1':  { pl: 'UAlingo to natywna aplikacja Android do nauki języka ukraińskiego, zbudowana w Javie z wykorzystaniem Firebase. Projekt był realizowany na Akademii Tarnowskiej jako kompleksowa aplikacja mobilna.',
                          en: 'UAlingo is a native Android app for learning Ukrainian, built in Java with Firebase. The project was developed at Tarnów Academy as a comprehensive mobile application.' },
    'ualingo.goal.p2':  { pl: 'Inspirowana Duolingo — łączy quizy z timerem, gry słowne, memy z autentycznym językiem ukraińskim i system postępu, który motywuje do codziennej nauki.',
                          en: 'Inspired by Duolingo — combines timed quizzes, word games, authentic Ukrainian memes and a progress system that motivates daily learning.' },
    'ualingo.gallery':  { pl: 'Aplikacja w akcji', en: 'App in action' },
    'ualingo.feat.1.title': { pl: '10 tematów, 120 pytań',  en: '10 topics, 120 questions' },
    'ualingo.feat.1.desc':  { pl: 'Od pozdrowień po hotele — każdy temat ma 12 pytań quizowych z 4 opcjami', en: 'From greetings to hotels — each topic has 12 quiz questions with 4 options' },
    'ualingo.feat.2.title': { pl: 'Quiz z timerem 60s',     en: '60s timed quiz'           },
    'ualingo.feat.2.desc':  { pl: 'CountDownTimer na każde pytanie, animacje kolorów — zielony/czerwony', en: 'CountDownTimer per question, colour animations — green/red' },
    'ualingo.feat.3.title': { pl: 'Word Search',            en: 'Word Search'              },
    'ualingo.feat.3.desc':  { pl: 'Interaktywna siatka 7×6 z literami cyrylicy — szukaj ukraińskich słów', en: 'Interactive 7×6 grid with Cyrillic letters — find Ukrainian words' },
    'ualingo.feat.4.title': { pl: 'Memy edukacyjne',        en: 'Educational memes'        },
    'ualingo.feat.4.desc':  { pl: 'Nauka przez autentyczne ukraińskie memy i klipy — naturalny kontekst językowy', en: 'Learn through authentic Ukrainian memes and clips — natural language context' },
    'ualingo.feat.5.title': { pl: 'Dwujęzyczność',          en: 'Bilingual support'        },
    'ualingo.feat.5.desc':  { pl: 'Dynamiczne przełączanie między wersją ukraińską i angielską aplikacji', en: 'Dynamic switching between Ukrainian and English versions of the app' },
    'ualingo.feat.6.title': { pl: 'Firebase Auth',          en: 'Firebase Auth'            },
    'ualingo.feat.6.desc':  { pl: 'Logowanie email/hasło oraz Google OAuth 2.0, reset hasła, persystencja sesji', en: 'Email/password login and Google OAuth 2.0, password reset, session persistence' },
    'ualingo.screens.label': { pl: 'Ekrany', en: 'Screens' },
    'ualingo.screens.title': { pl: '18 Activities', en: '18 Activities' },
  };

  /* ── DETECT CURRENT PAGE ─────────────────────── */
  function getPage() {
    const p = window.location.pathname;
    if (/\/projects\/blog/.test(p))        return 'blog';
    if (/\/projects\/osk-expert/.test(p))  return 'osk';
    if (/\/projects\/racing3d/.test(p))    return 'racing';
    if (/\/projects\/ualingo/.test(p))     return 'ualingo';
    if (/\/projects\/wyspa/.test(p))       return 'wyspa';
    if (/\/projects/.test(p))              return 'projects';
    if (/\/contact/.test(p))              return 'contact';
    return 'home';
  }

  /* ── TRANSLATE helper ────────────────────────── */
  function t(key, lang) {
    return T[key] ? (T[key][lang] ?? T[key]['pl']) : null;
  }

  /* ── SET TEXT safely ─────────────────────────── */
  function setText(el, key, lang) {
    if (!el) return;
    const val = t(key, lang);
    if (val !== null) el.textContent = val;
  }
  function setHTML(el, key, lang) {
    if (!el) return;
    const val = t(key, lang);
    if (val !== null) el.innerHTML = val;
  }
  function setPlaceholder(el, key, lang) {
    if (!el) return;
    const val = t(key, lang);
    if (val !== null) el.placeholder = val;
  }

  /* ── APPLY TRANSLATIONS ──────────────────────── */
  function apply(lang) {
    const page = getPage();

    /* ── NAVBAR (every page) ── */
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(a => {
      const href = a.getAttribute('href') || '';
      if (/projects/.test(href))     setText(a, 'nav.projects', lang);
      else if (/contact/.test(href)) setText(a, 'nav.contact', lang);
      else if (/index\.html$/.test(href) || href === '../' || href === '../../' || href.endsWith('/') && !href.includes('projects') && !href.includes('contact'))
        setText(a, 'nav.home', lang);
    });
    const mobLinks = document.querySelectorAll('.mob-link');
    mobLinks.forEach(a => {
      const href = a.getAttribute('href') || '';
      if (/projects/.test(href))     setText(a, 'nav.projects', lang);
      else if (/contact/.test(href)) setText(a, 'nav.contact', lang);
      else if (/CV/.test(href))      setText(a, 'nav.cv', lang);
    });
    const navCta = document.querySelector('.nav-cta');
    if (navCta) {
      const svg = navCta.querySelector('svg');
      navCta.textContent = t('nav.cv', lang);
      if (svg) navCta.prepend(svg);
    }

    /* ── FOOTER (every page) ── */
    setText(document.querySelector('.footer-copy'), 'footer.copy', lang);

    /* ── PAGE-SPECIFIC ── */
    if (page === 'home')     applyHome(lang);
    if (page === 'contact')  applyContact(lang);
    if (page === 'projects') applyProjects(lang);
    if (page === 'blog')     applyBlog(lang);
    if (page === 'osk')      applyOsk(lang);
    if (page === 'racing')   applyRacing(lang);
    if (page === 'ualingo')  applyUalingo(lang);
    if (page === 'wyspa')    applyWyspa(lang);

    /* ── Update html lang attr ── */
    document.documentElement.lang = lang;
  }

  /* ── HOME ────────────────────────────────────── */
  function applyHome(lang) {
    /* badge */
    const badge = document.querySelector('.hero-badge');
    if (badge) {
      const dot = badge.querySelector('.badge-dot');
      badge.textContent = t('home.badge', lang);
      if (dot) badge.prepend(dot);
    }
    setText(document.querySelector('.title-line'), 'home.title.line', lang);

    /* role — preserve cursor span */
    const role = document.querySelector('.hero-role');
    if (role) {
      const cursor = role.querySelector('.role-cursor');
      role.textContent = t('home.role', lang);
      if (cursor) role.prepend(cursor);
    }

    setText(document.querySelector('.hero-desc'), 'home.desc', lang);

    /* buttons */
    const btns = document.querySelectorAll('.hero-actions .btn');
    if (btns[0]) { const svg = btns[0].querySelector('svg'); btns[0].textContent = t('home.btn.projects', lang); if (svg) btns[0].appendChild(svg); }
    if (btns[1]) setText(btns[1], 'home.btn.contact', lang);

    /* card */
    setText(document.querySelector('.card-role'), 'home.card.role', lang);
    const csLabels = document.querySelectorAll('.cs-l');
    setText(csLabels[0], 'home.card.years', lang);
    setText(csLabels[1], 'home.card.repos', lang);
    setText(csLabels[2], 'home.card.tech',  lang);

    /* about */
    setText(document.querySelector('.section-eyebrow'), 'home.about.eyebrow', lang);
    setHTML(document.querySelector('.section-title'),   'home.about.title',   lang);
    const aboutPs = document.querySelectorAll('.about-body');
    setText(aboutPs[0], 'home.about.p1', lang);
    setText(aboutPs[1], 'home.about.p2', lang);
    setText(document.querySelector('.about-link'), 'home.about.link', lang);

    /* timeline */
    const tlTitles = document.querySelectorAll('.tl-title');
    const tlSubs   = document.querySelectorAll('.tl-sub');
    for (let i = 0; i < 4; i++) {
      setText(tlTitles[i], `home.tl.${i+1}.title`, lang);
      setText(tlSubs[i],   `home.tl.${i+1}.sub`,   lang);
    }
  }

  /* ── CONTACT ─────────────────────────────────── */
  function applyContact(lang) {
    setText(document.querySelector('.section-eyebrow'), 'contact.eyebrow', lang);
    setText(document.querySelector('.contact-title'),   'contact.title',   lang);
    setText(document.querySelector('.contact-desc'),    'contact.desc',    lang);

    const labels = document.querySelectorAll('.channel-label');
    setText(labels[0], 'contact.email.label',    lang);
    setText(labels[1], 'contact.linkedin.label', lang);
    setText(labels[2], 'contact.github.label',   lang);

    const formLabels = document.querySelectorAll('.form-label');
    setText(formLabels[0], 'contact.form.name',  lang);
    setText(formLabels[1], 'contact.form.email', lang);
    setText(formLabels[2], 'contact.form.msg',   lang);

    setPlaceholder(document.getElementById('name'),    'contact.form.name.ph',  lang);
    setPlaceholder(document.getElementById('email'),   'contact.form.email.ph', lang);
    setPlaceholder(document.getElementById('message'), 'contact.form.msg.ph',   lang);

    const sendBtn = document.querySelector('.form-submit');
    if (sendBtn) { const svg = sendBtn.querySelector('svg'); sendBtn.textContent = t('contact.form.send', lang); if (svg) sendBtn.appendChild(svg); }
  }

  /* ── PROJECTS LIST ───────────────────────────── */
  function applyProjects(lang) {
    setText(document.querySelector('.section-eyebrow'),  'projects.eyebrow', lang);
    setText(document.querySelector('.projects-title'),   'projects.title',   lang);
    setText(document.querySelector('.projects-desc'),    'projects.desc',    lang);

    const cards = document.querySelectorAll('.project-card');
    const descKeys = ['projects.osk.desc','projects.racing.desc','projects.wyspa.desc','projects.blog.desc','projects.ualingo.desc'];
    const linkKeys = ['projects.osk.link','projects.racing.link','projects.wyspa.link','projects.blog.link','projects.ualingo.link'];
    cards.forEach((card, i) => {
      setText(card.querySelector('.project-card-desc'), descKeys[i], lang);
      const link = card.querySelector('.project-card-link');
      if (link) {
        const svg = link.querySelector('svg');
        link.textContent = t(linkKeys[i], lang);
        if (svg) link.appendChild(svg);
      }
    });
  }

  /* ── SHARED PROJECT DETAIL helpers ──────────── */
  function applySharedDetail(lang) {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) { const svg = backBtn.querySelector('svg'); backBtn.textContent = t('proj.back', lang); if (svg) backBtn.prepend(svg); }

    document.querySelectorAll('.proj-nav-btn, .back-btn').forEach(btn => {
      if (btn.textContent.includes('projekt') || btn.textContent.includes('project') || btn.textContent.includes('All') || btn.textContent.includes('Wszystkie')) {
        const svg = btn.querySelector('svg');
        btn.textContent = t('proj.all', lang);
        if (svg) { btn.prepend ? btn.prepend(svg) : btn.appendChild(svg); }
      }
    });

    setText(document.querySelector('.footer-copy'), 'footer.copy', lang);

    /* section labels */
    const sectionLabels = document.querySelectorAll('.section-label');
    sectionLabels.forEach(el => {
      const txt = el.textContent.trim().toLowerCase();
      if (txt === 'technologie' || txt === 'technologies')       setText(el, 'proj.tech.label',    lang);
      else if (txt === 'architektura' || txt === 'architecture') setText(el, 'proj.arch.label',    lang);
      else if (txt === 'funkcjonalności' || txt === 'features')  setText(el, 'proj.func.label',    lang);
      else if (txt === 'instalacja' || txt === 'installation')   setText(el, 'proj.install.label', lang);
      else if (txt === 'autor' || txt === 'author')              setText(el, 'proj.author.label',  lang);
      else if (txt === 'zespół' || txt === 'team')               setText(el, 'proj.team.label',    lang);
      else if (txt === 'sterowanie' || txt === 'controls')       setText(el, 'proj.controls.label',lang);
      else if (txt === 'screenshoty' || txt === 'screenshots')   setText(el, 'proj.screenshots',   lang);
      else if (txt === 'cel projektu' || txt === 'project goal') setText(el, 'proj.goal.label',    lang);
    });

    /* section h2s */
    document.querySelectorAll('.section-h2').forEach(el => {
      const txt = el.textContent.trim().toLowerCase();
      if (txt.includes('stack') || txt.includes('technologiczny'))                    setHTML(el, 'proj.tech.title',    lang);
      else if (txt === 'jak to działa' || txt === 'how it works')                    setText(el, 'proj.howworks',     lang);
      else if (txt === 'jak uruchomić' || txt === 'how to run')                      setText(el, 'proj.install.title', lang);
      else if (txt === 'projekt indywidualny' || txt === 'individual project')       setText(el, 'proj.individual',   lang);
    });

    /* tech section title */
    const techH2 = document.querySelector('.tech-section .section-h2');
    if (techH2) setHTML(techH2, 'proj.tech.title', lang);

    /* GitHub button */
    document.querySelectorAll('.btn-primary').forEach(btn => {
      if (btn.querySelector('svg[viewBox="0 0 24 24"] path[d^="M12 0C5.37"]')) {
        const svg = btn.querySelector('svg');
        btn.textContent = t('proj.github', lang);
        if (svg) btn.prepend(svg);
      }
    });

    /* Screenshots btn */
    document.querySelectorAll('.btn-glass').forEach(btn => {
      if (btn.getAttribute('href') === '#gallery') {
        const svg = btn.querySelector('svg');
        btn.textContent = t('proj.screenshots', lang);
        if (svg) btn.prepend(svg);
      }
    });

    /* req title */
    setText(document.querySelector('.req-title'), 'proj.req.title', lang);
  }

  /* ── RACING ──────────────────────────────────── */
  function applyRacing(lang) {
    applySharedDetail(lang);
    setText(document.querySelector('.proj-category'), 'racing.category', lang);
    setText(document.querySelector('.proj-tagline'),  'racing.tagline',  lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'racing.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    setText(goalPs[0], 'racing.goal.p1', lang);
    setText(goalPs[1], 'racing.goal.p2', lang);
    const galH2 = document.querySelector('.gallery-section .section-h2');
    setText(galH2, 'racing.gallery', lang);

    const feats = document.querySelectorAll('.feat-item');
    [[0,'racing.feat.1'],[1,'racing.feat.2'],[2,'racing.feat.3'],[3,'racing.feat.4'],[4,'racing.feat.5']].forEach(([i,k]) => {
      if (!feats[i]) return;
      setText(feats[i].querySelector('.feat-title'), k+'.title', lang);
      setText(feats[i].querySelector('.feat-desc'),  k+'.desc',  lang);
    });

    const ctrls = document.querySelectorAll('.ctrl');
    ['racing.ctrl.1','racing.ctrl.2','racing.ctrl.3','racing.ctrl.4','racing.ctrl.5','racing.ctrl.6','racing.ctrl.7','racing.ctrl.8'].forEach((k,i) => {
      if (ctrls[i]) setText(ctrls[i].querySelector('span:last-child'), k, lang);
    });
    const ctrlH2 = document.querySelector('.controls-grid')?.closest('section')?.querySelector('.section-h2');
    if (ctrlH2) setText(ctrlH2, 'proj.controls.kbd', lang);
  }

  /* ── WYSPA ───────────────────────────────────── */
  function applyWyspa(lang) {
    applySharedDetail(lang);
    setText(document.querySelector('.proj-category'), 'wyspa.category', lang);
    setText(document.querySelector('.proj-tagline'),  'wyspa.tagline',  lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'wyspa.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    setText(goalPs[0], 'wyspa.goal.p1', lang);
    setText(goalPs[1], 'wyspa.goal.p2', lang);
    const galH2 = document.querySelector('.gallery-section .section-h2');
    setText(galH2, 'wyspa.gallery', lang);

    const feats = document.querySelectorAll('.feat-item');
    for (let i = 0; i < 5; i++) {
      if (!feats[i]) continue;
      setText(feats[i].querySelector('.feat-title'), `wyspa.feat.${i+1}.title`, lang);
      setText(feats[i].querySelector('.feat-desc'),  `wyspa.feat.${i+1}.desc`,  lang);
    }

    const ctrls = document.querySelectorAll('.ctrl');
    for (let i = 0; i < 6; i++) {
      if (ctrls[i]) setText(ctrls[i].querySelector('span:last-child'), `wyspa.ctrl.${i+1}`, lang);
    }
    const ctrlH2 = document.querySelector('.controls-grid')?.closest('section')?.querySelector('.section-h2');
    if (ctrlH2) setText(ctrlH2, 'proj.controls.kbdmouse', lang);

    /* prev/next nav */
    document.querySelectorAll('.proj-nav-btn').forEach(btn => {
      const href = btn.getAttribute('href') || '';
      if (href.includes('racing')) {
        const svg = btn.querySelector('svg');
        btn.textContent = 'Racing 3D';
        if (svg) btn.prepend(svg);
      } else if (href.includes('/projects/') || href === '/projects/') {
        const svg = btn.querySelector('svg');
        btn.textContent = t('proj.all', lang);
        if (svg) btn.appendChild(svg);
      }
    });
  }

  /* ── BLOG ────────────────────────────────────── */
  function applyBlog(lang) {
    applySharedDetail(lang);
    setText(document.querySelector('.proj-category'), 'blog.category', lang);
    setText(document.querySelector('.proj-tagline'),  'blog.tagline',  lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'blog.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    setText(goalPs[0], 'blog.goal.p1', lang);
    setText(goalPs[1], 'blog.goal.p2', lang);
    const galH2 = document.querySelector('.gallery-section .section-h2');
    setText(galH2, 'blog.gallery', lang);

    const feats = document.querySelectorAll('.feat-item');
    for (let i = 0; i < 6; i++) {
      if (!feats[i]) continue;
      setText(feats[i].querySelector('.feat-title'), `blog.feat.${i+1}.title`, lang);
      setText(feats[i].querySelector('.feat-desc'),  `blog.feat.${i+1}.desc`,  lang);
    }

    /* routes badges */
    document.querySelectorAll('.route-badge').forEach(el => {
      if (el.classList.contains('public')) setText(el, 'blog.routes.public', lang);
      else if (el.classList.contains('auth'))  setText(el, 'blog.routes.auth',  lang);
      else if (el.classList.contains('admin')) setText(el, 'blog.routes.admin', lang);
    });

    setText(document.querySelector('.section-label[data-section="routes"]'), 'proj.routes.label', lang);
    const routesLabel = [...document.querySelectorAll('.section-label')].find(el => el.textContent.includes('Trasy') || el.textContent.includes('routes') || el.textContent.includes('Routes'));
    if (routesLabel) setText(routesLabel, 'proj.routes.label', lang);
    const routingH2 = [...document.querySelectorAll('.section-h2')].find(el => el.textContent.trim() === 'Routing' || el.textContent.trim() === 'Routing');
    if (routingH2) setText(routingH2, 'proj.routing', lang);

    /* team role */
    const teamRole = document.querySelector('.team-role');
    if (teamRole) setText(teamRole, 'blog.team.role', lang);
  }

  /* ── OSK ─────────────────────────────────────── */
  function applyOsk(lang) {
    applySharedDetail(lang);
    setText(document.querySelector('.proj-category'), 'osk.category', lang);
    setText(document.querySelector('.proj-tagline'),  'osk.tagline',  lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'osk.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    setText(goalPs[0], 'osk.goal.p1', lang);
    setText(goalPs[1], 'osk.goal.p2', lang);
    const galH2 = document.querySelector('.gallery-section .section-h2');
    setText(galH2, 'osk.gallery', lang);

    /* live btn */
    const liveBtn = [...document.querySelectorAll('.btn-primary')].find(b => b.href && b.href.includes('osk-expert.com'));
    if (liveBtn) { const svg = liveBtn.querySelector('svg'); liveBtn.textContent = t('osk.live.btn', lang); if (svg) liveBtn.prepend(svg); }

    const feats = document.querySelectorAll('.feat-item');
    for (let i = 0; i < 6; i++) {
      if (!feats[i]) continue;
      setText(feats[i].querySelector('.feat-title'), `osk.feat.${i+1}.title`, lang);
      setText(feats[i].querySelector('.feat-desc'),  `osk.feat.${i+1}.desc`,  lang);
    }

    /* deliverables */
    const scopeLabel = [...document.querySelectorAll('.section-label')].find(el => el.textContent.includes('Zakres') || el.textContent.includes('Scope'));
    if (scopeLabel) setText(scopeLabel, 'osk.scope.label', lang);
    const scopeH2 = [...document.querySelectorAll('.section-h2')].find(el => el.textContent.includes('dostarczone') || el.textContent.includes('delivered'));
    if (scopeH2) setText(scopeH2, 'osk.scope.title', lang);

    const delivCards = document.querySelectorAll('.deliv-card');
    [['osk.deliv.1','osk.deliv.1'],['osk.deliv.2','osk.deliv.2'],['osk.deliv.3','osk.deliv.3'],['osk.deliv.4','osk.deliv.4']].forEach(([,k],i) => {
      if (!delivCards[i]) return;
      setText(delivCards[i].querySelector('.deliv-title'), k+'.title', lang);
      setText(delivCards[i].querySelector('.deliv-desc'),  k+'.desc',  lang);
    });

    /* team roles */
    const teamRoles = document.querySelectorAll('.team-role');
    if (teamRoles[0]) setText(teamRoles[0], 'osk.team.role',   lang);
    if (teamRoles[1]) setText(teamRoles[1], 'osk.client.role', lang);
  }

  /* ── UALINGO ─────────────────────────────────── */
  function applyUalingo(lang) {
    applySharedDetail(lang);
    setText(document.querySelector('.proj-category'), 'ualingo.category', lang);
    setText(document.querySelector('.proj-tagline'),  'ualingo.tagline',  lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'ualingo.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    setText(goalPs[0], 'ualingo.goal.p1', lang);
    setText(goalPs[1], 'ualingo.goal.p2', lang);
    const galH2 = document.querySelector('.gallery-section .section-h2');
    setText(galH2, 'ualingo.gallery', lang);

    const feats = document.querySelectorAll('.feat-item');
    for (let i = 0; i < 6; i++) {
      if (!feats[i]) continue;
      setText(feats[i].querySelector('.feat-title'), `ualingo.feat.${i+1}.title`, lang);
      setText(feats[i].querySelector('.feat-desc'),  `ualingo.feat.${i+1}.desc`,  lang);
    }

    const screensLabel = [...document.querySelectorAll('.section-label')].find(el => el.textContent.includes('Ekrany') || el.textContent.includes('Screens'));
    if (screensLabel) setText(screensLabel, 'ualingo.screens.label', lang);
    const screensH2 = [...document.querySelectorAll('.section-h2')].find(el => el.textContent.includes('Activities'));
    if (screensH2) setText(screensH2, 'ualingo.screens.title', lang);
  }

  /* ── PUBLIC API ──────────────────────────────── */
  return {
    apply,
    t,
    getPage,
    getLang: () => localStorage.getItem('lang') || 'pl',
  };

})();