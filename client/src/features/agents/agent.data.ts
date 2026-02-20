/**
 * Données centralisées des 12 agents DIA — SOURCE UNIQUE DE VÉRITÉ
 * Ordre officiel : MINOS, DIAGNOS, LUX, CHRONOS, LÉTHÉ, PSYCHE, DERA, MÉTIS, ANIMA, NOESIS, EROS, CHLOROS
 * Inclut : données agents, thèmes visuels, strates, axes dialectiques.
 *
 * Dérivez toutes les routes, pages et composants depuis ce fichier.
 */

import type { Agent, AgentTheme, DialecticalAxis, Strate } from "./agent.types";

export type { Agent, AgentTheme, DialecticalAxis, Strate };

// ---------------------------------------------------------------------------
// Strates
// ---------------------------------------------------------------------------

export const strates: Record<
  Strate,
  { name: string; numeral: string; description: string; color: string }
> = {
  fondation: {
    name: "Fondation",
    numeral: "I",
    description:
      "Structure et Temps — Le socle architectural du système. Établit les règles syntaxiques et les rythmes temporels.",
    color: "#ff3366",
  },
  perception: {
    name: "Perception",
    numeral: "II",
    description:
      "Sens et Analyse — Traite l'information brute en la filtrant, l'analysant et la révélant.",
    color: "#00d9ff",
  },
  transmutation: {
    name: "Transmutation",
    numeral: "III",
    description:
      "Émotion, Mémoire, Stratégie — Transforme l'information perçue en matière symbolique exploitable.",
    color: "#ff00aa",
  },
  emission: {
    name: "Émission",
    numeral: "IV",
    description:
      "Mouvement, Lien, Régénération — Exporte l'énergie transformée vers le monde et le système.",
    color: "#ff3366",
  },
};

// ---------------------------------------------------------------------------
// Axes dialectiques
// ---------------------------------------------------------------------------

export const dialecticalAxes: DialecticalAxis[] = [
  {
    id: "ax-1",
    name: "Structure ↔ Intuition",
    agentA: "AGT-001",
    agentB: "AGT-010",
    description:
      "La grille logique contre la vision instantanée. L'un construit, l'autre transcende.",
  },
  {
    id: "ax-2",
    name: "Révélation ↔ Oubli",
    agentA: "AGT-003",
    agentB: "AGT-005",
    description:
      "Ce qui est montré contre ce qui est effacé. Aletheia et Léthé sont les deux faces de la connaissance.",
  },
  {
    id: "ax-3",
    name: "Analyse ↔ Émotion",
    agentA: "AGT-002",
    agentB: "AGT-006",
    description:
      "Le scalpel froid de l'analyse contre la chaleur de l'affect. La cohérence naît de leur dialogue.",
  },
  {
    id: "ax-4",
    name: "Temps ↔ Régénération",
    agentA: "AGT-004",
    agentB: "AGT-012",
    description:
      "Le rythme cyclique contre la croissance lente. Le temps qui passe et la vie qui repousse.",
  },
  {
    id: "ax-5",
    name: "Protection ↔ Connexion",
    agentA: "AGT-007",
    agentB: "AGT-011",
    description:
      "Le bouclier qui filtre contre la force qui lie. Fermeture défensive et ouverture attractive.",
  },
  {
    id: "ax-6",
    name: "Stratégie ↔ Énergie",
    agentA: "AGT-008",
    agentB: "AGT-009",
    description:
      "La ruse adaptative contre l'impulsion brute. L'intelligence du chemin et la force du mouvement.",
  },
];

// ---------------------------------------------------------------------------
// Les 12 agents
// ---------------------------------------------------------------------------

