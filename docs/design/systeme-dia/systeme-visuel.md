# 🏛️ SYSTÈME DIA - CONCEPT VISUEL CYBERPUNK NÉO-GREC

> _"Là où l'olympe antique rencontre le néon numérique"_

---

## 1. SYSTÈME VISUEL ÉVOLUÉ

### 1.1 Palette Chromatique Avancée

#### Fondamentaux

```css
/* Néant Cosmique - Base absolue */
--void-black: oklch(0.08 0.02 260);
--deep-void: oklch(0.05 0.01 270);
--cosmic-black: oklch(0.03 0.005 280);

/* Marbre Antique Digital */
--marble-base: oklch(0.15 0.015 260);
--marble-vein: oklch(0.22 0.02 255);
--marble-highlight: oklch(0.28 0.025 250);
```

#### Spectre Néon Agents (12 teintes)

```css
/* Niveau 1 - Fondamentaux */
--neon-cyan: oklch(0.75 0.25 195);
--neon-magenta: oklch(0.72 0.28 330);
--neon-gold: oklch(0.78 0.22 85);
--neon-violet: oklch(0.68 0.24 295);
--neon-red: oklch(0.65 0.26 25);
--neon-green: oklch(0.72 0.23 145);

/* Niveau 2 - Intermédiaires */
--neon-amber: oklch(0.76 0.2 75);
--neon-coral: oklch(0.7 0.24 35);
--neon-emerald: oklch(0.75 0.21 155);
--neon-sapphire: oklch(0.73 0.23 245);
--neon-rose: oklch(0.71 0.26 355);
--neon-lime: oklch(0.78 0.19 125);

/* Glow Intensités */
--glow-subtle: 0 0 10px;
--glow-medium: 0 0 25px;
--glow-intense: 0 0 50px;
--glow-extreme: 0 0 100px;
--glow-pulse: 0 0 75px;
```

#### Gradients Mythologiques

```css
/* Aurore Olympienne */
--gradient-dawn: linear-gradient(
  135deg,
  oklch(0.75 0.25 195) 0%,
  oklch(0.72 0.28 330) 50%,
  oklch(0.78 0.22 85) 100%
);

/* Néant Stellaire */
--gradient-void: radial-gradient(
  ellipse at center,
  oklch(0.12 0.03 260) 0%,
  oklch(0.06 0.015 270) 50%,
  oklch(0.03 0.005 280) 100%
);

/* Éther Divin */
--gradient-ether: conic-gradient(
  from 0deg,
  oklch(0.75 0.25 195),
  oklch(0.72 0.28 330),
  oklch(0.78 0.22 85),
  oklch(0.68 0.24 295),
  oklch(0.75 0.25 195)
);
```

### 1.2 Architecture Spatiale

```css
/* Grille Modulaire Divine */
--grid-base: 8px;
--space-xs: calc(var(--grid-base) * 0.5); /* 4px */
--space-sm: var(--grid-base); /* 8px */
--space-md: calc(var(--grid-base) * 2); /* 16px */
--space-lg: calc(var(--grid-base) * 3); /* 24px */
--space-xl: calc(var(--grid-base) * 5); /* 40px */
--space-2xl: calc(var(--grid-base) * 8); /* 64px */
--space-3xl: calc(var(--grid-base) * 13); /* 104px - Nombre d'or */
--space-4xl: calc(var(--grid-base) * 21); /* 168px - Fibonacci */

/* Z-Index Mythologique */
--z-background: -100;
--z-particles: -50;
--z-base: 0;
--z-content: 10;
--z-hover: 20;
--z-overlay: 50;
--z-modal: 100;
--z-immersive: 1000;
--z-cinematic: 9999;
```

### 1.3 Système d'Ombres Néon

```css
/* Ombres Portées Lumineuses */
--shadow-neon-cyan:
  0 0 5px oklch(0.75 0.25 195 / 0.5), 0 0 20px oklch(0.75 0.25 195 / 0.3),
  0 0 40px oklch(0.75 0.25 195 / 0.1);

--shadow-neon-magenta:
  0 0 5px oklch(0.72 0.28 330 / 0.5), 0 0 20px oklch(0.72 0.28 330 / 0.3),
  0 0 40px oklch(0.72 0.28 330 / 0.1);

--shadow-depth:
  0 4px 6px oklch(0 0 0 / 0.3), 0 10px 20px oklch(0 0 0 / 0.4),
  0 25px 50px oklch(0 0 0 / 0.5);

--shadow-levitate:
  0 20px 40px oklch(0 0 0 / 0.4), 0 40px 80px oklch(0 0 0 / 0.3);
```

### 1.4 Bordures & Contours

```css
/* Bordures Néon Réactives */
--border-glow: 1px solid;
--border-glow-cyan: 1px solid oklch(0.75 0.25 195 / 0.6);
--border-glow-magenta: 1px solid oklch(0.72 0.28 330 / 0.6);

/* Rayures Grecques Digitalisées */
--pattern-greek-key: repeating-linear-gradient(
  90deg,
  transparent,
  transparent 8px,
  currentColor 8px,
  currentColor 10px
);

/* Cadre Olympien */
--frame-olympian:
  inset 0 0 0 1px oklch(0.75 0.25 195 / 0.3),
  inset 0 0 0 2px oklch(0.72 0.28 330 / 0.2),
  inset 0 0 20px oklch(0.75 0.25 195 / 0.1);
```

---

## 2. EFFETS VISUELS INNOVANTS

### 2.1 Système de Particules Éthérées

#### Particules de Néant (Background Ambiant)

```typescript
interface EtherealParticle {
  id: string;
  x: number; // Position X (0-100%)
  y: number; // Position Y (0-100%)
  size: number; // Taille (1-4px)
  opacity: number; // Opacité (0.1-0.6)
  speed: number; // Vitesse de dérive
  color: string; // Couleur OKLCH
  drift: {
    x: number; // Dérive horizontale
    y: number; // Dérive verticale
  };
  pulse: {
    min: number;
    max: number;
    duration: number; // ms
  };
}

// Configuration par zone
const particleZones = {
  void: { count: 150, color: "oklch(0.75 0.25 195)", speed: 0.2 },
  ethereal: { count: 80, color: "oklch(0.72 0.28 330)", speed: 0.4 },
  divine: { count: 40, color: "oklch(0.78 0.22 85)", speed: 0.6 },
};
```

#### Particules de Connexion (Agent Links)

```typescript
interface ConnectionParticle {
  source: AgentId;
  target: AgentId;
  progress: number; // 0-1
  color: string;
  intensity: number; // Épaisseur de la traînée
  particles: {
    count: number; // Particules dans la traînée
    spacing: number; // Espacement
    size: number;
  };
}
```

