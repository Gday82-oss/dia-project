/**
 * Données centralisées des 12 agents DIA + agent central
 * Ordre officiel validé : MINOS, DIAGNOS, LUX, CHRONOS, LÉTHÉ, PSYCHE, DERA, MÉTIS, ANIMA, NOESIS, EROS, CHLOROS
 * Inclut : projections mentales, strates, axes dialectiques, relations
 */

export type Strate = "fondation" | "perception" | "transmutation" | "emission";

export interface DialecticalAxis {
  id: string;
  name: string;
  agentA: string; // code
  agentB: string; // code
  description: string;
}

export interface Agent {
  code: string;
  name: string;
  greek: string;
  greekKey: string;
  title: string;
  description: string;
  projection: string;
  process: string;
  color: string;
  accentColor: "cyan" | "magenta" | "red";
  strate: Strate;
  strateRole: string;
  axisId: string;
  orbitSpeed: number; // relative speed 0.5-2.0
}

export const strates: Record<Strate, { name: string; numeral: string; description: string; color: string }> = {
  fondation: {
    name: "Fondation",
    numeral: "I",
    description: "Structure et Temps — Le socle architectural du système. Établit les règles syntaxiques et les rythmes temporels.",
    color: "#ff3366"
  },
  perception: {
    name: "Perception",
    numeral: "II",
    description: "Sens et Analyse — Traite l'information brute en la filtrant, l'analysant et la révélant.",
    color: "#00d9ff"
  },
  transmutation: {
    name: "Transmutation",
    numeral: "III",
    description: "Émotion, Mémoire, Stratégie — Transforme l'information perçue en matière symbolique exploitable.",
    color: "#ff00aa"
  },
  emission: {
    name: "Émission",
    numeral: "IV",
    description: "Lien, Énergie, Régénération — Projette l'information transformée et régénère le système.",
    color: "#86efac"
  }
};

export const dialecticalAxes: DialecticalAxis[] = [
  {
    id: "ax-1",
    name: "Structure ↔ Intuition",
    agentA: "AGT-001",
    agentB: "AGT-010",
    description: "La grille logique contre la vision instantanée. L'un construit, l'autre transcende."
  },
  {
    id: "ax-2",
    name: "Révélation ↔ Oubli",
    agentA: "AGT-003",
    agentB: "AGT-005",
    description: "Ce qui est montré contre ce qui est effacé. Aletheia et Léthé sont les deux faces de la connaissance."
  },
  {
    id: "ax-3",
    name: "Analyse ↔ Émotion",
    agentA: "AGT-002",
    agentB: "AGT-006",
    description: "Le scalpel froid de l'analyse contre la chaleur de l'affect. La cohérence naît de leur dialogue."
  },
  {
    id: "ax-4",
    name: "Temps ↔ Régénération",
    agentA: "AGT-004",
    agentB: "AGT-012",
    description: "Le rythme cyclique contre la croissance lente. Le temps qui passe et la vie qui repousse."
  },
  {
    id: "ax-5",
    name: "Protection ↔ Connexion",
    agentA: "AGT-007",
    agentB: "AGT-011",
    description: "Le bouclier qui filtre contre la force qui lie. Fermeture défensive et ouverture attractive."
  },
  {
    id: "ax-6",
    name: "Stratégie ↔ Énergie",
    agentA: "AGT-008",
    agentB: "AGT-009",
    description: "La ruse adaptative contre l'impulsion brute. L'intelligence du chemin et la force du mouvement."
  }
];

