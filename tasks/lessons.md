# Dia — Leçons

À relire au début de chaque session. Une ligne par correction.

Format : `[date] | ce qui a mal tourné | règle pour l'éviter`

---

- [2026-11-12] | La CI a échoué deux fois sur `main` parce que des fichiers n'étaient pas formatés | Lancer `pnpm prettier --check .` avant chaque push, y compris pour les fichiers Markdown.
- [2026-11-12] | Le dépôt contenait 54 fichiers de code jamais utilisés, hérités des modèles Manus et shadcn | Avant de supprimer ou d'ajouter un fichier, vérifier qui l'importe. Ne garder un composant que s'il est utilisé ou prévu dans `tasks/todo.md`.
- [2026-11-12] | Neuf documents du design system n'existaient que sur le PC et la présentation des agents que dans le projet Claude ; rien de tout ça n'était sur GitHub | Tout document du projet va dans `docs/` du dépôt. Le PC et le projet Claude n'en gardent qu'une copie.
- [2026-11-12] | `tasks/todo.md` du projet Claude annonçait encore la fusion n° 11 « ouverte » alors qu'elle était fusionnée | À la fin de chaque session, recopier `tasks/todo.md` et `tasks/lessons.md` du dépôt vers le projet Claude.