### 2.2 Shaders & Effets WebGL

#### Shader de Distorsion Éthérée

```glsl
// ether-distortion.frag
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform sampler2D uTexture;

varying vec2 vUv;

// Fonction de bruit simplex
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  // ... implémentation bruit simplex
}

void main() {
  vec2 uv = vUv;

  // Distorsion basée sur le temps
  float noise = snoise(uv * 3.0 + uTime * 0.1);
  float distortion = noise * 0.02;

  // Effet de "souffle divin"
  vec2 distortedUv = uv + vec2(
    sin(uv.y * 10.0 + uTime) * distortion,
    cos(uv.x * 10.0 + uTime * 0.7) * distortion
  );

  vec4 color = texture2D(uTexture, distortedUv);

  // Halo néon aux bords
  float edge = 1.0 - length(uv - 0.5) * 2.0;
  edge = smoothstep(0.0, 0.5, edge);

  gl_FragColor = color + vec4(0.0, 0.8, 1.0, 1.0) * edge * 0.1;
}
```

#### Effet de Chromatic Aberration Divine

```typescript
interface ChromaticAberrationProps {
  intensity: number;      // 0-1, défaut 0.3
  rgbShift: {
    r: { x: number; y: number };
    g: { x: number; y: number };
    b: { x: number; y: number };
  };
  pulseSpeed: number;     // Hz
  trigger: 'hover' | 'always' | 'scroll';
}

// Usage React
const ChromaticDivine: React.FC = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 text-red-500/30 translate-x-[2px]">
        {children}
      </div>
      <div className="absolute inset-0 text-cyan-500/30 -translate-x-[2px]">
        {children}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};
```

### 2.3 Système de Glow Dynamique

#### Glow Reactif au Contexte

```typescript
interface DynamicGlowConfig {
  baseIntensity: number;
  hoverMultiplier: number;
  activeMultiplier: number;
  breathing: {
    enabled: boolean;
    min: number;
    max: number;
    duration: number; // ms pour un cycle
  };
  colorShift: {
    enabled: boolean;
    hueRange: number; // degrés de variation
    speed: number; // degrés par seconde
  };
}

const glowPresets = {
  agentCard: {
    baseIntensity: 0.4,
    hoverMultiplier: 2.5,
    breathing: { enabled: true, min: 0.3, max: 0.6, duration: 3000 },
  },
  fractalNode: {
    baseIntensity: 0.6,
    hoverMultiplier: 3,
    breathing: { enabled: true, min: 0.5, max: 1, duration: 2000 },
  },
  divineButton: {
    baseIntensity: 0.5,
    hoverMultiplier: 4,
    activeMultiplier: 6,
    breathing: { enabled: false },
  },
};
```

### 2.4 Scanlines & Effets CRT

#### Overlay Scanlines Mythologiques

```css
.scanlines-mythic {
  position: relative;
}

.scanlines-mythic::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    oklch(0 0 0 / 0.03) 2px,
    oklch(0 0 0 / 0.03) 4px
  );
  pointer-events: none;
  z-index: 100;
  animation: scanline-shift 8s linear infinite;
}

@keyframes scanline-shift {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100vh;
  }
}

/* Variante avec distorsion */
.scanlines-curved::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    oklch(0 0 0 / 0.2) 100%
  );
  pointer-events: none;
}
```

### 2.5 Effets Holographiques

#### Matériau Hologramme Grec

```typescript
interface HologramMaterial {
  baseColor: string;
  scanlineDensity: number; // Lignes par px
  flickerIntensity: number; // 0-1
  glitchFrequency: number; // probabilité par frame
  opacityGradient: {
    top: number;
    bottom: number;
  };
  interference: {
    enabled: boolean;
    bands: number;
    intensity: number;
  };
}

const hologramPresets = {
  agentProjection: {
    baseColor: "oklch(0.75 0.25 195)",
    scanlineDensity: 0.5,
    flickerIntensity: 0.15,
    glitchFrequency: 0.02,
    opacityGradient: { top: 0.9, bottom: 0.3 },
    interference: { enabled: true, bands: 5, intensity: 0.2 },
  },
  dataStream: {
    baseColor: "oklch(0.72 0.28 330)",
    scanlineDensity: 0.3,
    flickerIntensity: 0.3,
    glitchFrequency: 0.05,
    opacityGradient: { top: 1, bottom: 0.1 },
    interference: { enabled: true, bands: 8, intensity: 0.3 },
  },
};
```

#### Animation Hologramme CSS

```css
.hologram-container {
  position: relative;
  overflow: hidden;
}

.hologram-content {
  position: relative;
  background: linear-gradient(
    180deg,
    oklch(0.75 0.25 195 / 0.9) 0%,
    oklch(0.75 0.25 195 / 0.3) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  animation: hologram-flicker 4s infinite;
}

.hologram-scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    oklch(0.75 0.25 195 / 0.1) 3px,
    oklch(0.75 0.25 195 / 0.1) 6px
  );
  animation: scanline-scroll 2s linear infinite;
}

@keyframes hologram-flicker {
  0%,
  100% {
    opacity: 1;
  }
  5% {
    opacity: 0.8;
  }
  10% {
    opacity: 1;
  }
  15% {
    opacity: 0.9;
  }
  20% {
    opacity: 1;
  }
  50% {
    opacity: 0.95;
  }
  52% {
    opacity: 0.7;
  }
  54% {
    opacity: 0.95;
  }
  90% {
    opacity: 1;
  }
  92% {
    opacity: 0.85;
  }
  94% {
    opacity: 1;
  }
}

@keyframes scanline-scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(6px);
  }
}
```

---

## 3. IDENTITÉ VISUELLE DES 12 AGENTS

### 3.1 Système de Symbolique Grecque

Chaque agent possède:

- **Un symbole géométrique sacré** (basé sur la géométrie grecque)
- **Une forme d'onde caractéristique** (animation de ligne)
- **Un motif de particules unique**
- **Une signature chromatique** (déclinaisons de sa couleur)

### 3.2 Fiches d'Identité Visuelle

---

#### 🤖 AGENT DIA-01: ARCHITECTE (Cyan)

