# 🎬 SYSTÈME DIA - ANIMATIONS & INTERACTIONS

## Spécifications Techniques des Effets Immersifs

---

# I. SYSTÈME DE PARTICULES DIVINES

## Configuration de Base

```typescript
// Core Particle System
interface DivineParticleSystem {
  // Particules de base toujours présentes
  ambient: {
    count: 50; // 20 sur mobile
    color: "#FFD700";
    size: { min: 1; max: 3 };
    opacity: 0.3;
    speed: 0.2;
    drift: true; // Mouvement aléatoire
  };

  // Particules réactives aux interactions
  reactive: {
    count: 30; // 10 sur mobile
    trigger: "hover|click|scroll";
    color: "agentColor"; // Couleur de l'agent concerné
    size: { min: 2; max: 6 };
    opacity: 0.6;
    speed: 1.5;
    lifetime: 2000; // ms
  };

  // Particules de célébration
  celebration: {
    count: 100; // 40 sur mobile
    trigger: "achievement|levelUp|secret";
    colors: ["#FFD700", "#00D4FF", "#B829DD", "#FF006E"];
    size: { min: 3; max: 8 };
    opacity: 0.8;
    speed: 3;
    gravity: 0.1;
    lifetime: 3000;
  };
}
```

## Types de Particules

### 1. Poussière d'Olympe (Ambiance)

```css
.olympus-dust {
  /* Flotte lentement, monte légèrement */
  animation: float 8s ease-in-out infinite;
  filter: blur(0.5px);
  opacity: 0.2-0.4;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(-5px) translateX(-5px);
  }
  75% {
    transform: translateY(-15px) translateX(3px);
  }
}
```

### 2. Étincelles d'Interaction

```css
.interaction-spark {
  /* Émet depuis le point de contact */
  animation: spark-burst 0.6s ease-out forwards;
}

@keyframes spark-burst {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(0) rotate(360deg) translateY(-30px);
    opacity: 0;
  }
}
```

### 3. Runes Grecques Matérialisées

```css
.materializing-rune {
  /* Apparaît lettre par lettre */
  animation: rune-materialize 1s ease-out forwards;
  font-family: "GFS Neohellenic", serif;
  text-shadow: 0 0 10px currentColor;
}

@keyframes rune-materialize {
  0% {
    opacity: 0;
    filter: blur(10px);
    transform: scale(2);
  }
  50% {
    opacity: 0.5;
    filter: blur(2px);
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
  }
}
```

---

# II. ANIMATIONS DE L'INTERFACE

## Transitions de Page

### Transition "Porte Olympique"

```typescript
interface PageTransition {
  type: "olympic-door";
  duration: 800;
  easing: "cubic-bezier(0.34, 1.56, 0.64, 1)";

  sequence: [
    { at: 0; effect: "current-page-brightness-0.5" },
    { at: 200; effect: "vertical-split-reveal" },
    { at: 400; effect: "neon-flash" },
    { at: 600; effect: "new-page-fade-in" },
    { at: 800; effect: "complete" },
  ];
}
```

### Transition "Téléportation"

```typescript
interface TeleportTransition {
  type: "divine-teleport";
  duration: 600;

  sequence: [
    { at: 0; effect: "pixelate-current" },
    { at: 200; effect: "dissolve-to-particles" },
    { at: 300; effect: "matrix-stream" },
    { at: 400; effect: "particles-reform" },
    { at: 600; effect: "new-page-solid" },
  ];
}
```

## Micro-interactions

### Boutons Divins

```css
.divine-button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.divine-button::before {
  /* Effet de remplissage liquide */
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(180deg, transparent, var(--neon-color));
  transition: height 0.3s ease;
}

.divine-button:hover::before {
  height: 100%;
}

.divine-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 4px 20px var(--neon-glow),
    0 0 40px var(--neon-glow-soft);
}

.divine-button:active {
  transform: translateY(0) scale(0.98);
}
```

### Cartes d'Agents

