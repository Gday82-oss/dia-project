/**
 * Dashboard de monitoring des 12 agents DIA
 * Visualise l'état, les métriques et permet de contrôler les agents
 */

import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, Play, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { getAgentTheme } from "@/data/agentThemes";
import AgentAvatar3D from "@/components/AgentAvatar3D";

export default function AgentsDashboard() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  // Queries
  const agentsList = trpc.agents.list.useQuery();
  const selectedAgentData = selectedAgent
    ? trpc.agents.getByCode.useQuery({ code: selectedAgent })
    : null;
  const agentLogs = selectedAgent
    ? trpc.agents.getLogs.useQuery({ code: selectedAgent, limit: 10 })
    : null;

  // Mutations
  const executeAllMutation = trpc.agentTasks.executeAll.useMutation({
    onSuccess: () => {
      agentsList.refetch();
    },
  });

  const handleExecuteAll = async () => {
    try {
      await executeAllMutation.mutateAsync();
    } catch (error) {
      console.error("Failed to execute all agents:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          Dashboard des Agents DIA
        </h1>
        <p className="text-slate-400">
          Monitoring et contrôle du système multi-agents en temps réel
        </p>
      </div>

      {/* Control Panel */}
      <Card className="bg-slate-800 border-slate-700 mb-8 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Contrôle Global
            </h2>
            <p className="text-slate-400">
              Exécuter toutes les tâches des agents en parallèle
            </p>
          </div>
          <Button
            onClick={handleExecuteAll}
            disabled={executeAllMutation.isPending}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
          >
            {executeAllMutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Exécution en cours...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                Exécuter Tous les Agents
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentsList.data?.map(agent => {
          const theme = getAgentTheme(agent.code);
          const isSelected = selectedAgent === agent.code;

          return (
            <motion.div
              key={agent.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedAgent(agent.code)}
              className="cursor-pointer"
            >
              <Card
                className={`bg-slate-800 border-2 transition-all duration-300 ${
                  isSelected ? "border-cyan-500" : "border-slate-700"
                } hover:border-slate-600 p-6`}
                style={{
                  borderColor:
                    isSelected && theme ? theme.palette.primary : undefined,
                }}
              >
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20">
                    <AgentAvatar3D
                      agentCode={agent.code}
                      agentName={agent.name}
                      agentColor={theme?.palette.primary || "#06b6d4"}
                    />
                  </div>
                </div>

                {/* Agent Info */}
                <h3 className="text-lg font-bold text-white text-center mb-2">
                  {agent.code}
                </h3>
                <p className="text-sm text-slate-400 text-center mb-4">
                  {agent.name}
                </p>

                {/* Status Indicator */}
                <div className="flex items-center justify-center mb-4">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{
                      backgroundColor:
                        agent.status === "active" ? "#10b981" : "#6b7280",
                    }}
                  />
                  <span className="text-sm text-slate-300 capitalize">
                    {agent.status}
                  </span>
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Efficacité</span>
                    <span className="text-white font-semibold">
                      {agent.efficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full transition-all"
                      style={{
                        width: `${agent.efficiency}%`,
                        backgroundColor: theme?.palette.primary || "#06b6d4",
                      }}
                    />
                  </div>

                  <div className="flex justify-between text-xs mt-3">
                    <span className="text-slate-400">Santé</span>
                    <span className="text-white font-semibold">
                      {agent.health}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full transition-all"
                      style={{
                        width: `${agent.health}%`,
                        backgroundColor: theme?.palette.accent || "#8b5cf6",
                      }}
                    />
                  </div>

                  <div className="flex justify-between text-xs mt-3">
                    <span className="text-slate-400">Charge</span>
                    <span className="text-white font-semibold">
                      {agent.load}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full transition-all"
                      style={{
                        width: `${agent.load}%`,
                        backgroundColor: theme?.palette.glow || "#ec4899",
                      }}
                    />
                  </div>
                </div>

                {/* Execute Button */}
                <Button
                  onClick={e => {
                    e.stopPropagation();
                    handleExecuteAll();
                  }}
                  className="w-full text-white text-sm"
                  style={{
                    backgroundColor: theme?.palette.primary || "#06b6d4",
                  }}
                >
                  <Play className="w-3 h-3 mr-2" />
                  Exécuter
                </Button>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Details Panel */}
      {selectedAgent && selectedAgentData?.data && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Détails de {selectedAgent}
            </h2>

            {/* Agent Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <p className="text-slate-400 text-sm">Statut</p>
                <p className="text-white font-semibold capitalize">
                  {selectedAgentData.data.status}
                </p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Efficacité</p>
                <p className="text-white font-semibold">
                  {selectedAgentData.data.efficiency}%
                </p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Santé</p>
                <p className="text-white font-semibold">
                  {selectedAgentData.data.health}%
                </p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Charge</p>
                <p className="text-white font-semibold">
                  {selectedAgentData.data.load}%
                </p>
              </div>
            </div>

            {/* Logs */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Logs Récents
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {agentLogs?.data?.map((log, idx) => (
                  <div key={idx} className="bg-slate-900 rounded p-3 text-sm">
                    <div className="flex justify-between mb-1">
                      <span
                        className="font-semibold"
                        style={{
                          color:
                            log.level === "error"
                              ? "#ef4444"
                              : log.level === "warn"
                                ? "#f59e0b"
                                : "#10b981",
                        }}
                      >
                        {log.level.toUpperCase()}
                      </span>
                      <span className="text-slate-500">
                        {new Date(log.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-slate-300">{log.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
