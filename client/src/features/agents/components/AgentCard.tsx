/**
 * Carte agent DIA — Design cyberpunk néo-grec.
 * Chaque carte utilise la skin visuelle propre à l'agent (palette, effets, formes).
 */

import { Link } from "wouter";
import AgentAvatar3D from "@/components/AgentAvatar3D";
import type { Agent, AgentTheme } from "../agent.types";

interface AgentCardProps {
  agent: Agent;
  theme: AgentTheme;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function AgentCard({
  agent,
  theme,
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
}: AgentCardProps) {
  return (
    <Link
      href={`/agent/${agent.code.toLowerCase()}`}
      className="block group relative overflow-hidden transition-all duration-400"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        background: isHovered ? theme.palette.bg : "rgba(12, 12, 20, 0.7)",
        border: `1px solid ${isHovered ? theme.palette.accent + "80" : theme.palette.accent + "25"}`,
        borderRadius: theme.shapes.borderRadius,
        backdropFilter: "blur(12px)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered
          ? `0 0 20px ${theme.palette.glow}30, 0 0 40px ${theme.palette.glow}15, 0 8px 32px rgba(0,0,0,0.4)`
          : "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      {/* Pattern overlay spécifique à l'agent */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400"
        style={{
          backgroundImage: theme.effects.overlay,
          backgroundSize: agent.code === "AGT-001" ? "30px 30px" : undefined,
          opacity: isHovered ? 0.6 : 0.15,
        }}
      />

      {/* Scan line au survol */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-x-0 h-[1px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${theme.palette.accent}60, transparent)`,
              animation: "scan 2s linear infinite",
            }}
          />
        </div>
      )}

      {/* Contenu de la carte */}
      <div className="relative z-10 p-5 flex items-start gap-5">
        {/* Avatar 3D */}
        <div className="shrink-0">
          <AgentAvatar3D
            agentCode={agent.code}
            agentColor={theme.palette.accent}
            agentName={agent.name}
            size="md"
            showGlow={true}
            pauseOnHover={true}
          />
        </div>

        {/* Informations */}
        <div className="flex-1 min-w-0">
          {/* En-tête : code — nom */}
          <div className="mb-2">
            <span
              className="tech-text text-xs font-bold tracking-wider"
              style={{ color: theme.palette.accent }}
            >
              {agent.code} — {agent.name}
            </span>
          </div>

          {/* Nom grec */}
          <h2
            className="greek-text text-2xl md:text-3xl font-semibold mb-1 transition-colors duration-300"
            style={{
              color: isHovered ? theme.palette.accent : theme.palette.text,
            }}
          >
            {agent.greek}
          </h2>

          {/* Archétype */}
          <p
            className="text-xs font-medium mb-2 uppercase tracking-wider"
            style={{ color: theme.palette.text + "cc" }}
          >
            {theme.archetype} — {agent.title}
          </p>

          {/* Projection mentale */}
          <p
            className="text-xs leading-relaxed line-clamp-2"
            style={{ color: theme.palette.text + "88" }}
          >
            {agent.projection}
          </p>
        </div>
      </div>

      {/* Barre d'accent en bas */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.palette.accent}, transparent)`,
          opacity: isHovered ? 0.8 : 0.2,
        }}
      />
    </Link>
  );
}