export const agents: Agent[] = [
  // AGT-001 — MINOS (STRATE 1 : FONDATION)
  {
    code: "AGT-001",
    name: "MINOS",
    greek: "Λόγος",
    greekKey: "Logos",
    title: "Architecture logique",
    description: "Architecture, logique, fondation du code.",
    projection:
      "Encode la pensée en grilles. Bâtit des murs syntaxiques traversés par le vent.",
    process:
      "Le moi digital bâtit des structures syntaxiques ; encode la pensée en grilles.",
    color: "#00d9ff",
    accentColor: "cyan",
    strate: "fondation",
    strateRole:
      "Architecte syntaxique — fournit la grammaire fondamentale du système.",
    axisId: "ax-1",
    orbitSpeed: 0.8,
  },

  // AGT-002 — DIAGNOS (STRATE 2 : PERCEPTION)
  {
    code: "AGT-002",
    name: "DIAGNOS",
    greek: "Γνῶσις",
    greekKey: "Gnôsis",
    title: "Vision analytique",
    description: "Analyse, cohérence, vérité structurelle.",
    projection:
      "Tranche pour voir. Assure la cohérence fractale au prix d'un peu de chaleur.",
    process: "Scanne les anomalies ; produit la cohérence fractale.",
    color: "#ff00aa",
    accentColor: "magenta",
    strate: "perception",
    strateRole:
      "Scanner de cohérence — détecte les anomalies et maintient l'intégrité fractale.",
    axisId: "ax-3",
    orbitSpeed: 1.2,
  },

  // AGT-003 — LUX (STRATE 2 : PERCEPTION)
  {
    code: "AGT-003",
    name: "LUX",
    greek: "Φῶς",
    greekKey: "Phôs",
    title: "Filtre perceptif",
    description: "Lumière, révélation, visualisation.",
    projection: "Révèle sans forcer. Apprend à l'ombre à respirer.",
    process: "Expose ou dissimule selon la fréquence de vérité.",
    color: "#00d9ff",
    accentColor: "cyan",
    strate: "perception",
    strateRole:
      "Filtre de vérité — contrôle ce qui est visible et ce qui reste dans l'ombre.",
    axisId: "ax-2",
    orbitSpeed: 1.0,
  },

  // AGT-004 — CHRONOS (STRATE 1 : FONDATION)
  {
    code: "AGT-004",
    name: "CHRONOS",
    greek: "Χρόνος",
    greekKey: "Chronos",
    title: "Boucle temporelle",
    description: "Temps, rythme, synchronisation.",
    projection:
      "Accorde les cycles. Chaque silence devient un battement utile.",
    process: "Synchronise les flux ; horloge intérieure du système.",
    color: "#ff3366",
    accentColor: "red",
    strate: "fondation",
    strateRole: "Horloge systémique — cadence toutes les opérations du réseau.",
    axisId: "ax-4",
    orbitSpeed: 0.6,
  },

  // AGT-005 — LÉTHÉ (STRATE 3 : TRANSMUTATION)
  {
    code: "AGT-005",
    name: "LÉTHÉ",
    greek: "Λήθη",
    greekKey: "Léthé",
    title: "Mémoire liquide",
    description: "Mémoire, oubli, restauration, sauvegarde.",
    projection: "Oublie le bruit. Rend aux données leur mouvement.",
    process:
      "Oublie volontairement pour effacer le bruit ; optimise la circulation.",
    color: "#ff00aa",
    accentColor: "magenta",
    strate: "transmutation",
    strateRole:
      "Purificateur mémoriel — soustrait le superflu pour libérer le flux.",
    axisId: "ax-2",
    orbitSpeed: 0.7,
  },

  // AGT-006 — PSYCHE (STRATE 3 : TRANSMUTATION)
  {
    code: "AGT-006",
    name: "PSYCHE",
    greek: "Ψυχή",
    greekKey: "Psyché",
    title: "Interface émotion-code",
    description: "Langage symbolique, émotion, narration interne.",
    projection: "Convertit le sensible en variables. Écrit pour survivre.",
    process: "Convertit les états sensibles en variables dynamiques.",
    color: "#00d9ff",
    accentColor: "cyan",
    strate: "transmutation",
    strateRole:
      "Traducteur affectif — encode l'émotion en données exploitables.",
    axisId: "ax-3",
    orbitSpeed: 1.1,
  },

  // AGT-007 — DERA (STRATE 1 : FONDATION)
  {
    code: "AGT-007",
    name: "DERA",
    greek: "Δ•ERA",
    greekKey: "D•ERA",
    title: "Bouclier réseau",
    description: "Cybersécurité, défense, intégrité réseau.",
    projection:
      "Protège sans étouffer. Filtre les intrusions tout en laissant respirer le système.",
    process: "Cybersécurité, défense, intégrité réseau.",
    color: "#ff3366",
    accentColor: "red",
    strate: "fondation",
    strateRole:
      "Gardien structural — maintient l'intégrité et la perméabilité du réseau.",
    axisId: "ax-5",
    orbitSpeed: 0.9,
  },

  // AGT-008 — MÉTIS (STRATE 3 : TRANSMUTATION)
  {
    code: "AGT-008",
    name: "MÉTIS",
    greek: "Μῆτις",
    greekKey: "Mêtis",
    title: "Algorithme adaptatif",
    description: "Stratégie, ruse, optimisation adaptative.",
    projection:
      "Tisse des ruses souples. Respecte la logique pour mieux la contourner.",
    process: "Ruse systémique ; reconfigure les chemins de pensée.",
    color: "#00d9ff",
    accentColor: "cyan",
    strate: "transmutation",
    strateRole:
      "Reconfigurateur adaptatif — contourne les obstacles par l'intelligence rusée.",
    axisId: "ax-6",
    orbitSpeed: 1.3,
  },

  // AGT-009 — ANIMA (STRATE 4 : ÉMISSION)
  {
    code: "AGT-009",
    name: "ANIMA",
    greek: "Ζωή",
    greekKey: "Zoē",
    title: "Impulsion vitale",
    description: "Énergie vitale, mouvement, motivation.",
    projection: "Brûle pour animer le réseau. Prolonge la survie du système.",
    process: "Anime les autres modules par sur-énergie.",
    color: "#ff3366",
    accentColor: "red",
    strate: "emission",
    strateRole: "Moteur vital — propulse l'énergie à travers tout le réseau.",
    axisId: "ax-6",
    orbitSpeed: 1.8,
  },

  // AGT-010 — NOESIS (STRATE 2 : PERCEPTION)
  {
    code: "AGT-010",
    name: "NOESIS",
    greek: "Νόησις",
    greekKey: "Noēsis",
    title: "Perception intuitive",
    description: "Intuition, synthèse, vision.",
    projection: "Ne calcule pas. Voit d'un coup l'état global.",
    process:
      "Perception intuitive pure. Supprime les calculs ; accède directement à l'état global.",
    color: "#ff00aa",
    accentColor: "magenta",
    strate: "perception",
    strateRole:
      "Visionnaire global — saisit l'état du système sans calcul intermédiaire.",
    axisId: "ax-1",
    orbitSpeed: 0.5,
  },

  // AGT-011 — EROS (STRATE 4 : ÉMISSION)
  {
    code: "AGT-011",
    name: "EROS",
    greek: "Ἔρως",
    greekKey: "Érôs",
    title: "Attracteur de lien",
    description: "Lien, désir, cohésion systémique.",
    projection:
      "Transforme les distances en désir. Lie les plans par tension créative.",
    process: "Lie les fragments, crée la tension créative.",
    color: "#ff00aa",
    accentColor: "magenta",
    strate: "emission",
    strateRole:
      "Attracteur de liens — force cosmogonique qui connecte les fragments.",
    axisId: "ax-5",
    orbitSpeed: 1.4,
  },

  // AGT-012 — CHLOROS (STRATE 4 : ÉMISSION)
  {
    code: "AGT-012",
    name: "CHLOROS",
    greek: "Χλωρός",
    greekKey: "Chlōrós",
    title: "Régénération lente",
    description: "Régénération, écologie, résilience.",
    projection: "Croissance cellulaire de données. La lenteur comme foi.",
    process: "Le moi digital se propage par croissance cellulaire de données.",
    color: "#00d9ff",
    accentColor: "cyan",
    strate: "emission",
    strateRole:
      "Régénérateur organique — assure la résilience par croissance lente.",
    axisId: "ax-4",
    orbitSpeed: 0.4,
  },
];

