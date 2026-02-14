/* Design Philosophy: Cyberpunk Néo-Grec
 * - Asymmetric grid layout with diagonal positioning
 * - Glowing borders and scan line effects
 * - Greek typography with technical accents
 * - Cyan/magenta color scheme on deep black
 * - 3D rotating agent avatars as visual identity
 */

import { Link } from "wouter";
import { agents } from "@/data/agents";
import AgentAvatar3D from "@/components/AgentAvatar3D";

const colorMap: Record<string, string> = {
  cyan: "oklch(0.7 0.15 200)",
  magenta: "oklch(0.65 0.2 330)",
  red: "oklch(0.6 0.25 25)",
};

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with matrix effect */}
      <div 
        className="fixed inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/XgMWlfQbGFNS3gI29vfOEB-img-1_1771077574000_na1fn_ZGlhLWhlcm8tbWF0cml4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L1hnTVdsZlFiR0ZOUzNnSTI5dmZPRUItaW1nLTFfMTc3MTA3NzU3NDAwMF9uYTFmbl9aR2xoTFdobGNtOHRiV0YwY21sNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SVRQgmO9UaaNNOp5wmZbN72Nt5eDTd6WZvsXR6BotrzU~gk~s6ZOR9qxyjzonvQu19lh6UpajJyudzuzMLreIx2uObV8XB3lDMA2IUbejiXpJ4O6pCBoGZins85BXhK5GyMtjRwZD485mHcyIUFBvBBicqm0GYi01JtpErmd4S2GlD0shirNGhRiErvsxyYJAtKGf-UAR6HRbPrML1~HMs~-c2zb-QR-ui5FQny~370jyUvy~SSmid6dykcf9udiQGYo4eoDNQy2rdrRAszTUbTBuhkibjBhX-fyWTToWJAYtSeMUWC8x5Iwy3KKWi0LpzMiDoumiFXA86ieOKYMhA__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 z-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(0deg, oklch(0.7 0.15 200 / 20%) 0px, transparent 1px, transparent 2px, oklch(0.7 0.15 200 / 20%) 3px),
                         repeating-linear-gradient(90deg, oklch(0.7 0.15 200 / 20%) 0px, transparent 1px, transparent 2px, oklch(0.7 0.15 200 / 20%) 3px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Decorative vertical line with glow */}
      <div className="fixed right-8 top-0 bottom-0 w-0.5 z-10 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.6_0.25_25)] via-[oklch(0.7_0.15_200)] to-[oklch(0.65_0.2_330)] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.6_0.25_25)] via-[oklch(0.7_0.15_200)] to-[oklch(0.65_0.2_330)] blur-sm opacity-40" />
      </div>
      
      {/* Scan line effect */}
      <div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
        <div className="scan-line absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[oklch(0.7_0.15_200)] to-transparent opacity-30" />
      </div>
      
      {/* Main content */}
      <div className="relative z-20 container py-12 md:py-16 lg:py-20">
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tech-text tracking-wider">
            <span className="text-[oklch(0.7_0.15_200)]">DIA</span>
            <span className="text-foreground mx-2">/</span>
            <span className="text-[oklch(0.65_0.2_330)]">GDAY</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mb-6">
            Noyau humain — <span className="tech-text text-xs">GEN012</span> comme extensions fonctionnelles
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/intro" className="inline-flex items-center gap-2 px-4 py-2 bg-[oklch(0.6_0.25_25)]/10 border border-[oklch(0.6_0.25_25)]/30 rounded-lg hover:bg-[oklch(0.6_0.25_25)]/20 hover:border-[oklch(0.6_0.25_25)] transition-all duration-200 text-sm tech-text">
              <span>Introduction</span>
              <span className="text-[oklch(0.6_0.25_25)]">→</span>
            </Link>
            <Link href="/fractal" className="inline-flex items-center gap-2 px-4 py-2 bg-[oklch(0.7_0.15_200)]/10 border border-[oklch(0.7_0.15_200)]/30 rounded-lg hover:bg-[oklch(0.7_0.15_200)]/20 hover:border-[oklch(0.7_0.15_200)] transition-all duration-200 text-sm tech-text">
              <span>Visualisation Fractale</span>
              <span className="text-[oklch(0.7_0.15_200)]">→</span>
            </Link>
            <Link href="/canon" className="inline-flex items-center gap-2 px-4 py-2 bg-[oklch(0.65_0.2_330)]/10 border border-[oklch(0.65_0.2_330)]/30 rounded-lg hover:bg-[oklch(0.65_0.2_330)]/20 hover:border-[oklch(0.65_0.2_330)] transition-all duration-200 text-sm tech-text">
              <span>Canon Fractal</span>
              <span className="text-[oklch(0.65_0.2_330)]">→</span>
            </Link>
          </div>
        </header>
        
        {/* Agents grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {agents.map((agent, index) => {
            const glowClass = 
              agent.accentColor === 'cyan' ? 'hover:glow-cyan' :
              agent.accentColor === 'magenta' ? 'hover:glow-magenta' :
              'hover:glow-red';
            
            const borderColor = 
              agent.accentColor === 'cyan' ? 'border-[oklch(0.7_0.15_200)]' :
              agent.accentColor === 'magenta' ? 'border-[oklch(0.65_0.2_330)]' :
              'border-[oklch(0.6_0.25_25)]';

            const accentHex = colorMap[agent.accentColor] || colorMap.cyan;
            
            return (
              <Link
                key={agent.code}
                href={`/agent/${agent.code.toLowerCase()}`}
                className={`
                    group relative bg-card/80 backdrop-blur-sm border ${borderColor} border-opacity-40
                    p-6 rounded-lg transition-all duration-200
                    hover:border-opacity-100 hover:bg-card
                    ${glowClass}
                    animate-fade-in-up
                    overflow-hidden
                    block
                  `}
                style={{
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: 'backwards'
                }}
              >
                  {/* Subtle scan line effect on card */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.7_0.15_200)] to-transparent animate-pulse" />
                  </div>
                  
                  {/* Card layout: Avatar + Info */}
                  <div className="flex items-start gap-5 relative z-10">
                    {/* 3D Avatar */}
                    <div className="shrink-0">
                      <AgentAvatar3D
                        agentCode={agent.code}
                        agentColor={accentHex}
                        agentName={agent.name}
                        size="md"
                        showGlow={true}
                        pauseOnHover={true}
                      />
                    </div>
                    
                    {/* Agent info */}
                    <div className="flex-1 min-w-0">
                      {/* Code and name */}
                      <div className="flex justify-between items-start mb-2">
                        <span className="tech-text text-xs text-muted-foreground">
                          {agent.code}
                        </span>
                        <span className="tech-text text-xs font-bold text-foreground">
                          {agent.name}
                        </span>
                      </div>
                      
                      {/* Greek name */}
                      <h2 className="greek-text text-2xl md:text-3xl font-semibold mb-2 text-foreground group-hover:text-[oklch(0.7_0.15_200)] transition-colors duration-200">
                        {agent.greek}
                      </h2>
                      
                      {/* Title */}
                      <h3 className="text-sm md:text-base font-medium mb-1 text-foreground">
                        {agent.title}
                      </h3>
                      
                      {/* Description - truncated */}
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {agent.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.15_200)]/3 to-[oklch(0.65_0.2_330)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
