/frontend
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── assets
│       ├── fonts
│       │   ├── Montserrat-Regular.woff2
│       │   ├── Inter-Regular.woff2
│       │   └── Roboto-Regular.woff2
│       ├── icons
│       │   ├── logo.svg
│       │   ├── menu.svg
│       │   └── social
│       └── images
│           ├── background-light.jpg
│           └── background-dark.jpg
├── src
│   ├── assets
│   │   ├── icons
│   │   │   ├── ChevronDown.svg
│   │   │   ├── Close.svg
│   │   │   └── Search.svg
│   │   └── logo.svg
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.scss
│   │   │   └── Button.test.tsx
│   │   ├── Card
│   │   │   ├── Card.tsx
│   │   │   ├── Card.module.scss
│   │   │   └── Card.test.tsx
│   │   ├── Modal
│   │   │   ├── Modal.tsx
│   │   │   ├── Modal.module.scss
│   │   │   └── Modal.test.tsx
│   │   ├── Navbar
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.module.scss
│   │   │   └── Navbar.test.tsx
│   │   ├── Sidebar
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Sidebar.module.scss
│   │   │   └── Sidebar.test.tsx
│   │   ├── Loader
│   │   │   ├── Loader.tsx
│   │   │   └── Loader.module.scss
│   │   ├── Pagination
│   │   │   ├── Pagination.tsx
│   │   │   └── Pagination.module.scss
│   │   ├── Tooltip
│   │   │   ├── Tooltip.tsx
│   │   │   └── Tooltip.module.scss
│   │   └── ...
│   ├── context
│   │   ├── AuthContext.tsx
│   │   ├── SettingsContext.tsx
│   │   └── ThemeContext.tsx
│   ├── hooks
│   │   ├── useAuth.ts
│   │   ├── useDebounce.ts
│   │   ├── useFetch.ts
│   │   └── useLocalStorage.ts
│   ├── layouts
│   │   ├── DashboardLayout.tsx
│   │   ├── PublicLayout.tsx
│   │   └── AuthLayout.tsx
│   ├── pages
│   │   ├── Dashboard
│   │   │   ├── index.tsx
│   │   │   ├── SiteEditor.tsx
│   │   │   ├── SitesList.tsx
│   │   │   └── UsersManagement.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── NotFound.tsx
│   │   ├── Register.tsx
│   │   ├── Settings.tsx
│   │   └── Profile.tsx
│   ├── services
│   │   ├── api.ts
│   │   ├── authService.ts
│   │   ├── paymentService.ts
│   │   ├── smsService.ts
│   │   └── websocketService.ts
│   ├── store
│   │   ├── index.ts
│   │   └── slices
│   │       ├── authSlice.ts
│   │       ├── settingsSlice.ts
│   │       ├── sitesSlice.ts
│   │       └── usersSlice.ts
│   ├── styles
│   │   ├── globals.scss
│   │   ├── tailwind.config.js
│   │   └── variables.scss
│   ├── types
│   │   ├── api.d.ts
│   │   ├── auth.d.ts
│   │   ├── payment.d.ts
│   │   ├── site.d.ts
│   │   └── user.d.ts
│   ├── utils
│   │   ├── formatDate.ts
│   │   ├── validators.ts
│   │   ├── logger.ts
│   │   └── helpers.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── react-app-env.d.ts
├── .env
├── .gitignore
├── jest.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