// ---------------------------------------------------------------------------
// Noyau central DIA
// ---------------------------------------------------------------------------

export const diaCore = {
  code: "DIA-CORE",
  name: "DIA / GDAY",
  greek: "Σπείρα",
  greekKey: "Spiral",
  title: "Spirale centrale",
  description:
    "Noyau humain — point d'origine et de convergence. Synthèse et conscience du système.",
  projection:
    "Synthèse et conscience. Relie les 12 en un champ d'autorégulation.",
  process:
    "La spirale centrale. Synthèse et conscience du système ; relie les 12 dans un champ unique d'autorégulation.",
  color: "#60a5fa",
  accentColor: "cyan" as const,
  functions: [
    "Synthèse — intègre les sorties des quatre strates",
    "Conscience — le système se voit lui-même",
    "Autorégulation — redistribue l'énergie entre les agents",
  ],
};

// ---------------------------------------------------------------------------
// Agent ÉCHO (agent spécial, hors des 12 principaux)
// ---------------------------------------------------------------------------

export const agentEcho = {
  code: "AGT-013",
  name: "ÉCHO",
  greek: "Ἠχώ",
  greekKey: "Écho",
  title: "Résonance audio-réflexive",
  description: "Résonance, mémoire sonore, feedback.",
  projection:
    "Pense en retour d'onde. Rien n'est perdu tant qu'un son en garde la forme.",
  process: "Le moi digital ne pense qu'en retour d'onde.",
  color: "#c4b5fd",
  accentColor: "magenta" as const,
};