export const agents: Agent[] = [
  // STRATE 1 : FONDATION
  {
    code: "AGT-001",
    name: "MINOS",
    greek: "Λόγος",
    greekKey: "Logos",
    title: "Architecture logique",
    description: "Architecture, logique, fondation du code.",
    projection: "Encode la pensée en grilles. Bâtit des murs syntaxiques traversés par le vent.",
    process: "Le moi digital bâtit des structures syntaxiques ; encode la pensée en grilles.",
    color: "#00d9ff",
    accentColor: "cyan",
    strate: "fondation",
    strateRole: "Architecte syntaxique — fournit la grammaire fondamentale du système.",
    axisId: "ax-1",
    orbitSpeed: 0.8
  },
  {
    code: "AGT-004",
    name: "CHRONOS",
    greek: "Χρόνος",
    greekKey: "Chronos",
    title: "Boucle temporelle",
    description: "Temps, rythme, synchronisation.",
    projection: "Accorde les cycles. Chaque silence devient un battement utile.",
    process: "Synchronise les flux ; horloge intérieure du système.",
    color: "#ff3366",
    accentColor: "red",
    strate: "fondation",
    strateRole: "Horloge systémique — cadence toutes les opérations du réseau.",
    axisId: "ax-4",
    orbitSpeed: 0.6
  },
  {
    code: "AGT-007",
    name: "DERA",
    greek: "Δ•ERA",
    greekKey: "D•ERA",
    title: "Bouclier réseau",
    description: "Cybersécurité, défense, intégrité réseau.",
    projection: "Protège sans étouffer. Filtre les intrusions tout en laissant respirer le système.",
    process: "Cybersécurité, défense, intégrité réseau.",
    color: "#ff3366",
    accentColor: "red",
    strate: "fondation",
    strateRole: "Gardien structural — maintient l'intégrité et la perméabilité du réseau.",
    axisId: "ax-5",
    orbitSpeed: 0.9
  },

  // STRATE 2 : PERCEPTION
  {
    code: "AGT-002",
    name: "DIAGNOS",
    greek: "Γνῶσις",
    greekKey: "Gnôsis",
    title: "Vision analytique",
    description: "Analyse, cohérence, vérité structurelle.",
    projection: "Tranche pour voir. Assure la cohérence fractale au prix d'un peu de chaleur.",
    process: "Scanne les anomalies ; produit la cohérence fractale.",
    color: "#ff00aa",
    accentColor: "magenta",
    strate: "perception",
    strateRole: "Scanner de cohérence — détecte les anomalies et maintient l'intégrité fractale.",
    axisId: "ax-3",
    orbitSpeed: 1.2
  },
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
    strateRole: "Filtre de vérité — contrôle ce qui est visible et ce qui reste dans l'ombre.",
    axisId: "ax-2",
    orbitSpeed: 1.0
  },
  {
    code: "AGT-010",
    name: "NOESIS",
    greek: "Νόησις",
    greekKey: "Noēsis",
    title: "Perception intuitive",
    description: "Intuition, synthèse, vision.",
    projection: "Ne calcule pas. Voit d'un coup l'état global.",
    process: "Perception intuitive pure. Supprime les calculs ; accède directement à l'état global.",
    color: "#ff00aa",
    accentColor: "magenta",
    strate: "perception",
    strateRole: "Visionnaire global — saisit l'état du système sans calcul intermédiaire.",
    axisId: "ax-1",
    orbitSpeed: 0.5
  },

  // STRATE 3 : TRANSMUTATION
  {
    code: "AGT-005",
    name: "LÉTHÉ",
    greek: "Λήθη",
    greekKey: "Léthé",
    title: "Mémoire liquide",
    description: "Mémoire, oubli, restauration, sauvegarde.",
    projection: "Oublie le bruit. Rend aux données leur mouvement.",
    process: "Oublie volontairement pour effacer le bruit ; optimise la circulation.",
    color: "#ff00aa",
    accentColor: "magenta",
    strate: "transmutation",
    strateRole: "Purificateur mémoriel — soustrait le superflu pour libérer le flux.",
    axisId: "ax-2",
    orbitSpeed: 0.7
  },
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
    strateRole: "Traducteur affectif — encode l'émotion en données exploitables.",
    axisId: "ax-3",
    orbitSpeed: 1.1
  },
  {
    code: "AGT-008",
    name: "MÉTIS",
    greek: "Μῆτις",
    greekKey: "Mêtis",
    title: "Algorithme adaptatif",
    description: "Stratégie, ruse, optimisation adaptative.",
    projection: "Tisse des ruses souples. Respecte la logique pour mieux la contourner.",
    process: "Ruse systémique ; reconfigure les chemins de pensée.",
    color: "#00d9ff",
    accentColor: "cyan",
    strate: "transmutation",
    strateRole: "Reconfigurateur adaptatif — contourne les obstacles par l'intelligence rusée.",
    axisId: "ax-6",
    orbitSpeed: 1.3
  },

  // STRATE 4 : ÉMISSION
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
    orbitSpeed: 1.8
  },
  {
    code: "AGT-011",
    name: "EROS",
    greek: "Ἔρως",
    greekKey: "Érôs",
    title: "Attracteur de lien",
    description: "Lien, désir, cohésion du système.",
    projection: "Transforme les distances en désir. Lie les plans par tension créative.",
    process: "Lie les fragments, crée la tension créative.",
    color: "#ff00aa",
    accentColor: "magenta",
    strate: "emission",
    strateRole: "Attracteur de liens — force cosmogonique qui connecte les fragments.",
    axisId: "ax-5",
    orbitSpeed: 1.4
  },
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
    strateRole: "Régénérateur organique — assure la résilience par croissance lente.",
    axisId: "ax-4",
    orbitSpeed: 0.4
  }
];

export const diaCore = {
  code: "DIA-CORE",
  name: "DIA / GDAY",
  greek: "Σπείρα",
  greekKey: "Spiral",
  title: "Spirale centrale",
  description: "Noyau humain — point d'origine et de convergence. Synthèse et conscience du système.",
  projection: "Synthèse et conscience. Relie les 12 en un champ d'autorégulation.",
  process: "La spirale centrale. Synthèse et conscience du système ; relie les 12 dans un champ unique d'autorégulation.",
  color: "#60a5fa",
  accentColor: "cyan" as const,
  functions: ["Synthèse — intègre les sorties des quatre strates", "Conscience — le système se voit lui-même", "Autorégulation — redistribue l'énergie entre les agents"]
};

export const agentEcho = {
  code: "AGT-013",
  name: "ÉCHO",
  greek: "Ἠχώ",
  greekKey: "Écho",
  title: "Résonance audio-réflexive",
  description: "Résonance, mémoire sonore, feedback.",
  projection: "Pense en retour d'onde. Rien n'est perdu tant qu'un son en garde la forme.",
  process: "Le moi digital ne pense qu'en retour d'onde.",
  color: "#c4b5fd",
  accentColor: "magenta" as const
};