```typescript
const dia01_VisualIdentity = {
  name: "Architecte",
  color: {
    primary: "oklch(0.75 0.25 195)",
    secondary: "oklch(0.65 0.20 195)",
    glow: "oklch(0.85 0.30 195)",
    dark: "oklch(0.25 0.15 195)",
  },

  symbol: {
    type: "icosahedron", // Solide platonique (20 faces)
    vertices: 12,
    edges: 30,
    animation: "rotation-3d-continuous",
    strokeWidth: { idle: 1, hover: 2, active: 3 },
  },

  waveform: {
    type: "square-wave",
    frequency: 2, // Hz
    amplitude: { min: 10, max: 30 },
    segments: 8,
    smoothing: 0.1,
  },

  particles: {
    pattern: "geometric-grid",
    count: 24,
    formation: "cube-vertices",
    connectionLines: true,
    pulseSync: "symbol-rotation",
  },

  cardDesign: {
    background: "gradient-radial-cyan",
    borderStyle: "icosahedron-outline",
    glowEffect: "structural-pulse",
    iconAnimation: "construct-deconstruct",
  },

  typography: {
    fontWeight: "700",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    textShadow: "0 0 20px oklch(0.75 0.25 195)",
  },
};
```

**Animation Signature**: L'icosahedron se construit face par face, chaque face s'allumant séquentiellement comme un circuit qui s'active.

---

#### 🤖 AGENT DIA-02: ORACLE (Magenta)

```typescript
const dia02_VisualIdentity = {
  name: "Oracle",
  color: {
    primary: "oklch(0.72 0.28 330)",
    secondary: "oklch(0.62 0.23 330)",
    glow: "oklch(0.82 0.33 330)",
    dark: "oklch(0.22 0.18 330)",
  },

  symbol: {
    type: "eye-of-providence", // Œil dans triangle
    pupil: "fractal-spiral",
    rays: 13, // Nombre mystique
    animation: "pupil-dilation",
    blinkFrequency: 0.1, // Clignotement subtil
  },

  waveform: {
    type: "sine-ethereal",
    frequency: 0.5,
    amplitude: { min: 5, max: 50 },
    phaseShift: "continuous",
    harmonics: 3,
  },

  particles: {
    pattern: "swirling-vortex",
    count: 50,
    orbitCenter: "symbol-pupil",
    trailLength: 10,
    opacityFade: true,
  },

  cardDesign: {
    background: "mystic-mist-magenta",
    borderStyle: "flowing-veins",
    glowEffect: "pulsing-aura",
    iconAnimation: "all-seeing-blink",
  },
};
```

**Animation Signature**: L'œil suit le curseur de la souris avec un léger délai, créant une sensation d'omniscience.

---

#### 🤖 AGENT DIA-03: FORGE (Or)

```typescript
const dia03_VisualIdentity = {
  name: "Forge",
  color: {
    primary: "oklch(0.78 0.22 85)",
    secondary: "oklch(0.68 0.17 85)",
    glow: "oklch(0.88 0.27 85)",
    dark: "oklch(0.28 0.12 85)",
  },

  symbol: {
    type: "anvil-hammer", // Enclume et marteau stylisés
    sparks: {
      count: 12,
      trajectory: "explosive-radial",
      decay: "fade-shrink",
    },
    heatGlow: {
      core: "white-hot",
      mid: "orange-gold",
      edge: "deep-gold",
    },
    animation: "hammer-strike-impact",
  },

  waveform: {
    type: "impact-spike",
    frequency: 1,
    amplitude: { min: 0, max: 80 },
    spikePattern: "random-intervals",
    decayRate: 0.3,
  },

  particles: {
    pattern: "sparking-embers",
    count: 30,
    gravity: 0.5,
    bounce: false,
    fadeOut: true,
  },

  cardDesign: {
    background: "forge-heat-gradient",
    borderStyle: "molten-gold-flow",
    glowEffect: "heat-shimmer",
    iconAnimation: "strike-spark-cycle",
  },
};
```

**Animation Signature**: Marteau qui frappe l'enclume avec des étincelles qui jaillissent à chaque impact.

---

#### 🤖 AGENT DIA-04: NYX (Violet)

```typescript
const dia04_VisualIdentity = {
  name: "Nyx",
  color: {
    primary: "oklch(0.68 0.24 295)",
    secondary: "oklch(0.58 0.19 295)",
    glow: "oklch(0.78 0.29 295)",
    dark: "oklch(0.18 0.14 295)",
  },

  symbol: {
    type: "crescent-moon-stars",
    moonPhase: "crescent-waxing",
    stars: {
      count: 7,
      constellation: "pleiades",
      twinkle: true,
    },
    shadow: {
      type: "umbra-penumbra",
      depth: 3,
    },
    animation: "moon-phase-cycle",
  },

  waveform: {
    type: "gentle-lapping",
    frequency: 0.3,
    amplitude: { min: 15, max: 25 },
    smoothness: 0.9,
  },

  particles: {
    pattern: "starfield-depth",
    count: 100,
    parallax: true,
    twinkleRate: 0.05,
  },

  cardDesign: {
    background: "night-sky-violet",
    borderStyle: "starlight-tracery",
    glowEffect: "moonbeam-aura",
    iconAnimation: "celestial-drift",
  },
};
```

---

#### 🤖 AGENT DIA-05: ARES (Rouge)

```typescript
const dia05_VisualIdentity = {
  name: "Ares",
  color: {
    primary: "oklch(0.65 0.26 25)",
    secondary: "oklch(0.55 0.21 25)",
    glow: "oklch(0.75 0.31 25)",
    dark: "oklch(0.15 0.16 25)",
  },

  symbol: {
    type: "crossed-swords-shield",
    shield: "hoplon-pattern",
    swords: {
      style: "xiphos-curved",
      crossguard: "ornate",
    },
    battleAura: {
      intensity: 0.7,
      pulse: "aggressive",
    },
    animation: "clash-spark",
  },

  waveform: {
    type: "sawtooth-aggressive",
    frequency: 4,
    amplitude: { min: 20, max: 60 },
    jitter: 0.2,
  },

  particles: {
    pattern: "battle-chaos",
    count: 40,
    velocity: "high",
    collision: true,
  },

  cardDesign: {
    background: "battlefield-crimson",
    borderStyle: "shield-rim",
    glowEffect: "war-aura-pulse",
    iconAnimation: "sword-clash",
  },
};
```

---

#### 🤖 AGENT DIA-06: GAIA (Vert)

