│   LICENCE.md              // 📄 Licence GPLv3 complète
│   SECURITY.md             // 🔒 Politiques de sécurité et pratiques recommandées
│   TREE.md                 // 🌳 Structure exacte du projet, maintenue à jour
│   .env                    // ⚙️  Variables d’environnement sensibles
│   .gitignore              // 📁 Fichiers/dossiers à exclure du versionnement
│   jest.config.js          // 🫒 Configuration des tests unitaires
│   package.json            // 📦 Dépendances et scripts du projet (frontend/backend/api)
│   package-lock.json       // 📦 Lock des versions de dépendances
│   postcss.config.json     // 🎨 Configuration PostCSS
│   postcss.config.js       // 🎨 Config complémentaire PostCSS
│   tailwind.config.js      // 🎨 Thème Tailwind complet (couleurs, polices, breakpoints)
│   tsconfig.json           // 🔠 Configuration TypeScript
│   vite.config.ts          // ⚡ Vite.js config (React + backend)
│   README.md               // 📘 Présentation complète du projet AuroraCMS
│   CONTRIBUTING.md         // 🤝 Guide de contribution
│   CHANGELOG.md            // 📜 Historique des changements
│
├───public                  // 🌐 Fichiers publics statiques
│   │   index.html          // Page d’entrée React (SSR si activé)
│   │   manifest.json       // Métadonnées PWA
│   │   robots.txt          // Référencement SEO
│   └───assets
│       ├───fonts           // Polices (Montserrat, Inter, Roboto)
│       ├───icons           // SVG UI + Favicons
│       └───images          // Logos, fonds, illustrations
│
├───logs                    // 🧕 Journaux d’exécution
│   │   debug.log           // Infos dév/console
│   │   security.log        // Logs de connexion, détection d’intrusions
│
└───src                     // 🧠 Source principale (Frontend, Backend, API)
    │   App.tsx             // Entrée principale React
    │   Index.tsx           // Point de montage
    │   react-app-env.d.ts  // Types globaux
    │
    ├───assets              // 🎨 Ressources graphiques communes
    │   │   logo.svg
    │   └───icons
    │           ChevronDown.svg
    │           Close.svg
    │           Search.svg
    │
    ├───components          // 🧹 Composants UI réutilisables
    │   ├───Button
    │   │       Button.tsx
    │   │       Button.module.scss
    │   │       Button.test.tsx
    │   │
    │   ├───Card
    │   │       Card.module.scss
    │   │       Card.tsx
    │   │       Card.test.tsx
    │   │
    │   ├───Modal
    │   │       Modal.module.scss
    │   │       Modal.tsx
    │   │       Modal.test.tsx
    │   │
    │   ├───Navbar
    │   │       Navbar.module.scss
    │   │       Navbar.tsx
    │   │       Navbar.test.tsx
    │   │
    │   ├───Sidebar
    │   │       Sidebar.module.scss
    │   │       Sidebar.tsx
    │   │       Sidebar.test.tsx
    │   │
    │   ├───Loader
    │   │       Loader.module.scss
    │   │       Loader.tsx
    │   │       Loader.test.tsx
    │   │
    │   ├───Pagination
    │   │       Pagination.module.scss
    │   │       Pagination.tsx
    │   │       Pagination.test.tsx
    │   │
    │   ├───Tooltip
    │   │       Tooltip.module.scss
    │   │       Tooltip.tsx
    │   │       Tooltip.test.tsx
    │   │
    │   └───Advanced         // 🔄 Composants avancés utilisateur
    │       ├───MarkdownBlock
    │       │       MarkdownBlock.tsx          // Rendu Markdown sécurisé natif
    │       │       MarkdownBlock.module.scss
    │       │       MarkdownBlock.test.tsx
    │       │
    │       ├───CodeBlock
    │       │       CodeBlock.tsx               // Affichage code avec coloration syntaxique
    │       │       CodeBlock.module.scss
    │       │       CodeBlock.test.tsx
    │       │
    │       ├───HtmlEmbedCard
    │       │       HtmlEmbedCard.tsx           // Rendu HTML contrôlé & sandbox
    │       │       HtmlEmbedCard.module.scss
    │       │       HtmlEmbedCard.test.tsx
    │       │
    │       └───IncludeRenderer
    │               IncludeRenderer.tsx         // Chargement dynamique composants/custom
    │               IncludeRenderer.module.scss
    │               IncludeRenderer.test.tsx
    │
    ├───context             // 🌐 Contexts React (Theme/Auth/Settings)
    │       AuthContext.tsx
    │       SettingsContext.tsx
    │       ThemeContext.tsx
    │
    ├───hooks               // 🧽 Custom Hooks (fetch, localstorage, debounce)
    │       useAuth.ts
    │       useDebounce.ts
    │       useFetch.ts
    │       useLocalStorage.ts
    │
    ├───layouts             // 🧱 Layouts principaux (Public, Dashboard, Auth)
    │       DashboardLayout.tsx
    │       PublicLayout.tsx
    │       AuthLayout.tsx
    │
    ├───pages               // 📄 Pages de routage (Login, Admin, Home...)
    │   │   Home.tsx
    │   │   Login.tsx
    │   │   NotFound.tsx
    │   │   Register.tsx
    │   │   Settings.tsx
    │   │   Profile.tsx
    │   │   AdminDashboard.tsx
    │   │
    │   └───dashboard       // Sous-pages du dashboard
    │
    ├───services            // ⚙️ Accès API + gestion WebSocket/SMS/Payments
    │       api.ts
    │       authService.ts
    │       paymentService.ts
    │       smsService.ts
    │       websocketService.ts
    │
    ├───store               // 💃 Zustand store + slices (redux-like)
    │   │   index.ts
    │   │   useAuthStore.ts
    │   │
    │   └───slices
    │           authSlice.ts
    │           settingsSlice.ts
    │           sitesSlice.ts
    │           usersSlice.ts
    │
    ├───styles              // 🎨 SCSS globaux + Tailwind Theme
    │       globals.scss
    │       tailwind.config.js
    │       variables.scss
    │
    ├───types               // 💼 Typage global API / Auth / Utilisateur / Paiement
    │       api.d.ts
    │       auth.d.ts
    │       payment.d.ts
    │       site.d.ts
    │       user.d.ts
    │
    ├───utils               // ⚙️ Fonctions utilitaires (dates, validations, logs)
    │       formatDate.ts
    │       validators.ts
    │       logger.ts
    │       helpers.ts
    │
    ├───lib                 // 🔐 Libs internes (logger, sécurité)
    │       logger.ts
    │       security.ts
    │
    ├───server              // 🔙 Backend API + sécurité + logique serveur
    │   │   server.ts        // Serveur principal (Express/Nest-like en TS)
    │   │   logging.ts       // Gestion des logs (debug & sécurité)
    │   │   routes.ts        // Routing centralisé backend
    │   │   middleware.ts    // Middlewares globaux (auth, erreurs...)
    │   │   config.ts        // Configuration serveur (choix DB dynamique)
    │   │   auth.ts          // Authentification sécurisée (token, sessions)
    │   └───wp              // 📍 Module de compatibilité WordPress (thèmes/plugins)
    │       │   index.ts           // Point d'entrée WP Compatibility
    │       │   sandbox.ts         // Environnement d'exécution isolé (PHP-WASM)
    │       │   pluginLoader.ts    // Chargement/Adaptation plugins WP
    │       │   themeLoader.ts     // Chargement de thèmes WP
    │       │   compatMap.json     // Mappage WP ↔ AuroraCMS
    │       ├───themes            // Thèmes importés WP
    │       └───plugins           // Plugins importés WP
    │
    └───api                 // 📡 Endpoints REST/GraphQL de l’API publique/admin
        │   index.ts         // Routeur d'entrée API
        │   auth.ts          // Authentification (JWT, OAuth2, Tokens)
        │   sites.ts         // Gestion des sites multi-tenant
        │   users.ts         // Gestion utilisateurs + rôles
        │   payments.ts      // Paiements (Stripe, CB, crypto)
        │   reservations.ts  // Réservations (créneaux, rappels...)
