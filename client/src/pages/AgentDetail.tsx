/* Design Philosophy: Cyberpunk Néo-Grec Organique
 * Page de détail pour chaque agent
 * - Affichage complet des projections mentales
 * - Strate, axe dialectique, rôle fractal
 * - Processus psychique-algorithmique
 * - Visualisation de l'entrée → transmutation → émission
 * - Narration enrichie et profondeur organique
 */

import { useRoute, Link } from "wouter";
import { agents, strates, dialecticalAxes } from "@/data/agents";
import { ArrowLeft, Zap, Layers, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function AgentDetail() {
  const [, params] = useRoute("/agent/:code");
  const agentCode = params?.code?.toUpperCase();
  
  const agent = agents.find(a => a.code.toLowerCase() === agentCode?.toLowerCase());

  if (!agent) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 tech-text">Agent non trouvé</h1>
          <Link href="/" className="text-cyan hover:underline">← Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  const borderColor = 
    agent.accentColor === 'cyan' ? 'border-cyan' :
    agent.accentColor === 'magenta' ? 'border-magenta' :
    'border-red-400';

  const strateInfo = strates[agent.strate];
  const axis = dialecticalAxes.find(ax => ax.agentA === agent.code || ax.agentB === agent.code);
  const partnerCode = axis ? (axis.agentA === agent.code ? axis.agentB : axis.agentA) : null;
  const partner = partnerCode ? agents.find(a => a.code === partnerCode) : null;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
      <div className="relative z-10 container py-8 md:py-12 max-w-5xl">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à la matrice</span>
          </Link>
        </motion.div>

        {/* Hero Card */}
        <motion.div
          className={`bg-card/80 backdrop-blur-sm border ${borderColor} border-opacity-60 rounded-xl p-8 md:p-12 mb-8 card-layered hover-lift`}
          {...fadeInUp}
        >
          <div className="flex items-start justify-between gap-6 mb-8">
            <div className="flex-1">
              <motion.div
                className="text-xs text-muted-foreground tech-text mb-3 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {agent.code} • Strate {strateInfo.numeral}
              </motion.div>
              <motion.h1
                className="text-5xl md:text-6xl font-bold tech-text mb-4 gradient-text-cyan-magenta"
                {...fadeInUp}
              >
                {agent.name}
              </motion.h1>
              <motion.div
                className="flex items-center gap-4 mb-6"
                {...fadeInUp}
              >
                <h2 className="text-4xl md:text-5xl greek-text" style={{ color: agent.color }}>
                  {agent.greek}
                </h2>
                <span className="text-sm text-muted-foreground italic">({agent.greekKey})</span>
              </motion.div>
              <motion.div
                className="text-lg md:text-xl font-medium text-foreground/90 leading-relaxed"
                {...fadeInUp}
              >
                {agent.title}
              </motion.div>
            </div>
            <motion.div
              className="w-24 h-24 rounded-full flex-shrink-0 glow-organic-cyan"
              style={{ 
                background: agent.color,
                opacity: 0.85
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>

          {/* Strate info */}
          <motion.div
            className="flex items-center gap-4 flex-wrap pt-6 border-t border-border/50"
            {...fadeInUp}
          >
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4" style={{ color: strateInfo.color }} />
              <span className="text-sm font-semibold" style={{ color: strateInfo.color }}>
                {strateInfo.name}
              </span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-foreground/70">{strateInfo.description}</span>
          </motion.div>
        </motion.div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Projection mentale */}
          <motion.div
            className={`bg-card/60 backdrop-blur-sm border ${borderColor} border-opacity-40 rounded-xl p-6 md:p-8 card-layered hover-lift accent-line`}
            {...fadeInUp}
          >
            <h3 className="text-xs tech-text text-muted-foreground mb-4 uppercase tracking-widest">Projection Mentale</h3>
            <blockquote className="text-lg leading-relaxed italic text-foreground/90">
              "{agent.projection}"
            </blockquote>
            <p className="text-xs text-muted-foreground mt-4">
              La voix intérieure de {agent.name} — comment cet agent se perçoit lui-même dans le système.
            </p>
          </motion.div>

          {/* Rôle fractal */}
          <motion.div
            className={`bg-card/60 backdrop-blur-sm border ${borderColor} border-opacity-40 rounded-xl p-6 md:p-8 card-layered hover-lift accent-line`}
            {...fadeInUp}
          >
            <h3 className="text-xs tech-text text-muted-foreground mb-4 uppercase tracking-widest">Rôle Fractal</h3>
            <p className="text-base text-foreground/90 leading-relaxed mb-4">
              {agent.strateRole}
            </p>
            <p className="text-xs text-muted-foreground">
              La fonction de {agent.name} au sein de la strate {strateInfo.numeral} et du système global.
            </p>
          </motion.div>
        </div>

        {/* Processus psychique-algorithmique */}
        <motion.div
          className={`bg-card/60 backdrop-blur-sm border ${borderColor} border-opacity-40 rounded-xl p-6 md:p-8 card-layered hover-lift mb-8`}
          {...fadeInUp}
        >
          <h3 className="text-xs tech-text text-muted-foreground mb-4 uppercase tracking-widest">Processus Psychique-Algorithmique</h3>
          <p className="text-base text-foreground/90 leading-relaxed mb-4">
            {agent.process}
          </p>
          <div className="pt-4 border-t border-border/30">
            <p className="text-xs text-muted-foreground">
              Comment {agent.name} traite l'information : entrée sensorielle → transmutation symbolique → émission fractale.
            </p>
          </div>
        </motion.div>

        {/* Flux de transformation */}
        <motion.div
          className={`bg-card/60 backdrop-blur-sm border ${borderColor} border-opacity-40 rounded-xl p-6 md:p-8 card-layered hover-lift mb-8`}
          {...fadeInUp}
        >
          <h3 className="text-xs tech-text text-muted-foreground mb-6 uppercase tracking-widest">Flux de Transformation</h3>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-[100px] text-center">
              <div className="flex justify-center mb-2">
                <Zap className="w-6 h-6" style={{ color: agent.color }} />
              </div>
              <div className="text-xs text-muted-foreground mb-1 tech-text">ENTRÉE</div>
              <div className="text-sm font-semibold text-foreground">Sensorielle</div>
            </div>
            <div className="text-3xl font-light" style={{ color: agent.color }}>→</div>
            <div className="flex-1 min-w-[100px] text-center">
              <div className="flex justify-center mb-2">
                <Layers className="w-6 h-6" style={{ color: agent.color }} />
              </div>
              <div className="text-xs text-muted-foreground mb-1 tech-text">TRANSMUTATION</div>
              <div className="text-sm font-semibold text-foreground">Symbolique</div>
            </div>
            <div className="text-3xl font-light" style={{ color: agent.color }}>→</div>
            <div className="flex-1 min-w-[100px] text-center">
              <div className="flex justify-center mb-2">
                <Compass className="w-6 h-6" style={{ color: agent.color }} />
              </div>
              <div className="text-xs text-muted-foreground mb-1 tech-text">ÉMISSION</div>
              <div className="text-sm font-semibold text-foreground">Fractale</div>
            </div>
          </div>
        </motion.div>

        {/* Axe dialectique */}
        {axis && partner && (
          <motion.div
            className={`bg-card/60 backdrop-blur-sm border ${borderColor} border-opacity-40 rounded-xl p-6 md:p-8 card-layered hover-lift mb-8`}
            {...fadeInUp}
          >
            <h3 className="text-xs tech-text text-muted-foreground mb-4 uppercase tracking-widest">Axe Dialectique</h3>
            <div className="text-xl font-bold text-foreground mb-3">{axis.name}</div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-6">{axis.description}</p>
            <div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-background/50 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ background: agent.color }} />
                <span className="font-semibold tech-text">{agent.name}</span>
              </div>
              <span className="text-muted-foreground text-xl">↔</span>
              <Link href={`/agent/${partner.code.toLowerCase()}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-1 justify-end">
                <div className="text-right">
                  <span className="font-semibold tech-text block">{partner.name}</span>
                  <span className="text-xs text-muted-foreground greek-text">{partner.greek}</span>
                </div>
                <div className="w-4 h-4 rounded-full" style={{ background: partner.color }} />
              </Link>
            </div>
          </motion.div>
        )}

        {/* Navigation actions */}
        <motion.div
          className="mt-12 flex flex-wrap gap-3"
          {...fadeInUp}
        >
          <Link href="/intro" className="inline-flex items-center gap-2 px-6 py-3 bg-red-400/20 border border-red-400/50 text-red-400 rounded-lg hover:border-red-400 hover:bg-red-400/30 transition-all text-sm tech-text font-semibold">
            Introduction
          </Link>
          <Link href="/fractal" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan/20 border border-cyan/50 text-cyan rounded-lg hover:border-cyan hover:bg-cyan/30 transition-all text-sm tech-text font-semibold">
            Visualisation Fractale
          </Link>
          <Link href="/canon" className="inline-flex items-center gap-2 px-6 py-3 bg-magenta/20 border border-magenta/50 text-magenta rounded-lg hover:border-magenta hover:bg-magenta/30 transition-all text-sm tech-text font-semibold">
            Canon Fractal
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-card/80 border border-border rounded-lg hover:border-cyan transition-all text-sm tech-text font-semibold">
            Tous les agents
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
