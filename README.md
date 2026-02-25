# Portfolio (statique)

Ce portfolio est **sans dépendances** (pas besoin de Node). Il fonctionne avec du HTML/CSS/JS.

## Démarrer

### Option A — ouvrir directement

Tu peux ouvrir `portfolio/index.html` dans ton navigateur.

> Si ton navigateur bloque certaines fonctions quand tu ouvres un fichier local, utilise l’option B.

### Option B — serveur local (recommandé)

Dans un terminal:

```bash
cd "/Users/farouklaouedj/portfolio"
ruby -run -e httpd . -p 5173
```

Ensuite ouvre `http://localhost:5173`.

## Personnaliser

Modifie uniquement `data.js`:

- `basics`: nom, rôle, email, lien CV
- `about`: textes
- `skills`: liste de compétences
- `projects`: projets (titre, statut, description, stack, liens)
- `social`: liens (GitHub, LinkedIn, etc.)

## Publier

- **GitHub Pages**: mets ce dossier dans un repo puis active Pages (branche `main`, dossier `/root` ou `/docs`).
- **Netlify / Vercel**: dépose le dossier (site statique). Il n’y a pas de build.