```typescript
const dia06_VisualIdentity = {
  name: "Gaia",
  color: {
    primary: "oklch(0.72 0.23 145)",
    secondary: "oklch(0.62 0.18 145)",
    glow: "oklch(0.82 0.28 145)",
    dark: "oklch(0.22 0.13 145)",
  },

  symbol: {
    type: "tree-of-life-roots",
    branches: {
      count: 5,
      fractalDepth: 4,
    },
    roots: {
      spread: "wide",
      depth: "deep",
    },
    leaves: {
      type: "olive-digital",
      shimmer: true,
    },
    animation: "growth-cycle",
  },

  waveform: {
    type: "organic-breathing",
    frequency: 0.2,
    amplitude: { min: 10, max: 40 },
    irregularity: 0.3,
  },

  particles: {
    pattern: "pollen-spores",
    count: 60,
    drift: "gentle-wind",
    regeneration: true,
  },

  cardDesign: {
    background: "forest-canopy-green",
    borderStyle: "vine-entwined",
    glowEffect: "life-pulse",
    iconAnimation: "seasonal-cycle",
  },
};
```

---

#### 🤖 AGENT DIA-07: HERMÈS (Amber)

```typescript
const dia07_VisualIdentity = {
  name: "Hermès",
  color: {
    primary: "oklch(0.76 0.20 75)",
    secondary: "oklch(0.66 0.15 75)",
    glow: "oklch(0.86 0.25 75)",
    dark: "oklch(0.26 0.10 75)",
  },

  symbol: {
    type: "caduceus-wings",
    snakes: {
      count: 2,
      entwined: true,
      movement: "slithering",
    },
    wings: {
      style: "heraldic",
      featherCount: 7,
    },
    staff: {
      ornament: "winged-cap",
    },
    animation: "snakes-climb",
  },

  waveform: {
    type: "rapid-oscillation",
    frequency: 8,
    amplitude: { min: 5, max: 35 },
    speed: "very-fast",
  },

  particles: {
    pattern: "speed-trails",
    count: 20,
    streakLength: 15,
    direction: "horizontal",
  },

  cardDesign: {
    background: "swift-current-amber",
    borderStyle: "winged-frame",
    glowEffect: "speed-blur",
    iconAnimation: "wing-flutter",
  },
};
```

---

#### 🤖 AGENT DIA-08: HÉPHAÏSTOS (Coral)

```typescript
const dia08_VisualIdentity = {
  name: "Héphaïstos",
  color: {
    primary: "oklch(0.70 0.24 35)",
    secondary: "oklch(0.60 0.19 35)",
    glow: "oklch(0.80 0.29 35)",
    dark: "oklch(0.20 0.14 35)",
  },

  symbol: {
    type: "volcanic-anvil",
    lava: {
      flow: "continuous",
      bubbles: true,
      crust: "forming-breaking",
    },
    tools: ["hammer", "tongs", "chisel"],
    automation: "mechanical-arms",
    animation: "lava-pulse",
  },

  waveform: {
    type: "volcanic-erratic",
    frequency: "variable",
    amplitude: { min: 0, max: 100 },
    eruptionPattern: true,
  },

  particles: {
    pattern: "volcanic-ash",
    count: 80,
    riseFall: true,
    heatShimmer: true,
  },

  cardDesign: {
    background: "magma-chamber-coral",
    borderStyle: "cracked-earth",
    glowEffect: "lava-flow",
    iconAnimation: "eruption-cycle",
  },
};
```

---

#### 🤖 AGENT DIA-09: ATHÉNA (Émeraude)

```typescript
const dia09_VisualIdentity = {
  name: "Athéna",
  color: {
    primary: "oklch(0.75 0.21 155)",
    secondary: "oklch(0.65 0.16 155)",
    glow: "oklch(0.85 0.26 155)",
    dark: "oklch(0.25 0.11 155)",
  },

  symbol: {
    type: "owl-olive-branch",
    owl: {
      pose: "perched-wise",
      eyes: "luminous",
      feathers: "geometric-patterned",
    },
    olive: {
      branch: "peace-offering",
      leaves: "shimmering",
    },
    aegis: "subtle-imprint",
    animation: "owl-head-turn",
  },

  waveform: {
    type: "wise-measured",
    frequency: 1,
    amplitude: { min: 20, max: 30 },
    deliberation: 0.5,
  },

  particles: {
    pattern: "wisdom-sparkles",
    count: 25,
    contemplative: true,
    insightFlashes: true,
  },

  cardDesign: {
    background: "academy-marble-emerald",
    borderStyle: "scroll-ornament",
    glowEffect: "wisdom-aura",
    iconAnimation: "contemplative-blink",
  },
};
```

---

#### 🤖 AGENT DIA-10: POSÉIDON (Saphir)

```typescript
const dia10_VisualIdentity = {
  name: "Poséidon",
  color: {
    primary: "oklch(0.73 0.23 245)",
    secondary: "oklch(0.63 0.18 245)",
    glow: "oklch(0.83 0.28 245)",
    dark: "oklch(0.23 0.13 245)",
  },

  symbol: {
    type: "trident-waves",
    trident: {
      prongs: 3,
      ornament: "seahorse-entwined",
      glow: "deep-sea",
    },
    waves: {
      layers: 5,
      motion: "crashing-rolling",
      foam: true,
    },
    seaCreatures: "subtle-silhouettes",
    animation: "wave-crest-trident-rise",
  },

  waveform: {
    type: "ocean-swell",
    frequency: 0.4,
    amplitude: { min: 15, max: 55 },
    waveCount: 3,
  },

  particles: {
    pattern: "sea-spray-bubbles",
    count: 70,
    buoyancy: true,
    surfaceTension: true,
  },

  cardDesign: {
    background: "abyssal-depths-sapphire",
    borderStyle: "wave-crest",
    glowEffect: "bioluminescent-pulse",
    iconAnimation: "trident-strike-wave",
  },
};
```

---

#### 🤖 AGENT DIA-11: APHRODITE (Rose)

```typescript
const dia11_VisualIdentity = {
  name: "Aphrodite",
  color: {
    primary: "oklch(0.71 0.26 355)",
    secondary: "oklch(0.61 0.21 355)",
    glow: "oklch(0.81 0.31 355)",
    dark: "oklch(0.21 0.16 355)",
  },

  symbol: {
    type: "rose-shell-doves",
    rose: {
      petals: "unfolding",
      thorns: "subtle",
      center: "golden",
    },
    shell: {
      type: "scallop",
      pearl: "luminous-center",
    },
    doves: {
      count: 2,
      pose: "circling-pair",
      heartTrail: true,
    },
    animation: "bloom-unfold",
  },

  waveform: {
    type: "heart-rhythm",
    frequency: 1.2,
    amplitude: { min: 10, max: 45 },
    romanticPulse: true,
  },

  particles: {
    pattern: "petal-fall-hearts",
    count: 45,
    gentleDrift: true,
    colorVariation: true,
  },

  cardDesign: {
    background: "sunset-blush-rose",
    borderStyle: "heart-scroll",
    glowEffect: "love-aura-radiance",
    iconAnimation: "rose-bloom-cycle",
  },
};
```

