/**
 * Page Services — Offres professionnelles structurées par axes
 * Tech & IA, Création & Média, Stratégie & Conseil, Humain & Résilience, Mémoire & Structuration
 */

import { motion } from "framer-motion";
import { Code, Palette, Zap, Heart, Archive } from "lucide-react";
import { agents } from "@/data/agents";

export default function Services() {
  const services = [
    {
      id: "tech",
      title: "Tech & IA",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      description: "Architecture IA multi-agents, audit sécurité, automatisation",
      agents: ["MINOS", "DIAGNOS", "DERA"],
      offerings: [
        "Conception d'architectures IA multi-agents",
        "Audit technique et refactorisation",
        "Sécurité Linux et infrastructure cloud",
        "Protection API et architecture sécurisée",
      ],
    },
    {
      id: "creation",
      title: "Création & Média",
      icon: Palette,
      color: "from-amber-500 to-orange-500",
      description: "Livrets pédagogiques, design web, identité visuelle",
      agents: ["LUX", "PSYCHE"],
      offerings: [
        "Design web et UI/UX",
        "Livrets pédagogiques et contenus visuels",
        "Identité visuelle et branding",
        "Data visualisation et motion design",
      ],
    },
    {
      id: "strategy",
      title: "Stratégie & Conseil",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      description: "Conseil transformation digitale, roadmap IA",
      agents: ["MÉTIS", "NOESIS", "CHRONOS"],
      offerings: [
        "Conseil transformation digitale",
        "Roadmap produit et planification stratégique",
        "Growth hacking et optimisation SEO",
        "Design thinking et intelligence artificielle conceptuelle",
      ],
    },
    {
      id: "human",
      title: "Humain & Résilience",
      icon: Heart,
      color: "from-red-500 to-rose-500",
      description: "Coaching, prévention santé mentale, cohésion d'équipe",
      agents: ["ANIMA", "EROS", "CHLOROS"],
      offerings: [
        "Coaching sportif et programmes de remise en forme",
        "Ateliers motivation et résilience",
        "Prévention burn-out et santé mentale",
        "Facilitation d'équipe et intelligence collective",
      ],
    },
    {
      id: "memory",
      title: "Mémoire & Structuration",
      icon: Archive,
      color: "from-slate-500 to-gray-500",
      description: "Documentation, knowledge base, structuration d'organisation",
      agents: ["LÉTHÉ"],
      offerings: [
        "Documentation et knowledge management",
        "Archivage sécurisé et versioning",
        "Structuration d'organisation et processus",
        "Backup et récupération de données",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-magenta-500 to-blue-500 bg-clip-text text-transparent">
            Nos Offres Professionnelles
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            5 axes stratégiques pour transformer votre organisation. Chaque axe combine expertise technique et approche humaine, orchestrée par nos 12 agents IA spécialisés.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300 blur-xl`} />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 group-hover:border-slate-600/50 rounded-lg p-8 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-slate-400">{service.description}</p>
                    </div>
                    <div className={`p-3 bg-gradient-to-br ${service.color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Agents */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-slate-300 mb-3">Agents impliqués</p>
                    <div className="flex flex-wrap gap-2">
                      {service.agents.map((agentName) => {
                        const agent = agents.find((a) => a.name === agentName);
                        return (
                          <span
                            key={agentName}
                            className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-200 rounded-full border border-slate-600/50"
                          >
                            {agentName}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Offerings */}
                  <div>
                    <p className="text-sm font-semibold text-slate-300 mb-3">Prestations</p>
                    <ul className="space-y-2">
                      {service.offerings.map((offering, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 bg-gradient-to-br ${service.color}`} />
                          {offering}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button className={`w-full mt-6 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 rounded-lg`}>
                    En savoir plus
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border border-cyan-500/30 rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Approche Intégrée</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Nos 5 axes ne sont pas isolés — ils interagissent continuellement. MINOS architécte, DIAGNOS valide, LUX visualise, MÉTIS optimise, et CHLOROS assure la durabilité. Le noyau GDAY (votre intention) dirige l'ensemble.
          </p>
          <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
            Demander une consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
}
