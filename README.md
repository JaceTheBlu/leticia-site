# leticia-site

Documentation publique de **Leticia**, propulsée par [Docusaurus](https://docusaurus.io/).

Le code produit vit dans un dépôt privé séparé ; ce dépôt ne contient que le
site de documentation, publié sur GitHub Pages.

## Développement

```bash
npm install
npm run start   # serveur local avec rechargement à chaud
npm run build   # build de production (dossier build/)
```

## Publication

Le workflow `.github/workflows/deploy.yml` build et déploie automatiquement sur
GitHub Pages à chaque push sur `main`. Activez Pages dans les réglages du dépôt
(**Settings → Pages → Source : GitHub Actions**).

## Domaine personnalisé

Le site est configuré pour l'URL GitHub Pages par défaut
(`https://jacetheblu.github.io/leticia-site/`). Pour un domaine personnalisé
(ex. `docs.letic.ia`) :

1. dans `docusaurus.config.ts`, mettre `url: 'https://docs.letic.ia'` et
   `baseUrl: '/'` ;
2. ajouter un fichier `static/CNAME` contenant `docs.letic.ia` ;
3. pointer le DNS du domaine sur GitHub Pages.
