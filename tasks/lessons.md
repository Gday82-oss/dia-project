# Dia — Leçons

À relire au début de chaque session. Une ligne par correction.

Format : `[date] | ce qui a mal tourné | règle pour l'éviter`

---

- [2026-11-12] | La CI a échoué deux fois sur `main` parce que des fichiers n'étaient pas formatés | Lancer `pnpm prettier --check .` avant chaque push, y compris pour les fichiers Markdown.
- [2026-11-12] | Le dépôt contenait 54 fichiers de code jamais utilisés, hérités des modèles Manus et shadcn | Avant de supprimer ou d'ajouter un fichier, vérifier qui l'importe. Ne garder un composant que s'il est utilisé ou prévu dans `tasks/todo.md`.