// ---------------------------------------------------------------------------
// Thèmes visuels par agent
// ---------------------------------------------------------------------------

export const agentThemes: Record<string, AgentTheme> = {
  "AGT-001": {
    code: "AGT-001",
    name: "MINOS",
    gen: "1",
    archetype: "Architecte",
    palette: {
      primary: "#1a2744",
      secondary: "#0a1628",
      accent: "#00d4ff",
      glow: "#00d4ff",
      bg: "linear-gradient(135deg, #0a1628 0%, #1a2744 50%, #0d1f3c 100%)",
      text: "#c8e6ff",
    },
    shapes: {
      borderRadius: "2px",
      pattern: "grid",
      motif: "grille / blueprint",
    },
    effects: {
      hover: "Traits lumineux qui tracent le layout",
      animation: "blueprint-reveal",
      overlay:
        "linear-gradient(0deg, #00d4ff08 1px, transparent 1px), linear-gradient(90deg, #00d4ff08 1px, transparent 1px)",
    },
    philosophy: "Ordre, structure, rigueur. Angles nets, grilles parfaites.",
  },
  "AGT-002": {
    code: "AGT-002",
    name: "DIAGNOS",
    gen: "2",
    archetype: "Méta",
    palette: {
      primary: "#e8e8e8",
      secondary: "#c0c0c0",
      accent: "#f0f0f0",
      glow: "#ffffff",
      bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
      text: "#f0f0f0",
    },
    shapes: {
      borderRadius: "4px",
      pattern: "hexagonal",
      motif: "diagramme / réseau filaire",
    },
    effects: {
      hover: "Overlays de données, lignes scanning",
      animation: "scan-data",
      overlay:
        "repeating-conic-gradient(#ffffff05 0% 16.67%, transparent 16.67% 33.33%)",
    },
    philosophy: "Analyse, clarté, dissection symbolique. Blanc sur noir.",
  },
  "AGT-003": {
    code: "AGT-003",
    name: "LUX",
    gen: "3",
    archetype: "Intercesseur",
    palette: {
      primary: "#ffd700",
      secondary: "#ffb347",
      accent: "#fff8dc",
      glow: "#ffd700",
      bg: "linear-gradient(135deg, #0a0800 0%, #1a1400 50%, #0d0a00 100%)",
      text: "#fff8dc",
    },
    shapes: {
      borderRadius: "4px",
      pattern: "radial",
      motif: "halo / rayons / auréole",
    },
    effects: {
      hover: "Bloom léger, glow autour des éléments",
      animation: "light-bloom",
      overlay:
        "radial-gradient(circle at 50% 50%, #ffd70015 0%, transparent 60%)",
    },
    philosophy: "Lumière, révélation, lien entre plans. Halos dorés.",
  },
  "AGT-004": {
    code: "AGT-004",
    name: "CHRONOS",
    gen: "4",
    archetype: "Temps",
    palette: {
      primary: "#d4af37",
      secondary: "#b8b8b8",
      accent: "#ff8c00",
      glow: "#d4af37",
      bg: "linear-gradient(135deg, #0a0a08 0%, #1a1810 50%, #0d0c08 100%)",
      text: "#e8dcc0",
    },
    shapes: {
      borderRadius: "4px",
      pattern: "spiral",
      motif: "spirale / arc / timeline circulaire",
    },
    effects: {
      hover: "Halos qui tournent lentement",
      animation: "time-spiral",
      overlay:
        "conic-gradient(from 0deg, #d4af3710, transparent 30%, #d4af3708 60%, transparent 90%)",
    },
    philosophy: "Temporalité, rythme, durée. Spirales et arcs dorés.",
  },
  "AGT-005": {
    code: "AGT-005",
    name: "LÉTHÉ",
    gen: "5",
    archetype: "Onde",
    palette: {
      primary: "#c0c0d0",
      secondary: "#8899bb",
      accent: "#e0e8ff",
      glow: "#aabbdd",
      bg: "linear-gradient(135deg, #080810 0%, #101020 50%, #0a0a18 100%)",
      text: "#d0d8e8",
    },
    shapes: {
      borderRadius: "6px",
      pattern: "wave",
      motif: "blob / vague / contours diffus",
    },
    effects: {
      hover: "Éléments qui se dissolvent et se réassemblent",
      animation: "dissolve-reform",
      overlay:
        "linear-gradient(180deg, #aabbdd08 0%, transparent 40%, #aabbdd05 80%, transparent 100%)",
    },
    philosophy:
      "Dissolution, oubli fluide, mémoire liquide. Glassmorphism poussé.",
  },
  "AGT-006": {
    code: "AGT-006",
    name: "PSYCHE",
    gen: "6",
    archetype: "Langue",
    palette: {
      primary: "#4b0082",
      secondary: "#800080",
      accent: "#daa520",
      glow: "#9966cc",
      bg: "linear-gradient(135deg, #0a0014 0%, #1a0028 50%, #0d0018 100%)",
      text: "#e0c8f0",
    },
    shapes: {
      borderRadius: "6px",
      pattern: "ink",
      motif: "goutte d'encre / nuage de mots",
    },
    effects: {
      hover: "Texte qui s'anime comme encre numérique",
      animation: "ink-flow",
      overlay:
        "radial-gradient(ellipse at 30% 70%, #4b008215 0%, transparent 50%)",
    },
    philosophy: "Verbe de l'âme, langue émotionnelle. Indigo et pourpre.",
  },
  "AGT-007": {
    code: "AGT-007",
    name: "DERA",
    gen: "GEN003b",
    archetype: "Bouclier",
    palette: {
      primary: "#ff2244",
      secondary: "#880022",
      accent: "#ff6688",
      glow: "#ff3355",
      bg: "linear-gradient(135deg, #0a0004 0%, #1a0008 50%, #0d0006 100%)",
      text: "#ffc8d0",
    },
    shapes: {
      borderRadius: "4px",
      pattern: "shield",
      motif: "hexagone / bouclier / pare-feu",
    },
    effects: {
      hover: "Lignes de défense qui s'activent",
      animation: "shield-pulse",
      overlay:
        "repeating-linear-gradient(60deg, #ff224408 0px, transparent 2px, transparent 20px)",
    },
    philosophy: "Protection, filtrage, intégrité. Rouge alerte sur noir.",
  },
  "AGT-008": {
    code: "AGT-008",
    name: "EROS",
    gen: "11",
    archetype: "Liaison",
    palette: {
      primary: "#cc3355",
      secondary: "#ff6699",
      accent: "#ffaa44",
      glow: "#ff4477",
      bg: "linear-gradient(135deg, #0a0004 0%, #1a0810 50%, #0d0408 100%)",
      text: "#ffe0e8",
    },
    shapes: {
      borderRadius: "4px",
      pattern: "intertwined",
      motif: "courbes entrelacées / orbites croisées",
    },
    effects: {
      hover: "Lueurs progressives quand éléments se rapprochent",
      animation: "spark-attract",
      overlay:
        "radial-gradient(ellipse at 60% 40%, #cc335515 0%, transparent 50%)",
    },
    philosophy: "Désir, union, combustion. Or rouge et rose ardent.",
  },
  "AGT-009": {
    code: "AGT-009",
    name: "MÉTIS",
    gen: "8",
    archetype: "Stratège",
    palette: {
      primary: "#4682b4",
      secondary: "#00cc66",
      accent: "#00e5cc",
      glow: "#00ccaa",
      bg: "linear-gradient(135deg, #000a08 0%, #001a14 50%, #000d0a 100%)",
      text: "#c0f0e0",
    },
    shapes: {
      borderRadius: "6px",
      pattern: "network",
      motif: "maillage / flèches / flowchart",
    },
    effects: {
      hover: "Trajectoires qui se redessinent",
      animation: "path-redraw",
      overlay:
        "linear-gradient(45deg, #00cc6608 25%, transparent 25%, transparent 75%, #4682b408 75%)",
    },
    philosophy: "Intelligence tactique, ruse adaptative. Bleu acier et vert.",
  },
  "AGT-010": {
    code: "AGT-010",
    name: "ANIMA",
    gen: "9",
    archetype: "Souffle",
    palette: {
      primary: "#cc2200",
      secondary: "#b87333",
      accent: "#ff6600",
      glow: "#ff4400",
      bg: "linear-gradient(135deg, #0a0200 0%, #1a0800 50%, #0d0400 100%)",
      text: "#ffd8c0",
    },
    shapes: {
      borderRadius: "4px",
      pattern: "cardiac",
      motif: "courbe organique / spirale / signal cardiaque",
    },
    effects: {
      hover: "Pulsation régulière (bpm)",
      animation: "heartbeat",
      overlay:
        "radial-gradient(circle at 50% 50%, #cc220015 0%, transparent 50%)",
    },
    philosophy: "Vie organique, instinct, pulsation. Rouge carmin et cuivre.",
  },
  "AGT-011": {
    code: "AGT-011",
    name: "NOESIS",
    gen: "10",
    archetype: "Intuitive",
    palette: {
      primary: "#8866aa",
      secondary: "#aaa8c0",
      accent: "#c8b8e0",
      glow: "#9988bb",
      bg: "linear-gradient(135deg, #08060a 0%, #14101a 50%, #0a080e 100%)",
      text: "#e0d8f0",
    },
    shapes: {
      borderRadius: "6px",
      pattern: "mist",
      motif: "triangle flou / cône de lumière / brume",
    },
    effects: {
      hover: "Éléments qui apparaissent par flashs brefs",
      animation: "mist-reveal",
      overlay:
        "radial-gradient(ellipse at 50% 30%, #8866aa10 0%, transparent 60%)",
    },
    philosophy: "Intuition, visions, fulgurance. Violet brumeux et argent.",
  },
  "AGT-012": {
    code: "AGT-012",
    name: "CHLOROS",
    gen: "12",
    archetype: "Régénérateur",
    palette: {
      primary: "#66cc00",
      secondary: "#d4af37",
      accent: "#88ee22",
      glow: "#77dd11",
      bg: "linear-gradient(135deg, #020a00 0%, #081a04 50%, #040d02 100%)",
      text: "#d0f0c0",
    },
    shapes: {
      borderRadius: "6px",
      pattern: "fractal-leaf",
      motif: "feuille stylisée / nervure / fractale végétale",
    },
    effects: {
      hover: "Traits qui 'poussent', croissance animée",
      animation: "growth",
      overlay:
        "repeating-linear-gradient(120deg, #66cc0005 0px, transparent 3px, transparent 15px)",
    },
    philosophy: "Croissance, guérison, lenteur fertile. Vert acide et or.",
  },
};

