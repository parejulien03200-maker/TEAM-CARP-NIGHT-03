// Projet prêt à publier sur GitHub + Vercel
// Structure recommandée :
// teamcarpe-clone/
// ├─ public/
// │  └─ index.html
// ├─ src/
// │  └─ App.jsx  (copie du code React ci-dessus)
// ├─ package.json
// ├─ tailwind.config.js (si Tailwind utilisé)
// └─ postcss.config.js

/*
1. Crée un dossier local : teamcarpe-clone
2. Initialiser React (CRA ou Vite) :
   - CRA : npx create-react-app teamcarpe-clone
   - Vite : npm create vite@latest teamcarpe-clone --template react
3. Remplace src/App.jsx par le code du composant TeamCarpeClone
4. Installer Tailwind (si utilisé) :
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   Configure tailwind.config.js et index.css
5. Teste en local : npm start
6. Initialiser git et push sur GitHub :
   git init
   git add .
   git commit -m "Initial commit - TeamCarpe clone"
   git branch -M main
   git remote add origin https://github.com/TON_UTILISATEUR/TON_REPO.git
   git push -u origin main
7. Sur Vercel : New Project → Import GitHub repo → Deploy
*/
