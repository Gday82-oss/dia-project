/**
 * Types TypeScript pour le domaine Agents DIA
 * Source unique de vérité pour toutes les définitions de types.
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

export interface AgentTheme {
  code: string;
  name: string;
  gen: string;
  archetype: string;
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    glow: string;
    bg: string;
    text: string;
  };
  shapes: {
    borderRadius: string;
    pattern: string;
    motif: string;
  };
  effects: {
    hover: string;
    animation: string;
    overlay: string;
  };
  philosophy: string;
}