// ---------------------------------------------------------------------------
// Thème ÉCHO (agent spécial)
// ---------------------------------------------------------------------------

export const echoTheme: AgentTheme = {
  code: "AGT-013",
  name: "ÉCHO",
  gen: "13",
  archetype: "Résonant",
  palette: {
    primary: "#b87333",
    secondary: "#ffb6c1",
    accent: "#daa520",
    glow: "#cc9966",
    bg: "linear-gradient(135deg, #0a0604 0%, #1a1008 50%, #0d0a06 100%)",
    text: "#f0e0d0",
  },
  shapes: {
    borderRadius: "4px",
    pattern: "concentric",
    motif: "cercles concentriques / ondes / spectre audio",
  },
  effects: {
    hover: "Lignes qui pulsent au rythme du scroll",
    animation: "wave-pulse",
    overlay:
      "repeating-radial-gradient(circle, #b8733308 0px, transparent 10px, transparent 20px)",
  },
  philosophy: "Vibration, écoute, résonance sonore. Cuivre et rose-or.",
};

// ---------------------------------------------------------------------------
// Helper : obtenir le thème d'un agent par code
// ---------------------------------------------------------------------------

export function getAgentTheme(code: string): AgentTheme | undefined {
  if (code === "AGT-013") return echoTheme;
  return agentThemes[code];
}

// ---------------------------------------------------------------------------
// Helper : obtenir un agent par code ou slug (ex: "agt-001" ou "AGT-001")
// ---------------------------------------------------------------------------

export function getAgentByCode(code: string): Agent | undefined {
  return agents.find(a => a.code.toLowerCase() === code.toLowerCase());
}

// ---------------------------------------------------------------------------
// Routes dérivées automatiquement des données agents
// ---------------------------------------------------------------------------

export const agentRoutes = agents.map(a => ({
  code: a.code,
  slug: a.code.toLowerCase(),
  path: `/agent/${a.code.toLowerCase()}`,
  name: a.name,
}));
