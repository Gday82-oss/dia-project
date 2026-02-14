/* Design Philosophy: Chaque agent a sa propre skin UI
 * - Fond, palette, formes et effets spécifiques à l'agent
 * - Glassmorphism avec teinte de l'agent
 * - Animations signature par agent
 * - Profondeur narrative enrichie
 */

import { useRoute, Link } from "wouter";
import { agents, strates, dialecticalAxes } from "@/data/agents";
import { getAgentTheme } from "@/data/agentThemes";
import { ArrowLeft, Zap, Layers, Compass, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import AgentAvatar3D from "@/components/AgentAvatar3D";

export default function AgentDetail() {
  const [, params] = useRoute("/agent/:code");
  const agentCode = params?.code?.toUpperCase();

  const agent = agents.find(a => a.code.toLowerCase() === agentCode?.toLowerCase());
  const theme = agent ? getAgentTheme(agent.code) : null;

  if (!agent || !theme) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#080810" }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 tech-text" style={{ color: "#00d4ff" }}>Agent non trouvé</h1>
          <Link href="/" className="text-sm hover:underline" style={{ color: "#00d4ff" }}>← Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  const strateInfo = strates[agent.strate];
  const axis = dialecticalAxes.find(ax => ax.agentA === agent.code || ax.agentB === agent.code);
  const partnerCode = axis ? (axis.agentA === agent.code ? axis.agentB : axis.agentA) : null;
  const partner = partnerCode ? agents.find(a => a.code === partnerCode) : null;
  const partnerTheme = partner ? getAgentTheme(partner.code) : null;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // Style de carte glassmorphism avec teinte agent
  const cardStyle = (extra?: React.CSSProperties): React.CSSProperties => ({
    background: `linear-gradient(135deg, ${theme.palette.primary}18 0%, rgba(12,12,20,0.85) 100%)`,
    border: `1px solid ${theme.palette.accent}30`,
    borderRadius: theme.shapes.borderRadius,
    backdropFilter: "blur(12px)",
    ...extra,
  });

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "#060608" }}>
      {/* Fond spécifique à l'agent */}
      <div className="fixed inset-0 z-0" style={{ background: theme.palette.bg }} />

      {/* Aura radiale de l'agent */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${theme.palette.glow}15 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 80%, ${theme.palette.primary}10 0%, transparent 50%)`,
        }}
      />

      {/* Pattern overlay spécifique */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: theme.effects.overlay,
          backgroundSize: agent.code === "AGT-001" ? "30px 30px" : undefined,
        }}
      />

      {/* Bruit stellaire */}
      <div className="fixed inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(1px 1px at 20px 30px, #ffffff 0%, transparent 100%),
                         radial-gradient(1px 1px at 80px 90px, #ffffff 0%, transparent 100%),
                         radial-gradient(1px 1px at 150px 50px, #ffffff 0%, transparent 100%)`,
        backgroundSize: '200px 200px',
      }} />

      {/* Contenu */}
      <div className="relative z-10 container py-8 md:py-12 max-w-5xl">
        {/* Navigation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-colors mb-8"
            style={{ color: theme.palette.text + "88" }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à la matrice</span>
          </Link>
        </motion.div>

        {/* Hero Card — Identité de l'agent */}
        <motion.div
          className="p-8 md:p-12 mb-8 relative overflow-hidden"
          style={cardStyle({ boxShadow: `0 0 40px ${theme.palette.glow}10` })}
          {...fadeIn}
        >
          {/* Pattern décoratif en arrière-plan */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{ backgroundImage: theme.effects.overlay }}
          />

          <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative z-10">
            <div className="flex-1">
              {/* Code + Gen */}
              <motion.div
                className="text-[10px] tech-text mb-3 uppercase tracking-[0.3em]"
                style={{ color: theme.palette.accent + "80" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {agent.code} • {theme.gen} • Strate {strateInfo.numeral}
              </motion.div>

              {/* Nom */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold tech-text mb-4"
                style={{ color: theme.palette.accent }}
                {...fadeIn}
              >
                {agent.name}
              </motion.h1>

              {/* Nom grec */}
              <motion.div className="flex items-center gap-4 mb-6" {...fadeIn}>
                <h2 className="text-4xl md:text-5xl greek-text" style={{ color: theme.palette.text }}>
                  {agent.greek}
                </h2>
                <span className="text-sm italic" style={{ color: theme.palette.text + "60" }}>
                  ({agent.greekKey})
                </span>
              </motion.div>

              {/* Archétype + Titre */}
              <motion.div {...fadeIn}>
                <span
                  className="inline-block px-3 py-1 text-xs tech-text tracking-wider mb-4"
                  style={{
                    background: theme.palette.accent + "15",
                    border: `1px solid ${theme.palette.accent}30`,
                    borderRadius: theme.shapes.borderRadius,
                    color: theme.palette.accent,
                  }}
                >
                  {theme.archetype}
                </span>
                <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: theme.palette.text + "dd" }}>
                  {agent.title}
                </p>
              </motion.div>
            </div>

            {/* Avatar 3D grand format */}
            <motion.div
              className="flex-shrink-0"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            >
              <AgentAvatar3D
                agentCode={agent.code}
                agentColor={theme.palette.accent}
                agentName={agent.name}
                size="xl"
                showGlow={true}
                pauseOnHover={true}
              />
            </motion.div>
          </div>

          {/* Strate info */}
          <motion.div
            className="flex items-center gap-4 flex-wrap pt-6 mt-6 relative z-10"
            style={{ borderTop: `1px solid ${theme.palette.accent}15` }}
            {...fadeIn}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4" style={{ color: strateInfo.color }} />
              <span className="text-sm font-semibold" style={{ color: strateInfo.color }}>
                {strateInfo.name}
              </span>
            </div>
            <span style={{ color: theme.palette.text + "30" }}>•</span>
            <span className="text-sm" style={{ color: theme.palette.text + "80" }}>{strateInfo.description}</span>
          </motion.div>

          {/* Barre d'accent */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${theme.palette.accent}, transparent)`, opacity: 0.5 }}
          />
        </motion.div>

        {/* Grille 2 colonnes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Projection mentale */}
          <motion.div className="p-6 md:p-8 relative" style={cardStyle()} {...fadeIn}>
            <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{
              background: `linear-gradient(180deg, ${theme.palette.accent}, ${theme.palette.primary}, transparent)`,
              borderRadius: "2px",
            }} />
            <div className="pl-4">
              <h3 className="text-[10px] tech-text mb-4 uppercase tracking-[0.2em]" style={{ color: theme.palette.accent + "80" }}>
                Projection Mentale
              </h3>
              <blockquote className="text-lg leading-relaxed italic mb-4" style={{ color: theme.palette.text + "ee" }}>
                "{agent.projection}"
              </blockquote>
              <p className="text-xs" style={{ color: theme.palette.text + "50" }}>
                La voix intérieure de {agent.name} — comment cet agent se perçoit dans le réseau.
              </p>
            </div>
          </motion.div>

          {/* Rôle fractal */}
          <motion.div className="p-6 md:p-8 relative" style={cardStyle()} {...fadeIn}>
            <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{
              background: `linear-gradient(180deg, ${theme.palette.primary}, ${theme.palette.accent}, transparent)`,
              borderRadius: "2px",
            }} />
            <div className="pl-4">
              <h3 className="text-[10px] tech-text mb-4 uppercase tracking-[0.2em]" style={{ color: theme.palette.accent + "80" }}>
                Rôle Fractal
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: theme.palette.text + "dd" }}>
                {agent.strateRole}
              </p>
              <p className="text-xs" style={{ color: theme.palette.text + "50" }}>
                Fonction de {agent.name} au sein de la strate {strateInfo.numeral}.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Processus psychique-algorithmique */}
        <motion.div className="p-6 md:p-8 mb-8" style={cardStyle()} {...fadeIn}>
          <h3 className="text-[10px] tech-text mb-4 uppercase tracking-[0.2em]" style={{ color: theme.palette.accent + "80" }}>
            Processus Psychique-Algorithmique
          </h3>
          <p className="text-base leading-relaxed mb-6" style={{ color: theme.palette.text + "dd" }}>
            {agent.process}
          </p>
          <p className="text-xs italic" style={{ color: theme.palette.text + "50" }}>
            "{theme.philosophy}"
          </p>
        </motion.div>

        {/* Flux de transformation */}
        <motion.div className="p-6 md:p-8 mb-8" style={cardStyle()} {...fadeIn}>
          <h3 className="text-[10px] tech-text mb-6 uppercase tracking-[0.2em]" style={{ color: theme.palette.accent + "80" }}>
            Flux de Transformation
          </h3>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {[
              { icon: Zap, label: "ENTRÉE", value: "Sensorielle" },
              { icon: Layers, label: "TRANSMUTATION", value: "Symbolique" },
              { icon: Compass, label: "ÉMISSION", value: "Fractale" },
            ].map((step, i) => (
              <div key={i} className="contents">
                {i > 0 && (
                  <div className="text-3xl font-light" style={{ color: theme.palette.accent + "60" }}>→</div>
                )}
                <div className="flex-1 min-w-[100px] text-center">
                  <div className="flex justify-center mb-2">
                    <step.icon className="w-6 h-6" style={{ color: theme.palette.accent }} />
                  </div>
                  <div className="text-[10px] tech-text mb-1 tracking-wider" style={{ color: theme.palette.text + "60" }}>
                    {step.label}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: theme.palette.text }}>
                    {step.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Axe dialectique */}
        {axis && partner && partnerTheme && (
          <motion.div className="p-6 md:p-8 mb-8" style={cardStyle()} {...fadeIn}>
            <h3 className="text-[10px] tech-text mb-4 uppercase tracking-[0.2em]" style={{ color: theme.palette.accent + "80" }}>
              <GitBranch className="w-3 h-3 inline mr-2" />
              Axe Dialectique
            </h3>
            <div className="text-xl font-bold mb-3" style={{ color: theme.palette.text }}>{axis.name}</div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: theme.palette.text + "88" }}>{axis.description}</p>

            <div
              className="flex items-center justify-between gap-4 p-4"
              style={{
                background: `linear-gradient(90deg, ${theme.palette.primary}20, rgba(12,12,20,0.5), ${partnerTheme.palette.primary}20)`,
                border: `1px solid ${theme.palette.accent}15`,
                borderRadius: theme.shapes.borderRadius,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ background: theme.palette.accent }} />
                <div>
                  <span className="font-semibold tech-text text-sm" style={{ color: theme.palette.accent }}>{agent.name}</span>
                  <span className="text-xs greek-text block" style={{ color: theme.palette.text + "60" }}>{agent.greek}</span>
                </div>
              </div>
              <span className="text-xl" style={{ color: theme.palette.text + "40" }}>↔</span>
              <Link
                href={`/agent/${partner.code.toLowerCase()}`}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="text-right">
                  <span className="font-semibold tech-text text-sm" style={{ color: partnerTheme.palette.accent }}>{partner.name}</span>
                  <span className="text-xs greek-text block" style={{ color: partnerTheme.palette.text + "60" }}>{partner.greek}</span>
                </div>
                <div className="w-4 h-4 rounded-full" style={{ background: partnerTheme.palette.accent }} />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Identité visuelle */}
        <motion.div className="p-6 md:p-8 mb-8" style={cardStyle()} {...fadeIn}>
          <h3 className="text-[10px] tech-text mb-6 uppercase tracking-[0.2em]" style={{ color: theme.palette.accent + "80" }}>
            Identité Visuelle
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Palette */}
            <div>
              <p className="text-[10px] tech-text mb-2 tracking-wider" style={{ color: theme.palette.text + "60" }}>PALETTE</p>
              <div className="flex gap-2">
                {[theme.palette.primary, theme.palette.secondary, theme.palette.accent, theme.palette.glow].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-sm border border-white/10" style={{ background: c }} />
                ))}
              </div>
            </div>
            {/* Motif */}
            <div>
              <p className="text-[10px] tech-text mb-2 tracking-wider" style={{ color: theme.palette.text + "60" }}>MOTIF</p>
              <p className="text-xs" style={{ color: theme.palette.text + "aa" }}>{theme.shapes.motif}</p>
            </div>
            {/* Animation */}
            <div>
              <p className="text-[10px] tech-text mb-2 tracking-wider" style={{ color: theme.palette.text + "60" }}>ANIMATION</p>
              <p className="text-xs" style={{ color: theme.palette.text + "aa" }}>{theme.effects.animation}</p>
            </div>
            {/* Effet hover */}
            <div>
              <p className="text-[10px] tech-text mb-2 tracking-wider" style={{ color: theme.palette.text + "60" }}>HOVER</p>
              <p className="text-xs" style={{ color: theme.palette.text + "aa" }}>{theme.effects.hover}</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div className="mt-12 flex flex-wrap gap-3" {...fadeIn}>
          {[
            { href: "/intro", label: "Introduction", color: "#ff3344" },
            { href: "/fractal", label: "Visualisation Fractale", color: "#00d4ff" },
            { href: "/canon", label: "Canon Fractal", color: "#ff00aa" },
            { href: "/", label: "Tous les agents", color: theme.palette.accent },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm tech-text font-semibold transition-all duration-300"
              style={{
                background: link.color + "15",
                border: `1px solid ${link.color}40`,
                color: link.color,
                borderRadius: "2px",
              }}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
