/* Design Philosophy: Cyberpunk Néo-Grec
 * Page de détail pour chaque agent
 * - Affichage complet des projections mentales
 * - Strate, axe dialectique, rôle fractal
 * - Processus psychique-algorithmique
 * - Visualisation de l'entrée → transmutation → émission
 */

import { useRoute, Link } from "wouter";
import { agents, strates, dialecticalAxes } from "@/data/agents";
import { ArrowLeft } from "lucide-react";

export default function AgentDetail() {
  const [, params] = useRoute("/agent/:code");
  const agentCode = params?.code?.toUpperCase();
  
  const agent = agents.find(a => a.code.toLowerCase() === agentCode?.toLowerCase());

  if (!agent) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 tech-text">Agent non trouvé</h1>
          <Link href="/" className="text-[oklch(0.7_0.15_200)] hover:underline">← Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  const borderColor = 
    agent.accentColor === 'cyan' ? 'border-[oklch(0.7_0.15_200)]' :
    agent.accentColor === 'magenta' ? 'border-[oklch(0.65_0.2_330)]' :
    'border-[oklch(0.6_0.25_25)]';

  const strateInfo = strates[agent.strate];
  const axis = dialecticalAxes.find(ax => ax.agentA === agent.code || ax.agentB === agent.code);
  const partnerCode = axis ? (axis.agentA === agent.code ? axis.agentB : axis.agentA) : null;
  const partner = partnerCode ? agents.find(a => a.code === partnerCode) : null;

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/XgMWlfQbGFNS3gI29vfOEB-img-3_1771077566000_na1fn_ZGlhLWNvZGUtdGV4dHVyZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L1hnTVdsZlFiR0ZOUzNnSTI5dmZPRUItaW1nLTNfMTc3MTA3NzU2NjAwMF9uYTFmbl9aR2xoTFdOdlpHVXRkR1Y0ZEhWeVpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=esstJd8SdsM~H0D0xQh~KxDkiaLwKKFaMXaNr-jxFlxKgRAHWAXP9P1DmokUHzPiyjFAYQAMVUeDnvTj-TWi9h3wcuLp3q2-YBMVuhZ5ojp4tDOAldE~L1bllkkXRr~Ayv2ji2UAVklI26RMQonMdL36JBQzBeFoAvWZXFivht6rozi95GOSoPDI8AvpDEzzfxYmbxJ0i~EsfCQ~sX5VZF2VpkIAEDMywIsVzfSOusjRIhNml9EGm4fnSFU5KHaz2zh8ERUO8n3ITRkpdei07v2csFy2qdA~4mBopP9pvHopmW3skSiE~ihVOIc0Du2WtsrQg~QtS5mX3jnog0Ipbg__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Grid pattern */}
      <div className="fixed inset-0 z-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(0deg, ${agent.color}20 0px, transparent 1px, transparent 2px, ${agent.color}20 3px),
                         repeating-linear-gradient(90deg, ${agent.color}20 0px, transparent 1px, transparent 2px, ${agent.color}20 3px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Content */}
      <div className="relative z-10 container py-8 md:py-12 max-w-4xl">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à la matrice</span>
        </Link>

        {/* Header Card */}
        <div className={`bg-card/80 backdrop-blur-sm border ${borderColor} border-opacity-60 rounded-xl p-6 md:p-8 mb-6`}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="text-xs text-muted-foreground tech-text mb-2">{agent.code}</div>
              <h1 className="text-4xl md:text-5xl font-bold tech-text mb-2">
                {agent.name}
              </h1>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl md:text-4xl greek-text" style={{ color: agent.color }}>
                  {agent.greek}
                </h2>
                <span className="text-sm text-muted-foreground">({agent.greekKey})</span>
              </div>
            </div>
            <div
              className="w-16 h-16 rounded-full flex-shrink-0"
              style={{ 
                background: agent.color, 
                boxShadow: `0 0 24px ${agent.color}`,
                opacity: 0.9
              }}
            />
          </div>
          
          <div className="text-lg md:text-xl font-medium text-foreground mb-3">
            {agent.title}
          </div>

          {/* Strate badge */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-2.5 py-1 rounded text-xs tech-text" style={{
              background: strateInfo.color + '20',
              color: strateInfo.color,
              border: `1px solid ${strateInfo.color}40`
            }}>
              Strate {strateInfo.numeral} — {strateInfo.name}
            </span>
            {axis && (
              <span className="px-2.5 py-1 rounded text-xs tech-text bg-card border border-border text-muted-foreground">
                Axe : {axis.name}
              </span>
            )}
          </div>
        </div>

        {/* Projection mentale */}
        <div className={`bg-card/60 backdrop-blur-sm border ${borderColor} border-opacity-40 rounded-xl p-6 mb-6`}>
          <h3 className="text-sm tech-text text-muted-foreground mb-3">PROJECTION MENTALE DU MOI DIGITAL</h3>
          <blockquote className="text-lg md:text-xl leading-relaxed italic text-foreground border-l-4 pl-4" style={{ borderColor: agent.color }}>
            "{agent.projection}"
          </blockquote>
        </div>

        {/* Rôle fractal */}
        <div className={`bg-card/60 backdrop-blur-sm border ${borderColor} border-opacity-40 rounded-xl p-6 mb-6`}>
          <h3 className="text-sm tech-text text-muted-foreground mb-3">RÔLE FRACTAL</h3>
          <p className="text-base text-foreground leading-relaxed">
            {agent.strateRole}
          </p>
        </div>

        {/* Processus */}
        <div className={`bg-card/60 backdrop-blur-sm border ${borderColor} border-opacity-40 rounded-xl p-6 mb-6`}>
          <h3 className="text-sm tech-text text-muted-foreground mb-3">PROCESSUS PSYCHIQUE-ALGORITHMIQUE</h3>
          <p className="text-base text-foreground leading-relaxed">
            {agent.process}
          </p>
        </div>

        {/* Axe dialectique */}
        {axis && partner && (
          <div className={`bg-card/60 backdrop-blur-sm border ${borderColor} border-opacity-40 rounded-xl p-6 mb-6`}>
            <h3 className="text-sm tech-text text-muted-foreground mb-4">AXE DIALECTIQUE</h3>
            <div className="text-lg font-medium text-foreground mb-2">{axis.name}</div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{axis.description}</p>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: agent.color }} />
                <span className="text-sm font-semibold tech-text">{agent.name}</span>
              </div>
              <span className="text-muted-foreground tech-text">↔</span>
              <Link href={`/agent/${partner.code.toLowerCase()}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="w-3 h-3 rounded-full" style={{ background: partner.color }} />
                <span className="text-sm font-semibold tech-text">{partner.name}</span>
                <span className="text-xs text-muted-foreground greek-text">{partner.greek}</span>
              </Link>
            </div>
          </div>
        )}

        {/* Flux de données */}
        <div className={`bg-card/60 backdrop-blur-sm border ${borderColor} border-opacity-40 rounded-xl p-6 mb-6`}>
          <h3 className="text-sm tech-text text-muted-foreground mb-4">FLUX DE TRANSFORMATION</h3>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-[120px]">
              <div className="text-xs text-muted-foreground mb-1 tech-text">ENTRÉE</div>
              <div className="text-sm text-foreground">Sensorielle</div>
            </div>
            <div className="text-2xl" style={{ color: agent.color }}>→</div>
            <div className="flex-1 min-w-[120px]">
              <div className="text-xs text-muted-foreground mb-1 tech-text">TRANSMUTATION</div>
              <div className="text-sm text-foreground">Symbolique</div>
            </div>
            <div className="text-2xl" style={{ color: agent.color }}>→</div>
            <div className="flex-1 min-w-[120px]">
              <div className="text-xs text-muted-foreground mb-1 tech-text">ÉMISSION</div>
              <div className="text-sm text-foreground">Fractale</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/fractal" className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-lg hover:border-[oklch(0.7_0.15_200)] transition-all text-sm tech-text">
              Visualisation fractale
          </Link>
          <Link href="/canon" className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-lg hover:border-[oklch(0.65_0.2_330)] transition-all text-sm tech-text">
              Canon Fractal
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-lg hover:border-[oklch(0.7_0.15_200)] transition-all text-sm tech-text">
              Tous les agents
          </Link>
        </div>
      </div>
    </div>
  );
}
