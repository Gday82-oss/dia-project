# Dia — Plan : le Système Dia, douze agents IA autonomes

Créé le 2026-11-11, réorienté le même jour. Dépôt : `Gday82-oss/dia-project` (branche `main`).
Statut : **plan à valider — le code des agents n'est pas encore modifié.**

## Objectif

Construire le Système Dia : douze agents IA autonomes qui surveillent et améliorent les projets de Guillaume (Dia lui-même, puis MyCareCoach), sans qu'on ait à cliquer.

L'audit 360° n'est plus le produit : c'est la première mission confiée au système.

## Ce qu'« autonome » veut dire ici

Un agent est autonome quand il a : un **cerveau** (vraie IA), des **outils** (il peut agir), une **mémoire** (il se souvient), une **boucle** (il décide seul de l'étape suivante), un **déclencheur** (il se lance seul). Le système existe quand les agents **se parlent**.

## Règle de sécurité de départ

Les agents **observent et proposent**, ils ne modifient rien seuls. Ils peuvent lire, analyser, écrire un rapport, ouvrir un ticket, envoyer une alerte. Ils ne poussent pas de code, ne touchent pas à une base de production, ne suppriment rien. On élargira agent par agent, une fois la confiance établie.

## Constat de départ (vérifié dans le code)

- `server/services/agentServices.ts` : les 12 fonctions renvoient des valeurs `Math.random()` et des textes en dur. Aucun appel IA.
- `server/_core/llm.ts` : `invokeLLM` existe, gère le JSON structuré et les appels d'outils (`tools`, `tool_calls`), mais personne ne l'appelle. Modèle (`gemini-2.5-flash`) et adresse par défaut (Forge de Manus) écrits en dur.
- `server/_core/notification.ts` existe (alerte au propriétaire) : utilisable comme premier outil d'alerte, à vérifier.
- `server/routers/agentTasks.ts` : les 13 routes d'exécution sont **publiques**.
- Tables `agentTasks`, `agentLogs`, `agentMetrics` : en place, mais les services n'utilisent pas `agentTasks`.
- Métriques `efficiency / health / load` : chiffres fixes écrits dans le code, affichés comme s'ils étaient mesurés.
- Dashboard : un bouton « tout exécuter », aucun affichage de résultat.
- Le README mentionne `.env.example`, absent du dépôt.
- Un seul test. CI en place : typecheck, prettier, build, vitest.

## Décisions encore ouvertes

1. **Quelle IA et quelle clé ?** Décidé le 2026-11-11 : les agents tournent avec Claude. Reste à choisir la clé et à brancher `llm.ts` dessus. **Bloquant pour l'étape 1.**
2. **Où tourne l'app ?** Des agents qui se réveillent seuls ont besoin d'un serveur allumé en permanence (pas seulement le front sur Netlify).
3. **Budget IA mensuel maximal** à ne pas dépasser.

Décidé : les agents agissent d'abord sur les projets de Guillaume (réponse du 2026-11-11).

---

## Rangement du dépôt (2026-11-12)

Fait en deux demandes de fusion : n° 11 (`chore/rangement-depot`, fusionnée le 2026-11-12) puis `chore/organisation-projet`.

- [x] Supprimer le code jamais utilisé (54 fichiers) : page `ComponentShowcase`, `DashboardLayout`, `ManusDialog`, `Map`, 42 composants shadcn non utilisés, `useMobile`, l'ancien `server/index.ts`, et les aides Manus sans appelant (`map`, `dataApi`, `imageGeneration`, `voiceTranscription`, `storage`)
- [x] Supprimer les traces d'outils : `.emergent/`, `.gitconfig`, trois `.gitkeep`
- [x] Classer les documents : `docs/business/`, `docs/design/`, `docs/archive/`
- [x] Ajouter `tasks/todo.md` et `tasks/lessons.md` dans le dépôt
- [x] Ajouter la direction visuelle « La Faille » dans `docs/design/`
- [x] Mettre à jour la structure décrite dans le README
- [x] Retirer le collecteur de logs Manus de `vite.config.ts` et `client/public/__manus__/`
- [x] Ajouter dans `docs/design/systeme-dia/` les 9 documents du design system qui n'existaient que sur le PC de Guillaume
- [x] Ajouter dans `docs/agents/` la présentation des 12 agents qui n'existait que dans le projet Claude
- [x] Ajouter `docs/README.md` (sommaire des documents)
- [x] Créer `.env.example`
- [ ] Supprimer les 7 vieilles branches (voir ci-dessous) — refusé depuis une session Claude, à faire sur github.com, page « Branches »
- [ ] Corriger la description du dépôt sur github.com (elle dit encore « Site vitrine… ») — même raison
- [ ] Retirer de `package.json` les dépendances devenues inutiles — à faire depuis le PC : demande `pnpm install` pour régénérer le fichier de verrouillage

Gardé volontairement bien que non utilisé aujourd'hui : `server/_core/llm.ts` (étape 1), `AIChatBox` et les composants `Button`, `Card`, `Badge`, `Input`, `Textarea`, `Label`, `Dialog`, `Separator`, `Tooltip` (décrits dans le design system), `useAgent`, `shared/types.ts`, `drizzle/relations.ts`. Le greffon `vite-plugin-manus-runtime` reste aussi, jusqu'au nettoyage des dépendances.

Branches à supprimer (validé par Guillaume le 2026-11-12). Pour en restaurer une ensuite : `git push origin <identifiant>:refs/heads/<nom>`.

| Branche                                | Identifiant | Remarque                                          |
| -------------------------------------- | ----------- | ------------------------------------------------- |
| `chore/rangement-depot`                | `57bf0f4`   | fusionnée (n° 11)                                 |
| `copilot/check-deployment-readiness`   | `020b4ee`   | fusionnée                                         |
| `copilot/review-commit-checks`         | `bc7f07e`   | fusionnée                                         |
| `copilot/update-project-requirements`  | `37b52a7`   | fusionnée                                         |
| `copilot/update-readme-agents-table`   | `84ad190`   | fusionnée                                         |
| `copilot/create-readme-for-full-stack` | `3de0ff0`   | reste non fusionné : retouche du README (20 fév.) |
| `copilot/fix-run-failed-checks`        | `9b71d25`   | reste non fusionné : correctif CI refait depuis   |

La branche `gh-pages` (appli Le Conseil Dia) est gardée.

**Preuve :** la CI (typecheck, prettier, build, tests) passe sur chaque demande de fusion.

### Où se trouve quoi

- **GitHub** (`Gday82-oss/dia-project`) : la référence. Code, documents (`docs/`), plan (`tasks/`).
- **Projet Claude « Dia »** : synchronisé avec GitHub, plus une copie de travail de `tasks/todo.md`, `tasks/lessons.md` et `design/direction-la-faille.md`.
- **PC** (`Bureau/Doc Guillaume/Agent_Système dia`) : copie des documents `docs/`, datée dans son `LISEZ-MOI.md`.

---

## Étape 0 — Base saine

- [ ] Vérifier que `pnpm check`, `pnpm test` et `pnpm build` passent sur `main`
- [x] Créer `.env.example`
- [x] Ajouter `tasks/todo.md` et `tasks/lessons.md` dans le dépôt
- [ ] Travailler sur une branche `feat/systeme-autonome`, jamais directement sur `main`

**Preuve :** les 3 commandes passent.

## Étape 1 — Cerveau : MINOS réfléchit vraiment

- [ ] `llm.ts` : modèle configurable (`LLM_MODEL`), message d'erreur corrigé
- [ ] Créer `server/services/agentRunner.ts` : fonction commune `runAgent(agent, entrée)` — crée la tâche en base, appelle l'IA avec le prompt de l'agent, valide la réponse (zod), enregistre sortie, durée, statut, log
- [ ] Créer `server/agents/prompts/minos.ts` : rôle, ton (repris du concept narratif), format de sortie
- [ ] `minosAnalyzeCode` : supprimer `Math.random`, passer par `runAgent`
- [ ] Routes d'exécution : `protectedProcedure`, taille d'entrée limitée
- [ ] Métriques : de vraies mesures (durée, taux de réussite) ou rien
- [ ] Dashboard : champ d'entrée + affichage du résultat de MINOS
- [ ] Tests : réponse valide, réponse invalide, IA en erreur, entrée trop longue, non connecté

**Preuve :** tests verts + essai réel sur `server/routers/agents.ts` (MINOS doit signaler les `as any` répétés).

## Étape 2 — Outils : MINOS agit

Il choisit lui-même quels outils utiliser. Tous en lecture seule, sauf le rapport et l'alerte.

- [ ] Registre d'outils (`server/agents/tools/`) : chaque outil a un nom, une description, des paramètres validés
- [ ] Outil `lire_depot` : arborescence et fichiers d'un dépôt GitHub autorisé (liste blanche : `dia-project`, puis `MyCareCoach`)
- [ ] Outil `lire_page` : récupérer une page d'un site autorisé (liste blanche de domaines)
- [ ] Outil `ecrire_rapport` : enregistrer un rapport en base
- [ ] Chaque appel d'outil est journalisé dans `agentLogs`

**Preuve :** on donne à MINOS le but « décris l'architecture de dia-project » sans lui donner le code ; il va le lire seul et rend un rapport exact. Une cible hors liste blanche est refusée (test).

## Étape 3 — Boucle et mémoire : MINOS travaille seul

- [ ] Boucle dans `runAgent` : réfléchir → agir → observer → recommencer, jusqu'au but
- [ ] Limites dures : nombre maximal d'étapes, durée maximale, budget maximal par mission
- [ ] Nouvelle table `agentMemory` : ce que l'agent a appris d'une mission à l'autre (faits courts, datés)
- [ ] À chaque mission, l'agent relit sa mémoire et la met à jour à la fin

**Preuve :** deux missions à la suite sur le même dépôt ; à la seconde, MINOS ne refait pas tout et signale seulement ce qui a changé. Une mission qui tourne en rond s'arrête proprement à la limite.

## Étape 4 — Dialogue : NOESIS arrive, la première paire fonctionne

- [ ] Prompt NOESIS (vue d'ensemble, ce qui frappe, ce qui manque)
- [ ] Nouvelle table `agentMessages` : un agent peut écrire à un autre, demander un avis, contester
- [ ] Mécanique d'axe : MINOS et NOESIS traitent le même sujet, lisent l'avis de l'autre, puis une synthèse note accords et désaccords
- [ ] Écran du Conseil Dia selon la direction « La Faille » (`docs/design/direction-la-faille.md`)

**Preuve :** sur 3 sujets, deux avis réellement différents et une synthèse qui cite les deux.

**Point d'arrêt :** si la paire n'apporte rien de plus qu'un agent seul, retravailler avant d'aller plus loin.

## Étape 5 — Déclencheurs : CHRONOS réveille le système

- [ ] CHRONOS devient le planificateur : missions à heure fixe (ex. revue hebdomadaire de `dia-project`)
- [ ] Déclenchement sur événement : nouveau commit sur un dépôt suivi
- [ ] Alerte au propriétaire quand une mission se termine avec quelque chose d'important
- [ ] Interrupteur général : un bouton pour tout mettre en pause

**Preuve :** une mission se lance seule à l'heure prévue, sans clic, et le rapport arrive. La pause bloque bien tout.

## Étape 6 — Les douze, strate par strate

Chaque agent = un prompt + ses outils + sa place dans la chaîne. Ajoutés un par un, chacun avec un test et un essai réel.

- [ ] Strate I — Fondation : MINOS (structure) ✔ étape 1, CHRONOS (planification, historique) ✔ étape 5, DERA (sécurité, données sensibles, **et contrôle des actions des autres agents**)
- [ ] Strate II — Perception : DIAGNOS (défauts, incohérences), LUX (résumés lisibles, tableau de bord), NOESIS ✔ étape 4
- [ ] Strate III — Transmutation : LÉTHÉ (tri et nettoyage des mémoires), PSYCHE (textes vus par l'utilisateur, ton des rapports), MÉTIS (solutions de contournement, plans B)
- [ ] Strate IV — Émission : ANIMA (priorités, première action), EROS (répartit le travail entre agents, relie les ressources), CHLOROS (suivi dans le temps, leçons retenues)
- [ ] Les 6 axes fonctionnent comme la paire de l'étape 4
- [ ] Un agent en échec n'arrête pas les autres

**Preuve :** première mission complète du système — revue hebdomadaire de `dia-project` par les douze, lancée par CHRONOS, rapport final lisible.

## Étape 7 — Garde-fous et élargissement

- [ ] Budget : plafond par mission, par jour, par mois ; arrêt automatique au dépassement
- [ ] Journal complet et consultable de tout ce que chaque agent a fait
- [ ] Niveaux d'autonomie par agent : 1 observe, 2 propose (ticket GitHub), 3 agit après validation, 4 agit seul. Tous démarrent au niveau 1 ou 2
- [ ] Deuxième projet suivi : MyCareCoach (lecture seule, aucune donnée d'utilisateurs)

---

## Hors périmètre pour l'instant

Onboarding initiatique, gamification, sound design, SEO, offre commerciale. À reprendre une fois le système prouvé sur les projets de Guillaume. L'ancienne liste de tâches du site vitrine est archivée dans `docs/archive/todo-site-vitrine.md`.

## Suivi

| Étape               | Statut                                                  | Preuve                 |
| ------------------- | ------------------------------------------------------- | ---------------------- |
| Rangement du dépôt  | n° 11 fusionnée ; `chore/organisation-projet` à valider | CI verte le 2026-11-12 |
| 0 Base saine        | à faire                                                 |                        |
| 1 Cerveau           | à faire                                                 |                        |
| 2 Outils            | à faire                                                 |                        |
| 3 Boucle et mémoire | à faire                                                 |                        |
| 4 Dialogue          | à faire                                                 |                        |
| 5 Déclencheurs      | à faire                                                 |                        |
| 6 Les douze         | à faire                                                 |                        |
| 7 Garde-fous        | à faire                                                 |                        |