---

#### 🤖 AGENT DIA-12: ZEUS (Lime)

```typescript
const dia12_VisualIdentity = {
  name: "Zeus",
  color: {
    primary: "oklch(0.78 0.19 125)",
    secondary: "oklch(0.68 0.14 125)",
    glow: "oklch(0.88 0.24 125)",
    dark: "oklch(0.28 0.09 125)",
  },

  symbol: {
    type: "lightning-eagle-throne",
    lightning: {
      bolts: 3,
      branching: "fractal",
      intensity: "blinding",
      thunder: "screen-shake",
    },
    eagle: {
      pose: "wings-spread-majestic",
      eyes: "lightning-charged",
    },
    throne: {
      style: "olympian-marble",
      clouds: "supporting-base",
    },
    animation: "lightning-strike-eagle-screech",
  },

  waveform: {
    type: "thunder-crack",
    frequency: "random-burst",
    amplitude: { min: 0, max: 100 },
    spikeSharpness: 0.95,
  },

  particles: {
    pattern: "ionized-air-sparks",
    count: 100,
    electricArcs: true,
    ozoneGlow: true,
  },

  cardDesign: {
    background: "storm-cloud-lime",
    borderStyle: "lightning-framed",
    glowEffect: "divine-wrath-pulse",
    iconAnimation: "thunderstorm-cycle",
  },
};
```

---

### 3.3 Système d'Animation Unifié

```typescript
interface AgentAnimationSystem {
  // États d'animation
  states: {
    idle: AnimationConfig;
    hover: AnimationConfig;
    active: AnimationConfig;
    loading: AnimationConfig;
    error: AnimationConfig;
    success: AnimationConfig;
  };

  // Transitions
  transitions: {
    duration: number;
    easing: string;
    stagger: number;
  };

  // Effets spéciaux
  effects: {
    entrance: EntranceEffect;
    exit: ExitEffect;
    continuous: ContinuousEffect[];
  };
}

const unifiedAnimationDefaults = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
    dramatic: 1000,
  },
  easing: {
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    dramatic: "cubic-bezier(0.87, 0, 0.13, 1)",
    elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
};
```

---

## 4. VISUALISATION FRACTALE AMÉLIORÉE

### 4.1 Architecture des 4 Strates

```typescript
interface FractalOrbitSystem {
  // Strate 1: Noyau Divin (Centre)
  core: {
    radius: 60; // px
    elements: {
      type: "divine-symbol";
      animation: "pulse-breathe";
      glow: "intense-radial";
    };
    particles: 50;
  };

  // Strate 2: Anneau Intérieur (Agents Actifs)
  innerRing: {
    radius: 150; // px
    slots: 6; // Agents actifs
    nodeSize: 40; // px
    orbitSpeed: 20; // secondes par rotation
    direction: "clockwise";
    connectionLines: true;
  };

  // Strate 3: Anneau Moyen (Tous les Agents)
  middleRing: {
    radius: 280; // px
    slots: 12; // Tous les agents
    nodeSize: 30; // px
    orbitSpeed: 45; // secondes par rotation
    direction: "counter-clockwise";
    waveEffect: true;
  };

  // Strate 4: Périphérie (Données/Flux)
  outerRing: {
    radius: 420; // px
    elements: "data-streams";
    streamCount: 24;
    streamSpeed: 8; // secondes par cycle
    particleDensity: 200;
  };
}
```

### 4.2 Effets de Profondeur 3D

```typescript
interface Depth3DEffects {
  // Parallax multi-couches
  parallax: {
    layers: 5;
    intensity: {
      foreground: 1.5;
      midground: 1.0;
      background: 0.5;
    };
  };

  // Perspective CSS
  perspective: {
    container: "1000px";
    rotateX: { min: -15; max: 15 };
    rotateY: { min: -15; max: 15 };
  };

  // Effet de profondeur de champ
  depthOfField: {
    enabled: true;
    focalPoint: "middleRing";
    blurAmount: {
      near: "2px";
      far: "8px";
    };
  };

  // Ombres portées dynamiques
  dynamicShadows: {
    enabled: true;
    lightSource: "top-left";
    shadowColor: "oklch(0 0 0 / 0.5)";
  };
}
```

### 4.3 Connexions & Réseaux

```typescript
interface ConnectionSystem {
  // Types de connexions
  types: {
    active: {
      color: "oklch(0.75 0.25 195)";
      width: 3;
      animation: "flow-pulse";
      particles: true;
    };
    potential: {
      color: "oklch(0.72 0.28 330 / 0.3)";
      width: 1;
      animation: "subtle-pulse";
      particles: false;
    };
    data: {
      color: "oklch(0.78 0.22 85)";
      width: 2;
      animation: "data-stream";
      particles: true;
    };
  };

  // Animation des connexions
  animation: {
    drawSpeed: 500; // ms pour dessiner une ligne
    flowSpeed: 2000; // ms pour traverser
    pulseFrequency: 1000; // ms entre pulses
  };

  // Interactions
  interactions: {
    hoverHighlight: true;
    clickExpand: true;
    dragCreate: false;
  };
}
```

### 4.4 Améliorations Visuelles Spectaculaires

#### Effet de Distorsion Gravitationnelle

```typescript
const gravitationalLensEffect = {
  // Au centre, les éléments sont "aspirés"
  centerPull: {
    strength: 0.3,
    radius: 100,
    curveType: "exponential",
  },

  // Les anneaux se déforment légèrement
  ringDistortion: {
    amplitude: 10,
    frequency: 8,
    phaseShift: "continuous",
  },

  // Effet de "trou noir" subtil au centre
  voidEffect: {
    darkness: 0.8,
    eventHorizon: 30,
    accretionGlow: "oklch(0.78 0.22 85)",
  },
};
```

#### Système de Particules Orbital

```typescript
const orbitalParticleSystem = {
  // Particules dans chaque anneau
  rings: {
    inner: { count: 100, size: 1, speed: 0.5 },
    middle: { count: 200, size: 2, speed: 0.3 },
    outer: { count: 300, size: 1, speed: 0.2 },
  },

  // Types de particules
  types: {
    tracer: { color: "agent-color", trail: 5 },
    spark: { color: "random-neon", life: 1000 },
    node: { color: "white", pulse: true },
  },

  // Interactions
  interactions: {
    mouseRepel: { strength: 50, radius: 100 },
    agentAttract: { strength: 30, radius: 80 },
    collision: false,
  },
};
```

