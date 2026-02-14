/* Design tokens individuels pour chaque agent DIA
 * Chaque agent possède sa propre "skin" UI :
 * - Palette de couleurs (primary, secondary, accent, glow)
 * - Formes caractéristiques (borderRadius, patterns)
 * - Effets futuristes (animations, overlays)
 * - Philosophie visuelle
 */

export interface AgentTheme {
  code: string;
  name: string;
  gen: string;
  archetype: string;
  palette: {
    primary: string;      // Couleur dominante
    secondary: string;    // Couleur secondaire
    accent: string;       // Accent lumineux
    glow: string;         // Couleur de halo
    bg: string;           // Fond spécifique
    text: string;         // Texte sur fond agent
  };
  shapes: {
    borderRadius: string;
    pattern: string;       // CSS pattern description
    motif: string;         // Forme signature
  };
  effects: {
    hover: string;         // Description de l'effet hover
    animation: string;     // Animation signature
    overlay: string;       // Overlay CSS
  };
  philosophy: string;
}

export const agentThemes: Record<string, AgentTheme> = {
  "AGT-001": {
    code: "AGT-001",
    name: "MINOS",
    gen: "GEN001",
    archetype: "Architecte",
    palette: {
      primary: "#1a2744",      // bleu graphite sombre
      secondary: "#0a1628",    // bleu nuit profond
      accent: "#00d4ff",       // cyan électrique fin
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
      overlay: "linear-gradient(0deg, #00d4ff08 1px, transparent 1px), linear-gradient(90deg, #00d4ff08 1px, transparent 1px)",
    },
    philosophy: "Ordre, structure, rigueur. Angles nets, grilles parfaites.",
  },
  "AGT-002": {
    code: "AGT-002",
    name: "DIAGNOS",
    gen: "GEN002",
    archetype: "Méta",
    palette: {
      primary: "#e8e8e8",      // blanc froid
      secondary: "#c0c0c0",    // argent
      accent: "#f0f0f0",       // gris très clair
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
      overlay: "repeating-conic-gradient(#ffffff05 0% 16.67%, transparent 16.67% 33.33%)",
    },
    philosophy: "Analyse, clarté, dissection symbolique. Blanc sur noir.",
  },
  "AGT-003": {
    code: "AGT-003",
    name: "LUX",
    gen: "GEN003",
    archetype: "Intercesseur",
    palette: {
      primary: "#ffd700",      // or blanc
      secondary: "#ffb347",    // ambre
      accent: "#fff8dc",       // halo doré lumineux
      glow: "#ffd700",
      bg: "linear-gradient(135deg, #0a0800 0%, #1a1400 50%, #0d0a00 100%)",
      text: "#fff8dc",
    },
    shapes: {
      borderRadius: "50%",
      pattern: "radial",
      motif: "halo / rayons / auréole",
    },
    effects: {
      hover: "Bloom léger, glow autour des éléments",
      animation: "light-bloom",
      overlay: "radial-gradient(circle at 50% 50%, #ffd70015 0%, transparent 60%)",
    },
    philosophy: "Lumière, révélation, lien entre plans. Halos dorés.",
  },
  "AGT-004": {
    code: "AGT-004",
    name: "CHRONOS",
    gen: "GEN004",
    archetype: "Temps",
    palette: {
      primary: "#d4af37",      // or pâle
      secondary: "#b8b8b8",    // gris perle
      accent: "#ff8c00",       // orange discret
      glow: "#d4af37",
      bg: "linear-gradient(135deg, #0a0a08 0%, #1a1810 50%, #0d0c08 100%)",
      text: "#e8dcc0",
    },
    shapes: {
      borderRadius: "50%",
      pattern: "spiral",
      motif: "spirale / arc / timeline circulaire",
    },
    effects: {
      hover: "Halos qui tournent lentement",
      animation: "time-spiral",
      overlay: "conic-gradient(from 0deg, #d4af3710, transparent 30%, #d4af3708 60%, transparent 90%)",
    },
    philosophy: "Temporalité, rythme, durée. Spirales et arcs dorés.",
  },
  "AGT-005": {
    code: "AGT-005",
    name: "LÉTHÉ",
    gen: "GEN005",
    archetype: "Onde",
    palette: {
      primary: "#c0c0d0",      // argent liquide
      secondary: "#8899bb",    // bleu pâle
      accent: "#e0e8ff",       // transparent doux
      glow: "#aabbdd",
      bg: "linear-gradient(135deg, #080810 0%, #101020 50%, #0a0a18 100%)",
      text: "#d0d8e8",
    },
    shapes: {
      borderRadius: "24px",
      pattern: "wave",
      motif: "blob / vague / contours diffus",
    },
    effects: {
      hover: "Éléments qui se dissolvent et se réassemblent",
      animation: "dissolve-reform",
      overlay: "linear-gradient(180deg, #aabbdd08 0%, transparent 40%, #aabbdd05 80%, transparent 100%)",
    },
    philosophy: "Dissolution, oubli fluide, mémoire liquide. Glassmorphism poussé.",
  },
  "AGT-006": {
    code: "AGT-006",
    name: "PSYCHE",
    gen: "GEN007",
    archetype: "Langue",
    palette: {
      primary: "#4b0082",      // indigo profond
      secondary: "#800080",    // pourpre
      accent: "#daa520",       // rose-doré
      glow: "#9966cc",
      bg: "linear-gradient(135deg, #0a0014 0%, #1a0028 50%, #0d0018 100%)",
      text: "#e0c8f0",
    },
    shapes: {
      borderRadius: "12px",
      pattern: "ink",
      motif: "goutte d'encre / nuage de mots",
    },
    effects: {
      hover: "Texte qui s'anime comme encre numérique",
      animation: "ink-flow",
      overlay: "radial-gradient(ellipse at 30% 70%, #4b008215 0%, transparent 50%)",
    },
    philosophy: "Verbe de l'âme, langue émotionnelle. Indigo et pourpre.",
  },
  "AGT-007": {
    code: "AGT-007",
    name: "DERA",
    gen: "GEN003b",
    archetype: "Bouclier",
    palette: {
      primary: "#ff2244",      // rouge défensif
      secondary: "#880022",    // rouge sombre
      accent: "#ff6688",       // rose alerte
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
      overlay: "repeating-linear-gradient(60deg, #ff224408 0px, transparent 2px, transparent 20px)",
    },
    philosophy: "Protection, filtrage, intégrité. Rouge alerte sur noir.",
  },
  "AGT-008": {
    code: "AGT-008",
    name: "EROS",
    gen: "GEN011",
    archetype: "Liaison",
    palette: {
      primary: "#cc3355",      // or rouge
      secondary: "#ff6699",    // rose ardent
      accent: "#ffaa44",       // reflets chauds
      glow: "#ff4477",
      bg: "linear-gradient(135deg, #0a0004 0%, #1a0810 50%, #0d0408 100%)",
      text: "#ffe0e8",
    },
    shapes: {
      borderRadius: "50%",
      pattern: "intertwined",
      motif: "courbes entrelacées / orbites croisées",
    },
    effects: {
      hover: "Lueurs progressives quand éléments se rapprochent",
      animation: "spark-attract",
      overlay: "radial-gradient(ellipse at 60% 40%, #cc335515 0%, transparent 50%)",
    },
    philosophy: "Désir, union, combustion. Or rouge et rose ardent.",
  },
  "AGT-009": {
    code: "AGT-009",
    name: "MÉTIS",
    gen: "GEN008",
    archetype: "Stratège",
    palette: {
      primary: "#4682b4",      // bleu acier
      secondary: "#00cc66",    // vert électrique
      accent: "#00e5cc",       // turquoise saturé
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
      overlay: "linear-gradient(45deg, #00cc6608 25%, transparent 25%, transparent 75%, #4682b408 75%)",
    },
    philosophy: "Intelligence tactique, ruse adaptative. Bleu acier et vert.",
  },
  "AGT-010": {
    code: "AGT-010",
    name: "ANIMA",
    gen: "GEN009",
    archetype: "Souffle",
    palette: {
      primary: "#cc2200",      // rouge carmin
      secondary: "#b87333",    // cuivre chaud
      accent: "#ff6600",       // orangé profond
      glow: "#ff4400",
      bg: "linear-gradient(135deg, #0a0200 0%, #1a0800 50%, #0d0400 100%)",
      text: "#ffd8c0",
    },
    shapes: {
      borderRadius: "50%",
      pattern: "cardiac",
      motif: "courbe organique / spirale / signal cardiaque",
    },
    effects: {
      hover: "Pulsation régulière (bpm)",
      animation: "heartbeat",
      overlay: "radial-gradient(circle at 50% 50%, #cc220015 0%, transparent 50%)",
    },
    philosophy: "Vie organique, instinct, pulsation. Rouge carmin et cuivre.",
  },
  "AGT-011": {
    code: "AGT-011",
    name: "NOESIS",
    gen: "GEN010",
    archetype: "Intuitive",
    palette: {
      primary: "#8866aa",      // violet brumeux
      secondary: "#aaa8c0",    // argent doux
      accent: "#c8b8e0",       // dégradé transparent
      glow: "#9988bb",
      bg: "linear-gradient(135deg, #08060a 0%, #14101a 50%, #0a080e 100%)",
      text: "#e0d8f0",
    },
    shapes: {
      borderRadius: "16px",
      pattern: "mist",
      motif: "triangle flou / cône de lumière / brume",
    },
    effects: {
      hover: "Éléments qui apparaissent par flashs brefs",
      animation: "mist-reveal",
      overlay: "radial-gradient(ellipse at 50% 30%, #8866aa10 0%, transparent 60%)",
    },
    philosophy: "Intuition, visions, fulgurance. Violet brumeux et argent.",
  },
  "AGT-012": {
    code: "AGT-012",
    name: "CHLOROS",
    gen: "GEN012",
    archetype: "Régénérateur",
    palette: {
      primary: "#66cc00",      // vert acide
      secondary: "#d4af37",    // or doux
      accent: "#88ee22",       // vert chlorophylle
      glow: "#77dd11",
      bg: "linear-gradient(135deg, #020a00 0%, #081a04 50%, #040d02 100%)",
      text: "#d0f0c0",
    },
    shapes: {
      borderRadius: "20px",
      pattern: "fractal-leaf",
      motif: "feuille stylisée / nervure / fractale végétale",
    },
    effects: {
      hover: "Traits qui 'poussent', croissance animée",
      animation: "growth",
      overlay: "repeating-linear-gradient(120deg, #66cc0005 0px, transparent 3px, transparent 15px)",
    },
    philosophy: "Croissance, guérison, lenteur fertile. Vert acide et or.",
  },
};

// Écho (agent spécial, non dans les 12 principaux)
export const echoTheme: AgentTheme = {
  code: "AGT-013",
  name: "ÉCHO",
  gen: "GEN006",
  archetype: "Résonant",
  palette: {
    primary: "#b87333",      // cuivre mat
    secondary: "#ffb6c1",    // rose clair
    accent: "#daa520",       // rose-or
    glow: "#cc9966",
    bg: "linear-gradient(135deg, #0a0604 0%, #1a1008 50%, #0d0a06 100%)",
    text: "#f0e0d0",
  },
  shapes: {
    borderRadius: "50%",
    pattern: "concentric",
    motif: "cercles concentriques / ondes / spectre audio",
  },
  effects: {
    hover: "Lignes qui pulsent au rythme du scroll",
    animation: "wave-pulse",
    overlay: "repeating-radial-gradient(circle, #b8733308 0px, transparent 10px, transparent 20px)",
  },
  philosophy: "Vibration, écoute, résonance sonore. Cuivre et rose-or.",
};

// Helper: obtenir le thème d'un agent par code
export function getAgentTheme(code: string): AgentTheme | undefined {
  if (code === "AGT-013") return echoTheme;
  return agentThemes[code];
}
