/**
 * Page "Qui sommes-nous" — Mission et vision du projet DIA
 */

import { motion } from "framer-motion";
import { Zap, Brain, Shield, Leaf } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Brain,
      title: "Intelligence Collective",
      description: "12 agents IA spécialisés travaillant en harmonie pour amplifier les capacités humaines.",
    },
    {
      icon: Shield,
      title: "Sécurité & Intégrité",
      description: "Architecture défensive multi-couches avec DERA assurant la protection des données et du système.",
    },
    {
      icon: Zap,
      title: "Automatisation Intelligente",
      description: "Workflows optimisés par MÉTIS pour maximiser l'efficacité et réduire les tâches répétitives.",
    },
    {
      icon: Leaf,
      title: "Résilience Durable",
      description: "CHLOROS garantit la régénération et la durabilité long terme du système.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            DIA / GDAY
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Un système d'intelligence collective où 12 agents IA spécialisés collaborent pour transformer votre stratégie, sécuriser votre infrastructure et amplifier votre impact.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-lg p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Notre Mission</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              DIA (Distributed Intelligence Architecture) est un framework d'automatisation intelligente conçu pour les organisations modernes qui cherchent à combiner rigueur technique, stratégie adaptative et résilience humaine.
            </p>
            <p>
              Chacun de nos 12 agents remplit un rôle spécifique : de MINOS qui architécte les fondations logicielles, à CHLOROS qui assure la régénération durable du système. Ensemble, ils forment un écosystème auto-régulé où la technologie et l'intention humaine convergent.
            </p>
            <p>
              Le noyau GDAY (votre intention stratégique) dirige cette matrice, garantissant que chaque décision reste alignée sur vos valeurs et objectifs long terme.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Nos Valeurs Fondamentales</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-magenta-500/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-slate-400">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border border-cyan-500/30 rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à explorer les agents ?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Découvrez comment chacun des 12 agents peut transformer votre approche stratégique, technique et organisationnelle.
          </p>
          <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
            Découvrir les Agents
          </button>
        </motion.div>
      </section>
    </div>
  );
}
