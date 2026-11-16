# 5-osteo — Claire Morel, ostéopathe (template Webflow « AlphaMed », licence achetée)

Praticienne, adresse et avis **fictifs** : à remplacer avant mise en ligne.
Conforme à `PROCESS-SITE-TEMPLATE-OSTEO.md` : une seule praticienne, **une seule page**
(+ `/blog`, `/blog/[slug]`, `/mentions-legales`, `/confidentialite`).

## Démarrer
```bash
npm install && npm run dev
```

## Contenu (tout est piloté par des données)
- `src/content/content.ts` — toutes les sections du PROCESS §2 + `BOOKING_HREF` (lien RDV unique)
- `src/content/schema.ts` — modèle + limites de caractères : **le build échoue** si un texte dépasse
- `src/content/blog.ts` — articles (titre, extrait, date, corps Markdown ; pas d'image d'article)
- `src/content/legal.ts` — mentions légales / confidentialité (n° ADELI, SIRET, hébergeur à compléter)
- `src/content/images.ts` — visuels génériques + **repli par mots-clés** (motifs, publics, blog)

## Page unique — ancres
`accueil` · `deroulement` · `a-propos` · `publics` · `motifs` · `tarifs` · `avis` · `blog` · `faq` · `infos` · `contact`
Publics, Tarifs, FAQ et Infos n'existent pas dans AlphaMed : ils sont construits avec ses composants
(grille alternée de la page About, section « schedule » + carte, typographie et couleurs du template).

## Design
`src/app/globals.css` (fichier unique) : tokens du PROCESS en tête (`--brand` + gamme 50→950, `--paper`,
`--cream`, `--line`, `--ink-*`, rayons, ombres, polices), CSS Webflow d'origine, puis blocs complémentaires.
Nav fixe avec `top: var(--nav-offset, 0px)`. Animations : transitions CSS (menu mobile, survols, FAQ).

## Images (≈ 230 Ko, WebP ≤ 900 px)
- `public/img/client/` : logo carré, photo du hero, photo de la praticienne (= champs uploadés)
- `public/img/design/` : icônes, illustrations, visuels génériques (= défauts du template)

## À savoir
- Formulaire de contact : message de succès, endpoint à brancher (`// TEMPLATE:`).
- `_source/img-template/` : images d'origine du template non utilisées.
