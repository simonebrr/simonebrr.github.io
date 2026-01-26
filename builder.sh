cp -r dist/* .

# Aggiungi .nojekyll se non c'è
touch .nojekyll

# Aggiungi tutto
git add .

# Committa
git commit -m "Update build with icon"

# Pusha
git push origin gh-pages

# Torna a main
git checkout main