```css
.agent-card {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.agent-card:hover {
  transform: translateY(-8px) scale(1.02) rotateX(5deg);
  box-shadow:
    0 20px 40px rgba(0, 212, 255, 0.2),
    0 0 60px rgba(0, 212, 255, 0.1);
}

.agent-card::after {
  /* Halo pulsant */
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(45deg, var(--agent-color), transparent);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: -1;
}

.agent-card:hover::after {
  opacity: 0.5;
  animation: halo-pulse 2s ease-in-out infinite;
}

@keyframes halo-pulse {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}
```

---

# III. ANIMATIONS DES AGENTS

## États d'Animation

### 1. Repos (Idle)

```css
.agent-idle {
  animation: divine-breath 4s ease-in-out infinite;
}

@keyframes divine-breath {
  0%,
  100% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.02);
    filter: brightness(1.1);
  }
}

/* Néons qui pulsent */
.agent-idle .neon-border {
  animation: neon-pulse 2s ease-in-out infinite;
}

@keyframes neon-pulse {
  0%,
  100% {
    box-shadow:
      0 0 5px var(--neon-color),
      0 0 10px var(--neon-color),
      0 0 20px var(--neon-color);
  }
  50% {
    box-shadow:
      0 0 10px var(--neon-color),
      0 0 20px var(--neon-color),
      0 0 40px var(--neon-color);
  }
}
```

### 2. Attention (Focus)

```css
.agent-focused {
  animation: divine-attention 0.6s ease-out;
}

@keyframes divine-attention {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.05) rotate(-2deg);
  }
  60% {
    transform: scale(1.08) rotate(2deg);
  }
  100% {
    transform: scale(1.05);
  }
}

/* Yeux qui brillent */
.agent-focused .eyes {
  animation: eyes-glow 2s ease-in-out infinite;
}

@keyframes eyes-glow {
  0%,
  100% {
    filter: drop-shadow(0 0 5px var(--eye-color));
  }
  50% {
    filter: drop-shadow(0 0 15px var(--eye-color));
  }
}
```

### 3. Réponse (Speaking)

```css
.agent-speaking {
  animation: divine-speech 0.3s ease-in-out infinite alternate;
}

@keyframes divine-speech {
  0% {
    transform: translateY(0);
    filter: brightness(1);
  }
  100% {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }
}

/* Aura de parole */
.agent-speaking::before {
  content: "";
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--speech-color) 0%, transparent 70%);
  opacity: 0.3;
  animation: speech-aura 0.5s ease-in-out infinite alternate;
}

@keyframes speech-aura {
  0% {
    transform: scale(0.9);
    opacity: 0.2;
  }
  100% {
    transform: scale(1.1);
    opacity: 0.4;
  }
}
```

### 4. Émotion Positive (Joy)

```css
.agent-joy {
  animation: divine-joy 1s ease-out;
}

@keyframes divine-joy {
  0% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.1) rotate(-5deg) translateY(-10px);
  }
  50% {
    transform: scale(1.15) rotate(5deg) translateY(-15px);
  }
  75% {
    transform: scale(1.1) rotate(-3deg) translateY(-10px);
  }
  100% {
    transform: scale(1.05) rotate(0deg);
  }
}

/* Particules dorées */
.agent-joy::after {
  /* Émet des particules dorées */
  animation: emit-gold-particles 1s ease-out;
}
```

### 5. Émotion Négative (Anger)

```css
.agent-anger {
  animation: divine-anger 0.5s ease-in-out;
}

@keyframes divine-anger {
  0%,
  100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-5px) rotate(-2deg);
  }
  40% {
    transform: translateX(5px) rotate(2deg);
  }
  60% {
    transform: translateX(-3px) rotate(-1deg);
  }
  80% {
    transform: translateX(3px) rotate(1deg);
  }
}

/* Rouge pulsant */
.agent-anger {
  filter: drop-shadow(0 0 20px #ff006e);
  animation: anger-glow 0.3s ease-in-out infinite alternate;
}

@keyframes anger-glow {
  0% {
    filter: drop-shadow(0 0 10px #ff006e);
  }
  100% {
    filter: drop-shadow(0 0 30px #ff006e);
  }
}
```

---

# IV. ANIMATIONS DE LA FRACTALE

## Orbites Dynamiques

### Configuration des Orbites

