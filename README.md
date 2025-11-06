#!/bin/bash
# Script pour initialiser Git, push sur GitHub et préparer le déploiement sur Vercel

# 1️⃣ Vérifie si git est initialisé
if [ ! -d ".git" ]; then
  git init
  echo "Git initialisé."
fi

# 2️⃣ Ajoute tous les fichiers
git add .
git commit -m "Initial commit - TeamCarpe clone"

# 3️⃣ Branche principale
git branch -M main

# 4️⃣ Remplace le lien par ton repo GitHub
GITHUB_REPO="https://github.com/TON_UTILISATEUR/teamcarpe-clone.git"

git remote add origin $GITHUB_REPO 2>/dev/null
git push -u origin main

echo "✅ Code poussé sur GitHub. Maintenant connecte-toi sur Vercel et déploie ton repo."
