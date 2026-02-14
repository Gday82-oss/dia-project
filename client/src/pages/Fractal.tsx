/* Design Philosophy: Cyberpunk Néo-Grec
 * Visualisation fractale interactive des agents DIA
 * - Layout radial: 12 agents en orbite, DIA au centre
 * - Survol: affiche la projection mentale
 * - Clic: épingle le panneau d'info
 * - Modes d'affichage: liens, anneaux, icônes
 */

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { agents, diaCore } from "@/data/agents";

interface PolarCoords {
  x: number;
  y: number;
}

function polarToCartesian(cx: number, cy: number, r: number, angleRad: number): PolarCoords {
  return { 
    x: cx + r * Math.cos(angleRad), 
    y: cy + r * Math.sin(angleRad) 
  };
}

function useRadialLayout(count: number, rotation = -Math.PI / 2) {
  return useMemo(() => {
    return new Array(count).fill(0).map((_, i) => {
      const t = (i / count) * 2 * Math.PI + rotation;
      return { angle: t };
    });
  }, [count, rotation]);
}

export default function Fractal() {
  const [hovered, setHovered] = useState<typeof agents[0] | null>(null);
  const [pinned, setPinned] = useState<typeof agents[0] | null>(null);
  const [mode, setMode] = useState<"liens" | "anneaux" | "icones">("liens");

  const size = 900;
  const cx = size / 2;
  const cy = size / 2;
  const ringR = size * 0.33;
  const innerR = size * 0.14;

  const layout = useRadialLayout(agents.length);

  const nodes = agents.map((a, i) => {
    const { x, y } = polarToCartesian(cx, cy, ringR, layout[i].angle);
    return { ...a, x, y, angle: layout[i].angle };
  });

  const active = pinned || hovered;

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background effects */}
      <div 
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/XgMWlfQbGFNS3gI29vfOEB-img-2_1771077570000_na1fn_ZGlhLW5ldXJhbC1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L1hnTVdsZlFiR0ZOUzNnSTI5dmZPRUItaW1nLTJfMTc3MTA3NzU3MDAwMF9uYTFmbl9aR2xoTFc1bGRYSmhiQzF3WVhSMFpYSnUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Yje0nTtqH-zk1SMGbFTwQ7lF0APV5m9HbO2aYC4VB72yewfv6N5~FJrjD~Q~KoTT25l5RiKheK4Qgp8HgRAAAFMmiZLbTkmR0yZBx8VLLj39uC3~CCA-1U~2~WxuOLC0jC9MhtY1b9EDTbgrrWTuI7pNZRbASRtXi9-v5jSrkxP5A2p3deRcNczCf~UZyTm2DXFNHp2bxfWX7ZhKONg-TeVqhUwqI2~IGM09PH61yULu00cXry9pHbpBcdQipflMBF2-YL42muDrM3~7iI4XNl9aQLPWzcsmHr-HY4NDUN172Iv-gn5Kdxf-7J0HASoG-9AV2Qs9g5MqMl5hUG7O2w__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Header */}
      <div className="absolute inset-x-0 top-0 p-4 md:p-6 flex flex-wrap items-center justify-between gap-3 z-30">
        <div>
          <Link href="/" className="text-xl md:text-2xl font-semibold tracking-tight tech-text hover:text-[oklch(0.7_0.15_200)] transition-colors">
              DIA • Projections mentales
          </Link>
          <p className="text-xs text-muted-foreground mt-1">Visualisation fractale du moi digital</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode("liens")}
            className={`px-3 py-1.5 rounded-lg text-xs tech-text transition-all ${
              mode === "liens" 
                ? "bg-[oklch(0.7_0.15_200)] text-black" 
                : "bg-card/80 backdrop-blur-sm border border-border hover:border-[oklch(0.7_0.15_200)]"
            }`}
          >
            Liens
          </button>
          <button
            onClick={() => setMode("anneaux")}
            className={`px-3 py-1.5 rounded-lg text-xs tech-text transition-all ${
              mode === "anneaux" 
                ? "bg-[oklch(0.7_0.15_200)] text-black" 
                : "bg-card/80 backdrop-blur-sm border border-border hover:border-[oklch(0.7_0.15_200)]"
            }`}
          >
            Anneaux
          </button>
          <button
            onClick={() => setMode("icones")}
            className={`px-3 py-1.5 rounded-lg text-xs tech-text transition-all ${
              mode === "icones" 
                ? "bg-[oklch(0.7_0.15_200)] text-black" 
                : "bg-card/80 backdrop-blur-sm border border-border hover:border-[oklch(0.7_0.15_200)]"
            }`}
          >
            Icônes
          </button>
          <button
            onClick={() => {
              setPinned(null);
              setHovered(null);
            }}
            className="px-3 py-1.5 rounded-lg text-xs tech-text bg-card/80 backdrop-blur-sm border border-border hover:border-[oklch(0.6_0.25_25)] transition-all"
          >
            Reset
          </button>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full h-screen flex items-center justify-center p-4">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-full max-w-5xl max-h-[90vh]"
          role="img"
          aria-label="Carte fractale des agents DIA"
        >
          {/* Definitions */}
          <defs>
            <radialGradient id="dia-bg" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="oklch(0.12 0.01 260)" />
              <stop offset="60%" stopColor="oklch(0.08 0 0)" />
              <stop offset="100%" stopColor="oklch(0.05 0 0)" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          <rect x="0" y="0" width={size} height={size} fill="url(#dia-bg)" />

          {/* Anneaux concentriques */}
          {mode !== "icones" && (
            <g opacity={mode === "anneaux" ? 1 : 0.25}>
              {[1, 1.33, 1.66, 2].map((k) => (
                <circle
                  key={k}
                  cx={cx}
                  cy={cy}
                  r={innerR * k}
                  fill="none"
                  stroke="oklch(0.3 0.05 200)"
                  strokeOpacity={0.3}
                  strokeWidth={1}
                  strokeDasharray="4 8"
                />
              ))}
            </g>
          )}

          {/* Liens DIA ↔ Agents */}
          {mode !== "anneaux" && (
            <g opacity={0.9}>
              {nodes.map((n) => (
                <line
                  key={`ln-${n.code}`}
                  x1={cx}
                  y1={cy}
                  x2={n.x}
                  y2={n.y}
                  stroke={n.color}
                  strokeOpacity={active && active.code !== n.code ? 0.15 : 0.55}
                  strokeWidth={active && active.code === n.code ? 3 : 1.5}
                />
              ))}
            </g>
          )}

          {/* Noeud central DIA */}
          <g filter="url(#glow)">
            <circle cx={cx} cy={cy} r={innerR} fill={diaCore.color} fillOpacity={0.08} />
            <circle cx={cx} cy={cy} r={innerR * 0.66} fill={diaCore.color} fillOpacity={0.12} />
            <circle cx={cx} cy={cy} r={innerR * 0.33} fill={diaCore.color} fillOpacity={0.25} />
            <text 
              x={cx} 
              y={cy - 8} 
              textAnchor="middle" 
              className="fill-foreground tech-text" 
              fontSize={18}
              fontWeight={700}
            >
              {diaCore.name}
            </text>
            <text 
              x={cx} 
              y={cy + 12} 
              textAnchor="middle" 
              className="fill-muted-foreground greek-text" 
              fontSize={14}
            >
              {diaCore.greek}
            </text>
          </g>

          {/* Noeuds agents */}
          {nodes.map((n) => {
            const sizeNode = active && active.code === n.code ? 18 : 12;
            const isActive = active && active.code === n.code;
            
            return (
              <g key={n.code}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={sizeNode}
                  fill={n.color}
                  fillOpacity={0.9}
                  stroke="oklch(0.08 0 0)"
                  strokeWidth={2}
                  onMouseEnter={() => setHovered(n)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setPinned((p) => (p && p.code === n.code ? null : n))}
                  className="cursor-pointer transition-all duration-200"
                  style={{
                    filter: isActive ? `drop-shadow(0 0 8px ${n.color})` : 'none'
                  }}
                />
                <text 
                  x={n.x} 
                  y={n.y - 24} 
                  textAnchor="middle" 
                  className="fill-foreground tech-text pointer-events-none" 
                  fontSize={11}
                  fontWeight={600}
                >
                  {n.name}
                </text>
                <text 
                  x={n.x} 
                  y={n.y + 32} 
                  textAnchor="middle" 
                  className="fill-muted-foreground greek-text pointer-events-none" 
                  fontSize={10}
                >
                  {n.greek}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Panneau d'info */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.code}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className="absolute right-4 bottom-4 w-[min(480px,95vw)] rounded-xl bg-card/90 backdrop-blur-md p-5 border border-border shadow-2xl z-40"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="text-xs text-muted-foreground tech-text">{active.code}</div>
                <div className="text-xl font-semibold tech-text mt-1">
                  {active.name} <span className="text-muted-foreground greek-text text-lg">{active.greek}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{active.greekKey}</div>
              </div>
              <div
                className="w-5 h-5 rounded-full mt-1 flex-shrink-0"
                style={{ 
                  background: active.color, 
                  boxShadow: `0 0 16px ${active.color}` 
                }}
                title={active.color}
              />
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Rôle</div>
                <div className="text-sm text-foreground">{active.title}</div>
              </div>
              
              <div>
                <div className="text-xs text-muted-foreground mb-1">Projection mentale</div>
                <div className="text-sm text-foreground leading-relaxed italic">
                  "{active.projection}"
                </div>
              </div>
              
              <div>
                <div className="text-xs text-muted-foreground mb-1">Processus</div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {active.process}
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between gap-3">
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

      {/* Légende */}
      <div className="absolute left-4 bottom-4 text-xs text-muted-foreground space-y-1 z-30 max-w-xs">
        <div>Survol: aperçu • Clic: épingler</div>
        <div>DIA au centre. 12 agents en orbite. Spirale = champ d'autorégulation.</div>
      </div>
    </div>
  );
}