```typescript
interface FractalOrbitConfig {
  center: { x: 50%, y: 50% },
  layers: [
    {
      name: 'inner-circle',
      radius: '15%',
      speed: 20,        // secondes pour 360°
      agents: ['Zeus', 'Héra'],
      direction: 'clockwise'
    },
    {
      name: 'middle-circle',
      radius: '30%',
      speed: 35,
      agents: ['Poséidon', 'Hadès', 'Déméter'],
      direction: 'counter-clockwise'
    },
    {
      name: 'outer-circle',
      radius: '45%',
      speed: 50,
      agents: ['Athéna', 'Apollon', 'Artémis', 'Arès', 'Aphrodite', 'Héphaïstos', 'Hermès', 'Dionysos'],
      direction: 'clockwise'
    }
  ]
}
```

### Animation d'Orbite

```css
.orbiting-agent {
  position: absolute;
  animation: orbit var(--orbit-duration) linear infinite;
  animation-delay: var(--orbit-delay);
}

@keyframes orbit {
  from {
    transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
  }
}

/* L'agent garde son orientation */
.orbiting-agent .agent-content {
  animation: counter-rotate var(--orbit-duration) linear infinite;
}

@keyframes counter-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
```

## Connexions entre Agents

### Lignes de Relation

```css
.agent-connection {
  stroke: var(--connection-color);
  stroke-width: 2;
  stroke-dasharray: 5, 5;
  opacity: 0.3;
  animation: connection-flow 3s linear infinite;
}

@keyframes connection-flow {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -20;
  }
}

/* Connexion active (hover) */
.agent-connection.active {
  stroke-width: 3;
  opacity: 0.8;
  filter: drop-shadow(0 0 5px var(--connection-color));
}
```

### Effet de Traînée

```css
.orbit-trail {
  position: absolute;
  width: var(--orbit-radius);
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--trail-color),
    transparent
  );
  opacity: 0.2;
  animation: trail-fade 2s ease-out forwards;
}

@keyframes trail-fade {
  0% {
    opacity: 0.4;
    transform: scaleX(1);
  }
  100% {
    opacity: 0;
    transform: scaleX(0.5);
  }
}
```

---

# V. EFFETS SPÉCIAUX

## Scan Lines (Lignes de Scan)

```css
.scan-lines {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
  z-index: 9999;
}

/* Scan line animée */
.scan-line-animated {
  position: fixed;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--neon-color),
    transparent
  );
  opacity: 0.1;
  animation: scan 8s linear infinite;
}

@keyframes scan {
  0% {
    top: -2px;
  }
  100% {
    top: 100vh;
  }
}
```

## Effet Matrix (Code Grec)

```css
.matrix-rain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  opacity: 0.05;
}

.matrix-column {
  position: absolute;
  top: -100%;
  font-family: "GFS Neohellenic", monospace;
  font-size: 14px;
  color: var(--neon-blue);
  text-shadow: 0 0 5px var(--neon-blue);
  animation: matrix-fall var(--fall-duration) linear infinite;
  animation-delay: var(--fall-delay);
}

@keyframes matrix-fall {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  95% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(200vh);
    opacity: 0;
  }
}
```

## Glitch Effect

```css
.divine-glitch {
  position: relative;
}

.divine-glitch::before,
.divine-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.divine-glitch::before {
  animation: glitch-1 0.3s infinite linear alternate-reverse;
  color: #ff006e;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

.divine-glitch::after {
  animation: glitch-2 0.3s infinite linear alternate-reverse;
  color: #00d4ff;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}

@keyframes glitch-1 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  60% {
    transform: translate(-1px, 1px);
  }
  80% {
    transform: translate(1px, -1px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes glitch-2 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(2px, -2px);
  }
  40% {
    transform: translate(-2px, 2px);
  }
  60% {
    transform: translate(1px, -1px);
  }
  80% {
    transform: translate(-1px, 1px);
  }
  100% {
    transform: translate(0);
  }
}
```

---

# VI. ANIMATIONS DE TEXTE

## Écriture Machine à Écrire Divine

```typescript
interface DivineTypewriter {
  text: string;
  speed: 30; // ms par caractère
  variation: 10; // variation aléatoire

  effects: {
    onChar: "glow-pulse";
    onWord: "micro-pause";
    onSentence: "breath-pause";
  };
}
```

