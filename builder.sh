#!/bin/bash

# Colori per output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Iniziando il processo di build e deploy...${NC}\n"

# 1. Installa dipendenze
echo -e "${YELLOW}📦 Step 1: npm install...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}✗ npm install fallito${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Dipendenze installate${NC}\n"

# 2. Build del progetto
echo -e "${YELLOW}🔨 Step 2: npm run build...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Build fallita${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Build completata${NC}\n"

# 3. Deploy su GitHub Pages
echo -e "${YELLOW}🚀 Step 3: Deploy su GitHub Pages...${NC}"

# Verifica se gh-pages è installato, altrimenti installalo
if ! npm list gh-pages > /dev/null 2>&1; then
    echo -e "${YELLOW}Installazione gh-pages...${NC}"
    npm install --save-dev gh-pages
fi

# Verifica se lo script deploy esiste nel package.json
if ! grep -q '"deploy"' package.json; then
    echo -e "${YELLOW}Aggiunta script deploy al package.json...${NC}"
    # Backup del package.json
    cp package.json package.json.backup
    # Aggiungi lo script deploy
    sed -i '/"scripts": {/a \    "deploy": "gh-pages -d dist",' package.json
fi

npm run deploy
if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Deploy fallito${NC}"
    exit 1
fi

echo -e "\n${GREEN}✓✓✓ TUTTO COMPLETATO! ✓✓✓${NC}"
echo -e "${GREEN}Il tuo sito è disponibile su: https://purp7epi3.github.io/${NC}\n"