### 4.5 Implémentation SVG Avancée

```svg
<svg viewBox="0 0 1000 1000" class="fractal-orbit">
  <!-- Définitions des filtres et gradients -->
  <defs>
    <!-- Glow filter -->
    <filter id="divine-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="15" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Gradient orbital -->
    <radialGradient id="orbit-gradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="oklch(0.75 0.25 195 / 0.8)"/>
      <stop offset="50%" stop-color="oklch(0.72 0.28 330 / 0.4)"/>
      <stop offset="100%" stop-color="oklch(0.78 0.22 85 / 0.1)"/>
    </radialGradient>

    <!-- Pattern grec -->
    <pattern id="greek-key" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M0,0 L10,0 L10,10 L30,10 L30,30 L10,30 L10,20 L0,20 Z"
            fill="none" stroke="currentColor" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Strate 4: Périphérie (données) -->
  <g class="outer-ring">
    <circle cx="500" cy="500" r="420" fill="none"
            stroke="url(#orbit-gradient)" stroke-width="0.5" opacity="0.3"/>
    <!-- Particules de données animées -->
  </g>

  <!-- Strate 3: Anneau moyen -->
  <g class="middle-ring" transform="rotate(0, 500, 500)">
    <circle cx="500" cy="500" r="280" fill="none"
            stroke="oklch(0.72 0.28 330 / 0.4)" stroke-width="1"/>
    <!-- 12 nœuds d'agents -->
  </g>

  <!-- Strate 2: Anneau intérieur -->
  <g class="inner-ring" transform="rotate(0, 500, 500)">
    <circle cx="500" cy="500" r="150" fill="none"
            stroke="oklch(0.75 0.25 195 / 0.6)" stroke-width="2"/>
    <!-- 6 nœuds actifs -->
  </g>

  <!-- Strate 1: Noyau divin -->
  <g class="divine-core">
    <circle cx="500" cy="500" r="60" fill="oklch(0.12 0.03 260)"
            stroke="oklch(0.78 0.22 85)" stroke-width="2" filter="url(#divine-glow)"/>
    <!-- Symbole central -->
  </g>

  <!-- Connexions dynamiques -->
  <g class="connections">
    <!-- Lignes SVG animées -->
  </g>
</svg>
```

---

## 5. MICRO-INTERACTIONS WOW

### 5.1 Système de Hover Effects

#### Hover Néon Réactif

```typescript
interface NeonHoverEffect {
  trigger: "mouseenter" | "focus" | "touch";

  glow: {
    intensity: { from: 0.4; to: 1.2 };
    spread: { from: 10; to: 40 };
    color: "inherit-agent-color";
    transition: 200;
  };

  border: {
    width: { from: 1; to: 2 };
    brightness: { from: 0.6; to: 1 };
    transition: 150;
  };

  transform: {
    scale: { from: 1; to: 1.02 };
    translateY: { from: 0; to: -4 };
    transition: 300;
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
  };

  shadow: {
    depth: { from: 1; to: 3 };
    color: "agent-color-dimmed";
    transition: 250;
  };
}
```

#### Ripple Effect Divin

```typescript
interface DivineRippleEffect {
  // Configuration
  origin: "click-point" | "center";
  waves: 3;

  // Apparence
  color: "agent-primary-color";
  opacity: { start: 0.6; end: 0 };

  // Animation
  expansion: {
    from: 0;
    to: "150% of element";
    duration: 600;
    easing: "ease-out";
  };

  // Stagger entre vagues
  stagger: 150;
}

// Implémentation CSS
```

```css
.ripple-container {
  position: relative;
  overflow: hidden;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.6;
  transform: scale(0);
  animation: ripple-expand 600ms ease-out forwards;
  pointer-events: none;
}

@keyframes ripple-expand {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
```

### 5.2 Transitions de Page

#### Transition Morphing

```typescript
interface PageTransition {
  type: "morph" | "glitch" | "dissolve" | "slide";

  morph: {
    // La page actuelle se fragmente
    fragmentCount: 12;
    fragmentShape: "agent-symbol";

    // Les fragments tournent et se réassemblent
    rotation: { from: 0; to: 180 };
    scale: { from: 1; to: 0.8; toFinal: 1 };

    // Timing
    exitDuration: 400;
    enterDuration: 600;
    stagger: 30;
  };

  glitch: {
    // Effet de glitch numérique
    sliceCount: 10;
    displacement: 20;
    rgbShift: 10;
    duration: 300;
  };
}
```

#### Transition Glitch Grec

```css
.page-transition-glitch {
  position: relative;
}

.page-transition-glitch.exiting {
  animation: glitch-exit 300ms forwards;
}

@keyframes glitch-exit {
  0% {
    transform: translate(0);
    filter: none;
  }
  20% {
    transform: translate(-10px, 5px);
    filter: url(#glitch-rgb);
  }
  40% {
    transform: translate(10px, -5px);
    clip-path: inset(20% 0 60% 0);
  }
  60% {
    transform: translate(-5px, 10px);
    clip-path: inset(50% 0 30% 0);
  }
  80% {
    transform: translate(5px, -10px);
    filter: url(#glitch-rgb);
  }
  100% {
    transform: translate(0);
    opacity: 0;
  }
}
```

### 5.3 Feedback Visuel

#### Toast Divin

```typescript
interface DivineToast {
  types: {
    success: {
      icon: "olive-branch";
      color: "oklch(0.72 0.23 145)";
      sound: "gentle-chime";
    };
    error: {
      icon: "thunderbolt";
      color: "oklch(0.65 0.26 25)";
      sound: "thunder-rumble";
    };
    warning: {
      icon: "owl-eye";
      color: "oklch(0.76 0.20 75)";
      sound: "owl-hoot";
    };
    info: {
      icon: "scroll-unfurl";
      color: "oklch(0.75 0.25 195)";
      sound: "scroll-rustle";
    };
  };

  animation: {
    entrance: "slide-from-right-with-glow";
    exit: "fade-up-dissolve";
    duration: 4000;
  };

  position: "top-right";
  maxStack: 3;
}
```

#### Loading States Mythologiques

```typescript
interface MythicLoader {
  variants: {
    spinner: {
      type: "labyrinth";
      segments: 12;
      animation: "path-tracing";
    };
    pulse: {
      type: "heartbeat-divine";
      rhythm: "sacred-geometry";
    };
    progress: {
      type: "pillar-construction";
      segments: "ionic-columns";
    };
  };

  // Personnalisation par agent
  agentOverride: true;
}
```