```css
.divine-typewriter {
  overflow: hidden;
  border-right: 2px solid var(--neon-color);
  animation: cursor-blink 0.8s step-end infinite;
}

@keyframes cursor-blink {
  0%,
  100% {
    border-color: var(--neon-color);
  }
  50% {
    border-color: transparent;
  }
}

/* Effet de brillance sur chaque lettre */
.divine-typewriter .char {
  animation: char-appear 0.2s ease-out;
  display: inline-block;
}

@keyframes char-appear {
  0% {
    opacity: 0;
    transform: translateY(5px);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
```

## Texte qui Brille

```css
.shining-text {
  background: linear-gradient(
    90deg,
    var(--text-color) 0%,
    var(--neon-color) 50%,
    var(--text-color) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-shine 3s linear infinite;
}

@keyframes text-shine {
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: -200% center;
  }
}
```

---

# VII. ANIMATIONS MOBILES SPÉCIFIQUES

## Touch Feedback

```css
@media (pointer: coarse) {
  .touch-feedback {
    position: relative;
    overflow: hidden;
  }

  .touch-feedback::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, var(--touch-color) 0%, transparent 70%);
    border-radius: 50%;
    transform: scale(0);
    opacity: 0;
    pointer-events: none;
  }

  .touch-feedback:active::after {
    animation: touch-ripple 0.4s ease-out;
  }
}

@keyframes touch-ripple {
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
```

## Pull-to-Refresh Divin

```css
.divine-pull-refresh {
  position: relative;
  overflow: hidden;
}

.pull-indicator {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
}

.pull-indicator::before {
  content: "⚡";
  font-size: 24px;
  animation: pull-charge 0.5s ease-in-out infinite alternate;
}

@keyframes pull-charge {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.2);
    opacity: 1;
    filter: drop-shadow(0 0 10px var(--neon-color));
  }
}

/* Quand refresh déclenché */
.pull-indicator.refreshing::before {
  content: "⟳";
  animation: refresh-spin 1s linear infinite;
}

@keyframes refresh-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

---

# VIII. PERFORMANCE & OPTIMISATION

## Règles d'Or

### 1. Utiliser `transform` et `opacity`

```css
/* ✅ BIEN - GPU accelerated */
.animated-element {
  transform: translateX(100px);
  opacity: 0.5;
}

/* ❌ ÉVITER - CPU intensive */
.animated-element {
  left: 100px;
  filter: blur(5px);
}
```

### 2. `will-change` Stratégique

```css
/* Ajouter avant l'animation */
.element-about-to-animate {
  will-change: transform, opacity;
}

/* Retirer après */
.element-animation-complete {
  will-change: auto;
}
```

### 3. Réduire sur Mobile

```typescript
const particleConfig = {
  desktop: { count: 100, quality: "high" },
  tablet: { count: 50, quality: "medium" },
  mobile: { count: 25, quality: "low" },
};

const animationConfig = {
  desktop: { duration: 1, easing: "smooth" },
  mobile: { duration: 0.5, easing: "simple" },
};
```

### 4. Intersection Observer pour Animations

```typescript
// N'animer que les éléments visibles
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  },
  { threshold: 0.1 }
);
```

---

# IX. TIMING & RYTHME

## Courbes d'Animation

```css
:root {
  /* Entrée douce, sortie rapide */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);

  /* Entrée rapide, sortie douce */
  --ease-in-expo: cubic-bezier(0.7, 0, 0.84, 0);

  /* Elasticité divine */
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* Dramatique */
  --ease-dramatic: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Smooth standard */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Durées Standard

| Type              | Desktop | Mobile |
| ----------------- | ------- | ------ |
| Micro-interaction | 150ms   | 100ms  |
| Transition        | 300ms   | 200ms  |
| Animation         | 500ms   | 300ms  |
| Dramatique        | 800ms   | 500ms  |
| Ambiance          | 3-8s    | 3-8s   |

---

_"L'animation n'est pas du décor, c'est du langage."_
_Chaque mouvement raconte une histoire._
_Chaque transition est un passage._
_Chaque effet est une émotion._
