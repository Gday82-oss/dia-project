# Le Conseil Dia — Direction visuelle « La Faille »

Validée le 2026-11-12. Maquette de référence : https://claude.ai/artifact/RWPjB7y43ZvwYkYgr8vcjo (deux écrans : ordinateur et téléphone).

## L'idée

L'écran est fendu en deux par une ligne lumineuse verticale, « la faille ». MINOS est à gauche, NOESIS à droite, et la synthèse se pose à cheval sur la ligne. « Dia » veut dire « à travers » : la faille est l'axe dialectique rendu visible.

« La Faille » est un nom de travail. Il n'apparaît pas dans l'interface.

## Couleurs

| Nom           | Hex       | Rôle                            |
| ------------- | --------- | ------------------------------- |
| Nuit          | `#0a1020` | Fond commun                     |
| Cyan MINOS    | `#00d4ff` | Bordures, lueur et nom de MINOS |
| Texte MINOS   | `#c8e6ff` | Répliques de MINOS              |
| Violet NOESIS | `#8866aa` | Halo et brume de NOESIS         |
| Lilas         | `#c8b8e0` | Nom de NOESIS                   |
| Texte NOESIS  | `#e0d8f0` | Répliques de NOESIS             |
| Marbre        | `#e9e5dc` | Texte courant, synthèse         |
| Gris bleuté   | `#9aa6bd` | Texte secondaire                |

Les teintes des agents viennent du design system Dia. Le fond Nuit remplace le noir du design system sur cet écran. La synthèse n'a aucune couleur d'agent : elle est en marbre.

## Typographie

- MINOS et interface : Commissioner (400, 500, 600, 700).
- NOESIS : GFS Didot, droit. La police n'a pas de vrai italique, donc pas d'italique.
- Les deux gèrent le grec (Λόγος, Νόησις). Chargées depuis Google Fonts.
- Ces polices remplacent Orbitron, Noto Sans et Space Mono sur cet écran.

## Formes

- MINOS : cadres à bordure cyan nette, angles de 2 px, fine grille de 32 px en fond. Portrait carré, angles de 2 px, bordure cyan de 2 px et lueur franche.
- NOESIS : texte sans cadre, posé sur un halo violet flou, angles de 6 px. Portrait rond, bordure presque invisible, halo diffus.
- La faille : trait de 2 px, dégradé cyan → lilas → marbre de haut en bas, lueur cyan à gauche et violette à droite.
- Synthèse : bloc à bordure marbre, centré sur la faille, lueur cyan à gauche et violette à droite.
- Les deux portraits se font face de part et d'autre de la faille (128 px sur ordinateur, 36 px dans chaque réplique sur téléphone).

## Mise en page

- Ordinateur : deux colonnes séparées par la faille, les répliques alternent une ligne sur deux, la synthèse occupe toute la largeur en bas.
- Téléphone : la faille devient un fil vertical au centre, les répliques alternent à gauche (MINOS) et à droite (NOESIS) sur 82 % de la largeur.
- Sous 720 px, la page ordinateur passe sur une seule colonne.

## Mouvement

Le débat se joue en huit secondes environ, une réplique toutes les 1,8 s :

1. L'écran se vide : il reste les portraits et la faille.
2. MINOS : son cadre se construit de haut en bas, par paliers (0,9 s).
3. NOESIS : son texte sort du flou d'un coup (1 s).
4. Deuxième échange, même principe.
5. Synthèse : le bloc s'ouvre depuis la faille, du centre vers les côtés (1,1 s). C'est le seul grand effet de l'écran.

La faille respire lentement (4 s). Toutes les animations sont coupées si l'utilisateur a demandé moins de mouvement.

## Écarté

Lignes de scan, effets glitch, dégradé cyan-magenta sur les titres.

## Reste à faire

- Vérifier le rendu réel de la maquette et le rythme de l'animation.
- Porter la direction dans le code du Conseil Dia.