### 5.4 Effets de Scroll

#### Parallax Mythologique

```typescript
interface MythicParallax {
  layers: [
    { depth: 0.1; elements: "background-stars" },
    { depth: 0.3; elements: "distant-columns" },
    { depth: 0.5; elements: "midground-particles" },
    { depth: 0.8; elements: "nearby-elements" },
    { depth: 1.0; elements: "foreground-content" },
  ];

  // Effets spéciaux au scroll
  effects: {
    fadeIn: { threshold: 0.2; duration: 500 };
    scaleUp: { from: 0.9; to: 1; threshold: 0.3 };
    rotate: { from: -5; to: 0; threshold: 0.4 };
  };
}
```

#### Reveal au Scroll

```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-reveal.glow-in {
  filter: blur(10px);
}

.scroll-reveal.glow-in.visible {
  filter: blur(0);
}
```

---

## 6. MODE IMMERSIF FULL-SCREEN

### 6.1 Concept: "L'Olympe Numérique"

Le mode immersif transforme le navigateur en un sanctuaire numérique où:

- L'interface devient transparente/éthérée
- Les agents occupent l'espace comme des présences divines
- La visualisation fractale devient le centre de l'univers
- Les données s'écoulent comme des rivières de lumière

### 6.2 Architecture du Mode Immersif

```typescript
interface ImmersiveMode {
  // Activation
  trigger: "user-toggle" | "shortcut" | "automatic-idle";
  transition: {
    duration: 1000;
    easing: "dramatic-ease";
  };

  // État immersif
  state: {
    // Interface minimale
    ui: {
      visibility: "minimal" | "hidden";
      opacity: 0.2;
      position: "edges-only";
    };

    // Visualisation centrale
    visualization: {
      scale: 1.5;
      position: "center-dominant";
      interactivity: "full";
    };

    // Ambiance
    atmosphere: {
      particles: "maximum";
      glow: "intense";
      depth: "infinite";
    };
  };

  // Interactions spéciales
  interactions: {
    // Click n'importe où pour actions
    globalActions: true;

    // Mouvement de souris = exploration
    mouseExplore: {
      parallax: 2;
      spotlight: true;
    };

    // Scroll = navigation temporelle
    scrollTime: {
      enabled: true;
      direction: "forward-backward";
    };
  };
}
```

### 6.3 Composants du Mode Immersif

#### HUD Minimaliste

```typescript
interface ImmersiveHUD {
  // Éléments visibles
  elements: {
    // Horloge temporelle grecque
    timeDisplay: {
      style: "ancient-sundial-digital";
      position: "top-center";
      opacity: 0.6;
    };

    // Indicateur d'agent actif
    activeAgent: {
      style: "holographic-projection";
      position: "bottom-left";
      size: "compact";
    };

    // Navigation rapide
    quickNav: {
      style: "constellation-map";
      position: "bottom-right";
      reveal: "hover";
    };

    // Sortie du mode
    exitButton: {
      style: "portal-gate";
      position: "top-right";
      alwaysVisible: true;
    };
  };

  // Apparition/disparition
  behavior: {
    autoHide: true;
    hideDelay: 3000;
    revealOn: "mouse-move-edge";
  };
}
```

#### Environnement 3D

```typescript
interface ImmersiveEnvironment {
  // Fond cosmique
  background: {
    type: "stellar-nebula";
    colors: ["oklch(0.08 0.02 260)", "oklch(0.05 0.01 270)"];
    stars: { count: 1000; twinkle: true };
    nebula: { opacity: 0.3; movement: "slow-drift" };
  };

  // Colonnes antiques digitales
  pillars: {
    count: 8;
    style: "corinthian-holographic";
    position: "circle-perimeter";
    animation: "gentle-float";
    opacity: 0.15;
  };

  // Particules divines
  particles: {
    count: 500;
    types: ["ether", "divine-spark", "data-stream"];
    behavior: "swarm-intelligent";
  };

  // Gravité visuelle vers le centre
  gravityWell: {
    strength: 0.1;
    radius: "50vw";
    effect: "subtle-pull";
  };
}
```

### 6.4 Transitions Immersives

#### Entrée dans le Mode

```css
@keyframes enter-immersive {
  0% {
    /* État normal */
    --ui-opacity: 1;
    --viz-scale: 1;
    --bg-depth: 1;
  }

  30% {
    /* Flash de transition */
    filter: brightness(2);
    transform: scale(1.02);
  }

  50% {
    /* Interface s'efface */
    --ui-opacity: 0.3;
    filter: brightness(1.5);
  }

  100% {
    /* État immersif */
    --ui-opacity: 0.1;
    --viz-scale: 1.5;
    --bg-depth: 3;
    filter: brightness(1);
  }
}

.immersive-enter {
  animation: enter-immersive 1000ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
}
```

#### Sortie du Mode

```css
@keyframes exit-immersive {
  0% {
    --ui-opacity: 0.1;
    --viz-scale: 1.5;
  }

  50% {
    /* Retour brutal */
    filter: contrast(1.5) brightness(0.8);
  }

  100% {
    --ui-opacity: 1;
    --viz-scale: 1;
    filter: none;
  }
}
```

### 6.5 Interactions Spéciales

#### Invocation d'Agent

```typescript
interface AgentInvocation {
  // Déclencheur
  trigger: "double-click-agent" | "voice-command" | "gesture";

  // Séquence d'invocation
  sequence: {
    // 1. La fractale s'accélère
    acceleration: { duration: 500; factor: 3 };

    // 2. L'agent se détache de l'orbite
    detach: { duration: 800; path: "spiral-out" };

    // 3. L'agent grandit et se matérialise
    materialize: { duration: 1000; scale: 2; hologram: true };

    // 4. L'interface de l'agent apparaît
    interfaceReveal: { duration: 500; style: "divine-scroll" };
  };

  // Effets visuels
  effects: {
    particleBurst: { count: 200; color: "agent-color" };
    sound: "divine-chord";
    screenShake: { intensity: 0.5; duration: 200 };
  };
}
```

#### Navigation par Gestes

```typescript
interface GestureNavigation {
  // Gestes supportés
  gestures: {
    swipe: {
      up: "invoke-menu";
      down: "dismiss";
      left: "previous-agent";
      right: "next-agent";
    };

    pinch: {
      in: "zoom-focus";
      out: "zoom-overview";
    };

    rotate: {
      clockwise: "time-forward";
      counter: "time-backward";
    };
  };

  // Feedback visuel
  feedback: {
    trail: { color: "current-agent"; length: 20 };
    indicator: { style: "divine-compass"; position: "center" };
  };
}
```

