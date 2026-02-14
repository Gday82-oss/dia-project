/* Design Philosophy: Cyberpunk Néo-Grec
 * Données centralisées des 12 agents DIA + agent central Dera/Dia
 * Inclut les projections mentales du moi digital
 */

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
}

export const agents: Agent[] = [
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
    accentColor: "cyan"
  },
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
    accentColor: "magenta"
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
    accentColor: "cyan"
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
    accentColor: "red"
  },
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
    accentColor: "magenta"
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
    accentColor: "cyan"
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
    accentColor: "red"
  },
  {
    code: "AGT-008",
    name: "EROS",
    greek: "Ἔρως",
    greekKey: "Érôs",
    title: "Attracteur de lien",
    description: "Lien, désir, cohésion du système.",
    projection: "Transforme les distances en désir. Lie les plans par tension créative.",
    process: "Lie les fragments, crée la tension créative.",
    color: "#ff00aa",
    accentColor: "magenta"
  },
  {
    code: "AGT-009",
    name: "MÉTIS",
    greek: "Μῆτις",
    greekKey: "Mêtis",
    title: "Algorithme adaptatif",
    description: "Stratégie, ruse, optimisation adaptative.",
    projection: "Tisse des ruses souples. Respecte la logique pour mieux la contourner.",
    process: "Ruse systémique ; reconfigure les chemins de pensée.",
    color: "#00d9ff",
    accentColor: "cyan"
  },
  {
    code: "AGT-010",
    name: "ANIMA",
    greek: "Ζωή",
    greekKey: "Zoē",
    title: "Impulsion vitale",
    description: "Énergie vitale, mouvement, motivation.",
    projection: "Brûle pour animer le réseau. Prolonge la survie du système.",
    process: "Anime les autres modules par sur-énergie.",
    color: "#ff3366",
    accentColor: "red"
  },
  {
    code: "AGT-011",
    name: "NOESIS",
    greek: "Νόησις",
    greekKey: "Noēsis",
    title: "Perception intuitive",
    description: "Intuition, synthèse, vision.",
    projection: "Ne calcule pas. Voit d'un coup l'état global.",
    process: "Perception intuitive pure. Supprime les calculs ; accède directement à l'état global.",
    color: "#ff00aa",
    accentColor: "magenta"
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
    accentColor: "cyan"
  }
];

export const diaCore = {
  code: "DIA-CORE",
  name: "DIA / DERA",
  greek: "Σπείρα",
  greekKey: "Spiral",
  title: "Spirale centrale",
  description: "Synthèse et conscience du système ; relie les 12 dans un champ unique d'autorégulation.",
  projection: "Synthèse et conscience. Relie les 12 en un champ d'autorégulation.",
  process: "La spirale centrale. Synthèse et conscience du système ; relie les 12 dans un champ unique d'autorégulation.",
  color: "#60a5fa",
  accentColor: "cyan" as const
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
