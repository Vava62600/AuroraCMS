# AuroraCMS (ACMS)

AuroraCMS est un système de gestion de contenu (CMS) moderne, modulaire et sécurisé, conçu pour offrir une plateforme complète de gestion de site web avec un panneau d’administration robuste.

## Fonctionnalités principales

- Backend performant en **Rust** avec API REST sécurisée  
- Frontend en **React** (TypeScript) avec support thème clair/sombre et responsive design  
- Authentification sécurisée avec gestion multi-appareils via tokens cryptographiques (32 hex, durée configurable)  
- Panneau admin accessible uniquement après authentification, même si l’accès public est activé  
- Gestion des utilisateurs, sessions et permissions avancée  
- Protection contre les attaques XSS, CSRF, injections SQL et autres vulnérabilités  
- Thèmes complets :  
  - **Typographies** : Inter, Montserrat, Roboto (Google Fonts)  
  - **Palette claire** : blancs doux, gris neutres, bleu turquoise #17c6f7, boutons en dégradés de bleu/vert  
  - **Palette sombre** : fonds gris foncés #181a20, textes clairs #eee, boutons en dégradés violets/bleus  
  - Styles CSS modulaires avec Sass, variables pour personnalisation facile  
- Déploiement Docker recommandé avec pipeline CI/CD (GitHub Actions ou GitLab CI)  
- Documentation complète dans `docs/`

## Technologies utilisées

| Partie       | Langage / Framework      | Outils principaux                  |
|--------------|-------------------------|----------------------------------|
| Backend      | Rust                    | Actix-web, Diesel (ORM), Argon2  |
| Frontend     | React + TypeScript      | Vite, Sass, React Router, Axios  |
| Base de données | SQLite (développement), PostgreSQL (production) | SQL migrations avec Diesel        |
| Authentification | JWT, tokens sécurisés | Cookies HttpOnly, Secure, SameSite |
| Tests       | Rust (cargo test), Jest + React Testing Library |                                   |
| CI/CD       | GitHub Actions / GitLab CI | Docker, ESLint, Prettier          |

## Installation rapide

1. Cloner le repo  
   `git clone https://github.com/votre-utilisateur/auroracms.git`

2. Copier et configurer `.env`  
   `cp .env.example .env` puis modifier selon vos paramètres

3. Construire le backend  
   `cargo build --release` puis `./target/release/auroracms-backend`

4. Installer et lancer le frontend  

cd frontend
npm install
npm run build
npm run preview


5. Accéder au site public via `/` et au panneau admin via `/acms-admin/` (auth obligatoire)

---

## Sécurité

- Mots de passe hachés avec Argon2  
- Tokens JWT avec expiration configurable (max 30 jours)  
- Vérification multi-appareils : changement d’appareil déconnecte tous les tokens  
- Protection CSRF intégrée avec tokens synchronisés  
- Politique CORS stricte  
- Toutes les communications doivent être en HTTPS

---

## Contribuer

Merci de consulter [CONTRIBUTING.md](CONTRIBUTING.md) avant toute contribution.

---

## Licence

Projet sous licence GPLv3.

---

## Contact

Support & questions : 
Site officiel : 
Documentation : 