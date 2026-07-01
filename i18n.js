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

    /* ════ QUIZ APP ════ */
    'quiz.category':        { pl: 'Mobile Development · React Native · Education', en: 'Mobile Development · React Native · Education' },
    'quiz.badge.uni':       { pl: 'Projekt własny', en: 'Personal project' },
    'quiz.tagline':         { pl: 'Mobilna aplikacja edukacyjna do rozwiązywania testów wielokrotnego wyboru — timer na każde pytanie, ranking wyników, tryb offline z SQLite i synchronizacja z REST API. React Native 0.82, TypeScript 91%.',
                              en: 'Mobile educational app for solving multiple-choice quizzes — per-question timer, score ranking, offline mode with SQLite and REST API sync. React Native 0.82, TypeScript 91%.' },
    'quiz.gallery.label':   { pl: 'Screenshoty', en: 'Screenshots' },
    'quiz.gallery.title':   { pl: 'Aplikacja w akcji', en: 'App in action' },
    'quiz.overlay.1':       { pl: 'Lista testów', en: 'Tests list' },
    'quiz.overlay.2':       { pl: 'Quiz z timerem', en: 'Timer quiz' },
    'quiz.overlay.3':       { pl: 'Wyniki', en: 'Results' },
    'quiz.lightbox.1':       { pl: 'HomeScreen — lista dostępnych testów z tagami', en: 'HomeScreen — list of available quizzes with tags' },
    'quiz.lightbox.2':       { pl: 'QuizScreen — pytanie z 4 odpowiedziami, timer i progress bar', en: 'QuizScreen — question with 4 answers, timer and progress bar' },
    'quiz.lightbox.3':       { pl: 'ResultsScreen — globalny ranking top 20, wynik użytkownika na żółto', en: 'ResultsScreen — global top 20 ranking, user score highlighted in yellow' },
    'quiz.goal.label':      { pl: 'Cel projektu', en: 'Project goal' },
    'quiz.goal.h2':         { pl: 'Nauka przez<br><span class="quiz-grad">quizy i ranking</span>', en: 'Learn through<br><span class="quiz-grad">quizzes and ranking</span>' },
    'quiz.goal.p1':         { pl: 'Quiz App to mobilna aplikacja edukacyjna do rozwiązywania testów wielokrotnego wyboru z zewnętrznego API tgryl.pl. Każde pytanie ma własny timer, a wyniki trafiają do globalnego rankingu.',
                              en: 'Quiz App is a mobile educational application for solving multiple-choice quizzes from the external tgryl.pl API. Each question has its own timer, and results are added to a global ranking.' },
    'quiz.goal.p2':         { pl: 'Aplikacja działa w pełni offline dzięki lokalnemu cache SQLite — testy są synchronizowane raz dziennie i dostępne bez połączenia z internetem.',
                              en: 'The app works fully offline thanks to a local SQLite cache — quizzes sync once per day and remain available without internet.' },
    'quiz.feat.1.title':    { pl: 'Testy wielokrotnego wyboru', en: 'Multiple-choice quizzes' },
    'quiz.feat.1.desc':     { pl: '4 opcje odpowiedzi (A/B/C/D), pytania i odpowiedzi losowane przy każdym uruchomieniu', en: '4 answer options (A/B/C/D), questions and answers randomized every launch' },
    'quiz.feat.2.title':    { pl: 'Timer na pytanie', en: 'Per-question timer' },
    'quiz.feat.2.desc':     { pl: 'Odliczanie czasu per pytanie, kolor czerwony gdy zostaje <5 sekund, auto-skip po upływie', en: 'Countdown per question, red color under 5 seconds, auto-skip when time expires' },
    'quiz.feat.3.title':    { pl: 'Globalny ranking', en: 'Global ranking' },
    'quiz.feat.3.desc':     { pl: 'Top 20 wyników z serwera, wynik użytkownika podświetlony na żółto, pull-to-refresh', en: 'Top 20 server results, user score highlighted in yellow, pull-to-refresh' },
    'quiz.feat.4.title':    { pl: 'Offline-first', en: 'Offline-first' },
    'quiz.feat.4.desc':     { pl: 'SQLite cache — testy dostępne bez internetu, synchronizacja automatyczna raz dziennie', en: 'SQLite cache — quizzes available offline, automatic daily sync' },
    'quiz.feat.5.title':    { pl: 'Losowy quiz', en: 'Random quiz' },
    'quiz.feat.5.desc':     { pl: 'Drawer z 5 losowymi testami i przyciskiem "Losowy Quiz" — nowe wyzwanie za każdym razem', en: 'Drawer with 5 random tests and a "Random Quiz" button — a new challenge every time' },
    'quiz.feat.6.title':    { pl: 'Onboarding', en: 'Onboarding' },
    'quiz.feat.6.desc':     { pl: 'Regulamin przy pierwszym uruchomieniu, stan zapisywany w AsyncStorage — pokazuje się tylko raz', en: 'Terms shown on first launch, state saved in AsyncStorage — shown only once' },
    'quiz.tech.1.name':     { pl: 'React Native 0.82', en: 'React Native 0.82' },
    'quiz.tech.1.desc':     { pl: 'Cross-platform framework — jeden kod dla Androida i iOS. React 19.1.1.', en: 'Cross-platform framework — one codebase for Android and iOS. React 19.1.1.' },
    'quiz.tech.2.name':     { pl: 'TypeScript 5.9', en: 'TypeScript 5.9' },
    'quiz.tech.2.desc':     { pl: '91% projektu w TypeScript — statyczne typowanie, strict mode, pełne bezpieczeństwo.', en: '91% of the project in TypeScript — static typing, strict mode, strong safety.' },
    'quiz.tech.3.name':     { pl: 'SQLite', en: 'SQLite' },
    'quiz.tech.3.desc':     { pl: 'react-native-sqlite-storage 6.0.1 — lokalna baza danych dla offline cache testów.', en: 'react-native-sqlite-storage 6.0.1 — local database for offline quiz cache.' },
    'quiz.tech.4.name':     { pl: 'React Navigation 7', en: 'React Navigation 7' },
    'quiz.tech.4.desc':     { pl: 'Stack Navigator — Onboarding → Home → Quiz → Results. Side Drawer menu.', en: 'Stack Navigator — Onboarding → Home → Quiz → Results. Side drawer menu.' },
    'quiz.tech.5.name':     { pl: 'NetInfo', en: 'NetInfo' },
    'quiz.tech.5.desc':     { pl: '@react-native-community/netinfo 11.4.1 — detekcja stanu sieci, przełączanie offline/online.', en: '@react-native-community/netinfo 11.4.1 — network state detection, offline/online switching.' },
    'quiz.tech.6.name':     { pl: 'AsyncStorage', en: 'AsyncStorage' },
    'quiz.tech.6.desc':     { pl: 'Preferencje użytkownika — stan onboardingu, lokalne wyniki i synchronizacja danych.', en: 'User preferences — onboarding state, local results and data sync.' },
    'quiz.arch.1.title':   { pl: 'Startup — initApp()', en: 'Startup — initApp()' },
    'quiz.arch.1.desc':    { pl: 'App.tsx inicjalizuje bazę danych, tworzy tabele SQLite, sprawdza onboarding w AsyncStorage i synchronizuje dane z API jeśli minął dzień od ostatniej synchronizacji.', en: 'App.tsx initializes the database, creates SQLite tables, checks onboarding status in AsyncStorage and syncs data from the API when a day has passed.' },
    'quiz.arch.2.title':   { pl: 'Offline-first — quizService', en: 'Offline-first — quizService' },
    'quiz.arch.2.desc':    { pl: 'Każde zapytanie o dane sprawdza najpierw lokalną bazę SQLite. Jeśli dane są — zwraca je bez wywołania API. NetInfo decyduje czy sieć jest dostępna.', en: 'Each data request checks the local SQLite database first. If data exists it returns it without calling the API. NetInfo decides if the network is available.' },
    'quiz.arch.3.title':   { pl: 'QuizScreen — timer', en: 'QuizScreen — timer' },
    'quiz.arch.3.desc':    { pl: 'Każde pytanie ma własny timer (np. 30s z API). Gdy zostaje <5 sekund — kolor czerwony. Po upływie czasu odpowiedzi blokowane, przejście dalej.', en: 'Each question has its own timer (e.g. 30s from the API). When less than 5 seconds remain it turns red. After time runs out answers lock and moves on.' },
    'quiz.arch.4.title':   { pl: 'SQLite — schemat', en: 'SQLite — schema' },
    'quiz.arch.4.desc':    { pl: 'Tabela tests przechowuje całe dane testu jako JSON, tabela meta przechowuje datę ostatniej synchronizacji.', en: 'The tests table stores full quiz data as JSON, the meta table stores the last synchronization date.' },
    'quiz.arch.5.title':   { pl: 'ResultsScreen — wyniki', en: 'ResultsScreen — results' },
    'quiz.arch.5.desc':    { pl: 'Wynik wysyłany na serwer przez POST po zakończeniu quizu. Tabela top 20 z API, wynik użytkownika podświetlony na żółto. Pull-to-refresh aktualizuje ranking.', en: 'Result is sent to the server via POST after the quiz. Top 20 table from the API, user result highlighted in yellow. Pull-to-refresh updates the ranking.' },
    'quiz.arch.6.title':   { pl: 'Drawer — side menu', en: 'Drawer — side menu' },
    'quiz.arch.6.desc':    { pl: 'Animowany drawer z lewej strony — 5 losowych testów, przycisk "Losowy Quiz", synchronizacja i nawigacja. Obsługuje offline — wyświetla z SQLite gdy brak sieci.', en: 'Animated drawer from the left — 5 random tests, "Random Quiz" button, sync and navigation. Supports offline — shows SQLite data when no network.' },
    'quiz.screens.label':   { pl: 'Ekrany', en: 'Screens' },
    'quiz.screens.title':   { pl: 'Struktura aplikacji', en: 'App structure' },
    'quiz.screen.1.desc':   { pl: 'Regulamin — pokazuje się tylko raz', en: 'Terms shown once' },
    'quiz.screen.2.desc':   { pl: 'Lista dostępnych testów z tagami', en: 'List of available quizzes with tags' },
    'quiz.screen.3.desc':   { pl: 'Pytania A/B/C/D z timerem i progress bar', en: 'A/B/C/D questions with timer and progress bar' },
    'quiz.screen.4.desc':   { pl: 'Top 20 globalny ranking z serwera', en: 'Top 20 global ranking from the server' },
    'quiz.screen.5.desc':   { pl: 'Side menu — losowe testy i sync', en: 'Side menu — random tests and sync' },
    'quiz.offline.label':   { pl: 'Offline', en: 'Offline' },
    'quiz.offline.title':   { pl: 'Tryb offline', en: 'Offline mode' },
    'quiz.offline.card1.title': { pl: '🏠 HomeScreen', en: '🏠 HomeScreen' },
    'quiz.offline.card1.online': { pl: 'Online: pobiera z API, zapisuje do SQLite', en: 'Online: fetches from API, saves to SQLite' },
    'quiz.offline.card1.offline': { pl: 'Offline: wyświetla z lokalnej bazy', en: 'Offline: displays from local DB' },
    'quiz.offline.card1.error': { pl: 'Offline + pusta baza: komunikat błędu', en: 'Offline + empty DB: error message' },
    'quiz.offline.card2.title': { pl: '❓ QuizScreen', en: '❓ QuizScreen' },
    'quiz.offline.card2.online': { pl: 'Online: pobiera szczegóły z API', en: 'Online: fetches details from API' },
    'quiz.offline.card2.offline': { pl: 'Offline: pobiera pytania z SQLite', en: 'Offline: fetches questions from SQLite' },
    'quiz.offline.card2.error': { pl: 'Offline + brak w bazie: błąd', en: 'Offline + missing cache: error' },
    'quiz.offline.card3.title': { pl: '🏆 ResultsScreen', en: '🏆 ResultsScreen' },
    'quiz.offline.card3.online': { pl: 'Online: top 20 z API + lokalne', en: 'Online: top 20 from API + local' },
    'quiz.offline.card3.offline': { pl: 'Offline: tylko lokalne wyniki', en: 'Offline: local results only' },
    'quiz.offline.card3.cache': { pl: 'Wyniki cache\'owane w AsyncStorage', en: 'Results cached in AsyncStorage' },
    'quiz.stats.framework': { pl: 'Framework', en: 'Framework' },
    'quiz.stats.language':  { pl: 'Język', en: 'Language' },
    'quiz.stats.storage':   { pl: 'Storage', en: 'Storage' },
    'quiz.stats.mode':      { pl: 'Tryb pracy', en: 'Mode' },
    'quiz.api.label':       { pl: 'API', en: 'API' },
    'quiz.api.title':       { pl: 'Endpointy — tgryl.pl', en: 'Endpoints — tgryl.pl' },
    'quiz.api.name':        { pl: 'Quiz API', en: 'Quiz API' },
    'quiz.api.ep.tests':    { pl: 'Lista dostępnych testów z tagami i liczbą pytań', en: 'List of available quizzes with tags and question count' },
    'quiz.api.ep.test':     { pl: 'Szczegóły testu — pytania, odpowiedzi, czas (duration)', en: 'Quiz details — questions, answers, duration' },
    'quiz.api.ep.results':  { pl: 'Top 20 wyników globalnego rankingu', en: 'Top 20 global ranking results' },
    'quiz.api.ep.result':   { pl: 'Wysłanie wyniku — nick, score, total, type', en: 'Send result — nick, score, total, type' },
    'quiz.langs.label':     { pl: 'Języki', en: 'Languages' },
    'quiz.langs.title':     { pl: 'Skład projektu', en: 'Project composition' },
    'quiz.lang.1.name':     { pl: 'TypeScript', en: 'TypeScript' },
    'quiz.lang.1.pct':      { pl: '91%', en: '91%' },
    'quiz.lang.1.title':    { pl: 'TypeScript — logika aplikacji', en: 'TypeScript — application logic' },
    'quiz.lang.1.desc':     { pl: 'Screens, services, database layer, typy danych — 91% całego kodu', en: 'Screens, services, database layer, data types — 91% of code' },
    'quiz.lang.2.name':     { pl: 'Kotlin', en: 'Kotlin' },
    'quiz.lang.2.pct':      { pl: '3.4%', en: '3.4%' },
    'quiz.lang.2.title':    { pl: 'Kotlin — natywny Android', en: 'Kotlin — native Android' },
    'quiz.lang.2.desc':     { pl: 'Natywne moduły i konfiguracja Gradle dla warstwy Android', en: 'Native modules and Gradle configuration for Android layer' },
    'quiz.lang.3.name':     { pl: 'Ruby', en: 'Ruby' },
    'quiz.lang.3.pct':      { pl: '2.3%', en: '2.3%' },
    'quiz.lang.3.title':    { pl: 'Ruby — CocoaPods iOS', en: 'Ruby — CocoaPods iOS' },
    'quiz.lang.3.desc':     { pl: 'Gemfile i CocoaPods do zarządzania zależnościami iOS', en: 'Gemfile and CocoaPods for iOS dependency management' },
    'quiz.lang.4.name':     { pl: 'Swift', en: 'Swift' },
    'quiz.lang.4.pct':      { pl: '2%', en: '2%' },
    'quiz.lang.5.name':     { pl: 'JavaScript', en: 'JavaScript' },
    'quiz.lang.5.pct':      { pl: '1.3%', en: '1.3%' },
    'quiz.build.label':     { pl: 'Instalacja', en: 'Installation' },
    'quiz.build.title':     { pl: 'Jak uruchomić', en: 'How to run' },
    'quiz.req.title':       { pl: 'Wymagania', en: 'Requirements' },
    'quiz.step.1.title':    { pl: 'Klonuj i zainstaluj zależności', en: 'Clone and install dependencies' },
    'quiz.step.2.title':    { pl: 'Zainstaluj zależności iOS (tylko macOS)', en: 'Install iOS dependencies (macOS only)' },
    'quiz.step.3.title':    { pl: 'Uruchom Metro i aplikację', en: 'Run Metro and the app' },
    'quiz.btn.api':         { pl: 'API', en: 'API' },

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
    'racing.tech.1.name': { pl: 'C++17', en: 'C++17' },
    'racing.tech.1.desc': { pl: 'Język główny. Pełna kontrola pamięci i wydajność wymagana w aplikacjach czasu rzeczywistego.', en: 'Main language. Full memory control and performance needed in real-time applications.' },
    'racing.tech.2.name': { pl: 'OpenGL 3.3', en: 'OpenGL 3.3' },
    'racing.tech.2.desc': { pl: 'Core Profile — nowoczesny potok renderowania z shaderami GLSL, VBO/VAO/EBO.', en: 'Core Profile — modern rendering pipeline with GLSL shaders, VBO/VAO/EBO.' },
    'racing.tech.3.name': { pl: 'Bullet Physics', en: 'Bullet Physics' },
    'racing.tech.3.desc': { pl: 'Symulacja fizyki bryły sztywnej. Model btRaycastVehicle z zawieszeniem i tarciem opon.', en: 'Rigid body physics simulation. btRaycastVehicle model with suspension and tire friction.' },
    'racing.tech.4.name': { pl: 'GLFW + GLAD', en: 'GLFW + GLAD' },
    'racing.tech.4.desc': { pl: 'Tworzenie okna, kontekstu OpenGL i obsługa urządzeń wejścia.', en: 'Window/context creation and input device handling.' },
    'racing.tech.5.name': { pl: 'GLM', en: 'GLM' },
    'racing.tech.5.desc': { pl: 'Biblioteka matematyczna — wektory, macierze transformacji, rzutowanie perspektywiczne.', en: 'Math library — vectors, transform matrices, perspective projection.' },
    'racing.tech.6.name': { pl: 'ImGui', en: 'ImGui' },
    'racing.tech.6.desc': { pl: 'Immediate Mode GUI — menu, HUD z licznikiem prędkości, ekrany końcowe.', en: 'Immediate Mode GUI — menu, speedometer HUD, end screens.' },
    'racing.tech.7.name': { pl: 'Miniaudio', en: 'Miniaudio' },
    'racing.tech.7.desc': { pl: 'Lekka biblioteka audio do odtwarzania dźwięku silnika z dynamicznym pitchem.', en: 'Light audio library for engine sound playback with dynamic pitch.' },
    'racing.tech.8.name': { pl: 'CMake + vcpkg', en: 'CMake + vcpkg' },
    'racing.tech.8.desc': { pl: 'System budowania i zarządzanie zależnościami niezależny od IDE.', en: 'Build system and dependency management independent of IDE.' },
    'racing.arch.1.title': { pl: 'Maszyna stanów', en: 'State machine' },
    'racing.arch.1.desc': { pl: 'Aplikacja działa w trzech stanach: SPLASH_SCREEN, MAIN_MENU i RACING. Każdy stan determinuje co jest renderowane w danej klatce.', en: 'The app runs in three states: SPLASH_SCREEN, MAIN_MENU and RACING. Each state determines what is rendered in each frame.' },
    'racing.arch.2.title': { pl: 'Pętla gry + Delta Time', en: 'Game loop + Delta Time' },
    'racing.arch.2.desc': { pl: 'Każda klatka: przetwarzanie wejścia → aktualizacja fizyki → renderowanie. Delta Time zapewnia tę samą prędkość gry na 30 i 144 FPS.', en: 'Each frame: input processing → physics update → rendering. Delta Time keeps the same game speed at 30 and 144 FPS.' },
    'racing.arch.3.title': { pl: 'Shader Phonga (GLSL)', en: 'Phong shader (GLSL)' },
    'racing.arch.3.desc': { pl: 'Model oświetlenia z trzema składnikami: ambient, diffuse, specular. Autorskie shadery phong.vert i phong.frag.', en: 'Lighting model with ambient, diffuse and specular components. Custom shaders phong.vert and phong.frag.' },
    'racing.arch.4.title': { pl: 'Własny parser OBJ', en: 'Custom OBJ parser' },
    'racing.arch.4.desc': { pl: 'Klasa Karting parsuje format Wavefront OBJ linia po linii, z automatycznym generowaniem normalnych przez iloczyn wektorowy.', en: 'Karting class parses Wavefront OBJ line by line, auto-generating normals via cross product.' },
    'racing.arch.5.title': { pl: 'Fizyka — btRaycastVehicle', en: 'Physics — btRaycastVehicle' },
    'racing.arch.5.desc': { pl: 'Każde koło rzuca promień (raycast) do podłoża. Siła zawieszenia, tarcie i silnik są obliczane osobno dla każdego koła przez Bullet Physics.', en: 'Each wheel casts a ray to the ground. Suspension force, friction and engine are computed per wheel by Bullet Physics.' },
    'racing.arch.6.title': { pl: 'AI — Waypoints + P-Controller', en: 'AI — Waypoints + P-Controller' },
    'racing.arch.6.desc': { pl: 'Przeciwnik podąża za punktami nawigacyjnymi toru. Kąt skrętu obliczany przez atan2 i ograniczany przez glm::clamp.', en: 'The opponent follows track waypoints. Steering angle is calculated by atan2 and clamped using glm::clamp.' },

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
    'wyspa.tech.1.name': { pl: 'Unity 3D', en: 'Unity 3D' },
    'wyspa.tech.1.desc': { pl: 'Główny silnik gry. Obsługa scen, fizyki, oświetlenia i systemu cząsteczek.', en: 'Main game engine. Scene, physics, lighting and particle system support.' },
    'wyspa.tech.2.name': { pl: 'C#', en: 'C#' },
    'wyspa.tech.2.desc': { pl: 'Skrypty gameplay — sterowanie graczem, logika AI, zarządzanie stanem gry i UI.', en: 'Gameplay scripts — player control, AI logic, game state and UI management.' },
    'wyspa.tech.3.name': { pl: 'NavMesh AI', en: 'NavMesh AI' },
    'wyspa.tech.3.desc': { pl: 'Unity Navigation Mesh — automatyczne wyznaczanie tras dla wilka na terenie wyspy.', en: 'Unity Navigation Mesh — automatic pathfinding for the wolf across the island.' },
    'wyspa.tech.4.name': { pl: 'FPS Controller', en: 'FPS Controller' },
    'wyspa.tech.4.desc': { pl: 'Własny kontroler pierwszoosobowy z raycastingiem do interakcji z obiektami.', en: 'Custom first-person controller with raycasting for object interactions.' },
    'wyspa.tech.5.name': { pl: 'Particle System', en: 'Particle System' },
    'wyspa.tech.5.desc': { pl: 'Efekty cząsteczkowe — dym wulkanu, płomienie ogniska, unoszące się pyłki.', en: 'Particle effects — volcano smoke, campfire flames, floating dust.' },
    'wyspa.tech.6.name': { pl: 'Animator', en: 'Animator' },
    'wyspa.tech.6.desc': { pl: 'Unity Animator Controller — animacje wilka (patrol, bieg, atak) i otwarcia skrzyni.', en: 'Unity Animator Controller — wolf animations (patrol, run, attack) and chest opening.' },
    'wyspa.tech.7.name': { pl: 'Unity UI', en: 'Unity UI' },
    'wyspa.tech.7.desc': { pl: 'Canvas — HUD z licznikiem zebranych artefaktów, ekrany wygranej i porażki.', en: 'Canvas — HUD with collected artifact counter, victory and defeat screens.' },
    'wyspa.tech.8.name': { pl: 'URP Lighting', en: 'URP Lighting' },
    'wyspa.tech.8.desc': { pl: 'Universal Render Pipeline z dynamicznym oświetleniem i mgłą atmosferyczną.', en: 'Universal Render Pipeline with dynamic lighting and atmospheric fog.' },
    'wyspa.arch.1.title': { pl: 'AI Wilka — stany', en: 'Wolf AI — states' },
    'wyspa.arch.1.desc': { pl: 'Wilk operuje w trzech stanach: Patrol, Chase i Attack. Przejście między nimi steruje NavMeshAgent w zależności od odległości i pola widzenia gracza.', en: 'The wolf operates in three states: Patrol, Chase and Attack. Transitions are controlled by NavMeshAgent based on distance and player line of sight.' },
    'wyspa.arch.2.title': { pl: 'Raycasting — interakcje', en: 'Raycasting — interactions' },
    'wyspa.arch.2.desc': { pl: 'Każda klatka kamera rzuca promień w przód. Trafienie w obiekt z tagiem Interactable wyświetla podpowiedź i wywołuje akcję.', en: 'Each frame the camera casts a forward ray. Hitting an Interactable object shows a hint and triggers an action.' },
    'wyspa.arch.3.title': { pl: 'Minigra — timer i cele', en: 'Minigame — timer and targets' },
    'wyspa.arch.3.desc': { pl: 'Skrypt odlicza 5 sekund i zlicza trafienia w 3 cele. Po spełnieniu warunku wywołuje animację otwarcia skrzyni przez Animator.', en: 'The script counts down 5 seconds and tracks hits on 3 targets. On success it triggers the chest open animation via Animator.' },
    'wyspa.arch.4.title': { pl: 'System postępu', en: 'Progress system' },
    'wyspa.arch.4.desc': { pl: 'GameManager przechowuje liczbę zebranych artefaktów. Dopiero po zebraniu wszystkich gracz może zapalić ognisko i wygrać grę.', en: 'GameManager stores the number of collected artifacts. Only after collecting all can the player light the campfire and win.' },
    'wyspa.arch.5.title': { pl: 'Atmosfera — mgła i oświetlenie', en: 'Atmosphere — fog and lighting' },
    'wyspa.arch.5.desc': { pl: 'Mgła skonfigurowana przez Unity URP — gęstość rośnie wraz z odległością. Wulkan emituje ciągły system cząsteczek z dymem i popiołem.', en: 'Fog is configured through Unity URP — density increases with distance. The volcano emits a continuous particle system of smoke and ash.' },
    'wyspa.arch.6.title': { pl: 'Warunki wygranej / porażki', en: 'Win / lose conditions' },
    'wyspa.arch.6.desc': { pl: 'Gracz wygrywa zapalając ognisko z zebranymi zapałkami. Przegrywa gdy wilk dotknie go lub gdy minie limit czasu.', en: 'The player wins by lighting the campfire with matches. They lose if the wolf touches them or time runs out.' },

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
    'blog.tech.1.name': { pl: 'Angular 17+', en: 'Angular 17+' },
    'blog.tech.1.desc': { pl: 'Standalone Components, lazy loading tras, Angular Universal (SSR), reactive forms.', en: 'Standalone Components, lazy route loading, Angular Universal (SSR), reactive forms.' },
    'blog.tech.2.name': { pl: 'TypeScript', en: 'TypeScript' },
    'blog.tech.2.desc': { pl: 'Silne typowanie — modele, serwisy, interfejsy. 41.9% kodu projektu.', en: 'Strong typing — models, services, interfaces. 41.9% of project code.' },
    'blog.tech.3.name': { pl: 'SCSS', en: 'SCSS' },
    'blog.tech.3.desc': { pl: 'Globalne style, zmienne CSS, media queries — pełna responsywność i dark mode.', en: 'Global styles, CSS variables, media queries — full responsiveness and dark mode.' },
    'blog.tech.4.name': { pl: 'Node.js + Express', en: 'Node.js + Express' },
    'blog.tech.4.desc': { pl: 'RESTful API — endpointy dla postów, użytkowników, uploadów i aktywności.', en: 'RESTful API — endpoints for posts, users, uploads and activity.' },
    'blog.tech.5.name': { pl: 'JWT Auth', en: 'JWT Auth' },
    'blog.tech.5.desc': { pl: 'Tokeny 24h, role user/admin, walidacja przy każdym zapytaniu do API.', en: '24h tokens, user/admin roles, validation on every API request.' },
    'blog.tech.6.name': { pl: 'Multer', en: 'Multer' },
    'blog.tech.6.desc': { pl: 'Obsługa multipart upload — obrazy do 5MB zapisywane w backend/uploads/.', en: 'Multipart upload support — images up to 5MB saved in backend/uploads/.' },
    'blog.tech.7.name': { pl: 'JSON Storage', en: 'JSON Storage' },
    'blog.tech.7.desc': { pl: 'Dane postów i aktywności przechowywane w posts.json i activity.json.', en: 'Post and activity data stored in posts.json and activity.json.' },
    'blog.tech.8.name': { pl: 'Angular Universal', en: 'Angular Universal' },
    'blog.tech.8.desc': { pl: 'Server-Side Rendering przez main.server.ts — lepsza wydajność i SEO.', en: 'Server-Side Rendering via main.server.ts — better performance and SEO.' },
    'blog.arch.1.title': { pl: 'Autoryzacja — JWT Guards', en: 'Authorization — JWT Guards' },
    'blog.arch.1.desc': { pl: 'AuthGuard sprawdza ważność tokena JWT przed wejściem na chronioną trasę. AdminGuard dodatkowo weryfikuje rolę użytkownika z payloadu tokena.', en: 'AuthGuard checks JWT validity before entering a protected route. AdminGuard also verifies the user role from the token payload.' },
    'blog.arch.2.title': { pl: 'System ocen (Rating)', en: 'Rating system' },
    'blog.arch.2.desc': { pl: 'RatingService przechowuje wszystkie głosy per post w localStorage. Średnia obliczana dynamicznie — wyświetlana jako gwiazdki z liczbą głosów.', en: 'RatingService stores all votes per post in localStorage. The average is calculated dynamically — shown as stars with vote count.' },
    'blog.arch.3.title': { pl: 'Upload plików', en: 'File upload' },
    'blog.arch.3.desc': { pl: 'Multer obsługuje multipart/form-data. Walidacja MIME tylko do obrazów, limit 5MB, sanityzacja nazwy pliku przed zapisem na dysk.', en: 'Multer handles multipart/form-data. MIME validation for images only, 5MB limit, filename sanitization before disk save.' },
    'blog.arch.4.title': { pl: 'Dziennik aktywności', en: 'Activity log' },
    'blog.arch.4.desc': { pl: 'Każda akcja (login, create_post, delete_post) zapisywana z timestampem do activity.json. Użytkownik widzi swój feed akcji w widoku Aktywność.', en: 'Each action (login, create_post, delete_post) is saved with a timestamp to activity.json. The user sees their action feed in the Activity view.' },
    'blog.arch.5.title': { pl: 'Paginacja — custom pipe', en: 'Pagination — custom pipe' },
    'blog.arch.5.desc': { pl: 'Niestandardowy Angular pipe dzieli listę postów na strony. Zastosowany w BlogHomeComponent bez dodatkowych bibliotek.', en: 'Custom Angular pipe splits the post list into pages. Used in BlogHomeComponent without extra libraries.' },
    'blog.arch.6.title': { pl: 'Dark / Light Mode', en: 'Dark / Light Mode' },
    'blog.arch.6.desc': { pl: 'ThemeService przełącza klasę na body i zapisuje preferencje w localStorage. Zmiany CSS przez custom properties — brak przeładowania strony.', en: 'ThemeService toggles a class on body and saves preferences to localStorage. CSS changes via custom properties — no page reload.' },

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
    'osk.tech.1.name': { pl: 'HTML5 / CSS3', en: 'HTML5 / CSS3' },
    'osk.tech.1.desc': { pl: 'Semantyczny markup i nowoczesny CSS — Flexbox, Grid, animacje, custom properties.', en: 'Semantic markup and modern CSS — Flexbox, Grid, animations, custom properties.' },
    'osk.tech.2.name': { pl: 'JavaScript', en: 'JavaScript' },
    'osk.tech.2.desc': { pl: 'Vanilla JS — hamburger menu, FAQ accordion, walidacja formularzy, lightbox galerii.', en: 'Vanilla JS — hamburger menu, FAQ accordion, form validation, gallery lightbox.' },
    'osk.tech.3.name': { pl: 'PHP', en: 'PHP' },
    'osk.tech.3.desc': { pl: 'Backend strony, logika panelu admina, routing i obsługa sesji autoryzacji.', en: 'Site backend, admin panel logic, routing and authentication session handling.' },
    'osk.tech.4.name': { pl: 'MySQL', en: 'MySQL' },
    'osk.tech.4.desc': { pl: 'Baza danych dla aktualności, dat kursów i dziennych liczników odwiedzin.', en: 'Database for news, course dates and daily visit counters.' },
    'osk.tech.5.name': { pl: 'Panel Admina', en: 'Admin Panel' },
    'osk.tech.5.desc': { pl: 'Chroniony hasłem interfejs — zarządzanie treścią bez dotykania kodu przez klienta.', en: 'Password-protected interface — content management without touching code.' },
    'osk.tech.6.name': { pl: 'cPanel / Hosting', en: 'cPanel / Hosting' },
    'osk.tech.6.desc': { pl: 'Wdrożenie na hostingu współdzielonym, konfiguracja domeny i certyfikat SSL.', en: 'Deployed on shared hosting, domain configuration and SSL setup.' },
    'osk.arch.1.title': { pl: 'Terminy kursów — 3 daty', en: 'Course dates — 3 timestamps' },
    'osk.arch.1.desc': { pl: 'Admin zarządza trzema datami: poprzedni, najbliższy i kolejny kurs. Najbliższy termin pojawia się jako pływający przycisk na każdej podstronie.', en: 'Admin manages three dates: previous, next and upcoming course. The nearest date appears as a floating button on every subpage.' },
    'osk.arch.2.title': { pl: 'System aktualności', en: 'News system' },
    'osk.arch.2.desc': { pl: 'Formularz w panelu admina zapisuje post (tytuł, treść, zdjęcie) do MySQL. Strona wyświetla posty posortowane od najnowszych.', en: 'The admin panel form saves a post (title, content, image) to MySQL. The site displays posts sorted newest first.' },
    'osk.arch.3.title': { pl: 'Licznik odwiedzin', en: 'Visit counter' },
    'osk.arch.3.desc': { pl: 'Przy każdym wejściu na stronę PHP upsertuje rekord dla dzisiejszej daty. Panel admina wyświetla dzienny wykres.', en: 'On each page visit PHP upserts a record for today’s date. The admin panel shows a daily chart.' },
    'osk.arch.4.title': { pl: 'Autoryzacja admina', en: 'Admin authorization' },
    'osk.arch.4.desc': { pl: 'Panel dostępny jest tylko po zalogowaniu. Sesja trwa do wylogowania lub zamknięcia przeglądarki.', en: 'The panel is available only after login. The session lasts until logout or browser close.' },
    'osk.arch.5.title': { pl: 'FAQ Accordion', en: 'FAQ Accordion' },
    'osk.arch.5.desc': { pl: 'Najczęściej zadawane pytania w formie rozwijalnych kart — zmniejsza liczbę telefonów do biura.', en: 'Frequently asked questions as expandable cards — reduces office phone calls.' },
    'osk.arch.6.title': { pl: 'Timeline "Jak zacząć"', en: 'Timeline "How to start"' },
    'osk.arch.6.desc': { pl: 'Krok po kroku: Zapisz się → PKK → Kurs → Egzamin', en: 'Step by step: Sign up → PKK → Course → Exam' },

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
    'ualingo.tech.1.name': { pl: 'Java 11', en: 'Java 11' },
    'ualingo.tech.1.desc': { pl: '100% kodu aplikacji — Activity-based architecture, MVC-like pattern.', en: '100% app code — Activity-based architecture, MVC-like pattern.' },
    'ualingo.tech.2.name': { pl: 'Android SDK 35', en: 'Android SDK 35' },
    'ualingo.tech.2.desc': { pl: 'Target API 35 (Android 15), minSdk 23 (Android 6.0) — szeroka kompatybilność.', en: 'Target API 35 (Android 15), minSdk 23 (Android 6.0) — wide compatibility.' },
    'ualingo.tech.3.name': { pl: 'Firebase Auth', en: 'Firebase Auth' },
    'ualingo.tech.3.desc': { pl: 'Email/hasło + Google OAuth 2.0. Persystencja sesji i reset hasła.', en: 'Email/password + Google OAuth 2.0. Session persistence and password reset.' },
    'ualingo.tech.4.name': { pl: 'Firebase Analytics', en: 'Firebase Analytics' },
    'ualingo.tech.4.desc': { pl: 'Analityka zdarzeń w aplikacji — śledzenie aktywności użytkowników.', en: 'In-app event analytics — tracking user activity.' },
    'ualingo.tech.5.name': { pl: 'Material Design', en: 'Material Design' },
    'ualingo.tech.5.desc': { pl: 'Material 1.12.0 — komponenty UI, ConstraintLayout, SwipeRefreshLayout.', en: 'Material 1.12.0 — UI components, ConstraintLayout, SwipeRefreshLayout.' },
    'ualingo.tech.6.name': { pl: 'Gradle 8.0+', en: 'Gradle 8.0+' },
    'ualingo.tech.6.desc': { pl: 'System budowania, ProGuard obfuskacja dla release build, vcpkg zależności.', en: 'Build system, ProGuard obfuscation for release builds, dependency management.' },
    'ualingo.arch.1.title': { pl: 'Logowanie Firebase', en: 'Firebase login' },
    'ualingo.arch.1.desc': { pl: 'Obsługa email/hasło oraz Google OAuth 2.0 przez Firebase Authentication. Po zalogowaniu sesja jest persystowana — użytkownik nie musi logować się przy każdym uruchomieniu.', en: 'Email/password and Google OAuth 2.0 handled by Firebase Authentication. Session is persisted — the user does not need to log in on every launch.' },
    'ualingo.arch.2.title': { pl: 'Quiz — timer 60 sekund', en: 'Quiz — 60 second timer' },
    'ualingo.arch.2.desc': { pl: 'CountDownTimer odlicza 60 sekund na każde pytanie. Po upływie czasu odpowiedzi są blokowane. Animacja kolorów ValueAnimator wizualizuje poprawną/błędną odpowiedź.', en: 'CountDownTimer counts 60 seconds for each question. When time runs out answers are locked. ValueAnimator color animation shows correct/wrong answers.' },
    'ualingo.arch.3.title': { pl: 'Animacja odpowiedzi', en: 'Answer animation' },
    'ualingo.arch.3.desc': { pl: 'ValueAnimator płynnie zmienia kolor tekstu odpowiedzi z białego na zielony (poprawna) lub czerwony (błędna) w czasie 500ms.', en: 'ValueAnimator smoothly changes answer text color from white to green (correct) or red (wrong) over 500ms.' },
    'ualingo.arch.4.title': { pl: 'Przełączanie języków', en: 'Language switch' },
    'ualingo.arch.4.desc': { pl: 'Oddzielne Activities dla wersji ukraińskiej i angielskiej. Przycisk flagi w menu głównym startuje nową Activity z odpowiednim językiem.', en: 'Separate Activities for Ukrainian and English versions. The flag button in the main menu starts a new Activity with the chosen language.' },
    'ualingo.arch.5.title': { pl: 'Word Search — siatka 7×6', en: 'Word Search — 7×6 grid' },
    'ualingo.arch.5.desc': { pl: 'Interaktywna plansza z literami cyrylicy. Użytkownik zaznacza litery po kolei — po znalezieniu słowa licznik się zwiększa i słowo zostaje podświetlone.', en: 'Interactive Cyrillic board. The user selects letters in order — when a word is found the counter increases and the word is highlighted.' },
    'ualingo.arch.6.title': { pl: '18 Activities — nawigacja', en: '18 Activities — navigation' },
    'ualingo.arch.6.desc': { pl: 'Dolny pasek nawigacyjny z 3 ikonami (Dom, Gry, Profil) dostępny na każdym ekranie. Intent-based routing między wszystkimi 18 Activities.', en: 'Bottom navigation bar with 3 icons (Home, Games, Profile) available on every screen. Intent-based routing between all 18 Activities.' },
    /* ════ IOT APP ════ */
    'iot.category': { pl: 'Mobile Development · React Native · IoT', en: 'Mobile Development · React Native · IoT' },
    'iot.tagline':  { pl: 'Cross-platform aplikacja mobilna do sterowania urządzeniami smart home — dodawaj lampy, rolety i inne urządzenia, przypisuj im miejsce, kolor i komendy sterujące.',
              en: 'Cross-platform mobile app for smart home control — add lights, blinds and other devices, assign room, color and control commands.' },
    'iot.goal.h2':  { pl: 'Smart home<br/><span class="iot-grad">w zasięgu ręki</span>', en: 'Smart home<br/><span class="iot-grad">at your fingertips</span>' },
    'iot.goal.p1':  { pl: 'IoT App to cross-platform aplikacja mobilna do sterowania urządzeniami smart home — lampami, roletami i innymi urządzeniami IoT. Użytkownik sam definiuje urządzenia, nadaje im nazwy, przypisuje pomieszczenie, komendy sterujące i kolor identyfikacyjny.',
              en: 'IoT App is a cross-platform mobile application for controlling smart home devices — lights, blinds and other IoT gadgets. Users define devices, give them names, assign rooms, control commands and an identifying color.' },
    'iot.goal.p2':  { pl: 'Dolny pasek nawigacyjny przełącza między widokiem urządzeń (Devices) a konfiguracją połączenia (Connection). Aplikacja działa natywnie na Androidzie i iOS z jednej bazy kodu React Native.',
              en: 'The bottom navigation switches between Devices view and Connection settings. The app runs natively on Android and iOS from a single React Native codebase.' },
    'iot.gallery':  { pl: 'Aplikacja w akcji', en: 'App in action' },
    'iot.feat.1.title': { pl: 'Cross-platform', en: 'Cross-platform' },
    'iot.feat.1.desc':  { pl: 'Jedna baza kodu działa natywnie na Androidzie i iOS — React Native 0.83.1', en: 'One codebase runs natively on Android and iOS — React Native 0.83.1' },
    'iot.feat.2.title': { pl: 'Dodawanie urządzeń', en: 'Add devices' },
    'iot.feat.2.desc':  { pl: 'Formularz z nazwą (np. Lampa), miejscem (np. Kuchnia) i komendą sterującą', en: 'Form with name (e.g. Lamp), location (e.g. Kitchen) and control command' },
    'iot.feat.3.title': { pl: 'Wybór koloru', en: 'Color selection' },
    'iot.feat.3.desc':  { pl: '8 pastelowych kolorów do oznaczenia urządzeń — szybka identyfikacja na liście', en: '8 pastel colours to mark devices — quick identification in the list' },
    'iot.feat.4.title': { pl: 'Siatka urządzeń', en: 'Devices grid' },
    'iot.feat.4.desc':  { pl: 'Przejrzysty grid z kafelkami — każde urządzenie z nazwą, miejscem i kolorem tła', en: 'Clear grid of tiles — each device shows name, room and background colour' },
    'iot.feat.5.title': { pl: 'Usuwanie urządzeń', en: 'Remove devices' },
    'iot.feat.5.desc':  { pl: 'Przycisk ✕ na każdym kafelku do szybkiego usunięcia urządzenia z listy', en: 'A ✕ button on each tile for quick removal from the list' },
    'iot.feat.6.title': { pl: 'Zakładka Connection', en: 'Connection tab' },
    'iot.feat.6.desc':  { pl: 'Dolny pasek nawigacyjny — Devices i Connection do konfiguracji połączenia IoT', en: 'Bottom navigation — Devices and Connection for configuring IoT connection' },
    'iot.tech.1.name': { pl: 'React Native', en: 'React Native' },
    'iot.tech.1.desc': { pl: 'Framework mobilny — Android i iOS z jednej bazy kodu.', en: 'Mobile framework — Android and iOS from one codebase.' },
    'iot.tech.2.name': { pl: 'TypeScript', en: 'TypeScript' },
    'iot.tech.2.desc': { pl: 'Statyczna typizacja i lepsze podpowiedzi IDE.', en: 'Static typing and better IDE hints.' },
    'iot.tech.3.name': { pl: 'Kotlin / Swift', en: 'Kotlin / Swift' },
    'iot.tech.3.desc': { pl: 'Warstwy natywne dla Androida i iOS.', en: 'Native layers for Android and iOS.' },
    'iot.tech.4.name': { pl: 'Metro Bundler', en: 'Metro Bundler' },
    'iot.tech.4.desc': { pl: 'JavaScript bundler zoptymalizowany dla React Native.', en: 'JavaScript bundler optimized for React Native.' },
    'iot.tech.5.name': { pl: 'Jest', en: 'Jest' },
    'iot.tech.5.desc': { pl: 'Unit testy i snapshoty.', en: 'Unit tests and snapshots.' },
    'iot.tech.6.name': { pl: 'TypeScript tooling', en: 'TypeScript tooling' },
    'iot.tech.6.desc': { pl: 'ESLint, Prettier i konfiguracja TS.', en: 'ESLint, Prettier and TS configuration.' },
    'iot.arch.1.title': { pl: 'Punkt wejścia — index.js', en: 'Entry point — index.js' },
    'iot.arch.1.desc':  { pl: 'Aplikacja startuje z index.js, który rejestruje główny komponent App w React Native runtime.', en: 'The app starts from index.js which registers the main App component in the React Native runtime.' },
    'iot.arch.2.title': { pl: 'Dark Mode — useColorScheme', en: 'Dark Mode — useColorScheme' },
    'iot.arch.2.desc':  { pl: 'Hook useColorScheme() odczytuje motyw systemowy i dostosowuje StatusBar oraz style komponentów.', en: 'The useColorScheme() hook reads the system theme and adapts StatusBar and component styles.' },
    'iot.arch.3.title': { pl: 'Safe Area Context', en: 'Safe Area Context' },
    'iot.arch.3.desc':  { pl: 'SafeAreaProvider opakowuje całą aplikację, a useSafeAreaInsets() dostarcza marginesy dla notchów, Dynamic Island i pasków systemowych.', en: 'SafeAreaProvider wraps the entire app, and useSafeAreaInsets() provides inset values for notches, Dynamic Island, and system bars.' },
    'iot.arch.4.title': { pl: 'Build — Android (Gradle)', en: 'Build — Android (Gradle)' },
    'iot.arch.4.desc':  { pl: 'Metro tworzy JavaScript bundle, Gradle kompiluje Kotlin i pakuje wszystko do APK/AAB. Pełny pipeline przez React Native Community CLI.', en: 'Metro creates the JavaScript bundle, Gradle compiles Kotlin and packages everything into APK/AAB. Full pipeline via React Native Community CLI.' },
    'iot.arch.5.title': { pl: 'Build — iOS (Xcode)', en: 'Build — iOS (Xcode)' },
    'iot.arch.5.desc':  { pl: 'CocoaPods zarządza zależnościami Swift/ObjC, Xcode kompiluje natywny kod iOS. Metro dostarcza JavaScript bundle dla symulatora i urządzenia.', en: 'CocoaPods manages Swift/ObjC dependencies, Xcode compiles native iOS code. Metro delivers the JavaScript bundle for simulator and device.' },
    'iot.arch.6.title': { pl: 'TypeScript — konfiguracja', en: 'TypeScript — configuration' },
    'iot.arch.6.desc':  { pl: 'Strict mode TypeScript z konfiguracją @react-native/typescript-config i ESLint do statycznej analizy kodu.', en: 'TypeScript strict mode with @react-native/typescript-config and ESLint for static code analysis.' },
    /* ════ IOT — LANGUAGES / IMAGE CAPTIONS ════ */
    'iot.langs.label': { pl: 'Skład projektu', en: 'Project composition' },
    'iot.stats.framework': { pl: 'Framework', en: 'Framework' },
    'iot.stats.language': { pl: 'Język', en: 'Language' },
    'iot.stats.platforms': { pl: 'Platformy', en: 'Platforms' },
    'iot.stats.project': { pl: 'W projekcie', en: 'In the project' },
    'iot.stats.languages': { pl: '5 języków', en: '5 languages' },
    'iot.deps.label': { pl: 'Zależności', en: 'Dependencies' },
    'iot.deps.title': { pl: 'Biblioteki', en: 'Libraries' },
    'iot.dep.react.desc': { pl: 'Biblioteka UI', en: 'Core UI library' },
    'iot.dep.react-native.desc': { pl: 'Framework mobilny', en: 'Mobile framework' },
    'iot.dep.safearea.desc': { pl: 'Obsługa notchów i safe areas', en: 'Notch and safe area support' },
    'iot.dep.newapp.desc': { pl: 'Gotowe ekrany startowe', en: 'Ready-made start screens' },
    'iot.dep.typescript.desc': { pl: 'Statyczna typizacja', en: 'Static typing' },
    'iot.dep.jest.desc': { pl: 'Framework testowy', en: 'Test framework' },
    'iot.dep.eslint.desc': { pl: 'Statyczna analiza kodu', en: 'Static code analysis' },
    'iot.dep.prettier.desc': { pl: 'Formatowanie kodu', en: 'Code formatting' },
    'iot.dep.babel.desc': { pl: 'Transpilacja JS/TS', en: 'JS/TS transpilation' },
    'iot.dep.cli.desc': { pl: 'CLI do build i run', en: 'CLI for build and run' },
    'iot.dep.renderer.desc': { pl: 'Renderowanie komponentów w testach', en: 'Component rendering in tests' },
    'iot.step.1.title': { pl: 'Klonuj i zainstaluj zależności', en: 'Clone and install dependencies' },
    'iot.step.2.title': { pl: 'Zainstaluj zależności iOS (tylko macOS)', en: 'Install iOS dependencies (macOS only)' },
    'iot.step.3.title': { pl: 'Uruchom Metro dev server', en: 'Run Metro dev server' },
    'iot.step.4.title': { pl: 'Uruchom na platformie', en: 'Run on platform' },
    'iot.scripts.label': { pl: 'Dostępne komendy', en: 'Available commands' },
    'iot.scripts.command': { pl: 'Komenda', en: 'Command' },
    'iot.scripts.desc': { pl: 'Opis', en: 'Description' },
    'iot.script.start': { pl: 'Uruchomienie Metro dev server', en: 'Start Metro dev server' },
    'iot.script.android': { pl: 'Build i uruchomienie na Androidzie', en: 'Build and run on Android' },
    'iot.script.ios': { pl: 'Build i uruchomienie na iOS', en: 'Build and run on iOS' },
    'iot.script.test': { pl: 'Uruchomienie testów Jest', en: 'Run Jest tests' },
    'iot.script.lint': { pl: 'Statyczna analiza kodu ESLint', en: 'ESLint static code analysis' },
    'iot.badge.project': { pl: 'Projekt własny', en: 'Individual project' },
    'iot.lang.1.name': { pl: 'Kotlin', en: 'Kotlin' },
    'iot.lang.1.pct':  { pl: '26.1%', en: '26.1%' },
    'iot.lang.2.name': { pl: 'Ruby', en: 'Ruby' },
    'iot.lang.2.pct':  { pl: '23.1%', en: '23.1%' },
    'iot.lang.3.name': { pl: 'Swift', en: 'Swift' },
    'iot.lang.3.pct':  { pl: '19.9%', en: '19.9%' },
    'iot.lang.4.name': { pl: 'TypeScript', en: 'TypeScript' },
    'iot.lang.4.pct':  { pl: '18.5%', en: '18.5%' },
    'iot.lang.5.name': { pl: 'JavaScript', en: 'JavaScript' },
    'iot.lang.5.pct':  { pl: '12.4%', en: '12.4%' },
    'iot.lang.1.title': { pl: 'Kotlin — natywny Android', en: 'Kotlin — native Android' },
    'iot.lang.1.desc':  { pl: 'Logika biznesowa Androida, integracje z systemem, natywne moduły', en: 'Android business logic, system integrations, native modules' },
    'iot.lang.2.title': { pl: 'Ruby — CocoaPods iOS', en: 'Ruby — CocoaPods iOS' },
    'iot.lang.2.desc':  { pl: 'Zarządzanie zależnościami iOS przez Gemfile i CocoaPods', en: 'iOS dependency management via Gemfile and CocoaPods' },
    'iot.lang.3.title': { pl: 'Swift — natywny iOS', en: 'Swift — native iOS' },
    'iot.lang.3.desc':  { pl: 'Natywna funkcjonalność iOS, moduły wymagające dostępu do systemu', en: 'Native iOS functionality, modules requiring system access' },
    /* image captions */
    'iot.img.1.cap': { pl: 'Devices — pusta lista z przyciskiem dodawania (+)', en: 'Devices — empty list with add (+) button' },
    'iot.img.2.cap': { pl: 'New device — formularz z nazwą, miejscem, komendą i wyborem koloru', en: 'New device — form with name, location, command and colour picker' },
    'iot.img.3.cap': { pl: 'Devices — widok z urządzeniami: Lampa, Roleta 1/2/3 w różnych kolorach', en: 'Devices — list view: Lamp, Blind 1/2/3 in different colours' },
    /* ════ EVENTHUB API ════ */
    'eventhub.category': { pl: 'Backend Development · REST API', en: 'Backend Development · REST API' },
    'eventhub.tagline':  { pl: 'Kompleksowy backend REST API do zarządzania eventami — Spring Boot 3.3, JWT, PostgreSQL, Swagger. System ról, zaproszeń, powiadomień i multimediów w jednym serwisie.',
                          en: 'Comprehensive REST API backend for event management — Spring Boot 3.3, JWT, PostgreSQL, Swagger. Roles, invitations, notifications and media in one service.' },
    'eventhub.goal.h2':  { pl: 'Backend<br/><span class="eventhub-grad">od zera do API</span>', en: 'Backend<br/><span class="eventhub-grad">from zero to API</span>' },
    'eventhub.goal.p1':  { pl: 'eventHubAPI to w pełni funkcjonalny serwis backendowy do zarządzania eventami, zbudowany w Spring Boot 3.3. Projekt był realizowany na Akademii Tarnowskiej jako aplikacja backendowa.',
                          en: 'eventHubAPI is a fully functional backend service for event management, built with Spring Boot 3.3. The project was completed at Tarnów Academy as a backend application.' },
    'eventhub.goal.p2':  { pl: 'Architektura warstwowa — Controller → Service → Repository — z pełną dokumentacją Swagger UI, hierarchicznym systemem ról i bazą PostgreSQL z dobrze zaprojektowanym schematem relacyjnym.',
                          en: 'Layered architecture — Controller → Service → Repository — with full Swagger UI documentation, hierarchical role system and PostgreSQL with a well designed relational schema.' },
    'eventhub.btn.endpoints': { pl: 'Endpointy', en: 'Endpoints' },
    'eventhub.btn.schema':    { pl: 'Schemat DB', en: 'DB schema' },
    'eventhub.stats.lang':      { pl: 'Język',         en: 'Language' },
    'eventhub.stats.framework': { pl: 'Framework',     en: 'Framework' },
    'eventhub.stats.db':        { pl: 'Baza danych',   en: 'Database' },
    'eventhub.stats.auth':      { pl: 'Auth & Docs',  en: 'Auth & Docs' },

    'eventhub.feat.1.title': { pl: 'Zarządzanie eventami', en: 'Event management' },
    'eventhub.feat.1.desc':  { pl: 'CRUD eventów z filtrami po nazwie i dacie, publiczne i prywatne eventy', en: 'CRUD events with name and date filters, public and private events' },
    'eventhub.feat.2.title': { pl: 'JWT + role RBAC', en: 'JWT + RBAC roles' },
    'eventhub.feat.2.desc':  { pl: 'Bearer token 24h, trzy role: ADMIN / ORGANIZER / USER z różnymi uprawnieniami', en: '24h bearer token, three roles: ADMIN / ORGANIZER / USER with different permissions' },
    'eventhub.feat.3.title': { pl: 'System zaproszeń', en: 'Invitation system' },
    'eventhub.feat.3.desc':  { pl: 'Wysyłanie, akceptacja, odrzucenie i wycofanie zaproszeń do eventów', en: 'Send, accept, decline and revoke event invitations' },
    'eventhub.feat.4.title': { pl: 'Powiadomienia', en: 'Notifications' },
    'eventhub.feat.4.desc':  { pl: 'Paginowane powiadomienia z statusami UNREAD / READ / ARCHIVED per użytkownik', en: 'Paginated notifications with UNREAD / READ / ARCHIVED statuses per user' },
    'eventhub.feat.5.title': { pl: 'Upload multimediów', en: 'Media upload' },
    'eventhub.feat.5.desc':  { pl: 'Galeria, logo i harmonogram eventu — pliki binarne w PostgreSQL (bytea)', en: 'Gallery, logo and schedule upload — binary files in PostgreSQL (bytea)' },
    'eventhub.feat.6.title': { pl: 'Swagger UI', en: 'Swagger UI' },
    'eventhub.feat.6.desc':  { pl: 'Pełna dokumentacja OpenAPI 3.0 z autoryzacją Bearer JWT pod /swagger-ui.html', en: 'Full OpenAPI 3.0 documentation with Bearer JWT authorization at /swagger-ui.html' },

    'eventhub.tech.1.name': { pl: 'Java 21', en: 'Java 21' },
    'eventhub.tech.1.desc': { pl: 'Najnowszy LTS — records, sealed classes, pattern matching. Cały backend w Javie.', en: 'Latest LTS — records, sealed classes, pattern matching. Full backend in Java.' },
    'eventhub.tech.2.name': { pl: 'Spring Boot 3.3', en: 'Spring Boot 3.3' },
    'eventhub.tech.2.desc': { pl: 'Web, Data JPA, Security, Validation, Actuator — pełny ekosystem Spring.', en: 'Web, Data JPA, Security, Validation, Actuator — full Spring ecosystem.' },
    'eventhub.tech.3.name': { pl: 'PostgreSQL', en: 'PostgreSQL' },
    'eventhub.tech.3.desc': { pl: 'Relacyjna baza danych z Hibernate ORM. DDL strategy: validate — schemat nienaruszony.', en: 'Relational database with Hibernate ORM. DDL strategy: validate — schema unchanged.' },
    'eventhub.tech.4.name': { pl: 'JWT Security', en: 'JWT Security' },
    'eventhub.tech.4.desc': { pl: 'JwtAuthenticationFilter, JwtTokenProvider — Bearer token 24h, Spring Security config.', en: 'JwtAuthenticationFilter, JwtTokenProvider — 24h bearer token, Spring Security config.' },
    'eventhub.tech.5.name': { pl: 'Swagger / OpenAPI', en: 'Swagger / OpenAPI' },
    'eventhub.tech.5.desc': { pl: 'springdoc-openapi — interaktywna dokumentacja API z możliwością testowania.', en: 'springdoc-openapi — interactive API documentation with test capabilities.' },
    'eventhub.tech.6.name': { pl: 'Maven + Lombok', en: 'Maven + Lombok' },
    'eventhub.tech.6.desc': { pl: 'Maven build system, Lombok eliminuje boilerplate — gettery, konstruktory, buildery.', en: 'Maven build system, Lombok removes boilerplate — getters, constructors, builders.' },

    'eventhub.arch.1.title': { pl: 'JWT Authentication Filter', en: 'JWT Authentication Filter' },
    'eventhub.arch.1.desc': { pl: 'Każde żądanie przechodzi przez JwtAuthenticationFilter. Token wyciągany z nagłówka Authorization: Bearer, walidowany i mapowany na SecurityContext.', en: 'Each request passes through JwtAuthenticationFilter. The token is taken from Authorization: Bearer, validated and mapped to SecurityContext.' },
    'eventhub.arch.2.title': { pl: 'Role-Based Access Control', en: 'Role-Based Access Control' },
    'eventhub.arch.2.desc': { pl: 'Trzy poziomy dostępu: USER, ORGANIZER, ADMIN. Każdy endpoint zabezpieczony przez @PreAuthorize lub konfigurację SecurityFilterChain.', en: 'Three access levels: USER, ORGANIZER, ADMIN. Each endpoint is secured with @PreAuthorize or SecurityFilterChain configuration.' },
    'eventhub.arch.3.title': { pl: 'Composite Key — Participant', en: 'Composite Key — Participant' },
    'eventhub.arch.3.desc': { pl: 'Encja Participant używa złożonego klucza głównego ParticipantId (userId + eventId) — jeden użytkownik może być uczestnikiem eventu tylko raz.', en: 'Participant entity uses a composite primary key ParticipantId (userId + eventId) — one user can join an event only once.' },
    'eventhub.arch.4.title': { pl: 'Media — bytea w PostgreSQL', en: 'Media — bytea in PostgreSQL' },
    'eventhub.arch.4.desc': { pl: 'Pliki multimedialne przechowywane bezpośrednio w bazie jako bytea. Trzy typy użycia: GALLERY, LOGO, SCHEDULE.', en: 'Media files stored directly in the database as bytea. Three usage types: GALLERY, LOGO, SCHEDULE.' },
    'eventhub.arch.5.title': { pl: 'Hierarchia geograficzna', en: 'Geographic hierarchy' },
    'eventhub.arch.5.desc': { pl: 'Lokalizacje zbudowane w pełnej hierarchii: Country → Region → City → PostalCode → Location → MapLocation z geolokacją jako osobna encja 1:1.', en: 'Locations built in a full hierarchy: Country → Region → City → PostalCode → Location → MapLocation with geolocation as a separate 1:1 entity.' },
    'eventhub.arch.6.title': { pl: 'Powiadomienia N:M', en: 'Notifications N:M' },
    'eventhub.arch.6.desc': { pl: 'Tabela join account_notification łączy użytkowników z powiadomieniami ze statusem per para. Jeden komunikat może trafić do wielu odbiorców.', en: 'Join table account_notification links users to notifications with status per pair. One notification can be sent to multiple recipients.' },

    'eventhub.endpoints.title': { pl: 'Endpointy', en: 'Endpoints' },
    'eventhub.group.auth': { pl: 'Auth', en: 'Auth' },
    'eventhub.group.users': { pl: 'Użytkownicy', en: 'Users' },
    'eventhub.group.events': { pl: 'Eventy', en: 'Events' },
    'eventhub.group.participants': { pl: 'Uczestnicy', en: 'Participants' },
    'eventhub.group.invitations': { pl: 'Zaproszenia', en: 'Invitations' },
    'eventhub.group.notifications': { pl: 'Powiadomienia', en: 'Notifications' },
    'eventhub.group.media': { pl: 'Media', en: 'Media' },
    'eventhub.group.admin': { pl: 'Admin', en: 'Admin' },
    'eventhub.ep.auth.login': { pl: 'Logowanie — zwraca JWT token', en: 'Login — returns a JWT token' },
    'eventhub.ep.auth.register': { pl: 'Rejestracja nowego użytkownika', en: 'Register a new user' },
    'eventhub.ep.account.me': { pl: 'Profil zalogowanego użytkownika', en: 'Logged in user profile' },
    'eventhub.ep.account.update': { pl: 'Update profilu', en: 'Update profile' },
    'eventhub.ep.account.upload': { pl: 'Upload zdjęcia profilowego', en: 'Upload profile image' },
    'eventhub.ep.account.password': { pl: 'Zmiana hasła', en: 'Change password' },
    'eventhub.ep.events.create': { pl: 'Tworzenie eventu', en: 'Create an event' },
    'eventhub.ep.events.public': { pl: 'Lista publicznych eventów (z filtrami)', en: 'Public events list (with filters)' },
    'eventhub.ep.events.details': { pl: 'Szczegóły eventu', en: 'Event details' },
    'eventhub.ep.events.update': { pl: 'Update eventu', en: 'Update event' },
    'eventhub.ep.events.delete': { pl: 'Usunięcie eventu', en: 'Delete event' },
    'eventhub.ep.events.all': { pl: 'Wszystkie eventy', en: 'All events' },
    'eventhub.ep.participants.join': { pl: 'Dołączenie do eventu', en: 'Join event' },
    'eventhub.ep.participants.list': { pl: 'Lista uczestników', en: 'Participants list' },
    'eventhub.ep.participants.me': { pl: 'Mój status uczestnictwa', en: 'My participation status' },
    'eventhub.ep.participants.leave': { pl: 'Opuszczenie eventu', en: 'Leave event' },
    'eventhub.ep.invitations.send': { pl: 'Wysłanie zaproszenia', en: 'Send invitation' },
    'eventhub.ep.invitations.my': { pl: 'Moje zaproszenia', en: 'My invitations' },
    'eventhub.ep.invitations.accept': { pl: 'Przyjęcie zaproszenia', en: 'Accept invitation' },
    'eventhub.ep.invitations.decline': { pl: 'Odrzucenie zaproszenia', en: 'Decline invitation' },
    'eventhub.ep.invitations.revoke': { pl: 'Wycofanie zaproszenia', en: 'Revoke invitation' },
    'eventhub.ep.notifications.list': { pl: 'Pobieranie powiadomień (paginacja)', en: 'Fetch notifications (paginated)' },
    'eventhub.ep.notifications.status': { pl: 'Update statusu (READ / ARCHIVED)', en: 'Update status (READ / ARCHIVED)' },
    'eventhub.ep.media.gallery': { pl: 'Upload zdjęcia do galerii', en: 'Upload image to gallery' },
    'eventhub.ep.media.logo': { pl: 'Upload logo eventu', en: 'Upload event logo' },
    'eventhub.ep.media.schedule': { pl: 'Upload harmonogramu (PDF)', en: 'Upload schedule (PDF)' },
    'eventhub.ep.media.delete': { pl: 'Usunięcie pliku', en: 'Delete file' },
    'eventhub.ep.admin.status': { pl: 'Zmiana statusu konta (ACTIVE/BANNED)', en: 'Change account status (ACTIVE/BANNED)' },
    'eventhub.ep.admin.role': { pl: 'Zmiana roli użytkownika', en: 'Change user role' },
    'eventhub.ep.admin.deleteAcct': { pl: 'Usunięcie konta', en: 'Delete account' },
    'eventhub.ep.admin.deleteEvent': { pl: 'Usunięcie dowolnego eventu', en: 'Delete any event' },
    'eventhub.schema.label': { pl: 'Baza danych', en: 'Database' },
    'eventhub.schema.h2': { pl: 'Schemat encji', en: 'Entity schema' },
    'eventhub.build.label': { pl: 'Instalacja', en: 'Installation' },
    'eventhub.build.title': { pl: 'Jak uruchomić', en: 'How to run' },
    'eventhub.team.title': { pl: 'Autorzy projektu', en: 'Project authors' },

    /* ════ ML — EMOTION RECOGNITION ════ */
    'ml.category': { pl: 'Machine Learning · Deep Learning', en: 'Machine Learning · Deep Learning' },
    'ml.badge.uni': { pl: 'Akademia Tarnowska · ML II', en: 'Tarnów Academy · ML II' },
    'ml.tagline': { pl: 'Deep learning na zbiorze FER-2013 — klasyfikacja 7 emocji z wyrazu twarzy przy użyciu CNN, automatyczne strojenie hiperparametrów Hyperband i wizualizacja Grad-CAM w aplikacji Gradio.',
                    en: 'Deep learning on FER-2013 — 7-emotion facial expression classification using CNN, automatic Hyperband hyperparameter tuning and Grad-CAM visualization in Gradio.' },
    
    'ml.stats.1.label': { pl: 'Obrazów FER-2013', en: 'FER-2013 images' },
    'ml.stats.2.label': { pl: 'Architektura', en: 'Architecture' },
    'ml.stats.3.label': { pl: 'Interpretowalność', en: 'Explainability' },
    'ml.stats.4.label': { pl: 'Zespół', en: 'Team' },
    
    'ml.goal.label': { pl: 'Cel projektu', en: 'Project goal' },
    'ml.goal.h2': { pl: 'Praca zaliczeniowa<br><span class="grad-inferno">z uczenia maszynowego II</span>', en: 'Machine Learning II<br><span class="grad-inferno">course project</span>' },
    'ml.goal.p1': { pl: 'Celem projektu było zaprojektowanie i wytrenowanie konwolucyjnej sieci neuronowej klasyfikującej siedem kategorii emocji na podstawie zdjęć twarzy ze zbioru FER-2013, a następnie wdrożenie modelu jako interaktywnej aplikacji webowej.',
                    en: 'The goal was to design and train a convolutional neural network classifying seven emotion categories from facial expression images in the FER-2013 dataset, then deploy it as an interactive web application.' },
    'ml.goal.p2': { pl: 'Pipeline obejmuje eksploracyjną analizę danych, augmentację w locie, bazową architekturę CNN, automatyczne strojenie hiperparametrów algorytmem Hyperband oraz wizualną interpretowalność predykcji techniką Grad-CAM.',
                    en: 'The pipeline includes exploratory data analysis, on-the-fly augmentation, baseline CNN architecture, automatic Hyperband hyperparameter tuning and visual explainability via Grad-CAM.' },
    
    'ml.gallery': { pl: 'Projekt w akcji', en: 'Project in action' },
    'ml.gallery.title': { pl: 'Analiza danych i wyniki modelu', en: 'Data analysis and model results' },
    'ml.gallery.note': { pl: 'Zrzuty ekranu zostaną uzupełnione po wygenerowaniu wykresów przez skrypty <code>zajecia2_data_analysis.py</code> i <code>zajecia2_cnn.py</code> oraz po nagraniu działania aplikacji Gradio.',
                         en: 'Screenshots will be added after generating plots with <code>zajecia2_data_analysis.py</code> and <code>zajecia2_cnn.py</code> scripts and recording Gradio app demo.' },
    'ml.emotion.1': { pl: 'szczęśliwy', en: 'happy' },
    'ml.emotion.2': { pl: 'smutny', en: 'sad' },
    'ml.emotion.3': { pl: 'zły', en: 'angry' },
    'ml.emotion.4': { pl: 'strach', en: 'fear' },
    'ml.emotion.5': { pl: 'niesmak', en: 'disgust' },
    'ml.emotion.6': { pl: 'zaskoczenie', en: 'surprise' },
    'ml.emotion.7': { pl: 'neutralny', en: 'neutral' },
    'ml.gallery.1': { pl: 'Rozkład klas emocji', en: 'Emotion class distribution' },
    'ml.gallery.2': { pl: 'Przykładowe obrazy', en: 'Sample images' },
    'ml.gallery.3': { pl: 'Augmentacja danych', en: 'Data augmentation' },
    'ml.gallery.4': { pl: 'Krzywe uczenia: bazowy vs Hyperband', en: 'Learning curves: baseline vs Hyperband' },
    'ml.gallery.5': { pl: 'Aplikacja Gradio', en: 'Gradio app' },
    'ml.gallery.6': { pl: 'Wykres Softmax (7 klas)', en: 'Softmax graph (7 classes)' },
    'ml.gallery.7': { pl: 'Grad-CAM — mapa Inferno', en: 'Grad-CAM — Inferno map' },
    'ml.gallery.8': { pl: 'Detekcja twarzy (ROI)', en: 'Face detection (ROI)' },
    
    'ml.feat.1.title': { pl: 'EDA i niezbalansowanie klas', en: 'EDA and class imbalance' },
    'ml.feat.1.desc': { pl: 'Analiza struktury FER-2013 — klasa happy zdecydowanie najliczniejsza, disgust wielokrotnie rzadszy',
                        en: 'Analysis of FER-2013 structure — happy class dominant, disgust significantly rarer' },
    'ml.feat.2.title': { pl: 'Augmentacja w locie', en: 'On-the-fly augmentation' },
    'ml.feat.2.desc': { pl: 'Rotacja, przesunięcie, odbicie lustrzane, zoom i jasność — ImageDataGenerator redukujący overfitting',
                        en: 'Rotation, shift, flip, zoom, brightness — ImageDataGenerator reducing overfitting' },
    'ml.feat.3.title': { pl: 'CNN — 3 bloki konwolucyjne', en: 'CNN — 3 conv blocks' },
    'ml.feat.3.desc': { pl: 'Conv2D + BatchNorm + MaxPool + Dropout, klasyfikator Dense 256 jednostek, wyjście Softmax 7 klas',
                        en: 'Conv2D + BatchNorm + MaxPool + Dropout, Dense 256 classifier, Softmax output 7 classes' },
    'ml.feat.4.title': { pl: 'Keras Tuner Hyperband', en: 'Keras Tuner Hyperband' },
    'ml.feat.4.desc': { pl: 'Automatyczne przeszukiwanie hiperparametrów metodą successive halving — 5–10× mniej epok niż Grid Search',
                        en: 'Automatic hyperparameter search using successive halving — 5–10× fewer epochs than Grid Search' },
    'ml.feat.5.title': { pl: 'Grad-CAM', en: 'Grad-CAM' },
    'ml.feat.5.desc': { pl: 'Mapy cieplne Inferno wskazujące, które obszary twarzy decydują o predykcji emocji',
                        en: 'Inferno heatmaps showing which facial regions drive emotion predictions' },
    'ml.feat.6.title': { pl: 'Wdrożenie w Gradio', en: 'Gradio deployment' },
    'ml.feat.6.desc': { pl: 'Interaktywna aplikacja webowa z obsługą kamery, wykresem Softmax i adnotacją bounding boxa',
                        en: 'Interactive web app with camera support, Softmax graph and bounding box annotation' },
    
    'ml.dataset.label': { pl: 'Zbiór danych', en: 'Dataset' },
    'ml.dataset.title': { pl: 'FER-2013', en: 'FER-2013' },
    'ml.dataset.stat.1.l': { pl: 'Obrazów łącznie', en: 'Total images' },
    'ml.dataset.stat.2.l': { pl: 'Zbiór treningowy', en: 'Training set' },
    'ml.dataset.stat.3.l': { pl: 'Zbiór testowy', en: 'Test set' },
    'ml.dataset.stat.4.l': { pl: 'Skala szarości', en: 'Grayscale' },
    
    'ml.pipeline.label': { pl: 'Architektura', en: 'Architecture' },
    'ml.pipeline.title': { pl: 'Potok inferencji emocji', en: 'Emotion inference pipeline' },
    'ml.pipeline.step.1': { pl: 'Obraz wejściowy<br><span>RGB / PIL</span>', en: 'Input image<br><span>RGB / PIL</span>' },
    'ml.pipeline.step.2': { pl: 'Detekcja twarzy<br><span>Haar Cascade</span>', en: 'Face detection<br><span>Haar Cascade</span>' },
    'ml.pipeline.step.3': { pl: 'Preprocessing<br><span>resize 48×48, /255.0</span>', en: 'Preprocessing<br><span>resize 48×48, /255.0</span>' },
    'ml.pipeline.step.4': { pl: 'CNN predict()<br><span>Softmax, 7 klas</span>', en: 'CNN predict()<br><span>Softmax, 7 classes</span>' },
    'ml.pipeline.step.5': { pl: 'Grad-CAM<br><span>+ wykres + adnotacja</span>', en: 'Grad-CAM<br><span>+ graph + annotation</span>' },
    
    'ml.results.label': { pl: 'Wyniki', en: 'Results' },
    'ml.results.title': { pl: 'Model bazowy vs Hyperband', en: 'Baseline vs Hyperband' },
    'ml.results.table.model': { pl: 'Model', en: 'Model' },
    'ml.results.table.accuracy': { pl: 'Val Accuracy', en: 'Val Accuracy' },
    'ml.results.table.loss': { pl: 'Val Loss', en: 'Val Loss' },
    'ml.results.table.baseline': { pl: 'Model bazowy', en: 'Baseline model' },
    'ml.results.table.hyperband': { pl: 'Model po Hyperband', en: 'Model after Hyperband' },
    'ml.results.table.improvement': { pl: 'Poprawa', en: 'Improvement' },
    'ml.results.note': { pl: 'Wyniki mieszczą się w typowym zakresie dla CNN trenowanych bezpośrednio na FER-2013 bez transfer learningu (state-of-the-art ok. 73–75% przy dużych architekturach pretrenowanych). Strojenie Hyperband potwierdziło mierzalną poprawę dokładności walidacyjnej przy akceptowalnym koszcie obliczeniowym.',
                         en: 'Results fall within the typical range for CNNs trained directly on FER-2013 without transfer learning (state-of-the-art ~73–75% with large pretrained architectures). Hyperband tuning confirmed measurable improvement in validation accuracy at acceptable computational cost.' },
    
    'ml.deliverables.label': { pl: 'Repozytorium', en: 'Repository' },
    'ml.deliverables.title': { pl: 'Struktura projektu', en: 'Project structure' },
    'ml.deliverables.1.title': { pl: 'zajecia2_data_analysis.py', en: 'zajecia2_data_analysis.py' },
    'ml.deliverables.1.desc': { pl: 'EDA: analiza struktury FER-2013, wykresy, augmentacja', en: 'EDA: FER-2013 structure analysis, plots, augmentation' },
    'ml.deliverables.2.title': { pl: 'zajecia2_deep_learning.py', en: 'zajecia2_deep_learning.py' },
    'ml.deliverables.2.desc': { pl: 'Data pipeline, konfiguracja generatora danych', en: 'Data pipeline, data generator configuration' },
    'ml.deliverables.3.title': { pl: 'zajecia2_cnn.py', en: 'zajecia2_cnn.py' },
    'ml.deliverables.3.desc': { pl: 'Budowa CNN, trening bazowy, Keras Tuner Hyperband', en: 'CNN building, baseline training, Keras Tuner Hyperband' },
    'ml.deliverables.4.title': { pl: 'zajecia4_klasyfikacja.py', en: 'zajecia4_klasyfikacja.py' },
    'ml.deliverables.4.desc': { pl: 'Macierz pomyłek, ROC, permutation importance', en: 'Confusion matrix, ROC, permutation importance' },
    'ml.deliverables.5.title': { pl: 'app.py', en: 'app.py' },
    'ml.deliverables.5.desc': { pl: 'Aplikacja Gradio — detekcja emocji + wizualizacja Grad-CAM', en: 'Gradio app — emotion detection + Grad-CAM visualization' },
    'ml.deliverables.6.title': { pl: 'best_model.keras', en: 'best_model.keras' },
    'ml.deliverables.6.desc': { pl: 'Najlepszy wytrenowany model (plik binarny Keras)', en: 'Best trained model (Keras binary file)' },
    
    'ml.team.label': { pl: 'Zespół', en: 'Team' },
    'ml.team.title': { pl: 'Autorzy projektu', en: 'Project authors' },
    'ml.team.1.name': { pl: 'Andrii Torianyk', en: 'Andrii Torianyk' },
    'ml.team.1.role': { pl: 'CNN, Keras Tuner Hyperband, Grad-CAM, aplikacja Gradio', en: 'CNN, Keras Tuner Hyperband, Grad-CAM, Gradio app' },
    'ml.team.2.name': { pl: 'Bohdan Kovalchuk', en: 'Bohdan Kovalchuk' },
    'ml.team.2.role': { pl: 'Eksploracyjna analiza danych, augmentacja, wizualizacje EDA', en: 'Exploratory data analysis, augmentation, EDA visualizations' },
    
    'ml.results.label': { pl: 'Wyniki', en: 'Results' },
    'ml.results.title': { pl: 'Model bazowy vs Hyperband', en: 'Baseline vs Hyperband' },
    
    'ml.tech.label': { pl: 'Technologie', en: 'Technologies' },
    'ml.tech.1.name': { pl: 'TensorFlow / Keras', en: 'TensorFlow / Keras' },
    'ml.tech.1.desc': { pl: 'Budowa i trening konwolucyjnej sieci neuronowej, warstwy Conv2D, BatchNorm, Dropout.',
                        en: 'CNN building and training, Conv2D, BatchNorm, Dropout layers.' },
    'ml.tech.2.name': { pl: 'Keras Tuner', en: 'Keras Tuner' },
    'ml.tech.2.desc': { pl: 'Algorytm Hyperband do automatycznego strojenia hiperparametrów modelu.',
                        en: 'Hyperband algorithm for automatic model hyperparameter tuning.' },
    'ml.tech.3.name': { pl: 'Gradio', en: 'Gradio' },
    'ml.tech.3.desc': { pl: 'Interaktywna aplikacja webowa — Premium Dark UI, obsługa kamery i wykresów.',
                        en: 'Interactive web app — Premium Dark UI, camera support and graphs.' },
    'ml.tech.4.name': { pl: 'OpenCV', en: 'OpenCV' },
    'ml.tech.4.desc': { pl: 'Detekcja twarzy Haar Cascade, nakładanie map cieplnych Grad-CAM (alpha blending).',
                        en: 'Haar Cascade face detection, Grad-CAM heatmap overlays (alpha blending).' },
    'ml.tech.5.name': { pl: 'Matplotlib / Seaborn', en: 'Matplotlib / Seaborn' },
    'ml.tech.5.desc': { pl: 'Wizualizacje EDA, krzywe uczenia, wykresy rozkładu Softmax.',
                        en: 'EDA visualizations, learning curves, Softmax distribution plots.' },
    'ml.tech.6.name': { pl: 'Python / NumPy / Pandas', en: 'Python / NumPy / Pandas' },
    'ml.tech.6.desc': { pl: 'Przetwarzanie danych, pipeline augmentacji i analiza wyników.',
                        en: 'Data processing, augmentation pipeline and results analysis.' },
    
    'ml.arch.1.title': { pl: 'Blok konwolucyjny 1', en: 'Conv block 1' },
    'ml.arch.1.desc': { pl: '2× Conv2D(32) z aktywacją ReLU, BatchNormalization, MaxPooling2D i Dropout(0.25). Wyjście: 12×12×32.',
                        en: '2× Conv2D(32) with ReLU, BatchNormalization, MaxPooling2D and Dropout(0.25). Output: 12×12×32.' },
    'ml.arch.2.title': { pl: 'Blok konwolucyjny 2', en: 'Conv block 2' },
    'ml.arch.2.desc': { pl: '2× Conv2D(64), BatchNormalization, MaxPooling2D i Dropout(0.25). Wyjście: 6×6×64.',
                        en: '2× Conv2D(64), BatchNormalization, MaxPooling2D and Dropout(0.25). Output: 6×6×64.' },
    'ml.arch.3.title': { pl: 'Blok konwolucyjny 3', en: 'Conv block 3' },
    'ml.arch.3.desc': { pl: '2× Conv2D(128), BatchNormalization, MaxPooling2D i Dropout(0.40). Wyjście: 3×3×128, dalej Flatten → 1152.',
                        en: '2× Conv2D(128), BatchNormalization, MaxPooling2D and Dropout(0.40). Output: 3×3×128, then Flatten → 1152.' },
    'ml.arch.4.title': { pl: 'Klasyfikator Dense', en: 'Dense classifier' },
    'ml.arch.4.desc': { pl: 'Warstwa Dense 256 jednostek z ReLU, BatchNormalization i Dropout(0.50), zakończona warstwą Softmax na 7 klas.',
                        en: 'Dense layer 256 units with ReLU, BatchNormalization and Dropout(0.50), ending with Softmax on 7 classes.' },
    'ml.arch.5.title': { pl: 'Hyperband — przestrzeń przeszukiwania', en: 'Hyperband — search space' },
    'ml.arch.5.desc': { pl: 'Filtry Conv2D, dropout konwolucyjny i klasyfikatora, liczba neuronów Dense oraz learning rate Adama strojone automatycznie.',
                        en: 'Conv2D filters, conv and classifier dropout, Dense units and Adam learning rate auto-tuned.' },
    'ml.arch.6.title': { pl: 'Grad-CAM — hooki gradientowe', en: 'Grad-CAM — gradient hooks' },
    'ml.arch.6.desc': { pl: 'Automatyczne wykrywanie ostatniej warstwy Conv2D modelu — odporne na zmiany architektury bez ręcznej aktualizacji.',
                        en: 'Auto-detect model\'s last Conv2D layer — robust to architecture changes without manual updates.' },
    
    /* ════ AIPLANNER — SMART PLANNER APP ════ */
    'aiplanner.category': { pl: 'Mobile · React Native · AI', en: 'Mobile · React Native · AI' },
    'aiplanner.badge.uni': { pl: 'Projekt indywidualny', en: 'Solo project' },
    'aiplanner.tagline': { pl: 'Cross-platform aplikacja mobilna do planowania nauki, zadań i podróży z wbudowanym asystentem AI (LLaMA 3.1 via GROQ API). Real-time sync przez Firebase, animowane wykresy statystyk i pełny dark mode.',
                           en: 'Cross-platform mobile app for learning, task and travel planning with built-in AI assistant (LLaMA 3.1 via GROQ API). Real-time sync via Firebase, animated charts and full dark mode.' },
    
    'aiplanner.stats.1.label': { pl: 'iOS + Android', en: 'iOS + Android' },
    'aiplanner.stats.2.label': { pl: 'GROQ API', en: 'GROQ API' },
    'aiplanner.stats.3.label': { pl: 'Auth + Firestore', en: 'Auth + Firestore' },
    'aiplanner.stats.4.label': { pl: 'Tab Navigator', en: 'Tab Navigator' },
    
    'aiplanner.tabs.1': { pl: 'Zadania', en: 'Tasks' },
    'aiplanner.tabs.2': { pl: 'Nauka', en: 'Learning' },
    'aiplanner.tabs.3': { pl: 'Dashboard', en: 'Dashboard' },
    'aiplanner.tabs.4': { pl: 'Podróże', en: 'Trips' },
    'aiplanner.tabs.5': { pl: 'Statystyki', en: 'Stats' },
    
    'aiplanner.gallery.label': { pl: 'Screenshoty', en: 'Screenshots' },
    'aiplanner.gallery.title': { pl: 'Aplikacja w akcji', en: 'App in action' },
    'aiplanner.gallery.1': { pl: 'Dashboard', en: 'Dashboard' },
    'aiplanner.gallery.2': { pl: 'Ekran zadań', en: 'Tasks screen' },
    'aiplanner.gallery.3': { pl: 'Planer nauki', en: 'Study planner' },
    'aiplanner.gallery.4': { pl: 'Szczegóły kursu', en: 'Course details' },
    'aiplanner.gallery.5': { pl: 'Planer podróży', en: 'Trip planner' },
    'aiplanner.gallery.6': { pl: 'Asystent AI', en: 'AI assistant' },
    'aiplanner.gallery.7': { pl: 'Statystyki', en: 'Statistics' },
    'aiplanner.gallery.8': { pl: 'Logowanie', en: 'Login' },
    
    'aiplanner.goal.label': { pl: 'Cel projektu', en: 'Project goal' },
    'aiplanner.goal.h2': { pl: 'Jeden hub do<br><span class="grad-cyber">wszystkiego co ważne</span>', en: 'One hub for<br><span class="grad-cyber">everything important</span>' },
    'aiplanner.goal.p1': { pl: 'Smart Planner łączy w jednej aplikacji mobilnej trzy obszary organizacji życia — naukę, zadania i podróże — z wbudowanym asystentem AI, który generuje gotowe harmonogramy i plany wycieczek na życzenie.',
                           en: 'Smart Planner combines three areas of life organization — learning, tasks and travel — in one mobile app with built-in AI assistant that generates ready-made schedules and trip plans on demand.' },
    'aiplanner.goal.p2': { pl: 'Backend oparty w całości na Firebase (Authentication + Cloud Firestore) zapewnia real-time sync między urządzeniami, pełny cykl uwierzytelniania i działanie na iOS oraz Androidzie bez osobnego serwera.',
                           en: 'Backend built entirely on Firebase (Authentication + Cloud Firestore) provides real-time sync between devices, full authentication cycle and works on iOS and Android without a separate server.' },
    
    'aiplanner.feat.1.title': { pl: 'Asystent AI (LLaMA 3.1)', en: 'AI Assistant (LLaMA 3.1)' },
    'aiplanner.feat.1.desc': { pl: 'GROQ API z modelem llama-3.1-8b-instant — generuje plan nauki dzień po dniu lub itinerary wycieczki, temperatura 0.6',
                              en: 'GROQ API with llama-3.1-8b-instant model — generates day-by-day study plan or trip itinerary, temperature 0.6' },
    'aiplanner.feat.2.title': { pl: 'Firebase real-time', en: 'Firebase real-time' },
    'aiplanner.feat.2.desc': { pl: 'onSnapshot na każdym ekranie — dane aktualizują się bez przeładowania, cleanup w useEffect zapobiega wyciekom pamięci',
                              en: 'onSnapshot on every screen — data updates without reload, useEffect cleanup prevents memory leaks' },
    'aiplanner.feat.3.title': { pl: 'Planer nauki', en: 'Study planner' },
    'aiplanner.feat.3.desc': { pl: 'Kursy z paskami postępu, harmonogram w akordeonach DZIEŃ 1/2/..., licznik godzin nauki, odhaczanie tematów',
                              en: 'Courses with progress bars, accordion schedule DAY 1/2/..., study hours counter, topic checkmarks' },
    'aiplanner.feat.4.title': { pl: 'Planer podróży', en: 'Trip planner' },
    'aiplanner.feat.4.desc': { pl: 'Karty z dynamicznymi zdjęciami Unsplash CDN, odliczanie dni, lista pakowania z paskiem postępu, checkpointy AI',
                              en: 'Cards with dynamic Unsplash CDN images, countdown, packing list with progress bar, AI checkpoints' },
    'aiplanner.feat.5.title': { pl: 'Statystyki z wykresami', en: 'Stats with charts' },
    'aiplanner.feat.5.desc': { pl: 'Animowany wykres liniowy trendu (buildSmoothPath), wykresy słupkowe z gradientami, zakres Dzień/Tydzień/Miesiąc',
                              en: 'Animated trend line chart (buildSmoothPath), gradient bar charts, Day/Week/Month range' },
    'aiplanner.feat.6.title': { pl: 'Dark mode + powiadomienia', en: 'Dark mode + notifications' },
    'aiplanner.feat.6.desc': { pl: 'Globalny przełącznik motywu przekazywany jako prop do wszystkich ekranów, kontekstowe alerty o zaległościach',
                              en: 'Global theme toggle passed as prop to all screens, contextual alerts about backlog' },
    
    'aiplanner.screens.label': { pl: 'Ekrany', en: 'Screens' },
    'aiplanner.screens.title': { pl: 'Szczegóły funkcjonalności', en: 'Feature details' },
    'aiplanner.arch.1.title': { pl: 'Dashboard', en: 'Dashboard' },
    'aiplanner.arch.1.desc': { pl: 'Centrum dowodzenia — statystyki zadań, kursów i wypraw, lista zadań na dziś, postęp planów nauki, najbliższa podróż z odliczaniem dni. TopBar z powiadomieniami i przełącznikiem dark mode.',
                              en: 'Command center — task, course and trip stats, today\'s task list, study plan progress, next trip with countdown. TopBar with notifications and dark mode toggle.' },
    'aiplanner.arch.2.title': { pl: 'Zadania (TaskScreen)', en: 'Tasks (TaskScreen)' },
    'aiplanner.arch.2.desc': { pl: 'Lista to-do z filtrami (Wszystkie / Do zrobienia / Zrobione), wyszukiwarką live, statystykami aktywne/ukończone/postęp % i szybkim dodawaniem z pola na dole ekranu.',
                              en: 'To-do list with filters (All / TODO / Done), live search, stats active/completed/progress % and quick add field at bottom.' },
    'aiplanner.arch.3.title': { pl: 'Planer nauki', en: 'Study planner' },
    'aiplanner.arch.3.desc': { pl: 'Karty kursów z AnimatedProgressBar, widok szczegółowy z harmonogramem tematów w akordeonach (DZIEŃ 1, DZIEŃ 2...), licznik godzin nauki, odhaczanie tematów z auto-przeliczeniem postępu.',
                              en: 'Course cards with AnimatedProgressBar, detail view with topic schedule in accordions (DAY 1, DAY 2...), study hours counter, topic checkmarks with auto progress recalc.' },
    'aiplanner.arch.4.title': { pl: 'Planer podróży', en: 'Trip planner' },
    'aiplanner.arch.4.desc': { pl: 'Karty wyjazdów z deterministycznym doborem zdjęć Unsplash (resolveTripImageUri na podstawie trip.id), odliczanie dni, lista pakowania z checkboxami i checkpointy generowane przez AI.',
                              en: 'Trip cards with deterministic Unsplash image selection (resolveTripImageUri by trip.id), countdown, packing list with checkboxes and AI-generated checkpoints.' },
    'aiplanner.arch.5.title': { pl: 'Asystent AI', en: 'AI assistant' },
    'aiplanner.arch.5.desc': { pl: 'Chat z LLaMA 3.1 via GROQ API — tryb study generuje harmonogram DZIEŃ X + lista tematów, tryb travel generuje DZIEŃ X + atrakcje. Odpowiedź parsowana i zapisywana do Firestore przez modal.',
                              en: 'Chat with LLaMA 3.1 via GROQ API — study mode generates DAY X + topic list, travel mode generates DAY X + attractions. Response parsed and saved to Firestore via modal.' },
    'aiplanner.arch.6.title': { pl: 'Statystyki', en: 'Statistics' },
    'aiplanner.arch.6.desc': { pl: 'Koło postępu z ogólnym wynikiem %, wskaźnik trendu (+X% vs poprzedni okres), animowany wykres liniowy, wykresy słupkowe planów i priorytetów, filtr Dzień / Tydzień / Miesiąc.',
                              en: 'Progress circle with overall score %, trend indicator (+X% vs prev period), animated line chart, plan and priority bar charts, Day / Week / Month filter.' },
    
    'aiplanner.firestore.label': { pl: 'Architektura', en: 'Architecture' },
    'aiplanner.firestore.title': { pl: 'Firestore — struktura danych', en: 'Firestore — data structure' },
    
    'aiplanner.tech.label': { pl: 'Technologie', en: 'Technologies' },
    'aiplanner.tech.1.name': { pl: 'React Native 0.73', en: 'React Native 0.73' },
    'aiplanner.tech.1.desc': { pl: 'Cross-platform iOS + Android. Hooks: useState, useEffect, useCallback, useMemo. Komponenty funkcyjne.',
                              en: 'Cross-platform iOS + Android. Hooks: useState, useEffect, useCallback, useMemo. Functional components.' },
    'aiplanner.tech.2.name': { pl: 'TypeScript 5.x', en: 'TypeScript 5.x' },
    'aiplanner.tech.2.desc': { pl: 'Typowanie statyczne, interfejsy Task, DashboardProps, TripItem, StudyPlan — bezpieczeństwo typów w całym projekcie.',
                              en: 'Static typing, interfaces Task, DashboardProps, TripItem, StudyPlan — type safety across project.' },
    'aiplanner.tech.3.name': { pl: 'Firebase', en: 'Firebase' },
    'aiplanner.tech.3.desc': { pl: 'Authentication (login, rejestracja, reset hasła), Cloud Firestore z real-time listenerami onSnapshot.',
                              en: 'Authentication (login, signup, password reset), Cloud Firestore with real-time onSnapshot listeners.' },
    'aiplanner.tech.4.name': { pl: 'GROQ API', en: 'GROQ API' },
    'aiplanner.tech.4.desc': { pl: 'LLaMA 3.1 8B Instant — generowanie harmonogramów nauki i planów podróży. Klucz API przez env variable.',
                              en: 'LLaMA 3.1 8B Instant — study schedule and trip plan generation. API key via env variable.' },
    'aiplanner.tech.5.name': { pl: 'React Navigation', en: 'React Navigation' },
    'aiplanner.tech.5.desc': { pl: 'Tab Navigator (5 ekranów) + Stack Navigator dla auth. Nawigacja przez route.params.mode (study / travel).',
                              en: 'Tab Navigator (5 screens) + Stack Navigator for auth. Navigation via route.params.mode (study / travel).' },
    'aiplanner.tech.6.name': { pl: 'Unsplash CDN', en: 'Unsplash CDN' },
    'aiplanner.tech.6.desc': { pl: '15 rotujących zdjęć podróży — deterministyczny wybór przez resolveTripImageUri(), fallback chain przez handleImageError.',
                              en: '15 rotating travel photos — deterministic selection via resolveTripImageUri(), fallback chain via handleImageError.' },
    
    'aiplanner.deliverables.label': { pl: 'Projekt', en: 'Project' },
    'aiplanner.deliverables.title': { pl: 'Co zostało dostarczone', en: 'What was delivered' },
    'aiplanner.deliverables.1.title': { pl: 'Auth flow', en: 'Auth flow' },
    'aiplanner.deliverables.1.desc': { pl: 'Rejestracja, logowanie, reset hasła przez Firebase — obsługa błędów auth/email-already-in-use',
                                       en: 'Signup, login, password reset via Firebase — auth/email-already-in-use error handling' },
    'aiplanner.deliverables.2.title': { pl: 'AI Planner', en: 'AI Planner' },
    'aiplanner.deliverables.2.desc': { pl: 'Chat z LLaMA 3.1, parsowanie odpowiedzi i zapis gotowego planu do Firestore przez modal',
                                       en: 'Chat with LLaMA 3.1, parse response and save plan to Firestore via modal' },
    'aiplanner.deliverables.3.title': { pl: 'Wykresy animowane', en: 'Animated charts' },
    'aiplanner.deliverables.3.desc': { pl: 'AnimatedLineChart, GradientBarChart, CircleProgress, RangeTabs, TrendIndicator',
                                       en: 'AnimatedLineChart, GradientBarChart, CircleProgress, RangeTabs, TrendIndicator' },
    'aiplanner.deliverables.4.title': { pl: 'Dark mode', en: 'Dark mode' },
    'aiplanner.deliverables.4.desc': { pl: 'Globalny isDarkMode przekazywany jako prop do wszystkich ekranów — spójny motyw wizualny',
                                       en: 'Global isDarkMode passed as prop to all screens — consistent visual theme' },
    'aiplanner.deliverables.5.title': { pl: 'Powiadomienia', en: 'Notifications' },
    'aiplanner.deliverables.5.desc': { pl: 'Kontekstowe alerty o zaległościach i postępach — dynamicznie wyliczane na podstawie danych z Firestore',
                                       en: 'Contextual alerts for backlog and progress — dynamically calculated from Firestore data' },
    'aiplanner.deliverables.6.title': { pl: 'Real-time sync', en: 'Real-time sync' },
    'aiplanner.deliverables.6.desc': { pl: 'onSnapshot na wszystkich ekranach, cleanup useEffect — zero wycieków pamięci przy odmontowaniu',
                                       en: 'onSnapshot on all screens, useEffect cleanup — zero memory leaks on unmount' },
    
    'aiplanner.team.label': { pl: 'Autor', en: 'Author' },
    'aiplanner.team.title': { pl: 'Projekt indywidualny', en: 'Solo project' },
    'aiplanner.team.name': { pl: 'Andrii Torianyk', en: 'Andrii Torianyk' },
    'aiplanner.team.role': { pl: 'UI · React Native · Firebase · GROQ AI · Wykresy · Nawigacja', en: 'UI · React Native · Firebase · GROQ AI · Charts · Navigation' },
  };

  /* ── DETECT CURRENT PAGE ─────────────────────── */
  function getPage() {
    const p = window.location.pathname;
    if (/\/projects\/blog/.test(p))        return 'blog';
    if (/\/projects\/osk-expert/.test(p))  return 'osk';
    if (/\/projects\/racing3d/.test(p))    return 'racing';
    if (/\/projects\/eventhubapi/.test(p)) return 'eventhub';
    if (/\/projects\/ualingo/.test(p))     return 'ualingo';
    if (/\/projects\/quiz/.test(p))        return 'quiz';
    if (/\/projects\/iot/.test(p))         return 'iot';
    if (/\/projects\/ml/.test(p))          return 'ml';
    if (/\/projects\/aiplanner/.test(p))   return 'aiplanner';
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
      const targetPath = new URL(href, location.href).pathname;
      if (/\/projects(\/index\.html)?$/.test(targetPath))     setText(a, 'nav.projects', lang);
      else if (/\/contact(\/index\.html)?$/.test(targetPath)) setText(a, 'nav.contact', lang);
      else if (/\/(index\.html)?$/.test(targetPath))           setText(a, 'nav.home', lang);
    });
    const mobLinks = document.querySelectorAll('.mob-link');
    mobLinks.forEach(a => {
      const href = a.getAttribute('href') || '';
      const targetPath = new URL(href, location.href).pathname;
      if (/\/projects(\/index\.html)?$/.test(targetPath))     setText(a, 'nav.projects', lang);
      else if (/\/contact(\/index\.html)?$/.test(targetPath)) setText(a, 'nav.contact', lang);
      else if (/CV\.pdf$/.test(href) || /CV\.pdf$/.test(targetPath)) setText(a, 'nav.cv', lang);
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
    if (page === 'eventhub')  applyEventhub(lang);
    if (page === 'osk')      applyOsk(lang);
    if (page === 'racing')   applyRacing(lang);
    if (page === 'quiz')     applyQuiz(lang);
    if (page === 'iot')      applyIot(lang);
    if (page === 'ml')       applyMl(lang);
    if (page === 'ualingo')  applyUalingo(lang);
    if (page === 'wyspa')    applyWyspa(lang);
    if (page === 'aiplanner') applyAiplanner(lang);

    /* ── DATA ATTR TRANSLATIONS ── */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!key) return;
      if (el.dataset.i18nHtml !== undefined) setHTML(el, key, lang);
      else if (el.dataset.i18nPlaceholder !== undefined) setPlaceholder(el, key, lang);
      else setText(el, key, lang);
    });

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
    setText(document.querySelector('.projects.desc'),    'projects.desc',    lang);

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

  function applyTechStack(page, lang, count) {
    const cards = document.querySelectorAll('.tech-card');
    for (let i = 0; i < count; i++) {
      const card = cards[i];
      if (!card) continue;
      setText(card.querySelector('.tech-card-name'), `${page}.tech.${i+1}.name`, lang);
      setText(card.querySelector('.tech-card-desc'), `${page}.tech.${i+1}.desc`, lang);
    }
  }

  function applyArchInfo(page, lang, count) {
    const cards = document.querySelectorAll('.arch-card');
    for (let i = 0; i < count; i++) {
      const card = cards[i];
      if (!card) continue;
      setText(card.querySelector('.arch-title'), `${page}.arch.${i+1}.title`, lang);
      setText(card.querySelector('.arch-desc'),  `${page}.arch.${i+1}.desc`,  lang);
    }
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
    applyTechStack('racing', lang, 8);
    applyArchInfo('racing', lang, 6);
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
    applyTechStack('wyspa', lang, 8);
    applyArchInfo('wyspa', lang, 6);

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
    applyTechStack('blog', lang, 8);
    applyArchInfo('blog', lang, 6);

    /* team role */
    const teamRole = document.querySelector('.team-role');
    if (teamRole) setText(teamRole, 'blog.team.role', lang);
  }

  /* ── EVENTHUB API ───────────────────────────── */
  function applyEventhub(lang) {
    applySharedDetail(lang);
    setText(document.querySelector('.proj-category'), 'eventhub.category', lang);
    setText(document.querySelector('.proj-tagline'), 'eventhub.tagline', lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'eventhub.goal.h2', lang);

    const goalPs = document.querySelectorAll('.two-col .body-text');
    setText(goalPs[0], 'eventhub.goal.p1', lang);
    setText(goalPs[1], 'eventhub.goal.p2', lang);

    const actionBtns = document.querySelectorAll('.proj-actions .btn-glass');
    if (actionBtns[0]) { const svg = actionBtns[0].querySelector('svg'); actionBtns[0].textContent = t('eventhub.btn.endpoints', lang); if (svg) actionBtns[0].appendChild(svg); }
    if (actionBtns[1]) { const svg = actionBtns[1].querySelector('svg'); actionBtns[1].textContent = t('eventhub.btn.schema', lang); if (svg) actionBtns[1].appendChild(svg); }

    const stats = document.querySelectorAll('.proj-stats .ps-l');
    setText(stats[0], 'eventhub.stats.lang', lang);
    setText(stats[1], 'eventhub.stats.framework', lang);
    setText(stats[2], 'eventhub.stats.db', lang);
    setText(stats[3], 'eventhub.stats.auth', lang);

    const feats = document.querySelectorAll('.feature-list .feat-item');
    ['eventhub.feat.1','eventhub.feat.2','eventhub.feat.3','eventhub.feat.4','eventhub.feat.5','eventhub.feat.6'].forEach((key, i) => {
      if (!feats[i]) return;
      setText(feats[i].querySelector('.feat-title'), `${key}.title`, lang);
      setText(feats[i].querySelector('.feat-desc'),  `${key}.desc`,  lang);
    });

    applyTechStack('eventhub', lang, 6);
    applyArchInfo('eventhub', lang, 6);

    setText(document.querySelector('#endpoints .section-h2'), 'eventhub.endpoints.title', lang);

    document.querySelectorAll('#endpoints .endpoint-group').forEach(group => {
      const title = group.querySelector('.endpoint-group-title');
      const icon = title?.querySelector('.endpoint-group-icon');
      const base = title?.querySelector('.endpoint-base');
      if (!title || !icon || !base) return;
      const text = title.textContent || '';
      let key = null;
      if (/Auth|Auth/i.test(text)) key = 'eventhub.group.auth';
      else if (/Użytkownicy|Users/i.test(text)) key = 'eventhub.group.users';
      else if (/Eventy|Events/i.test(text)) key = 'eventhub.group.events';
      else if (/Uczestnicy|Participants/i.test(text)) key = 'eventhub.group.participants';
      else if (/Zaproszenia|Invitations/i.test(text)) key = 'eventhub.group.invitations';
      else if (/Powiadomienia|Notifications/i.test(text)) key = 'eventhub.group.notifications';
      else if (/Media/i.test(text)) key = 'eventhub.group.media';
      else if (/Admin/i.test(text)) key = 'eventhub.group.admin';
      if (key) title.innerHTML = `${icon.outerHTML} ${t(key, lang)} ${base.outerHTML}`;
    });

    const endpointMap = {
      'POST|/login|/api/auth': 'eventhub.ep.auth.login',
      'POST|/register|/api/auth': 'eventhub.ep.auth.register',
      'GET|/me|/api/account': 'eventhub.ep.account.me',
      'PUT|/me|/api/account': 'eventhub.ep.account.update',
      'POST|/me/profile-image|/api/account': 'eventhub.ep.account.upload',
      'POST|/change-password|/api/account': 'eventhub.ep.account.password',
      'POST|/|/api/events': 'eventhub.ep.events.create',
      'GET|/public|/api/events': 'eventhub.ep.events.public',
      'GET|/{id}|/api/events': 'eventhub.ep.events.details',
      'PUT|/{id}|/api/events': 'eventhub.ep.events.update',
      'DELETE|/{id}|/api/events': 'eventhub.ep.events.delete',
      'GET|/all|/api/events': 'eventhub.ep.events.all',
      'POST|/|/api/events/{eventId}/participants': 'eventhub.ep.participants.join',
      'GET|/|/api/events/{eventId}/participants': 'eventhub.ep.participants.list',
      'GET|/me|/api/events/{eventId}/participants': 'eventhub.ep.participants.me',
      'DELETE|/me|/api/events/{eventId}/participants': 'eventhub.ep.participants.leave',
      'POST|/|/api/invitations': 'eventhub.ep.invitations.send',
      'GET|/my|/api/invitations': 'eventhub.ep.invitations.my',
      'POST|/{id}/accept|/api/invitations': 'eventhub.ep.invitations.accept',
      'POST|/{id}/decline|/api/invitations': 'eventhub.ep.invitations.decline',
      'POST|/{id}/revoke|/api/invitations': 'eventhub.ep.invitations.revoke',
      'GET|/|/api/notifications': 'eventhub.ep.notifications.list',
      'PATCH|/{id}/status|/api/notifications': 'eventhub.ep.notifications.status',
      'POST|/gallery|/api/events/{id}/media': 'eventhub.ep.media.gallery',
      'POST|/logo|/api/events/{id}/media': 'eventhub.ep.media.logo',
      'POST|/schedule|/api/events/{id}/media': 'eventhub.ep.media.schedule',
      'DELETE|/api/media/{fileId}|': 'eventhub.ep.media.delete',
      'PATCH|/accounts/{id}/status|/api/admin': 'eventhub.ep.admin.status',
      'PATCH|/accounts/{id}/role|/api/admin': 'eventhub.ep.admin.role',
      'DELETE|/accounts/{id}|/api/admin': 'eventhub.ep.admin.deleteAcct',
      'DELETE|/events/{id}|/api/admin': 'eventhub.ep.admin.deleteEvent',
    };

    document.querySelectorAll('#endpoints .endpoint-item').forEach(item => {
      const method = item.querySelector('.method')?.textContent.trim();
      const path = item.querySelector('.ep-path')?.textContent.trim();
      const desc = item.querySelector('.ep-desc');
      const base = item.closest('.endpoint-group')?.querySelector('.endpoint-base')?.textContent.trim() || '';
      if (!method || !path || !desc) return;
      const key = endpointMap[`${method}|${path}|${base}`] || endpointMap[`${method}|${path}|`];
      if (key) setText(desc, key, lang);
    });

    const schemaSection = document.querySelector('#schema');
    if (schemaSection) {
      setText(schemaSection.querySelector('.section-label'), 'eventhub.schema.label', lang);
      setText(schemaSection.querySelector('.section-h2'), 'eventhub.schema.h2', lang);
    }

    const buildSection = document.querySelector('.build-steps')?.closest('section');
    if (buildSection) {
      setText(buildSection.querySelector('.section-label'), 'eventhub.build.label', lang);
      setText(buildSection.querySelector('.section-h2'), 'eventhub.build.title', lang);
    }

    const teamSection = document.querySelector('.team-grid')?.closest('section');
    if (teamSection) {
      setText(teamSection.querySelector('.section-h2'), 'eventhub.team.title', lang);
    }
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
    applyTechStack('osk', lang, 6);
    applyArchInfo('osk', lang, 6);
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
    applyTechStack('ualingo', lang, 6);
    applyArchInfo('ualingo', lang, 6);
  }

  /* ── QUIZ ────────────────────────────────────── */
  function applyQuiz(lang) {
    applySharedDetail(lang);
    setText(document.querySelector('.proj-category'), 'quiz.category', lang);
    setText(document.querySelector('.badge-uni'), 'quiz.badge.uni', lang);
    setText(document.querySelector('.proj-tagline'), 'quiz.tagline', lang);

    const stats = document.querySelectorAll('.proj-stats .ps-l');
    if (stats[0]) setText(stats[0], 'quiz.stats.framework', lang);
    if (stats[1]) setText(stats[1], 'quiz.stats.language', lang);
    if (stats[2]) setText(stats[2], 'quiz.stats.storage', lang);
    if (stats[3]) setText(stats[3], 'quiz.stats.mode', lang);

    setText(document.querySelector('.gallery-section .section-label'), 'quiz.gallery.label', lang);
    setText(document.querySelector('.gallery-section .section-h2'), 'quiz.gallery.title', lang);

    const overlaySpans = document.querySelectorAll('.gallery-overlay span[data-i18n]');
    overlaySpans.forEach(span => {
      const key = span.dataset.i18n;
      if (key) setText(span, key, lang);
    });

    const features = document.querySelectorAll('.feat-item');
    for (let i = 0; i < 6; i++) {
      if (!features[i]) continue;
      setText(features[i].querySelector('.feat-title'), `quiz.feat.${i+1}.title`, lang);
      setText(features[i].querySelector('.feat-desc'),  `quiz.feat.${i+1}.desc`,  lang);
    }

    applyTechStack('quiz', lang, 6);
    applyArchInfo('quiz', lang, 6);
  }

  /* ── IOT ────────────────────────────────────── */
  function applyIot(lang) {
    applySharedDetail(lang);
    setText(document.querySelector('.proj-category'), 'iot.category', lang);
    setText(document.querySelector('.proj-tagline'),  'iot.tagline',  lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'iot.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    if (goalPs[0]) setText(goalPs[0], 'iot.goal.p1', lang);
    if (goalPs[1]) setText(goalPs[1], 'iot.goal.p2', lang);
    const galH2 = document.querySelector('.gallery-section .section-h2');
    if (galH2) setText(galH2, 'iot.gallery', lang);

    const feats = document.querySelectorAll('.feat-item');
    for (let i = 0; i < 6; i++) {
      if (!feats[i]) continue;
      setText(feats[i].querySelector('.feat-title'), `iot.feat.${i+1}.title`, lang);
      setText(feats[i].querySelector('.feat-desc'),  `iot.feat.${i+1}.desc`,  lang);
    }
    applyTechStack('iot', lang, 6);
    applyArchInfo('iot', lang, 6);

    /* ── LANGUAGES block (lang bars + right-side descriptions) ── */
    const langBars = document.querySelector('.lang-bars');
    if (langBars) {
      const section = langBars.closest('.section-wrap') || document;
      setText(section.querySelector('.section-label'), 'iot.langs.label', lang);

      const items = Array.from(langBars.querySelectorAll('.lang-bar-item'));
      items.forEach((it, i) => {
        setText(it.querySelector('.lang-bar-name'), `iot.lang.${i+1}.name`, lang);
        setText(it.querySelector('.lang-bar-pct'),  `iot.lang.${i+1}.pct`,  lang);
      });

      const rightFeats = section.querySelectorAll('.feature-list .feat-item');
      rightFeats.forEach((f, i) => {
        setText(f.querySelector('.feat-title'), `iot.lang.${i+1}.title`, lang);
        setText(f.querySelector('.feat-desc'),  `iot.lang.${i+1}.desc`,  lang);
      });
    }
  }

  /* ── ML ──────────────────────────────────────── */
  function applyMl(lang) {
    applySharedDetail(lang);
    
    // Hero section
    setText(document.querySelector('.proj-category'), 'ml.category', lang);
    setText(document.querySelector('.badge-uni'), 'ml.badge.uni', lang);
    setText(document.querySelector('.proj-tagline'), 'ml.tagline', lang);

    // Hero stats labels
    const statLabels = document.querySelectorAll('.proj-stats .ps-l');
    if (statLabels[0]) setText(statLabels[0], 'ml.stats.1.label', lang);
    if (statLabels[1]) setText(statLabels[1], 'ml.stats.2.label', lang);
    if (statLabels[2]) setText(statLabels[2], 'ml.stats.3.label', lang);
    if (statLabels[3]) setText(statLabels[3], 'ml.stats.4.label', lang);

    // Gallery section
    setText(document.querySelector('.gallery-section .section-label'), 'ml.gallery', lang);
    
    const galleryH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Analiza danych') || el.textContent.includes('Analysis')
    );
    if (galleryH2) setText(galleryH2, 'ml.gallery.title', lang);
    
    const galleryNote = document.querySelector('.gallery-note');
    if (galleryNote) setText(galleryNote, 'ml.gallery.note', lang);
    
    const galOverlays = document.querySelectorAll('.gallery-overlay span');
    const galleryLabels = ['ml.gallery.1', 'ml.gallery.2', 'ml.gallery.3', 'ml.gallery.4', 'ml.gallery.5', 'ml.gallery.6', 'ml.gallery.7', 'ml.gallery.8'];
    galOverlays.forEach((span, i) => {
      if (galleryLabels[i]) setText(span, galleryLabels[i], lang);
    });

    // Emotion class names
    const emoChips = document.querySelectorAll('.emo-chip');
    const emotionLabels = ['ml.emotion.1', 'ml.emotion.2', 'ml.emotion.3', 'ml.emotion.4', 'ml.emotion.5', 'ml.emotion.6', 'ml.emotion.7'];
    emoChips.forEach((chip, i) => {
      if (emotionLabels[i]) {
        const textNode = [...chip.childNodes].find(n => n.nodeType === 3);
        if (textNode) {
          const val = t(emotionLabels[i], lang);
          if (val) textNode.textContent = val;
        }
      }
    });

    // Goal section
    const goalLabel = document.querySelector('.two-col .section-label');
    if (goalLabel) setText(goalLabel, 'ml.goal.label', lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'ml.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    if (goalPs[0]) setText(goalPs[0], 'ml.goal.p1', lang);
    if (goalPs[1]) setText(goalPs[1], 'ml.goal.p2', lang);

    // Features
    const feats = document.querySelectorAll('.two-col .feat-item');
    for (let i = 0; i < 6; i++) {
      if (!feats[i]) continue;
      setText(feats[i].querySelector('.feat-title'), `ml.feat.${i+1}.title`, lang);
      setText(feats[i].querySelector('.feat-desc'),  `ml.feat.${i+1}.desc`,  lang);
    }

    // Dataset section
    const dsLabel = [...document.querySelectorAll('.section-label')].find(el => 
      el.textContent.includes('Zbiór danych') || el.textContent.includes('Dataset')
    );
    if (dsLabel) setText(dsLabel, 'ml.dataset.label', lang);
    
    const dsH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('FER-2013')
    );
    if (dsH2) setText(dsH2, 'ml.dataset.title', lang);

    const dsStats = document.querySelectorAll('.data-stat-l');
    if (dsStats[0]) setText(dsStats[0], 'ml.dataset.stat.1.l', lang);
    if (dsStats[1]) setText(dsStats[1], 'ml.dataset.stat.2.l', lang);
    if (dsStats[2]) setText(dsStats[2], 'ml.dataset.stat.3.l', lang);
    if (dsStats[3]) setText(dsStats[3], 'ml.dataset.stat.4.l', lang);

    // Pipeline section
    const pipelineLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Architektura') || el.textContent.includes('Architecture')
    );
    if (pipelineLabel) setText(pipelineLabel, 'ml.pipeline.label', lang);
    
    const pipelineH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Potok') || el.textContent.includes('Pipeline')
    );
    if (pipelineH2) setText(pipelineH2, 'ml.pipeline.title', lang);

    // Pipeline steps
    const pipelineSteps = document.querySelectorAll('.pf-step .pf-label');
    const pipelineStepLabels = ['ml.pipeline.step.1', 'ml.pipeline.step.2', 'ml.pipeline.step.3', 'ml.pipeline.step.4', 'ml.pipeline.step.5'];
    pipelineSteps.forEach((step, i) => {
      if (pipelineStepLabels[i]) setText(step, pipelineStepLabels[i], lang);
    });

    // Results section
    const resultsLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Wyniki') || el.textContent.includes('Results')
    );
    if (resultsLabel) setText(resultsLabel, 'ml.results.label', lang);
    
    const resultsH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Model bazowy') || el.textContent.includes('Baseline')
    );
    if (resultsH2) setText(resultsH2, 'ml.results.title', lang);

    // Results table headers
    const tableHeaders = document.querySelectorAll('.results-table thead th');
    if (tableHeaders[0]) setText(tableHeaders[0], 'ml.results.table.model', lang);
    if (tableHeaders[1]) setText(tableHeaders[1], 'ml.results.table.accuracy', lang);
    if (tableHeaders[2]) setText(tableHeaders[2], 'ml.results.table.loss', lang);

    // Results table rows
    const tableBodyRows = document.querySelectorAll('.results-table tbody tr');
    if (tableBodyRows[0] && tableBodyRows[0].querySelectorAll('td')[0]) {
      setText(tableBodyRows[0].querySelectorAll('td')[0], 'ml.results.table.baseline', lang);
    }
    if (tableBodyRows[1] && tableBodyRows[1].querySelectorAll('td')[0]) {
      setText(tableBodyRows[1].querySelectorAll('td')[0], 'ml.results.table.hyperband', lang);
    }
    if (tableBodyRows[2] && tableBodyRows[2].querySelectorAll('td')[0]) {
      setText(tableBodyRows[2].querySelectorAll('td')[0], 'ml.results.table.improvement', lang);
    }

    // Results note
    const resultsNote = document.querySelector('.results-note');
    if (resultsNote) setText(resultsNote, 'ml.results.note', lang);

    // Tech section
    const techLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Technologie') || el.textContent.includes('Technologies')
    );
    if (techLabel) setText(techLabel, 'ml.tech.label', lang);

    applyTechStack('ml', lang, 6);
    applyArchInfo('ml', lang, 6);

    // Deliverables section
    const delivLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Repozytorium') || el.textContent.includes('Repository')
    );
    if (delivLabel) setText(delivLabel, 'ml.deliverables.label', lang);
    
    const delivH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Struktura') || el.textContent.includes('structure')
    );
    if (delivH2) setText(delivH2, 'ml.deliverables.title', lang);

    // Deliverables cards
    const delivCards = document.querySelectorAll('.deliv-card');
    const delivKeys = ['ml.deliverables.1', 'ml.deliverables.2', 'ml.deliverables.3', 'ml.deliverables.4', 'ml.deliverables.5', 'ml.deliverables.6'];
    delivCards.forEach((card, i) => {
      if (delivKeys[i]) {
        setText(card.querySelector('.deliv-title'), `${delivKeys[i]}.title`, lang);
        setText(card.querySelector('.deliv-desc'), `${delivKeys[i]}.desc`, lang);
      }
    });

    // Team section
    const teamLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Zespół') || el.textContent.includes('Team')
    );
    if (teamLabel) setText(teamLabel, 'ml.team.label', lang);
    
    const teamH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Autorzy') || el.textContent.includes('authors')
    );
    if (teamH2) setText(teamH2, 'ml.team.title', lang);

    // Team members
    const teamCards = document.querySelectorAll('.team-card');
    const teamMembers = ['ml.team.1', 'ml.team.2'];
    teamCards.forEach((card, i) => {
      if (teamMembers[i]) {
        setText(card.querySelector('.team-name'), `${teamMembers[i]}.name`, lang);
        setText(card.querySelector('.team-role'), `${teamMembers[i]}.role`, lang);
      }
    });
  }

  /* ── AIPLANNER ─────────────────────────────── */
  function applyAiplanner(lang) {
    applySharedDetail(lang);
    
    // Hero section
    setText(document.querySelector('.proj-category'), 'aiplanner.category', lang);
    setText(document.querySelector('.badge-uni'), 'aiplanner.badge.uni', lang);
    setText(document.querySelector('.proj-tagline'), 'aiplanner.tagline', lang);

    // Hero stats labels
    const statLabels = document.querySelectorAll('.proj-stats .ps-l');
    if (statLabels[0]) setText(statLabels[0], 'aiplanner.stats.1.label', lang);
    if (statLabels[1]) setText(statLabels[1], 'aiplanner.stats.2.label', lang);
    if (statLabels[2]) setText(statLabels[2], 'aiplanner.stats.3.label', lang);
    if (statLabels[3]) setText(statLabels[3], 'aiplanner.stats.4.label', lang);

    // Tabs
    const tabs = document.querySelectorAll('.ap-tab');
    const tabLabels = ['aiplanner.tabs.1', 'aiplanner.tabs.2', 'aiplanner.tabs.3', 'aiplanner.tabs.4', 'aiplanner.tabs.5'];
    tabs.forEach((tab, i) => {
      if (tabLabels[i]) {
        const textNode = [...tab.childNodes].find(n => n.nodeType === 3);
        if (textNode) {
          const val = t(tabLabels[i], lang);
          if (val) textNode.textContent = val;
        }
      }
    });

    // Gallery section
    setText(document.querySelector('.gallery-section .section-label'), 'aiplanner.gallery.label', lang);
    
    const galleryH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Aplikacja w akcji') || el.textContent.includes('App in action')
    );
    if (galleryH2) setText(galleryH2, 'aiplanner.gallery.title', lang);
    
    const galOverlays = document.querySelectorAll('.gallery-overlay span');
    const galleryLabels = ['aiplanner.gallery.1', 'aiplanner.gallery.2', 'aiplanner.gallery.3', 'aiplanner.gallery.4', 'aiplanner.gallery.5', 'aiplanner.gallery.6', 'aiplanner.gallery.7', 'aiplanner.gallery.8'];
    galOverlays.forEach((span, i) => {
      if (galleryLabels[i]) setText(span, galleryLabels[i], lang);
    });

    // Goal section
    const goalLabel = document.querySelector('.two-col .section-label');
    if (goalLabel) setText(goalLabel, 'aiplanner.goal.label', lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'aiplanner.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    if (goalPs[0]) setText(goalPs[0], 'aiplanner.goal.p1', lang);
    if (goalPs[1]) setText(goalPs[1], 'aiplanner.goal.p2', lang);

    // Features
    const feats = document.querySelectorAll('.two-col .feat-item');
    for (let i = 0; i < 6; i++) {
      if (!feats[i]) continue;
      setText(feats[i].querySelector('.feat-title'), `aiplanner.feat.${i+1}.title`, lang);
      setText(feats[i].querySelector('.feat-desc'),  `aiplanner.feat.${i+1}.desc`,  lang);
    }

    // Screens section
    const screensLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Ekrany') || el.textContent.includes('Screens')
    );
    if (screensLabel) setText(screensLabel, 'aiplanner.screens.label', lang);
    
    const screensH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Szczegóły funkcjonalności') || el.textContent.includes('Feature details')
    );
    if (screensH2) setText(screensH2, 'aiplanner.screens.title', lang);

    // Architecture cards (screens/features)
    const archCards = document.querySelectorAll('.arch-grid .arch-card');
    for (let i = 0; i < Math.min(6, archCards.length); i++) {
      const card = archCards[i];
      setText(card.querySelector('.arch-title'), `aiplanner.arch.${i+1}.title`, lang);
      setText(card.querySelector('.arch-desc'), `aiplanner.arch.${i+1}.desc`, lang);
    }

    // Firestore section
    const fsLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Architektura') || el.textContent.includes('Architecture')
    );
    if (fsLabel) setText(fsLabel, 'aiplanner.firestore.label', lang);
    
    const fsH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Firestore') || el.textContent.includes('firestore')
    );
    if (fsH2) setText(fsH2, 'aiplanner.firestore.title', lang);

    // Tech section
    const techLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Technologie') || el.textContent.includes('Technologies')
    );
    if (techLabel) setText(techLabel, 'aiplanner.tech.label', lang);

    applyTechStack('aiplanner', lang, 6);

    // Deliverables section
    const delivLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Projekt') || el.textContent.includes('Project')
    );
    if (delivLabel) setText(delivLabel, 'aiplanner.deliverables.label', lang);
    
    const delivH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Co zostało dostarczone') || el.textContent.includes('What was delivered')
    );
    if (delivH2) setText(delivH2, 'aiplanner.deliverables.title', lang);

    // Deliverables cards
    const delivCards = document.querySelectorAll('.deliv-card');
    for (let i = 0; i < Math.min(6, delivCards.length); i++) {
      const card = delivCards[i];
      setText(card.querySelector('.deliv-title'), `aiplanner.deliverables.${i+1}.title`, lang);
      setText(card.querySelector('.deliv-desc'), `aiplanner.deliverables.${i+1}.desc`, lang);
    }

    // Team section
    const teamLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Autor') || el.textContent.includes('Author')
    );
    if (teamLabel) setText(teamLabel, 'aiplanner.team.label', lang);
    
    const teamH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('indywidualny') || el.textContent.includes('Solo')
    );
    if (teamH2) setText(teamH2, 'aiplanner.team.title', lang);

    // Team member (solo project - only one)
    const teamCard = document.querySelector('.team-card');
    if (teamCard) {
      setText(teamCard.querySelector('.team-name'), 'aiplanner.team.name', lang);
      setText(teamCard.querySelector('.team-role'), 'aiplanner.team.role', lang);
    }
  }

  /* ── PUBLIC API ──────────────────────────────── */
  return {
    apply,
    t,
    getPage,
    getLang: () => localStorage.getItem('lang') || 'pl',
  };

})();