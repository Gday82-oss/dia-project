/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SYSTÈME DIA - CONFIGURATION TAILWIND
 * Extensions pour le design system cyberpunk néo-grec
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════════════════
      // COULEURS PERSONNALISÉES
      // ═══════════════════════════════════════════════════════════════════════
      colors: {
        // Fonds cosmiques
        "dia-void": "oklch(0.08 0.02 260)",
        "dia-deep-void": "oklch(0.05 0.01 270)",
        "dia-cosmic": "oklch(0.03 0.005 280)",

        // Marbre digital
        "dia-marble": {
          DEFAULT: "oklch(0.15 0.015 260)",
          vein: "oklch(0.22 0.02 255)",
          highlight: "oklch(0.28 0.025 250)",
        },

        // Agents - Cyan (Architecte)
        "dia-cyan": {
          DEFAULT: "oklch(0.75 0.25 195)",
          secondary: "oklch(0.65 0.20 195)",
          glow: "oklch(0.85 0.30 195)",
          dark: "oklch(0.25 0.15 195)",
        },

        // Agents - Magenta (Oracle)
        "dia-magenta": {
          DEFAULT: "oklch(0.72 0.28 330)",
          secondary: "oklch(0.62 0.23 330)",
          glow: "oklch(0.82 0.33 330)",
          dark: "oklch(0.22 0.18 330)",
        },

        // Agents - Or (Forge)
        "dia-gold": {
          DEFAULT: "oklch(0.78 0.22 85)",
          secondary: "oklch(0.68 0.17 85)",
          glow: "oklch(0.88 0.27 85)",
          dark: "oklch(0.28 0.12 85)",
        },

        // Agents - Violet (Nyx)
        "dia-violet": {
          DEFAULT: "oklch(0.68 0.24 295)",
          secondary: "oklch(0.58 0.19 295)",
          glow: "oklch(0.78 0.29 295)",
          dark: "oklch(0.18 0.14 295)",
        },

        // Agents - Rouge (Ares)
        "dia-red": {
          DEFAULT: "oklch(0.65 0.26 25)",
          secondary: "oklch(0.55 0.21 25)",
          glow: "oklch(0.75 0.31 25)",
          dark: "oklch(0.15 0.16 25)",
        },

        // Agents - Vert (Gaia)
        "dia-green": {
          DEFAULT: "oklch(0.72 0.23 145)",
          secondary: "oklch(0.62 0.18 145)",
          glow: "oklch(0.82 0.28 145)",
          dark: "oklch(0.22 0.13 145)",
        },

        // Agents - Ambre (Hermès)
        "dia-amber": {
          DEFAULT: "oklch(0.76 0.20 75)",
          secondary: "oklch(0.66 0.15 75)",
          glow: "oklch(0.86 0.25 75)",
          dark: "oklch(0.26 0.10 75)",
        },

        // Agents - Coral (Héphaïstos)
        "dia-coral": {
          DEFAULT: "oklch(0.70 0.24 35)",
          secondary: "oklch(0.60 0.19 35)",
          glow: "oklch(0.80 0.29 35)",
          dark: "oklch(0.20 0.14 35)",
        },

        // Agents - Émeraude (Athéna)
        "dia-emerald": {
          DEFAULT: "oklch(0.75 0.21 155)",
          secondary: "oklch(0.65 0.16 155)",
          glow: "oklch(0.85 0.26 155)",
          dark: "oklch(0.25 0.11 155)",
        },

        // Agents - Saphir (Poséidon)
        "dia-sapphire": {
          DEFAULT: "oklch(0.73 0.23 245)",
          secondary: "oklch(0.63 0.18 245)",
          glow: "oklch(0.83 0.28 245)",
          dark: "oklch(0.23 0.13 245)",
        },

        // Agents - Rose (Aphrodite)
        "dia-rose": {
          DEFAULT: "oklch(0.71 0.26 355)",
          secondary: "oklch(0.61 0.21 355)",
          glow: "oklch(0.81 0.31 355)",
          dark: "oklch(0.21 0.16 355)",
        },

        // Agents - Lime (Zeus)
        "dia-lime": {
          DEFAULT: "oklch(0.78 0.19 125)",
          secondary: "oklch(0.68 0.14 125)",
          glow: "oklch(0.88 0.24 125)",
          dark: "oklch(0.28 0.09 125)",
        },
      },

      // ═══════════════════════════════════════════════════════════════════════
      // TYPOGRAPHIE
      // ═══════════════════════════════════════════════════════════════════════
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        "space-mono": ["Space Mono", "monospace"],
        "noto-sans": ["Noto Sans", "sans-serif"],
      },

      // ═══════════════════════════════════════════════════════════════════════
      // ESPACEMENT
      // ═══════════════════════════════════════════════════════════════════════
      spacing: {
        18: "4.5rem", // 72px
        22: "5.5rem", // 88px
        26: "6.5rem", // 104px - Nombre d'or
        42: "10.5rem", // 168px - Fibonacci
      },

      // ═══════════════════════════════════════════════════════════════════════
      // ANIMATIONS
      // ═══════════════════════════════════════════════════════════════════════
      animation: {
        // Glow pulses
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "pulse-glow-slow": "pulse-glow 4s ease-in-out infinite",
        "pulse-glow-fast": "pulse-glow 1s ease-in-out infinite",

        // Float
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",

        // Scanlines
        scanlines: "scanline-shift 8s linear infinite",
        "scanline-scroll": "scanline-scroll 2s linear infinite",

        // Hologram flicker
        hologram: "hologram-flicker 4s infinite",

        // Ripple
        ripple: "ripple-expand 600ms ease-out forwards",

        // Spin variants
        "spin-slow": "spin 20s linear infinite",
        "spin-reverse": "spin-reverse 15s linear infinite",

        // Breathe
        breathe: "breathe 3s ease-in-out infinite",

        // Shimmer
        shimmer: "shimmer 2s linear infinite",

        // Glitch
        glitch: "glitch 300ms ease-in-out",
      },

      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            filter: "brightness(1)",
          },
          "50%": {
            opacity: "0.8",
            filter: "brightness(1.2)",
          },
        },

        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },

        "scanline-shift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100vh" },
        },

        "scanline-scroll": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(6px)" },
        },

        "hologram-flicker": {
          "0%, 100%": { opacity: "1" },
          "5%": { opacity: "0.8" },
          "10%": { opacity: "1" },
          "15%": { opacity: "0.9" },
          "20%": { opacity: "1" },
          "50%": { opacity: "0.95" },
          "52%": { opacity: "0.7" },
          "54%": { opacity: "0.95" },
          "90%": { opacity: "1" },
          "92%": { opacity: "0.85" },
          "94%": { opacity: "1" },
        },

        "ripple-expand": {
          to: {
            transform: "scale(4)",
            opacity: "0",
          },
        },

        "spin-reverse": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },

        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },

        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },

        glitch: {
          "0%": { transform: "translate(0)", filter: "none" },
          "20%": { transform: "translate(-10px, 5px)" },
          "40%": { transform: "translate(10px, -5px)" },
          "60%": { transform: "translate(-5px, 10px)" },
          "80%": { transform: "translate(5px, -10px)" },
          "100%": { transform: "translate(0)", filter: "none" },
        },
      },

      // ═══════════════════════════════════════════════════════════════════════
      // DURÉES DE TRANSITION
      // ═══════════════════════════════════════════════════════════════════════
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
        1000: "1000ms",
        2000: "2000ms",
      },

      // ═══════════════════════════════════════════════════════════════════════
      // FONCTIONS D'EASING
      // ═══════════════════════════════════════════════════════════════════════
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        dramatic: "cubic-bezier(0.87, 0, 0.13, 1)",
        elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },

      // ═══════════════════════════════════════════════════════════════════════
      // OMBRES
      // ═══════════════════════════════════════════════════════════════════════
      boxShadow: {
        // Glow shadows
        "glow-cyan":
          "0 0 10px oklch(0.75 0.25 195 / 0.5), 0 0 20px oklch(0.75 0.25 195 / 0.3), 0 0 40px oklch(0.75 0.25 195 / 0.1)",
        "glow-magenta":
          "0 0 10px oklch(0.72 0.28 330 / 0.5), 0 0 20px oklch(0.72 0.28 330 / 0.3), 0 0 40px oklch(0.72 0.28 330 / 0.1)",
        "glow-gold":
          "0 0 10px oklch(0.78 0.22 85 / 0.5), 0 0 20px oklch(0.78 0.22 85 / 0.3), 0 0 40px oklch(0.78 0.22 85 / 0.1)",
        "glow-violet":
          "0 0 10px oklch(0.68 0.24 295 / 0.5), 0 0 20px oklch(0.68 0.24 295 / 0.3), 0 0 40px oklch(0.68 0.24 295 / 0.1)",
        "glow-red":
          "0 0 10px oklch(0.65 0.26 25 / 0.5), 0 0 20px oklch(0.65 0.26 25 / 0.3), 0 0 40px oklch(0.65 0.26 25 / 0.1)",
        "glow-green":
          "0 0 10px oklch(0.72 0.23 145 / 0.5), 0 0 20px oklch(0.72 0.23 145 / 0.3), 0 0 40px oklch(0.72 0.23 145 / 0.1)",

        // Intense glows
        "glow-intense-cyan":
          "0 0 20px oklch(0.75 0.25 195 / 0.8), 0 0 50px oklch(0.75 0.25 195 / 0.5), 0 0 100px oklch(0.75 0.25 195 / 0.2)",
        "glow-intense-magenta":
          "0 0 20px oklch(0.72 0.28 330 / 0.8), 0 0 50px oklch(0.72 0.28 330 / 0.5), 0 0 100px oklch(0.72 0.28 330 / 0.2)",
        "glow-intense-gold":
          "0 0 20px oklch(0.78 0.22 85 / 0.8), 0 0 50px oklch(0.78 0.22 85 / 0.5), 0 0 100px oklch(0.78 0.22 85 / 0.2)",

        // Depth shadows
        depth:
          "0 4px 6px oklch(0 0 0 / 0.3), 0 10px 20px oklch(0 0 0 / 0.4), 0 25px 50px oklch(0 0 0 / 0.5)",
        levitate:
          "0 20px 40px oklch(0 0 0 / 0.4), 0 40px 80px oklch(0 0 0 / 0.3)",

        // Inner glows
        "inner-glow-cyan": "inset 0 0 20px oklch(0.75 0.25 195 / 0.3)",
        "inner-glow-magenta": "inset 0 0 20px oklch(0.72 0.28 330 / 0.3)",
        "inner-glow-gold": "inset 0 0 20px oklch(0.78 0.22 85 / 0.3)",
      },

      // ═══════════════════════════════════════════════════════════════════════
      // BACKDROP BLUR
      // ═══════════════════════════════════════════════════════════════════════
      backdropBlur: {
        xs: "2px",
      },

      // ═══════════════════════════════════════════════════════════════════════
      // Z-INDEX
      // ═══════════════════════════════════════════════════════════════════════
      zIndex: {
        background: "-100",
        particles: "-50",
        overlay: "50",
        modal: "100",
        immersive: "1000",
        cinematic: "9999",
      },

      // ═══════════════════════════════════════════════════════════════════════
      // GRADIENTS
      // ═══════════════════════════════════════════════════════════════════════
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        // Divine gradients
        "divine-dawn":
          "linear-gradient(135deg, oklch(0.75 0.25 195) 0%, oklch(0.72 0.28 330) 50%, oklch(0.78 0.22 85) 100%)",
        "divine-void":
          "radial-gradient(ellipse at center, oklch(0.12 0.03 260) 0%, oklch(0.06 0.015 270) 50%, oklch(0.03 0.005 280) 100%)",
        "divine-ether":
          "conic-gradient(from 0deg, oklch(0.75 0.25 195), oklch(0.72 0.28 330), oklch(0.78 0.22 85), oklch(0.68 0.24 295), oklch(0.75 0.25 195))",

        // Agent gradients
        "agent-cyan":
          "linear-gradient(135deg, oklch(0.85 0.30 195) 0%, oklch(0.65 0.20 195) 100%)",
        "agent-magenta":
          "linear-gradient(135deg, oklch(0.82 0.33 330) 0%, oklch(0.62 0.23 330) 100%)",
        "agent-gold":
          "linear-gradient(135deg, oklch(0.88 0.27 85) 0%, oklch(0.68 0.17 85) 100%)",
      },

      // ═══════════════════════════════════════════════════════════════════════
      // BORDURES
      // ═══════════════════════════════════════════════════════════════════════
      borderWidth: {
        3: "3px",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PLUGINS
  // ═══════════════════════════════════════════════════════════════════════════
  plugins: [
    // Plugin pour les utilitaires personnalisés
    function ({ addUtilities, addComponents, theme }) {
      // Utilitaires de glow
      const glowUtilities = {};
      const agents = [
        "cyan",
        "magenta",
        "gold",
        "violet",
        "red",
        "green",
        "amber",
        "coral",
        "emerald",
        "sapphire",
        "rose",
        "lime",
      ];

      agents.forEach(agent => {
        glowUtilities[`.glow-${agent}`] = {
          boxShadow: `0 0 10px oklch(var(--dia-${agent}-lch) / 0.5), 0 0 20px oklch(var(--dia-${agent}-lch) / 0.3), 0 0 40px oklch(var(--dia-${agent}-lch) / 0.1)`,
        };
        glowUtilities[`.glow-text-${agent}`] = {
          textShadow: `0 0 10px oklch(var(--dia-${agent}-lch)), 0 0 20px oklch(var(--dia-${agent}-lch) / 0.8)`,
        };
        glowUtilities[`.border-glow-${agent}`] = {
          border: `1px solid oklch(var(--dia-${agent}-lch) / 0.6)`,
        };
      });

      addUtilities(glowUtilities);

      // Composants de glassmorphisme
      addComponents({
        ".glass": {
          background: "oklch(0.15 0.015 260 / 0.7)",
          backdropFilter: "blur(12px)",
          border: "1px solid oklch(1 0 0 / 0.1)",
        },
        ".glass-strong": {
          background: "oklch(0.15 0.015 260 / 0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid oklch(1 0 0 / 0.15)",
        },
        ".hologram": {
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, currentColor 3px, currentColor 6px)",
            opacity: "0.1",
            pointerEvents: "none",
          },
        },
        ".scanlines": {
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: "0",
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0 0 0 / 0.03) 2px, oklch(0 0 0 / 0.03) 4px)",
            pointerEvents: "none",
            zIndex: "50",
          },
        },
        ".gpu-accelerated": {
          transform: "translateZ(0)",
          willChange: "transform, opacity",
        },
      });
    },
  ],
};
