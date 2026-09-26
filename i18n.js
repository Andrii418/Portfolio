/* ═══════════════════════════════════════════════
   i18n.js — Globalny system tłumaczeń
   Importowany przez main.js na każdej podstronie.
   Język przechowywany w localStorage('lang').
   Obsługiwane języki: pl, en, ua
═══════════════════════════════════════════════ */

window.I18N = (function () {

  const SUPPORTED_LANGS = ['pl', 'en', 'ua'];

  /* ── SŁOWNIK ────────────────────────────────── */
  const T = {

    /* ════ NAVBAR (wszystkie strony) ════ */
    'nav.projects': { pl: 'Projekty',    en: 'Projects',    ua: 'Проєкти' },
    'nav.contact':  { pl: 'Kontakt',     en: 'Contact',     ua: 'Контакти' },
    'nav.cv':       { pl: 'Pobierz CV',  en: 'Download CV', ua: 'Завантажити CV' },
    'nav.home':     { pl: 'Home',        en: 'Home',        ua: 'Головна' },

    /* ════ FOOTER (wszystkie strony) ════ */
    'footer.copy': { pl: '© 2026 Andrii Torianyk', en: '© 2026 Andrii Torianyk', ua: '© 2026 Andrii Torianyk' },

    /* ════ HOME — index.html ════ */
    'home.badge':       { pl: 'Poszukuję pracy\u00a0·\u00a0Kraków, Rzeszów, Tarnów / Remote',
                          en: 'Open to work\u00a0·\u00a0Kraków, Rzeszów, Tarnów / Remote',
                          ua: 'Шукаю роботу\u00a0·\u00a0Краків, Жешув, Тарнув / Віддалено' },
    'home.title.line':  { pl: 'Nazywam się',  en: 'My name is', ua: 'Мене звати' },
    'home.role':        { pl: 'Full-stack Developer | Student III roku Informatyki',
                          en: 'Full-stack Developer | 3rd-year CS Student',
                          ua: 'Full-stack розробник | Студент 3 курсу інформатики' },
    'home.desc':        { pl: 'Buduję skalowalne aplikacje webowe i systemy, łącząc wydajną logikę backendową z dopracowanymi interfejsami użytkownika. Skupiam się na pisaniu czystego kodu, bezpieczeństwie danych oraz optymalizacji wydajności systemów.',
                          en: 'I build scalable web applications and systems, combining efficient backend logic with polished user interfaces. I focus on writing clean code, data security, and performance optimization.',
                          ua: 'Створюю масштабовані вебзастосунки та системи, поєднуючи ефективну backend-логіку з відточеними інтерфейсами користувача. Зосереджуюсь на чистому коді, безпеці даних та оптимізації продуктивності систем.' },
    'home.btn.projects': { pl: 'Moje projekty',        en: 'My projects',       ua: 'Мої проєкти' },
    'home.btn.contact':  { pl: 'Formularz kontaktowy', en: 'Contact form',      ua: 'Контактна форма' },
    'home.card.role':    { pl: 'Full-stack Developer', en: 'Full-stack Developer', ua: 'Full-stack розробник' },
    'home.card.years':   { pl: 'lata studiów',  en: 'years of study', ua: 'роки навчання' },
    'home.card.repos':   { pl: 'repozytoriów',  en: 'repositories',   ua: 'репозиторіїв' },
    'home.card.tech':    { pl: 'technologii',   en: 'technologies',   ua: 'технологій' },
    'home.about.eyebrow': { pl: 'Profil zawodowy', en: 'Professional profile', ua: 'Професійний профіль' },
    'home.about.title':   { pl: 'Rozwiązania Full-stack:<br><span class="gradient-text">od architektury po UI</span>',
                            en: 'Full-stack Solutions:<br><span class="gradient-text">from architecture to UI</span>',
                            ua: 'Full-stack рішення:<br><span class="gradient-text">від архітектури до UI</span>' },
    'home.about.p1': { pl: 'Jako student Inżynierii Oprogramowania podchodzę do tworzenia aplikacji w sposób kompleksowy. Moje kompetencje obejmują budowę skalowalnych API, zarządzanie relacyjnymi bazami danych oraz implementację nowoczesnych, intuicyjnych frontendów.',
                       en: 'As a Software Engineering student, I take a holistic approach to application development. My competencies include building scalable APIs, managing relational databases, and implementing modern, intuitive frontends.',
                       ua: 'Як студент інженерії програмного забезпечення, я підходжу до розробки застосунків комплексно. Моя компетенція охоплює побудову масштабованих API, керування реляційними базами даних та впровадження сучасних, інтуїтивних інтерфейсів.' },
    'home.about.p2': { pl: 'Równolegle rozwijam projekty mobilne i desktopowe, dbając o spójność technologiczną i wysoką jakość dostarczanego oprogramowania niezależnie od platformy docelowej.',
                       en: 'I also develop mobile and desktop projects, ensuring technological consistency and high software quality regardless of the target platform.',
                       ua: 'Паралельно розвиваю мобільні та десктопні проєкти, дбаючи про технологічну узгодженість і високу якість програмного забезпечення незалежно від цільової платформи.' },
    'home.about.link': { pl: 'Przeglądaj stos technologiczny →', en: 'Browse tech stack →', ua: 'Переглянути технологічний стек →' },
    'home.tl.1.title': { pl: 'Studia Inżynierskie: Informatyka',         en: "Bachelor's: Computer Science", ua: 'Бакалаврат: Інформатика' },
    'home.tl.1.sub':   { pl: 'Akademia Tarnowska (spec. Inżynieria Oprogramowania)', en: 'Tarnów Academy (Software Engineering)', ua: 'Тарновська академія (спец. Інженерія програмного забезпечення)' },
    'home.tl.2.title': { pl: 'Rozwój projektów mobilnych i desktopowych', en: 'Mobile & Desktop Project Development', ua: 'Розробка мобільних і десктопних проєктів' },
    'home.tl.2.sub':   { pl: 'Implementacja w środowiskach Android Studio oraz Spring Boot', en: 'Built with Android Studio and Spring Boot', ua: 'Реалізація в Android Studio та Spring Boot' },
    'home.tl.3.title': { pl: 'Freelance: Strony internetowe',             en: 'Freelance: Web Development', ua: 'Фриланс: Веброзробка' },
    'home.tl.3.sub':   { pl: 'Architektura i wdrożenia systemów CMS/E-commerce', en: 'CMS/E-commerce architecture & deployments', ua: 'Архітектура та впровадження систем CMS/E-commerce' },
    'home.tl.4.title': { pl: 'Poszukuję pracy',       en: 'Looking for a job', ua: 'Шукаю роботу' },
    'home.tl.4.sub':   { pl: 'Junior Software Engineer', en: 'Junior Software Engineer', ua: 'Junior Software Engineer' },

    /* ════ CONTACT — contact/index.html ════ */
    'contact.eyebrow':   { pl: 'Kontakt',     en: 'Contact', ua: 'Контакти' },
    'contact.title':     { pl: 'Porozmawiajmy', en: "Let's talk", ua: 'Поговорімо' },
    'contact.desc':      { pl: 'Szukam pracy jako Junior Developer. Chętnie porozmawiam o projekcie, współpracy.',
                           en: "I'm looking for a Junior Developer position. Happy to discuss a project or collaboration.",
                           ua: 'Шукаю роботу на посаді Junior Developer. Радо обговорю проєкт або співпрацю.' },
    'contact.email.label':   { pl: 'Email',    en: 'Email',    ua: 'Email' },
    'contact.linkedin.label':{ pl: 'LinkedIn', en: 'LinkedIn', ua: 'LinkedIn' },
    'contact.github.label':  { pl: 'GitHub',   en: 'GitHub',   ua: 'GitHub' },
    'contact.form.name':     { pl: 'Imię i nazwisko',   en: 'Full name',  ua: "Ім'я та прізвище" },
    'contact.form.name.ph':  { pl: 'Anna Nowak',        en: 'John Smith', ua: 'Ганна Коваль' },
    'contact.form.email':    { pl: 'Email',              en: 'Email',     ua: 'Email' },
    'contact.form.email.ph': { pl: 'anna@firma.pl',     en: 'john@company.com', ua: 'hanna@firma.ua' },
    'contact.form.msg':      { pl: 'Wiadomość',          en: 'Message',   ua: 'Повідомлення' },
    'contact.form.msg.ph':   { pl: 'Cześć Andrii, chciałem/am...', en: 'Hi Andrii, I wanted to...', ua: 'Привіт Андрію, я хотів(-ла)...' },
    'contact.form.send':     { pl: 'Wyślij wiadomość',  en: 'Send message', ua: 'Надіслати повідомлення' },

    /* ════ PROJECTS LIST — projects/index.html ════ */
    'projects.eyebrow':  { pl: 'Moje prace', en: 'My work',  ua: 'Мої роботи' },
    'projects.title':    { pl: 'Projekty',   en: 'Projects', ua: 'Проєкти' },
    'projects.desc':     { pl: 'Aplikacje webowe, mobilne, gry i narzędzia backendowe — tu trafia wszystko co zbudowałem.',
                           en: 'Web apps, mobile apps, games and backend tools — everything I have built.',
                           ua: 'Вебзастосунки, мобільні застосунки, ігри та backend-інструменти — все, що я створив.' },
    'projects.osk.desc':    { pl: 'Strona internetowa dla ośrodka szkolenia kierowców — freelance. Panel admina do zarządzania kursami, aktualnościami i statystykami odwiedzin. Projekt live.',
                              en: 'Website for a driving school — freelance project. Admin panel for managing courses, news and visit statistics. Live project.',
                              ua: 'Вебсайт для автошколи — фриланс-проєкт. Панель адміністратора для керування курсами, новинами та статистикою відвідувань. Проєкт у продакшені.' },
    'projects.osk.link':    { pl: 'Zobacz projekt', en: 'View project', ua: 'Переглянути проєкт' },
    'projects.racing.desc': { pl: 'Autorski silnik wyścigowy napisany od zera w C++ i OpenGL 3.3 — bez Unity ani Unreal. Pełna fizyka, AI na waypointach, shadery Phonga i system ekonomii z garażem 7 samochodów.',
                              en: 'Custom racing engine written from scratch in C++ and OpenGL 3.3 — no Unity or Unreal. Full physics, waypoint AI, Phong shaders and economy system with a 7-car garage.',
                              ua: 'Власний перегоновий рушій, написаний з нуля на C++ та OpenGL 3.3 — без Unity чи Unreal. Повна фізика, AI на waypoint-ах, шейдери Фонга та система економіки з гаражем на 7 авто.' },
    'projects.racing.link': { pl: 'Zobacz projekt', en: 'View project', ua: 'Переглянути проєкт' },
    'projects.wyspa.desc':  { pl: 'Survivalowa gra FPS z systemem zagadek logicznych. Eksploruj niebezpieczną wyspę, unikaj wilka i zapal ognisko pomocy przed zapadnięciem zmroku.',
                              en: 'Survival FPS game with a logic puzzle system. Explore the dangerous island, avoid the wolf and light the campfire before nightfall.',
                              ua: 'Survival FPS-гра із системою логічних головоломок. Досліджуй небезпечний острів, уникай вовка та розпали рятувальне вогнище до настання темряви.' },
    'projects.wyspa.link':  { pl: 'Zobacz projekt', en: 'View project', ua: 'Переглянути проєкт' },
    'projects.blog.desc':   { pl: 'Fullstackowa aplikacja blogowa — Angular + Node.js. System postów, komentarzy, ocen i ulubionych. Panel admina, autoryzacja JWT i Server-Side Rendering.',
                              en: 'Fullstack blog application — Angular + Node.js. Posts, comments, ratings and favourites. Admin panel, JWT auth and Server-Side Rendering.',
                              ua: 'Fullstack блог-застосунок — Angular + Node.js. Система постів, коментарів, оцінок та обраного. Панель адміністратора, JWT-авторизація та Server-Side Rendering.' },
    'projects.blog.link':   { pl: 'Zobacz projekt', en: 'View project', ua: 'Переглянути проєкт' },
    'projects.ualingo.desc':{ pl: 'Aplikacja mobilna Android do nauki języka ukraińskiego — quizy z timerem, gra Word Search, memy edukacyjne i autoryzacja Firebase. 18 ekranów, 10 tematów, 120 pytań.',
                              en: 'Android mobile app for learning Ukrainian — timed quizzes, Word Search game, educational memes and Firebase auth. 18 screens, 10 topics, 120 questions.',
                              ua: 'Android-застосунок для вивчення української мови — тести з таймером, гра Word Search, навчальні меми та авторизація Firebase. 18 екранів, 10 тем, 120 запитань.' },
    'projects.ualingo.link':{ pl: 'Zobacz projekt', en: 'View project', ua: 'Переглянути проєкт' },
    'projects.vaultify.desc': { pl: 'Zero-knowledge aplikacja do jednorazowego udostępniania sekretów — hasła i klucze API szyfrowane lokalnie w przeglądarce (AES-256-GCM), zanim cokolwiek trafi na serwer. Read-once, podział klucza Shamira i tryb wabika.',
                            en: 'Zero-knowledge app for one-time secret sharing — passwords and API keys encrypted locally in the browser (AES-256-GCM) before anything reaches the server. Read-once, Shamir key splitting and a decoy mode.',
                            ua: 'Zero-knowledge застосунок для одноразового обміну секретами — паролі та API-ключі шифруються локально в браузері (AES-256-GCM), перш ніж щось потрапить на сервер. Read-once, розділення ключа за Шаміром і режим приманки.' },

'projects.vaeloq.desc': { pl: 'Aplikacja Next.js realizująca pełny pipeline RAG — wgrywasz PDF, system tnie go na fragmenty, indeksuje jako wektory w pgvector i odpowiada na pytania, osadzając odpowiedź w konkretnych cytatach ze źródła.',
                          en: 'A Next.js app running a full RAG pipeline — upload a PDF, the system splits it into fragments, indexes them as vectors in pgvector, and answers questions by grounding the response in specific source citations.',
                          ua: 'Застосунок Next.js, що реалізує повний RAG-конвеєр — завантажуєш PDF, система розбиває його на фрагменти, індексує як вектори в pgvector і відповідає на запитання, обґрунтовуючи відповідь конкретними цитатами з джерела.' },

    'projects.omniscale.desc': { pl: 'AI-powered platforma do orkiestracji infrastruktury chmurowej z wbudowanym agentem SRE — deklaratywne zarządzanie zasobami inspirowane Terraform, dashboard monitorowania w czasie rzeczywistym i interaktywna topologia systemu.',
                                 en: 'AI-powered cloud infrastructure orchestration platform with a built-in SRE agent — Terraform-inspired declarative resource management, a real-time monitoring dashboard and an interactive system topology.',
                                 ua: 'AI-платформа оркестрації хмарної інфраструктури з вбудованим SRE-агентом — декларативне керування ресурсами в дусі Terraform, дашборд моніторингу в реальному часі та інтерактивна топологія системи.' },
    'projects.barber.desc': { pl: 'Premium, ciemna strona typu landing page dla fikcyjnego salonu fryzjerskiego — zbudowana w czystym HTML5, CSS3 i JavaScript, bez frameworków, z sekcją usług, portfolio prac i formularzem kontaktowym.',
                              en: 'A premium dark landing page for a fictional barbershop — built in pure HTML5, CSS3 and JavaScript, with no frameworks, featuring a services section, a work portfolio and a contact form.',
                              ua: 'Преміальна темна лендинг-сторінка для вигаданого барбершопу — зібрана на чистому HTML5, CSS3 і JavaScript без фреймворків, із секцією послуг, портфоліо робіт і контактною формою.' },
    'projects.lumina.desc': { pl: 'Nowoczesna, responsywna strona docelowa dla fikcyjnej kliniki stomatologicznej — zbudowana w czystym HTML5, CSS3 i JavaScript, prezentująca profesjonalny, budzący zaufanie interfejs marki medycznej.',
                              en: 'A modern, responsive landing page for a fictional dental clinic — built in pure HTML5, CSS3 and JavaScript, presenting a professional, trust-building medical brand interface.',
                              ua: 'Сучасна адаптивна лендинг-сторінка для вигаданої стоматологічної клініки — зібрана на чистому HTML5, CSS3 і JavaScript, з професійним інтерфейсом медичного бренду, що викликає довіру.' },
    'projects.apex.desc': { pl: 'Nowoczesna strona promocyjna (landing page) zbudowana w oparciu o semantyczny HTML5, CSS3 i JavaScript — kompletne studium przypadku z sekcjami Hero, Features, Testimonials i Call-to-Action.',
                            en: 'A modern promotional landing page built with semantic HTML5, CSS3 and JavaScript — a complete case study with Hero, Features, Testimonials and Call-to-Action sections.',
                            ua: 'Сучасна промоційна лендинг-сторінка на семантичному HTML5, CSS3 і JavaScript — повне кейс-стаді з секціями Hero, Features, Testimonials і Call-to-Action.' },
    'projects.glow.desc': { pl: 'Zmysłowy landing page fikcyjnego salonu urody i zabiegów kosmetycznych — wielojęzyczny interfejs (PL/EN/UA), galeria „przed/po”, FAQ i formularz rezerwacji, w estetyce glassmorphism bez frameworków i backendu.',
                            en: 'A sensual landing page for a fictional beauty salon — multilingual interface (PL/EN/UA), before-and-after gallery, FAQ and booking form, with a glassmorphism aesthetic and no frameworks or backend.',
                            ua: 'Чуттєва лендинг-сторінка вигаданого салону краси — багатомовний інтерфейс (PL/EN/UA), галерея «до/після», FAQ і форма бронювання в естетиці glassmorphism, без фреймворків і backend.' },
    'projects.status.progress': { pl: 'W realizacji', en: 'In progress', ua: 'У розробці' },
    'projects.status.done':     { pl: 'Ukończony',    en: 'Completed',   ua: 'Завершений' },

'projects.ml.desc': { pl: 'Deep learning na zbiorze FER-2013 — klasyfikacja 7 emocji z wyrazu twarzy przy użyciu CNN, automatyczne strojenie hiperparametrów Hyperband i wizualizacja Grad-CAM w aplikacji Gradio.',
                      en: 'Deep learning on the FER-2013 dataset — classifying 7 facial expression emotions with a CNN, automatic Hyperband hyperparameter tuning and Grad-CAM visualization in a Gradio app.',
                      ua: 'Deep learning на наборі даних FER-2013 — класифікація 7 емоцій за виразом обличчя за допомогою CNN, автоматичне налаштування гіперпараметрів Hyperband і візуалізація Grad-CAM у застосунку Gradio.' },

'projects.aiplanner.desc': { pl: 'Mobilna aplikacja do planowania nauki, zadań i podróży z asystentem AI (LLaMA 3.1 via GROQ API), real-time sync przez Firebase Firestore.',
                             en: 'Mobile app for planning study, tasks and trips with an AI assistant (LLaMA 3.1 via GROQ API), real-time sync via Firebase Firestore.',
                             ua: 'Мобільний застосунок для планування навчання, завдань і подорожей з AI-асистентом (LLaMA 3.1 через GROQ API), синхронізація в реальному часі через Firebase Firestore.' },

'projects.eventhub.desc': { pl: 'Kompleksowy backend REST API do zarządzania eventami — Spring Boot 3.3, JWT, PostgreSQL. System ról RBAC, zaproszenia, powiadomienia i multimedia w jednym serwisie.',
                            en: 'Comprehensive REST API backend for event management — Spring Boot 3.3, JWT, PostgreSQL. RBAC role system, invitations, notifications and media in one service.',
                            ua: 'Комплексний REST API backend для керування подіями — Spring Boot 3.3, JWT, PostgreSQL. Система ролей RBAC, запрошення, сповіщення та медіа в одному сервісі.' },

'projects.iot.desc': { pl: 'Cross-platform aplikacja mobilna do sterowania urządzeniami smart home — dodawaj lampy, rolety i inne urządzenia, przypisuj miejsce, komendy i kolor identyfikacyjny.',
                       en: 'Cross-platform mobile app for controlling smart home devices — add lights, blinds and other devices, assign room, commands and an identifying color.',
                       ua: 'Крос-платформний мобільний застосунок для керування пристроями розумного дому — додавай лампи, ролети та інші пристрої, призначай приміщення, команди та ідентифікаційний колір.' },

'projects.quiz.desc': { pl: 'Mobilna aplikacja edukacyjna do rozwiązywania testów wielokrotnego wyboru — timer na pytanie, globalny ranking, tryb offline z SQLite i synchronizacja z REST API.',
                        en: 'Mobile educational app for solving multiple-choice quizzes — per-question timer, global ranking, offline mode with SQLite and REST API sync.',
                        ua: 'Мобільний освітній застосунок для проходження тестів із вибором відповіді — таймер на питання, глобальний рейтинг, офлайн-режим із SQLite та синхронізація з REST API.' },

'projects.card.link': { pl: 'Zobacz projekt', en: 'View project', ua: 'Переглянути проєкт' },

  /* ════ GLOW BEAUTY SALON — project detail ════ */
  'glow.category': { pl: 'Web Development · Frontend', en: 'Web Development · Frontend', ua: 'Веброзробка · Frontend' },
  'glow.badge.uni': { pl: 'Projekt fikcyjny', en: 'Fictional project', ua: 'Вигаданий проєкт' },
  'glow.tagline': { pl: 'Zmysłowy landing page fikcyjnego salonu urody i zabiegów kosmetycznych — zbudowany w czystym HTML5, CSS3 i JavaScript, z wielojęzycznym interfejsem (PL/EN/UA) i estetyką glassmorphism.', en: 'A sensual landing page for a fictional beauty and cosmetics salon — built in pure HTML5, CSS3 and JavaScript, with a multilingual interface (PL/EN/UA) and a glassmorphism aesthetic.', ua: 'Чуттєва лендинг-сторінка вигаданого салону краси та косметологічних процедур — створена на чистих HTML5, CSS3 і JavaScript із багатомовним інтерфейсом (PL/EN/UA) та естетикою glassmorphism.' },
  'glow.stats.structure': { pl: 'Struktura', en: 'Structure', ua: 'Структура' },
  'glow.stats.styling': { pl: 'Styling', en: 'Styling', ua: 'Стилізація' },
  'glow.stats.interactions': { pl: 'Interakcje', en: 'Interactions', ua: 'Взаємодія' },
  'glow.stats.languages': { pl: 'Języki', en: 'Languages', ua: 'Мови' },
  'glow.gallery.label': { pl: 'Screenshoty', en: 'Screenshots', ua: 'Скріншоти' },
  'glow.gallery.title': { pl: 'Strona w akcji', en: 'The site in action', ua: 'Сайт у дії' },
  'glow.overlay.1': { pl: 'Widok główny', en: 'Main view', ua: 'Головний екран' },
  'glow.overlay.2': { pl: 'Oferta zabiegów', en: 'Treatment offer', ua: 'Пропозиція процедур' },
  'glow.overlay.3': { pl: 'Efekty przed i po', en: 'Before and after results', ua: 'Результати до і після' },
  'glow.overlay.4': { pl: 'Opinie klientek', en: 'Client testimonials', ua: 'Відгуки клієнток' },
  'glow.overlay.5': { pl: 'Sekcja FAQ', en: 'FAQ section', ua: 'Секція FAQ' },
  'glow.overlay.6': { pl: 'Formularz rezerwacji', en: 'Booking form', ua: 'Форма бронювання' },
  'glow.overlay.7': { pl: 'Kontakt i lokalizacja', en: 'Contact and location', ua: 'Контакти та локація' },
  'glow.overlay.8': { pl: 'Stopka strony', en: 'Page footer', ua: 'Футер сторінки' },
  'glow.goal.label': { pl: 'Cel projektu', en: 'Project goal', ua: 'Мета проєкту' },
  'glow.goal.h2': { pl: 'Zmysłowy landing page<br/><span class="grad">zaprojektowany z dbałością o detal</span>', en: 'A sensual landing page<br/><span class="grad">designed with attention to detail</span>', ua: 'Чуттєва лендинг-сторінка<br/><span class="grad">створена з увагою до деталей</span>' },
  'glow.goal.p1': { pl: 'GLOW Beauty Salon to statyczny landing page fikcyjnego salonu urody i zabiegów kosmetycznych — z sekcjami hero, usług, efektów „przed/po”, opinii, FAQ, formularza rezerwacji oraz kontaktu. Projekt powstał wyłącznie w celach portfolio, jako demonstracja umiejętności front-end development bez frameworków i backendu.', en: 'GLOW Beauty Salon is a static landing page for a fictional beauty and cosmetics salon, with hero, services, before-and-after results, testimonials, FAQ, booking form and contact sections. The project was created solely for portfolio purposes, demonstrating frontend development without frameworks or a backend.', ua: 'GLOW Beauty Salon — статична лендинг-сторінка вигаданого салону краси та косметологічних процедур із секціями hero, послуг, результатів «до/після», відгуків, FAQ, форми бронювання та контактів. Проєкт створено виключно для портфоліо як демонстрацію frontend-розробки без фреймворків і backend.' },
  'glow.goal.p2': { pl: 'Cały projekt — nazwa salonu, zabiegi, zdjęcia, opinie i dane kontaktowe — jest wymyślony. Formularz rezerwacji działa wyłącznie po stronie klienta i tylko wyświetla komunikat potwierdzający.', en: 'The entire project — the salon name, treatments, photos, testimonials and contact details — is fictional. The booking form works only on the client side and displays a confirmation message.', ua: 'Увесь проєкт — назва салону, процедури, фотографії, відгуки та контактні дані — вигаданий. Форма бронювання працює лише на стороні клієнта та показує повідомлення підтвердження.' },
  'glow.feat.1.title': { pl: 'Przełączanie języków PL / EN / UA', en: 'PL / EN / UA language switcher', ua: 'Перемикання мов PL / EN / UA' },
  'glow.feat.1.desc': { pl: 'Pełne tłumaczenie interfejsu obsługiwane w czystym JavaScript', en: 'Full interface translation handled with pure JavaScript', ua: 'Повний переклад інтерфейсу на чистому JavaScript' },
  'glow.feat.2.title': { pl: 'Galeria z filtrem i efektem „przed/po”', en: 'Gallery with filters and before/after effect', ua: 'Галерея з фільтром і ефектом «до/після»' },
  'glow.feat.2.desc': { pl: 'Filtrowanie zdjęć zabiegów oraz podgląd efektu przed wizytą', en: 'Treatment photo filtering and before/after previews', ua: 'Фільтрація фотографій процедур і перегляд результату до візиту' },
  'glow.feat.3.title': { pl: 'Rozwijane FAQ (accordion)', en: 'Expandable FAQ (accordion)', ua: 'Розгортуваний FAQ (акордеон)' },
  'glow.feat.3.desc': { pl: 'Najczęstsze pytania z animowanym rozwijaniem odpowiedzi', en: 'Frequently asked questions with animated expanding answers', ua: 'Найчастіші запитання з анімованим розгортанням відповідей' },
  'glow.feat.4.title': { pl: 'Formularz rezerwacji z walidacją', en: 'Validated booking form', ua: 'Форма бронювання з валідацією' },
  'glow.feat.4.desc': { pl: 'Sprawdzanie imienia, telefonu, zabiegu, daty i godziny po stronie klienta', en: 'Client-side validation of name, phone, treatment, date and time', ua: 'Клієнтська перевірка імені, телефону, процедури, дати та часу' },
  'glow.feat.5.title': { pl: 'Glassmorphism i sticky header', en: 'Glassmorphism and sticky header', ua: 'Glassmorphism і sticky header' },
  'glow.feat.5.desc': { pl: 'Nowoczesna estetyka szkła i przyklejony nagłówek podczas scrollowania', en: 'A modern glass aesthetic and sticky header while scrolling', ua: 'Сучасна скляна естетика та закріплений заголовок під час прокручування' },
  'glow.tech.label': { pl: 'Technologie', en: 'Technologies', ua: 'Технології' },
  'glow.tech.title': { pl: 'Stack technologiczny', en: 'Tech stack', ua: 'Технологічний стек' },
  'glow.tech.4.name': { pl: 'Wielojęzyczność (i18n)', en: 'Multilingual support (i18n)', ua: 'Багатомовність (i18n)' },
  'glow.tech.9.name': { pl: 'Brak backendu', en: 'No backend', ua: 'Без backend' },
  'glow.tech.1.desc': { pl: 'Semantyczna struktura sekcji, nawigacji, formularza i stopki w index.html.', en: 'Semantic structure for sections, navigation, form and footer in index.html.', ua: 'Семантична структура секцій, навігації, форми та футера в index.html.' },
  'glow.tech.2.desc': { pl: 'Zmienne CSS, responsywny layout, hover effects i glassmorphism w style.css.', en: 'CSS variables, responsive layout, hover effects and glassmorphism in style.css.', ua: 'CSS-змінні, адаптивний макет, hover-ефекти та glassmorphism у style.css.' },
  'glow.tech.3.desc': { pl: 'Cała logika interaktywności i walidacji w script.js, bez frameworków.', en: 'All interactivity and validation logic in script.js, without frameworks.', ua: 'Уся логіка інтерактивності та валідації в script.js без фреймворків.' },
  'glow.tech.4.desc': { pl: 'Przełączanie i tłumaczenie treści między PL, EN i UA po stronie klienta.', en: 'Client-side switching and translation between PL, EN and UA.', ua: 'Перемикання та переклад контенту між PL, EN і UA на стороні клієнта.' },
  'glow.tech.5.desc': { pl: 'Starannie dobrana typografia budująca premium charakter marki.', en: 'Carefully selected typography that builds the brand’s premium character.', ua: 'Ретельно підібрана типографіка формує преміальний характер бренду.' },
  'glow.tech.6.desc': { pl: 'Zdjęcia salonu i efektów zabiegów pochodzące z zewnętrznej biblioteki.', en: 'Salon and treatment result photos sourced from an external library.', ua: 'Фотографії салону та результатів процедур із зовнішньої бібліотеки.' },
  'glow.tech.7.desc': { pl: 'Osadzona mapa lokalizacji salonu w sekcji stopki.', en: 'An embedded map showing the salon location in the footer section.', ua: 'Вбудована карта розташування салону в секції футера.' },
  'glow.tech.8.desc': { pl: 'Efekty szkła i przyklejony nagłówek jako świadoma decyzja projektowa.', en: 'Glass effects and a sticky header as deliberate design choices.', ua: 'Скляні ефекти та закріплений заголовок як свідомі дизайнерські рішення.' },
  'glow.tech.9.desc': { pl: 'W pełni statyczna strona, gotowa do hostowania bez serwera aplikacyjnego.', en: 'A fully static site ready to host without an application server.', ua: 'Повністю статичний сайт, готовий до хостингу без серверу застосунку.' },
  'glow.arch.label': { pl: 'Architektura', en: 'Architecture', ua: 'Архітектура' },
  'glow.arch.title': { pl: 'Jak zbudowana jest strona', en: 'How the site is built', ua: 'Як побудований сайт' },
  'glow.arch.1.title': { pl: 'Struktura plików', en: 'File structure', ua: 'Структура файлів' },
  'glow.arch.1.desc': { pl: 'Trzy pliki — treść, wygląd i logika — rozdzielone zgodnie z dobrą praktyką separacji odpowiedzialności.', en: 'Three files for content, presentation and logic, separated according to separation-of-concerns best practices.', ua: 'Три файли для контенту, вигляду та логіки, розділені відповідно до принципу поділу відповідальності.' },
  'glow.arch.2.title': { pl: 'System wielojęzyczny', en: 'Multilingual system', ua: 'Багатомовна система' },
  'glow.arch.2.desc': { pl: 'Po załadowaniu strony JavaScript ustawia domyślny język i tłumaczy wszystkie elementy interfejsu na PL, EN lub UA.', en: 'After loading, JavaScript sets the default language and translates all interface elements to PL, EN or UA.', ua: 'Після завантаження JavaScript встановлює мову за замовчуванням і перекладає всі елементи інтерфейсу на PL, EN або UA.' },
  'glow.arch.3.title': { pl: 'Nawigacja i menu mobilne', en: 'Navigation and mobile menu', ua: 'Навігація та мобільне меню' },
  'glow.arch.3.desc': { pl: 'Kliknięcie w zakładkę przewija do sekcji, a na urządzeniach mobilnych otwiera się menu hamburgerowe.', en: 'Clicking a tab scrolls to its section, while mobile devices use a hamburger menu.', ua: 'Натискання вкладки прокручує до секції, а на мобільних пристроях відкривається меню hamburger.' },
  'glow.arch.4.title': { pl: 'Galeria „przed/po”', en: 'Before/after gallery', ua: 'Галерея «до/після»' },
  'glow.arch.4.desc': { pl: 'Filtrowanie zdjęć w galerii oraz podgląd efektu „przed” zabiegiem obsługiwane w czystym JavaScript.', en: 'Gallery photo filtering and before-treatment previews handled with pure JavaScript.', ua: 'Фільтрація фотографій у галереї та перегляд результату «до» процедури на чистому JavaScript.' },
  'glow.arch.5.title': { pl: 'FAQ i animacje scroll', en: 'FAQ and scroll animations', ua: 'FAQ та анімації прокручування' },
  'glow.arch.5.desc': { pl: 'Rozwijane odpowiedzi w sekcji FAQ oraz animacje elementów pojawiających się podczas przewijania strony.', en: 'Expandable FAQ answers and animations for elements appearing while scrolling.', ua: 'Розгортувані відповіді в FAQ та анімації елементів, що з’являються під час прокручування.' },
  'glow.arch.6.title': { pl: 'Formularz rezerwacji', en: 'Booking form', ua: 'Форма бронювання' },
  'glow.arch.6.desc': { pl: 'Walidacja imienia, telefonu, zabiegu, daty i godziny — bez backendu, wyłącznie z komunikatem potwierdzającym.', en: 'Validation of name, phone, treatment, date and time, without a backend and with a confirmation message only.', ua: 'Валідація імені, телефону, процедури, дати та часу без backend із повідомленням підтвердження.' },
  'glow.features.label': { pl: 'Kluczowe cechy', en: 'Key features', ua: 'Ключові риси' },
  'glow.features.title': { pl: 'Co wyróżnia projekt', en: 'What sets the project apart', ua: 'Що вирізняє проєкт' },
  'glow.ctrl.1': { pl: 'Semantyczna struktura sekcji, formularza i stopki', en: 'Semantic structure for sections, form and footer', ua: 'Семантична структура секцій, форми та футера' },
  'glow.ctrl.2': { pl: 'Zmienne CSS, glassmorphism, sticky header', en: 'CSS variables, glassmorphism and sticky header', ua: 'CSS-змінні, glassmorphism і sticky header' },
  'glow.ctrl.3': { pl: 'Wielojęzyczność, filtr galerii, walidacja formularza', en: 'Multilingual support, gallery filter and form validation', ua: 'Багатомовність, фільтр галереї та валідація форми' },
  'glow.ctrl.4': { pl: 'Pełne tłumaczenie interfejsu PL / EN / UA', en: 'Full interface translation in PL / EN / UA', ua: 'Повний переклад інтерфейсу PL / EN / UA' },
  'glow.ctrl.5': { pl: 'Responsywny design — mobile, tablet, desktop', en: 'Responsive design — mobile, tablet, desktop', ua: 'Адаптивний дизайн — мобільні, планшети, комп’ютери' },
  'glow.ctrl.6': { pl: 'Brak backendu — w pełni statyczna strona', en: 'No backend — fully static site', ua: 'Без backend — повністю статичний сайт' },
  'glow.rationale.label': { pl: 'Uzasadnienie wyboru', en: 'Tech rationale', ua: 'Обґрунтування вибору' },
  'glow.rationale.title': { pl: 'Dlaczego te technologie', en: 'Why these technologies', ua: 'Чому саме ці технології' },
  'glow.table.tech': { pl: 'Technologia', en: 'Technology', ua: 'Технологія' },
  'glow.table.use': { pl: 'Zastosowanie', en: 'Use', ua: 'Застосування' },
  'glow.table.why': { pl: 'Powód wyboru', en: 'Why chosen', ua: 'Причина вибору' },
  'glow.table.1': { pl: 'Struktura strony', en: 'Page structure', ua: 'Структура сайту' },
  'glow.table.2': { pl: 'Semantyka, dostępność i SEO bez narzutu frameworka', en: 'Semantics, accessibility and SEO without framework overhead', ua: 'Семантика, доступність і SEO без навантаження фреймворку' },
  'glow.table.3': { pl: 'Stylowanie i layout', en: 'Styling and layout', ua: 'Стилізація та макет' },
  'glow.table.4': { pl: 'Zmienne CSS i glassmorphism bez zewnętrznych bibliotek', en: 'CSS variables and glassmorphism without external libraries', ua: 'CSS-змінні та glassmorphism без сторонніх бібліотек' },
  'glow.table.5': { pl: 'Interaktywność', en: 'Interactivity', ua: 'Інтерактивність' },
  'glow.table.6': { pl: 'i18n, filtr galerii, FAQ i walidacja — bez zależności', en: 'i18n, gallery filter, FAQ and validation without dependencies', ua: 'i18n, фільтр галереї, FAQ і валідація без залежностей' },
  'glow.table.7': { pl: 'Typografia', en: 'Typography', ua: 'Типографіка' },
  'glow.table.8': { pl: 'Szybkie wdrożenie premium fontów bez lokalnych plików', en: 'Quick integration of premium fonts without local files', ua: 'Швидке підключення преміальних шрифтів без локальних файлів' },
  'glow.table.9': { pl: 'Zdjęcia salonu', en: 'Salon photography', ua: 'Фотографії салону' },
  'glow.table.10': { pl: 'Wysokiej jakości grafiki bez konieczności sesji zdjęciowej', en: 'High-quality images without the need for a photo shoot', ua: 'Якісні зображення без необхідності фотосесії' },
  'glow.table.11': { pl: 'Lokalizacja w stopce', en: 'Footer location', ua: 'Локація у футері' },
  'glow.table.12': { pl: 'Gotowa integracja mapy bez własnego API', en: 'Ready-made map integration without a custom API', ua: 'Готова інтеграція карти без власного API' },
  'glow.build.label': { pl: 'Instalacja', en: 'Installation', ua: 'Встановлення' },
  'glow.build.title': { pl: 'Jak uruchomić', en: 'How to run', ua: 'Як запустити' },
  'glow.req.title': { pl: 'Hosting', en: 'Hosting', ua: 'Хостинг' },
  'glow.req.3': { pl: 'Dowolny serwer WWW', en: 'Any web server', ua: 'Будь-який вебсервер' },
  'glow.step.1': { pl: 'Sklonuj repozytorium', en: 'Clone the repository', ua: 'Клонуй репозиторій' },
  'glow.step.2': { pl: 'Otwórz stronę lokalnie', en: 'Open the site locally', ua: 'Відкрий сайт локально' },
  'glow.step.3': { pl: 'Hostuj statycznie (opcjonalnie)', en: 'Host it statically (optional)', ua: 'Розмісти статично (необов’язково)' },
  'glow.meta.label': { pl: 'Metadane', en: 'Metadata', ua: 'Метадані' },
  'glow.meta.title': { pl: 'O projekcie', en: 'About the project', ua: 'Про проєкт' },
  'glow.meta.1': { pl: 'Wersja', en: 'Version', ua: 'Версія' },
  'glow.meta.2': { pl: 'Główny język', en: 'Main language', ua: 'Основна мова' },
  'glow.meta.3': { pl: 'Repozytorium', en: 'Repository', ua: 'Репозиторій' },
  'glow.meta.4': { pl: 'Status', en: 'Status', ua: 'Статус' },
  'glow.meta.5': { pl: 'Charakter', en: 'Type', ua: 'Тип' },
  'glow.meta.status': { pl: 'Statyczny, bez backendu', en: 'Static, no backend', ua: 'Статичний, без backend' },
  'glow.meta.fictional': { pl: 'Projekt fikcyjny', en: 'Fictional project', ua: 'Вигаданий проєкт' },
  'glow.note': { pl: '<em>Uwaga:</em> GLOW Beauty Salon to w całości fikcyjny projekt stworzony wyłącznie w celach portfolio i edukacyjnych. Nazwa salonu, zabiegi, zdjęcia, opinie i dane kontaktowe są wymyślone i nie reprezentują żadnej rzeczywistej firmy ani klienta.', en: '<em>Note:</em> GLOW Beauty Salon is an entirely fictional project created solely for portfolio and educational purposes. The salon name, treatments, photos, testimonials and contact details are invented and do not represent any real business or client.', ua: '<em>Примітка:</em> GLOW Beauty Salon — повністю вигаданий проєкт, створений виключно для портфоліо та навчання. Назва салону, процедури, фотографії, відгуки та контактні дані вигадані й не представляють жодну реальну компанію чи клієнта.' },

  /* ════ APEX BUILD — project detail ════ */
  'apex.category': { pl: 'Web Development · Frontend', en: 'Web Development · Frontend', ua: 'Веброзробка · Frontend' },
  'apex.badge.uni': { pl: 'Studium przypadku', en: 'Case study', ua: 'Кейс-стаді' },
  'apex.tagline': { pl: 'Nowoczesna strona promocyjna (landing page) zbudowana w oparciu o semantyczny HTML5, CSS3 i JavaScript — kompletne studium przypadku pokazujące pełen cykl budowy strony sprzedażowej, bez frameworków, jako projekt portfolio.', en: 'A modern promotional landing page built with semantic HTML5, CSS3 and JavaScript — a complete case study showing the full lifecycle of building a sales page without frameworks, as a portfolio project.', ua: 'Сучасна промоційна лендинг-сторінка на семантичному HTML5, CSS3 і JavaScript — повний кейс, що показує весь цикл створення сторінки продажів без фреймворків як портфоліо-проєкт.' },
  'apex.live': { pl: 'Zobacz na żywo', en: 'View live', ua: 'Переглянути наживо' },
  'apex.stats.structure': { pl: 'Struktura', en: 'Structure', ua: 'Структура' },
  'apex.stats.styling': { pl: 'Styling', en: 'Styling', ua: 'Стилізація' },
  'apex.stats.interactions': { pl: 'Interakcje', en: 'Interactions', ua: 'Взаємодія' },
  'apex.stats.landing': { pl: 'Landing page', en: 'Landing page', ua: 'Landing page' },
  'apex.gallery.label': { pl: 'Screenshoty', en: 'Screenshots', ua: 'Скріншоти' },
  'apex.gallery.title': { pl: 'Strona w akcji', en: 'The site in action', ua: 'Сайт у дії' },
  'apex.overlay.1': { pl: 'Widok główny', en: 'Main view', ua: 'Головний екран' },
  'apex.overlay.2': { pl: 'Sekcja funkcji', en: 'Features section', ua: 'Секція функцій' },
  'apex.overlay.3': { pl: 'Oferta', en: 'Offer', ua: 'Пропозиція' },
  'apex.overlay.4': { pl: 'Opinie klientów', en: 'Client testimonials', ua: 'Відгуки клієнтів' },
  'apex.overlay.5': { pl: 'Call to action', en: 'Call to action', ua: 'Заклик до дії' },
  'apex.overlay.6': { pl: 'Sekcja kontaktowa', en: 'Contact section', ua: 'Контактна секція' },
  'apex.overlay.7': { pl: 'Widok mobilny', en: 'Mobile view', ua: 'Мобільний вигляд' },
  'apex.overlay.8': { pl: 'Responsywny layout', en: 'Responsive layout', ua: 'Адаптивний макет' },
  'apex.overlay.9': { pl: 'Szczegóły interfejsu', en: 'Interface details', ua: 'Деталі інтерфейсу' },
  'apex.overlay.10': { pl: 'Stopka strony', en: 'Page footer', ua: 'Футер сторінки' },
  'apex.goal.label': { pl: 'Cel projektu', en: 'Project goal', ua: 'Мета проєкту' },
  'apex.goal.h2': { pl: 'Kompletny landing page<br/><span class="grad">od pierwszego wrażenia po konwersję</span>', en: 'A complete landing page<br/><span class="grad">from first impression to conversion</span>', ua: 'Повна лендинг-сторінка<br/><span class="grad">від першого враження до конверсії</span>' },
  'apex.goal.p1': { pl: 'Apex Build Landing Page to studium przypadku pokazujące pełen cykl budowy strony promocyjnej — od sekcji hero przez prezentację funkcji i opinie klientów, aż po wezwanie do działania. Projekt powstał wyłącznie w celach portfolio, jako demonstracja umiejętności potrzebnych na stanowisku Frontend Developer.', en: 'Apex Build Landing Page is a case study showing the full lifecycle of building a promotional page — from the hero section through features and customer testimonials to the call to action. The project was created solely for portfolio purposes, demonstrating skills needed for a Frontend Developer role.', ua: 'Apex Build Landing Page — це кейс, що показує повний цикл створення промоційної сторінки: від hero-секції через функції та відгуки клієнтів до заклику до дії. Проєкт створено виключно для портфоліо як демонстрацію навичок Frontend Developer.' },
  'apex.goal.p2': { pl: 'Strona nie została stworzona dla rzeczywistego klienta — treści, dane i opinie mają charakter demonstracyjny, a kod jest czysty, dobrze zorganizowany i gotowy do prezentacji.', en: 'The site was not created for a real client — the content, data and testimonials are demonstrational, while the code is clean, well organized and ready to present.', ua: 'Сайт не створювався для реального клієнта — контент, дані та відгуки мають демонстраційний характер, а код чистий, добре організований і готовий до презентації.' },
  'apex.feat.1.title': { pl: 'Hero Section', en: 'Hero Section', ua: 'Hero Section' },
  'apex.feat.1.desc': { pl: 'Przyciągająca uwagę sekcja wejścia z wyraźnym call-to-action', en: 'An attention-grabbing opening section with a clear call to action', ua: 'Приваблива вступна секція з чітким закликом до дії' },
  'apex.feat.2.title': { pl: 'Features', en: 'Features', ua: 'Features' },
  'apex.feat.2.desc': { pl: 'Prezentacja kluczowych funkcji i zalet oferty', en: 'Presentation of the offer’s key features and benefits', ua: 'Презентація ключових функцій і переваг пропозиції' },
  'apex.feat.3.title': { pl: 'Testimonials', en: 'Testimonials', ua: 'Testimonials' },
  'apex.feat.3.desc': { pl: 'Sekcja opinii i recenzji budująca wiarygodność', en: 'A testimonial section that builds credibility', ua: 'Секція відгуків, що формує довіру' },
  'apex.feat.4.title': { pl: 'Call-to-Action', en: 'Call-to-Action', ua: 'Call-to-Action' },
  'apex.feat.4.desc': { pl: 'Wyraźna zachęta do podjęcia akcji przed stopką', en: 'A clear prompt to take action before the footer', ua: 'Чіткий заклик виконати дію перед футером' },
  'apex.feat.5.title': { pl: 'Footer', en: 'Footer', ua: 'Footer' },
  'apex.feat.5.desc': { pl: 'Stopka z informacjami kontaktowymi i linkami', en: 'A footer with contact information and links', ua: 'Футер із контактною інформацією та посиланнями' },
  'apex.tech.label': { pl: 'Technologie', en: 'Technologies', ua: 'Технології' },
  'apex.tech.title': { pl: 'Stack technologiczny', en: 'Tech stack', ua: 'Технологічний стек' },
  'apex.tech.1.desc': { pl: 'Semantyczna struktura i treść strony — 38.9% repozytorium.', en: 'Semantic page structure and content — 38.9% of the repository.', ua: 'Семантична структура та контент сайту — 38.9% репозиторію.' },
  'apex.tech.2.desc': { pl: 'Stylizacja, layouty i animacje — 35.3% repozytorium, bez frameworków.', en: 'Styling, layouts and animations — 35.3% of the repository, without frameworks.', ua: 'Стилізація, макети й анімації — 35.3% репозиторію, без фреймворків.' },
  'apex.tech.3.desc': { pl: 'Interaktywność i logika kliencka — 25.8% repozytorium.', en: 'Interactivity and client-side logic — 25.8% of the repository.', ua: 'Інтерактивність і клієнтська логіка — 25.8% репозиторію.' },
  'apex.tech.4.desc': { pl: 'Responsywny layout działający na urządzeniach mobilnych i desktopowych.', en: 'A responsive layout working on mobile and desktop devices.', ua: 'Адаптивний макет для мобільних і десктопних пристроїв.' },
  'apex.tech.5.desc': { pl: 'Płynne przejścia i efekty wizualne wzmacniające odbiór strony.', en: 'Smooth transitions and visual effects that enhance the site experience.', ua: 'Плавні переходи та візуальні ефекти, що підсилюють сприйняття сайту.' },
  'apex.tech.6.desc': { pl: 'Płynne przewijanie między sekcjami dla lepszego UX.', en: 'Smooth scrolling between sections for better UX.', ua: 'Плавне прокручування між секціями для кращого UX.' },
  'apex.tech.7.desc': { pl: 'Starannie dobrana typografia budująca nowoczesny charakter marki.', en: 'Carefully selected typography that builds the brand’s modern character.', ua: 'Ретельно підібрана типографіка формує сучасний характер бренду.' },
  'apex.tech.8.desc': { pl: 'Czysta, minimalistyczna wizualizacja jako świadoma decyzja projektowa.', en: 'A clean, minimalist visual language as a deliberate design choice.', ua: 'Чистий мінімалістичний візуальний стиль як свідоме дизайнерське рішення.' },
  'apex.tech.9.desc': { pl: 'Przetestowane w Chrome, Firefox, Safari i Edge.', en: 'Tested in Chrome, Firefox, Safari and Edge.', ua: 'Протестовано в Chrome, Firefox, Safari та Edge.' },
  'apex.arch.label': { pl: 'Architektura', en: 'Architecture', ua: 'Архітектура' },
  'apex.arch.title': { pl: 'Jak zbudowana jest strona', en: 'How the site is built', ua: 'Як побудований сайт' },
  'apex.arch.1.title': { pl: 'Struktura plików', en: 'File structure', ua: 'Структура файлів' },
  'apex.arch.1.desc': { pl: 'Prosty, przejrzysty podział na znacznik strony, style i logikę — łatwy do rozwijania i utrzymania.', en: 'A simple, clear split between markup, styles and logic — easy to extend and maintain.', ua: 'Простий і зрозумілий поділ розмітки, стилів і логіки — легко розширювати та підтримувати.' },
  'apex.arch.2.title': { pl: 'Hero Section', en: 'Hero Section', ua: 'Hero Section' },
  'apex.arch.2.desc': { pl: 'Sekcja wejścia z nagłówkiem, opisem oferty i wyraźnym przyciskiem call-to-action, budująca pierwsze wrażenie.', en: 'An opening section with a headline, offer description and clear call-to-action button that creates the first impression.', ua: 'Вступна секція із заголовком, описом пропозиції та чіткою кнопкою call-to-action формує перше враження.' },
  'apex.arch.3.title': { pl: 'Features', en: 'Features', ua: 'Features' },
  'apex.arch.3.desc': { pl: 'Siatka kart prezentująca kluczowe funkcje i zalety oferty, zbudowana na CSS Grid/Flexbox.', en: 'A grid of cards presenting key features and benefits, built with CSS Grid/Flexbox.', ua: 'Сітка карток із ключовими функціями та перевагами на CSS Grid/Flexbox.' },
  'apex.arch.4.title': { pl: 'Testimonials', en: 'Testimonials', ua: 'Testimonials' },
  'apex.arch.4.desc': { pl: 'Sekcja opinii klientów budująca wiarygodność oferty przed wezwaniem do działania.', en: 'A customer testimonial section that builds offer credibility before the call to action.', ua: 'Секція відгуків клієнтів підвищує довіру до пропозиції перед закликом до дії.' },
  'apex.arch.5.title': { pl: 'Call-to-Action', en: 'Call-to-Action', ua: 'Call-to-Action' },
  'apex.arch.5.desc': { pl: 'Wyróżniona sekcja zachęcająca odwiedzającego do podjęcia konkretnej akcji tuż przed stopką.', en: 'A highlighted section encouraging visitors to take a specific action just before the footer.', ua: 'Виділена секція спонукає відвідувача виконати конкретну дію перед футером.' },
  'apex.arch.6.title': { pl: 'Footer', en: 'Footer', ua: 'Footer' },
  'apex.arch.6.desc': { pl: 'Stopka z danymi kontaktowymi i linkami, spinająca całą strukturę strony.', en: 'A footer with contact details and links that completes the page structure.', ua: 'Футер із контактними даними та посиланнями завершує структуру сайту.' },
  'apex.features.label': { pl: 'Kluczowe cechy', en: 'Key features', ua: 'Ключові риси' },
  'apex.features.title': { pl: 'Co wyróżnia projekt', en: 'What sets the project apart', ua: 'Що вирізняє проєкт' },
  'apex.ctrl.1': { pl: 'Semantyczny markup — dobra praktyka SEO i accessibility', en: 'Semantic markup — SEO and accessibility best practices', ua: 'Семантична розмітка — найкращі практики SEO та доступності' },
  'apex.ctrl.2': { pl: 'Responsywny layout, zero zewnętrznych frameworków CSS', en: 'Responsive layout, no external CSS frameworks', ua: 'Адаптивний макет без сторонніх CSS-фреймворків' },
  'apex.ctrl.3': { pl: 'Interaktywne elementy dla lepszego UX', en: 'Interactive elements for better UX', ua: 'Інтерактивні елементи для кращого UX' },
  'apex.ctrl.4': { pl: 'Responsywny design — mobile, tablet, desktop', en: 'Responsive design — mobile, tablet, desktop', ua: 'Адаптивний дизайн — мобільні, планшети, комп’ютери' },
  'apex.ctrl.5': { pl: 'Płynne animacje CSS i przejścia', en: 'Smooth CSS animations and transitions', ua: 'Плавні CSS-анімації та переходи' },
  'apex.ctrl.6': { pl: 'Kompatybilność z głównymi przeglądarkami', en: 'Compatibility with major browsers', ua: 'Сумісність із основними браузерами' },
  'apex.rationale.label': { pl: 'Uzasadnienie wyboru', en: 'Tech rationale', ua: 'Обґрунтування вибору' },
  'apex.rationale.title': { pl: 'Dlaczego te technologie', en: 'Why these technologies', ua: 'Чому саме ці технології' },
  'apex.table.tech': { pl: 'Technologia', en: 'Technology', ua: 'Технологія' },
  'apex.table.use': { pl: 'Zastosowanie', en: 'Use', ua: 'Застосування' },
  'apex.table.why': { pl: 'Powód wyboru', en: 'Why chosen', ua: 'Причина вибору' },
  'apex.table.1': { pl: 'Struktura strony', en: 'Page structure', ua: 'Структура сайту' },
  'apex.table.2': { pl: 'Semantyka, dostępność, SEO bez narzutu frameworka', en: 'Semantics, accessibility and SEO without framework overhead', ua: 'Семантика, доступність і SEO без навантаження фреймворку' },
  'apex.table.3': { pl: 'Stylowanie i layout', en: 'Styling and layout', ua: 'Стилізація та макет' },
  'apex.table.4': { pl: 'Responsywność i animacje wystarczają dla landing page', en: 'Responsiveness and animations are enough for a landing page', ua: 'Адаптивності й анімацій достатньо для лендинг-сторінки' },
  'apex.table.5': { pl: 'Interaktywność', en: 'Interactivity', ua: 'Інтерактивність' },
  'apex.table.6': { pl: 'Dynamika UI bez zbędnych zależności', en: 'UI dynamics without unnecessary dependencies', ua: 'Динаміка UI без зайвих залежностей' },
  'apex.table.7': { pl: 'Responsywność', en: 'Responsiveness', ua: 'Адаптивність' },
  'apex.table.8': { pl: 'Pełna kontrola nad breakpointami bez frameworka CSS', en: 'Full control over breakpoints without a CSS framework', ua: 'Повний контроль над breakpoint-ами без CSS-фреймворку' },
  'apex.table.9': { pl: 'Typografia', en: 'Typography', ua: 'Типографіка' },
  'apex.table.10': { pl: 'Szybkie wdrożenie nowoczesnych fontów bez lokalnych plików', en: 'Quick integration of modern fonts without local files', ua: 'Швидке підключення сучасних шрифтів без локальних файлів' },
  'apex.table.11': { pl: 'Logika kliencka', en: 'Client-side logic', ua: 'Клієнтська логіка' },
  'apex.table.12': { pl: 'Lekki kod, łatwy do audytu i modyfikacji', en: 'Lightweight code that is easy to audit and modify', ua: 'Легкий код, який просто перевіряти та змінювати' },
  'apex.build.label': { pl: 'Instalacja', en: 'Installation', ua: 'Встановлення' },
  'apex.build.title': { pl: 'Jak uruchomić', en: 'How to run', ua: 'Як запустити' },
  'apex.req.title': { pl: 'Kompatybilność', en: 'Compatibility', ua: 'Сумісність' },
  'apex.req.5': { pl: 'Urządzenia mobilne', en: 'Mobile devices', ua: 'Мобільні пристрої' },
  'apex.step.1': { pl: 'Sklonuj repozytorium', en: 'Clone the repository', ua: 'Клонуй репозиторій' },
  'apex.step.2': { pl: 'Otwórz stronę lokalnie', en: 'Open the site locally', ua: 'Відкрий сайт локально' },
  'apex.step.3': { pl: 'Ciesz się responsywnym landing page’em', en: 'Enjoy the responsive landing page', ua: 'Насолоджуйся адаптивною лендинг-сторінкою' },
  'apex.meta.label': { pl: 'Metadane', en: 'Metadata', ua: 'Метадані' },
  'apex.meta.title': { pl: 'O projekcie', en: 'About the project', ua: 'Про проєкт' },
  'apex.meta.1': { pl: 'Wersja', en: 'Version', ua: 'Версія' },
  'apex.meta.2': { pl: 'Główny język', en: 'Main language', ua: 'Основна мова' },
  'apex.meta.3': { pl: 'Repozytorium', en: 'Repository', ua: 'Репозиторій' },
  'apex.meta.4': { pl: 'Status', en: 'Status', ua: 'Статус' },
  'apex.meta.5': { pl: 'Charakter', en: 'Type', ua: 'Тип' },
  'apex.meta.status': { pl: 'Gotowy do prezentacji', en: 'Ready to present', ua: 'Готовий до презентації' },
  'apex.meta.type': { pl: 'Portfolio / studium przypadku', en: 'Portfolio / case study', ua: 'Портфоліо / кейс-стаді' },
  'apex.note': { pl: '<em>Uwaga:</em> Apex Build Landing Page to projekt portfolio/studium przypadku stworzony wyłącznie w celach edukacyjnych i demonstracyjnych. Nie został stworzony dla rzeczywistego klienta — treści, dane i opinie mają charakter wymyślony, a kod jest czysty, dobrze zorganizowany i gotowy do pokazania potencjalnym pracodawcom.', en: '<em>Note:</em> Apex Build Landing Page is a portfolio case study created solely for educational and demonstration purposes. It was not created for a real client — the content, data and testimonials are fictional, while the code is clean, well organized and ready to show potential employers.', ua: '<em>Примітка:</em> Apex Build Landing Page — портфоліо-кейс, створений виключно для навчання та демонстрації. Проєкт не створювався для реального клієнта: контент, дані й відгуки вигадані, а код чистий, добре організований і готовий для презентації потенційним роботодавцям.' },

  /* ════ LUMINA DENTAL — project detail ════ */
  'lumina.category': { pl: 'Web Development · Frontend', en: 'Web Development · Frontend', ua: 'Веброзробка · Frontend' },
  'lumina.badge.uni': { pl: 'Projekt fikcyjny', en: 'Fictional project', ua: 'Вигаданий проєкт' },
  'lumina.tagline': { pl: 'Nowoczesna, responsywna strona docelowa dla fikcyjnej kliniki stomatologicznej — zbudowana w czystym HTML5, CSS3 i JavaScript, prezentująca profesjonalny, budzący zaufanie wizerunek marki medycznej.', en: 'A modern, responsive landing page for a fictional dental clinic — built in pure HTML5, CSS3 and JavaScript, presenting a professional and trustworthy medical brand.', ua: 'Сучасна адаптивна лендинг-сторінка для вигаданої стоматологічної клініки — створена на чистих HTML5, CSS3 і JavaScript, що представляє професійний і надійний медичний бренд.' },
  'lumina.live': { pl: 'Zobacz na żywo', en: 'View live', ua: 'Переглянути наживо' },
  'lumina.stats.structure': { pl: 'Struktura', en: 'Structure', ua: 'Структура' },
  'lumina.stats.styling': { pl: 'Styling', en: 'Styling', ua: 'Стилізація' },
  'lumina.stats.interactions': { pl: 'Interakcje', en: 'Interactions', ua: 'Взаємодія' },
  'lumina.stats.deployment': { pl: 'Deployment', en: 'Deployment', ua: 'Розгортання' },
  'lumina.gallery.label': { pl: 'Screenshoty', en: 'Screenshots', ua: 'Скріншоти' },
  'lumina.gallery.title': { pl: 'Strona w akcji', en: 'The site in action', ua: 'Сайт у дії' },
  'lumina.overlay.1': { pl: 'Widok główny', en: 'Main view', ua: 'Головний екран' },
  'lumina.overlay.2': { pl: 'Usługi kliniki', en: 'Clinic services', ua: 'Послуги клініки' },
  'lumina.overlay.3': { pl: 'Zespół specjalistów', en: 'Specialist team', ua: 'Команда спеціалістів' },
  'lumina.overlay.4': { pl: 'Opinie pacjentów', en: 'Patient reviews', ua: 'Відгуки пацієнтів' },
  'lumina.overlay.5': { pl: 'O klinice', en: 'About the clinic', ua: 'Про клініку' },
  'lumina.overlay.6': { pl: 'Formularz wizyty', en: 'Appointment form', ua: 'Форма запису' },
  'lumina.overlay.7': { pl: 'Kontakt', en: 'Contact', ua: 'Контакти' },
  'lumina.overlay.8': { pl: 'Stopka strony', en: 'Page footer', ua: 'Футер сторінки' },
  'lumina.goal.label': { pl: 'Cel projektu', en: 'Project goal', ua: 'Мета проєкту' },
  'lumina.goal.h2': { pl: 'Zaufanie i profesjonalizm<br/><span class="grad">wyrażone w interfejsie</span>', en: 'Trust and professionalism<br/><span class="grad">expressed through the interface</span>', ua: 'Довіра та професіоналізм<br/><span class="grad">виражені в інтерфейсі</span>' },
  'lumina.goal.p1': { pl: 'Lumina Dental to responsywna strona typu landing page stworzona dla fikcyjnej kliniki stomatologicznej. Projekt powstał wyłącznie w celach portfolio — jako pokaz umiejętności budowania profesjonalnego, budzącego zaufanie interfejsu medycznego wyłącznie w oparciu o semantyczny HTML5, nowoczesny CSS3 i czysty JavaScript.', en: 'Lumina Dental is a responsive landing page created for a fictional dental clinic. The project was built solely for portfolio purposes, showcasing how to create a professional, trustworthy medical interface using semantic HTML5, modern CSS3 and pure JavaScript.', ua: 'Lumina Dental — це адаптивна лендинг-сторінка для вигаданої стоматологічної клініки. Проєкт створено виключно для портфоліо як приклад побудови професійного, надійного медичного інтерфейсу на семантичному HTML5, сучасному CSS3 і чистому JavaScript.' },
  'lumina.goal.p2': { pl: 'Cały projekt — nazwa kliniki, personel, zdjęcia, opinie pacjentów i dane kontaktowe — jest wymyślony. Strona nie reprezentuje żadnej rzeczywistej placówki medycznej ani klienta.', en: 'The entire project — the clinic name, staff, photos, patient reviews and contact details — is fictional. The site does not represent any real medical facility or client.', ua: 'Увесь проєкт — назва клініки, персонал, фотографії, відгуки пацієнтів і контактні дані — вигаданий. Сайт не представляє жоден реальний медичний заклад чи клієнта.' },
  'lumina.feat.1.title': { pl: 'Profesjonalny, medyczny design', en: 'Professional medical design', ua: 'Професійний медичний дизайн' },
  'lumina.feat.1.desc': { pl: 'Spokojna paleta i klarowny layout budujące zaufanie pacjenta', en: 'A calm palette and clear layout that build patient trust', ua: 'Спокійна палітра та зрозумілий макет, що формують довіру пацієнта' },
  'lumina.feat.2.title': { pl: 'Mobile-first RWD', en: 'Mobile-first RWD', ua: 'Mobile-first RWD' },
  'lumina.feat.2.desc': { pl: 'Pełna responsywność dopasowana do telefonów, tabletów i desktopów', en: 'Fully responsive layout for phones, tablets and desktops', ua: 'Повна адаптивність для телефонів, планшетів і комп’ютерів' },
  'lumina.feat.3.title': { pl: 'Sekcja usług stomatologicznych', en: 'Dental services section', ua: 'Секція стоматологічних послуг' },
  'lumina.feat.3.desc': { pl: 'Przejrzysta prezentacja zabiegów i zakresu opieki kliniki', en: 'Clear presentation of treatments and the clinic’s scope of care', ua: 'Зрозуміла презентація процедур і спектра допомоги клініки' },
  'lumina.feat.4.title': { pl: 'Gładkie animacje CSS', en: 'Smooth CSS animations', ua: 'Плавні CSS-анімації' },
  'lumina.feat.4.desc': { pl: 'Subtelne przejścia i mikrointerakcje budujące spokojny odbiór strony', en: 'Subtle transitions and micro-interactions creating a calm experience', ua: 'Непомітні переходи та мікровзаємодії створюють спокійне сприйняття сайту' },
  'lumina.feat.5.title': { pl: 'Interaktywne elementy JS', en: 'Interactive JS elements', ua: 'Інтерактивні елементи JS' },
  'lumina.feat.5.desc': { pl: 'Menu, formularz umówienia wizyty i inne elementy w czystym JavaScript', en: 'Menu, appointment form and other elements built with pure JavaScript', ua: 'Меню, форма запису та інші елементи на чистому JavaScript' },
  'lumina.tech.label': { pl: 'Technologie', en: 'Technologies', ua: 'Технології' },
  'lumina.tech.title': { pl: 'Stack technologiczny', en: 'Tech stack', ua: 'Технологічний стек' },
  'lumina.tech.1.desc': { pl: 'Semantyczny markup — nagłówki, sekcje, dostępność i SEO. 35.4% repozytorium.', en: 'Semantic markup — headings, sections, accessibility and SEO. 35.4% of the repository.', ua: 'Семантична розмітка — заголовки, секції, доступність і SEO. 35.4% репозиторію.' },
  'lumina.tech.2.desc': { pl: 'Responsywne layouty i animacje — 30.3% repozytorium, bez frameworków.', en: 'Responsive layouts and animations — 30.3% of the repository, without frameworks.', ua: 'Адаптивні макети й анімації — 30.3% репозиторію, без фреймворків.' },
  'lumina.tech.3.desc': { pl: 'Interaktywność interfejsu i logika formularzy — 34.3% repozytorium.', en: 'Interface interactivity and form logic — 34.3% of the repository.', ua: 'Інтерактивність інтерфейсу та логіка форм — 34.3% репозиторію.' },
  'lumina.tech.4.desc': { pl: 'Podejście mobile-first, pełna responsywność bez zewnętrznych bibliotek.', en: 'Mobile-first approach and full responsiveness without external libraries.', ua: 'Підхід mobile-first і повна адаптивність без сторонніх бібліотек.' },
  'lumina.tech.5.desc': { pl: 'Płynne przejścia i mikrointerakcje wzmacniające profesjonalny odbiór strony.', en: 'Smooth transitions and micro-interactions that enhance the professional feel.', ua: 'Плавні переходи та мікровзаємодії, що підсилюють професійне сприйняття.' },
  'lumina.tech.6.desc': { pl: 'Animacje sekcji uruchamiane w momencie wejścia w viewport podczas scrollowania.', en: 'Section animations triggered when elements enter the viewport while scrolling.', ua: 'Анімації секцій запускаються, коли елементи входять у viewport під час прокручування.' },
  'lumina.tech.7.desc': { pl: 'Starannie dobrana typografia budująca profesjonalny charakter marki.', en: 'Carefully selected typography that builds the brand’s professional character.', ua: 'Ретельно підібрана типографіка формує професійний характер бренду.' },
  'lumina.tech.8.desc': { pl: 'Jasna hierarchia treści jako świadoma decyzja projektowa dla branży medycznej.', en: 'Clear content hierarchy as a deliberate design choice for the medical industry.', ua: 'Чітка ієрархія контенту як свідоме дизайнерське рішення для медичної галузі.' },
  'lumina.tech.9.desc': { pl: 'Hosting i automatyczny deployment z gałęzi main.', en: 'Hosting and automatic deployment from the main branch.', ua: 'Хостинг і автоматичне розгортання з гілки main.' },
  'lumina.arch.label': { pl: 'Architektura', en: 'Architecture', ua: 'Архітектура' },
  'lumina.arch.title': { pl: 'Jak zbudowana jest strona', en: 'How the site is built', ua: 'Як побудований сайт' },
  'lumina.arch.1.title': { pl: 'Struktura semantyczna', en: 'Semantic structure', ua: 'Семантична структура' },
  'lumina.arch.1.desc': { pl: 'Strona opiera się na znacznikach semantycznych HTML5, co poprawia dostępność, SEO oraz czytelność kodu.', en: 'The site relies on semantic HTML5 elements, improving accessibility, SEO and code readability.', ua: 'Сайт використовує семантичні елементи HTML5, що покращує доступність, SEO та читабельність коду.' },
  'lumina.arch.2.title': { pl: 'System designu w CSS', en: 'CSS design system', ua: 'Дизайн-система CSS' },
  'lumina.arch.2.desc': { pl: 'Paleta i odstępy zdefiniowane jako zmienne CSS, dzięki czemu spójny, budzący zaufanie motyw jest łatwy do utrzymania i rozwijania.', en: 'The palette and spacing are defined as CSS variables, making the consistent trustworthy theme easy to maintain and extend.', ua: 'Палітра та відступи визначені як CSS-змінні, тому цілісну надійну тему легко підтримувати й розвивати.' },
  'lumina.arch.3.title': { pl: 'Nawigacja mobilna', en: 'Mobile navigation', ua: 'Мобільна навігація' },
  'lumina.arch.3.desc': { pl: 'Menu typu hamburger otwierane i zamykane w czystym JavaScript, bez dodatkowych zależności.', en: 'A hamburger menu opened and closed with pure JavaScript, without additional dependencies.', ua: 'Меню типу hamburger відкривається та закривається на чистому JavaScript без додаткових залежностей.' },
  'lumina.arch.4.title': { pl: 'Usługi i zabiegi', en: 'Services and treatments', ua: 'Послуги та процедури' },
  'lumina.arch.4.desc': { pl: 'Siatka kart usług prezentuje zakres opieki stomatologicznej, zbudowana na CSS Grid.', en: 'A CSS Grid of service cards presents the clinic’s dental care offering.', ua: 'Сітка карток послуг на CSS Grid представляє спектр стоматологічної допомоги.' },
  'lumina.arch.5.title': { pl: 'Opinie pacjentów', en: 'Patient reviews', ua: 'Відгуки пацієнтів' },
  'lumina.arch.5.desc': { pl: 'Sekcja rekomendacji renderowana jako karuzela lub siatka opinii, budująca wiarygodność kliniki w oczach odwiedzających.', en: 'A recommendation section rendered as a carousel or review grid, building credibility in visitors’ eyes.', ua: 'Секція рекомендацій у форматі каруселі або сітки відгуків підвищує довіру до клініки.' },
  'lumina.arch.6.title': { pl: 'Formularz umówienia wizyty (demo)', en: 'Appointment form (demo)', ua: 'Форма запису на прийом (демо)' },
  'lumina.arch.6.desc': { pl: 'Walidacja pól po stronie klienta w JavaScript — formularz ma charakter demonstracyjny i nie wysyła danych na żaden backend.', en: 'Client-side field validation in JavaScript — the form is demonstrational and does not send data to any backend.', ua: 'Клієнтська валідація полів на JavaScript — форма демонстраційна й не надсилає дані на backend.' },
  'lumina.features.label': { pl: 'Kluczowe cechy', en: 'Key features', ua: 'Ключові риси' },
  'lumina.features.title': { pl: 'Co wyróżnia projekt', en: 'What sets the project apart', ua: 'Що вирізняє проєкт' },
  'lumina.ctrl.1': { pl: 'Semantyczny markup zgodny z dobrymi praktykami', en: 'Semantic markup following best practices', ua: 'Семантична розмітка відповідно до найкращих практик' },
  'lumina.ctrl.2': { pl: 'Responsywny layout, zero zewnętrznych frameworków CSS', en: 'Responsive layout, no external CSS frameworks', ua: 'Адаптивний макет без сторонніх CSS-фреймворків' },
  'lumina.ctrl.3': { pl: 'Lekka, zależnościowo niezależna interaktywność', en: 'Lightweight, dependency-free interactivity', ua: 'Легка інтерактивність без залежностей' },
  'lumina.ctrl.4': { pl: 'Responsywny design — mobile, tablet, desktop', en: 'Responsive design — mobile, tablet, desktop', ua: 'Адаптивний дизайн — мобільні, планшети, комп’ютери' },
  'lumina.ctrl.5': { pl: 'Sekcja usług, zespołu i opinii pacjentów', en: 'Services, team and patient reviews sections', ua: 'Секції послуг, команди та відгуків пацієнтів' },
  'lumina.ctrl.6': { pl: 'Formularz umówienia wizyty (demo)', en: 'Appointment form (demo)', ua: 'Форма запису на прийом (демо)' },
  'lumina.rationale.label': { pl: 'Uzasadnienie wyboru', en: 'Tech rationale', ua: 'Обґрунтування вибору' },
  'lumina.rationale.title': { pl: 'Dlaczego te technologie', en: 'Why these technologies', ua: 'Чому саме ці технології' },
  'lumina.table.tech': { pl: 'Technologia', en: 'Technology', ua: 'Технологія' },
  'lumina.table.use': { pl: 'Zastosowanie', en: 'Use', ua: 'Застосування' },
  'lumina.table.why': { pl: 'Powód wyboru', en: 'Why chosen', ua: 'Причина вибору' },
  'lumina.table.1': { pl: 'Struktura strony', en: 'Page structure', ua: 'Структура сайту' },
  'lumina.table.2': { pl: 'Semantyka, dostępność, SEO bez narzutu frameworka', en: 'Semantics, accessibility and SEO without framework overhead', ua: 'Семантика, доступність і SEO без навантаження фреймворку' },
  'lumina.table.3': { pl: 'Stylowanie i layout', en: 'Styling and layout', ua: 'Стилізація та макет' },
  'lumina.table.4': { pl: 'Responsywność i zmienne CSS wystarczają dla landing page', en: 'Responsiveness and CSS variables are enough for a landing page', ua: 'Адаптивності та CSS-змінних достатньо для лендинг-сторінки' },
  'lumina.table.5': { pl: 'Interaktywność', en: 'Interactivity', ua: 'Інтерактивність' },
  'lumina.table.6': { pl: 'Menu mobilne, lightbox, walidacja — bez zbędnych zależności', en: 'Mobile menu, lightbox and validation without unnecessary dependencies', ua: 'Мобільне меню, lightbox і валідація без зайвих залежностей' },
  'lumina.table.7': { pl: 'Responsywność', en: 'Responsiveness', ua: 'Адаптивність' },
  'lumina.table.8': { pl: 'Pełna kontrola nad breakpointami bez frameworka CSS', en: 'Full control over breakpoints without a CSS framework', ua: 'Повний контроль над breakpoint-ами без CSS-фреймворку' },
  'lumina.table.9': { pl: 'Typografia', en: 'Typography', ua: 'Типографіка' },
  'lumina.table.10': { pl: 'Szybkie wdrożenie profesjonalnych fontów bez lokalnych plików', en: 'Quick integration of professional fonts without local files', ua: 'Швидке підключення професійних шрифтів без локальних файлів' },
  'lumina.table.11': { pl: 'Hosting / deployment', en: 'Hosting / deployment', ua: 'Хостинг / розгортання' },
  'lumina.table.12': { pl: 'Automatyczny deployment z main, darmowy SSL i CDN', en: 'Automatic deployment from main, free SSL and CDN', ua: 'Автоматичне розгортання з main, безкоштовні SSL і CDN' },
  'lumina.build.label': { pl: 'Instalacja', en: 'Installation', ua: 'Встановлення' },
  'lumina.build.title': { pl: 'Jak uruchomić', en: 'How to run', ua: 'Як запустити' },
  'lumina.req.title': { pl: 'Wymagania', en: 'Requirements', ua: 'Вимоги' },
  'lumina.req.1': { pl: 'Przeglądarka internetowa', en: 'Web browser', ua: 'Веббраузер' },
  'lumina.req.2': { pl: 'Live Server (opcjonalnie)', en: 'Live Server (optional)', ua: 'Live Server (необов’язково)' },
  'lumina.step.1': { pl: 'Sklonuj repozytorium', en: 'Clone the repository', ua: 'Клонуй репозиторій' },
  'lumina.step.2': { pl: 'Otwórz stronę lokalnie', en: 'Open the site locally', ua: 'Відкрий сайт локально' },
  'lumina.step.3': { pl: 'Wdrożenie (opcjonalnie)', en: 'Deployment (optional)', ua: 'Розгортання (необов’язково)' },
  'lumina.meta.label': { pl: 'Metadane', en: 'Metadata', ua: 'Метадані' },
  'lumina.meta.title': { pl: 'O projekcie', en: 'About the project', ua: 'Про проєкт' },
  'lumina.meta.1': { pl: 'Wersja', en: 'Version', ua: 'Версія' },
  'lumina.meta.2': { pl: 'Główny język', en: 'Main language', ua: 'Основна мова' },
  'lumina.meta.3': { pl: 'Repozytorium', en: 'Repository', ua: 'Репозиторій' },
  'lumina.meta.4': { pl: 'Status', en: 'Status', ua: 'Статус' },
  'lumina.meta.5': { pl: 'Charakter', en: 'Type', ua: 'Тип' },
  'lumina.meta.fictional': { pl: 'Projekt fikcyjny', en: 'Fictional project', ua: 'Вигаданий проєкт' },
  'lumina.note': { pl: '<em>Uwaga:</em> Lumina Dental to w całości fikcyjny projekt demonstracyjny stworzony wyłącznie w celach portfolio i edukacyjnych. Klient, teksty, grafiki, personel oraz dane kontaktowe są wymyślone i nie reprezentują żadnej rzeczywistej kliniki stomatologicznej ani pacjenta.', en: '<em>Note:</em> Lumina Dental is an entirely fictional demonstration project created solely for portfolio and educational purposes. The client, text, graphics, staff and contact details are invented and do not represent any real dental clinic or patient.', ua: '<em>Примітка:</em> Lumina Dental — повністю вигаданий демонстраційний проєкт, створений виключно для портфоліо та навчання. Клієнт, тексти, графіка, персонал і контактні дані вигадані та не представляють жодну реальну стоматологічну клініку чи пацієнта.' },

  /* ════ BARBER CRAFT — project detail ════ */
  'barber.category': { pl: 'Web Development · Frontend', en: 'Web Development · Frontend', ua: 'Веброзробка · Frontend' },
  'barber.badge.uni': { pl: 'Projekt fikcyjny', en: 'Fictional project', ua: 'Вигаданий проєкт' },
  'barber.tagline': { pl: 'Premium, ciemna strona typu landing page dla fikcyjnego salonu fryzjerskiego — zbudowana w czystym HTML5, CSS3 i JavaScript, bez frameworków, jako demonstracja nowoczesnego, responsywnego frontendu i dbałości o detal wizualny.', en: 'A premium dark landing page for a fictional barbershop — built in pure HTML5, CSS3 and JavaScript without frameworks, demonstrating modern responsive frontend development and attention to visual detail.', ua: 'Преміальна темна лендинг-сторінка для вигаданого барбершопу — створена на чистих HTML5, CSS3 і JavaScript без фреймворків як демонстрація сучасного адаптивного frontend та уваги до візуальних деталей.' },
  'barber.live': { pl: 'Zobacz na żywo', en: 'View live', ua: 'Переглянути наживо' },
  'barber.stats.structure': { pl: 'Struktura', en: 'Structure', ua: 'Структура' },
  'barber.stats.styling': { pl: 'Styling', en: 'Styling', ua: 'Стилізація' },
  'barber.stats.interactions': { pl: 'Interakcje', en: 'Interactions', ua: 'Взаємодія' },
  'barber.stats.deployment': { pl: 'Deployment', en: 'Deployment', ua: 'Розгортання' },
  'barber.gallery.label': { pl: 'Screenshoty', en: 'Screenshots', ua: 'Скріншоти' },
  'barber.gallery.title': { pl: 'Strona w akcji', en: 'The site in action', ua: 'Сайт у дії' },
  'barber.overlay.1': { pl: 'Widok główny', en: 'Main view', ua: 'Головний екран' },
  'barber.overlay.2': { pl: 'Sekcja usług', en: 'Services section', ua: 'Секція послуг' },
  'barber.overlay.3': { pl: 'Cennik', en: 'Price list', ua: 'Прайс-лист' },
  'barber.overlay.4': { pl: 'Portfolio prac', en: 'Work portfolio', ua: 'Портфоліо робіт' },
  'barber.overlay.5': { pl: 'Opinie klientów', en: 'Client reviews', ua: 'Відгуки клієнтів' },
  'barber.overlay.6': { pl: 'Formularz kontaktowy', en: 'Contact form', ua: 'Контактна форма' },
  'barber.overlay.7': { pl: 'Stopka strony', en: 'Page footer', ua: 'Футер сторінки' },
  'barber.goal.h2': { pl: 'Premium doświadczenie<br/><span class="grad">zaprojektowane w kodzie</span>', en: 'A premium experience<br/><span class="grad">designed in code</span>', ua: 'Преміальний досвід<br/><span class="grad">створений у коді</span>' },
  'barber.goal.p1': { pl: 'Barber Craft Landing to nowoczesna, ciemna strona typu landing page stworzona dla fikcyjnego salonu fryzjerskiego. Projekt powstał wyłącznie w celach edukacyjnych i portfolio — jako pokaz umiejętności budowania premium interfejsu wyłącznie w oparciu o semantyczny HTML5, nowoczesny CSS3 i lekki, zależnościowo niezależny JavaScript.', en: 'Barber Craft Landing is a modern dark landing page created for a fictional barbershop. The project was built solely for educational and portfolio purposes, showcasing how to create a premium interface using semantic HTML5, modern CSS3 and lightweight dependency-free JavaScript.', ua: 'Barber Craft Landing — це сучасна темна лендинг-сторінка для вигаданого барбершопу. Проєкт створено виключно для навчання та портфоліо як приклад побудови преміального інтерфейсу на семантичному HTML5, сучасному CSS3 і легкому JavaScript без залежностей.' },
  'barber.goal.p2': { pl: 'Cały projekt — nazwa salonu, zdjęcia, recenzje, cennik i dane kontaktowe — jest wymyślony. Strona nie reprezentuje żadnego rzeczywistego biznesu ani klienta.', en: 'The entire project — the salon name, photos, reviews, price list and contact details — is fictional. The site does not represent any real business or client.', ua: 'Увесь проєкт — назва салону, фотографії, відгуки, прайс і контактні дані — вигаданий. Сайт не представляє жоден реальний бізнес чи клієнта.' },
  'barber.feat.1.title': { pl: 'Premium, ciemny design', en: 'Premium dark design', ua: 'Преміальний темний дизайн' },
  'barber.feat.1.desc': { pl: 'Głęboka czerń i mosiężny akcent budujące klimat butikowego salonu', en: 'Deep black and brass accents creating a boutique barbershop atmosphere', ua: 'Глибокий чорний і латунні акценти створюють атмосферу бутикового салону' },
  'barber.feat.2.title': { pl: 'Pełna responsywność (RWD)', en: 'Fully responsive (RWD)', ua: 'Повна адаптивність (RWD)' },
  'barber.feat.2.desc': { pl: 'Mobile-first layout dopasowany do telefonów, tabletów i desktopów', en: 'Mobile-first layout adapted for phones, tablets and desktops', ua: 'Mobile-first макет для телефонів, планшетів і комп’ютерів' },
  'barber.feat.3.title': { pl: 'Sekcja usług i cennika', en: 'Services and price list', ua: 'Послуги та прайс-лист' },
  'barber.feat.3.desc': { pl: 'Przejrzysta prezentacja oferty fryzjerskiej wraz z cenami', en: 'Clear presentation of the barbershop offer with prices', ua: 'Зрозуміла презентація переліку послуг із цінами' },
  'barber.feat.4.title': { pl: 'Portfolio prac', en: 'Work portfolio', ua: 'Портфоліо робіт' },
  'barber.feat.4.desc': { pl: 'Galeria realizacji z lightboxem, analogicznie jak w tym projekcie', en: 'A lightbox gallery of work, similar to the one on this project page', ua: 'Галерея робіт із lightbox, як на цій сторінці проєкту' },
  'barber.feat.5.title': { pl: 'Formularz kontaktowy (demo)', en: 'Contact form (demo)', ua: 'Контактна форма (демо)' },
  'barber.feat.5.desc': { pl: 'Walidacja po stronie klienta w czystym JavaScript, bez backendu', en: 'Client-side validation in pure JavaScript, without a backend', ua: 'Клієнтська валідація на чистому JavaScript без backend' },
  'barber.tech.label': { pl: 'Technologie', en: 'Technologies', ua: 'Технології' },
  'barber.tech.title': { pl: 'Stack technologiczny', en: 'Tech stack', ua: 'Технологічний стек' },
  'barber.tech.1.desc': { pl: 'Semantyczny markup — nagłówki, sekcje, dostępność i SEO. 48.5% repozytorium.', en: 'Semantic markup — headings, sections, accessibility and SEO. 48.5% of the repository.', ua: 'Семантична розмітка — заголовки, секції, доступність і SEO. 48.5% репозиторію.' },
  'barber.tech.2.desc': { pl: 'Flexbox, Grid, zmienne CSS i animacje — 43.8% repozytorium, bez frameworków.', en: 'Flexbox, Grid, CSS variables and animations — 43.8% of the repository, without frameworks.', ua: 'Flexbox, Grid, CSS-змінні та анімації — 43.8% репозиторію, без фреймворків.' },
  'barber.tech.3.desc': { pl: 'Menu mobilne, lightbox galerii i walidacja formularza — 7.7% repozytorium.', en: 'Mobile menu, gallery lightbox and form validation — 7.7% of the repository.', ua: 'Мобільне меню, lightbox галереї та валідація форми — 7.7% репозиторію.' },
  'barber.tech.4.desc': { pl: 'Podejście mobile-first, pełna responsywność bez zewnętrznych bibliotek.', en: 'Mobile-first approach and full responsiveness without external libraries.', ua: 'Підхід mobile-first і повна адаптивність без сторонніх бібліотек.' },
  'barber.tech.5.desc': { pl: 'Płynne przejścia i mikrointerakcje wzmacniające premium odbiór strony.', en: 'Smooth transitions and micro-interactions that enhance the premium feel.', ua: 'Плавні переходи та мікровзаємодії, що підсилюють преміальне сприйняття.' },
  'barber.tech.6.desc': { pl: 'Animacje sekcji uruchamiane w momencie wejścia w viewport podczas scrollowania.', en: 'Section animations triggered when elements enter the viewport while scrolling.', ua: 'Анімації секцій запускаються, коли елементи входять у viewport під час прокручування.' },
  'barber.tech.7.desc': { pl: 'Starannie dobrana typografia budująca premium charakter marki.', en: 'Carefully selected typography that builds the brand’s premium character.', ua: 'Ретельно підібрана типографіка формує преміальний характер бренду.' },
  'barber.tech.8.desc': { pl: 'Ciemny motyw jako świadoma decyzja projektowa dla grupy docelowej.', en: 'A dark theme as a deliberate design choice for the target audience.', ua: 'Темна тема як свідоме дизайнерське рішення для цільової аудиторії.' },
  'barber.tech.9.desc': { pl: 'Hosting i automatyczny deployment z gałęzi main.', en: 'Hosting and automatic deployment from the main branch.', ua: 'Хостинг і автоматичне розгортання з гілки main.' },
  'barber.arch.label': { pl: 'Architektura', en: 'Architecture', ua: 'Архітектура' },
  'barber.arch.title': { pl: 'Jak zbudowana jest strona', en: 'How the site is built', ua: 'Як побудований сайт' },
  'barber.arch.1.title': { pl: 'Struktura semantyczna', en: 'Semantic structure', ua: 'Семантична структура' },
  'barber.arch.1.desc': { pl: 'Strona opiera się na znacznikach semantycznych HTML5, co poprawia dostępność, SEO oraz czytelność kodu.', en: 'The site relies on semantic HTML5 elements, improving accessibility, SEO and code readability.', ua: 'Сайт використовує семантичні елементи HTML5, що покращує доступність, SEO та читабельність коду.' },
  'barber.arch.2.title': { pl: 'System designu w CSS', en: 'CSS design system', ua: 'Дизайн-система CSS' },
  'barber.arch.2.desc': { pl: 'Paleta i odstępy zdefiniowane jako zmienne CSS, dzięki czemu spójny, premium motyw jest łatwy do utrzymania i rozwijania.', en: 'The palette and spacing are defined as CSS variables, making the consistent premium theme easy to maintain and extend.', ua: 'Палітра та відступи визначені як CSS-змінні, тому цілісну преміальну тему легко підтримувати й розвивати.' },
  'barber.arch.3.title': { pl: 'Nawigacja mobilna', en: 'Mobile navigation', ua: 'Мобільна навігація' },
  'barber.arch.3.desc': { pl: 'Menu typu hamburger otwierane i zamykane w czystym JavaScript, bez dodatkowych zależności.', en: 'A hamburger menu opened and closed with pure JavaScript, without additional dependencies.', ua: 'Меню типу hamburger відкривається та закривається на чистому JavaScript без додаткових залежностей.' },
  'barber.arch.4.title': { pl: 'Usługi i cennik', en: 'Services and pricing', ua: 'Послуги та ціни' },
  'barber.arch.4.desc': { pl: 'Siatka kart usług prezentuje ofertę salonu wraz z cenami, zbudowana na CSS Grid.', en: 'A CSS Grid of service cards presents the barbershop offer together with prices.', ua: 'Сітка карток послуг на CSS Grid представляє пропозицію салону разом із цінами.' },
  'barber.arch.5.title': { pl: 'Galeria z lightboxem', en: 'Lightbox gallery', ua: 'Галерея з lightbox' },
  'barber.arch.5.desc': { pl: 'Portfolio prac renderowane jest jako klikalna galeria z pełnoekranowym podglądem — dokładnie tak, jak w sekcji screenshotów tej strony.', en: 'The work portfolio is rendered as a clickable gallery with a fullscreen preview, just like the screenshots section on this page.', ua: 'Портфоліо робіт представлено як клікабельну галерею з повноекранним переглядом, як у секції скріншотів цієї сторінки.' },
  'barber.arch.6.title': { pl: 'Formularz kontaktowy (demo)', en: 'Contact form (demo)', ua: 'Контактна форма (демо)' },
  'barber.arch.6.desc': { pl: 'Walidacja pól po stronie klienta w JavaScript — formularz ma charakter demonstracyjny i nie wysyła danych na żaden backend.', en: 'Client-side field validation in JavaScript — the form is demonstrational and does not send data to any backend.', ua: 'Клієнтська валідація полів на JavaScript — форма демонстраційна й не надсилає дані на backend.' },
  'barber.features.label': { pl: 'Kluczowe cechy', en: 'Key features', ua: 'Ключові риси' },
  'barber.features.title': { pl: 'Co wyróżnia projekt', en: 'What sets the project apart', ua: 'Що вирізняє проєкт' },
  'barber.ctrl.1': { pl: 'Semantyczny markup zgodny z dobrymi praktykami', en: 'Semantic markup following best practices', ua: 'Семантична розмітка відповідно до найкращих практик' },
  'barber.ctrl.2': { pl: 'Flexbox & Grid, zero zewnętrznych frameworków CSS', en: 'Flexbox & Grid, no external CSS frameworks', ua: 'Flexbox і Grid, без сторонніх CSS-фреймворків' },
  'barber.ctrl.3': { pl: 'Lekka, zależnościowo niezależna interaktywność', en: 'Lightweight, dependency-free interactivity', ua: 'Легка інтерактивність без залежностей' },
  'barber.ctrl.4': { pl: 'Responsywny design — mobile, tablet, desktop', en: 'Responsive design — mobile, tablet, desktop', ua: 'Адаптивний дизайн — мобільні, планшети, комп’ютери' },
  'barber.ctrl.5': { pl: 'Premium, ciemny motyw dopasowany do branży', en: 'Premium dark theme tailored to the industry', ua: 'Преміальна темна тема, адаптована до галузі' },
  'barber.ctrl.6': { pl: 'Sekcja usług, portfolio i formularz kontaktowy', en: 'Services, portfolio and contact form sections', ua: 'Секції послуг, портфоліо та контактної форми' },
  'barber.rationale.label': { pl: 'Uzasadnienie wyboru', en: 'Tech rationale', ua: 'Обґрунтування вибору' },
  'barber.rationale.title': { pl: 'Dlaczego te technologie', en: 'Why these technologies', ua: 'Чому саме ці технології' },
  'barber.table.tech': { pl: 'Technologia', en: 'Technology', ua: 'Технологія' },
  'barber.table.use': { pl: 'Zastosowanie', en: 'Use', ua: 'Застосування' },
  'barber.table.why': { pl: 'Powód wyboru', en: 'Why chosen', ua: 'Причина вибору' },
  'barber.table.1': { pl: 'Struktura strony', en: 'Page structure', ua: 'Структура сайту' },
  'barber.table.2': { pl: 'Semantyka, dostępność, SEO bez narzutu frameworka', en: 'Semantics, accessibility and SEO without framework overhead', ua: 'Семантика, доступність і SEO без навантаження фреймворку' },
  'barber.table.3': { pl: 'Stylowanie i layout', en: 'Styling and layout', ua: 'Стилізація та макет' },
  'barber.table.4': { pl: 'Flexbox/Grid i zmienne CSS wystarczają dla landing page', en: 'Flexbox/Grid and CSS variables are enough for a landing page', ua: 'Flexbox/Grid і CSS-змінних достатньо для лендинг-сторінки' },
  'barber.table.5': { pl: 'Interaktywność', en: 'Interactivity', ua: 'Інтерактивність' },
  'barber.table.6': { pl: 'Menu mobilne, lightbox, walidacja — bez zbędnych zależności', en: 'Mobile menu, lightbox and validation without unnecessary dependencies', ua: 'Мобільне меню, lightbox і валідація без зайвих залежностей' },
  'barber.table.7': { pl: 'Responsywność', en: 'Responsiveness', ua: 'Адаптивність' },
  'barber.table.8': { pl: 'Pełna kontrola nad breakpointami bez frameworka CSS', en: 'Full control over breakpoints without a CSS framework', ua: 'Повний контроль над breakpoint-ами без CSS-фреймворку' },
  'barber.table.9': { pl: 'Typografia', en: 'Typography', ua: 'Типографіка' },
  'barber.table.10': { pl: 'Szybkie wdrożenie premium fontów bez lokalnych plików', en: 'Quick integration of premium fonts without local files', ua: 'Швидке підключення преміальних шрифтів без локальних файлів' },
  'barber.table.11': { pl: 'Hosting / deployment', en: 'Hosting / deployment', ua: 'Хостинг / розгортання' },
  'barber.table.12': { pl: 'Automatyczny deployment z main, darmowy SSL i CDN', en: 'Automatic deployment from main, free SSL and CDN', ua: 'Автоматичне розгортання з main, безкоштовні SSL і CDN' },
  'barber.build.label': { pl: 'Instalacja', en: 'Installation', ua: 'Встановлення' },
  'barber.build.title': { pl: 'Jak uruchomić', en: 'How to run', ua: 'Як запустити' },
  'barber.req.title': { pl: 'Wymagania', en: 'Requirements', ua: 'Вимоги' },
  'barber.req.1': { pl: 'Przeglądarka internetowa', en: 'Web browser', ua: 'Веббраузер' },
  'barber.req.2': { pl: 'Live Server (opcjonalnie)', en: 'Live Server (optional)', ua: 'Live Server (необов’язково)' },
  'barber.step.1': { pl: 'Sklonuj repozytorium', en: 'Clone the repository', ua: 'Клонуй репозиторій' },
  'barber.step.2': { pl: 'Otwórz stronę lokalnie', en: 'Open the site locally', ua: 'Відкрий сайт локально' },
  'barber.step.3': { pl: 'Wdrożenie (opcjonalnie)', en: 'Deployment (optional)', ua: 'Розгортання (необов’язково)' },
  'barber.meta.label': { pl: 'Metadane', en: 'Metadata', ua: 'Метадані' },
  'barber.meta.title': { pl: 'O projekcie', en: 'About the project', ua: 'Про проєкт' },
  'barber.meta.1': { pl: 'Wersja', en: 'Version', ua: 'Версія' },
  'barber.meta.2': { pl: 'Główny język', en: 'Main language', ua: 'Основна мова' },
  'barber.meta.3': { pl: 'Repozytorium', en: 'Repository', ua: 'Репозиторій' },
  'barber.meta.4': { pl: 'Status', en: 'Status', ua: 'Статус' },
  'barber.meta.5': { pl: 'Charakter', en: 'Type', ua: 'Тип' },
  'barber.meta.private': { pl: 'Prywatne', en: 'Private', ua: 'Приватний' },
  'barber.meta.fictional': { pl: 'Projekt fikcyjny', en: 'Fictional project', ua: 'Вигаданий проєкт' },
  'barber.note': { pl: '<em>Uwaga:</em> Barber Craft Landing to w całości fikcyjny projekt stworzony wyłącznie w celach edukacyjnych i portfolio. Wszystkie dane, nazwy, zdjęcia, recenzje i informacje kontaktowe są wymyślone i nie reprezentują żadnego rzeczywistego salonu fryzjerskiego ani klienta.', en: '<em>Note:</em> Barber Craft Landing is an entirely fictional project created solely for educational and portfolio purposes. All data, names, photos, reviews and contact information are invented and do not represent any real barbershop or client.', ua: '<em>Примітка:</em> Barber Craft Landing — повністю вигаданий проєкт, створений виключно для навчання та портфоліо. Усі дані, назви, фотографії, відгуки й контактна інформація вигадані та не представляють жоден реальний барбершоп чи клієнта.' },

    /* ════ SHARED — project detail pages ════ */
    'proj.back':          { pl: 'Wróć do projektów',   en: 'Back to projects',   ua: 'Повернутися до проєктів' },
    'proj.screenshots':   { pl: 'Screenshots',          en: 'Screenshots',        ua: 'Скриншоти' },
    'proj.gallery.title': { pl: 'w akcji',              en: 'in action',          ua: 'у дії' },
    'proj.all':           { pl: 'Wszystkie projekty',   en: 'All projects',       ua: 'Усі проєкти' },
    'proj.github':        { pl: 'GitHub',               en: 'GitHub',             ua: 'GitHub' },
    'proj.live':          { pl: 'Zobacz na żywo',       en: 'View live',          ua: 'Переглянути наживо' },
    'proj.tech.label':    { pl: 'Technologie',          en: 'Technologies',       ua: 'Технології' },
    'proj.tech.title':    { pl: 'Stack technologiczny', en: 'Tech stack',         ua: 'Технологічний стек' },
    'proj.arch.label':    { pl: 'Architektura',         en: 'Architecture',       ua: 'Архітектура' },
    'proj.func.label':    { pl: 'Funkcjonalności',      en: 'Features',           ua: 'Функціональність' },
    'proj.howworks':      { pl: 'Jak to działa',        en: 'How it works',       ua: 'Як це працює' },
    'proj.install.label': { pl: 'Instalacja',           en: 'Installation',       ua: 'Встановлення' },
    'proj.install.title': { pl: 'Jak uruchomić',        en: 'How to run',         ua: 'Як запустити' },
    'proj.author.label':  { pl: 'Autor',                en: 'Author',             ua: 'Автор' },
    'proj.team.label':    { pl: 'Zespół',               en: 'Team',               ua: 'Команда' },
    'proj.individual':    { pl: 'Projekt indywidualny', en: 'Individual project', ua: 'Індивідуальний проєкт' },
    'proj.req.title':     { pl: 'Wymagania',            en: 'Requirements',       ua: 'Вимоги' },
    'proj.goal.label':    { pl: 'Cel projektu',         en: 'Project goal',       ua: 'Мета проєкту' },
    'proj.features.label':{ pl: 'Kluczowe cechy',       en: 'Key features',       ua: 'Ключові риси' },
    'proj.features.title':{ pl: 'Co wyróżnia projekt',  en: 'What sets it apart', ua: 'Що вирізняє проєкт' },
    'proj.rationale.label':{ pl: 'Uzasadnienie wyboru', en: 'Tech rationale',     ua: 'Обґрунтування вибору' },
    'proj.rationale.title':{ pl: 'Dlaczego te technologie', en: 'Why these technologies', ua: 'Чому саме ці технології' },
    'proj.meta.label':    { pl: 'Metadane',             en: 'Metadata',           ua: 'Метадані' },
    'proj.about':         { pl: 'O projekcie',          en: 'About the project',  ua: 'Про проєкт' },
    'proj.table.tech':    { pl: 'Technologia',          en: 'Technology',         ua: 'Технологія' },
    'proj.table.use':     { pl: 'Zastosowanie',         en: 'Use',                ua: 'Застосування' },
    'proj.table.why':     { pl: 'Powód wyboru',         en: 'Why chosen',         ua: 'Причина вибору' },
    'proj.live.demo':     { pl: 'Live demo',            en: 'Live demo',          ua: 'Live демо' },
    'proj.routes.label':  { pl: 'Trasy aplikacji',      en: 'App routes',         ua: 'Маршрути застосунку' },
    'proj.routing':       { pl: 'Routing',              en: 'Routing',            ua: 'Маршрутизація' },
    'proj.scope.label':   { pl: 'Zakres prac',          en: 'Scope of work',      ua: 'Обсяг робіт' },
    'proj.delivered':     { pl: 'Co zostało dostarczone', en: 'What was delivered', ua: 'Що було реалізовано' },
    'proj.controls.label':{ pl: 'Sterowanie',           en: 'Controls',           ua: 'Керування' },
    'proj.controls.kbd':  { pl: 'Klawiatura',           en: 'Keyboard',           ua: 'Клавіатура' },
    'proj.controls.kbdmouse': { pl: 'Klawiatura i mysz', en: 'Keyboard & mouse',  ua: 'Клавіатура та миша' },
    'proj.screens.label': { pl: 'Ekrany',               en: 'Screens',            ua: 'Екрани' },

    /* ════ QUIZ APP ════ */
    'quiz.category':        { pl: 'Mobile Development · React Native · Education', en: 'Mobile Development · React Native · Education', ua: 'Мобільна розробка · React Native · Освіта' },
    'quiz.badge.uni':       { pl: 'Projekt własny', en: 'Personal project', ua: 'Власний проєкт' },
    'quiz.tagline':         { pl: 'Mobilna aplikacja edukacyjna do rozwiązywania testów wielokrotnego wyboru — timer na każde pytanie, ranking wyników, tryb offline z SQLite i synchronizacja z REST API. React Native 0.82, TypeScript 91%.',
                              en: 'Mobile educational app for solving multiple-choice quizzes — per-question timer, score ranking, offline mode with SQLite and REST API sync. React Native 0.82, TypeScript 91%.',
                              ua: 'Мобільний освітній застосунок для проходження тестів із вибором відповіді — таймер на кожне питання, рейтинг результатів, офлайн-режим із SQLite та синхронізація з REST API. React Native 0.82, TypeScript 91%.' },
    'quiz.gallery.label':   { pl: 'Screenshoty', en: 'Screenshots', ua: 'Скриншоти' },
    'quiz.gallery.title':   { pl: 'Aplikacja w akcji', en: 'App in action', ua: 'Застосунок у дії' },
    'quiz.overlay.1':       { pl: 'Lista testów', en: 'Tests list', ua: 'Список тестів' },
    'quiz.overlay.2':       { pl: 'Quiz z timerem', en: 'Timer quiz', ua: 'Тест із таймером' },
    'quiz.overlay.3':       { pl: 'Wyniki', en: 'Results', ua: 'Результати' },
    'quiz.lightbox.1':       { pl: 'HomeScreen — lista dostępnych testów z tagami', en: 'HomeScreen — list of available quizzes with tags', ua: 'HomeScreen — список доступних тестів із тегами' },
    'quiz.lightbox.2':       { pl: 'QuizScreen — pytanie z 4 odpowiedziami, timer i progress bar', en: 'QuizScreen — question with 4 answers, timer and progress bar', ua: 'QuizScreen — питання з 4 варіантами відповіді, таймер та смуга прогресу' },
    'quiz.lightbox.3':       { pl: 'ResultsScreen — globalny ranking top 20, wynik użytkownika na żółto', en: 'ResultsScreen — global top 20 ranking, user score highlighted in yellow', ua: 'ResultsScreen — глобальний рейтинг топ-20, результат користувача виділено жовтим' },
    'quiz.goal.label':      { pl: 'Cel projektu', en: 'Project goal', ua: 'Мета проєкту' },
    'quiz.goal.h2':         { pl: 'Nauka przez<br><span class="quiz-grad">quizy i ranking</span>', en: 'Learn through<br><span class="quiz-grad">quizzes and ranking</span>', ua: 'Навчання через<br><span class="quiz-grad">тести й рейтинг</span>' },
    'quiz.goal.p1':         { pl: 'Quiz App to mobilna aplikacja edukacyjna do rozwiązywania testów wielokrotnego wyboru z zewnętrznego API tgryl.pl. Każde pytanie ma własny timer, a wyniki trafiają do globalnego rankingu.',
                              en: 'Quiz App is a mobile educational application for solving multiple-choice quizzes from the external tgryl.pl API. Each question has its own timer, and results are added to a global ranking.',
                              ua: 'Quiz App — це мобільний освітній застосунок для проходження тестів із вибором відповіді через зовнішнє API tgryl.pl. Кожне питання має свій таймер, а результати потрапляють до глобального рейтингу.' },
    'quiz.goal.p2':         { pl: 'Aplikacja działa w pełni offline dzięki lokalnemu cache SQLite — testy są synchronizowane raz dziennie i dostępne bez połączenia z internetem.',
                              en: 'The app works fully offline thanks to a local SQLite cache — quizzes sync once per day and remain available without internet.',
                              ua: 'Застосунок повністю працює офлайн завдяки локальному кешу SQLite — тести синхронізуються раз на день і залишаються доступними без інтернету.' },
    'quiz.feat.1.title':    { pl: 'Testy wielokrotnego wyboru', en: 'Multiple-choice quizzes', ua: 'Тести з вибором відповіді' },
    'quiz.feat.1.desc':     { pl: '4 opcje odpowiedzi (A/B/C/D), pytania i odpowiedzi losowane przy każdym uruchomieniu', en: '4 answer options (A/B/C/D), questions and answers randomized every launch', ua: '4 варіанти відповіді (A/B/C/D), питання та відповіді перемішуються при кожному запуску' },
    'quiz.feat.2.title':    { pl: 'Timer na pytanie', en: 'Per-question timer', ua: 'Таймер на питання' },
    'quiz.feat.2.desc':     { pl: 'Odliczanie czasu per pytanie, kolor czerwony gdy zostaje <5 sekund, auto-skip po upływie', en: 'Countdown per question, red color under 5 seconds, auto-skip when time expires', ua: 'Відлік часу на кожне питання, червоний колір коли лишається <5 секунд, авто-пропуск після закінчення' },
    'quiz.feat.3.title':    { pl: 'Globalny ranking', en: 'Global ranking', ua: 'Глобальний рейтинг' },
    'quiz.feat.3.desc':     { pl: 'Top 20 wyników z serwera, wynik użytkownika podświetlony na żółto, pull-to-refresh', en: 'Top 20 server results, user score highlighted in yellow, pull-to-refresh', ua: 'Топ-20 результатів із сервера, результат користувача виділено жовтим, pull-to-refresh' },
    'quiz.feat.4.title':    { pl: 'Offline-first', en: 'Offline-first', ua: 'Offline-first' },
    'quiz.feat.4.desc':     { pl: 'SQLite cache — testy dostępne bez internetu, synchronizacja automatyczna raz dziennie', en: 'SQLite cache — quizzes available offline, automatic daily sync', ua: 'Кеш SQLite — тести доступні без інтернету, автоматична синхронізація раз на день' },
    'quiz.feat.5.title':    { pl: 'Losowy quiz', en: 'Random quiz', ua: 'Випадковий тест' },
    'quiz.feat.5.desc':     { pl: 'Drawer z 5 losowymi testami i przyciskiem "Losowy Quiz" — nowe wyzwanie za każdym razem', en: 'Drawer with 5 random tests and a "Random Quiz" button — a new challenge every time', ua: 'Drawer із 5 випадковими тестами та кнопкою «Випадковий тест» — новий виклик щоразу' },
    'quiz.feat.6.title':    { pl: 'Onboarding', en: 'Onboarding', ua: 'Онбординг' },
    'quiz.feat.6.desc':     { pl: 'Regulamin przy pierwszym uruchomieniu, stan zapisywany w AsyncStorage — pokazuje się tylko raz', en: 'Terms shown on first launch, state saved in AsyncStorage — shown only once', ua: 'Умови користування при першому запуску, стан зберігається в AsyncStorage — показується лише раз' },
    'quiz.tech.1.name':     { pl: 'React Native 0.82', en: 'React Native 0.82', ua: 'React Native 0.82' },
    'quiz.tech.1.desc':     { pl: 'Cross-platform framework — jeden kod dla Androida i iOS. React 19.1.1.', en: 'Cross-platform framework — one codebase for Android and iOS. React 19.1.1.', ua: 'Крос-платформний фреймворк — один код для Android та iOS. React 19.1.1.' },
    'quiz.tech.2.name':     { pl: 'TypeScript 5.9', en: 'TypeScript 5.9', ua: 'TypeScript 5.9' },
    'quiz.tech.2.desc':     { pl: '91% projektu w TypeScript — statyczne typowanie, strict mode, pełne bezpieczeństwo.', en: '91% of the project in TypeScript — static typing, strict mode, strong safety.', ua: '91% проєкту написано на TypeScript — статична типізація, strict mode, повна безпека.' },
    'quiz.tech.3.name':     { pl: 'SQLite', en: 'SQLite', ua: 'SQLite' },
    'quiz.tech.3.desc':     { pl: 'react-native-sqlite-storage 6.0.1 — lokalna baza danych dla offline cache testów.', en: 'react-native-sqlite-storage 6.0.1 — local database for offline quiz cache.', ua: 'react-native-sqlite-storage 6.0.1 — локальна база даних для офлайн-кешу тестів.' },
    'quiz.tech.4.name':     { pl: 'React Navigation 7', en: 'React Navigation 7', ua: 'React Navigation 7' },
    'quiz.tech.4.desc':     { pl: 'Stack Navigator — Onboarding → Home → Quiz → Results. Side Drawer menu.', en: 'Stack Navigator — Onboarding → Home → Quiz → Results. Side drawer menu.', ua: 'Stack Navigator — Onboarding → Home → Quiz → Results. Бічне меню Drawer.' },
    'quiz.tech.5.name':     { pl: 'NetInfo', en: 'NetInfo', ua: 'NetInfo' },
    'quiz.tech.5.desc':     { pl: '@react-native-community/netinfo 11.4.1 — detekcja stanu sieci, przełączanie offline/online.', en: '@react-native-community/netinfo 11.4.1 — network state detection, offline/online switching.', ua: '@react-native-community/netinfo 11.4.1 — виявлення стану мережі, перемикання offline/online.' },
    'quiz.tech.6.name':     { pl: 'AsyncStorage', en: 'AsyncStorage', ua: 'AsyncStorage' },
    'quiz.tech.6.desc':     { pl: 'Preferencje użytkownika — stan onboardingu, lokalne wyniki i synchronizacja danych.', en: 'User preferences — onboarding state, local results and data sync.', ua: 'Налаштування користувача — стан онбордингу, локальні результати та синхронізація даних.' },
    'quiz.arch.1.title':   { pl: 'Startup — initApp()', en: 'Startup — initApp()', ua: 'Запуск — initApp()' },
    'quiz.arch.1.desc':    { pl: 'App.tsx inicjalizuje bazę danych, tworzy tabele SQLite, sprawdza onboarding w AsyncStorage i synchronizuje dane z API jeśli minął dzień od ostatniej synchronizacji.', en: 'App.tsx initializes the database, creates SQLite tables, checks onboarding status in AsyncStorage and syncs data from the API when a day has passed.', ua: 'App.tsx ініціалізує базу даних, створює таблиці SQLite, перевіряє онбординг в AsyncStorage і синхронізує дані з API, якщо минув день від останньої синхронізації.' },
    'quiz.arch.2.title':   { pl: 'Offline-first — quizService', en: 'Offline-first — quizService', ua: 'Offline-first — quizService' },
    'quiz.arch.2.desc':    { pl: 'Każde zapytanie o dane sprawdza najpierw lokalną bazę SQLite. Jeśli dane są — zwraca je bez wywołania API. NetInfo decyduje czy sieć jest dostępna.', en: 'Each data request checks the local SQLite database first. If data exists it returns it without calling the API. NetInfo decides if the network is available.', ua: 'Кожен запит даних спершу перевіряє локальну базу SQLite. Якщо дані є — повертає їх без звернення до API. NetInfo визначає, чи доступна мережа.' },
    'quiz.arch.3.title':   { pl: 'QuizScreen — timer', en: 'QuizScreen — timer', ua: 'QuizScreen — таймер' },
    'quiz.arch.3.desc':    { pl: 'Każde pytanie ma własny timer (np. 30s z API). Gdy zostaje <5 sekund — kolor czerwony. Po upływie czasu odpowiedzi blokowane, przejście dalej.', en: 'Each question has its own timer (e.g. 30s from the API). When less than 5 seconds remain it turns red. After time runs out answers lock and moves on.', ua: 'Кожне питання має свій таймер (наприклад, 30с з API). Коли лишається <5 секунд — колір стає червоним. Після закінчення часу відповіді блокуються, перехід далі.' },
    'quiz.arch.4.title':   { pl: 'SQLite — schemat', en: 'SQLite — schema', ua: 'SQLite — схема' },
    'quiz.arch.4.desc':    { pl: 'Tabela tests przechowuje całe dane testu jako JSON, tabela meta przechowuje datę ostatniej synchronizacji.', en: 'The tests table stores full quiz data as JSON, the meta table stores the last synchronization date.', ua: 'Таблиця tests зберігає всі дані тесту у форматі JSON, таблиця meta зберігає дату останньої синхронізації.' },
    'quiz.arch.5.title':   { pl: 'ResultsScreen — wyniki', en: 'ResultsScreen — results', ua: 'ResultsScreen — результати' },
    'quiz.arch.5.desc':    { pl: 'Wynik wysyłany na serwer przez POST po zakończeniu quizu. Tabela top 20 z API, wynik użytkownika podświetlony na żółto. Pull-to-refresh aktualizuje ranking.', en: 'Result is sent to the server via POST after the quiz. Top 20 table from the API, user result highlighted in yellow. Pull-to-refresh updates the ranking.', ua: 'Результат надсилається на сервер через POST після завершення тесту. Таблиця топ-20 з API, результат користувача виділено жовтим. Pull-to-refresh оновлює рейтинг.' },
    'quiz.arch.6.title':   { pl: 'Drawer — side menu', en: 'Drawer — side menu', ua: 'Drawer — бічне меню' },
    'quiz.arch.6.desc':    { pl: 'Animowany drawer z lewej strony — 5 losowych testów, przycisk "Losowy Quiz", synchronizacja i nawigacja. Obsługuje offline — wyświetla z SQLite gdy brak sieci.', en: 'Animated drawer from the left — 5 random tests, "Random Quiz" button, sync and navigation. Supports offline — shows SQLite data when no network.', ua: 'Анімований drawer зліва — 5 випадкових тестів, кнопка «Випадковий тест», синхронізація та навігація. Підтримує офлайн — показує дані з SQLite за відсутності мережі.' },
    'quiz.screens.label':   { pl: 'Ekrany', en: 'Screens', ua: 'Екрани' },
    'quiz.screens.title':   { pl: 'Struktura aplikacji', en: 'App structure', ua: 'Структура застосунку' },
    'quiz.screen.1.desc':   { pl: 'Regulamin — pokazuje się tylko raz', en: 'Terms shown once', ua: 'Умови користування — показуються лише раз' },
    'quiz.screen.2.desc':   { pl: 'Lista dostępnych testów z tagami', en: 'List of available quizzes with tags', ua: 'Список доступних тестів із тегами' },
    'quiz.screen.3.desc':   { pl: 'Pytania A/B/C/D z timerem i progress bar', en: 'A/B/C/D questions with timer and progress bar', ua: 'Питання A/B/C/D з таймером і смугою прогресу' },
    'quiz.screen.4.desc':   { pl: 'Top 20 globalny ranking z serwera', en: 'Top 20 global ranking from the server', ua: 'Топ-20 глобальний рейтинг із сервера' },
    'quiz.screen.5.desc':   { pl: 'Side menu — losowe testy i sync', en: 'Side menu — random tests and sync', ua: 'Бічне меню — випадкові тести та синхронізація' },
    'quiz.offline.label':   { pl: 'Offline', en: 'Offline', ua: 'Офлайн' },
    'quiz.offline.title':   { pl: 'Tryb offline', en: 'Offline mode', ua: 'Офлайн-режим' },
    'quiz.offline.card1.title': { pl: '🏠 HomeScreen', en: '🏠 HomeScreen', ua: '🏠 HomeScreen' },
    'quiz.offline.card1.online': { pl: 'Online: pobiera z API, zapisuje do SQLite', en: 'Online: fetches from API, saves to SQLite', ua: 'Онлайн: отримує дані з API, зберігає в SQLite' },
    'quiz.offline.card1.offline': { pl: 'Offline: wyświetla z lokalnej bazy', en: 'Offline: displays from local DB', ua: 'Офлайн: показує дані з локальної бази' },
    'quiz.offline.card1.error': { pl: 'Offline + pusta baza: komunikat błędu', en: 'Offline + empty DB: error message', ua: 'Офлайн + порожня база: повідомлення про помилку' },
    'quiz.offline.card2.title': { pl: '❓ QuizScreen', en: '❓ QuizScreen', ua: '❓ QuizScreen' },
    'quiz.offline.card2.online': { pl: 'Online: pobiera szczegóły z API', en: 'Online: fetches details from API', ua: 'Онлайн: отримує деталі з API' },
    'quiz.offline.card2.offline': { pl: 'Offline: pobiera pytania z SQLite', en: 'Offline: fetches questions from SQLite', ua: 'Офлайн: отримує питання з SQLite' },
    'quiz.offline.card2.error': { pl: 'Offline + brak w bazie: błąd', en: 'Offline + missing cache: error', ua: 'Офлайн + немає в базі: помилка' },
    'quiz.offline.card3.title': { pl: '🏆 ResultsScreen', en: '🏆 ResultsScreen', ua: '🏆 ResultsScreen' },
    'quiz.offline.card3.online': { pl: 'Online: top 20 z API + lokalne', en: 'Online: top 20 from API + local', ua: 'Онлайн: топ-20 з API + локальні' },
    'quiz.offline.card3.offline': { pl: 'Offline: tylko lokalne wyniki', en: 'Offline: local results only', ua: 'Офлайн: лише локальні результати' },
    'quiz.offline.card3.cache': { pl: 'Wyniki cache\'owane w AsyncStorage', en: 'Results cached in AsyncStorage', ua: 'Результати кешуються в AsyncStorage' },
    'quiz.stats.framework': { pl: 'Framework', en: 'Framework', ua: 'Фреймворк' },
    'quiz.stats.language':  { pl: 'Język', en: 'Language', ua: 'Мова' },
    'quiz.stats.storage':   { pl: 'Storage', en: 'Storage', ua: 'Сховище' },
    'quiz.stats.mode':      { pl: 'Tryb pracy', en: 'Mode', ua: 'Режим роботи' },
    'quiz.api.label':       { pl: 'API', en: 'API', ua: 'API' },
    'quiz.api.title':       { pl: 'Endpointy — tgryl.pl', en: 'Endpoints — tgryl.pl', ua: 'Ендпоінти — tgryl.pl' },
    'quiz.api.name':        { pl: 'Quiz API', en: 'Quiz API', ua: 'Quiz API' },
    'quiz.api.ep.tests':    { pl: 'Lista dostępnych testów z tagami i liczbą pytań', en: 'List of available quizzes with tags and question count', ua: 'Список доступних тестів із тегами та кількістю питань' },
    'quiz.api.ep.test':     { pl: 'Szczegóły testu — pytania, odpowiedzi, czas (duration)', en: 'Quiz details — questions, answers, duration', ua: 'Деталі тесту — питання, відповіді, тривалість' },
    'quiz.api.ep.results':  { pl: 'Top 20 wyników globalnego rankingu', en: 'Top 20 global ranking results', ua: 'Топ-20 результатів глобального рейтингу' },
    'quiz.api.ep.result':   { pl: 'Wysłanie wyniku — nick, score, total, type', en: 'Send result — nick, score, total, type', ua: 'Надсилання результату — nick, score, total, type' },
    'quiz.langs.label':     { pl: 'Języki', en: 'Languages', ua: 'Мови' },
    'quiz.langs.title':     { pl: 'Skład projektu', en: 'Project composition', ua: 'Склад проєкту' },
    'quiz.lang.1.name':     { pl: 'TypeScript', en: 'TypeScript', ua: 'TypeScript' },
    'quiz.lang.1.pct':      { pl: '91%', en: '91%', ua: '91%' },
    'quiz.lang.1.title':    { pl: 'TypeScript — logika aplikacji', en: 'TypeScript — application logic', ua: 'TypeScript — логіка застосунку' },
    'quiz.lang.1.desc':     { pl: 'Screens, services, database layer, typy danych — 91% całego kodu', en: 'Screens, services, database layer, data types — 91% of code', ua: 'Екрани, сервіси, шар бази даних, типи даних — 91% усього коду' },
    'quiz.lang.2.name':     { pl: 'Kotlin', en: 'Kotlin', ua: 'Kotlin' },
    'quiz.lang.2.pct':      { pl: '3.4%', en: '3.4%', ua: '3.4%' },
    'quiz.lang.2.title':    { pl: 'Kotlin — natywny Android', en: 'Kotlin — native Android', ua: 'Kotlin — нативний Android' },
    'quiz.lang.2.desc':     { pl: 'Natywne moduły i konfiguracja Gradle dla warstwy Android', en: 'Native modules and Gradle configuration for Android layer', ua: 'Нативні модулі та конфігурація Gradle для Android-шару' },
    'quiz.lang.3.name':     { pl: 'Ruby', en: 'Ruby', ua: 'Ruby' },
    'quiz.lang.3.pct':      { pl: '2.3%', en: '2.3%', ua: '2.3%' },
    'quiz.lang.3.title':    { pl: 'Ruby — CocoaPods iOS', en: 'Ruby — CocoaPods iOS', ua: 'Ruby — CocoaPods iOS' },
    'quiz.lang.3.desc':     { pl: 'Gemfile i CocoaPods do zarządzania zależnościami iOS', en: 'Gemfile and CocoaPods for iOS dependency management', ua: 'Gemfile та CocoaPods для керування залежностями iOS' },
    'quiz.lang.4.name':     { pl: 'Swift', en: 'Swift', ua: 'Swift' },
    'quiz.lang.4.pct':      { pl: '2%', en: '2%', ua: '2%' },
    'quiz.lang.5.name':     { pl: 'JavaScript', en: 'JavaScript', ua: 'JavaScript' },
    'quiz.lang.5.pct':      { pl: '1.3%', en: '1.3%', ua: '1.3%' },
    'quiz.build.label':     { pl: 'Instalacja', en: 'Installation', ua: 'Встановлення' },
    'quiz.build.title':     { pl: 'Jak uruchomić', en: 'How to run', ua: 'Як запустити' },
    'quiz.req.title':       { pl: 'Wymagania', en: 'Requirements', ua: 'Вимоги' },
    'quiz.step.1.title':    { pl: 'Klonuj i zainstaluj zależności', en: 'Clone and install dependencies', ua: 'Клонуй і встанови залежності' },
    'quiz.step.2.title':    { pl: 'Zainstaluj zależności iOS (tylko macOS)', en: 'Install iOS dependencies (macOS only)', ua: 'Встанови залежності iOS (лише macOS)' },
    'quiz.step.3.title':    { pl: 'Uruchom Metro i aplikację', en: 'Run Metro and the app', ua: 'Запусти Metro та застосунок' },
    'quiz.btn.api':         { pl: 'API', en: 'API', ua: 'API' },

    /* ════ RACING 3D ════ */
    'racing.category':  { pl: 'Game Development · Grafika 3D', en: 'Game Development · 3D Graphics', ua: 'Розробка ігор · 3D-графіка' },
    'racing.tagline':   { pl: 'Autorski silnik wyścigowy napisany w C++ i OpenGL 3.3 — od renderowania shaderów po symulację fizyki Bullet Physics.',
                          en: 'Custom racing engine written in C++ and OpenGL 3.3 — from shader rendering to Bullet Physics simulation.',
                          ua: 'Власний перегоновий рушій, написаний на C++ та OpenGL 3.3 — від рендерингу шейдерів до симуляції фізики Bullet Physics.' },
    'racing.goal.h2':   { pl: 'Autorski silnik<br><span class="grad">od zera</span>', en: 'Custom engine<br><span class="grad">from scratch</span>', ua: 'Власний рушій<br><span class="grad">з нуля</span>' },
    'racing.goal.p1':   { pl: 'Kluczowym założeniem było stworzenie trójwymiarowego symulatora wyścigów bez użycia gotowych silników jak Unity czy Unreal Engine. Cały potok renderowania, fizyka i logika gry zostały napisane w C++17 od podstaw.',
                          en: 'The key goal was to create a 3D racing simulator without ready-made engines like Unity or Unreal Engine. The entire rendering pipeline, physics and game logic were written from scratch in C++17.',
                          ua: 'Ключовою метою було створити тривимірний симулятор перегонів без готових рушіїв на кшталт Unity чи Unreal Engine. Увесь конвеєр рендерингу, фізику та ігрову логіку написано з нуля на C++17.' },
    'racing.goal.p2':   { pl: 'Projekt był realizowany w ramach przedmiotu Grafika 3D i programowanie kart graficznych na Akademii Tarnowskiej.',
                          en: 'The project was completed as part of the 3D Graphics and GPU Programming course at Tarnów Academy.',
                          ua: 'Проєкт реалізовано в рамках курсу «3D-графіка та програмування відеокарт» у Тарновській академії.' },
    'racing.gallery':   { pl: 'Gra w akcji', en: 'Game in action', ua: 'Гра в дії' },
    'racing.feat.1.title': { pl: 'Rozbudowane menu',   en: 'Full menu', ua: 'Розширене меню' },
    'racing.feat.1.desc':  { pl: 'Wybór auta, trasy, liczby okrążeń i ustawień grafiki', en: 'Car, track, laps and graphics settings selection', ua: 'Вибір авто, траси, кількості кіл та налаштувань графіки' },
    'racing.feat.2.title': { pl: 'Dwa tryby kamery',   en: 'Two camera modes', ua: 'Два режими камери' },
    'racing.feat.2.desc':  { pl: 'TPP (za samochodem) i FPP (widok z kokpitu)', en: 'TPP (behind car) and FPP (cockpit view)', ua: 'TPP (позаду авто) та FPP (вид із кабіни)' },
    'racing.feat.3.title': { pl: 'Przeciwnik AI',       en: 'AI Opponent', ua: 'AI-суперник' },
    'racing.feat.3.desc':  { pl: 'System waypointów z algorytmem P-Controller', en: 'Waypoint system with P-Controller algorithm', ua: 'Система waypoint-ів з алгоритмом P-Controller' },
    'racing.feat.4.title': { pl: 'System ekonomii',    en: 'Economy system', ua: 'Система економіки' },
    'racing.feat.4.desc':  { pl: 'Wirtualna waluta, garaż z 7 samochodami do odblokowania', en: 'Virtual currency, garage with 7 cars to unlock', ua: 'Віртуальна валюта, гараж із 7 авто для розблокування' },
    'racing.feat.5.title': { pl: 'Dynamiczny dźwięk',  en: 'Dynamic sound', ua: 'Динамічний звук' },
    'racing.feat.5.desc':  { pl: 'Pitch silnika zmienia się proporcjonalnie do prędkości', en: 'Engine pitch changes proportionally to speed', ua: 'Висота звуку двигуна змінюється пропорційно до швидкості' },
    'racing.ctrl.1': { pl: 'Przyspieszenie',               en: 'Accelerate', ua: 'Прискорення' },
    'racing.ctrl.2': { pl: 'Hamowanie / Wsteczny',         en: 'Brake / Reverse', ua: 'Гальмо / Задній хід' },
    'racing.ctrl.3': { pl: 'Skręt w lewo',                 en: 'Steer left', ua: 'Поворот ліворуч' },
    'racing.ctrl.4': { pl: 'Skręt w prawo',                en: 'Steer right', ua: 'Поворот праворуч' },
    'racing.ctrl.5': { pl: 'Hamulec ręczny (drift)',       en: 'Handbrake (drift)', ua: 'Ручне гальмо (дрифт)' },
    'racing.ctrl.6': { pl: 'Zmiana kamery TPP / FPP',     en: 'Switch camera TPP/FPP', ua: 'Перемикання камери TPP / FPP' },
    'racing.ctrl.7': { pl: 'Menu / Pauza',                 en: 'Menu / Pause', ua: 'Меню / Пауза' },
    'racing.ctrl.8': { pl: 'Alternatywne sterowanie',      en: 'Alternative controls', ua: 'Альтернативне керування' },
    'racing.tech.1.name': { pl: 'C++17', en: 'C++17', ua: 'C++17' },
    'racing.tech.1.desc': { pl: 'Język główny. Pełna kontrola pamięci i wydajność wymagana w aplikacjach czasu rzeczywistego.', en: 'Main language. Full memory control and performance needed in real-time applications.', ua: 'Основна мова. Повний контроль пам\'яті та продуктивність, необхідні для застосунків реального часу.' },
    'racing.tech.2.name': { pl: 'OpenGL 3.3', en: 'OpenGL 3.3', ua: 'OpenGL 3.3' },
    'racing.tech.2.desc': { pl: 'Core Profile — nowoczesny potok renderowania z shaderami GLSL, VBO/VAO/EBO.', en: 'Core Profile — modern rendering pipeline with GLSL shaders, VBO/VAO/EBO.', ua: 'Core Profile — сучасний конвеєр рендерингу з шейдерами GLSL, VBO/VAO/EBO.' },
    'racing.tech.3.name': { pl: 'Bullet Physics', en: 'Bullet Physics', ua: 'Bullet Physics' },
    'racing.tech.3.desc': { pl: 'Symulacja fizyki bryły sztywnej. Model btRaycastVehicle z zawieszeniem i tarciem opon.', en: 'Rigid body physics simulation. btRaycastVehicle model with suspension and tire friction.', ua: 'Симуляція фізики твердого тіла. Модель btRaycastVehicle із підвіскою та тертям шин.' },
    'racing.tech.4.name': { pl: 'GLFW + GLAD', en: 'GLFW + GLAD', ua: 'GLFW + GLAD' },
    'racing.tech.4.desc': { pl: 'Tworzenie okna, kontekstu OpenGL i obsługa urządzeń wejścia.', en: 'Window/context creation and input device handling.', ua: 'Створення вікна, контексту OpenGL та обробка пристроїв введення.' },
    'racing.tech.5.name': { pl: 'GLM', en: 'GLM', ua: 'GLM' },
    'racing.tech.5.desc': { pl: 'Biblioteka matematyczna — wektory, macierze transformacji, rzutowanie perspektywiczne.', en: 'Math library — vectors, transform matrices, perspective projection.', ua: 'Математична бібліотека — вектори, матриці трансформацій, перспективна проєкція.' },
    'racing.tech.6.name': { pl: 'ImGui', en: 'ImGui', ua: 'ImGui' },
    'racing.tech.6.desc': { pl: 'Immediate Mode GUI — menu, HUD z licznikiem prędkości, ekrany końcowe.', en: 'Immediate Mode GUI — menu, speedometer HUD, end screens.', ua: 'Immediate Mode GUI — меню, HUD зі спідометром, фінальні екрани.' },
    'racing.tech.7.name': { pl: 'Miniaudio', en: 'Miniaudio', ua: 'Miniaudio' },
    'racing.tech.7.desc': { pl: 'Lekka biblioteka audio do odtwarzania dźwięku silnika z dynamicznym pitchem.', en: 'Light audio library for engine sound playback with dynamic pitch.', ua: 'Легка аудіобібліотека для відтворення звуку двигуна з динамічною висотою тону.' },
    'racing.tech.8.name': { pl: 'CMake + vcpkg', en: 'CMake + vcpkg', ua: 'CMake + vcpkg' },
    'racing.tech.8.desc': { pl: 'System budowania i zarządzanie zależnościami niezależny od IDE.', en: 'Build system and dependency management independent of IDE.', ua: 'Система збірки та керування залежностями, незалежна від IDE.' },
    'racing.arch.1.title': { pl: 'Maszyna stanów', en: 'State machine', ua: 'Машина станів' },
    'racing.arch.1.desc': { pl: 'Aplikacja działa w trzech stanach: SPLASH_SCREEN, MAIN_MENU i RACING. Każdy stan determinuje co jest renderowane w danej klatce.', en: 'The app runs in three states: SPLASH_SCREEN, MAIN_MENU and RACING. Each state determines what is rendered in each frame.', ua: 'Застосунок працює у трьох станах: SPLASH_SCREEN, MAIN_MENU і RACING. Кожен стан визначає, що рендериться в даному кадрі.' },
    'racing.arch.2.title': { pl: 'Pętla gry + Delta Time', en: 'Game loop + Delta Time', ua: 'Ігровий цикл + Delta Time' },
    'racing.arch.2.desc': { pl: 'Każda klatka: przetwarzanie wejścia → aktualizacja fizyki → renderowanie. Delta Time zapewnia tę samą prędkość gry na 30 i 144 FPS.', en: 'Each frame: input processing → physics update → rendering. Delta Time keeps the same game speed at 30 and 144 FPS.', ua: 'Кожен кадр: обробка вводу → оновлення фізики → рендеринг. Delta Time забезпечує однакову швидкість гри на 30 і 144 FPS.' },
    'racing.arch.3.title': { pl: 'Shader Phonga (GLSL)', en: 'Phong shader (GLSL)', ua: 'Шейдер Фонга (GLSL)' },
    'racing.arch.3.desc': { pl: 'Model oświetlenia z trzema składnikami: ambient, diffuse, specular. Autorskie shadery phong.vert i phong.frag.', en: 'Lighting model with ambient, diffuse and specular components. Custom shaders phong.vert and phong.frag.', ua: 'Модель освітлення з трьома компонентами: ambient, diffuse, specular. Власні шейдери phong.vert і phong.frag.' },
    'racing.arch.4.title': { pl: 'Własny parser OBJ', en: 'Custom OBJ parser', ua: 'Власний парсер OBJ' },
    'racing.arch.4.desc': { pl: 'Klasa Karting parsuje format Wavefront OBJ linia po linii, z automatycznym generowaniem normalnych przez iloczyn wektorowy.', en: 'Karting class parses Wavefront OBJ line by line, auto-generating normals via cross product.', ua: 'Клас Karting парсить формат Wavefront OBJ рядок за рядком, автоматично генеруючи нормалі через векторний добуток.' },
    'racing.arch.5.title': { pl: 'Fizyka — btRaycastVehicle', en: 'Physics — btRaycastVehicle', ua: 'Фізика — btRaycastVehicle' },
    'racing.arch.5.desc': { pl: 'Każde koło rzuca promień (raycast) do podłoża. Siła zawieszenia, tarcie i silnik są obliczane osobno dla każdego koła przez Bullet Physics.', en: 'Each wheel casts a ray to the ground. Suspension force, friction and engine are computed per wheel by Bullet Physics.', ua: 'Кожне колесо кидає промінь (raycast) до землі. Силу підвіски, тертя та двигун обчислюються окремо для кожного колеса через Bullet Physics.' },
    'racing.arch.6.title': { pl: 'AI — Waypoints + P-Controller', en: 'AI — Waypoints + P-Controller', ua: 'AI — Waypoints + P-Controller' },
    'racing.arch.6.desc': { pl: 'Przeciwnik podąża za punktami nawigacyjnymi toru. Kąt skrętu obliczany przez atan2 i ograniczany przez glm::clamp.', en: 'The opponent follows track waypoints. Steering angle is calculated by atan2 and clamped using glm::clamp.', ua: 'Суперник рухається за навігаційними точками траси. Кут повороту обчислюється через atan2 і обмежується через glm::clamp.' },

    /* ════ WYSPA MYSTERY ════ */
    'wyspa.category': { pl: 'Game Development · Unity 3D', en: 'Game Development · Unity 3D', ua: 'Розробка ігор · Unity 3D' },
    'wyspa.tagline':  { pl: 'Survivalowa gra FPS z systemem zagadek logicznych. Eksploruj niebezpieczną wyspę, unikaj drapieżnika i znajdź sposób na wezwanie pomocy przed zapadnięciem zmroku.',
                        en: 'Survival FPS game with a logic puzzle system. Explore the dangerous island, avoid the predator and find a way to call for help before nightfall.',
                        ua: 'Survival FPS-гра із системою логічних головоломок. Досліджуй небезпечний острів, уникай хижака та знайди спосіб покликати на допомогу до настання темряви.' },
    'wyspa.goal.h2':  { pl: 'Przeżyj noc<br><span class="wyspa-grad">lub zgiń próbując</span>', en: 'Survive the night<br><span class="wyspa-grad">or die trying</span>', ua: 'Виживи вночі<br><span class="wyspa-grad">або загинь намагаючись</span>' },
    'wyspa.goal.p1':  { pl: 'Wyspa Mystery to survivalowa gra FPS stworzona w Unity 3D jako projekt indywidualny. Gracz ląduje na tajemniczej wyspie i musi znaleźć sposób na wezwanie ratunku zanim zapadnie zmrok.',
                        en: 'Wyspa Mystery is a survival FPS game created in Unity 3D as an individual project. The player lands on a mysterious island and must find a way to call for rescue before nightfall.',
                        ua: 'Wyspa Mystery — це survival FPS-гра, створена в Unity 3D як індивідуальний проєкт. Гравець потрапляє на загадковий острів і має знайти спосіб покликати на порятунок до настання темряви.' },
    'wyspa.goal.p2':  { pl: 'Projekt skupia się na budowaniu napięcia atmosferycznego — gęsta mgła, aktywny wulkan i AI wilka tworzą środowisko, w którym każda decyzja ma znaczenie.',
                        en: 'The project focuses on building atmospheric tension — dense fog, an active volcano and wolf AI create an environment where every decision matters.',
                        ua: 'Проєкт зосереджений на створенні атмосферної напруги — густий туман, активний вулкан і AI вовка формують середовище, де кожне рішення має значення.' },
    'wyspa.gallery':  { pl: 'Rzut oka na wyspę', en: 'A glimpse of the island', ua: 'Погляд на острів' },
    'wyspa.feat.1.title': { pl: 'Otwarty świat wyspy',     en: 'Open island world', ua: 'Відкритий світ острова' },
    'wyspa.feat.1.desc':  { pl: 'Eksploracja terenu z wulkanem, lasem i domem jako głównym celem', en: 'Explore terrain with a volcano, forest and house as the main objective', ua: 'Дослідження території з вулканом, лісом та будинком як головною метою' },
    'wyspa.feat.2.title': { pl: 'AI Drapieżnika',          en: 'Predator AI', ua: 'AI хижака' },
    'wyspa.feat.2.desc':  { pl: 'Wilk patroluje teren i wykrywa gracza w zasięgu wzroku — Chase AI', en: 'Wolf patrols the terrain and detects the player in line of sight — Chase AI', ua: 'Вовк патрулює територію та виявляє гравця в полі зору — Chase AI' },
    'wyspa.feat.3.title': { pl: 'Minigra zręcznościowa',  en: 'Skill minigame', ua: 'Міні-гра на спритність' },
    'wyspa.feat.3.desc':  { pl: 'Rzucanie kokosami w 3 cele w ciągu 5 sekund — odblokowanie skrzyni', en: 'Throw coconuts at 3 targets in 5 seconds — unlock the chest', ua: 'Кидання кокосів у 3 цілі за 5 секунд — розблокування скрині' },
    'wyspa.feat.4.title': { pl: 'System interakcji FPS',  en: 'FPS interaction system', ua: 'Система взаємодії FPS' },
    'wyspa.feat.4.desc':  { pl: 'Raycasting — podnoszenie przedmiotów, otwieranie drzwi, zapalanie ogniska', en: 'Raycasting — pick up items, open doors, light campfire', ua: 'Raycasting — підняття предметів, відкривання дверей, розпалювання вогнища' },
    'wyspa.feat.5.title': { pl: 'Atmosfera i efekty',     en: 'Atmosphere & effects', ua: 'Атмосфера та ефекти' },
    'wyspa.feat.5.desc':  { pl: 'Gęsta mgła ograniczająca widoczność i efekty cząsteczkowe wulkanu', en: 'Dense fog limiting visibility and volcano particle effects', ua: 'Густий туман, що обмежує видимість, та частинкові ефекти вулкана' },
    'wyspa.ctrl.1': { pl: 'Ruch postacią',              en: 'Move character', ua: 'Рух персонажем' },
    'wyspa.ctrl.2': { pl: 'Rozglądanie się',            en: 'Look around', ua: 'Огляд навколо' },
    'wyspa.ctrl.3': { pl: 'Interakcja z obiektami',     en: 'Interact with objects', ua: "Взаємодія з об'єктами" },
    'wyspa.ctrl.4': { pl: 'Rzut kokosem / akcja',       en: 'Throw coconut / action', ua: 'Кидок кокоса / дія' },
    'wyspa.ctrl.5': { pl: 'Sprint',                     en: 'Sprint', ua: 'Спринт' },
    'wyspa.ctrl.6': { pl: 'Pauza / Menu',               en: 'Pause / Menu', ua: 'Пауза / Меню' },
    'wyspa.tech.1.name': { pl: 'Unity 3D', en: 'Unity 3D', ua: 'Unity 3D' },
    'wyspa.tech.1.desc': { pl: 'Główny silnik gry. Obsługa scen, fizyki, oświetlenia i systemu cząsteczek.', en: 'Main game engine. Scene, physics, lighting and particle system support.', ua: 'Основний ігровий рушій. Підтримка сцен, фізики, освітлення та системи частинок.' },
    'wyspa.tech.2.name': { pl: 'C#', en: 'C#', ua: 'C#' },
    'wyspa.tech.2.desc': { pl: 'Skrypty gameplay — sterowanie graczem, logika AI, zarządzanie stanem gry i UI.', en: 'Gameplay scripts — player control, AI logic, game state and UI management.', ua: 'Ігрові скрипти — керування гравцем, логіка AI, керування станом гри та UI.' },
    'wyspa.tech.3.name': { pl: 'NavMesh AI', en: 'NavMesh AI', ua: 'NavMesh AI' },
    'wyspa.tech.3.desc': { pl: 'Unity Navigation Mesh — automatyczne wyznaczanie tras dla wilka na terenie wyspy.', en: 'Unity Navigation Mesh — automatic pathfinding for the wolf across the island.', ua: 'Unity Navigation Mesh — автоматична побудова маршрутів для вовка по острову.' },
    'wyspa.tech.4.name': { pl: 'FPS Controller', en: 'FPS Controller', ua: 'FPS-контролер' },
    'wyspa.tech.4.desc': { pl: 'Własny kontroler pierwszoosobowy z raycastingiem do interakcji z obiektami.', en: 'Custom first-person controller with raycasting for object interactions.', ua: "Власний контролер від першої особи з raycasting-ом для взаємодії з об'єктами." },
    'wyspa.tech.5.name': { pl: 'Particle System', en: 'Particle System', ua: 'Particle System' },
    'wyspa.tech.5.desc': { pl: 'Efekty cząsteczkowe — dym wulkanu, płomienie ogniska, unoszące się pyłki.', en: 'Particle effects — volcano smoke, campfire flames, floating dust.', ua: 'Ефекти частинок — дим вулкана, полум\'я вогнища, пилинки, що ширяють.' },
    'wyspa.tech.6.name': { pl: 'Animator', en: 'Animator', ua: 'Animator' },
    'wyspa.tech.6.desc': { pl: 'Unity Animator Controller — animacje wilka (patrol, bieg, atak) i otwarcia skrzyni.', en: 'Unity Animator Controller — wolf animations (patrol, run, attack) and chest opening.', ua: 'Unity Animator Controller — анімації вовка (патруль, біг, атака) і відкриття скрині.' },
    'wyspa.tech.7.name': { pl: 'Unity UI', en: 'Unity UI', ua: 'Unity UI' },
    'wyspa.tech.7.desc': { pl: 'Canvas — HUD z licznikiem zebranych artefaktów, ekrany wygranej i porażki.', en: 'Canvas — HUD with collected artifact counter, victory and defeat screens.', ua: 'Canvas — HUD із лічильником зібраних артефактів, екрани перемоги та поразки.' },
    'wyspa.tech.8.name': { pl: 'URP Lighting', en: 'URP Lighting', ua: 'URP Lighting' },
    'wyspa.tech.8.desc': { pl: 'Universal Render Pipeline z dynamicznym oświetleniem i mgłą atmosferyczną.', en: 'Universal Render Pipeline with dynamic lighting and atmospheric fog.', ua: 'Universal Render Pipeline із динамічним освітленням та атмосферним туманом.' },
    'wyspa.arch.1.title': { pl: 'AI Wilka — stany', en: 'Wolf AI — states', ua: 'AI вовка — стани' },
    'wyspa.arch.1.desc': { pl: 'Wilk operuje w trzech stanach: Patrol, Chase i Attack. Przejście między nimi steruje NavMeshAgent w zależności od odległości i pola widzenia gracza.', en: 'The wolf operates in three states: Patrol, Chase and Attack. Transitions are controlled by NavMeshAgent based on distance and player line of sight.', ua: 'Вовк діє у трьох станах: Patrol, Chase та Attack. Переходами між ними керує NavMeshAgent залежно від відстані та поля зору гравця.' },
    'wyspa.arch.2.title': { pl: 'Raycasting — interakcje', en: 'Raycasting — interactions', ua: 'Raycasting — взаємодії' },
    'wyspa.arch.2.desc': { pl: 'Każda klatka kamera rzuca promień w przód. Trafienie w obiekt z tagiem Interactable wyświetla podpowiedź i wywołuje akcję.', en: 'Each frame the camera casts a forward ray. Hitting an Interactable object shows a hint and triggers an action.', ua: "Кожен кадр камера випускає промінь вперед. Влучення в об'єкт із тегом Interactable показує підказку та викликає дію." },
    'wyspa.arch.3.title': { pl: 'Minigra — timer i cele', en: 'Minigame — timer and targets', ua: 'Міні-гра — таймер і цілі' },
    'wyspa.arch.3.desc': { pl: 'Skrypt odlicza 5 sekund i zlicza trafienia w 3 cele. Po spełnieniu warunku wywołuje animację otwarcia skrzyni przez Animator.', en: 'The script counts down 5 seconds and tracks hits on 3 targets. On success it triggers the chest open animation via Animator.', ua: 'Скрипт відлічує 5 секунд і рахує влучення в 3 цілі. При виконанні умови викликає анімацію відкриття скрині через Animator.' },
    'wyspa.arch.4.title': { pl: 'System postępu', en: 'Progress system', ua: 'Система прогресу' },
    'wyspa.arch.4.desc': { pl: 'GameManager przechowuje liczbę zebranych artefaktów. Dopiero po zebraniu wszystkich gracz może zapalić ognisko i wygrać grę.', en: 'GameManager stores the number of collected artifacts. Only after collecting all can the player light the campfire and win.', ua: 'GameManager зберігає кількість зібраних артефактів. Лише зібравши всі, гравець може розпалити вогнище та виграти гру.' },
    'wyspa.arch.5.title': { pl: 'Atmosfera — mgła i oświetlenie', en: 'Atmosphere — fog and lighting', ua: 'Атмосфера — туман і освітлення' },
    'wyspa.arch.5.desc': { pl: 'Mgła skonfigurowana przez Unity URP — gęstość rośnie wraz z odległością. Wulkan emituje ciągły system cząsteczek z dymem i popiołem.', en: 'Fog is configured through Unity URP — density increases with distance. The volcano emits a continuous particle system of smoke and ash.', ua: 'Туман налаштований через Unity URP — щільність зростає з відстанню. Вулкан безперервно випускає систему частинок диму та попелу.' },
    'wyspa.arch.6.title': { pl: 'Warunki wygranej / porażki', en: 'Win / lose conditions', ua: 'Умови перемоги / поразки' },
    'wyspa.arch.6.desc': { pl: 'Gracz wygrywa zapalając ognisko z zebranymi zapałkami. Przegrywa gdy wilk dotknie go lub gdy minie limit czasu.', en: 'The player wins by lighting the campfire with matches. They lose if the wolf touches them or time runs out.', ua: 'Гравець перемагає, розпаливши вогнище зібраними сірниками. Програє, якщо вовк торкнеться його або скінчиться час.' },

    /* ════ BLOG APP ════ */
    'blog.category':  { pl: 'Web Development · Fullstack', en: 'Web Development · Fullstack', ua: 'Веброзробка · Fullstack' },
    'blog.tagline':   { pl: 'Fullstackowa aplikacja blogowa zbudowana w Angular + Node.js — system postów, komentarzy, ocen i ulubionych. Panel admina, autoryzacja JWT i Server-Side Rendering.',
                        en: 'Fullstack blog application built with Angular + Node.js — posts, comments, ratings and favourites. Admin panel, JWT auth and Server-Side Rendering.',
                        ua: 'Fullstack блог-застосунок на Angular + Node.js — система постів, коментарів, оцінок та обраного. Панель адміністратора, JWT-авторизація та Server-Side Rendering.' },
    'blog.goal.h2':   { pl: 'Fullstack<br><span class="blog-grad">od loginu po admina</span>', en: 'Fullstack<br><span class="blog-grad">from login to admin</span>', ua: 'Fullstack<br><span class="blog-grad">від логіну до адмінки</span>' },
    'blog.goal.p1':   { pl: 'Blog App to kompletna aplikacja webowa zrealizowana w ramach przedmiotu Technologie aplikacji webowych na Akademii Tarnowskiej. Projekt obejmuje cały stos — od komponentów Angular po REST API w Node.js.',
                        en: 'Blog App is a complete web application built for the Web Application Technologies course at Tarnów Academy. The project covers the full stack — from Angular components to a Node.js REST API.',
                        ua: 'Blog App — це повноцінний вебзастосунок, реалізований у рамках курсу «Технології вебзастосунків» у Тарновській академії. Проєкт охоплює весь стек — від компонентів Angular до REST API на Node.js.' },
    'blog.goal.p2':   { pl: 'Każdy zalogowany użytkownik może pisać posty, komentować, oceniać i zapisywać ulubione wpisy. Administrator zarządza użytkownikami i treścią przez dedykowany panel.',
                        en: 'Every logged-in user can write posts, comment, rate and save favourite entries. The administrator manages users and content through a dedicated panel.',
                        ua: 'Кожен авторизований користувач може писати пости, коментувати, оцінювати та зберігати обрані записи. Адміністратор керує користувачами та контентом через окрему панель.' },
    'blog.gallery':   { pl: 'Aplikacja w akcji', en: 'App in action', ua: 'Застосунок у дії' },
    'blog.feat.1.title': { pl: 'CRUD postów',           en: 'Post CRUD', ua: 'CRUD постів' },
    'blog.feat.1.desc':  { pl: 'Tworzenie, edycja i usuwanie wpisów z uploadem obrazów (multer, max 5MB)', en: 'Create, edit and delete entries with image upload (multer, max 5MB)', ua: 'Створення, редагування та видалення записів із завантаженням зображень (multer, макс. 5MB)' },
    'blog.feat.2.title': { pl: 'Komentarze i oceny',    en: 'Comments & ratings', ua: 'Коментарі та оцінки' },
    'blog.feat.2.desc':  { pl: 'System komentarzy per post oraz oceny gwiazdkowe z liczeniem średniej', en: 'Per-post comments and star ratings with average calculation', ua: 'Система коментарів для кожного поста та зіркові оцінки з обчисленням середнього' },
    'blog.feat.3.title': { pl: 'Autoryzacja JWT',       en: 'JWT auth', ua: 'JWT-авторизація' },
    'blog.feat.3.desc':  { pl: 'Rejestracja, logowanie i ochrona tras przez AuthGuard i AdminGuard', en: 'Registration, login and route protection via AuthGuard and AdminGuard', ua: 'Реєстрація, вхід та захист маршрутів через AuthGuard і AdminGuard' },
    'blog.feat.4.title': { pl: 'Ulubione & aktywność',  en: 'Favourites & activity', ua: 'Обране та активність' },
    'blog.feat.4.desc':  { pl: 'Zapisywanie ulubionych postów i dziennik wszystkich akcji użytkownika', en: 'Save favourite posts and a log of all user actions', ua: 'Збереження обраних постів і журнал усіх дій користувача' },
    'blog.feat.5.title': { pl: 'Wyszukiwanie i filtry', en: 'Search & filters', ua: 'Пошук і фільтри' },
    'blog.feat.5.desc':  { pl: 'Filtrowanie po kategorii, tagach, autorze i dacie z paginacją listy', en: 'Filter by category, tags, author and date with list pagination', ua: 'Фільтрація за категорією, тегами, автором і датою з пагінацією списку' },
    'blog.feat.6.title': { pl: 'Dark / Light mode',    en: 'Dark / Light mode', ua: 'Темний / світлий режим' },
    'blog.feat.6.desc':  { pl: 'Przełącznik motywu z zapisem preferencji w localStorage', en: 'Theme switcher with preferences saved in localStorage', ua: 'Перемикач теми зі збереженням налаштувань у localStorage' },
    'blog.team.role':    { pl: 'Frontend · Backend · UI Design · Testy', en: 'Frontend · Backend · UI Design · Testing', ua: 'Frontend · Backend · UI-дизайн · Тестування' },
    'blog.routes.public': { pl: 'Publiczna', en: 'Public', ua: 'Публічний' },
    'blog.routes.auth':   { pl: 'Auth',      en: 'Auth', ua: 'Auth' },
    'blog.routes.admin':  { pl: 'Admin',     en: 'Admin', ua: 'Admin' },
    'blog.tech.1.name': { pl: 'Angular 17+', en: 'Angular 17+', ua: 'Angular 17+' },
    'blog.tech.1.desc': { pl: 'Standalone Components, lazy loading tras, Angular Universal (SSR), reactive forms.', en: 'Standalone Components, lazy route loading, Angular Universal (SSR), reactive forms.', ua: 'Standalone Components, лінива підвантаження маршрутів, Angular Universal (SSR), реактивні форми.' },
    'blog.tech.2.name': { pl: 'TypeScript', en: 'TypeScript', ua: 'TypeScript' },
    'blog.tech.2.desc': { pl: 'Silne typowanie — modele, serwisy, interfejsy. 41.9% kodu projektu.', en: 'Strong typing — models, services, interfaces. 41.9% of project code.', ua: 'Строга типізація — моделі, сервіси, інтерфейси. 41.9% коду проєкту.' },
    'blog.tech.3.name': { pl: 'SCSS', en: 'SCSS', ua: 'SCSS' },
    'blog.tech.3.desc': { pl: 'Globalne style, zmienne CSS, media queries — pełna responsywność i dark mode.', en: 'Global styles, CSS variables, media queries — full responsiveness and dark mode.', ua: 'Глобальні стилі, CSS-змінні, медіазапити — повна адаптивність і темний режим.' },
    'blog.tech.4.name': { pl: 'Node.js + Express', en: 'Node.js + Express', ua: 'Node.js + Express' },
    'blog.tech.4.desc': { pl: 'RESTful API — endpointy dla postów, użytkowników, uploadów i aktywności.', en: 'RESTful API — endpoints for posts, users, uploads and activity.', ua: 'RESTful API — ендпоінти для постів, користувачів, завантажень і активності.' },
    'blog.tech.5.name': { pl: 'JWT Auth', en: 'JWT Auth', ua: 'JWT Auth' },
    'blog.tech.5.desc': { pl: 'Tokeny 24h, role user/admin, walidacja przy każdym zapytaniu do API.', en: '24h tokens, user/admin roles, validation on every API request.', ua: 'Токени на 24 години, ролі user/admin, валідація при кожному запиті до API.' },
    'blog.tech.6.name': { pl: 'Multer', en: 'Multer', ua: 'Multer' },
    'blog.tech.6.desc': { pl: 'Obsługa multipart upload — obrazy do 5MB zapisywane w backend/uploads/.', en: 'Multipart upload support — images up to 5MB saved in backend/uploads/.', ua: 'Підтримка multipart-завантаження — зображення до 5MB зберігаються в backend/uploads/.' },
    'blog.tech.7.name': { pl: 'JSON Storage', en: 'JSON Storage', ua: 'JSON Storage' },
    'blog.tech.7.desc': { pl: 'Dane postów i aktywności przechowywane w posts.json i activity.json.', en: 'Post and activity data stored in posts.json and activity.json.', ua: 'Дані постів і активності зберігаються у posts.json та activity.json.' },
    'blog.tech.8.name': { pl: 'Angular Universal', en: 'Angular Universal', ua: 'Angular Universal' },
    'blog.tech.8.desc': { pl: 'Server-Side Rendering przez main.server.ts — lepsza wydajność i SEO.', en: 'Server-Side Rendering via main.server.ts — better performance and SEO.', ua: 'Server-Side Rendering через main.server.ts — краща продуктивність і SEO.' },
    'blog.arch.1.title': { pl: 'Autoryzacja — JWT Guards', en: 'Authorization — JWT Guards', ua: 'Авторизація — JWT Guards' },
    'blog.arch.1.desc': { pl: 'AuthGuard sprawdza ważność tokena JWT przed wejściem na chronioną trasę. AdminGuard dodatkowo weryfikuje rolę użytkownika z payloadu tokena.', en: 'AuthGuard checks JWT validity before entering a protected route. AdminGuard also verifies the user role from the token payload.', ua: 'AuthGuard перевіряє валідність JWT-токена перед доступом до захищеного маршруту. AdminGuard додатково перевіряє роль користувача з payload токена.' },
    'blog.arch.2.title': { pl: 'System ocen (Rating)', en: 'Rating system', ua: 'Система оцінок (Rating)' },
    'blog.arch.2.desc': { pl: 'RatingService przechowuje wszystkie głosy per post w localStorage. Średnia obliczana dynamicznie — wyświetlana jako gwiazdki z liczbą głosów.', en: 'RatingService stores all votes per post in localStorage. The average is calculated dynamically — shown as stars with vote count.', ua: 'RatingService зберігає всі голоси для кожного поста в localStorage. Середнє обчислюється динамічно — відображається зірочками з кількістю голосів.' },
    'blog.arch.3.title': { pl: 'Upload plików', en: 'File upload', ua: 'Завантаження файлів' },
    'blog.arch.3.desc': { pl: 'Multer obsługuje multipart/form-data. Walidacja MIME tylko do obrazów, limit 5MB, sanityzacja nazwy pliku przed zapisem na dysk.', en: 'Multer handles multipart/form-data. MIME validation for images only, 5MB limit, filename sanitization before disk save.', ua: 'Multer обробляє multipart/form-data. Валідація MIME лише для зображень, ліміт 5MB, санітизація імені файлу перед збереженням на диск.' },
    'blog.arch.4.title': { pl: 'Dziennik aktywności', en: 'Activity log', ua: 'Журнал активності' },
    'blog.arch.4.desc': { pl: 'Każda akcja (login, create_post, delete_post) zapisywana z timestampem do activity.json. Użytkownik widzi swój feed akcji w widoku Aktywność.', en: 'Each action (login, create_post, delete_post) is saved with a timestamp to activity.json. The user sees their action feed in the Activity view.', ua: 'Кожна дія (login, create_post, delete_post) зберігається з міткою часу в activity.json. Користувач бачить стрічку своїх дій у розділі «Активність».' },
    'blog.arch.5.title': { pl: 'Paginacja — custom pipe', en: 'Pagination — custom pipe', ua: 'Пагінація — власний pipe' },
    'blog.arch.5.desc': { pl: 'Niestandardowy Angular pipe dzieli listę postów na strony. Zastosowany w BlogHomeComponent bez dodatkowych bibliotek.', en: 'Custom Angular pipe splits the post list into pages. Used in BlogHomeComponent without extra libraries.', ua: 'Власний Angular pipe розбиває список постів на сторінки. Використовується в BlogHomeComponent без додаткових бібліотек.' },
    'blog.arch.6.title': { pl: 'Dark / Light Mode', en: 'Dark / Light Mode', ua: 'Темний / світлий режим' },
    'blog.arch.6.desc': { pl: 'ThemeService przełącza klasę na body i zapisuje preferencje w localStorage. Zmiany CSS przez custom properties — brak przeładowania strony.', en: 'ThemeService toggles a class on body and saves preferences to localStorage. CSS changes via custom properties — no page reload.', ua: 'ThemeService перемикає клас на body та зберігає налаштування в localStorage. Зміни CSS через custom properties — без перезавантаження сторінки.' },

    /* ════ OSK EXPERT ════ */
    'osk.category':  { pl: 'Web Development · Freelance', en: 'Web Development · Freelance', ua: 'Веброзробка · Фриланс' },
    'osk.tagline':   { pl: 'Kompletna strona internetowa dla ośrodka szkolenia kierowców — od projektu UI po wdrożenie. Panel administracyjny, system aktualności, terminy kursów i statystyki odwiedzin dla właściciela.',
                       en: 'Complete website for a driving school — from UI design to deployment. Admin panel, news system, course dates and visit statistics for the owner.',
                       ua: 'Повноцінний вебсайт для автошколи — від UI-дизайну до розгортання. Панель адміністратора, система новин, дати курсів і статистика відвідувань для власника.' },
    'osk.goal.h2':   { pl: 'Freelance dla<br><span class="grad-green">prawdziwego klienta</span>', en: 'Freelance for<br><span class="grad-green">a real client</span>', ua: 'Фриланс для<br><span class="grad-green">реального клієнта</span>' },
    'osk.goal.p1':   { pl: 'Właściciel OSK Expert potrzebował nowoczesnej strony internetowej, która przyciągnie nowych kursantów i jednocześnie ułatwi codzienne zarządzanie treścią bez pomocy programisty.',
                       en: 'The owner of OSK Expert needed a modern website to attract new students while making daily content management easy without developer help.',
                       ua: 'Власнику OSK Expert потрібен був сучасний вебсайт, який приваблюватиме нових курсантів і водночас спростить щоденне керування контентом без допомоги програміста.' },
    'osk.goal.p2':   { pl: 'Zaprojektowałem i wdrożyłem całą stronę od zera — projekt graficzny, kodowanie frontendu, backend w PHP oraz panel administracyjny dostępny tylko dla właściciela.',
                       en: 'I designed and deployed the entire site from scratch — visual design, frontend coding, PHP backend and an admin panel accessible only to the owner.',
                       ua: 'Я спроєктував і розгорнув увесь сайт з нуля — графічний дизайн, кодування frontend, backend на PHP та панель адміністратора, доступну лише власнику.' },
    'osk.gallery':   { pl: 'Strona w akcji', en: 'Site in action', ua: 'Сайт у дії' },
    'osk.live.btn':  { pl: 'Zobacz na żywo', en: 'View live', ua: 'Переглянути наживо' },
    'osk.feat.1.title': { pl: 'Zarządzanie kursami',  en: 'Course management', ua: 'Керування курсами' },
    'osk.feat.1.desc':  { pl: 'Admin ustawia daty: poprzedniego, najbliższego i kolejnego kursu — automatycznie aktualizują się na stronie', en: 'Admin sets previous, nearest and next course dates — they update automatically on the site', ua: 'Адміністратор встановлює дати: попереднього, найближчого та наступного курсу — вони автоматично оновлюються на сайті' },
    'osk.feat.2.title': { pl: 'System aktualności',   en: 'News system', ua: 'Система новин' },
    'osk.feat.2.desc':  { pl: 'Właściciel dodaje posty z panelu — publikacja bez znajomości kodu', en: 'Owner adds posts from the panel — publishing without coding knowledge', ua: 'Власник додає пости з панелі — публікація без знання коду' },
    'osk.feat.3.title': { pl: 'Statystyki odwiedzin', en: 'Visit statistics', ua: 'Статистика відвідувань' },
    'osk.feat.3.desc':  { pl: 'Panel pokazuje liczbę odwiedzin w danym dniu — prosta analityka własna', en: 'Panel shows daily visit count — simple custom analytics', ua: 'Панель показує кількість відвідувань за день — проста власна аналітика' },
    'osk.feat.4.title': { pl: 'Timeline "Jak zacząć"', en: '"How to start" timeline', ua: 'Таймлайн «Як почати»' },
    'osk.feat.4.desc':  { pl: 'Krok po kroku: Zapisz się → PKK → Kurs → Egzamin', en: 'Step by step: Sign up → PKK → Course → Exam', ua: 'Крок за кроком: Запишись → PKK → Курс → Іспит' },
    'osk.feat.5.title': { pl: 'FAQ accordion',        en: 'FAQ accordion', ua: 'FAQ-акордеон' },
    'osk.feat.5.desc':  { pl: 'Najczęściej zadawane pytania w formie rozwijalnych kart — zmniejsza liczbę telefonów do biura', en: 'Frequently asked questions as expandable cards — reduces calls to the office', ua: 'Часті запитання у формі розкривних карток — зменшує кількість дзвінків до офісу' },
    'osk.feat.6.title': { pl: 'Responsywny design',   en: 'Responsive design', ua: 'Адаптивний дизайн' },
    'osk.feat.6.desc':  { pl: 'Strona działa płynnie na telefonach, tabletach i komputerach', en: 'The site works smoothly on phones, tablets and computers', ua: 'Сайт плавно працює на телефонах, планшетах і комп\'ютерах' },
    'osk.scope.label': { pl: 'Zakres prac',            en: 'Scope of work', ua: 'Обсяг робіт' },
    'osk.scope.title': { pl: 'Co zostało dostarczone', en: 'What was delivered', ua: 'Що було реалізовано' },
    'osk.deliv.1.title': { pl: 'Projekt UI/UX',  en: 'UI/UX Design', ua: 'UI/UX дизайн' },
    'osk.deliv.1.desc':  { pl: 'Cały layout pod brand klienta — niebieska paleta, czytelna typografia, ikony sekcji', en: 'Full layout for the client brand — blue palette, readable typography, section icons', ua: 'Увесь макет під бренд клієнта — синя палітра, читабельна типографіка, іконки розділів' },
    'osk.deliv.2.title': { pl: 'Frontend',       en: 'Frontend', ua: 'Frontend' },
    'osk.deliv.2.desc':  { pl: 'HTML, CSS, JS — pełna responsywność, animacje, płynna nawigacja z ikonami', en: 'HTML, CSS, JS — full responsiveness, animations, smooth navigation with icons', ua: 'HTML, CSS, JS — повна адаптивність, анімації, плавна навігація з іконками' },
    'osk.deliv.3.title': { pl: 'Backend + DB',   en: 'Backend + DB', ua: 'Backend + БД' },
    'osk.deliv.3.desc':  { pl: 'PHP + MySQL: aktualności, kursy, licznik odwiedzin, panel admina', en: 'PHP + MySQL: news, courses, visit counter, admin panel', ua: 'PHP + MySQL: новини, курси, лічильник відвідувань, панель адміністратора' },
    'osk.deliv.4.title': { pl: 'Wdrożenie',      en: 'Deployment', ua: 'Розгортання' },
    'osk.deliv.4.desc':  { pl: 'Konfiguracja hostingu, domeny, SSL — strona live na osk-expert.com.pl', en: 'Hosting, domain, SSL configuration — site live at osk-expert.com.pl', ua: 'Налаштування хостингу, домену, SSL — сайт у продакшені на osk-expert.com.pl' },
    'osk.team.role': { pl: 'Projekt UI · Frontend · Backend · Wdrożenie', en: 'UI Design · Frontend · Backend · Deployment', ua: 'UI-дизайн · Frontend · Backend · Розгортання' },
    'osk.client.role': { pl: 'Klient — Ośrodek Szkolenia Kierowców', en: 'Client — Driving School', ua: 'Клієнт — автошкола' },
    'osk.tech.1.name': { pl: 'HTML5 / CSS3', en: 'HTML5 / CSS3', ua: 'HTML5 / CSS3' },
    'osk.tech.1.desc': { pl: 'Semantyczny markup i nowoczesny CSS — Flexbox, Grid, animacje, custom properties.', en: 'Semantic markup and modern CSS — Flexbox, Grid, animations, custom properties.', ua: 'Семантична розмітка та сучасний CSS — Flexbox, Grid, анімації, custom properties.' },
    'osk.tech.2.name': { pl: 'JavaScript', en: 'JavaScript', ua: 'JavaScript' },
    'osk.tech.2.desc': { pl: 'Vanilla JS — hamburger menu, FAQ accordion, walidacja formularzy, lightbox galerii.', en: 'Vanilla JS — hamburger menu, FAQ accordion, form validation, gallery lightbox.', ua: 'Vanilla JS — гамбургер-меню, FAQ-акордеон, валідація форм, lightbox галереї.' },
    'osk.tech.3.name': { pl: 'PHP', en: 'PHP', ua: 'PHP' },
    'osk.tech.3.desc': { pl: 'Backend strony, logika panelu admina, routing i obsługa sesji autoryzacji.', en: 'Site backend, admin panel logic, routing and authentication session handling.', ua: 'Backend сайту, логіка панелі адміністратора, маршрутизація та обробка сесій авторизації.' },
    'osk.tech.4.name': { pl: 'MySQL', en: 'MySQL', ua: 'MySQL' },
    'osk.tech.4.desc': { pl: 'Baza danych dla aktualności, dat kursów i dziennych liczników odwiedzin.', en: 'Database for news, course dates and daily visit counters.', ua: 'База даних для новин, дат курсів і денних лічильників відвідувань.' },
    'osk.tech.5.name': { pl: 'Panel Admina', en: 'Admin Panel', ua: 'Панель адміністратора' },
    'osk.tech.5.desc': { pl: 'Chroniony hasłem interfejs — zarządzanie treścią bez dotykania kodu przez klienta.', en: 'Password-protected interface — content management without touching code.', ua: 'Захищений паролем інтерфейс — керування контентом без торкання коду клієнтом.' },
    'osk.tech.6.name': { pl: 'cPanel / Hosting', en: 'cPanel / Hosting', ua: 'cPanel / Хостинг' },
    'osk.tech.6.desc': { pl: 'Wdrożenie na hostingu współdzielonym, konfiguracja domeny i certyfikat SSL.', en: 'Deployed on shared hosting, domain configuration and SSL setup.', ua: 'Розгортання на спільному хостингу, налаштування домену та SSL-сертифіката.' },
    'osk.arch.1.title': { pl: 'Terminy kursów — 3 daty', en: 'Course dates — 3 timestamps', ua: 'Дати курсів — 3 дати' },
    'osk.arch.1.desc': { pl: 'Admin zarządza trzema datami: poprzedni, najbliższy i kolejny kurs. Najbliższy termin pojawia się jako pływający przycisk na każdej podstronie.', en: 'Admin manages three dates: previous, next and upcoming course. The nearest date appears as a floating button on every subpage.', ua: 'Адміністратор керує трьома датами: попередній, найближчий та наступний курс. Найближча дата з\'являється як плаваюча кнопка на кожній підсторінці.' },
    'osk.arch.2.title': { pl: 'System aktualności', en: 'News system', ua: 'Система новин' },
    'osk.arch.2.desc': { pl: 'Formularz w panelu admina zapisuje post (tytuł, treść, zdjęcie) do MySQL. Strona wyświetla posty posortowane od najnowszych.', en: 'The admin panel form saves a post (title, content, image) to MySQL. The site displays posts sorted newest first.', ua: 'Форма в панелі адміністратора зберігає пост (заголовок, зміст, зображення) у MySQL. Сайт показує пости, відсортовані від найновіших.' },
    'osk.arch.3.title': { pl: 'Licznik odwiedzin', en: 'Visit counter', ua: 'Лічильник відвідувань' },
    'osk.arch.3.desc': { pl: 'Przy każdym wejściu na stronę PHP upsertuje rekord dla dzisiejszej daty. Panel admina wyświetla dzienny wykres.', en: 'On each page visit PHP upserts a record for today\u2019s date. The admin panel shows a daily chart.', ua: 'При кожному відвідуванні сторінки PHP оновлює запис для сьогоднішньої дати. Панель адміністратора показує денний графік.' },
    'osk.arch.4.title': { pl: 'Autoryzacja admina', en: 'Admin authorization', ua: 'Авторизація адміністратора' },
    'osk.arch.4.desc': { pl: 'Panel dostępny jest tylko po zalogowaniu. Sesja trwa do wylogowania lub zamknięcia przeglądarki.', en: 'The panel is available only after login. The session lasts until logout or browser close.', ua: 'Панель доступна лише після входу. Сесія триває до виходу або закриття браузера.' },
    'osk.arch.5.title': { pl: 'FAQ Accordion', en: 'FAQ Accordion', ua: 'FAQ-акордеон' },
    'osk.arch.5.desc': { pl: 'Najczęściej zadawane pytania w formie rozwijalnych kart — zmniejsza liczbę telefonów do biura.', en: 'Frequently asked questions as expandable cards — reduces office phone calls.', ua: 'Часті запитання у формі розкривних карток — зменшує кількість дзвінків до офісу.' },
    'osk.arch.6.title': { pl: 'Timeline "Jak zacząć"', en: 'Timeline "How to start"', ua: 'Таймлайн «Як почати»' },
    'osk.arch.6.desc': { pl: 'Krok po kroku: Zapisz się → PKK → Kurs → Egzamin', en: 'Step by step: Sign up → PKK → Course → Exam', ua: 'Крок за кроком: Запишись → PKK → Курс → Іспит' },

    /* ════ UALINGO ════ */
    'ualingo.category': { pl: 'Mobile Development · Android', en: 'Mobile Development · Android', ua: 'Мобільна розробка · Android' },
    'ualingo.tagline':  { pl: 'Aplikacja mobilna Android do nauki języka ukraińskiego — interaktywne quizy, gry słowne, memy edukacyjne i system autoryzacji Firebase. Duolingo-like experience w natywnym Javie.',
                          en: 'Android mobile app for learning Ukrainian — interactive quizzes, word games, educational memes and Firebase auth. Duolingo-like experience in native Java.',
                          ua: 'Android-застосунок для вивчення української мови — інтерактивні тести, словесні ігри, навчальні меми та система авторизації Firebase. Duolingo-подібний досвід на нативній Java.' },
    'ualingo.goal.h2':  { pl: 'Nauka języka<br><span class="ualingo-grad">przez zabawę</span>', en: 'Language learning<br><span class="ualingo-grad">through play</span>', ua: 'Вивчення мови<br><span class="ualingo-grad">через гру</span>' },
    'ualingo.goal.p1':  { pl: 'UAlingo to natywna aplikacja Android do nauki języka ukraińskiego, zbudowana w Javie z wykorzystaniem Firebase. Projekt był realizowany na Akademii Tarnowskiej jako kompleksowa aplikacja mobilna.',
                          en: 'UAlingo is a native Android app for learning Ukrainian, built in Java with Firebase. The project was developed at Tarnów Academy as a comprehensive mobile application.',
                          ua: 'UAlingo — це нативний Android-застосунок для вивчення української мови, створений на Java з використанням Firebase. Проєкт реалізовано в Тарновській академії як комплексний мобільний застосунок.' },
    'ualingo.goal.p2':  { pl: 'Inspirowana Duolingo — łączy quizy z timerem, gry słowne, memy z autentycznym językiem ukraińskim i system postępu, który motywuje do codziennej nauki.',
                          en: 'Inspired by Duolingo — combines timed quizzes, word games, authentic Ukrainian memes and a progress system that motivates daily learning.',
                          ua: 'Натхненний Duolingo — поєднує тести з таймером, словесні ігри, автентичні українські меми та систему прогресу, що мотивує до щоденного навчання.' },
    'ualingo.gallery':  { pl: 'Aplikacja w akcji', en: 'App in action', ua: 'Застосунок у дії' },
    'ualingo.feat.1.title': { pl: '10 tematów, 120 pytań',  en: '10 topics, 120 questions', ua: '10 тем, 120 питань' },
    'ualingo.feat.1.desc':  { pl: 'Od pozdrowień po hotele — każdy temat ma 12 pytań quizowych z 4 opcjami', en: 'From greetings to hotels — each topic has 12 quiz questions with 4 options', ua: 'Від привітань до готелів — кожна тема має 12 тестових питань із 4 варіантами' },
    'ualingo.feat.2.title': { pl: 'Quiz z timerem 60s',     en: '60s timed quiz', ua: 'Тест із таймером 60с' },
    'ualingo.feat.2.desc':  { pl: 'CountDownTimer na każde pytanie, animacje kolorów — zielony/czerwony', en: 'CountDownTimer per question, colour animations — green/red', ua: 'CountDownTimer на кожне питання, кольорові анімації — зелений/червоний' },
    'ualingo.feat.3.title': { pl: 'Word Search',            en: 'Word Search', ua: 'Word Search' },
    'ualingo.feat.3.desc':  { pl: 'Interaktywna siatka 7×6 z literami cyrylicy — szukaj ukraińskich słów', en: 'Interactive 7×6 grid with Cyrillic letters — find Ukrainian words', ua: 'Інтерактивна сітка 7×6 з кириличними літерами — шукай українські слова' },
    'ualingo.feat.4.title': { pl: 'Memy edukacyjne',        en: 'Educational memes', ua: 'Навчальні меми' },
    'ualingo.feat.4.desc':  { pl: 'Nauka przez autentyczne ukraińskie memy i klipy — naturalny kontekst językowy', en: 'Learn through authentic Ukrainian memes and clips — natural language context' , ua: 'Навчання через автентичні українські меми та кліпи — природний мовний контекст' },
    'ualingo.feat.5.title': { pl: 'Dwujęzyczność',          en: 'Bilingual support', ua: 'Двомовність' },
    'ualingo.feat.5.desc':  { pl: 'Dynamiczne przełączanie między wersją ukraińską i angielską aplikacji', en: 'Dynamic switching between Ukrainian and English versions of the app', ua: 'Динамічне перемикання між українською та англійською версіями застосунку' },
    'ualingo.feat.6.title': { pl: 'Firebase Auth',          en: 'Firebase Auth', ua: 'Firebase Auth' },
    'ualingo.feat.6.desc':  { pl: 'Logowanie email/hasło oraz Google OAuth 2.0, reset hasła, persystencja sesji', en: 'Email/password login and Google OAuth 2.0, password reset, session persistence', ua: 'Вхід через email/пароль та Google OAuth 2.0, скидання пароля, збереження сесії' },
    'ualingo.screens.label': { pl: 'Ekrany', en: 'Screens', ua: 'Екрани' },
    'ualingo.screens.title': { pl: '18 Activities', en: '18 Activities', ua: '18 Activities' },
    'ualingo.tech.1.name': { pl: 'Java 11', en: 'Java 11', ua: 'Java 11' },
    'ualingo.tech.1.desc': { pl: '100% kodu aplikacji — Activity-based architecture, MVC-like pattern.', en: '100% app code — Activity-based architecture, MVC-like pattern.', ua: '100% коду застосунку — архітектура на основі Activity, MVC-подібний патерн.' },
    'ualingo.tech.2.name': { pl: 'Android SDK 35', en: 'Android SDK 35', ua: 'Android SDK 35' },
    'ualingo.tech.2.desc': { pl: 'Target API 35 (Android 15), minSdk 23 (Android 6.0) — szeroka kompatybilność.', en: 'Target API 35 (Android 15), minSdk 23 (Android 6.0) — wide compatibility.', ua: 'Target API 35 (Android 15), minSdk 23 (Android 6.0) — широка сумісність.' },
    'ualingo.tech.3.name': { pl: 'Firebase Auth', en: 'Firebase Auth', ua: 'Firebase Auth' },
    'ualingo.tech.3.desc': { pl: 'Email/hasło + Google OAuth 2.0. Persystencja sesji i reset hasła.', en: 'Email/password + Google OAuth 2.0. Session persistence and password reset.', ua: 'Email/пароль + Google OAuth 2.0. Збереження сесії та скидання пароля.' },
    'ualingo.tech.4.name': { pl: 'Firebase Analytics', en: 'Firebase Analytics', ua: 'Firebase Analytics' },
    'ualingo.tech.4.desc': { pl: 'Analityka zdarzeń w aplikacji — śledzenie aktywności użytkowników.', en: 'In-app event analytics — tracking user activity.', ua: 'Аналітика подій у застосунку — відстеження активності користувачів.' },
    'ualingo.tech.5.name': { pl: 'Material Design', en: 'Material Design', ua: 'Material Design' },
    'ualingo.tech.5.desc': { pl: 'Material 1.12.0 — komponenty UI, ConstraintLayout, SwipeRefreshLayout.', en: 'Material 1.12.0 — UI components, ConstraintLayout, SwipeRefreshLayout.', ua: 'Material 1.12.0 — UI-компоненти, ConstraintLayout, SwipeRefreshLayout.' },
    'ualingo.tech.6.name': { pl: 'Gradle 8.0+', en: 'Gradle 8.0+', ua: 'Gradle 8.0+' },
    'ualingo.tech.6.desc': { pl: 'System budowania, ProGuard obfuskacja dla release build, vcpkg zależności.', en: 'Build system, ProGuard obfuscation for release builds, dependency management.', ua: 'Система збірки, обфускація ProGuard для release-збірок, керування залежностями.' },
    'ualingo.arch.1.title': { pl: 'Logowanie Firebase', en: 'Firebase login', ua: 'Вхід через Firebase' },
    'ualingo.arch.1.desc': { pl: 'Obsługa email/hasło oraz Google OAuth 2.0 przez Firebase Authentication. Po zalogowaniu sesja jest persystowana — użytkownik nie musi logować się przy każdym uruchomieniu.', en: 'Email/password and Google OAuth 2.0 handled by Firebase Authentication. Session is persisted — the user does not need to log in on every launch.', ua: 'Email/пароль і Google OAuth 2.0 обробляються через Firebase Authentication. Сесія зберігається — користувачу не потрібно входити при кожному запуску.' },
    'ualingo.arch.2.title': { pl: 'Quiz — timer 60 sekund', en: 'Quiz — 60 second timer', ua: 'Тест — таймер 60 секунд' },
    'ualingo.arch.2.desc': { pl: 'CountDownTimer odlicza 60 sekund na każde pytanie. Po upływie czasu odpowiedzi są blokowane. Animacja kolorów ValueAnimator wizualizuje poprawną/błędną odpowiedź.', en: 'CountDownTimer counts 60 seconds for each question. When time runs out answers are locked. ValueAnimator color animation shows correct/wrong answers.', ua: 'CountDownTimer відлічує 60 секунд на кожне питання. Після закінчення часу відповіді блокуються. Кольорова анімація ValueAnimator показує правильну/неправильну відповідь.' },
    'ualingo.arch.3.title': { pl: 'Animacja odpowiedzi', en: 'Answer animation', ua: 'Анімація відповіді' },
    'ualingo.arch.3.desc': { pl: 'ValueAnimator płynnie zmienia kolor tekstu odpowiedzi z białego na zielony (poprawna) lub czerwony (błędna) w czasie 500ms.', en: 'ValueAnimator smoothly changes answer text color from white to green (correct) or red (wrong) over 500ms.', ua: 'ValueAnimator плавно змінює колір тексту відповіді з білого на зелений (правильно) або червоний (неправильно) за 500мс.' },
    'ualingo.arch.4.title': { pl: 'Przełączanie języków', en: 'Language switch', ua: 'Перемикання мов' },
    'ualingo.arch.4.desc': { pl: 'Oddzielne Activities dla wersji ukraińskiej i angielskiej. Przycisk flagi w menu głównym startuje nową Activity z odpowiednim językiem.', en: 'Separate Activities for Ukrainian and English versions. The flag button in the main menu starts a new Activity with the chosen language.', ua: 'Окремі Activities для української та англійської версій. Кнопка з прапором у головному меню запускає нову Activity з обраною мовою.' },
    'ualingo.arch.5.title': { pl: 'Word Search — siatka 7×6', en: 'Word Search — 7×6 grid', ua: 'Word Search — сітка 7×6' },
    'ualingo.arch.5.desc': { pl: 'Interaktywna plansza z literami cyrylicy. Użytkownik zaznacza litery po kolei — po znalezieniu słowa licznik się zwiększa i słowo zostaje podświetlone.', en: 'Interactive Cyrillic board. The user selects letters in order — when a word is found the counter increases and the word is highlighted.', ua: 'Інтерактивна дошка з кириличними літерами. Користувач обирає літери по черзі — при знаходженні слова лічильник збільшується, а слово підсвічується.' },
    'ualingo.arch.6.title': { pl: '18 Activities — nawigacja', en: '18 Activities — navigation', ua: '18 Activities — навігація' },
    'ualingo.arch.6.desc': { pl: 'Dolny pasek nawigacyjny z 3 ikonami (Dom, Gry, Profil) dostępny na każdym ekranie. Intent-based routing między wszystkimi 18 Activities.', en: 'Bottom navigation bar with 3 icons (Home, Games, Profile) available on every screen. Intent-based routing between all 18 Activities.', ua: 'Нижня навігаційна панель із 3 іконками (Дім, Ігри, Профіль) доступна на кожному екрані. Intent-маршрутизація між усіма 18 Activities.' },
    /* ════ IOT APP ════ */
    'iot.category': { pl: 'Mobile Development · React Native · IoT', en: 'Mobile Development · React Native · IoT', ua: 'Мобільна розробка · React Native · IoT' },
    'iot.tagline':  { pl: 'Cross-platform aplikacja mobilna do sterowania urządzeniami smart home — dodawaj lampy, rolety i inne urządzenia, przypisuj im miejsce, kolor i komendy sterujące.',
              en: 'Cross-platform mobile app for smart home control — add lights, blinds and other devices, assign room, color and control commands.',
              ua: 'Крос-платформний мобільний застосунок для керування пристроями розумного дому — додавай лампи, ролети та інші пристрої, призначай приміщення, колір і команди керування.' },
    'iot.goal.h2':  { pl: 'Smart home<br/><span class="iot-grad">w zasięgu ręki</span>', en: 'Smart home<br/><span class="iot-grad">at your fingertips</span>', ua: 'Розумний дім<br/><span class="iot-grad">у кишені</span>' },
    'iot.goal.p1':  { pl: 'IoT App to cross-platform aplikacja mobilna do sterowania urządzeniami smart home — lampami, roletami i innymi urządzeniami IoT. Użytkownik sam definiuje urządzenia, nadaje im nazwy, przypisuje pomieszczenie, komendy sterujące i kolor identyfikacyjny.',
              en: 'IoT App is a cross-platform mobile application for controlling smart home devices — lights, blinds and other IoT gadgets. Users define devices, give them names, assign rooms, control commands and an identifying color.',
              ua: 'IoT App — крос-платформний мобільний застосунок для керування пристроями розумного дому — лампами, ролетами та іншими IoT-пристроями. Користувач сам визначає пристрої, дає їм назви, призначає приміщення, команди керування та ідентифікаційний колір.' },
    'iot.goal.p2':  { pl: 'Dolny pasek nawigacyjny przełącza między widokiem urządzeń (Devices) a konfiguracją połączenia (Connection). Aplikacja działa natywnie na Androidzie i iOS z jednej bazy kodu React Native.',
              en: 'The bottom navigation switches between Devices view and Connection settings. The app runs natively on Android and iOS from a single React Native codebase.',
              ua: 'Нижня панель навігації перемикає між переглядом пристроїв (Devices) та налаштуванням підключення (Connection). Застосунок працює нативно на Android та iOS з єдиної кодової бази React Native.' },
    'iot.gallery':  { pl: 'Aplikacja w akcji', en: 'App in action', ua: 'Застосунок у дії' },
    'iot.feat.1.title': { pl: 'Cross-platform', en: 'Cross-platform', ua: 'Крос-платформність' },
    'iot.feat.1.desc':  { pl: 'Jedna baza kodu działa natywnie na Androidzie i iOS — React Native 0.83.1', en: 'One codebase runs natively on Android and iOS — React Native 0.83.1', ua: 'Одна кодова база працює нативно на Android та iOS — React Native 0.83.1' },
    'iot.feat.2.title': { pl: 'Dodawanie urządzeń', en: 'Add devices', ua: 'Додавання пристроїв' },
    'iot.feat.2.desc':  { pl: 'Formularz z nazwą (np. Lampa), miejscem (np. Kuchnia) i komendą sterującą', en: 'Form with name (e.g. Lamp), location (e.g. Kitchen) and control command', ua: 'Форма з назвою (напр., Лампа), місцем (напр., Кухня) та командою керування' },
    'iot.feat.3.title': { pl: 'Wybór koloru', en: 'Color selection', ua: 'Вибір кольору' },
    'iot.feat.3.desc':  { pl: '8 pastelowych kolorów do oznaczenia urządzeń — szybka identyfikacja na liście', en: '8 pastel colours to mark devices — quick identification in the list', ua: '8 пастельних кольорів для позначення пристроїв — швидка ідентифікація у списку' },
    'iot.feat.4.title': { pl: 'Siatka urządzeń', en: 'Devices grid', ua: 'Сітка пристроїв' },
    'iot.feat.4.desc':  { pl: 'Przejrzysty grid z kafelkami — każde urządzenie z nazwą, miejscem i kolorem tła', en: 'Clear grid of tiles — each device shows name, room and background colour', ua: 'Прозора сітка плиток — кожен пристрій із назвою, приміщенням і кольором фону' },
    'iot.feat.5.title': { pl: 'Usuwanie urządzeń', en: 'Remove devices', ua: 'Видалення пристроїв' },
    'iot.feat.5.desc':  { pl: 'Przycisk ✕ na każdym kafelku do szybkiego usunięcia urządzenia z listy', en: 'A ✕ button on each tile for quick removal from the list', ua: 'Кнопка ✕ на кожній плитці для швидкого видалення пристрою зі списку' },
    'iot.feat.6.title': { pl: 'Zakładka Connection', en: 'Connection tab', ua: 'Вкладка Connection' },
    'iot.feat.6.desc':  { pl: 'Dolny pasek nawigacyjny — Devices i Connection do konfiguracji połączenia IoT', en: 'Bottom navigation — Devices and Connection for configuring IoT connection', ua: 'Нижня навігація — Devices та Connection для налаштування IoT-з\'єднання' },
    'iot.tech.1.name': { pl: 'React Native', en: 'React Native', ua: 'React Native' },
    'iot.tech.1.desc': { pl: 'Framework mobilny — Android i iOS z jednej bazy kodu.', en: 'Mobile framework — Android and iOS from one codebase.', ua: 'Мобільний фреймворк — Android та iOS з єдиної кодової бази.' },
    'iot.tech.2.name': { pl: 'TypeScript', en: 'TypeScript', ua: 'TypeScript' },
    'iot.tech.2.desc': { pl: 'Statyczna typizacja i lepsze podpowiedzi IDE.', en: 'Static typing and better IDE hints.', ua: 'Статична типізація та кращі підказки IDE.' },
    'iot.tech.3.name': { pl: 'Kotlin / Swift', en: 'Kotlin / Swift', ua: 'Kotlin / Swift' },
    'iot.tech.3.desc': { pl: 'Warstwy natywne dla Androida i iOS.', en: 'Native layers for Android and iOS.', ua: 'Нативні шари для Android та iOS.' },
    'iot.tech.4.name': { pl: 'Metro Bundler', en: 'Metro Bundler', ua: 'Metro Bundler' },
    'iot.tech.4.desc': { pl: 'JavaScript bundler zoptymalizowany dla React Native.', en: 'JavaScript bundler optimized for React Native.', ua: 'JavaScript-бандлер, оптимізований для React Native.' },
    'iot.tech.5.name': { pl: 'Jest', en: 'Jest', ua: 'Jest' },
    'iot.tech.5.desc': { pl: 'Unit testy i snapshoty.', en: 'Unit tests and snapshots.', ua: 'Unit-тести та знімки (snapshots).' },
    'iot.tech.6.name': { pl: 'TypeScript tooling', en: 'TypeScript tooling', ua: 'Інструментарій TypeScript' },
    'iot.tech.6.desc': { pl: 'ESLint, Prettier i konfiguracja TS.', en: 'ESLint, Prettier and TS configuration.', ua: 'ESLint, Prettier та конфігурація TS.' },
    'iot.arch.1.title': { pl: 'Punkt wejścia — index.js', en: 'Entry point — index.js', ua: 'Точка входу — index.js' },
    'iot.arch.1.desc':  { pl: 'Aplikacja startuje z index.js, który rejestruje główny komponent App w React Native runtime.', en: 'The app starts from index.js which registers the main App component in the React Native runtime.', ua: 'Застосунок стартує з index.js, який реєструє головний компонент App у середовищі виконання React Native.' },
    'iot.arch.2.title': { pl: 'Dark Mode — useColorScheme', en: 'Dark Mode — useColorScheme', ua: 'Темний режим — useColorScheme' },
    'iot.arch.2.desc':  { pl: 'Hook useColorScheme() odczytuje motyw systemowy i dostosowuje StatusBar oraz style komponentów.', en: 'The useColorScheme() hook reads the system theme and adapts StatusBar and component styles.', ua: 'Хук useColorScheme() зчитує системну тему та адаптує StatusBar і стилі компонентів.' },
    'iot.arch.3.title': { pl: 'Safe Area Context', en: 'Safe Area Context', ua: 'Safe Area Context' },
    'iot.arch.3.desc':  { pl: 'SafeAreaProvider opakowuje całą aplikację, a useSafeAreaInsets() dostarcza marginesy dla notchów, Dynamic Island i pasków systemowych.', en: 'SafeAreaProvider wraps the entire app, and useSafeAreaInsets() provides inset values for notches, Dynamic Island, and system bars.', ua: 'SafeAreaProvider огортає весь застосунок, а useSafeAreaInsets() надає відступи для вирізів, Dynamic Island і системних панелей.' },
    'iot.arch.4.title': { pl: 'Build — Android (Gradle)', en: 'Build — Android (Gradle)', ua: 'Збірка — Android (Gradle)' },
    'iot.arch.4.desc':  { pl: 'Metro tworzy JavaScript bundle, Gradle kompiluje Kotlin i pakuje wszystko do APK/AAB. Pełny pipeline przez React Native Community CLI.', en: 'Metro creates the JavaScript bundle, Gradle compiles Kotlin and packages everything into APK/AAB. Full pipeline via React Native Community CLI.', ua: 'Metro створює JavaScript-бандл, Gradle компілює Kotlin і пакує все в APK/AAB. Повний конвеєр через React Native Community CLI.' },
    'iot.arch.5.title': { pl: 'Build — iOS (Xcode)', en: 'Build — iOS (Xcode)', ua: 'Збірка — iOS (Xcode)' },
    'iot.arch.5.desc':  { pl: 'CocoaPods zarządza zależnościami Swift/ObjC, Xcode kompiluje natywny kod iOS. Metro dostarcza JavaScript bundle dla symulatora i urządzenia.', en: 'CocoaPods manages Swift/ObjC dependencies, Xcode compiles native iOS code. Metro delivers the JavaScript bundle for simulator and device.', ua: 'CocoaPods керує залежностями Swift/ObjC, Xcode компілює нативний код iOS. Metro постачає JavaScript-бандл для симулятора та пристрою.' },
    'iot.arch.6.title': { pl: 'TypeScript — konfiguracja', en: 'TypeScript — configuration', ua: 'TypeScript — конфігурація' },
    'iot.arch.6.desc':  { pl: 'Strict mode TypeScript z konfiguracją @react-native/typescript-config i ESLint do statycznej analizy kodu.', en: 'TypeScript strict mode with @react-native/typescript-config and ESLint for static code analysis.', ua: 'Strict mode TypeScript із конфігурацією @react-native/typescript-config та ESLint для статичного аналізу коду.' },
    /* ════ IOT — LANGUAGES / IMAGE CAPTIONS ════ */
    'iot.langs.label': { pl: 'Skład projektu', en: 'Project composition', ua: 'Склад проєкту' },
    'iot.stats.framework': { pl: 'Framework', en: 'Framework', ua: 'Фреймворк' },
    'iot.stats.language': { pl: 'Język', en: 'Language', ua: 'Мова' },
    'iot.stats.platforms': { pl: 'Platformy', en: 'Platforms', ua: 'Платформи' },
    'iot.stats.project': { pl: 'W projekcie', en: 'In the project', ua: 'У проєкті' },
    'iot.stats.languages': { pl: '5 języków', en: '5 languages', ua: '5 мов' },
    'iot.deps.label': { pl: 'Zależności', en: 'Dependencies', ua: 'Залежності' },
    'iot.deps.title': { pl: 'Biblioteki', en: 'Libraries', ua: 'Бібліотеки' },
    'iot.dep.react.desc': { pl: 'Biblioteka UI', en: 'Core UI library', ua: 'Основна UI-бібліотека' },
    'iot.dep.react-native.desc': { pl: 'Framework mobilny', en: 'Mobile framework', ua: 'Мобільний фреймворк' },
    'iot.dep.safearea.desc': { pl: 'Obsługa notchów i safe areas', en: 'Notch and safe area support', ua: 'Підтримка вирізів і безпечних зон' },
    'iot.dep.newapp.desc': { pl: 'Gotowe ekrany startowe', en: 'Ready-made start screens', ua: 'Готові стартові екрани' },
    'iot.dep.typescript.desc': { pl: 'Statyczna typizacja', en: 'Static typing', ua: 'Статична типізація' },
    'iot.dep.jest.desc': { pl: 'Framework testowy', en: 'Test framework', ua: 'Тестовий фреймворк' },
    'iot.dep.eslint.desc': { pl: 'Statyczna analiza kodu', en: 'Static code analysis', ua: 'Статичний аналіз коду' },
    'iot.dep.prettier.desc': { pl: 'Formatowanie kodu', en: 'Code formatting', ua: 'Форматування коду' },
    'iot.dep.babel.desc': { pl: 'Transpilacja JS/TS', en: 'JS/TS transpilation', ua: 'Транспіляція JS/TS' },
    'iot.dep.cli.desc': { pl: 'CLI do build i run', en: 'CLI for build and run', ua: 'CLI для збірки та запуску' },
    'iot.dep.renderer.desc': { pl: 'Renderowanie komponentów w testach', en: 'Component rendering in tests', ua: 'Рендеринг компонентів у тестах' },
    'iot.step.1.title': { pl: 'Klonuj i zainstaluj zależności', en: 'Clone and install dependencies', ua: 'Клонуй і встанови залежності' },
    'iot.step.2.title': { pl: 'Zainstaluj zależności iOS (tylko macOS)', en: 'Install iOS dependencies (macOS only)', ua: 'Встанови залежності iOS (лише macOS)' },
    'iot.step.3.title': { pl: 'Uruchom Metro dev server', en: 'Run Metro dev server', ua: 'Запусти Metro dev server' },
    'iot.step.4.title': { pl: 'Uruchom na platformie', en: 'Run on platform', ua: 'Запусти на платформі' },
    'iot.scripts.label': { pl: 'Dostępne komendy', en: 'Available commands', ua: 'Доступні команди' },
    'iot.scripts.command': { pl: 'Komenda', en: 'Command', ua: 'Команда' },
    'iot.scripts.desc': { pl: 'Opis', en: 'Description', ua: 'Опис' },
    'iot.script.start': { pl: 'Uruchomienie Metro dev server', en: 'Start Metro dev server', ua: 'Запуск Metro dev server' },
    'iot.script.android': { pl: 'Build i uruchomienie na Androidzie', en: 'Build and run on Android', ua: 'Збірка та запуск на Android' },
    'iot.script.ios': { pl: 'Build i uruchomienie na iOS', en: 'Build and run on iOS', ua: 'Збірка та запуск на iOS' },
    'iot.script.test': { pl: 'Uruchomienie testów Jest', en: 'Run Jest tests', ua: 'Запуск тестів Jest' },
    'iot.script.lint': { pl: 'Statyczna analiza kodu ESLint', en: 'ESLint static code analysis', ua: 'Статичний аналіз коду ESLint' },
    'iot.badge.project': { pl: 'Projekt własny', en: 'Individual project', ua: 'Власний проєкт' },
    'iot.lang.1.name': { pl: 'Kotlin', en: 'Kotlin', ua: 'Kotlin' },
    'iot.lang.1.pct':  { pl: '26.1%', en: '26.1%', ua: '26.1%' },
    'iot.lang.2.name': { pl: 'Ruby', en: 'Ruby', ua: 'Ruby' },
    'iot.lang.2.pct':  { pl: '23.1%', en: '23.1%', ua: '23.1%' },
    'iot.lang.3.name': { pl: 'Swift', en: 'Swift', ua: 'Swift' },
    'iot.lang.3.pct':  { pl: '19.9%', en: '19.9%', ua: '19.9%' },
    'iot.lang.4.name': { pl: 'TypeScript', en: 'TypeScript', ua: 'TypeScript' },
    'iot.lang.4.pct':  { pl: '18.5%', en: '18.5%', ua: '18.5%' },
    'iot.lang.5.name': { pl: 'JavaScript', en: 'JavaScript', ua: 'JavaScript' },
    'iot.lang.5.pct':  { pl: '12.4%', en: '12.4%', ua: '12.4%' },
    'iot.lang.1.title': { pl: 'Kotlin — natywny Android', en: 'Kotlin — native Android', ua: 'Kotlin — нативний Android' },
    'iot.lang.1.desc':  { pl: 'Logika biznesowa Androida, integracje z systemem, natywne moduły', en: 'Android business logic, system integrations, native modules', ua: 'Бізнес-логіка Android, системні інтеграції, нативні модулі' },
    'iot.lang.2.title': { pl: 'Ruby — CocoaPods iOS', en: 'Ruby — CocoaPods iOS', ua: 'Ruby — CocoaPods iOS' },
    'iot.lang.2.desc':  { pl: 'Zarządzanie zależnościami iOS przez Gemfile i CocoaPods', en: 'iOS dependency management via Gemfile and CocoaPods', ua: 'Керування залежностями iOS через Gemfile та CocoaPods' },
    'iot.lang.3.title': { pl: 'Swift — natywny iOS', en: 'Swift — native iOS', ua: 'Swift — нативний iOS' },
    'iot.lang.3.desc':  { pl: 'Natywna funkcjonalność iOS, moduły wymagające dostępu do systemu', en: 'Native iOS functionality, modules requiring system access', ua: 'Нативна функціональність iOS, модулі, що потребують доступу до системи' },
    /* image captions */
    'iot.img.1.cap': { pl: 'Devices — pusta lista z przyciskiem dodawania (+)', en: 'Devices — empty list with add (+) button', ua: 'Devices — порожній список із кнопкою додавання (+)' },
    'iot.img.2.cap': { pl: 'New device — formularz z nazwą, miejscem, komendą i wyborem koloru', en: 'New device — form with name, location, command and colour picker', ua: 'New device — форма з назвою, місцем, командою та вибором кольору' },
    'iot.img.3.cap': { pl: 'Devices — widok z urządzeniami: Lampa, Roleta 1/2/3 w różnych kolorach', en: 'Devices — list view: Lamp, Blind 1/2/3 in different colours', ua: 'Devices — список пристроїв: Лампа, Ролета 1/2/3 різних кольорів' },
    /* ════ EVENTHUB API ════ */
    'eventhub.category': { pl: 'Backend Development · REST API', en: 'Backend Development · REST API', ua: 'Backend-розробка · REST API' },
    'eventhub.tagline':  { pl: 'Kompleksowy backend REST API do zarządzania eventami — Spring Boot 3.3, JWT, PostgreSQL, Swagger. System ról, zaproszeń, powiadomień i multimediów w jednym serwisie.',
                          en: 'Comprehensive REST API backend for event management — Spring Boot 3.3, JWT, PostgreSQL, Swagger. Roles, invitations, notifications and media in one service.',
                          ua: 'Комплексний REST API backend для керування подіями — Spring Boot 3.3, JWT, PostgreSQL, Swagger. Система ролей, запрошень, сповіщень і медіа в одному сервісі.' },
    'eventhub.goal.h2':  { pl: 'Backend<br/><span class="eventhub-grad">od zera do API</span>', en: 'Backend<br/><span class="eventhub-grad">from zero to API</span>', ua: 'Backend<br/><span class="eventhub-grad">від нуля до API</span>' },
    'eventhub.goal.p1':  { pl: 'eventHubAPI to w pełni funkcjonalny serwis backendowy do zarządzania eventami, zbudowany w Spring Boot 3.3. Projekt był realizowany na Akademii Tarnowskiej jako aplikacja backendowa.',
                          en: 'eventHubAPI is a fully functional backend service for event management, built with Spring Boot 3.3. The project was completed at Tarnów Academy as a backend application.',
                          ua: 'eventHubAPI — це повністю функціональний backend-сервіс для керування подіями, побудований на Spring Boot 3.3. Проєкт реалізовано в Тарновській академії як backend-застосунок.' },
    'eventhub.goal.p2':  { pl: 'Architektura warstwowa — Controller → Service → Repository — z pełną dokumentacją Swagger UI, hierarchicznym systemem ról i bazą PostgreSQL z dobrze zaprojektowanym schematem relacyjnym.',
                          en: 'Layered architecture — Controller → Service → Repository — with full Swagger UI documentation, hierarchical role system and PostgreSQL with a well designed relational schema.',
                          ua: 'Шарова архітектура — Controller → Service → Repository — з повною документацією Swagger UI, ієрархічною системою ролей та базою PostgreSQL із добре спроєктованою реляційною схемою.' },
    'eventhub.btn.endpoints': { pl: 'Endpointy', en: 'Endpoints', ua: 'Ендпоінти' },
    'eventhub.btn.schema':    { pl: 'Schemat DB', en: 'DB schema', ua: 'Схема БД' },
    'eventhub.stats.lang':      { pl: 'Język',         en: 'Language', ua: 'Мова' },
    'eventhub.stats.framework': { pl: 'Framework',     en: 'Framework', ua: 'Фреймворк' },
    'eventhub.stats.db':        { pl: 'Baza danych',   en: 'Database', ua: 'База даних' },
    'eventhub.stats.auth':      { pl: 'Auth & Docs',  en: 'Auth & Docs', ua: 'Auth і документація' },

    'eventhub.feat.1.title': { pl: 'Zarządzanie eventami', en: 'Event management', ua: 'Керування подіями' },
    'eventhub.feat.1.desc':  { pl: 'CRUD eventów z filtrami po nazwie i dacie, publiczne i prywatne eventy', en: 'CRUD events with name and date filters, public and private events', ua: 'CRUD подій із фільтрами за назвою та датою, публічні та приватні події' },
    'eventhub.feat.2.title': { pl: 'JWT + role RBAC', en: 'JWT + RBAC roles', ua: 'JWT + ролі RBAC' },
    'eventhub.feat.2.desc':  { pl: 'Bearer token 24h, trzy role: ADMIN / ORGANIZER / USER z różnymi uprawnieniami', en: '24h bearer token, three roles: ADMIN / ORGANIZER / USER with different permissions', ua: 'Bearer-токен на 24 год, три ролі: ADMIN / ORGANIZER / USER із різними правами' },
    'eventhub.feat.3.title': { pl: 'System zaproszeń', en: 'Invitation system', ua: 'Система запрошень' },
    'eventhub.feat.3.desc':  { pl: 'Wysyłanie, akceptacja, odrzucenie i wycofanie zaproszeń do eventów', en: 'Send, accept, decline and revoke event invitations', ua: 'Надсилання, прийняття, відхилення та скасування запрошень на події' },
    'eventhub.feat.4.title': { pl: 'Powiadomienia', en: 'Notifications', ua: 'Сповіщення' },
    'eventhub.feat.4.desc':  { pl: 'Paginowane powiadomienia z statusami UNREAD / READ / ARCHIVED per użytkownik', en: 'Paginated notifications with UNREAD / READ / ARCHIVED statuses per user', ua: 'Пагіновані сповіщення зі статусами UNREAD / READ / ARCHIVED для кожного користувача' },
    'eventhub.feat.5.title': { pl: 'Upload multimediów', en: 'Media upload', ua: 'Завантаження медіа' },
    'eventhub.feat.5.desc':  { pl: 'Galeria, logo i harmonogram eventu — pliki binarne w PostgreSQL (bytea)', en: 'Gallery, logo and schedule upload — binary files in PostgreSQL (bytea)', ua: 'Галерея, логотип і розклад події — бінарні файли в PostgreSQL (bytea)' },
    'eventhub.feat.6.title': { pl: 'Swagger UI', en: 'Swagger UI', ua: 'Swagger UI' },
    'eventhub.feat.6.desc':  { pl: 'Pełna dokumentacja OpenAPI 3.0 z autoryzacją Bearer JWT pod /swagger-ui.html', en: 'Full OpenAPI 3.0 documentation with Bearer JWT authorization at /swagger-ui.html', ua: 'Повна документація OpenAPI 3.0 з авторизацією Bearer JWT за адресою /swagger-ui.html' },

    'eventhub.tech.1.name': { pl: 'Java 21', en: 'Java 21', ua: 'Java 21' },
    'eventhub.tech.1.desc': { pl: 'Najnowszy LTS — records, sealed classes, pattern matching. Cały backend w Javie.', en: 'Latest LTS — records, sealed classes, pattern matching. Full backend in Java.', ua: 'Найновіший LTS — records, sealed classes, pattern matching. Весь backend на Java.' },
    'eventhub.tech.2.name': { pl: 'Spring Boot 3.3', en: 'Spring Boot 3.3', ua: 'Spring Boot 3.3' },
    'eventhub.tech.2.desc': { pl: 'Web, Data JPA, Security, Validation, Actuator — pełny ekosystem Spring.', en: 'Web, Data JPA, Security, Validation, Actuator — full Spring ecosystem.', ua: 'Web, Data JPA, Security, Validation, Actuator — повна екосистема Spring.' },
    'eventhub.tech.3.name': { pl: 'PostgreSQL', en: 'PostgreSQL', ua: 'PostgreSQL' },
    'eventhub.tech.3.desc': { pl: 'Relacyjna baza danych z Hibernate ORM. DDL strategy: validate — schemat nienaruszony.', en: 'Relational database with Hibernate ORM. DDL strategy: validate — schema unchanged.', ua: 'Реляційна база даних з Hibernate ORM. DDL strategy: validate — схема незмінна.' },
    'eventhub.tech.4.name': { pl: 'JWT Security', en: 'JWT Security', ua: 'JWT Security' },
    'eventhub.tech.4.desc': { pl: 'JwtAuthenticationFilter, JwtTokenProvider — Bearer token 24h, Spring Security config.', en: 'JwtAuthenticationFilter, JwtTokenProvider — 24h bearer token, Spring Security config.', ua: 'JwtAuthenticationFilter, JwtTokenProvider — bearer-токен на 24 год, конфігурація Spring Security.' },
    'eventhub.tech.5.name': { pl: 'Swagger / OpenAPI', en: 'Swagger / OpenAPI', ua: 'Swagger / OpenAPI' },
    'eventhub.tech.5.desc': { pl: 'springdoc-openapi — interaktywna dokumentacja API z możliwością testowania.', en: 'springdoc-openapi — interactive API documentation with test capabilities.', ua: 'springdoc-openapi — інтерактивна документація API з можливістю тестування.' },
    'eventhub.tech.6.name': { pl: 'Maven + Lombok', en: 'Maven + Lombok', ua: 'Maven + Lombok' },
    'eventhub.tech.6.desc': { pl: 'Maven build system, Lombok eliminuje boilerplate — gettery, konstruktory, buildery.', en: 'Maven build system, Lombok removes boilerplate — getters, constructors, builders.', ua: 'Система збірки Maven, Lombok прибирає шаблонний код — гетери, конструктори, білдери.' },

    'eventhub.arch.1.title': { pl: 'JWT Authentication Filter', en: 'JWT Authentication Filter', ua: 'JWT Authentication Filter' },
    'eventhub.arch.1.desc': { pl: 'Każde żądanie przechodzi przez JwtAuthenticationFilter. Token wyciągany z nagłówka Authorization: Bearer, walidowany i mapowany na SecurityContext.', en: 'Each request passes through JwtAuthenticationFilter. The token is taken from Authorization: Bearer, validated and mapped to SecurityContext.', ua: 'Кожен запит проходить через JwtAuthenticationFilter. Токен береться із заголовка Authorization: Bearer, валідується та мапиться на SecurityContext.' },
    'eventhub.arch.2.title': { pl: 'Role-Based Access Control', en: 'Role-Based Access Control', ua: 'Role-Based Access Control' },
    'eventhub.arch.2.desc': { pl: 'Trzy poziomy dostępu: USER, ORGANIZER, ADMIN. Każdy endpoint zabezpieczony przez @PreAuthorize lub konfigurację SecurityFilterChain.', en: 'Three access levels: USER, ORGANIZER, ADMIN. Each endpoint is secured with @PreAuthorize or SecurityFilterChain configuration.', ua: 'Три рівні доступу: USER, ORGANIZER, ADMIN. Кожен ендпоінт захищений через @PreAuthorize або конфігурацію SecurityFilterChain.' },
    'eventhub.arch.3.title': { pl: 'Composite Key — Participant', en: 'Composite Key — Participant', ua: 'Composite Key — Participant' },
    'eventhub.arch.3.desc': { pl: 'Encja Participant używa złożonego klucza głównego ParticipantId (userId + eventId) — jeden użytkownik może być uczestnikiem eventu tylko raz.', en: 'Participant entity uses a composite primary key ParticipantId (userId + eventId) — one user can join an event only once.', ua: 'Сутність Participant використовує складений первинний ключ ParticipantId (userId + eventId) — один користувач може приєднатися до події лише раз.' },
    'eventhub.arch.4.title': { pl: 'Media — bytea w PostgreSQL', en: 'Media — bytea in PostgreSQL', ua: 'Media — bytea в PostgreSQL' },
    'eventhub.arch.4.desc': { pl: 'Pliki multimedialne przechowywane bezpośrednio w bazie jako bytea. Trzy typy użycia: GALLERY, LOGO, SCHEDULE.', en: 'Media files stored directly in the database as bytea. Three usage types: GALLERY, LOGO, SCHEDULE.', ua: 'Медіафайли зберігаються безпосередньо в базі як bytea. Три типи використання: GALLERY, LOGO, SCHEDULE.' },
    'eventhub.arch.5.title': { pl: 'Hierarchia geograficzna', en: 'Geographic hierarchy', ua: 'Географічна ієрархія' },
    'eventhub.arch.5.desc': { pl: 'Lokalizacje zbudowane w pełnej hierarchii: Country → Region → City → PostalCode → Location → MapLocation z geolokacją jako osobna encja 1:1.', en: 'Locations built in a full hierarchy: Country → Region → City → PostalCode → Location → MapLocation with geolocation as a separate 1:1 entity.', ua: 'Локації побудовані у повній ієрархії: Country → Region → City → PostalCode → Location → MapLocation, де геолокація — окрема сутність 1:1.' },
    'eventhub.arch.6.title': { pl: 'Powiadomienia N:M', en: 'Notifications N:M', ua: 'Сповіщення N:M' },
    'eventhub.arch.6.desc': { pl: 'Tabela join account_notification łączy użytkowników z powiadomieniami ze statusem per para. Jeden komunikat może trafić do wielu odbiorców.', en: 'Join table account_notification links users to notifications with status per pair. One notification can be sent to multiple recipients.', ua: 'З\'єднувальна таблиця account_notification пов\'язує користувачів зі сповіщеннями зі статусом для кожної пари. Одне сповіщення може надійти багатьом отримувачам.' },

    'eventhub.endpoints.title': { pl: 'Endpointy', en: 'Endpoints', ua: 'Ендпоінти' },
    'eventhub.group.auth': { pl: 'Auth', en: 'Auth', ua: 'Auth' },
    'eventhub.group.users': { pl: 'Użytkownicy', en: 'Users', ua: 'Користувачі' },
    'eventhub.group.events': { pl: 'Eventy', en: 'Events', ua: 'Події' },
    'eventhub.group.participants': { pl: 'Uczestnicy', en: 'Participants', ua: 'Учасники' },
    'eventhub.group.invitations': { pl: 'Zaproszenia', en: 'Invitations', ua: 'Запрошення' },
    'eventhub.group.notifications': { pl: 'Powiadomienia', en: 'Notifications', ua: 'Сповіщення' },
    'eventhub.group.media': { pl: 'Media', en: 'Media', ua: 'Медіа' },
    'eventhub.group.admin': { pl: 'Admin', en: 'Admin', ua: 'Admin' },
    'eventhub.ep.auth.login': { pl: 'Logowanie — zwraca JWT token', en: 'Login — returns a JWT token', ua: 'Вхід — повертає JWT-токен' },
    'eventhub.ep.auth.register': { pl: 'Rejestracja nowego użytkownika', en: 'Register a new user', ua: 'Реєстрація нового користувача' },
    'eventhub.ep.account.me': { pl: 'Profil zalogowanego użytkownika', en: 'Logged in user profile', ua: 'Профіль авторизованого користувача' },
    'eventhub.ep.account.update': { pl: 'Update profilu', en: 'Update profile', ua: 'Оновлення профілю' },
    'eventhub.ep.account.upload': { pl: 'Upload zdjęcia profilowego', en: 'Upload profile image', ua: 'Завантаження фото профілю' },
    'eventhub.ep.account.password': { pl: 'Zmiana hasła', en: 'Change password', ua: 'Зміна пароля' },
    'eventhub.ep.events.create': { pl: 'Tworzenie eventu', en: 'Create an event', ua: 'Створення події' },
    'eventhub.ep.events.public': { pl: 'Lista publicznych eventów (z filtrami)', en: 'Public events list (with filters)', ua: 'Список публічних подій (з фільтрами)' },
    'eventhub.ep.events.details': { pl: 'Szczegóły eventu', en: 'Event details', ua: 'Деталі події' },
    'eventhub.ep.events.update': { pl: 'Update eventu', en: 'Update event', ua: 'Оновлення події' },
    'eventhub.ep.events.delete': { pl: 'Usunięcie eventu', en: 'Delete event', ua: 'Видалення події' },
    'eventhub.ep.events.all': { pl: 'Wszystkie eventy', en: 'All events', ua: 'Усі події' },
    'eventhub.ep.participants.join': { pl: 'Dołączenie do eventu', en: 'Join event', ua: 'Приєднання до події' },
    'eventhub.ep.participants.list': { pl: 'Lista uczestników', en: 'Participants list', ua: 'Список учасників' },
    'eventhub.ep.participants.me': { pl: 'Mój status uczestnictwa', en: 'My participation status', ua: 'Мій статус участі' },
    'eventhub.ep.participants.leave': { pl: 'Opuszczenie eventu', en: 'Leave event', ua: 'Вихід з події' },
    'eventhub.ep.invitations.send': { pl: 'Wysłanie zaproszenia', en: 'Send invitation', ua: 'Надсилання запрошення' },
    'eventhub.ep.invitations.my': { pl: 'Moje zaproszenia', en: 'My invitations', ua: 'Мої запрошення' },
    'eventhub.ep.invitations.accept': { pl: 'Przyjęcie zaproszenia', en: 'Accept invitation', ua: 'Прийняття запрошення' },
    'eventhub.ep.invitations.decline': { pl: 'Odrzucenie zaproszenia', en: 'Decline invitation', ua: 'Відхилення запрошення' },
    'eventhub.ep.invitations.revoke': { pl: 'Wycofanie zaproszenia', en: 'Revoke invitation', ua: 'Скасування запрошення' },
    'eventhub.ep.notifications.list': { pl: 'Pobieranie powiadomień (paginacja)', en: 'Fetch notifications (paginated)', ua: 'Отримання сповіщень (пагінація)' },
    'eventhub.ep.notifications.status': { pl: 'Update statusu (READ / ARCHIVED)', en: 'Update status (READ / ARCHIVED)', ua: 'Оновлення статусу (READ / ARCHIVED)' },
    'eventhub.ep.media.gallery': { pl: 'Upload zdjęcia do galerii', en: 'Upload image to gallery', ua: 'Завантаження зображення в галерею' },
    'eventhub.ep.media.logo': { pl: 'Upload logo eventu', en: 'Upload event logo', ua: 'Завантаження логотипу події' },
    'eventhub.ep.media.schedule': { pl: 'Upload harmonogramu (PDF)', en: 'Upload schedule (PDF)', ua: 'Завантаження розкладу (PDF)' },
    'eventhub.ep.media.delete': { pl: 'Usunięcie pliku', en: 'Delete file', ua: 'Видалення файлу' },
    'eventhub.ep.admin.status': { pl: 'Zmiana statusu konta (ACTIVE/BANNED)', en: 'Change account status (ACTIVE/BANNED)', ua: 'Зміна статусу акаунта (ACTIVE/BANNED)' },
    'eventhub.ep.admin.role': { pl: 'Zmiana roli użytkownika', en: 'Change user role', ua: 'Зміна ролі користувача' },
    'eventhub.ep.admin.deleteAcct': { pl: 'Usunięcie konta', en: 'Delete account', ua: 'Видалення акаунта' },
    'eventhub.ep.admin.deleteEvent': { pl: 'Usunięcie dowolnego eventu', en: 'Delete any event', ua: 'Видалення будь-якої події' },
    'eventhub.schema.label': { pl: 'Baza danych', en: 'Database', ua: 'База даних' },
    'eventhub.schema.h2': { pl: 'Schemat encji', en: 'Entity schema', ua: 'Схема сутностей' },
    'eventhub.build.label': { pl: 'Instalacja', en: 'Installation', ua: 'Встановлення' },
    'eventhub.build.title': { pl: 'Jak uruchomić', en: 'How to run', ua: 'Як запустити' },
    'eventhub.team.title': { pl: 'Autorzy projektu', en: 'Project authors', ua: 'Автори проєкту' },

    /* ════ ML — EMOTION RECOGNITION ════ */
    'ml.category': { pl: 'Machine Learning · Deep Learning', en: 'Machine Learning · Deep Learning', ua: 'Machine Learning · Deep Learning' },
    'ml.badge.uni': { pl: 'Akademia Tarnowska · ML II', en: 'Tarnów Academy · ML II', ua: 'Тарновська академія · ML II' },
    'ml.tagline': { pl: 'Deep learning na zbiorze FER-2013 — klasyfikacja 7 emocji z wyrazu twarzy przy użyciu CNN, automatyczne strojenie hiperparametrów Hyperband i wizualizacja Grad-CAM w aplikacji Gradio.',
                    en: 'Deep learning on FER-2013 — 7-emotion facial expression classification using CNN, automatic Hyperband hyperparameter tuning and Grad-CAM visualization in Gradio.',
                    ua: 'Deep learning на наборі даних FER-2013 — класифікація 7 емоцій за виразом обличчя за допомогою CNN, автоматичне налаштування гіперпараметрів Hyperband і візуалізація Grad-CAM у застосунку Gradio.' },
    
    'ml.stats.1.label': { pl: 'Obrazów FER-2013', en: 'FER-2013 images', ua: 'Зображень FER-2013' },
    'ml.stats.2.label': { pl: 'Architektura', en: 'Architecture', ua: 'Архітектура' },
    'ml.stats.3.label': { pl: 'Interpretowalność', en: 'Explainability', ua: 'Пояснюваність' },
    'ml.stats.4.label': { pl: 'Zespół', en: 'Team', ua: 'Команда' },
    
    'ml.goal.label': { pl: 'Cel projektu', en: 'Project goal', ua: 'Мета проєкту' },
    'ml.goal.h2': { pl: 'Praca zaliczeniowa<br><span class="grad-inferno">z uczenia maszynowego II</span>', en: 'Machine Learning II<br><span class="grad-inferno">course project</span>', ua: 'Залікова робота<br><span class="grad-inferno">з машинного навчання II</span>' },
    'ml.goal.p1': { pl: 'Celem projektu było zaprojektowanie i wytrenowanie konwolucyjnej sieci neuronowej klasyfikującej siedem kategorii emocji na podstawie zdjęć twarzy ze zbioru FER-2013, a następnie wdrożenie modelu jako interaktywnej aplikacji webowej.',
                    en: 'The goal was to design and train a convolutional neural network classifying seven emotion categories from facial expression images in the FER-2013 dataset, then deploy it as an interactive web application.',
                    ua: 'Метою проєкту було спроєктувати та натренувати згорткову нейронну мережу, що класифікує сім категорій емоцій за фотографіями облич із набору FER-2013, а потім розгорнути модель як інтерактивний вебзастосунок.' },
    'ml.goal.p2': { pl: 'Pipeline obejmuje eksploracyjną analizę danych, augmentację w locie, bazową architekturę CNN, automatyczne strojenie hiperparametrów algorytmem Hyperband oraz wizualną interpretowalność predykcji techniką Grad-CAM.',
                    en: 'The pipeline includes exploratory data analysis, on-the-fly augmentation, baseline CNN architecture, automatic Hyperband hyperparameter tuning and visual explainability via Grad-CAM.',
                    ua: 'Конвеєр включає розвідувальний аналіз даних, аугментацію на льоту, базову архітектуру CNN, автоматичне налаштування гіперпараметрів алгоритмом Hyperband та візуальну пояснюваність передбачень технікою Grad-CAM.' },
    
    'ml.gallery': { pl: 'Projekt w akcji', en: 'Project in action', ua: 'Проєкт у дії' },
    'ml.gallery.title': { pl: 'Analiza danych i wyniki modelu', en: 'Data analysis and model results', ua: 'Аналіз даних і результати моделі' },
    'ml.gallery.note': { pl: 'Zrzuty ekranu zostaną uzupełnione po wygenerowaniu wykresów przez skrypty <code>zajecia2_data_analysis.py</code> i <code>zajecia2_cnn.py</code> oraz po nagraniu działania aplikacji Gradio.',
                         en: 'Screenshots will be added after generating plots with <code>zajecia2_data_analysis.py</code> and <code>zajecia2_cnn.py</code> scripts and recording Gradio app demo.',
                         ua: 'Скриншоти будуть додані після генерації графіків скриптами <code>zajecia2_data_analysis.py</code> і <code>zajecia2_cnn.py</code> та запису демонстрації застосунку Gradio.' },
    'ml.emotion.1': { pl: 'szczęśliwy', en: 'happy', ua: 'щасливий' },
    'ml.emotion.2': { pl: 'smutny', en: 'sad', ua: 'сумний' },
    'ml.emotion.3': { pl: 'zły', en: 'angry', ua: 'злий' },
    'ml.emotion.4': { pl: 'strach', en: 'fear', ua: 'страх' },
    'ml.emotion.5': { pl: 'niesmak', en: 'disgust', ua: 'відраза' },
    'ml.emotion.6': { pl: 'zaskoczenie', en: 'surprise', ua: 'здивування' },
    'ml.emotion.7': { pl: 'neutralny', en: 'neutral', ua: 'нейтральний' },
    'ml.gallery.1': { pl: 'Rozkład klas emocji', en: 'Emotion class distribution', ua: 'Розподіл класів емоцій' },
    'ml.gallery.2': { pl: 'Przykładowe obrazy', en: 'Sample images', ua: 'Приклади зображень' },
    'ml.gallery.3': { pl: 'Augmentacja danych', en: 'Data augmentation', ua: 'Аугментація даних' },
    'ml.gallery.4': { pl: 'Krzywe uczenia: bazowy vs Hyperband', en: 'Learning curves: baseline vs Hyperband', ua: 'Криві навчання: базова модель vs Hyperband' },
    'ml.gallery.5': { pl: 'Aplikacja Gradio', en: 'Gradio app', ua: 'Застосунок Gradio' },
    'ml.gallery.6': { pl: 'Wykres Softmax (7 klas)', en: 'Softmax graph (7 classes)', ua: 'Графік Softmax (7 класів)' },
    'ml.gallery.7': { pl: 'Grad-CAM — mapa Inferno', en: 'Grad-CAM — Inferno map', ua: 'Grad-CAM — карта Inferno' },
    'ml.gallery.8': { pl: 'Detekcja twarzy (ROI)', en: 'Face detection (ROI)', ua: 'Виявлення обличчя (ROI)' },
    
    'ml.feat.1.title': { pl: 'EDA i niezbalansowanie klas', en: 'EDA and class imbalance', ua: 'EDA та дисбаланс класів' },
    'ml.feat.1.desc': { pl: 'Analiza struktury FER-2013 — klasa happy zdecydowanie najliczniejsza, disgust wielokrotnie rzadszy',
                        en: 'Analysis of FER-2013 structure — happy class dominant, disgust significantly rarer',
                        ua: 'Аналіз структури FER-2013 — клас happy значно переважає, disgust трапляється набагато рідше' },
    'ml.feat.2.title': { pl: 'Augmentacja w locie', en: 'On-the-fly augmentation', ua: 'Аугментація на льоту' },
    'ml.feat.2.desc': { pl: 'Rotacja, przesunięcie, odbicie lustrzane, zoom i jasność — ImageDataGenerator redukujący overfitting',
                        en: 'Rotation, shift, flip, zoom, brightness — ImageDataGenerator reducing overfitting',
                        ua: 'Поворот, зсув, дзеркальне відображення, масштаб і яскравість — ImageDataGenerator, що зменшує перенавчання' },
    'ml.feat.3.title': { pl: 'CNN — 3 bloki konwolucyjne', en: 'CNN — 3 conv blocks', ua: 'CNN — 3 згорткові блоки' },
    'ml.feat.3.desc': { pl: 'Conv2D + BatchNorm + MaxPool + Dropout, klasyfikator Dense 256 jednostek, wyjście Softmax 7 klas',
                        en: 'Conv2D + BatchNorm + MaxPool + Dropout, Dense 256 classifier, Softmax output 7 classes',
                        ua: 'Conv2D + BatchNorm + MaxPool + Dropout, класифікатор Dense 256 нейронів, вихід Softmax на 7 класів' },
    'ml.feat.4.title': { pl: 'Keras Tuner Hyperband', en: 'Keras Tuner Hyperband', ua: 'Keras Tuner Hyperband' },
    'ml.feat.4.desc': { pl: 'Automatyczne przeszukiwanie hiperparametrów metodą successive halving — 5–10× mniej epok niż Grid Search',
                        en: 'Automatic hyperparameter search using successive halving — 5–10× fewer epochs than Grid Search',
                        ua: 'Автоматичний пошук гіперпараметрів методом successive halving — у 5–10× менше епох, ніж Grid Search' },
    'ml.feat.5.title': { pl: 'Grad-CAM', en: 'Grad-CAM', ua: 'Grad-CAM' },
    'ml.feat.5.desc': { pl: 'Mapy cieplne Inferno wskazujące, które obszary twarzy decydują o predykcji emocji',
                        en: 'Inferno heatmaps showing which facial regions drive emotion predictions',
                        ua: 'Теплові карти Inferno, що показують, які ділянки обличчя визначають передбачення емоції' },
    'ml.feat.6.title': { pl: 'Wdrożenie w Gradio', en: 'Gradio deployment', ua: 'Розгортання в Gradio' },
    'ml.feat.6.desc': { pl: 'Interaktywna aplikacja webowa z obsługą kamery, wykresem Softmax i adnotacją bounding boxa',
                        en: 'Interactive web app with camera support, Softmax graph and bounding box annotation',
                        ua: 'Інтерактивний вебзастосунок із підтримкою камери, графіком Softmax та анотацією bounding box' },
    
    'ml.dataset.label': { pl: 'Zbiór danych', en: 'Dataset', ua: 'Набір даних' },
    'ml.dataset.title': { pl: 'FER-2013', en: 'FER-2013', ua: 'FER-2013' },
    'ml.dataset.stat.1.l': { pl: 'Obrazów łącznie', en: 'Total images', ua: 'Загалом зображень' },
    'ml.dataset.stat.2.l': { pl: 'Zbiór treningowy', en: 'Training set', ua: 'Тренувальний набір' },
    'ml.dataset.stat.3.l': { pl: 'Zbiór testowy', en: 'Test set', ua: 'Тестовий набір' },
    'ml.dataset.stat.4.l': { pl: 'Skala szarości', en: 'Grayscale', ua: 'Відтінки сірого' },
    
    'ml.pipeline.label': { pl: 'Architektura', en: 'Architecture', ua: 'Архітектура' },
    'ml.pipeline.title': { pl: 'Potok inferencji emocji', en: 'Emotion inference pipeline', ua: 'Конвеєр визначення емоцій' },
    'ml.pipeline.step.1': { pl: 'Obraz wejściowy<br><span>RGB / PIL</span>', en: 'Input image<br><span>RGB / PIL</span>', ua: 'Вхідне зображення<br><span>RGB / PIL</span>' },
    'ml.pipeline.step.2': { pl: 'Detekcja twarzy<br><span>Haar Cascade</span>', en: 'Face detection<br><span>Haar Cascade</span>', ua: 'Виявлення обличчя<br><span>Haar Cascade</span>' },
    'ml.pipeline.step.3': { pl: 'Preprocessing<br><span>resize 48×48, /255.0</span>', en: 'Preprocessing<br><span>resize 48×48, /255.0</span>', ua: 'Препроцесинг<br><span>resize 48×48, /255.0</span>' },
    'ml.pipeline.step.4': { pl: 'CNN predict()<br><span>Softmax, 7 klas</span>', en: 'CNN predict()<br><span>Softmax, 7 classes</span>', ua: 'CNN predict()<br><span>Softmax, 7 класів</span>' },
    'ml.pipeline.step.5': { pl: 'Grad-CAM<br><span>+ wykres + adnotacja</span>', en: 'Grad-CAM<br><span>+ graph + annotation</span>', ua: 'Grad-CAM<br><span>+ графік + анотація</span>' },
    
    'ml.results.label': { pl: 'Wyniki', en: 'Results', ua: 'Результати' },
    'ml.results.title': { pl: 'Model bazowy vs Hyperband', en: 'Baseline vs Hyperband', ua: 'Базова модель vs Hyperband' },
    'ml.results.table.model': { pl: 'Model', en: 'Model', ua: 'Модель' },
    'ml.results.table.accuracy': { pl: 'Val Accuracy', en: 'Val Accuracy', ua: 'Val Accuracy' },
    'ml.results.table.loss': { pl: 'Val Loss', en: 'Val Loss', ua: 'Val Loss' },
    'ml.results.table.baseline': { pl: 'Model bazowy', en: 'Baseline model', ua: 'Базова модель' },
    'ml.results.table.hyperband': { pl: 'Model po Hyperband', en: 'Model after Hyperband', ua: 'Модель після Hyperband' },
    'ml.results.table.improvement': { pl: 'Poprawa', en: 'Improvement', ua: 'Покращення' },
    'ml.results.note': { pl: 'Wyniki mieszczą się w typowym zakresie dla CNN trenowanych bezpośrednio na FER-2013 bez transfer learningu (state-of-the-art ok. 73–75% przy dużych architekturach pretrenowanych). Strojenie Hyperband potwierdziło mierzalną poprawę dokładności walidacyjnej przy akceptowalnym koszcie obliczeniowym.',
                         en: 'Results fall within the typical range for CNNs trained directly on FER-2013 without transfer learning (state-of-the-art ~73–75% with large pretrained architectures). Hyperband tuning confirmed measurable improvement in validation accuracy at acceptable computational cost.',
                         ua: 'Результати знаходяться в типовому діапазоні для CNN, натренованих безпосередньо на FER-2013 без transfer learning (state-of-the-art приблизно 73–75% при великих попередньо натренованих архітектурах). Налаштування Hyperband підтвердило вимірне покращення точності валідації за прийнятної обчислювальної вартості.' },
    
    'ml.deliverables.label': { pl: 'Repozytorium', en: 'Repository', ua: 'Репозиторій' },
    'ml.deliverables.title': { pl: 'Struktura projektu', en: 'Project structure', ua: 'Структура проєкту' },
    'ml.deliverables.1.title': { pl: 'zajecia2_data_analysis.py', en: 'zajecia2_data_analysis.py', ua: 'zajecia2_data_analysis.py' },
    'ml.deliverables.1.desc': { pl: 'EDA: analiza struktury FER-2013, wykresy, augmentacja', en: 'EDA: FER-2013 structure analysis, plots, augmentation', ua: 'EDA: аналіз структури FER-2013, графіки, аугментація' },
    'ml.deliverables.2.title': { pl: 'zajecia2_deep_learning.py', en: 'zajecia2_deep_learning.py', ua: 'zajecia2_deep_learning.py' },
    'ml.deliverables.2.desc': { pl: 'Data pipeline, konfiguracja generatora danych', en: 'Data pipeline, data generator configuration', ua: 'Конвеєр даних, конфігурація генератора даних' },
    'ml.deliverables.3.title': { pl: 'zajecia2_cnn.py', en: 'zajecia2_cnn.py', ua: 'zajecia2_cnn.py' },
    'ml.deliverables.3.desc': { pl: 'Budowa CNN, trening bazowy, Keras Tuner Hyperband', en: 'CNN building, baseline training, Keras Tuner Hyperband', ua: 'Побудова CNN, базове тренування, Keras Tuner Hyperband' },
    'ml.deliverables.4.title': { pl: 'zajecia4_klasyfikacja.py', en: 'zajecia4_klasyfikacja.py', ua: 'zajecia4_klasyfikacja.py' },
    'ml.deliverables.4.desc': { pl: 'Macierz pomyłek, ROC, permutation importance', en: 'Confusion matrix, ROC, permutation importance', ua: 'Матриця помилок, ROC, permutation importance' },
    'ml.deliverables.5.title': { pl: 'app.py', en: 'app.py', ua: 'app.py' },
    'ml.deliverables.5.desc': { pl: 'Aplikacja Gradio — detekcja emocji + wizualizacja Grad-CAM', en: 'Gradio app — emotion detection + Grad-CAM visualization', ua: 'Застосунок Gradio — виявлення емоцій + візуалізація Grad-CAM' },
    'ml.deliverables.6.title': { pl: 'best_model.keras', en: 'best_model.keras', ua: 'best_model.keras' },
    'ml.deliverables.6.desc': { pl: 'Najlepszy wytrenowany model (plik binarny Keras)', en: 'Best trained model (Keras binary file)', ua: 'Найкраща натренована модель (бінарний файл Keras)' },
    
    'ml.team.label': { pl: 'Zespół', en: 'Team', ua: 'Команда' },
    'ml.team.title': { pl: 'Autorzy projektu', en: 'Project authors', ua: 'Автори проєкту' },
    'ml.team.1.name': { pl: 'Andrii Torianyk', en: 'Andrii Torianyk', ua: 'Андрій Торяник' },
    'ml.team.1.role': { pl: 'CNN, Keras Tuner Hyperband, Grad-CAM, aplikacja Gradio', en: 'CNN, Keras Tuner Hyperband, Grad-CAM, Gradio app', ua: 'CNN, Keras Tuner Hyperband, Grad-CAM, застосунок Gradio' },
    'ml.team.2.name': { pl: 'Bohdan Kovalchuk', en: 'Bohdan Kovalchuk', ua: 'Богдан Ковальчук' },
    'ml.team.2.role': { pl: 'Eksploracyjna analiza danych, augmentacja, wizualizacje EDA', en: 'Exploratory data analysis, augmentation, EDA visualizations', ua: 'Розвідувальний аналіз даних, аугментація, візуалізації EDA' },
    
    'ml.tech.label': { pl: 'Technologie', en: 'Technologies', ua: 'Технології' },
    'ml.tech.1.name': { pl: 'TensorFlow / Keras', en: 'TensorFlow / Keras', ua: 'TensorFlow / Keras' },
    'ml.tech.1.desc': { pl: 'Budowa i trening konwolucyjnej sieci neuronowej, warstwy Conv2D, BatchNorm, Dropout.',
                        en: 'CNN building and training, Conv2D, BatchNorm, Dropout layers.',
                        ua: 'Побудова та тренування згорткової нейронної мережі, шари Conv2D, BatchNorm, Dropout.' },
    'ml.tech.2.name': { pl: 'Keras Tuner', en: 'Keras Tuner', ua: 'Keras Tuner' },
    'ml.tech.2.desc': { pl: 'Algorytm Hyperband do automatycznego strojenia hiperparametrów modelu.',
                        en: 'Hyperband algorithm for automatic model hyperparameter tuning.',
                        ua: 'Алгоритм Hyperband для автоматичного налаштування гіперпараметрів моделі.' },
    'ml.tech.3.name': { pl: 'Gradio', en: 'Gradio', ua: 'Gradio' },
    'ml.tech.3.desc': { pl: 'Interaktywna aplikacja webowa — Premium Dark UI, obsługa kamery i wykresów.',
                        en: 'Interactive web app — Premium Dark UI, camera support and graphs.',
                        ua: 'Інтерактивний вебзастосунок — Premium Dark UI, підтримка камери та графіків.' },
    'ml.tech.4.name': { pl: 'OpenCV', en: 'OpenCV', ua: 'OpenCV' },
    'ml.tech.4.desc': { pl: 'Detekcja twarzy Haar Cascade, nakładanie map cieplnych Grad-CAM (alpha blending).',
                        en: 'Haar Cascade face detection, Grad-CAM heatmap overlays (alpha blending).',
                        ua: 'Виявлення обличчя Haar Cascade, накладання теплових карт Grad-CAM (alpha blending).' },
    'ml.tech.5.name': { pl: 'Matplotlib / Seaborn', en: 'Matplotlib / Seaborn', ua: 'Matplotlib / Seaborn' },
    'ml.tech.5.desc': { pl: 'Wizualizacje EDA, krzywe uczenia, wykresy rozkładu Softmax.',
                        en: 'EDA visualizations, learning curves, Softmax distribution plots.',
                        ua: 'Візуалізації EDA, криві навчання, графіки розподілу Softmax.' },
    'ml.tech.6.name': { pl: 'Python / NumPy / Pandas', en: 'Python / NumPy / Pandas', ua: 'Python / NumPy / Pandas' },
    'ml.tech.6.desc': { pl: 'Przetwarzanie danych, pipeline augmentacji i analiza wyników.',
                        en: 'Data processing, augmentation pipeline and results analysis.',
                        ua: 'Обробка даних, конвеєр аугментації та аналіз результатів.' },
    
    'ml.arch.1.title': { pl: 'Blok konwolucyjny 1', en: 'Conv block 1', ua: 'Згортковий блок 1' },
    'ml.arch.1.desc': { pl: '2× Conv2D(32) z aktywacją ReLU, BatchNormalization, MaxPooling2D i Dropout(0.25). Wyjście: 12×12×32.',
                        en: '2× Conv2D(32) with ReLU, BatchNormalization, MaxPooling2D and Dropout(0.25). Output: 12×12×32.',
                        ua: '2× Conv2D(32) з активацією ReLU, BatchNormalization, MaxPooling2D і Dropout(0.25). Вихід: 12×12×32.' },
    'ml.arch.2.title': { pl: 'Blok konwolucyjny 2', en: 'Conv block 2', ua: 'Згортковий блок 2' },
    'ml.arch.2.desc': { pl: '2× Conv2D(64), BatchNormalization, MaxPooling2D i Dropout(0.25). Wyjście: 6×6×64.',
                        en: '2× Conv2D(64), BatchNormalization, MaxPooling2D and Dropout(0.25). Output: 6×6×64.',
                        ua: '2× Conv2D(64), BatchNormalization, MaxPooling2D і Dropout(0.25). Вихід: 6×6×64.' },
    'ml.arch.3.title': { pl: 'Blok konwolucyjny 3', en: 'Conv block 3', ua: 'Згортковий блок 3' },
    'ml.arch.3.desc': { pl: '2× Conv2D(128), BatchNormalization, MaxPooling2D i Dropout(0.40). Wyjście: 3×3×128, dalej Flatten → 1152.',
                        en: '2× Conv2D(128), BatchNormalization, MaxPooling2D and Dropout(0.40). Output: 3×3×128, then Flatten → 1152.',
                        ua: '2× Conv2D(128), BatchNormalization, MaxPooling2D і Dropout(0.40). Вихід: 3×3×128, далі Flatten → 1152.' },
    'ml.arch.4.title': { pl: 'Klasyfikator Dense', en: 'Dense classifier', ua: 'Класифікатор Dense' },
    'ml.arch.4.desc': { pl: 'Warstwa Dense 256 jednostek z ReLU, BatchNormalization i Dropout(0.50), zakończona warstwą Softmax na 7 klas.',
                        en: 'Dense layer 256 units with ReLU, BatchNormalization and Dropout(0.50), ending with Softmax on 7 classes.',
                        ua: 'Шар Dense на 256 нейронів з ReLU, BatchNormalization і Dropout(0.50), завершується шаром Softmax на 7 класів.' },
    'ml.arch.5.title': { pl: 'Hyperband — przestrzeń przeszukiwania', en: 'Hyperband — search space', ua: 'Hyperband — простір пошуку' },
    'ml.arch.5.desc': { pl: 'Filtry Conv2D, dropout konwolucyjny i klasyfikatora, liczba neuronów Dense oraz learning rate Adama strojone automatycznie.',
                        en: 'Conv2D filters, conv and classifier dropout, Dense units and Adam learning rate auto-tuned.',
                        ua: 'Фільтри Conv2D, dropout згорткової частини та класифікатора, кількість нейронів Dense та learning rate Adam налаштовуються автоматично.' },
    'ml.arch.6.title': { pl: 'Grad-CAM — hooki gradientowe', en: 'Grad-CAM — gradient hooks', ua: 'Grad-CAM — градієнтні хуки' },
    'ml.arch.6.desc': { pl: 'Automatyczne wykrywanie ostatniej warstwy Conv2D modelu — odporne na zmiany architektury bez ręcznej aktualizacji.',
                        en: 'Auto-detect model\'s last Conv2D layer — robust to architecture changes without manual updates.',
                        ua: 'Автоматичне визначення останнього шару Conv2D моделі — стійке до змін архітектури без ручного оновлення.' },
    
    /* ════ AIPLANNER — SMART PLANNER APP ════ */
    'aiplanner.category': { pl: 'Mobile · React Native · AI', en: 'Mobile · React Native · AI', ua: 'Мобільна розробка · React Native · AI' },
    'aiplanner.badge.uni': { pl: 'Projekt indywidualny', en: 'Solo project', ua: 'Індивідуальний проєкт' },
    'aiplanner.tagline': { pl: 'Cross-platform aplikacja mobilna do planowania nauki, zadań i podróży z wbudowanym asystentem AI (LLaMA 3.1 via GROQ API). Real-time sync przez Firebase, animowane wykresy statystyk i pełny dark mode.',
                           en: 'Cross-platform mobile app for learning, task and travel planning with built-in AI assistant (LLaMA 3.1 via GROQ API). Real-time sync via Firebase, animated charts and full dark mode.',
                           ua: 'Крос-платформний мобільний застосунок для планування навчання, завдань і подорожей із вбудованим AI-асистентом (LLaMA 3.1 через GROQ API). Синхронізація в реальному часі через Firebase, анімовані графіки статистики та повний темний режим.' },
    
    'aiplanner.stats.1.label': { pl: 'iOS + Android', en: 'iOS + Android', ua: 'iOS + Android' },
    'aiplanner.stats.2.label': { pl: 'GROQ API', en: 'GROQ API', ua: 'GROQ API' },
    'aiplanner.stats.3.label': { pl: 'Auth + Firestore', en: 'Auth + Firestore', ua: 'Auth + Firestore' },
    'aiplanner.stats.4.label': { pl: 'Tab Navigator', en: 'Tab Navigator', ua: 'Tab Navigator' },
    
    'aiplanner.tabs.1': { pl: 'Zadania', en: 'Tasks', ua: 'Завдання' },
    'aiplanner.tabs.2': { pl: 'Nauka', en: 'Learning', ua: 'Навчання' },
    'aiplanner.tabs.3': { pl: 'Dashboard', en: 'Dashboard', ua: 'Dashboard' },
    'aiplanner.tabs.4': { pl: 'Podróże', en: 'Trips', ua: 'Подорожі' },
    'aiplanner.tabs.5': { pl: 'Statystyki', en: 'Stats', ua: 'Статистика' },
    
    'aiplanner.gallery.label': { pl: 'Screenshoty', en: 'Screenshots', ua: 'Скриншоти' },
    'aiplanner.gallery.title': { pl: 'Aplikacja w akcji', en: 'App in action', ua: 'Застосунок у дії' },
    'aiplanner.gallery.1': { pl: 'Dashboard', en: 'Dashboard', ua: 'Dashboard' },
    'aiplanner.gallery.2': { pl: 'Ekran zadań', en: 'Tasks screen', ua: 'Екран завдань' },
    'aiplanner.gallery.3': { pl: 'Planer nauki', en: 'Study planner', ua: 'Планувальник навчання' },
    'aiplanner.gallery.4': { pl: 'Szczegóły kursu', en: 'Course details', ua: 'Деталі курсу' },
    'aiplanner.gallery.5': { pl: 'Planer podróży', en: 'Trip planner', ua: 'Планувальник подорожей' },
    'aiplanner.gallery.6': { pl: 'Asystent AI', en: 'AI assistant', ua: 'AI-асистент' },
    'aiplanner.gallery.7': { pl: 'Statystyki', en: 'Statistics', ua: 'Статистика' },
    'aiplanner.gallery.8': { pl: 'Logowanie', en: 'Login', ua: 'Вхід' },
    
    'aiplanner.goal.label': { pl: 'Cel projektu', en: 'Project goal', ua: 'Мета проєкту' },
    'aiplanner.goal.h2': { pl: 'Jeden hub do<br><span class="grad-cyber">wszystkiego co ważne</span>', en: 'One hub for<br><span class="grad-cyber">everything important</span>', ua: 'Один хаб для<br><span class="grad-cyber">всього важливого</span>' },
    'aiplanner.goal.p1': { pl: 'Smart Planner łączy w jednej aplikacji mobilnej trzy obszary organizacji życia — naukę, zadania i podróże — z wbudowanym asystentem AI, który generuje gotowe harmonogramy i plany wycieczek na życzenie.',
                           en: 'Smart Planner combines three areas of life organization — learning, tasks and travel — in one mobile app with built-in AI assistant that generates ready-made schedules and trip plans on demand.',
                           ua: 'Smart Planner поєднує в одному мобільному застосунку три сфери організації життя — навчання, завдання та подорожі — із вбудованим AI-асистентом, який генерує готові розклади та плани подорожей на запит.' },
    'aiplanner.goal.p2': { pl: 'Backend oparty w całości na Firebase (Authentication + Cloud Firestore) zapewnia real-time sync między urządzeniami, pełny cykl uwierzytelniania i działanie na iOS oraz Androidzie bez osobnego serwera.',
                           en: 'Backend built entirely on Firebase (Authentication + Cloud Firestore) provides real-time sync between devices, full authentication cycle and works on iOS and Android without a separate server.',
                           ua: 'Backend, повністю побудований на Firebase (Authentication + Cloud Firestore), забезпечує синхронізацію в реальному часі між пристроями, повний цикл автентифікації та роботу на iOS і Android без окремого сервера.' },
    
    'aiplanner.feat.1.title': { pl: 'Asystent AI (LLaMA 3.1)', en: 'AI Assistant (LLaMA 3.1)', ua: 'AI-асистент (LLaMA 3.1)' },
    'aiplanner.feat.1.desc': { pl: 'GROQ API z modelem llama-3.1-8b-instant — generuje plan nauki dzień po dniu lub itinerary wycieczki, temperatura 0.6',
                              en: 'GROQ API with llama-3.1-8b-instant model — generates day-by-day study plan or trip itinerary, temperature 0.6',
                              ua: 'GROQ API з моделлю llama-3.1-8b-instant — генерує денний план навчання або маршрут подорожі, temperature 0.6' },
    'aiplanner.feat.2.title': { pl: 'Firebase real-time', en: 'Firebase real-time', ua: 'Firebase real-time' },
    'aiplanner.feat.2.desc': { pl: 'onSnapshot na każdym ekranie — dane aktualizują się bez przeładowania, cleanup w useEffect zapobiega wyciekom pamięci',
                              en: 'onSnapshot on every screen — data updates without reload, useEffect cleanup prevents memory leaks',
                              ua: 'onSnapshot на кожному екрані — дані оновлюються без перезавантаження, cleanup у useEffect запобігає витокам пам\'яті' },
    'aiplanner.feat.3.title': { pl: 'Planer nauki', en: 'Study planner', ua: 'Планувальник навчання' },
    'aiplanner.feat.3.desc': { pl: 'Kursy z paskami postępu, harmonogram w akordeonach DZIEŃ 1/2/..., licznik godzin nauki, odhaczanie tematów',
                              en: 'Courses with progress bars, accordion schedule DAY 1/2/..., study hours counter, topic checkmarks',
                              ua: 'Курси зі смугами прогресу, розклад в акордеонах ДЕНЬ 1/2/..., лічильник годин навчання, позначення тем' },
    'aiplanner.feat.4.title': { pl: 'Planer podróży', en: 'Trip planner', ua: 'Планувальник подорожей' },
    'aiplanner.feat.4.desc': { pl: 'Karty z dynamicznymi zdjęciami Unsplash CDN, odliczanie dni, lista pakowania z paskiem postępu, checkpointy AI',
                              en: 'Cards with dynamic Unsplash CDN images, countdown, packing list with progress bar, AI checkpoints',
                              ua: 'Картки з динамічними зображеннями Unsplash CDN, зворотний відлік днів, список речей зі смугою прогресу, AI-чекпоінти' },
    'aiplanner.feat.5.title': { pl: 'Statystyki z wykresami', en: 'Stats with charts', ua: 'Статистика з графіками' },
    'aiplanner.feat.5.desc': { pl: 'Animowany wykres liniowy trendu (buildSmoothPath), wykresy słupkowe z gradientami, zakres Dzień/Tydzień/Miesiąc',
                              en: 'Animated trend line chart (buildSmoothPath), gradient bar charts, Day/Week/Month range',
                              ua: 'Анімований лінійний графік тренду (buildSmoothPath), стовпчикові графіки з градієнтами, діапазон День/Тиждень/Місяць' },
    'aiplanner.feat.6.title': { pl: 'Dark mode + powiadomienia', en: 'Dark mode + notifications', ua: 'Темний режим + сповіщення' },
    'aiplanner.feat.6.desc': { pl: 'Globalny przełącznik motywu przekazywany jako prop do wszystkich ekranów, kontekstowe alerty o zaległościach',
                              en: 'Global theme toggle passed as prop to all screens, contextual alerts about backlog',
                              ua: 'Глобальний перемикач теми, переданий як prop до всіх екранів, контекстні сповіщення про заборгованості' },
    
    'aiplanner.screens.label': { pl: 'Ekrany', en: 'Screens', ua: 'Екрани' },
    'aiplanner.screens.title': { pl: 'Szczegóły funkcjonalności', en: 'Feature details', ua: 'Деталі функціональності' },
    'aiplanner.arch.1.title': { pl: 'Dashboard', en: 'Dashboard', ua: 'Dashboard' },
    'aiplanner.arch.1.desc': { pl: 'Centrum dowodzenia — statystyki zadań, kursów i wypraw, lista zadań na dziś, postęp planów nauki, najbliższa podróż z odliczaniem dni. TopBar z powiadomieniami i przełącznikiem dark mode.',
                              en: 'Command center — task, course and trip stats, today\'s task list, study plan progress, next trip with countdown. TopBar with notifications and dark mode toggle.',
                              ua: 'Командний центр — статистика завдань, курсів і подорожей, список завдань на сьогодні, прогрес планів навчання, найближча подорож зі зворотним відліком. TopBar зі сповіщеннями та перемикачем темного режиму.' },
    'aiplanner.arch.2.title': { pl: 'Zadania (TaskScreen)', en: 'Tasks (TaskScreen)', ua: 'Завдання (TaskScreen)' },
    'aiplanner.arch.2.desc': { pl: 'Lista to-do z filtrami (Wszystkie / Do zrobienia / Zrobione), wyszukiwarką live, statystykami aktywne/ukończone/postęp % i szybkim dodawaniem z pola na dole ekranu.',
                              en: 'To-do list with filters (All / TODO / Done), live search, stats active/completed/progress % and quick add field at bottom.',
                              ua: 'Список to-do з фільтрами (Усі / Зробити / Виконано), живим пошуком, статистикою активні/виконані/прогрес % і швидким додаванням через поле внизу екрана.' },
    'aiplanner.arch.3.title': { pl: 'Planer nauki', en: 'Study planner', ua: 'Планувальник навчання' },
    'aiplanner.arch.3.desc': { pl: 'Karty kursów z AnimatedProgressBar, widok szczegółowy z harmonogramem tematów w akordeonach (DZIEŃ 1, DZIEŃ 2...), licznik godzin nauki, odhaczanie tematów z auto-przeliczeniem postępu.',
                              en: 'Course cards with AnimatedProgressBar, detail view with topic schedule in accordions (DAY 1, DAY 2...), study hours counter, topic checkmarks with auto progress recalc.',
                              ua: 'Картки курсів з AnimatedProgressBar, детальний перегляд з розкладом тем в акордеонах (ДЕНЬ 1, ДЕНЬ 2...), лічильник годин навчання, позначення тем з автоматичним перерахунком прогресу.' },
    'aiplanner.arch.4.title': { pl: 'Planer podróży', en: 'Trip planner', ua: 'Планувальник подорожей' },
    'aiplanner.arch.4.desc': { pl: 'Karty wyjazdów z deterministycznym doborem zdjęć Unsplash (resolveTripImageUri na podstawie trip.id), odliczanie dni, lista pakowania z checkboxami i checkpointy generowane przez AI.',
                              en: 'Trip cards with deterministic Unsplash image selection (resolveTripImageUri by trip.id), countdown, packing list with checkboxes and AI-generated checkpoints.',
                              ua: 'Картки подорожей з детермінованим підбором зображень Unsplash (resolveTripImageUri за trip.id), зворотний відлік, список речей із чекбоксами та AI-згенеровані чекпоінти.' },
    'aiplanner.arch.5.title': { pl: 'Asystent AI', en: 'AI assistant', ua: 'AI-асистент' },
    'aiplanner.arch.5.desc': { pl: 'Chat z LLaMA 3.1 via GROQ API — tryb study generuje harmonogram DZIEŃ X + lista tematów, tryb travel generuje DZIEŃ X + atrakcje. Odpowiedź parsowana i zapisywana do Firestore przez modal.',
                              en: 'Chat with LLaMA 3.1 via GROQ API — study mode generates DAY X + topic list, travel mode generates DAY X + attractions. Response parsed and saved to Firestore via modal.',
                              ua: 'Чат з LLaMA 3.1 через GROQ API — режим study генерує ДЕНЬ X + список тем, режим travel генерує ДЕНЬ X + атракції. Відповідь парситься та зберігається у Firestore через модальне вікно.' },
    'aiplanner.arch.6.title': { pl: 'Statystyki', en: 'Statistics', ua: 'Статистика' },
    'aiplanner.arch.6.desc': { pl: 'Koło postępu z ogólnym wynikiem %, wskaźnik trendu (+X% vs poprzedni okres), animowany wykres liniowy, wykresy słupkowe planów i priorytetów, filtr Dzień / Tydzień / Miesiąc.',
                              en: 'Progress circle with overall score %, trend indicator (+X% vs prev period), animated line chart, plan and priority bar charts, Day / Week / Month filter.',
                              ua: 'Коло прогресу із загальним результатом %, індикатор тренду (+X% порівняно з попереднім періодом), анімований лінійний графік, стовпчикові графіки планів і пріоритетів, фільтр День / Тиждень / Місяць.' },
    
    'aiplanner.firestore.label': { pl: 'Architektura', en: 'Architecture', ua: 'Архітектура' },
    'aiplanner.firestore.title': { pl: 'Firestore — struktura danych', en: 'Firestore — data structure', ua: 'Firestore — структура даних' },
    
    'aiplanner.tech.label': { pl: 'Technologie', en: 'Technologies', ua: 'Технології' },
    'aiplanner.tech.1.name': { pl: 'React Native 0.73', en: 'React Native 0.73', ua: 'React Native 0.73' },
    'aiplanner.tech.1.desc': { pl: 'Cross-platform iOS + Android. Hooks: useState, useEffect, useCallback, useMemo. Komponenty funkcyjne.',
                              en: 'Cross-platform iOS + Android. Hooks: useState, useEffect, useCallback, useMemo. Functional components.',
                              ua: 'Крос-платформність iOS + Android. Хуки: useState, useEffect, useCallback, useMemo. Функціональні компоненти.' },
    'aiplanner.tech.2.name': { pl: 'TypeScript 5.x', en: 'TypeScript 5.x', ua: 'TypeScript 5.x' },
    'aiplanner.tech.2.desc': { pl: 'Typowanie statyczne, interfejsy Task, DashboardProps, TripItem, StudyPlan — bezpieczeństwo typów w całym projekcie.',
                              en: 'Static typing, interfaces Task, DashboardProps, TripItem, StudyPlan — type safety across project.',
                              ua: 'Статична типізація, інтерфейси Task, DashboardProps, TripItem, StudyPlan — безпека типів у всьому проєкті.' },
    'aiplanner.tech.3.name': { pl: 'Firebase', en: 'Firebase', ua: 'Firebase' },
    'aiplanner.tech.3.desc': { pl: 'Authentication (login, rejestracja, reset hasła), Cloud Firestore z real-time listenerami onSnapshot.',
                              en: 'Authentication (login, signup, password reset), Cloud Firestore with real-time onSnapshot listeners.',
                              ua: 'Authentication (вхід, реєстрація, скидання пароля), Cloud Firestore зі слухачами onSnapshot у реальному часі.' },
    'aiplanner.tech.4.name': { pl: 'GROQ API', en: 'GROQ API', ua: 'GROQ API' },
    'aiplanner.tech.4.desc': { pl: 'LLaMA 3.1 8B Instant — generowanie harmonogramów nauki i planów podróży. Klucz API przez env variable.',
                              en: 'LLaMA 3.1 8B Instant — study schedule and trip plan generation. API key via env variable.',
                              ua: 'LLaMA 3.1 8B Instant — генерація розкладів навчання та планів подорожей. API-ключ через змінну середовища.' },
    'aiplanner.tech.5.name': { pl: 'React Navigation', en: 'React Navigation', ua: 'React Navigation' },
    'aiplanner.tech.5.desc': { pl: 'Tab Navigator (5 ekranów) + Stack Navigator dla auth. Nawigacja przez route.params.mode (study / travel).',
                              en: 'Tab Navigator (5 screens) + Stack Navigator for auth. Navigation via route.params.mode (study / travel).',
                              ua: 'Tab Navigator (5 екранів) + Stack Navigator для auth. Навігація через route.params.mode (study / travel).' },
    'aiplanner.tech.6.name': { pl: 'Unsplash CDN', en: 'Unsplash CDN', ua: 'Unsplash CDN' },
    'aiplanner.tech.6.desc': { pl: '15 rotujących zdjęć podróży — deterministyczny wybór przez resolveTripImageUri(), fallback chain przez handleImageError.',
                              en: '15 rotating travel photos — deterministic selection via resolveTripImageUri(), fallback chain via handleImageError.',
                              ua: '15 фотографій подорожей, що ротуються — детермінований вибір через resolveTripImageUri(), ланцюг резервних варіантів через handleImageError.' },
    
    'aiplanner.deliverables.label': { pl: 'Projekt', en: 'Project', ua: 'Проєкт' },
    'aiplanner.deliverables.title': { pl: 'Co zostało dostarczone', en: 'What was delivered', ua: 'Що було реалізовано' },
    'aiplanner.deliverables.1.title': { pl: 'Auth flow', en: 'Auth flow', ua: 'Auth flow' },
    'aiplanner.deliverables.1.desc': { pl: 'Rejestracja, logowanie, reset hasła przez Firebase — obsługa błędów auth/email-already-in-use',
                                       en: 'Signup, login, password reset via Firebase — auth/email-already-in-use error handling',
                                       ua: 'Реєстрація, вхід, скидання пароля через Firebase — обробка помилки auth/email-already-in-use' },
    'aiplanner.deliverables.2.title': { pl: 'AI Planner', en: 'AI Planner', ua: 'AI Planner' },
    'aiplanner.deliverables.2.desc': { pl: 'Chat z LLaMA 3.1, parsowanie odpowiedzi i zapis gotowego planu do Firestore przez modal',
                                       en: 'Chat with LLaMA 3.1, parse response and save plan to Firestore via modal',
                                       ua: 'Чат з LLaMA 3.1, парсинг відповіді та збереження готового плану у Firestore через модальне вікно' },
    'aiplanner.deliverables.3.title': { pl: 'Wykresy animowane', en: 'Animated charts', ua: 'Анімовані графіки' },
    'aiplanner.deliverables.3.desc': { pl: 'AnimatedLineChart, GradientBarChart, CircleProgress, RangeTabs, TrendIndicator',
                                       en: 'AnimatedLineChart, GradientBarChart, CircleProgress, RangeTabs, TrendIndicator',
                                       ua: 'AnimatedLineChart, GradientBarChart, CircleProgress, RangeTabs, TrendIndicator' },
    'aiplanner.deliverables.4.title': { pl: 'Dark mode', en: 'Dark mode', ua: 'Темний режим' },
    'aiplanner.deliverables.4.desc': { pl: 'Globalny isDarkMode przekazywany jako prop do wszystkich ekranów — spójny motyw wizualny',
                                       en: 'Global isDarkMode passed as prop to all screens — consistent visual theme',
                                       ua: 'Глобальний isDarkMode, переданий як prop до всіх екранів — узгоджена візуальна тема' },
    'aiplanner.deliverables.5.title': { pl: 'Powiadomienia', en: 'Notifications', ua: 'Сповіщення' },
    'aiplanner.deliverables.5.desc': { pl: 'Kontekstowe alerty o zaległościach i postępach — dynamicznie wyliczane na podstawie danych z Firestore',
                                       en: 'Contextual alerts for backlog and progress — dynamically calculated from Firestore data',
                                       ua: 'Контекстні сповіщення про заборгованості та прогрес — динамічно обчислюються на основі даних Firestore' },
    'aiplanner.deliverables.6.title': { pl: 'Real-time sync', en: 'Real-time sync', ua: 'Синхронізація в реальному часі' },
    'aiplanner.deliverables.6.desc': { pl: 'onSnapshot na wszystkich ekranach, cleanup useEffect — zero wycieków pamięci przy odmontowaniu',
                                       en: 'onSnapshot on all screens, useEffect cleanup — zero memory leaks on unmount',
                                       ua: 'onSnapshot на всіх екранах, cleanup useEffect — нуль витоків пам\'яті при демонтуванні' },
    
    'aiplanner.team.label': { pl: 'Autor', en: 'Author', ua: 'Автор' },
    'aiplanner.team.title': { pl: 'Projekt indywidualny', en: 'Solo project', ua: 'Індивідуальний проєкт' },
    'aiplanner.team.name': { pl: 'Andrii Torianyk', en: 'Andrii Torianyk', ua: 'Андрій Торяник' },
    'aiplanner.team.role': { pl: 'UI · React Native · Firebase · GROQ AI · Wykresy · Nawigacja', en: 'UI · React Native · Firebase · GROQ AI · Charts · Navigation', ua: 'UI · React Native · Firebase · GROQ AI · Графіки · Навігація' },

    /* ════ VAULTIFY ════ */
    'vaultify.category':  { pl: 'Web Development · Bezpieczeństwo', en: 'Web Development · Security', ua: 'Веброзробка · Безпека' },
    'vaultify.badge.uni': { pl: 'Projekt własny', en: 'Personal project', ua: 'Власний проєкт' },
    'vaultify.tagline':   { pl: 'Zero-knowledge aplikacja webowa do jednorazowego udostępniania sekretów — hasła, klucze API i pliki szyfrowane lokalnie w przeglądarce, zanim cokolwiek trafi na serwer.',
                            en: 'Zero-knowledge web app for one-time secret sharing — passwords, API keys and files encrypted locally in the browser before anything reaches the server.',
                            ua: 'Zero-knowledge вебзастосунок для одноразового обміну секретами — паролі, API-ключі та файли шифруються локально в браузері, перш ніж щось потрапить на сервер.' },

    'vaultify.stats.1.label': { pl: 'Język',           en: 'Language', ua: 'Мова' },
    'vaultify.stats.2.label': { pl: 'Framework',        en: 'Framework', ua: 'Фреймворк' },
    'vaultify.stats.3.label': { pl: 'Szyfrowanie',      en: 'Encryption', ua: 'Шифрування' },
    'vaultify.stats.4.label': { pl: 'Architektura',     en: 'Architecture', ua: 'Архітектура' },

    'vaultify.gallery':   { pl: 'Aplikacja w akcji', en: 'App in action', ua: 'Застосунок у дії' },
    'vaultify.overlay.1': { pl: 'Ekran główny', en: 'Home screen', ua: 'Головний екран' },
    'vaultify.overlay.2': { pl: 'Tworzenie sekretu — opcje', en: 'Creating a secret — options', ua: 'Створення секрету — опції' },
    'vaultify.overlay.3': { pl: 'Link gotowy do wysłania', en: 'Link ready to send', ua: 'Посилання готове до надсилання' },
    'vaultify.overlay.4': { pl: 'Sekret chroniony hasłem', en: 'Password-protected secret', ua: 'Секрет захищений паролем' },
    'vaultify.overlay.5': { pl: 'Read-once — sekret zniszczony po odczycie', en: 'Read-once — secret destroyed after reading', ua: 'Read-once — секрет знищується після прочитання' },

    'vaultify.goal.h2': { pl: 'Sekret, którego<br><span class="grad">serwer nie widzi</span>',
                          en: 'A secret the<br><span class="grad">server never sees</span>',
                          ua: 'Секрет, якого<br><span class="grad">сервер ніколи не бачить</span>' },
    'vaultify.goal.p1': { pl: 'Vaultify pozwala utworzyć link zawierający zaszyfrowany sekret, który może zostać odszyfrowany wyłącznie przez posiadacza klucza. Klucz nigdy nie trafia do serwera — żyje jedynie we fragmencie adresu URL (#k=...), którego przeglądarki nie wysyłają.',
                          en: 'Vaultify lets you create a link containing an encrypted secret that only the key holder can decrypt. The key never reaches the server — it lives only in the URL fragment (#k=...), which browsers never send.',
                          ua: 'Vaultify дозволяє створити посилання із зашифрованим секретом, який може розшифрувати лише власник ключа. Ключ ніколи не потрапляє на сервер — він існує лише у фрагменті URL (#k=...), який браузери ніколи не надсилають.' },
    'vaultify.goal.p2': { pl: 'Cała logika kryptograficzna działa lokalnie przez Web Crypto API, a backend przechowuje wyłącznie zaszyfrowany ciphertext i realizuje bezpieczny, jednorazowy odczyt danych z bazy.',
                          en: 'All cryptographic logic runs locally via the Web Crypto API, while the backend stores only the encrypted ciphertext and performs a secure, one-time read from the database.',
                          ua: 'Уся криптографічна логіка виконується локально через Web Crypto API, а backend зберігає лише зашифрований ciphertext і виконує безпечне одноразове читання даних із бази.' },

    'vaultify.feat.1.title': { pl: 'Szyfrowanie w przeglądarce', en: 'In-browser encryption', ua: 'Шифрування в браузері' },
    'vaultify.feat.1.desc':  { pl: 'AES-256-GCM przez Web Crypto API — serwer nigdy nie widzi treści ani klucza', en: 'AES-256-GCM via Web Crypto API — the server never sees the content or the key', ua: 'AES-256-GCM через Web Crypto API — сервер ніколи не бачить вміст чи ключ' },
    'vaultify.feat.2.title': { pl: 'Read-once', en: 'Read-once', ua: 'Read-once' },
    'vaultify.feat.2.desc':  { pl: 'Atomowy odczyt-i-usunięcie (SELECT ... FOR UPDATE + DELETE) eliminuje race conditions', en: 'Atomic read-and-delete (SELECT ... FOR UPDATE + DELETE) eliminates race conditions', ua: 'Атомарне читання-і-видалення (SELECT ... FOR UPDATE + DELETE) усуває race conditions' },
    'vaultify.feat.3.title': { pl: 'Ochrona hasłem', en: 'Password protection', ua: 'Захист паролем' },
    'vaultify.feat.3.desc':  { pl: 'Klucz wyprowadzany z hasła przez PBKDF2 (600 000 iteracji), nie trafia do URL', en: 'Key derived from password via PBKDF2 (600,000 iterations), never enters the URL', ua: 'Ключ виводиться з пароля через PBKDF2 (600 000 ітерацій), ніколи не потрапляє в URL' },
    'vaultify.feat.4.title': { pl: 'Podział sekretu (Shamir)', en: "Secret splitting (Shamir)", ua: 'Розділення секрету (Shamir)' },
    'vaultify.feat.4.desc':  { pl: 'Klucz dzielony na udziały (threshold scheme) nad GF(256)', en: 'Key split into shares (threshold scheme) over GF(256)', ua: 'Ключ розділяється на частки (threshold scheme) над GF(256)' },
    'vaultify.feat.5.title': { pl: 'Tryb wabika (duress)', en: 'Duress mode', ua: 'Режим приманки (duress)' },
    'vaultify.feat.5.desc':  { pl: 'Jedno hasło, dwa niezależne szyfrowania — bez ujawniania, która ścieżka trafiła', en: 'One password, two independent encryptions — without revealing which path was hit', ua: 'Один пароль, два незалежні шифрування — без розкриття, який шлях спрацював' },

    'vaultify.tech.1.name': { pl: 'TypeScript', en: 'TypeScript', ua: 'TypeScript' },
    'vaultify.tech.1.desc': { pl: 'Język główny projektu — pełne typowanie logiki kryptograficznej i UI.', en: 'Main project language — full typing of crypto logic and UI.', ua: 'Основна мова проєкту — повна типізація криптологіки та UI.' },
    'vaultify.tech.2.name': { pl: 'Next.js 16', en: 'Next.js 16', ua: 'Next.js 16' },
    'vaultify.tech.2.desc': { pl: 'App Router — strony, routy API i layouty renderowane po stronie klienta i serwera.', en: 'App Router — pages, API routes and layouts rendered client- and server-side.', ua: 'App Router — сторінки, API-маршрути та лейаути, що рендеряться на клієнті та сервері.' },
    'vaultify.tech.3.name': { pl: 'Tailwind CSS', en: 'Tailwind CSS', ua: 'Tailwind CSS' },
    'vaultify.tech.3.desc': { pl: 'Utility-first stylowanie komponentów interfejsu.', en: 'Utility-first styling of UI components.', ua: 'Utility-first стилізація компонентів інтерфейсу.' },
    'vaultify.tech.4.name': { pl: 'shadcn/ui', en: 'shadcn/ui', ua: 'shadcn/ui' },
    'vaultify.tech.4.desc': { pl: 'Gotowe, dostępne komponenty UI budowane na Radix i Tailwind.', en: 'Ready-made, accessible UI components built on Radix and Tailwind.', ua: 'Готові, доступні UI-компоненти на основі Radix та Tailwind.' },
    'vaultify.tech.5.name': { pl: 'Framer Motion', en: 'Framer Motion', ua: 'Framer Motion' },
    'vaultify.tech.5.desc': { pl: 'Animacje przejść i mikrointerakcji w interfejsie.', en: 'Transition and micro-interaction animations in the UI.', ua: 'Анімації переходів та мікровзаємодій в інтерфейсі.' },
    'vaultify.tech.6.name': { pl: 'Web Crypto API', en: 'Web Crypto API', ua: 'Web Crypto API' },
    'vaultify.tech.6.desc': { pl: 'Natywne API przeglądarki — AES-GCM 256-bit oraz PBKDF2 do wyprowadzania kluczy.', en: "Native browser API — 256-bit AES-GCM and PBKDF2 for key derivation.", ua: 'Нативне API браузера — 256-бітний AES-GCM та PBKDF2 для виведення ключів.' },
    'vaultify.tech.7.name': { pl: 'Supabase (Postgres)', en: 'Supabase (Postgres)', ua: 'Supabase (Postgres)' },
    'vaultify.tech.7.desc': { pl: 'Baza danych z Row Level Security i funkcjami SECURITY DEFINER do bezpiecznego odczytu.', en: 'Database with Row Level Security and SECURITY DEFINER functions for safe reads.', ua: 'База даних із Row Level Security та функціями SECURITY DEFINER для безпечного читання.' },
    'vaultify.tech.8.name': { pl: 'pg_cron', en: 'pg_cron', ua: 'pg_cron' },
    'vaultify.tech.8.desc': { pl: 'Cykliczne usuwanie przeterminowanych wpisów co ~15 minut.', en: 'Periodically removes expired entries every ~15 minutes.', ua: 'Періодично видаляє прострочені записи кожні ~15 хвилин.' },
    'vaultify.tech.9.name': { pl: 'Vercel', en: 'Vercel', ua: 'Vercel' },
    'vaultify.tech.9.desc': { pl: 'Hosting aplikacji Next.js z automatycznym deploymentem.', en: 'Hosting for the Next.js app with automatic deployment.', ua: 'Хостинг застосунку Next.js з автоматичним розгортанням.' },

    'vaultify.arch.1.title': { pl: 'Klucz nigdy nie trafia na serwer', en: 'The key never reaches the server', ua: 'Ключ ніколи не потрапляє на сервер' },
    'vaultify.arch.1.desc':  { pl: 'W trybie bez hasła losowy klucz AES-GCM jest eksportowany do Base64URL i umieszczany wyłącznie we fragmencie adresu URL (#k=...).', en: 'In no-password mode, a random AES-GCM key is exported to Base64URL and placed only in the URL fragment (#k=...).', ua: 'У режимі без пароля випадковий ключ AES-GCM експортується в Base64URL і розміщується лише у фрагменті URL (#k=...).' },
    'vaultify.arch.2.title': { pl: 'Szyfrowanie lokalne', en: 'Local encryption', ua: 'Локальне шифрування' },
    'vaultify.arch.2.desc':  { pl: 'Tekst lub plik jest szyfrowany w przeglądarce (AES-GCM, 12-bajtowy IV) zanim ciphertext trafi do Supabase.', en: 'Text or a file is encrypted in the browser (AES-GCM, 12-byte IV) before the ciphertext reaches Supabase.', ua: 'Текст або файл шифрується в браузері (AES-GCM, 12-байтовий IV), перш ніж ciphertext потрапить до Supabase.' },
    'vaultify.arch.3.title': { pl: 'Tryb z hasłem — PBKDF2', en: 'Password mode — PBKDF2', ua: 'Режим з паролем — PBKDF2' },
    'vaultify.arch.3.desc':  { pl: 'Klucz jest wyprowadzany z hasła przy użyciu PBKDF2 z solą (600 000 iteracji). Klucz nie opuszcza wtedy odbiorcy.', en: 'The key is derived from the password using salted PBKDF2 (600,000 iterations). The key never leaves the recipient.', ua: 'Ключ виводиться з пароля за допомогою PBKDF2 із сіллю (600 000 ітерацій). Ключ ніколи не залишає одержувача.' },
    'vaultify.arch.4.title': { pl: 'Read-once na poziomie bazy', en: 'Read-once at the database level', ua: 'Read-once на рівні бази даних' },
    'vaultify.arch.4.desc':  { pl: 'Odczyt sekretu i jego usunięcie są atomowe, co eliminuje wyścig między dwiema równoczesnymi próbami odczytu.', en: 'Reading the secret and deleting it are atomic, eliminating a race between two simultaneous read attempts.', ua: 'Читання секрету та його видалення є атомарними, що усуває гонку між двома одночасними спробами читання.' },
    'vaultify.arch.5.title': { pl: "Shamir's Secret Sharing", en: "Shamir's Secret Sharing", ua: "Shamir's Secret Sharing" },
    'vaultify.arch.5.desc':  { pl: 'Klucz może zostać podzielony na udziały nad GF(256), zgodnie z arytmetyką używaną przez AES.', en: 'The key can be split into shares over GF(256), consistent with the arithmetic AES uses.', ua: 'Ключ можна розділити на частки над GF(256), узгоджено з арифметикою, яку використовує AES.' },
    'vaultify.arch.6.title': { pl: 'Tryb duress', en: 'Duress mode', ua: 'Режим duress' },
    'vaultify.arch.6.desc':  { pl: 'Pod jednym hasłem ukryte są dwa niezależne szyfrowania. Aplikacja najpierw próbuje odszyfrować „prawdziwy” sekret, w razie niepowodzenia — wabik.', en: 'Two independent encryptions hide behind one password. The app first tries to decrypt the "real" secret, falling back to the decoy on failure.', ua: 'Під одним паролем приховані два незалежні шифрування. Застосунок спочатку намагається розшифрувати «справжній» секрет, у разі невдачі — приманку.' },

    'vaultify.security.label': { pl: 'Bezpieczeństwo', en: 'Security', ua: 'Безпека' },
    'vaultify.security.title': { pl: 'Operacyjne środki ochrony', en: 'Operational safeguards', ua: 'Операційні заходи захисту' },
    'vaultify.ctrl.1': { pl: 'Brak publicznego SELECT — dostęp tylko przez funkcje SECURITY DEFINER', en: 'No public SELECT — access only via SECURITY DEFINER functions', ua: 'Немає публічного SELECT — доступ лише через функції SECURITY DEFINER' },
    'vaultify.ctrl.2': { pl: 'Sekret usuwany atomowo po pierwszym odczycie', en: 'Secret deleted atomically after first read', ua: 'Секрет видаляється атомарно після першого прочитання' },
    'vaultify.ctrl.3': { pl: 'Losowy 12-bajtowy wektor inicjalizujący dla każdego szyfrowania', en: 'Random 12-byte initialization vector for every encryption', ua: 'Випадковий 12-байтовий вектор ініціалізації для кожного шифрування' },
    'vaultify.ctrl.4': { pl: 'pg_cron czyści przeterminowane wpisy co ~15 minut', en: 'pg_cron clears expired entries every ~15 minutes', ua: 'pg_cron очищує прострочені записи кожні ~15 хвилин' },
    'vaultify.ctrl.5': { pl: 'Service role key nigdy nie trafia do klienta', en: 'The service role key never reaches the client', ua: 'Ключ service role ніколи не потрапляє до клієнта' },
    'vaultify.ctrl.6': { pl: 'Fragment URL z kluczem nigdy nie jest wysyłany do serwera', en: 'The URL fragment holding the key is never sent to the server', ua: 'Фрагмент URL із ключем ніколи не надсилається на сервер' },

    'vaultify.req.pill.1': { pl: 'Node.js 18+', en: 'Node.js 18+', ua: 'Node.js 18+' },
    'vaultify.req.pill.2': { pl: 'npm', en: 'npm', ua: 'npm' },
    'vaultify.req.pill.3': { pl: 'Konto Supabase', en: 'Supabase account', ua: 'Акаунт Supabase' },
    'vaultify.req.pill.4': { pl: 'Przeglądarka z Web Crypto API', en: 'A browser with Web Crypto API', ua: 'Браузер з підтримкою Web Crypto API' },
    'vaultify.step.1.title': { pl: 'Klonuj repozytorium i zainstaluj zależności', en: 'Clone the repository and install dependencies', ua: 'Клонуй репозиторій і встанови залежності' },
    'vaultify.step.2.title': { pl: 'Skonfiguruj zmienne środowiskowe', en: 'Configure environment variables', ua: 'Налаштуй змінні середовища' },
    'vaultify.step.3.title': { pl: 'Uruchom w trybie deweloperskim', en: 'Run in development mode', ua: 'Запусти в режимі розробки' },
    'vaultify.step.4.title': { pl: 'Build produkcyjny', en: 'Production build', ua: 'Продакшн-збірка' },

    /* ════ VAELOQ ════ */
    'vaeloq.category': { pl: 'Web Development · RAG / AI', en: 'Web Development · RAG / AI', ua: 'Веброзробка · RAG / AI' },
    'vaeloq.status':   { pl: 'W realizacji', en: 'In progress', ua: 'У розробці' },
    'vaeloq.tagline':  { pl: 'Aplikacja Next.js realizująca pełny pipeline RAG — wgrywasz PDF, system tnie go na fragmenty, indeksuje jako wektory w pgvector i odpowiada na pytania, osadzając odpowiedź w konkretnych cytatach ze źródła.',
                         en: 'A Next.js app running a full RAG pipeline — upload a PDF, the system splits it into chunks, indexes them as vectors in pgvector, and answers questions by grounding the response in specific source citations.',
                         ua: 'Застосунок Next.js, що реалізує повний RAG-конвеєр — завантажуєш PDF, система розбиває його на фрагменти, індексує як вектори в pgvector і відповідає на запитання, обґрунтовуючи відповідь конкретними цитатами з джерела.' },

    'vaeloq.stats.1.label': { pl: 'Język', en: 'Language', ua: 'Мова' },
    'vaeloq.stats.2.label': { pl: 'Framework', en: 'Framework', ua: 'Фреймворк' },
    'vaeloq.stats.3.label': { pl: 'LLM + Embeddingi', en: 'LLM + Embeddings', ua: 'LLM + Ембединги' },
    'vaeloq.stats.4.label': { pl: 'Wyszukiwanie', en: 'Search', ua: 'Пошук' },

    'vaeloq.gallery':   { pl: 'Aplikacja w akcji', en: 'App in action', ua: 'Застосунок у дії' },
    'vaeloq.overlay.1': { pl: 'Ekran startowy — wgraj PDF', en: 'Start screen — upload a PDF', ua: 'Стартовий екран — завантаж PDF' },
    'vaeloq.overlay.2': { pl: 'Dokument zaindeksowany', en: 'Document indexed', ua: 'Документ проіндексовано' },
    'vaeloq.overlay.3': { pl: 'Odpowiedź z cytatami', en: 'Answer with citations', ua: 'Відповідь із цитатами' },
    'vaeloq.overlay.4': { pl: 'Rozmowa wielotorowa z dokumentem', en: 'Multi-turn conversation with the document', ua: 'Багатоетапна розмова з документом' },

    'vaeloq.goal.h2': { pl: 'Dokument,<br><span class="grad">z którym można rozmawiać</span>',
                        en: 'A document<br><span class="grad">you can talk to</span>',
                        ua: 'Документ,<br><span class="grad">з яким можна розмовляти</span>' },
    'vaeloq.goal.p1': { pl: 'Vaeloq zamienia statyczny PDF w źródło, które można odpytywać w języku naturalnym. Zamiast przeszukiwać dokument ręcznie, użytkownik zadaje pytanie, a model generuje odpowiedź opartą wyłącznie na fragmentach faktycznie obecnych w treści.',
                        en: 'Vaeloq turns a static PDF into a source you can query in natural language. Instead of manually searching the document, the user asks a question and the model generates an answer grounded only in fragments actually present in the content.',
                        ua: 'Vaeloq перетворює статичний PDF на джерело, яке можна опитувати природною мовою. Замість ручного пошуку в документі, користувач ставить питання, а модель генерує відповідь, засновану лише на фрагментах, реально присутніх у змісті.' },
    'vaeloq.goal.p2': { pl: 'Każda odpowiedź jest strumieniowana na żywo i osadzona w konkretnych fragmentach źródłowych wraz z numerem strony i procentowym dopasowaniem — dzięki czemu można zweryfikować, skąd pochodzi informacja.',
                        en: 'Every answer is streamed live and grounded in specific source fragments along with the page number and match percentage — so you can verify where the information comes from.',
                        ua: 'Кожна відповідь транслюється наживо та обґрунтовується конкретними фрагментами джерела разом із номером сторінки та відсотком відповідності — це дає змогу перевірити, звідки взято інформацію.' },

    'vaeloq.feat.1.title': { pl: 'Parsowanie PDF', en: 'PDF parsing', ua: 'Парсинг PDF' },
    'vaeloq.feat.1.desc':  { pl: 'Ekstrakcja tekstu i podział na logiczne fragmenty (chunking)', en: 'Text extraction and splitting into logical fragments (chunking)', ua: 'Витягування тексту та розбиття на логічні фрагменти (chunking)' },
    'vaeloq.feat.2.title': { pl: 'Embeddingi Gemini', en: 'Gemini embeddings', ua: 'Ембединги Gemini' },
    'vaeloq.feat.2.desc':  { pl: 'Każdy fragment zamieniany na wektor i zapisywany w Supabase', en: 'Each fragment is converted into a vector and stored in Supabase', ua: 'Кожен фрагмент перетворюється на вектор і зберігається в Supabase' },
    'vaeloq.feat.3.title': { pl: 'Wyszukiwanie wektorowe', en: 'Vector search', ua: 'Векторний пошук' },
    'vaeloq.feat.3.desc':  { pl: 'pgvector znajduje fragmenty najbardziej podobne do pytania', en: 'pgvector finds the fragments most similar to the question', ua: 'pgvector знаходить фрагменти, найбільш схожі на запитання' },
    'vaeloq.feat.4.title': { pl: 'Strumieniowane odpowiedzi', en: 'Streamed answers', ua: 'Потокові відповіді' },
    'vaeloq.feat.4.desc':  { pl: 'Odpowiedź generowana na żywo, token po tokenie', en: 'Answer generated live, token by token', ua: 'Відповідь генерується наживо, токен за токеном' },
    'vaeloq.feat.5.title': { pl: 'Cytaty źródłowe', en: 'Source citations', ua: 'Цитати джерела' },
    'vaeloq.feat.5.desc':  { pl: 'Każda odpowiedź linkuje do fragmentów ze stroną i % dopasowania', en: 'Every answer links to fragments with page number and match %', ua: 'Кожна відповідь посилається на фрагменти зі сторінкою та % відповідності' },

    'vaeloq.tech.1.name': { pl: 'TypeScript', en: 'TypeScript', ua: 'TypeScript' },
    'vaeloq.tech.1.desc': { pl: 'Główny język projektu — API routes, komponenty i logika biblioteczna.', en: 'Main project language — API routes, components and library logic.', ua: 'Основна мова проєкту — API-маршрути, компоненти та бібліотечна логіка.' },
    'vaeloq.tech.2.name': { pl: 'Next.js 16', en: 'Next.js 16', ua: 'Next.js 16' },
    'vaeloq.tech.2.desc': { pl: 'App Router — split-screen layout, API routes process-document i chat.', en: 'App Router — split-screen layout, process-document and chat API routes.', ua: 'App Router — розділений лейаут, API-маршрути process-document і chat.' },
    'vaeloq.tech.3.name': { pl: '@google/genai (Gemini)', en: '@google/genai (Gemini)', ua: '@google/genai (Gemini)' },
    'vaeloq.tech.3.desc': { pl: 'Model do generacji odpowiedzi oraz do liczenia embeddingów fragmentów.', en: 'Model used for answer generation and for computing fragment embeddings.', ua: 'Модель для генерації відповідей та обчислення ембедингів фрагментів.' },
    'vaeloq.tech.4.name': { pl: 'Supabase + pgvector', en: 'Supabase + pgvector', ua: 'Supabase + pgvector' },
    'vaeloq.tech.4.desc': { pl: 'Postgres z rozszerzeniem pgvector do przechowywania i przeszukiwania wektorów.', en: 'Postgres with the pgvector extension for storing and searching vectors.', ua: 'Postgres із розширенням pgvector для зберігання та пошуку векторів.' },
    'vaeloq.tech.5.name': { pl: 'pdf-parse', en: 'pdf-parse', ua: 'pdf-parse' },
    'vaeloq.tech.5.desc': { pl: 'Ekstrakcja tekstu z plików PDF po stronie serwera.', en: 'Server-side text extraction from PDF files.', ua: 'Серверне витягування тексту з PDF-файлів.' },
    'vaeloq.tech.6.name': { pl: 'shadcn/ui', en: 'shadcn/ui', ua: 'shadcn/ui' },
    'vaeloq.tech.6.desc': { pl: 'Komponenty interfejsu — panel dokumentu, panel czatu, dialogi.', en: 'UI components — document panel, chat panel, dialogs.', ua: 'UI-компоненти — панель документа, панель чату, діалоги.' },
    'vaeloq.tech.7.name': { pl: 'Framer Motion', en: 'Framer Motion', ua: 'Framer Motion' },
    'vaeloq.tech.7.desc': { pl: 'Animacje przejść i mikrointerakcji w interfejsie czatu.', en: 'Transition and micro-interaction animations in the chat interface.', ua: 'Анімації переходів і мікровзаємодій в інтерфейсі чату.' },
    'vaeloq.tech.8.name': { pl: 'Lucide React', en: 'Lucide React', ua: 'Lucide React' },
    'vaeloq.tech.8.desc': { pl: 'Zestaw ikon używany w całym interfejsie.', en: 'Icon set used throughout the interface.', ua: 'Набір іконок, що використовується в усьому інтерфейсі.' },

    'vaeloq.arch.1.title': { pl: 'Wgranie dokumentu', en: 'Document upload', ua: 'Завантаження документа' },
    'vaeloq.arch.1.desc':  { pl: 'document-panel.tsx wysyła plik PDF do API route app/api/process-document.', en: 'document-panel.tsx sends the PDF file to the app/api/process-document API route.', ua: 'document-panel.tsx надсилає PDF-файл до API-маршруту app/api/process-document.' },
    'vaeloq.arch.2.title': { pl: 'Ekstrakcja i chunking', en: 'Extraction and chunking', ua: 'Витягування та chunking' },
    'vaeloq.arch.2.desc':  { pl: 'lib/document-processor.ts wyciąga tekst przez pdf-parse i dzieli dokument na logiczne fragmenty.', en: 'lib/document-processor.ts extracts text via pdf-parse and splits the document into logical fragments.', ua: 'lib/document-processor.ts витягує текст через pdf-parse і розбиває документ на логічні фрагменти.' },
    'vaeloq.arch.3.title': { pl: 'Embeddingi', en: 'Embeddings', ua: 'Ембединги' },
    'vaeloq.arch.3.desc':  { pl: 'lib/embeddings.ts wysyła każdy fragment do modelu Gemini i otrzymuje wektor reprezentujący jego treść.', en: 'lib/embeddings.ts sends each fragment to the Gemini model and receives a vector representing its content.', ua: 'lib/embeddings.ts надсилає кожен фрагмент до моделі Gemini й отримує вектор, що представляє його зміст.' },
    'vaeloq.arch.4.title': { pl: 'Zapis w pgvector', en: 'Storing in pgvector', ua: 'Збереження в pgvector' },
    'vaeloq.arch.4.desc':  { pl: 'lib/supabase.ts zapisuje fragmenty i wektory w tabeli Postgres z rozszerzeniem pgvector.', en: 'lib/supabase.ts stores fragments and vectors in a Postgres table with the pgvector extension.', ua: 'lib/supabase.ts зберігає фрагменти та вектори в таблиці Postgres із розширенням pgvector.' },
    'vaeloq.arch.5.title': { pl: 'Wyszukiwanie podobieństwa', en: 'Similarity search', ua: 'Пошук за подібністю' },
    'vaeloq.arch.5.desc':  { pl: 'API chat zamienia pytanie na wektor i pobiera najbardziej podobne fragmenty (cosine similarity).', en: 'The chat API converts the question into a vector and retrieves the most similar fragments (cosine similarity).', ua: 'API chat перетворює запитання на вектор і отримує найбільш схожі фрагменти (cosine similarity).' },
    'vaeloq.arch.6.title': { pl: 'Generacja i streaming', en: 'Generation and streaming', ua: 'Генерація та потокова передача' },
    'vaeloq.arch.6.desc':  { pl: 'Fragmenty + pytanie trafiają do Gemini, a odpowiedź jest strumieniowana do chat-panel.tsx wraz z cytatami.', en: 'Fragments + question go to Gemini, and the answer is streamed to chat-panel.tsx along with citations.', ua: 'Фрагменти + запитання надходять до Gemini, а відповідь транслюється до chat-panel.tsx разом із цитатами.' },

    'vaeloq.notes.label': { pl: 'Uwagi techniczne', en: 'Technical notes', ua: 'Технічні примітки' },
    'vaeloq.notes.title': { pl: 'Co warto wiedzieć', en: 'Good to know', ua: 'Що варто знати' },
    'vaeloq.note.1': { pl: 'pdf-parse, pdfjs-dist i @napi-rs/canvas są w serverExternalPackages, by Next.js ich nie bundlował', en: 'pdf-parse, pdfjs-dist and @napi-rs/canvas are in serverExternalPackages so Next.js doesn\'t bundle them', ua: 'pdf-parse, pdfjs-dist і @napi-rs/canvas перебувають у serverExternalPackages, щоб Next.js їх не бандлив' },
    'vaeloq.note.2': { pl: 'Wymagane rozszerzenie pgvector w projekcie Supabase', en: 'The pgvector extension is required in the Supabase project', ua: 'Потрібне розширення pgvector у проєкті Supabase' },
    'vaeloq.note.3': { pl: 'Skrypt supabase/schema.sql trzeba dodać ręcznie — nie ma go jeszcze w repo', en: 'The supabase/schema.sql script must be added manually — it\'s not yet in the repo', ua: 'Скрипт supabase/schema.sql потрібно додати вручну — його ще немає в репозиторії' },
    'vaeloq.note.4': { pl: 'Service role key używany tylko po stronie serwera, nigdy w kliencie', en: 'The service role key is used only server-side, never on the client', ua: 'Ключ service role використовується лише на сервері, ніколи на клієнті' },
    'vaeloq.note.5': { pl: 'Każda odpowiedź zawiera źródło — numer fragmentu, stronę i % dopasowania', en: 'Every answer includes a source — fragment number, page and match %', ua: 'Кожна відповідь містить джерело — номер фрагмента, сторінку та % відповідності' },
    'vaeloq.note.6': { pl: 'Projekt aktywnie rozwijany — interfejs i pipeline mogą się jeszcze zmieniać', en: 'The project is actively developed — the interface and pipeline may still change', ua: 'Проєкт активно розробляється — інтерфейс і конвеєр ще можуть змінюватися' },

    'vaeloq.req.pill.1': { pl: 'Node.js 18+', en: 'Node.js 18+', ua: 'Node.js 18+' },
    'vaeloq.req.pill.2': { pl: 'npm', en: 'npm', ua: 'npm' },
    'vaeloq.req.pill.3': { pl: 'Projekt Supabase z pgvector', en: 'Supabase project with pgvector', ua: 'Проєкт Supabase з pgvector' },
    'vaeloq.req.pill.4': { pl: 'Klucz Gemini API', en: 'Gemini API key', ua: 'Ключ Gemini API' },
    'vaeloq.step.1.title': { pl: 'Klonuj repozytorium i zainstaluj zależności', en: 'Clone the repository and install dependencies', ua: 'Клонуй репозиторій і встанови залежності' },
    'vaeloq.step.2.title': { pl: 'Utwórz plik .env.local', en: 'Create the .env.local file', ua: 'Створи файл .env.local' },
    'vaeloq.step.3.title': { pl: 'Przygotuj bazę danych Supabase', en: 'Set up the Supabase database', ua: 'Підготуй базу даних Supabase' },
    'vaeloq.step.4.title': { pl: 'Uruchom dewelopersko', en: 'Run in development mode', ua: 'Запусти в режимі розробки' },

    /* ════ OMNISCALE ════ */
    'omniscale.category': { pl: 'Web Development · Cloud & DevOps', en: 'Web Development · Cloud & DevOps', ua: 'Веброзробка · Cloud & DevOps' },
    'omniscale.tagline':  { pl: 'AI-powered platforma do orkiestracji infrastruktury chmurowej z wbudowanym agentem SRE — deklaratywne zarządzanie zasobami inspirowane Terraform, spięte z dashboardem monitorowania w czasie rzeczywistym inspirowanym Datadog.',
                            en: 'An AI-powered cloud infrastructure orchestration platform with a built-in SRE agent — Terraform-inspired declarative resource management, paired with a Datadog-inspired real-time monitoring dashboard.',
                            ua: 'AI-платформа оркестрації хмарної інфраструктури з вбудованим SRE-агентом — декларативне керування ресурсами в дусі Terraform, поєднане з дашбордом моніторингу в реальному часі, натхненним Datadog.' },
    'omniscale.stats.1.label': { pl: 'Język', en: 'Language', ua: 'Мова' },
    'omniscale.stats.2.label': { pl: 'Framework', en: 'Framework', ua: 'Фреймворк' },
    'omniscale.stats.3.label': { pl: 'Topologia', en: 'Topology', ua: 'Топологія' },
    'omniscale.stats.4.label': { pl: 'SRE Agent', en: 'SRE Agent', ua: 'SRE Agent' },
    'omniscale.gallery': { pl: 'Aplikacja w akcji', en: 'App in action', ua: 'Застосунок у дії' },
    'omniscale.overlay.1': { pl: 'Dashboard — przegląd infrastruktury', en: 'Dashboard — infrastructure overview', ua: 'Дашборд — огляд інфраструктури' },
    'omniscale.overlay.2': { pl: 'Topologia zasobów — ReactFlow', en: 'Resource topology — ReactFlow', ua: 'Топологія ресурсів — ReactFlow' },
    'omniscale.overlay.3': { pl: 'SRE Agent — wykrywanie anomalii', en: 'SRE Agent — anomaly detection', ua: 'SRE Agent — виявлення аномалій' },
    'omniscale.overlay.4': { pl: 'Metryki wydajności — Recharts', en: 'Performance metrics — Recharts', ua: 'Метрики продуктивності — Recharts' },
    'omniscale.overlay.5': { pl: 'Infrastructure as Code — deklaratywny edytor zasobów', en: 'Infrastructure as Code — declarative resource editor', ua: 'Infrastructure as Code — декларативний редактор ресурсів' },
    'omniscale.goal.h2': { pl: 'Infrastruktura, którą<br><span class="grad">agent widzi za ciebie</span>',
                           en: 'Infrastructure the<br><span class="grad">agent watches for you</span>',
                           ua: 'Інфраструктура, яку<br><span class="grad">агент бачить за тебе</span>' },
    'omniscale.goal.p1': { pl: 'Omniscale łączy dwa światy, które zwykle żyją w osobnych narzędziach: deklaratywne zarządzanie zasobami chmurowymi w stylu Terraform oraz dashboard obserwowalności znany z Datadog. Zamiast przełączać się między konsolą chmury a panelem metryk, zespół DevOps/SRE dostaje jedno miejsce do definiowania, wdrażania i monitorowania infrastruktury.',
                           en: 'Omniscale joins two worlds that usually live in separate tools: Terraform-style declarative cloud resource management and a Datadog-like observability dashboard. Instead of switching between a cloud console and a metrics panel, a DevOps/SRE team gets one place to define, deploy and monitor infrastructure.',
                           ua: 'Omniscale поєднує два світи, які зазвичай живуть у різних інструментах: декларативне керування хмарними ресурсами в стилі Terraform і дашборд спостережуваності, знайомий з Datadog. Замість перемикання між консоллю хмари та панеллю метрик команда DevOps/SRE отримує одне місце для визначення, розгортання та моніторингу інфраструктури.' },
    'omniscale.goal.p2': { pl: 'Sercem platformy jest wbudowany SRE Agent oparty na Google Gemini — obserwuje telemetrię w czasie rzeczywistym, wykrywa anomalie i potrafi zaproponować lub wykonać działania naprawcze bez ręcznej interwencji.',
                           en: 'At the heart of the platform is a built-in SRE Agent powered by Google Gemini — it watches telemetry in real time, detects anomalies and can propose or execute remediation without manual intervention.',
                           ua: 'Серце платформи — вбудований SRE Agent на базі Google Gemini: він спостерігає телеметрію в реальному часі, виявляє аномалії й може запропонувати або виконати відновлення без ручного втручання.' },
    'omniscale.feat.1.title': { pl: 'AI-Powered SRE Agent', en: 'AI-Powered SRE Agent', ua: 'AI-Powered SRE Agent' },
    'omniscale.feat.1.desc':  { pl: 'Agent oparty na modelach Google Gemini analizuje stan systemu i automatyzuje reakcję na anomalie', en: 'An agent based on Google Gemini models analyses system state and automates the response to anomalies', ua: 'Агент на моделях Google Gemini аналізує стан системи й автоматизує реакцію на аномалії' },
    'omniscale.feat.2.title': { pl: 'Real-time monitoring', en: 'Real-time monitoring', ua: 'Моніторинг у реальному часі' },
    'omniscale.feat.2.desc':  { pl: 'Dashboard z metrykami na żywo, wykresami (Recharts) i alertami inspirowany Datadog', en: 'A dashboard with live metrics, charts (Recharts) and Datadog-inspired alerts', ua: 'Дашборд із метриками наживо, графіками (Recharts) та алертами в дусі Datadog' },
    'omniscale.feat.3.title': { pl: 'Infrastructure as Code', en: 'Infrastructure as Code', ua: 'Infrastructure as Code' },
    'omniscale.feat.3.desc':  { pl: 'Deklaratywne definiowanie zasobów chmurowych, kompatybilne koncepcyjnie z Terraform', en: 'Declarative definition of cloud resources, conceptually compatible with Terraform', ua: 'Декларативне визначення хмарних ресурсів, концептуально сумісне з Terraform' },
    'omniscale.feat.4.title': { pl: 'Interaktywna topologia', en: 'Interactive topology', ua: 'Інтерактивна топологія' },
    'omniscale.feat.4.desc':  { pl: 'ReactFlow wizualizuje zależności między zasobami i przepływy danych w systemie', en: 'ReactFlow visualises dependencies between resources and data flows in the system', ua: 'ReactFlow візуалізує залежності між ресурсами та потоки даних у системі' },
    'omniscale.feat.5.title': { pl: 'Modularny, typowany UI', en: 'Modular, typed UI', ua: 'Модульний типований UI' },
    'omniscale.feat.5.desc':  { pl: 'Komponenty shadcn/ui i Base UI React, cały kod w TypeScript (97.8%)', en: 'shadcn/ui and Base UI React components, the entire codebase in TypeScript (97.8%)', ua: 'Компоненти shadcn/ui і Base UI React, увесь код на TypeScript (97.8%)' },
    'omniscale.tech.1.name': { pl: 'TypeScript 5', en: 'TypeScript 5', ua: 'TypeScript 5' },
    'omniscale.tech.1.desc': { pl: 'Statyczne typowanie całego kodu — 97.8% repozytorium.', en: 'Static typing across the entire codebase — 97.8% of the repository.', ua: 'Статична типізація всього коду — 97.8% репозиторію.' },
    'omniscale.tech.2.name': { pl: 'Next.js 16.3', en: 'Next.js 16.3', ua: 'Next.js 16.3' },
    'omniscale.tech.2.desc': { pl: 'Framework full-stack — App Router, server-side rendering, API routes.', en: 'Full-stack framework — App Router, server-side rendering, API routes.', ua: 'Full-stack фреймворк — App Router, server-side rendering, API-маршрути.' },
    'omniscale.tech.3.name': { pl: 'React 19.2', en: 'React 19.2', ua: 'React 19.2' },
    'omniscale.tech.3.desc': { pl: 'Biblioteka UI napędzająca cały interfejs platformy.', en: 'The UI library powering the entire platform interface.', ua: 'UI-бібліотека, що рухає весь інтерфейс платформи.' },
    'omniscale.tech.4.name': { pl: 'TailwindCSS 4', en: 'TailwindCSS 4', ua: 'TailwindCSS 4' },
    'omniscale.tech.4.desc': { pl: 'Utility-first stylowanie, szybki i responsywny development.', en: 'Utility-first styling, fast and responsive development.', ua: 'Utility-first стилізація, швидка й адаптивна розробка.' },
    'omniscale.tech.5.name': { pl: 'shadcn/ui & Base UI', en: 'shadcn/ui & Base UI', ua: 'shadcn/ui & Base UI' },
    'omniscale.tech.5.desc': { pl: 'Wysokiej jakości, niezależne komponenty React budujące interfejs.', en: 'High-quality, unstyled React components that build the interface.', ua: 'Якісні незалежні React-компоненти, з яких зібрано інтерфейс.' },
    'omniscale.tech.6.name': { pl: 'ReactFlow 11.11', en: 'ReactFlow 11.11', ua: 'ReactFlow 11.11' },
    'omniscale.tech.6.desc': { pl: 'Interaktywne diagramy przepływów i topologii infrastruktury.', en: 'Interactive flow diagrams and infrastructure topology.', ua: 'Інтерактивні діаграми потоків і топології інфраструктури.' },
    'omniscale.tech.7.name': { pl: 'Recharts 3.10', en: 'Recharts 3.10', ua: 'Recharts 3.10' },
    'omniscale.tech.7.desc': { pl: 'Wykresy i grafy metryk — łatwa integracja, pełna responsywność.', en: 'Metric charts and graphs — easy integration, fully responsive.', ua: 'Графіки та діаграми метрик — легка інтеграція, повна адаптивність.' },
    'omniscale.tech.8.name': { pl: 'Framer Motion 13', en: 'Framer Motion 13', ua: 'Framer Motion 13' },
    'omniscale.tech.8.desc': { pl: 'Płynne animacje i mikrointerakcje w całym interfejsie.', en: 'Smooth animations and micro-interactions across the interface.', ua: 'Плавні анімації та мікровзаємодії в усьому інтерфейсі.' },
    'omniscale.tech.9.name': { pl: 'Google GenAI 2.16', en: 'Google GenAI 2.16', ua: 'Google GenAI 2.16' },
    'omniscale.tech.9.desc': { pl: 'Integracja z modelami Google Gemini napędzająca SRE Agenta.', en: 'Integration with Google Gemini models powering the SRE Agent.', ua: 'Інтеграція з моделями Google Gemini, що живить SRE Agent.' },
    'omniscale.arch.1.title': { pl: 'Infrastruktura jako kod', en: 'Infrastructure as code', ua: 'Інфраструктура як код' },
    'omniscale.arch.1.desc':  { pl: 'Zasoby chmurowe definiowane są deklaratywnie, podobnie jak w Terraform, a warstwa API Next.js tłumaczy je na akcje wobec dostawcy chmury.', en: 'Cloud resources are defined declaratively, similar to Terraform, and the Next.js API layer translates them into actions against the cloud provider.', ua: 'Хмарні ресурси визначаються декларативно, подібно до Terraform, а шар API Next.js перекладає їх на дії щодо хмарного провайдера.' },
    'omniscale.arch.2.title': { pl: 'Topologia w ReactFlow', en: 'Topology in ReactFlow', ua: 'Топологія в ReactFlow' },
    'omniscale.arch.2.desc':  { pl: 'Zależności między zasobami renderowane są jako interaktywny graf — węzły i krawędzie odzwierciedlają realną architekturę systemu.', en: 'Dependencies between resources are rendered as an interactive graph — nodes and edges reflect the real system architecture.', ua: 'Залежності між ресурсами рендеряться як інтерактивний граф — вузли й ребра відображають реальну архітектуру системи.' },
    'omniscale.arch.3.title': { pl: 'Telemetria na żywo', en: 'Live telemetry', ua: 'Телеметрія наживо' },
    'omniscale.arch.3.desc':  { pl: 'Metryki wydajności i stanu systemu spływają do dashboardu i są wizualizowane w czasie rzeczywistym przy pomocy Recharts.', en: 'Performance and system-state metrics flow into the dashboard and are visualised in real time with Recharts.', ua: 'Метрики продуктивності та стану системи надходять на дашборд і візуалізуються в реальному часі за допомогою Recharts.' },
    'omniscale.arch.4.title': { pl: 'SRE Agent', en: 'SRE Agent', ua: 'SRE Agent' },
    'omniscale.arch.4.desc':  { pl: 'Agent oparty na Google Gemini analizuje strumień telemetrii, wykrywa anomalie i proponuje bądź wykonuje działania naprawcze.', en: 'The Google Gemini-based agent analyses the telemetry stream, detects anomalies and proposes or executes remediation.', ua: 'Агент на базі Google Gemini аналізує потік телеметрії, виявляє аномалії й пропонує або виконує відновлення.' },
    'omniscale.arch.5.title': { pl: 'Alerty i notyfikacje', en: 'Alerts and notifications', ua: 'Алерти та сповіщення' },
    'omniscale.arch.5.desc':  { pl: 'Przekroczenie progów metryk lub wykrycie anomalii przez agenta uruchamia alert widoczny na dashboardzie i w kanałach powiadomień.', en: 'Crossing metric thresholds or an anomaly detected by the agent triggers an alert visible on the dashboard and in notification channels.', ua: 'Перевищення порогів метрик або виявлення аномалії агентом запускає алерт, видимий на дашборді та в каналах сповіщень.' },
    'omniscale.arch.6.title': { pl: 'Automatyzacja operacyjna', en: 'Operational automation', ua: 'Операційна автоматизація' },
    'omniscale.arch.6.desc':  { pl: 'Powtarzalne zadania operacyjne — skalowanie, restarty, czyszczenie zasobów — mogą być delegowane agentowi zamiast obsługiwane ręcznie.', en: 'Repeatable operational tasks — scaling, restarts, resource cleanup — can be delegated to the agent instead of handled manually.', ua: 'Повторювані операційні завдання — масштабування, рестарти, очищення ресурсів — можна делегувати агенту замість ручної обробки.' },
    'omniscale.featsec.title': { pl: 'Co wyróżnia platformę', en: 'What sets the platform apart', ua: 'Що вирізняє платформу' },
    'omniscale.ctrl.1': { pl: 'Agent wykorzystujący modele Google Gemini do analizy i automatyzacji', en: 'An agent using Google Gemini models for analysis and automation', ua: 'Агент, що використовує моделі Google Gemini для аналізу та автоматизації' },
    'omniscale.ctrl.2': { pl: 'Real-time monitoring — dashboard z metrykami na żywo', en: 'Real-time monitoring — a dashboard with live metrics', ua: 'Моніторинг у реальному часі — дашборд із метриками наживо' },
    'omniscale.ctrl.3': { pl: 'Deklaratywne zarządzanie infrastrukturą jako kodem', en: 'Declarative infrastructure-as-code management', ua: 'Декларативне керування інфраструктурою як кодом' },
    'omniscale.ctrl.4': { pl: 'Modularne komponenty UI wielokrotnego użytku', en: 'Modular, reusable UI components', ua: 'Модульні багаторазові UI-компоненти' },
    'omniscale.ctrl.5': { pl: 'Responsywny design — działa na wszystkich urządzeniach', en: 'Responsive design — works on every device', ua: 'Адаптивний дизайн — працює на всіх пристроях' },
    'omniscale.ctrl.6': { pl: 'Cały kod w TypeScript — bezpieczeństwo typów end-to-end', en: 'The entire codebase in TypeScript — end-to-end type safety', ua: 'Увесь код на TypeScript — безпека типів end-to-end' },
    'omniscale.rationale.1.use': { pl: 'Framework full-stack', en: 'Full-stack framework', ua: 'Full-stack фреймворк' },
    'omniscale.rationale.1.why': { pl: 'Server-side rendering, API routes, optymalizacja', en: 'Server-side rendering, API routes, optimisation', ua: 'Server-side rendering, API-маршрути, оптимізація' },
    'omniscale.rationale.2.use': { pl: 'Diagramy topologii', en: 'Topology diagrams', ua: 'Діаграми топології' },
    'omniscale.rationale.2.why': { pl: 'Interaktywne wizualizacje architektur', en: 'Interactive architecture visualisations', ua: 'Інтерактивні візуалізації архітектур' },
    'omniscale.rationale.3.use': { pl: 'Wykresy metryk', en: 'Metric charts', ua: 'Графіки метрик' },
    'omniscale.rationale.3.why': { pl: 'Łatwa integracja, pełna responsywność', en: 'Easy integration, fully responsive', ua: 'Легка інтеграція, повна адаптивність' },
    'omniscale.rationale.4.use': { pl: 'Animacje UI', en: 'UI animations', ua: 'Анімації UI' },
    'omniscale.rationale.4.why': { pl: 'Płynne przejścia i mikrointerakcje', en: 'Smooth transitions and micro-interactions', ua: 'Плавні переходи та мікровзаємодії' },
    'omniscale.rationale.5.use': { pl: 'SRE Agent', en: 'SRE Agent', ua: 'SRE Agent' },
    'omniscale.rationale.5.why': { pl: 'Zaawansowana analityka i automatyzacja', en: 'Advanced analytics and automation', ua: 'Розширена аналітика та автоматизація' },
    'omniscale.rationale.6.use': { pl: 'Stylowanie', en: 'Styling', ua: 'Стилізація' },
    'omniscale.rationale.6.why': { pl: 'Szybki development, responsywny design', en: 'Fast development, responsive design', ua: 'Швидка розробка, адаптивний дизайн' },
    'omniscale.rationale.7.use': { pl: 'Cały kod (97.8%)', en: 'Entire codebase (97.8%)', ua: 'Увесь код (97.8%)' },
    'omniscale.rationale.7.why': { pl: 'Bezpieczeństwo typów, lepsze wsparcie IDE', en: 'Type safety, better IDE support', ua: 'Безпека типів, краща підтримка IDE' },
    'omniscale.req.pill.1': { pl: 'Node.js 18+', en: 'Node.js 18+', ua: 'Node.js 18+' },
    'omniscale.req.pill.2': { pl: 'npm', en: 'npm', ua: 'npm' },
    'omniscale.req.pill.3': { pl: 'Klucz API Google GenAI', en: 'Google GenAI API key', ua: 'Ключ API Google GenAI' },
    'omniscale.step.1.title': { pl: 'Zainstaluj zależności', en: 'Install dependencies', ua: 'Встанови залежності' },
    'omniscale.step.2.title': { pl: 'Uruchom w trybie deweloperskim', en: 'Run in development mode', ua: 'Запусти в режимі розробки' },
    'omniscale.step.3.title': { pl: 'Build produkcyjny', en: 'Production build', ua: 'Продакшн-збірка' },
    'omniscale.step.4.title': { pl: 'Linting', en: 'Linting', ua: 'Linting' },
    'omniscale.meta.1.k': { pl: 'Wersja', en: 'Version', ua: 'Версія' },
    'omniscale.meta.2.k': { pl: 'Główny język', en: 'Main language', ua: 'Основна мова' },
    'omniscale.meta.3.k': { pl: 'Licencja', en: 'License', ua: 'Ліцензія' },
    'omniscale.meta.4.k': { pl: 'Status', en: 'Status', ua: 'Статус' },
    'omniscale.meta.4.v': { pl: 'Aktywny', en: 'Active', ua: 'Активний' },
    'omniscale.meta.5.k': { pl: 'Rozmiar repo', en: 'Repo size', ua: 'Розмір репозиторію' },
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
    if (/\/projects\/vaultify/.test(p))    return 'vaultify';
    if (/\/projects\/vaeloq/.test(p))      return 'vaeloq';
    if (/\/projects\/wyspa/.test(p))       return 'wyspa';
    if (/\/projects\/barber-craft-landing/.test(p)) return 'barber';
    if (/\/projects\/lumina-dental-landing/.test(p)) return 'lumina';
    if (/\/projects\/apex-build-landing/.test(p)) return 'apex';
    if (/\/projects\/glow-beauty-salon/.test(p)) return 'glow';
    if (/\/projects/.test(p))              return 'projects';
    if (/\/contact/.test(p))              return 'contact';
    return 'home';
  }

  /* ── TRANSLATE helper ────────────────────────── */
  // Fallback chain: żądany język → 'pl' (baza). Chroni przed brakującymi kluczami 'ua'/'en'.
  function t(key, lang) {
    const entry = T[key];
    if (!entry) return null;
    if (entry[lang] != null) return entry[lang];
    if (entry['pl'] != null) return entry['pl'];
    return null;
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
    if (SUPPORTED_LANGS.indexOf(lang) === -1) lang = 'pl';
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
    if (page === 'barber')   applyBarber(lang);
    if (page === 'lumina')   applyLumina(lang);
    if (page === 'apex')     applyApex(lang);
    if (page === 'glow')     applyGlow(lang);
    if (page === 'aiplanner') applyAiplanner(lang);
    if (page === 'vaultify') applyVaultify(lang);
    if (page === 'vaeloq') applyVaeloq(lang);

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

    /* ── Persist + notify listeners (for the animated switcher) ── */
    try { localStorage.setItem('lang', lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang } }));
  }

  /* ── CYCLE LANGUAGE (pl → en → ua → pl) ───────── */
  function cycleLang() {
    const current = getLang();
    const idx = SUPPORTED_LANGS.indexOf(current);
    const next = SUPPORTED_LANGS[(idx + 1) % SUPPORTED_LANGS.length];
    apply(next);
    return next;
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
  setText(document.querySelector('.section-eyebrow'), 'projects.eyebrow', lang);
  setText(document.querySelector('.projects-title'),  'projects.title',   lang);
  setText(document.querySelector('.projects-desc'),   'projects.desc',    lang);

  const cards = document.querySelectorAll('.project-card');
  const descKeys = {
    'osk-expert/index.html': 'projects.osk.desc',
    'vaultify/index.html': 'projects.vaultify.desc',
    'vaeloq/index.html': 'projects.vaeloq.desc',
    'omniscale/index.html': 'projects.omniscale.desc',
    'barber-craft-landing/index.html': 'projects.barber.desc',
    'lumina-dental-landing/index.html': 'projects.lumina.desc',
    'apex-build-landing/index.html': 'projects.apex.desc',
    'glow-beauty-salon/index.html': 'projects.glow.desc',
    'ml/index.html': 'projects.ml.desc',
    'aiplanner/index.html': 'projects.aiplanner.desc',
    'racing3d/index.html': 'projects.racing.desc',
    'wyspa/index.html': 'projects.wyspa.desc',
    'blog/index.html': 'projects.blog.desc',
    'ualingo/index.html': 'projects.ualingo.desc',
    'eventhubapi/index.html': 'projects.eventhub.desc',
    'iot/index.html': 'projects.iot.desc',
    'quiz/index.html': 'projects.quiz.desc',
  };

  cards.forEach(card => {
    const descKey = descKeys[card.getAttribute('href')];
    if (descKey) setText(card.querySelector('.project-card-desc'), descKey, lang);
    const link = card.querySelector('.project-card-link');
    if (link) {
      const svg = link.querySelector('svg');
      link.textContent = t('projects.card.link', lang);
      if (svg) link.appendChild(svg);
    }

    const status = card.querySelector('.status-pill');
    if (status) {
      const dot = status.querySelector('.status-dot');
      const key = status.textContent.includes('realiz') || status.textContent.includes('progress') || status.textContent.includes('розроб')
        ? 'projects.status.progress'
        : 'projects.status.done';
      status.textContent = t(key, lang);
      if (dot) status.prepend(dot);
    }
  });
}

  /* ── BARBER CRAFT ───────────────────────────── */
  function applyBarber(lang) {
    applySharedDetail(lang);
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) { const svg = backBtn.querySelector('svg'); backBtn.textContent = t('proj.back', lang); if (svg) backBtn.prepend(svg); }
    document.title = `Barber Craft — ${t('barber.meta.title', lang)}`;
    setText(document.querySelector('.proj-category'), 'barber.category', lang);
    setText(document.querySelector('.badge-uni'), 'barber.badge.uni', lang);
    setText(document.querySelector('.proj-tagline'), 'barber.tagline', lang);

    const liveBtn = [...document.querySelectorAll('.btn-glass')].find(btn => btn.href && btn.href.includes('barber-craft-landing'));
    if (liveBtn) { const svg = liveBtn.querySelector('svg'); liveBtn.textContent = t('barber.live', lang); if (svg) liveBtn.prepend(svg); }

    const statLabels = document.querySelectorAll('.proj-stats .ps-l');
    ['barber.stats.structure', 'barber.stats.styling', 'barber.stats.interactions', 'barber.stats.deployment'].forEach((key, i) => setText(statLabels[i], key, lang));

    setText(document.querySelector('.gallery-section .section-label'), 'barber.gallery.label', lang);
    setText(document.querySelector('.gallery-section .section-h2'), 'barber.gallery.title', lang);

    setText(document.querySelector('.two-col .section-label'), 'proj.goal.label', lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'barber.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    setText(goalPs[0], 'barber.goal.p1', lang);
    setText(goalPs[1], 'barber.goal.p2', lang);

    const features = document.querySelectorAll('.feature-list .feat-item');
    for (let i = 0; i < 5; i++) {
      setText(features[i]?.querySelector('.feat-title'), `barber.feat.${i + 1}.title`, lang);
      setText(features[i]?.querySelector('.feat-desc'), `barber.feat.${i + 1}.desc`, lang);
    }

    setText(document.querySelector('.tech-section .section-label'), 'barber.tech.label', lang);
    setText(document.querySelector('.tech-section .section-h2'), 'barber.tech.title', lang);
    const techCards = document.querySelectorAll('.tech-card');
    for (let i = 0; i < 9; i++) setText(techCards[i]?.querySelector('.tech-card-desc'), `barber.tech.${i + 1}.desc`, lang);

    setText(document.querySelector('.arch-grid')?.closest('section')?.querySelector('.section-label'), 'barber.arch.label', lang);
    setText(document.querySelector('.arch-grid')?.closest('section')?.querySelector('.section-h2'), 'barber.arch.title', lang);
    const archCards = document.querySelectorAll('.arch-card');
    for (let i = 0; i < 6; i++) {
      setText(archCards[i]?.querySelector('.arch-title'), `barber.arch.${i + 1}.title`, lang);
      setText(archCards[i]?.querySelector('.arch-desc'), `barber.arch.${i + 1}.desc`, lang);
    }

    const controlsSection = document.querySelector('.controls-grid')?.closest('section');
    setText(controlsSection?.querySelector('.section-label'), 'barber.features.label', lang);
    setText(controlsSection?.querySelector('.section-h2'), 'barber.features.title', lang);
    document.querySelectorAll('.controls-grid .ctrl span:last-child').forEach((el, i) => setText(el, `barber.ctrl.${i + 1}`, lang));

    const rationaleSection = document.querySelector('.rationale-table')?.closest('section');
    setText(rationaleSection?.querySelector('.section-label'), 'barber.rationale.label', lang);
    setText(rationaleSection?.querySelector('.section-h2'), 'barber.rationale.title', lang);
    const headers = rationaleSection?.querySelectorAll('th');
    ['barber.table.tech', 'barber.table.use', 'barber.table.why'].forEach((key, i) => setText(headers?.[i], key, lang));
    const tableRows = rationaleSection?.querySelectorAll('tbody tr');
    for (let i = 0; i < 6; i++) {
      setText(tableRows?.[i]?.cells[1], `barber.table.${i * 2 + 1}`, lang);
      setText(tableRows?.[i]?.cells[2], `barber.table.${i * 2 + 2}`, lang);
    }

    const buildSection = document.querySelector('.build-steps')?.closest('section');
    setText(buildSection?.querySelector('.section-label'), 'barber.build.label', lang);
    setText(buildSection?.querySelector('.section-h2'), 'barber.build.title', lang);
    setText(buildSection?.querySelector('.req-title'), 'barber.req.title', lang);
    document.querySelectorAll('.req-pill').forEach((el, i) => setText(el, `barber.req.${i + 1}`, lang));
    document.querySelectorAll('.step-title').forEach((el, i) => setText(el, `barber.step.${i + 1}`, lang));

    const metaSection = document.querySelector('.meta-strip')?.closest('section');
    setText(metaSection?.querySelector('.section-label'), 'barber.meta.label', lang);
    setText(metaSection?.querySelector('.section-h2'), 'barber.meta.title', lang);
    document.querySelectorAll('.meta-k').forEach((el, i) => setText(el, `barber.meta.${i + 1}`, lang));
    setText(document.querySelector('.meta-item:nth-child(3) .meta-v'), 'barber.meta.private', lang);
    setText(document.querySelector('.meta-item:nth-child(5) .meta-v'), 'barber.meta.fictional', lang);
    setHTML(metaSection?.querySelector('.body-text'), 'barber.note', lang);
  }

  /* ── LUMINA DENTAL ──────────────────────────── */
  function applyLumina(lang) {
    applySharedDetail(lang);
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) { const svg = backBtn.querySelector('svg'); backBtn.textContent = t('proj.back', lang); if (svg) backBtn.prepend(svg); }
    document.title = `Lumina Dental — ${t('lumina.meta.title', lang)}`;
    setText(document.querySelector('.proj-category'), 'lumina.category', lang);
    setText(document.querySelector('.badge-uni'), 'lumina.badge.uni', lang);
    setText(document.querySelector('.proj-tagline'), 'lumina.tagline', lang);

    const liveBtn = [...document.querySelectorAll('.btn-glass')].find(btn => btn.href && btn.href.includes('lumina-dental'));
    if (liveBtn) { const svg = liveBtn.querySelector('svg'); liveBtn.textContent = t('lumina.live', lang); if (svg) liveBtn.prepend(svg); }
    const statLabels = document.querySelectorAll('.proj-stats .ps-l');
    ['lumina.stats.structure', 'lumina.stats.styling', 'lumina.stats.interactions', 'lumina.stats.deployment'].forEach((key, i) => setText(statLabels[i], key, lang));

    setText(document.querySelector('.gallery-section .section-label'), 'lumina.gallery.label', lang);
    setText(document.querySelector('.gallery-section .section-h2'), 'lumina.gallery.title', lang);
    setText(document.querySelector('.two-col .section-label'), 'lumina.goal.label', lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'lumina.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    setText(goalPs[0], 'lumina.goal.p1', lang);
    setText(goalPs[1], 'lumina.goal.p2', lang);

    const features = document.querySelectorAll('.feature-list .feat-item');
    for (let i = 0; i < 5; i++) {
      setText(features[i]?.querySelector('.feat-title'), `lumina.feat.${i + 1}.title`, lang);
      setText(features[i]?.querySelector('.feat-desc'), `lumina.feat.${i + 1}.desc`, lang);
    }

    setText(document.querySelector('.tech-section .section-label'), 'lumina.tech.label', lang);
    setText(document.querySelector('.tech-section .section-h2'), 'lumina.tech.title', lang);
    const techCards = document.querySelectorAll('.tech-card');
    for (let i = 0; i < 9; i++) setText(techCards[i]?.querySelector('.tech-card-desc'), `lumina.tech.${i + 1}.desc`, lang);

    const archSection = document.querySelector('.arch-grid')?.closest('section');
    setText(archSection?.querySelector('.section-label'), 'lumina.arch.label', lang);
    setText(archSection?.querySelector('.section-h2'), 'lumina.arch.title', lang);
    const archCards = document.querySelectorAll('.arch-card');
    for (let i = 0; i < 6; i++) {
      setText(archCards[i]?.querySelector('.arch-title'), `lumina.arch.${i + 1}.title`, lang);
      setText(archCards[i]?.querySelector('.arch-desc'), `lumina.arch.${i + 1}.desc`, lang);
    }

    const controlsSection = document.querySelector('.controls-grid')?.closest('section');
    setText(controlsSection?.querySelector('.section-label'), 'lumina.features.label', lang);
    setText(controlsSection?.querySelector('.section-h2'), 'lumina.features.title', lang);
    document.querySelectorAll('.controls-grid .ctrl span:last-child').forEach((el, i) => setText(el, `lumina.ctrl.${i + 1}`, lang));

    const rationaleSection = document.querySelector('.rationale-table')?.closest('section');
    setText(rationaleSection?.querySelector('.section-label'), 'lumina.rationale.label', lang);
    setText(rationaleSection?.querySelector('.section-h2'), 'lumina.rationale.title', lang);
    const headers = rationaleSection?.querySelectorAll('th');
    ['lumina.table.tech', 'lumina.table.use', 'lumina.table.why'].forEach((key, i) => setText(headers?.[i], key, lang));
    const tableRows = rationaleSection?.querySelectorAll('tbody tr');
    for (let i = 0; i < 6; i++) {
      setText(tableRows?.[i]?.cells[1], `lumina.table.${i * 2 + 1}`, lang);
      setText(tableRows?.[i]?.cells[2], `lumina.table.${i * 2 + 2}`, lang);
    }

    const buildSection = document.querySelector('.build-steps')?.closest('section');
    setText(buildSection?.querySelector('.section-label'), 'lumina.build.label', lang);
    setText(buildSection?.querySelector('.section-h2'), 'lumina.build.title', lang);
    setText(buildSection?.querySelector('.req-title'), 'lumina.req.title', lang);
    document.querySelectorAll('.req-pill').forEach((el, i) => setText(el, `lumina.req.${i + 1}`, lang));
    document.querySelectorAll('.step-title').forEach((el, i) => setText(el, `lumina.step.${i + 1}`, lang));

    const metaSection = document.querySelector('.meta-strip')?.closest('section');
    setText(metaSection?.querySelector('.section-label'), 'lumina.meta.label', lang);
    setText(metaSection?.querySelector('.section-h2'), 'lumina.meta.title', lang);
    document.querySelectorAll('.meta-k').forEach((el, i) => setText(el, `lumina.meta.${i + 1}`, lang));
    setText(document.querySelector('.meta-item:nth-child(5) .meta-v'), 'lumina.meta.fictional', lang);
    setHTML(metaSection?.querySelector('.body-text'), 'lumina.note', lang);
  }

  /* ── APEX BUILD ─────────────────────────────── */
  function applyApex(lang) {
    applySharedDetail(lang);
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) { const svg = backBtn.querySelector('svg'); backBtn.textContent = t('proj.back', lang); if (svg) backBtn.prepend(svg); }
    document.title = `Apex Build — ${t('apex.meta.title', lang)}`;
    setText(document.querySelector('.proj-category'), 'apex.category', lang);
    setText(document.querySelector('.badge-uni'), 'apex.badge.uni', lang);
    setText(document.querySelector('.proj-tagline'), 'apex.tagline', lang);

    const liveBtn = [...document.querySelectorAll('.btn-glass')].find(btn => btn.href && btn.href.includes('apex-build-landing'));
    if (liveBtn) { const svg = liveBtn.querySelector('svg'); liveBtn.textContent = t('apex.live', lang); if (svg) liveBtn.prepend(svg); }
    const statLabels = document.querySelectorAll('.proj-stats .ps-l');
    ['apex.stats.structure', 'apex.stats.styling', 'apex.stats.interactions', 'apex.stats.landing'].forEach((key, i) => setText(statLabels[i], key, lang));

    setText(document.querySelector('.gallery-section .section-label'), 'apex.gallery.label', lang);
    setText(document.querySelector('.gallery-section .section-h2'), 'apex.gallery.title', lang);
    setText(document.querySelector('.two-col .section-label'), 'apex.goal.label', lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'apex.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    setText(goalPs[0], 'apex.goal.p1', lang);
    setText(goalPs[1], 'apex.goal.p2', lang);

    const features = document.querySelectorAll('.feature-list .feat-item');
    for (let i = 0; i < 5; i++) {
      setText(features[i]?.querySelector('.feat-title'), `apex.feat.${i + 1}.title`, lang);
      setText(features[i]?.querySelector('.feat-desc'), `apex.feat.${i + 1}.desc`, lang);
    }

    setText(document.querySelector('.tech-section .section-label'), 'apex.tech.label', lang);
    setText(document.querySelector('.tech-section .section-h2'), 'apex.tech.title', lang);
    const techCards = document.querySelectorAll('.tech-card');
    for (let i = 0; i < 9; i++) setText(techCards[i]?.querySelector('.tech-card-desc'), `apex.tech.${i + 1}.desc`, lang);

    const archSection = document.querySelector('.arch-grid')?.closest('section');
    setText(archSection?.querySelector('.section-label'), 'apex.arch.label', lang);
    setText(archSection?.querySelector('.section-h2'), 'apex.arch.title', lang);
    const archCards = document.querySelectorAll('.arch-card');
    for (let i = 0; i < 6; i++) {
      setText(archCards[i]?.querySelector('.arch-title'), `apex.arch.${i + 1}.title`, lang);
      setText(archCards[i]?.querySelector('.arch-desc'), `apex.arch.${i + 1}.desc`, lang);
    }

    const controlsSection = document.querySelector('.controls-grid')?.closest('section');
    setText(controlsSection?.querySelector('.section-label'), 'apex.features.label', lang);
    setText(controlsSection?.querySelector('.section-h2'), 'apex.features.title', lang);
    document.querySelectorAll('.controls-grid .ctrl span:last-child').forEach((el, i) => setText(el, `apex.ctrl.${i + 1}`, lang));

    const rationaleSection = document.querySelector('.rationale-table')?.closest('section');
    setText(rationaleSection?.querySelector('.section-label'), 'apex.rationale.label', lang);
    setText(rationaleSection?.querySelector('.section-h2'), 'apex.rationale.title', lang);
    const headers = rationaleSection?.querySelectorAll('th');
    ['apex.table.tech', 'apex.table.use', 'apex.table.why'].forEach((key, i) => setText(headers?.[i], key, lang));
    const tableRows = rationaleSection?.querySelectorAll('tbody tr');
    for (let i = 0; i < 6; i++) {
      setText(tableRows?.[i]?.cells[1], `apex.table.${i * 2 + 1}`, lang);
      setText(tableRows?.[i]?.cells[2], `apex.table.${i * 2 + 2}`, lang);
    }

    const buildSection = document.querySelector('.build-steps')?.closest('section');
    setText(buildSection?.querySelector('.section-label'), 'apex.build.label', lang);
    setText(buildSection?.querySelector('.section-h2'), 'apex.build.title', lang);
    setText(buildSection?.querySelector('.req-title'), 'apex.req.title', lang);
    document.querySelectorAll('.req-pill').forEach((el, i) => setText(el, i === 4 ? 'apex.req.5' : null, lang));
    document.querySelectorAll('.step-title').forEach((el, i) => setText(el, `apex.step.${i + 1}`, lang));

    const metaSection = document.querySelector('.meta-strip')?.closest('section');
    setText(metaSection?.querySelector('.section-label'), 'apex.meta.label', lang);
    setText(metaSection?.querySelector('.section-h2'), 'apex.meta.title', lang);
    document.querySelectorAll('.meta-k').forEach((el, i) => setText(el, `apex.meta.${i + 1}`, lang));
    setText(document.querySelector('.meta-item:nth-child(4) .meta-v'), 'apex.meta.status', lang);
    setText(document.querySelector('.meta-item:nth-child(5) .meta-v'), 'apex.meta.type', lang);
    setHTML(metaSection?.querySelector('.body-text'), 'apex.note', lang);
  }

  /* ── GLOW BEAUTY SALON ──────────────────────── */
  function applyGlow(lang) {
    applySharedDetail(lang);
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) { const svg = backBtn.querySelector('svg'); backBtn.textContent = t('proj.back', lang); if (svg) backBtn.prepend(svg); }
    document.title = `GLOW Beauty Salon — ${t('glow.meta.title', lang)}`;
    setText(document.querySelector('.proj-category'), 'glow.category', lang);
    setText(document.querySelector('.badge-uni'), 'glow.badge.uni', lang);
    setText(document.querySelector('.proj-tagline'), 'glow.tagline', lang);

    const statLabels = document.querySelectorAll('.proj-stats .ps-l');
    ['glow.stats.structure', 'glow.stats.styling', 'glow.stats.interactions', 'glow.stats.languages'].forEach((key, i) => setText(statLabels[i], key, lang));
    setText(document.querySelector('.gallery-section .section-label'), 'glow.gallery.label', lang);
    setText(document.querySelector('.gallery-section .section-h2'), 'glow.gallery.title', lang);

    setText(document.querySelector('.two-col .section-label'), 'glow.goal.label', lang);
    setHTML(document.querySelector('.two-col .section-h2'), 'glow.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    setText(goalPs[0], 'glow.goal.p1', lang);
    setText(goalPs[1], 'glow.goal.p2', lang);

    const features = document.querySelectorAll('.feature-list .feat-item');
    for (let i = 0; i < 5; i++) {
      setText(features[i]?.querySelector('.feat-title'), `glow.feat.${i + 1}.title`, lang);
      setText(features[i]?.querySelector('.feat-desc'), `glow.feat.${i + 1}.desc`, lang);
    }

    setText(document.querySelector('.tech-section .section-label'), 'glow.tech.label', lang);
    setText(document.querySelector('.tech-section .section-h2'), 'glow.tech.title', lang);
    const techCards = document.querySelectorAll('.tech-card');
    for (let i = 0; i < 9; i++) {
      setText(techCards[i]?.querySelector('.tech-card-name'), `glow.tech.${i + 1}.name`, lang);
      setText(techCards[i]?.querySelector('.tech-card-desc'), `glow.tech.${i + 1}.desc`, lang);
    }

    const archSection = document.querySelector('.arch-grid')?.closest('section');
    setText(archSection?.querySelector('.section-label'), 'glow.arch.label', lang);
    setText(archSection?.querySelector('.section-h2'), 'glow.arch.title', lang);
    const archCards = document.querySelectorAll('.arch-card');
    for (let i = 0; i < 6; i++) {
      setText(archCards[i]?.querySelector('.arch-title'), `glow.arch.${i + 1}.title`, lang);
      setText(archCards[i]?.querySelector('.arch-desc'), `glow.arch.${i + 1}.desc`, lang);
    }

    const controlsSection = document.querySelector('.controls-grid')?.closest('section');
    setText(controlsSection?.querySelector('.section-label'), 'glow.features.label', lang);
    setText(controlsSection?.querySelector('.section-h2'), 'glow.features.title', lang);
    document.querySelectorAll('.controls-grid .ctrl span:last-child').forEach((el, i) => setText(el, `glow.ctrl.${i + 1}`, lang));

    const rationaleSection = document.querySelector('.rationale-table')?.closest('section');
    setText(rationaleSection?.querySelector('.section-label'), 'glow.rationale.label', lang);
    setText(rationaleSection?.querySelector('.section-h2'), 'glow.rationale.title', lang);
    const headers = rationaleSection?.querySelectorAll('th');
    ['glow.table.tech', 'glow.table.use', 'glow.table.why'].forEach((key, i) => setText(headers?.[i], key, lang));
    const tableRows = rationaleSection?.querySelectorAll('tbody tr');
    for (let i = 0; i < 6; i++) {
      setText(tableRows?.[i]?.cells[1], `glow.table.${i * 2 + 1}`, lang);
      setText(tableRows?.[i]?.cells[2], `glow.table.${i * 2 + 2}`, lang);
    }

    const buildSection = document.querySelector('.build-steps')?.closest('section');
    setText(buildSection?.querySelector('.section-label'), 'glow.build.label', lang);
    setText(buildSection?.querySelector('.section-h2'), 'glow.build.title', lang);
    setText(buildSection?.querySelector('.req-title'), 'glow.req.title', lang);
    setText(document.querySelectorAll('.req-pill')[2], 'glow.req.3', lang);
    document.querySelectorAll('.step-title').forEach((el, i) => setText(el, `glow.step.${i + 1}`, lang));

    const metaSection = document.querySelector('.meta-strip')?.closest('section');
    setText(metaSection?.querySelector('.section-label'), 'glow.meta.label', lang);
    setText(metaSection?.querySelector('.section-h2'), 'glow.meta.title', lang);
    document.querySelectorAll('.meta-k').forEach((el, i) => setText(el, `glow.meta.${i + 1}`, lang));
    setText(document.querySelector('.meta-item:nth-child(4) .meta-v'), 'glow.meta.status', lang);
    setText(document.querySelector('.meta-item:nth-child(5) .meta-v'), 'glow.meta.fictional', lang);
    setHTML(metaSection?.querySelector('.body-text'), 'glow.note', lang);
  }

  /* ── SHARED PROJECT DETAIL helpers ──────────── */
  function applySharedDetail(lang) {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) { const svg = backBtn.querySelector('svg'); backBtn.textContent = t('proj.back', lang); if (svg) backBtn.prepend(svg); }

    document.querySelectorAll('.proj-nav-btn, .back-btn').forEach(btn => {
      if (btn.textContent.includes('projekt') || btn.textContent.includes('project') || btn.textContent.includes('All') || btn.textContent.includes('Wszystkie') || btn.textContent.includes('проєкт') || btn.textContent.includes('Усі')) {
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
      if (txt === 'technologie' || txt === 'technologies' || txt === 'технології')       setText(el, 'proj.tech.label',    lang);
      else if (txt === 'architektura' || txt === 'architecture' || txt === 'архітектура') setText(el, 'proj.arch.label',    lang);
      else if (txt === 'funkcjonalności' || txt === 'features' || txt === 'функціональність')  setText(el, 'proj.func.label',    lang);
      else if (txt === 'instalacja' || txt === 'installation' || txt === 'встановлення')   setText(el, 'proj.install.label', lang);
      else if (txt === 'autor' || txt === 'author' || txt === 'автор')              setText(el, 'proj.author.label',  lang);
      else if (txt === 'zespół' || txt === 'team' || txt === 'команда')               setText(el, 'proj.team.label',    lang);
      else if (txt === 'sterowanie' || txt === 'controls' || txt === 'керування')       setText(el, 'proj.controls.label',lang);
      else if (txt === 'screenshoty' || txt === 'screenshots' || txt === 'скриншоти')   setText(el, 'proj.screenshots',   lang);
      else if (txt === 'cel projektu' || txt === 'project goal' || txt === 'мета проєкту') setText(el, 'proj.goal.label',    lang);
    });

    /* section h2s */
    document.querySelectorAll('.section-h2').forEach(el => {
      const txt = el.textContent.trim().toLowerCase();
      if (txt.includes('stack') || txt.includes('technologiczny') || txt.includes('стек'))                    setHTML(el, 'proj.tech.title',    lang);
      else if (txt === 'jak to działa' || txt === 'how it works' || txt === 'як це працює')                    setText(el, 'proj.howworks',     lang);
      else if (txt === 'jak uruchomić' || txt === 'how to run' || txt === 'як запустити')                      setText(el, 'proj.install.title', lang);
      else if (txt === 'projekt indywidualny' || txt === 'individual project' || txt === 'індивідуальний проєкт')       setText(el, 'proj.individual',   lang);
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
    const routesLabel = [...document.querySelectorAll('.section-label')].find(el => el.textContent.includes('Trasy') || el.textContent.includes('routes') || el.textContent.includes('Routes') || el.textContent.includes('Маршрути'));
    if (routesLabel) setText(routesLabel, 'proj.routes.label', lang);
    const routingH2 = [...document.querySelectorAll('.section-h2')].find(el => el.textContent.trim() === 'Routing' || el.textContent.trim() === 'Routing' || el.textContent.trim() === 'Маршрутизація');
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
      else if (/Użytkownicy|Users|Користувачі/i.test(text)) key = 'eventhub.group.users';
      else if (/Eventy|Events|Події/i.test(text)) key = 'eventhub.group.events';
      else if (/Uczestnicy|Participants|Учасники/i.test(text)) key = 'eventhub.group.participants';
      else if (/Zaproszenia|Invitations|Запрошення/i.test(text)) key = 'eventhub.group.invitations';
      else if (/Powiadomienia|Notifications|Сповіщення/i.test(text)) key = 'eventhub.group.notifications';
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
    const scopeLabel = [...document.querySelectorAll('.section-label')].find(el => el.textContent.includes('Zakres') || el.textContent.includes('Scope') || el.textContent.includes('Обсяг'));
    if (scopeLabel) setText(scopeLabel, 'osk.scope.label', lang);
    const scopeH2 = [...document.querySelectorAll('.section-h2')].find(el => el.textContent.includes('dostarczone') || el.textContent.includes('delivered') || el.textContent.includes('реалізовано'));
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

    const screensLabel = [...document.querySelectorAll('.section-label')].find(el => el.textContent.includes('Ekrany') || el.textContent.includes('Screens') || el.textContent.includes('Екрани'));
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
      el.textContent.includes('Analiza danych') || el.textContent.includes('Analysis') || el.textContent.includes('Аналіз даних')
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
      el.textContent.includes('Zbiór danych') || el.textContent.includes('Dataset') || el.textContent.includes('Набір даних')
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
      el.textContent.includes('Architektura') || el.textContent.includes('Architecture') || el.textContent.includes('Архітектура')
    );
    if (pipelineLabel) setText(pipelineLabel, 'ml.pipeline.label', lang);
    
    const pipelineH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Potok') || el.textContent.includes('Pipeline') || el.textContent.includes('Конвеєр')
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
      el.textContent.includes('Wyniki') || el.textContent.includes('Results') || el.textContent.includes('Результати')
    );
    if (resultsLabel) setText(resultsLabel, 'ml.results.label', lang);
    
    const resultsH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Model bazowy') || el.textContent.includes('Baseline') || el.textContent.includes('Базова модель')
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
      el.textContent.includes('Technologie') || el.textContent.includes('Technologies') || el.textContent.includes('Технології')
    );
    if (techLabel) setText(techLabel, 'ml.tech.label', lang);

    applyTechStack('ml', lang, 6);
    applyArchInfo('ml', lang, 6);

    // Deliverables section
    const delivLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Repozytorium') || el.textContent.includes('Repository') || el.textContent.includes('Репозиторій')
    );
    if (delivLabel) setText(delivLabel, 'ml.deliverables.label', lang);
    
    const delivH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Struktura') || el.textContent.includes('structure') || el.textContent.includes('Структура')
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
      el.textContent.includes('Zespół') || el.textContent.includes('Team') || el.textContent.includes('Команда')
    );
    if (teamLabel) setText(teamLabel, 'ml.team.label', lang);
    
    const teamH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Autorzy') || el.textContent.includes('authors') || el.textContent.includes('Автори')
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
      el.textContent.includes('Aplikacja w akcji') || el.textContent.includes('App in action') || el.textContent.includes('Застосунок у дії')
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
      el.textContent.includes('Ekrany') || el.textContent.includes('Screens') || el.textContent.includes('Екрани')
    );
    if (screensLabel) setText(screensLabel, 'aiplanner.screens.label', lang);
    
    const screensH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Szczegóły funkcjonalności') || el.textContent.includes('Feature details') || el.textContent.includes('Деталі функціональності')
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
      el.textContent.includes('Architektura') || el.textContent.includes('Architecture') || el.textContent.includes('Архітектура')
    );
    if (fsLabel) setText(fsLabel, 'aiplanner.firestore.label', lang);
    
    const fsH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Firestore') || el.textContent.includes('firestore')
    );
    if (fsH2) setText(fsH2, 'aiplanner.firestore.title', lang);

    // Tech section
    const techLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Technologie') || el.textContent.includes('Technologies') || el.textContent.includes('Технології')
    );
    if (techLabel) setText(techLabel, 'aiplanner.tech.label', lang);

    applyTechStack('aiplanner', lang, 6);

    // Deliverables section
    const delivLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.includes('Projekt') || el.textContent.includes('Project') || el.textContent.includes('Проєкт')
    );
    if (delivLabel) setText(delivLabel, 'aiplanner.deliverables.label', lang);
    
    const delivH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Co zostało dostarczone') || el.textContent.includes('What was delivered') || el.textContent.includes('Що було реалізовано')
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
      el.textContent.includes('Autor') || el.textContent.includes('Author') || el.textContent.includes('Автор')
    );
    if (teamLabel) setText(teamLabel, 'aiplanner.team.label', lang);
    
    const teamH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('indywidualny') || el.textContent.includes('Solo') || el.textContent.includes('Індивідуальний')
    );
    if (teamH2) setText(teamH2, 'aiplanner.team.title', lang);

    // Team member (solo project - only one)
    const teamCard = document.querySelector('.team-card');
    if (teamCard) {
      setText(teamCard.querySelector('.team-name'), 'aiplanner.team.name', lang);
      setText(teamCard.querySelector('.team-role'), 'aiplanner.team.role', lang);
    }
  }

  /* ── VAULTIFY ────────────────────────────────── */
  function applyVaultify(lang) {
    applySharedDetail(lang);
    setText(document.querySelector('.proj-category'), 'vaultify.category', lang);
    setText(document.querySelector('.badge-uni'), 'vaultify.badge.uni', lang);
    setText(document.querySelector('.proj-tagline'), 'vaultify.tagline', lang);

    const statLabels = document.querySelectorAll('.proj-stats .ps-l');
    for (let i = 0; i < 4; i++) {
      if (statLabels[i]) setText(statLabels[i], `vaultify.stats.${i+1}.label`, lang);
    }

    const galH2 = document.querySelector('.gallery-section .section-h2');
    if (galH2) setText(galH2, 'vaultify.gallery', lang);

    const overlays = document.querySelectorAll('.gallery-overlay span');
    for (let i = 0; i < 5; i++) {
      if (overlays[i]) setText(overlays[i], `vaultify.overlay.${i+1}`, lang);
    }

    setHTML(document.querySelector('.two-col .section-h2'), 'vaultify.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    if (goalPs[0]) setText(goalPs[0], 'vaultify.goal.p1', lang);
    if (goalPs[1]) setText(goalPs[1], 'vaultify.goal.p2', lang);

    const feats = document.querySelectorAll('.feat-item');
    for (let i = 0; i < 5; i++) {
      if (!feats[i]) continue;
      setText(feats[i].querySelector('.feat-title'), `vaultify.feat.${i+1}.title`, lang);
      setText(feats[i].querySelector('.feat-desc'),  `vaultify.feat.${i+1}.desc`,  lang);
    }

    applyTechStack('vaultify', lang, 9);
    applyArchInfo('vaultify', lang, 6);

    /* Bezpieczeństwo */
    const secLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.trim() === 'Bezpieczeństwo' || el.textContent.trim() === 'Security' || el.textContent.trim() === 'Безпека');
    if (secLabel) setText(secLabel, 'vaultify.security.label', lang);
    const secH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('Operacyjne') || el.textContent.includes('Operational') || el.textContent.includes('Операційні'));
    if (secH2) setText(secH2, 'vaultify.security.title', lang);

    const ctrls = document.querySelectorAll('.ctrl span:last-child');
    for (let i = 0; i < 6; i++) {
      if (ctrls[i]) setText(ctrls[i], `vaultify.ctrl.${i+1}`, lang);
    }

    /* Wymagania + kroki instalacji */
    const pills = document.querySelectorAll('.req-pill');
    for (let i = 0; i < 4; i++) {
      if (pills[i]) setText(pills[i], `vaultify.req.pill.${i+1}`, lang);
    }
    const stepTitles = document.querySelectorAll('.step-title');
    for (let i = 0; i < 4; i++) {
      if (stepTitles[i]) setText(stepTitles[i], `vaultify.step.${i+1}.title`, lang);
    }
  }

  /* ── VAELOQ ──────────────────────────────────── */
  function applyVaeloq(lang) {
    applySharedDetail(lang);
    setText(document.querySelector('.proj-category'), 'vaeloq.category', lang);
    setText(document.querySelector('.proj-tagline'), 'vaeloq.tagline', lang);

    /* status badge (zamiast badge-year, ma osobną strukturę) */
    const statusBadge = document.querySelector('.badge-status');
    if (statusBadge) {
      const dot = statusBadge.querySelector('.status-dot');
      statusBadge.textContent = t('vaeloq.status', lang);
      if (dot) statusBadge.prepend(dot);
    }

    const statLabels = document.querySelectorAll('.proj-stats .ps-l');
    for (let i = 0; i < 4; i++) {
      if (statLabels[i]) setText(statLabels[i], `vaeloq.stats.${i+1}.label`, lang);
    }

    const galH2 = document.querySelector('.gallery-section .section-h2');
    if (galH2) setText(galH2, 'vaeloq.gallery', lang);

    const overlays = document.querySelectorAll('.gallery-overlay span');
    for (let i = 0; i < 4; i++) {
      if (overlays[i]) setText(overlays[i], `vaeloq.overlay.${i+1}`, lang);
    }

    setHTML(document.querySelector('.two-col .section-h2'), 'vaeloq.goal.h2', lang);
    const goalPs = document.querySelectorAll('.two-col .body-text');
    if (goalPs[0]) setText(goalPs[0], 'vaeloq.goal.p1', lang);
    if (goalPs[1]) setText(goalPs[1], 'vaeloq.goal.p2', lang);

    const feats = document.querySelectorAll('.feat-item');
    for (let i = 0; i < 5; i++) {
      if (!feats[i]) continue;
      setText(feats[i].querySelector('.feat-title'), `vaeloq.feat.${i+1}.title`, lang);
      setText(feats[i].querySelector('.feat-desc'),  `vaeloq.feat.${i+1}.desc`,  lang);
    }

    applyTechStack('vaeloq', lang, 8);
    applyArchInfo('vaeloq', lang, 6);

    /* Uwagi techniczne */
    const notesLabel = [...document.querySelectorAll('.section-label')].find(el =>
      el.textContent.trim() === 'Uwagi techniczne' || el.textContent.trim() === 'Technical notes' || el.textContent.trim() === 'Технічні примітки');
    if (notesLabel) setText(notesLabel, 'vaeloq.notes.label', lang);
    const notesH2 = [...document.querySelectorAll('.section-h2')].find(el =>
      el.textContent.includes('warto wiedzieć') || el.textContent.includes('Good to know') || el.textContent.includes('варто знати'));
    if (notesH2) setText(notesH2, 'vaeloq.notes.title', lang);

    const notes = document.querySelectorAll('.ctrl span:last-child');
    for (let i = 0; i < 6; i++) {
      if (notes[i]) setText(notes[i], `vaeloq.note.${i+1}`, lang);
    }

    /* Wymagania + kroki instalacji */
    const pills = document.querySelectorAll('.req-pill');
    for (let i = 0; i < 4; i++) {
      if (pills[i]) setText(pills[i], `vaeloq.req.pill.${i+1}`, lang);
    }
    const stepTitles = document.querySelectorAll('.step-title');
    for (let i = 0; i < 4; i++) {
      if (stepTitles[i]) setText(stepTitles[i], `vaeloq.step.${i+1}.title`, lang);
    }
  }

  /* ── PUBLIC API ──────────────────────────────── */
  return {
    apply,
    t,
    getPage,
    cycleLang,
    supportedLangs: SUPPORTED_LANGS.slice(),
    getLang: () => {
      const stored = localStorage.getItem('lang');
      return SUPPORTED_LANGS.indexOf(stored) !== -1 ? stored : 'pl';
    },
  };

})();