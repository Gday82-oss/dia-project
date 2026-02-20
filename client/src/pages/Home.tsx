/* Design Philosophy: Cyberpunk Néo-Grec — Page d'accueil
 * - Fond cosmique sombre avec bruit stellaire
 * - Chaque carte d'agent utilise sa propre skin (palette, formes, effets)
 * - Au survol, l'aura de l'agent envahit brièvement l'UI
 * - Glassmorphism + halos + micro-animations
 */

import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { agents, diaCore, getAgentTheme } from "@features/agents/agent.data";
import AgentCard from "@features/agents/components/AgentCard";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);
  const hoveredTheme = hoveredAgent ? getAgentTheme(hoveredAgent) : null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fond cosmique dynamique — change d'aura au survol */}
      <AnimatePresence>
        {hoveredTheme && (
          <motion.div
            key={hoveredAgent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 50%, ${hoveredTheme.palette.glow}12 0%, transparent 60%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Fond stellaire permanent */}
      <div className="fixed inset-0 z-0">
        {/* Bruit stellaire subtil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 20px 30px, #ffffff 0%, transparent 100%),
                           radial-gradient(1px 1px at 40px 70px, #ffffff 0%, transparent 100%),
                           radial-gradient(1px 1px at 50px 160px, #ffffff 0%, transparent 100%),
                           radial-gradient(1px 1px at 90px 40px, #ffffff 0%, transparent 100%),
                           radial-gradient(1px 1px at 130px 80px, #ffffff 0%, transparent 100%),
                           radial-gradient(1px 1px at 160px 120px, #ffffff 0%, transparent 100%)`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* Filaments lumineux */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            background: `linear-gradient(217deg, rgba(0,212,255,0.1), transparent 70%),
                       linear-gradient(127deg, rgba(255,0,170,0.08), transparent 70%),
                       linear-gradient(336deg, rgba(255,51,102,0.06), transparent 70%)`,
          }}
        />
      </div>

      {/* Ligne verticale décorative */}
      <div className="fixed right-8 top-0 bottom-0 w-px z-10 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d4ff30] to-transparent" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 container py-12 md:py-16 lg:py-20">
        {/* Header */}
        <header className="mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tech-text tracking-wider">
              <span style={{ color: "#00d4ff" }}>DIA</span>
              <span className="text-foreground/40 mx-3">/</span>
              <span style={{ color: "#ff00aa" }}>GDAY</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mb-2">
              Noyau humain — <span className="tech-text text-xs">GEN012</span>{" "}
              comme extensions fonctionnelles
            </p>
            <p className="text-xs text-muted-foreground/60 max-w-xl mb-8 italic">
              {diaCore.projection}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/intro"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff334420] border border-[#ff334450] text-sm tech-text hover:bg-[#ff334440] hover:border-[#ff3344] transition-all duration-300 rounded-sm"
            >
              Introduction <span style={{ color: "#ff3344" }}>→</span>
            </Link>
            <Link
              href="/fractal"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00d4ff15] border border-[#00d4ff40] text-sm tech-text hover:bg-[#00d4ff30] hover:border-[#00d4ff] transition-all duration-300 rounded-sm"
            >
              Visualisation Fractale <span style={{ color: "#00d4ff" }}>→</span>
            </Link>
            <Link
              href="/canon"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff00aa15] border border-[#ff00aa40] text-sm tech-text hover:bg-[#ff00aa30] hover:border-[#ff00aa] transition-all duration-300 rounded-sm"
            >
              Canon Fractal <span style={{ color: "#ff00aa" }}>→</span>
            </Link>
          </motion.div>
        </header>

        {/* Grille des agents — chaque carte a sa propre skin */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {agents.map((agent, index) => {
            const theme = getAgentTheme(agent.code);
            if (!theme) return null;

            return (
              <motion.div
                key={agent.code}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <AgentCard
                  agent={agent}
                  theme={theme}
                  isHovered={hoveredAgent === agent.code}
                  onMouseEnter={() => setHoveredAgent(agent.code)}
                  onMouseLeave={() => setHoveredAgent(null)}
                />
              </motion.div>
            );
          })}
        </div>

        {/* DIA Core — Spirale centrale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 relative"
        >
          <div
            className="relative p-8 md:p-10 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(12,12,20,0.9) 0%, rgba(20,16,30,0.9) 100%)",
              border: "1px solid rgba(96, 165, 250, 0.2)",
              borderRadius: "4px",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Spirale décorative */}
            <div className="absolute top-4 right-4 opacity-10">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <path
                  d="M60 10 C90 10, 110 30, 110 60 C110 90, 90 110, 60 110 C30 110, 10 90, 10 60 C10 40, 25 25, 45 20 C65 15, 85 25, 90 45 C95 65, 85 85, 65 90 C45 95, 30 85, 25 65 C20 50, 30 35, 50 30 C65 25, 80 35, 80 50"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#60a5fa] animate-pulse" />
              <h2
                className="tech-text text-lg tracking-widest"
                style={{ color: "#60a5fa" }}
              >
                DIA / DERA — Σπείρα
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed mb-4">
              {diaCore.description}
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              {diaCore.functions.map((fn, i) => (
                <span
                  key={fn}
                  className="px-3 py-1.5"
                  style={{
                    background: "rgba(96, 165, 250, 0.08)",
                    border: "1px solid rgba(96, 165, 250, 0.2)",
                    borderRadius: "2px",
                    color: "#a0c4f0",
                  }}
                >
                  {fn}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[#00d4ff10] text-center">
          <p className="text-xs text-muted-foreground/40 tech-text tracking-widest">
            DIA — Système fractal d'agents cognitifs — 12 démiurges en évolution
            perpétuelle
          </p>
        </footer>
      </div>
    </div>
  );
}
