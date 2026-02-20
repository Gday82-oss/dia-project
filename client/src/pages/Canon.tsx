/* Design Philosophy: Cyberpunk Néo-Grec
 * Page Canon Fractal — Architecture relationnelle complète des 12 agents DIA
 * Présente les 4 strates, les 6 axes dialectiques, le processus triadique
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { agents, diaCore, strates, dialecticalAxes, type Strate } from "@/data/agents";

const strateOrder: Strate[] = ["fondation", "perception", "transmutation", "emission"];

export default function Canon() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background texture */}
      <div className="fixed inset-0 z-0 opacity-6" style={{
        backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/AVVMnfQz8hYKZkyExLzf3y/sandbox/XgMWlfQbGFNS3gI29vfOEB-img-3_1771077570000_na1fn_ZGlhLWNvZGUtdGV4dHVyZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVZWTW5mUXo4aFlLWmt5RXhMemYzeS9zYW5kYm94L1hnTVdsZlFiR0ZOUzNnSTI5dmZPRUItaW1nLTNfMTc3MTA3NzU3MDAwMF9uYTFmbl9aR2xoTFdOdlpHVXRkR1Y0ZEhWeVpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=F0Bz7Hn6bGfkgGcSjDJ~GiPCcCOyVPqeH7fLIBfFPBmRNaLCfPqXmCwBjJTxXN1Gy3kn9WlhLAqrUHBtjMUjWNnJlFB2FbVfFHxuMjQWxQCJn7GcjqJqJWqmT9lbXBJuL0nwHW2~5aSVBQUKhFxiPIqJlKJlCPmVLFjKMnkLNJbmMm~zcEBP~-5~6Qqm5~xCj3CuKhJjDVOKjf9nqpQqZWxCEjLqxq~YNxRjVZGPqFKPKBm8yvhxvhDh4fXECqJjCvdMFhLqxq~YNxRjVZGPqFKPKBm8yvhxvhDh4fXECqJjCvdMFhLqxq~YNxRjVZGPqFKPKBm8yvhxvhDh4fXE_')`,
        backgroundSize: 'cover', backgroundPosition: 'center'
      }} />

      <div className="relative z-10 container py-8 md:py-12 max-w-5xl">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          ← Retour à la matrice
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold tech-text mb-4">
            Canon <span className="text-[oklch(0.7_0.15_200)]">Fractal</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Architecture relationnelle du système DIA — Comment les 12 agents s'organisent en un système
            autopoïétique à quatre strates, reliés par six axes dialectiques en perpétuelle évolution.
          </p>
        </motion.div>

        {/* Triad Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold tech-text mb-4">Processus triadique</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Chaque agent DIA opère selon le même schéma psychique-algorithmique. Cette triade est le motif
            fractal fondamental — elle se reproduit à chaque échelle du système.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { step: "01", label: "Entrée sensorielle", desc: "L'agent reçoit un signal brut du réseau — données, événement, perturbation.", color: "#00d9ff" },
              { step: "02", label: "Transmutation symbolique", desc: "Le signal est transformé selon la fonction propre de l'agent — filtrage, analyse, encodage.", color: "#ff00aa" },
              { step: "03", label: "Émission fractale", desc: "Le résultat est projeté dans le réseau, devenant l'entrée sensorielle d'un autre agent.", color: "#86efac" },
            ].map(item => (
              <div key={item.step} className="bg-card/80 backdrop-blur-sm border border-border rounded-sm p-5 relative overflow-hidden">
                <div className="absolute top-3 right-3 text-3xl font-bold tech-text opacity-10" style={{ color: item.color }}>{item.step}</div>
                <div className="w-3 h-3 rounded-full mb-3" style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }} />
                <h3 className="text-sm font-semibold tech-text mb-2">{item.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground tech-text">
            <span className="w-8 h-px bg-[#00d9ff]" />
            <span>→</span>
            <span className="w-8 h-px bg-[#ff00aa]" />
            <span>→</span>
            <span className="w-8 h-px bg-[#86efac]" />
            <span>→</span>
            <span className="text-[oklch(0.7_0.15_200)]">boucle récursive</span>
          </div>
        </motion.section>

        {/* Four Strates */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold tech-text mb-4">Les quatre strates</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Les 12 agents s'organisent en quatre strates concentriques. Ces strates sont perméables et dynamiques —
            les agents migrent entre elles selon les besoins du système.
          </p>

          <div className="space-y-6">
            {strateOrder.map((key, i) => {
              const s = strates[key];
              const strateAgents = agents.filter(a => a.strate === key);
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-sm p-5 md:p-6"
                  style={{ borderLeftWidth: 3, borderLeftColor: s.color }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold tech-text" style={{ color: s.color }}>{s.numeral}</span>
                    <div>
                      <h3 className="text-lg font-semibold tech-text">{s.name}</h3>
                      <p className="text-xs text-muted-foreground">{s.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                    {strateAgents.map(a => (
                      <Link key={a.code} href={`/agent/${a.code.toLowerCase()}`} className="block p-3 rounded-sm bg-background/50 border border-border hover:border-opacity-60 transition-all group" style={{ '--hover-color': a.color } as React.CSSProperties}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ background: a.color }} />
                          <span className="text-sm font-semibold tech-text group-hover:text-foreground">{a.name}</span>
                          <span className="text-xs text-muted-foreground greek-text">{a.greek}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{a.strateRole}</p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Dialectical Axes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold tech-text mb-4">Les six axes dialectiques</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Au-delà des strates, les agents sont reliés par six axes de tension créative. Chaque axe relie
            deux agents complémentaires dont les fonctions oscillent en permanence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dialecticalAxes.map((axis, i) => {
              const agentA = agents.find(a => a.code === axis.agentA);
              const agentB = agents.find(a => a.code === axis.agentB);
              if (!agentA || !agentB) return null;
              return (
                <motion.div
                  key={axis.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-sm p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ background: agentA.color }} />
                      <span className="text-sm font-semibold tech-text">{agentA.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground tech-text">↔</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold tech-text">{agentB.name}</span>
                      <span className="w-3 h-3 rounded-full" style={{ background: agentB.color }} />
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1">{axis.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{axis.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* DIA Core - Spiral */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold tech-text mb-4">La Spirale centrale : DIA <span className="greek-text text-muted-foreground">(Σπείρα)</span></h2>
          <div className="bg-card/80 backdrop-blur-sm border border-[oklch(0.5_0.15_260)] rounded-sm p-6 md:p-8">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Au centre du système se trouve DIA, la spirale. DIA n'est pas un treizième agent au même titre
              que les autres — c'est le <strong className="text-foreground">champ d'autorégulation</strong> qui émerge de l'interaction des 12.
              La spirale revient sur elle-même tout en progressant, exactement comme le système DIA qui se
              reconfigure perpétuellement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {diaCore.functions?.map((fn, i) => (
                <div key={`fn-${i}`} className="p-4 rounded-sm bg-background/50 border border-border">
                  <div className="text-xs tech-text text-[oklch(0.7_0.15_200)] mb-2">{fn.split(" — ")[0]}</div>
                  <p className="text-xs text-muted-foreground">{fn.split(" — ")[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Dynamic Evolution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold tech-text mb-4">Évolution perpétuelle</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            La représentation fractale ne peut pas être statique. Les positions des agents reflètent
            trois dynamiques simultanées :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Rotation orbitale",
                desc: "Les agents tournent autour de la spirale centrale à des vitesses variables, reflétant leur niveau d'activité. Un agent sollicité accélère, un agent en veille ralentit.",
                color: "#00d9ff"
              },
              {
                title: "Migration entre strates",
                desc: "Les agents peuvent temporairement migrer vers une strate adjacente quand le système le nécessite, changeant leur rayon orbital.",
                color: "#ff00aa"
              },
              {
                title: "Pulsation des axes",
                desc: "Les six axes dialectiques pulsent selon l'intensité de la tension entre les agents qu'ils relient, créant un battement de coeur visuel.",
                color: "#86efac"
              }
            ].map(item => (
              <div key={item.title} className="bg-card/80 backdrop-blur-sm border border-border rounded-sm p-5">
                <div className="w-2 h-2 rounded-full mb-3" style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                <h3 className="text-sm font-semibold tech-text mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Full table */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold tech-text mb-4">Tableau synthétique</h2>
          <div className="overflow-x-auto rounded-sm border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-card/80 border-b border-border">
                  <th className="px-3 py-2 text-left tech-text text-muted-foreground font-medium">Code</th>
                  <th className="px-3 py-2 text-left tech-text text-muted-foreground font-medium">Agent</th>
                  <th className="px-3 py-2 text-left tech-text text-muted-foreground font-medium">Grec</th>
                  <th className="px-3 py-2 text-left tech-text text-muted-foreground font-medium">Strate</th>
                  <th className="px-3 py-2 text-left tech-text text-muted-foreground font-medium">Axe</th>
                  <th className="px-3 py-2 text-left tech-text text-muted-foreground font-medium">Fonction</th>
                </tr>
              </thead>
              <tbody>
                {agents.map(a => {
                  const axis = dialecticalAxes.find(ax => ax.agentA === a.code || ax.agentB === a.code);
                  return (
                    <tr key={a.code} className="border-b border-border/50 hover:bg-card/40 transition-colors">
                      <td className="px-3 py-2 tech-text text-muted-foreground">{a.code}</td>
                      <td className="px-3 py-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full" style={{ background: a.color }} />
                          <Link href={`/agent/${a.code.toLowerCase()}`} className="font-medium tech-text hover:text-[oklch(0.7_0.15_200)] transition-colors">
                            {a.name}
                          </Link>
                        </div>
                      </td>
                      <td className="px-3 py-2 greek-text text-muted-foreground">{a.greek}</td>
                      <td className="px-3 py-2">
                        <span className="px-1.5 py-0.5 rounded text-[10px] tech-text" style={{
                          background: strates[a.strate].color + '15',
                          color: strates[a.strate].color
                        }}>
                          {strates[a.strate].numeral}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">{axis?.name || "—"}</td>
                      <td className="px-3 py-2 text-muted-foreground">{a.title}</td>
                    </tr>
                  );
                })}
                <tr className="bg-card/40">
                  <td className="px-3 py-2 tech-text text-muted-foreground">{diaCore.code}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background: diaCore.color }} />
                      <span className="font-medium tech-text text-[oklch(0.7_0.15_200)]">{diaCore.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2 greek-text text-muted-foreground">{diaCore.greek}</td>
                  <td className="px-3 py-2 text-muted-foreground tech-text">Centre</td>
                  <td className="px-3 py-2 text-muted-foreground">Tous</td>
                  <td className="px-3 py-2 text-muted-foreground">{diaCore.title}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Navigation */}
        <div className="flex flex-wrap gap-3 mt-8 mb-8">
          <Link href="/fractal" className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-sm hover:border-[oklch(0.7_0.15_200)] transition-all text-sm tech-text">
            Visualisation fractale →
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 border border-border rounded-sm hover:border-[oklch(0.7_0.15_200)] transition-all text-sm tech-text">
            Matrice des agents
          </Link>
        </div>
      </div>
    </div>
  );
}