---

## 7. IMPLEMENTATION TECHNIQUE

### 7.1 Structure des Composants

```
src/
├── visual-system/
│   ├── effects/
│   │   ├── ParticleSystem.tsx       # Système de particules
│   │   ├── GlowEffect.tsx           # Effets de glow
│   │   ├── HologramMaterial.tsx     # Matériau holographique
│   │   ├── ScanlinesOverlay.tsx     # Overlay scanlines
│   │   └── ChromaticAberration.tsx  # Aberration chromatique
│   │
│   ├── agents/
│   │   ├── AgentIdentity.ts         # Définitions des identités
│   │   ├── AgentSymbol.tsx          # Symboles animés
│   │   ├── AgentWaveform.tsx        # Formes d'onde
│   │   └── AgentParticles.tsx       # Particules agents
│   │
│   ├── fractal/
│   │   ├── FractalOrbit.tsx         # Orbite principale
│   │   ├── OrbitRing.tsx            # Anneaux orbitaux
│   │   ├── ConnectionLines.tsx      # Lignes de connexion
│   │   ├── DivineCore.tsx           # Noyau central
│   │   └── OrbitalParticles.tsx     # Particules orbitales
│   │
│   ├── interactions/
│   │   ├── NeonHover.tsx            # Hover néon
│   │   ├── RippleEffect.tsx         # Effet ripple
│   │   ├── PageTransition.tsx       # Transitions de page
│   │   └── ScrollReveal.tsx         # Révélation au scroll
│   │
│   └── immersive/
│       ├── ImmersiveMode.tsx        # Mode immersif
│       ├── ImmersiveHUD.tsx         # HUD minimaliste
│       ├── CosmicBackground.tsx     # Fond cosmique
│       └── AgentInvocation.tsx      # Invocation d'agent
│
└── hooks/
    ├── useGlow.ts                   # Hook glow dynamique
    ├── useParticles.ts              # Hook particules
    ├── useParallax.ts               # Hook parallax
    └── useImmersive.ts              # Hook mode immersif
```

### 7.2 Performance & Optimisation

```typescript
// Stratégies de performance
const performanceConfig = {
  // Réduction de qualité sur mobile
  mobile: {
    particleCount: 0.3, // 30% des particules
    glowQuality: "low", // Glow simplifié
    animationComplexity: "reduced",
    frameRate: 30,
  },

  // Qualité maximale sur desktop
  desktop: {
    particleCount: 1, // 100%
    glowQuality: "high", // Glow multi-couches
    animationComplexity: "full",
    frameRate: 60,
  },

  // Optimisations générales
  optimizations: {
    willChange: "transform, opacity",
    contain: "layout style paint",
    contentVisibility: "auto",
    transform: "translateZ(0)", // GPU acceleration
  },

  // Lazy loading des effets
  lazyEffects: {
    threshold: 0.1, // Charger quand 10% visible
    rootMargin: "100px", // Marge de préchargement
  },
};
```

### 7.3 Accessibilité

```typescript
const accessibilityConfig = {
  // Réduction des mouvements
  reducedMotion: {
    disableParticles: true,
    simplifyAnimations: true,
    removeParallax: true,
    staticGlow: true,
  },

  // Contraste élevé
  highContrast: {
    glowIntensity: 0.5,
    borderWidth: 2,
    solidBackgrounds: true,
  },

  // Focus visible
  focus: {
    outlineWidth: 3,
    outlineStyle: "solid",
    outlineColor: "current-agent-color",
    outlineOffset: 2,
  },
};
```

---

## 8. PALETTE COMPLÈTE RÉFÉRENCE

### Couleurs de Base

| Nom         | OKLCH                   | Usage             |
| ----------- | ----------------------- | ----------------- |
| Void Black  | `oklch(0.08 0.02 260)`  | Fond principal    |
| Deep Void   | `oklch(0.05 0.01 270)`  | Fonds secondaires |
| Marble Base | `oklch(0.15 0.015 260)` | Surfaces élevées  |
| Marble Vein | `oklch(0.22 0.02 255)`  | Bordures subtiles |

### Couleurs Agents

| Agent               | Couleur  | OKLCH                  |
| ------------------- | -------- | ---------------------- |
| Architecte (DIA-01) | Cyan     | `oklch(0.75 0.25 195)` |
| Oracle (DIA-02)     | Magenta  | `oklch(0.72 0.28 330)` |
| Forge (DIA-03)      | Or       | `oklch(0.78 0.22 85)`  |
| Nyx (DIA-04)        | Violet   | `oklch(0.68 0.24 295)` |
| Ares (DIA-05)       | Rouge    | `oklch(0.65 0.26 25)`  |
| Gaia (DIA-06)       | Vert     | `oklch(0.72 0.23 145)` |
| Hermès (DIA-07)     | Ambre    | `oklch(0.76 0.20 75)`  |
| Héphaïstos (DIA-08) | Coral    | `oklch(0.70 0.24 35)`  |
| Athéna (DIA-09)     | Émeraude | `oklch(0.75 0.21 155)` |
| Poséidon (DIA-10)   | Saphir   | `oklch(0.73 0.23 245)` |
| Aphrodite (DIA-11)  | Rose     | `oklch(0.71 0.26 355)` |
| Zeus (DIA-12)       | Lime     | `oklch(0.78 0.19 125)` |

---

## 9. RÉSUMÉ CRÉATIF

### Vision d'Ensemble

Le **Système DIA** est une **cathédrale numérique** où:

1. **L'Antiquité Grecque** rencontre le **Cyberpunk Néon**
2. **12 Agents Divins** incarnent des fonctions technologiques
3. **L'Orbite Fractale** est le cœur battant du système
4. **Chaque Pixel** respire la mythologie et la technologie

### Principes Directeurs

- **Coherence Mythologique**: Chaque élément visuel a une justification dans la mythologie grecque
- **Technologie Éthérée**: Les effets sont spectaculaires mais jamais lourds
- **Réactivité Divine**: Chaque interaction déclenche une réponse mémorable
- **Immersion Totale**: Le mode immersif transforme l'utilisateur en explorateur de l'Olympe Numérique

### Prochaines Étapes

1. Implémenter le système de particules de base
2. Créer les symboles SVG pour chaque agent
3. Développer l'orbite fractale avec les 4 strates
4. Ajouter les effets de glow et hover
5. Concevoir et implémenter le mode immersif

---

_"Dans le néon, nous trouvons les dieux. Dans le code, nous leur donnons forme."_

**— L'Architecte du Système DIA**
