/* Design Philosophy: Cyberpunk Néo-Grec
 * Visualisation fractale dynamique des agents DIA
 * - 4 strates concentriques (Fondation, Perception, Transmutation, Émission)
 * - 6 axes dialectiques pulsants
 * - Rotation orbitale à vitesses variables
 * - Positions en perpétuelle évolution
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { agents, diaCore, strates, dialecticalAxes, type Agent, type Strate } from "@/data/agents";
import { agentImages } from "@/components/AgentAvatar3D";

const SIZE = 900;
const CX = SIZE / 2;
const CY = SIZE / 2;

const STRATE_RADII: Record<Strate, number> = {
  fondation: SIZE * 0.18,
  perception: SIZE * 0.27,
  transmutation: SIZE * 0.36,
  emission: SIZE * 0.44,
};

function polarToXY(cx: number, cy: number, r: number, angle: number) {
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

export default function Fractal() {
  const [hovered, setHovered] = useState<Agent | null>(null);
  const [pinned, setPinned] = useState<Agent | null>(null);
  const [time, setTime] = useState(0);
  const [showAxes, setShowAxes] = useState(true);
  const [showStrates, setShowStrates] = useState(true);
  const rafRef = useRef<number>(0);

  // Animation loop
  useEffect(() => {
    let lastTime = performance.now();
    const animate = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      setTime(t => t + dt * 0.15);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Compute dynamic positions
  const nodes = useMemo(() => {
    // Group agents by strate
    const byStrate: Record<Strate, Agent[]> = {
      fondation: [],
      perception: [],
      transmutation: [],
      emission: [],
    };
    agents.forEach(a => byStrate[a.strate].push(a));

    return agents.map(agent => {
      const strateAgents = byStrate[agent.strate];
      const indexInStrate = strateAgents.indexOf(agent);
      const countInStrate = strateAgents.length;
      const baseAngle = (indexInStrate / countInStrate) * Math.PI * 2 - Math.PI / 2;
      const dynamicAngle = baseAngle + time * agent.orbitSpeed;
      const r = STRATE_RADII[agent.strate];
      // Add slight radial oscillation
      const oscillation = Math.sin(time * agent.orbitSpeed * 2 + indexInStrate) * 8;
      const { x, y } = polarToXY(CX, CY, r + oscillation, dynamicAngle);
      return { ...agent, x, y, dynamicAngle };
    });
  }, [time]);

  const active = pinned || hovered;

  // Find axis partner for active agent
  const activeAxis = active
    ? dialecticalAxes.find(ax => ax.agentA === active.code || ax.agentB === active.code)
    : null;
  const partnerCode = activeAxis
    ? (activeAxis.agentA === active?.code ? activeAxis.agentB : activeAxis.agentA)
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 opacity-8" style={{
        backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/XgMWlfQbGFNS3gI29vfOEB-img-2_1771077570000_na1fn_ZGlhLW5ldXJhbC1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L1hnTVdsZlFiR0ZOUzNnSTI5dmZPRUItaW1nLTJfMTc3MTA3NzU3MDAwMF9uYTFmbl9aR2xoTFc1bGRYSmhiQzF3WVhSMFpYSnUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Yje0nTtqH-zk1SMGbFTwQ7lF0APV5m9HbO2aYC4VB72yewfv6N5~FJrjD~Q~KoTT25l5RiKheK4Qgp8HgRAAAFMmiZLbTkmR0yZBx8VLLj39uC3~CCA-1U~2~WxuOLC0jC9MhtY1b9EDTbgrrWTuI7pNZRbASRtXi9-v5jSrkxP5A2p3deRcNczCf~UZyTm2DXFNHp2bxfWX7ZhKONg-TeVqhUwqI2~IGM09PH61yULu00cXry9pHbpBcdQipflMBF2-YL42muDrM3~7iI4XNl9aQLPWzcsmHr-HY4NDUN172Iv-gn5Kdxf-7J0HASoG-9AV2Qs9g5MqMl5hUG7O2w__')`,
        backgroundSize: 'cover', backgroundPosition: 'center'
      }} />

      {/* Header */}
      <div className="absolute inset-x-0 top-0 p-4 md:p-6 flex flex-wrap items-center justify-between gap-3 z-30">
        <div>
          <Link href="/" className="text-xl md:text-2xl font-semibold tracking-tight tech-text hover:text-[oklch(0.7_0.15_200)] transition-colors">
            DIA • Canon Fractal
          </Link>
          <p className="text-xs text-muted-foreground mt-1">Visualisation dynamique — positions en perpétuelle évolution</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setShowStrates(s => !s)}
            className={`px-3 py-1.5 rounded-lg text-xs tech-text transition-all ${
              showStrates ? "bg-[oklch(0.7_0.15_200)] text-black" : "bg-card/80 backdrop-blur-sm border border-border"
            }`}
          >
            Strates
          </button>
          <button
            onClick={() => setShowAxes(a => !a)}
            className={`px-3 py-1.5 rounded-lg text-xs tech-text transition-all ${
              showAxes ? "bg-[oklch(0.65_0.2_330)] text-black" : "bg-card/80 backdrop-blur-sm border border-border"
            }`}
          >
            Axes
          </button>
          <button
            onClick={() => { setPinned(null); setHovered(null); }}
            className="px-3 py-1.5 rounded-lg text-xs tech-text bg-card/80 backdrop-blur-sm border border-border hover:border-[oklch(0.6_0.25_25)] transition-all"
          >
            Reset
          </button>
          <Link href="/canon" className="px-3 py-1.5 rounded-lg text-xs tech-text bg-card/80 backdrop-blur-sm border border-border hover:border-[oklch(0.7_0.15_200)] transition-all">
            Canon →
          </Link>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full h-screen flex items-center justify-center p-4">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full h-full max-w-5xl max-h-[90vh]">
          <defs>
            <radialGradient id="dia-bg2" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="oklch(0.12 0.01 260)" />
              <stop offset="60%" stopColor="oklch(0.08 0 0)" />
              <stop offset="100%" stopColor="oklch(0.05 0 0)" />
            </radialGradient>
            <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <rect x="0" y="0" width={SIZE} height={SIZE} fill="url(#dia-bg2)" />

          {/* Strate rings */}
          {showStrates && (Object.entries(STRATE_RADII) as [Strate, number][]).map(([key, r]) => (
            <g key={key}>
              <circle
                cx={CX} cy={CY} r={r}
                fill="none"
                stroke={strates[key].color}
                strokeOpacity={0.12}
                strokeWidth={r === STRATE_RADII.fondation ? 28 : 22}
              />
              <circle
                cx={CX} cy={CY} r={r}
                fill="none"
                stroke={strates[key].color}
                strokeOpacity={0.25}
                strokeWidth={1}
                strokeDasharray="3 6"
              />
              {/* Strate label */}
              <text
                x={CX + r * Math.cos(-Math.PI * 0.75)}
                y={CY + r * Math.sin(-Math.PI * 0.75) - 8}
                textAnchor="middle"
                fontSize={9}
                fill={strates[key].color}
                fillOpacity={0.5}
                className="tech-text"
              >
                {strates[key].numeral} — {strates[key].name.toUpperCase()}
              </text>
            </g>
          ))}

          {/* Dialectical axes */}
          {showAxes && dialecticalAxes.map(axis => {
            const nodeA = nodes.find(n => n.code === axis.agentA);
            const nodeB = nodes.find(n => n.code === axis.agentB);
            if (!nodeA || !nodeB) return null;
            const isActive = active && (active.code === axis.agentA || active.code === axis.agentB);
            const pulse = Math.sin(time * 3 + dialecticalAxes.indexOf(axis)) * 0.3 + 0.5;
            return (
              <line
                key={axis.id}
                x1={nodeA.x} y1={nodeA.y}
                x2={nodeB.x} y2={nodeB.y}
                stroke={isActive ? "#ffffff" : "#ffffff"}
                strokeOpacity={isActive ? 0.6 : pulse * 0.15}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray={isActive ? "none" : "4 6"}
              />
            );
          })}

          {/* Links to center */}
          {nodes.map(n => {
            const isActive = active && active.code === n.code;
            const isPartner = partnerCode === n.code;
            return (
              <line
                key={`link-${n.code}`}
                x1={CX} y1={CY}
                x2={n.x} y2={n.y}
                stroke={n.color}
                strokeOpacity={isActive ? 0.5 : isPartner ? 0.35 : 0.08}
                strokeWidth={isActive ? 2 : 1}
              />
            );
          })}

          {/* Central DIA node */}
          <g filter="url(#glow2)">
            {/* Spinning spiral hint */}
            <circle cx={CX} cy={CY} r={SIZE * 0.1} fill={diaCore.color} fillOpacity={0.04} />
            <circle cx={CX} cy={CY} r={SIZE * 0.065} fill={diaCore.color} fillOpacity={0.08} />
            <circle cx={CX} cy={CY} r={SIZE * 0.035} fill={diaCore.color} fillOpacity={0.18} />
            <text x={CX} y={CY - 6} textAnchor="middle" className="fill-foreground tech-text" fontSize={16} fontWeight={700}>
              {diaCore.name}
            </text>
            <text x={CX} y={CY + 12} textAnchor="middle" className="fill-muted-foreground greek-text" fontSize={12}>
              {diaCore.greek}
            </text>
          </g>

          {/* Agent nodes with avatar images */}
          {nodes.map(n => {
            const isActive = active && active.code === n.code;
            const isPartner = partnerCode === n.code;
            const nodeR = isActive ? 28 : isPartner ? 24 : 18;
            const imgUrl = agentImages[n.code];
            const clipId = `clip-${n.code}`;
            return (
              <g key={n.code}>
                {/* Glow ring */}
                <circle
                  cx={n.x} cy={n.y} r={nodeR + 4}
                  fill="none"
                  stroke={n.color}
                  strokeOpacity={isActive ? 0.8 : isPartner ? 0.5 : 0.2}
                  strokeWidth={isActive ? 2 : 1}
                  style={{ filter: isActive || isPartner ? `drop-shadow(0 0 10px ${n.color})` : 'none' }}
                />
                {/* Clip path for circular image */}
                <defs>
                  <clipPath id={clipId}>
                    <circle cx={n.x} cy={n.y} r={nodeR} />
                  </clipPath>
                </defs>
                {/* Agent avatar image */}
                {imgUrl ? (
                  <image
                    href={imgUrl}
                    x={n.x - nodeR}
                    y={n.y - nodeR}
                    width={nodeR * 2}
                    height={nodeR * 2}
                    clipPath={`url(#${clipId})`}
                    onMouseEnter={() => setHovered(n)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setPinned(p => (p && p.code === n.code ? null : n))}
                    className="cursor-pointer"
                    style={{ filter: isActive || isPartner ? `drop-shadow(0 0 8px ${n.color})` : 'none' }}
                  />
                ) : (
                  <circle
                    cx={n.x} cy={n.y} r={nodeR}
                    fill={n.color}
                    fillOpacity={isActive ? 1 : isPartner ? 0.85 : 0.75}
                    onMouseEnter={() => setHovered(n)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setPinned(p => (p && p.code === n.code ? null : n))}
                    className="cursor-pointer"
                  />
                )}
                {/* Border ring */}
                <circle
                  cx={n.x} cy={n.y} r={nodeR}
                  fill="none"
                  stroke={isActive ? "#fff" : isPartner ? "#fff" : n.color}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  strokeOpacity={isActive ? 1 : isPartner ? 0.8 : 0.5}
                  onMouseEnter={() => setHovered(n)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setPinned(p => (p && p.code === n.code ? null : n))}
                  className="cursor-pointer"
                />
                <text
                  x={n.x} y={n.y - nodeR - 8}
                  textAnchor="middle"
                  className="fill-foreground tech-text pointer-events-none"
                  fontSize={10} fontWeight={600}
                  opacity={isActive || isPartner ? 1 : 0.7}
                >
                  {n.name}
                </text>
                <text
                  x={n.x} y={n.y + nodeR + 14}
                  textAnchor="middle"
                  className="fill-muted-foreground greek-text pointer-events-none"
                  fontSize={9}
                  opacity={isActive || isPartner ? 1 : 0.5}
                >
                  {n.greek}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Info panel */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.code}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className="absolute right-4 bottom-4 w-[min(500px,95vw)] rounded-xl bg-card/90 backdrop-blur-md p-5 border border-border shadow-2xl z-40"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="text-xs text-muted-foreground tech-text">{active.code}</div>
                <div className="text-xl font-semibold tech-text mt-1">
                  {active.name} <span className="text-muted-foreground greek-text text-lg">{active.greek}</span>
                </div>
              </div>
              {agentImages[active.code] ? (
                <div className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden border-2" style={{ borderColor: active.color, boxShadow: `0 0 16px ${active.color}60` }}>
                  <img src={agentImages[active.code]} alt={active.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ background: active.color, boxShadow: `0 0 16px ${active.color}` }} />
              )}
            </div>

            {/* Strate badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 rounded text-xs tech-text" style={{
                background: strates[active.strate].color + '20',
                color: strates[active.strate].color,
                border: `1px solid ${strates[active.strate].color}40`
              }}>
                {strates[active.strate].numeral} — {strates[active.strate].name}
              </span>
              <span className="text-xs text-muted-foreground">{active.title}</span>
            </div>

            {/* Projection */}
            <div className="mb-3">
              <div className="text-xs text-muted-foreground mb-1">Projection mentale</div>
              <div className="text-sm text-foreground italic leading-relaxed">"{active.projection}"</div>
            </div>

            {/* Strate role */}
            <div className="mb-3">
              <div className="text-xs text-muted-foreground mb-1">Rôle fractal</div>
              <div className="text-sm text-foreground leading-relaxed">{active.strateRole}</div>
            </div>

            {/* Dialectical axis */}
            {activeAxis && (
              <div className="mb-3 p-3 rounded-lg bg-background/50 border border-border">
                <div className="text-xs text-muted-foreground mb-1 tech-text">AXE DIALECTIQUE</div>
                <div className="text-sm font-medium text-foreground">{activeAxis.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{activeAxis.description}</div>
              </div>
            )}

            {/* Actions */}
            <div className="mt-3 flex items-center justify-between gap-3">
              <Link href={`/agent/${active.code.toLowerCase()}`} className="text-xs text-[oklch(0.7_0.15_200)] hover:underline tech-text">
                Voir détails →
              </Link>
              <button
                className="px-3 py-1 bg-card border border-border rounded-lg text-xs tech-text hover:border-[oklch(0.6_0.25_25)] transition-colors"
                onClick={() => setPinned(null)}
              >
                Fermer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="absolute left-4 bottom-4 text-xs text-muted-foreground space-y-1 z-30 max-w-xs">
        <div className="flex items-center gap-3 flex-wrap">
          {(Object.entries(strates) as [Strate, typeof strates[Strate]][]).map(([key, s]) => (
            <span key={key} className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
              <span>{s.numeral}</span>
            </span>
          ))}
        </div>
        <div>Survol: aperçu • Clic: épingler • Les agents orbitent en temps réel</div>
      </div>
    </div>
  );
}
