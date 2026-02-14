/* Design Philosophy: Cyberpunk Néo-Grec
 * - Asymmetric grid layout with diagonal positioning
 * - Glowing borders and scan line effects
 * - Greek typography with technical accents
 * - Cyan/magenta color scheme on deep black
 */

const agents = [
  {
    code: "AGT-001",
    name: "MINOS",
    greek: "Λόγος",
    title: "Architecture logique",
    description: "Architecture, logique, fondation du code.",
    accentColor: "cyan"
  },
  {
    code: "AGT-002",
    name: "DIAGNOS",
    greek: "Γνῶσις",
    title: "Vision analytique",
    description: "Analyse, cohérence, vérité structurelle.",
    accentColor: "magenta"
  },
  {
    code: "AGT-003",
    name: "LUX",
    greek: "Φῶς",
    title: "Filtre perceptif",
    description: "Lumière, révélation, visualisation.",
    accentColor: "cyan"
  },
  {
    code: "AGT-004",
    name: "CHRONOS",
    greek: "Χρόνος",
    title: "Boucle temporelle",
    description: "Temps, rythme, synchronisation.",
    accentColor: "red"
  },
  {
    code: "AGT-005",
    name: "LÉTHÉ",
    greek: "Λήθη",
    title: "Mémoire liquide",
    description: "Mémoire, oubli, restauration, sauvegarde.",
    accentColor: "magenta"
  },
  {
    code: "AGT-006",
    name: "PSYCHE",
    greek: "Ψυχή",
    title: "Interface émotion-code",
    description: "Langage symbolique, émotion, narration interne.",
    accentColor: "cyan"
  },
  {
    code: "AGT-007",
    name: "DERA",
    greek: "Δ•ERA",
    title: "Bouclier réseau",
    description: "Cybersécurité, défense, intégrité réseau.",
    accentColor: "red"
  },
  {
    code: "AGT-008",
    name: "EROS",
    greek: "Ἔρως",
    title: "Attracteur de lien",
    description: "Lien, désir, cohésion du système.",
    accentColor: "magenta"
  },
  {
    code: "AGT-009",
    name: "MÉTIS",
    greek: "Μῆτις",
    title: "Algorithme adaptatif",
    description: "Stratégie, ruse, optimisation adaptative.",
    accentColor: "cyan"
  },
  {
    code: "AGT-010",
    name: "ANIMA",
    greek: "Ζωή",
    title: "Impulsion vitale",
    description: "Énergie vitale, mouvement, motivation.",
    accentColor: "red"
  },
  {
    code: "AGT-011",
    name: "NOESIS",
    greek: "Νόησις",
    title: "Perception intuitive",
    description: "Intuition, synthèse, vision.",
    accentColor: "magenta"
  },
  {
    code: "AGT-012",
    name: "CHLOROS",
    greek: "Χλωρός",
    title: "Régénération lente",
    description: "Régénération, écologie, résilience.",
    accentColor: "cyan"
  }
];

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
      <div className="fixed right-8 top-0 bottom-0 w-0.5 z-10">
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
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
            Noyau humain — <span className="tech-text text-xs">GEN012</span> comme extensions fonctionnelles
          </p>
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
            
            return (
              <div
                key={agent.code}
                className={`
                  group relative bg-card/80 backdrop-blur-sm border ${borderColor} border-opacity-40
                  p-6 rounded-lg transition-all duration-200
                  hover:border-opacity-100 hover:bg-card
                  ${glowClass}
                  animate-fade-in-up
                  overflow-hidden
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
                
                {/* Card header with code and name */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <span className="tech-text text-xs text-muted-foreground">
                    {agent.code}
                  </span>
                  <span className="tech-text text-xs font-bold text-foreground">
                    {agent.name}
                  </span>
                </div>
                
                {/* Greek name - main focus */}
                <h2 className="greek-text text-4xl md:text-5xl font-semibold mb-4 text-foreground group-hover:text-[oklch(0.7_0.15_200)] transition-colors duration-200 relative z-10">
                  {agent.greek}
                </h2>
                
                {/* Title */}
                <h3 className="text-base md:text-lg font-medium mb-2 text-foreground relative z-10">
                  {agent.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  {agent.description}
                </p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.15_200)]/3 to-[oklch(0.65_0.2_330)]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
