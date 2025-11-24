## Patience — Traduction et Analyse

Application web Next.js présentant une traduction française enrichie d’un texte sur la patience, accompagnée d’un résumé des idées clés, de questions de réflexion et de ressources complémentaires.

### Fonctionnalités

- Traduction en français du passage fourni, structurée pour une lecture fluide.
- Synthèse des piliers essentiels associés à la patience.
- Questions guidées pour approfondir la réflexion personnelle.
- Accès direct au texte source et copie rapide en un clic.

### Stack

- [Next.js 14](https://nextjs.org/) — App Router & TypeScript
- [Tailwind CSS](https://tailwindcss.com/) pour le design réactif
- [lucide-react](https://lucide.dev/) pour les icônes

### Démarrage

```bash
npm install
npm run dev
```

Rendez-vous ensuite sur [http://localhost:3000](http://localhost:3000).

### Scripts utiles

- `npm run lint` — Vérifie la qualité du code avec ESLint.
- `npm run build` — Génère la version prête pour la production.
- `npm start` — Sert la build de production.

### Déploiement

Le projet est prêt à être déployé sur [Vercel](https://vercel.com/). Exécutez :

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-18281e13
```
