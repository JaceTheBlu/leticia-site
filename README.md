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

Le site est servi sur `https://leticia-app.com` (voir `static/CNAME` et
`docusaurus.config.ts`). Côté DNS (ex. Cloudflare), pour un domaine racine :

- 4 enregistrements A vers les IP GitHub Pages :
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  (AAAA optionnels pour l'IPv6 : `2606:50c0:8000::153`, `2606:50c0:8001::153`,
  `2606:50c0:8002::153`, `2606:50c0:8003::153`) ;
- laisser ces enregistrements en mode "DNS only" (nuage gris) le temps que
  GitHub valide le domaine et émette son certificat HTTPS - un proxy actif
  peut faire échouer la validation ACME ou provoquer une boucle de
  redirection selon le mode SSL/TLS choisi ;
- dans **Settings → Pages** du dépôt, renseigner `leticia-app.com` comme
  domaine personnalisé puis cocher **Enforce HTTPS** une fois le certificat
  émis.
