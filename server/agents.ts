/**
 * Helpers pour gérer les agents DIA dans la base de données
 */

import { eq, desc, and } from "drizzle-orm";
import {
  agents,
  agentLogs,
  agentTasks,
  agentMetrics,
  type InsertAgent,
  type InsertAgentLog,
  type InsertAgentTask,
  type InsertAgentMetric,
} from "../drizzle/schema";
import { getDb } from "./db";

/**
 * Initialiser les 12 agents DIA dans la base de données
 */
export async function initializeAgents() {
  const db = await getDb();
  if (!db) return;

  const agentsList = [
    { code: "AGT-001", name: "MINOS" },
    { code: "AGT-002", name: "DIAGNOS" },
    { code: "AGT-003", name: "LUX" },
    { code: "AGT-004", name: "CHRONOS" },
    { code: "AGT-005", name: "LÉTHÉ" },
    { code: "AGT-006", name: "PSYCHE" },
    { code: "AGT-007", name: "DERA" },
    { code: "AGT-008", name: "MÉTIS" },
    { code: "AGT-009", name: "ANIMA" },
    { code: "AGT-010", name: "NOESIS" },
    { code: "AGT-011", name: "EROS" },
    { code: "AGT-012", name: "CHLOROS" },
  ];

  for (const agent of agentsList) {
    try {
      await db
        .insert(agents)
        .values({
          code: agent.code,
          name: agent.name,
          status: "idle",
          efficiency: 0,
          health: 100,
          load: 0,
        })
        .onDuplicateKeyUpdate({
          set: {
            name: agent.name,
          },
        });
    } catch (error) {
      console.warn(`[Agents] Failed to initialize ${agent.code}:`, error);
    }
  }
}

/**
 * Obtenir tous les agents
 */
export async function getAllAgents() {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(agents);
}

/**
 * Obtenir un agent par code
 */
export async function getAgentByCode(code: string) {
  const db = await getDb();
  if (!db) return null;

  const result = await db
    .select()
    .from(agents)
    .where(eq(agents.code, code))
    .limit(1);
  return result.length > 0 ? result[0] : null;
}

/**
 * Mettre à jour le statut d'un agent
 */
export async function updateAgentStatus(
  code: string,
  status: "active" | "idle" | "error"
) {
  const db = await getDb();
  if (!db) return;

  await db.update(agents).set({ status }).where(eq(agents.code, code));
}

/**
 * Mettre à jour les métriques d'un agent
 */
export async function updateAgentMetrics(
  code: string,
  efficiency: number,
  health: number,
  load: number
) {
  const db = await getDb();
  if (!db) return;

  // Mettre à jour l'agent
  await db
    .update(agents)
    .set({ efficiency, health, load })
    .where(eq(agents.code, code));

  // Enregistrer les métriques historiques
  await db.insert(agentMetrics).values({
    agentCode: code,
    efficiency,
    health,
    load,
  });
}

/**
 * Ajouter un log pour un agent
 */
export async function addAgentLog(
  code: string,
  level: "info" | "warn" | "error",
  message: string,
  metadata?: Record<string, unknown>
) {
  const db = await getDb();
  if (!db) return;

  await db.insert(agentLogs).values({
    agentCode: code,
    level,
    message,
    metadata: metadata ? JSON.stringify(metadata) : null,
  });
}

/**
 * Obtenir les logs d'un agent
 */
export async function getAgentLogs(code: string, limit: number = 50) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(agentLogs)
    .where(eq(agentLogs.agentCode, code))
    .orderBy(desc(agentLogs.timestamp))
    .limit(limit);
}

/**
 * Créer une tâche pour un agent
 */
export async function createAgentTask(
  code: string,
  taskType: string,
  input?: Record<string, unknown>
) {
  const db = await getDb();
  if (!db) return null;

  const result = await db.insert(agentTasks).values({
    agentCode: code,
    taskType,
    input: input ? JSON.stringify(input) : null,
    status: "pending",
  });

  return result;
}

/**
 * Obtenir les tâches d'un agent
 */
export async function getAgentTasks(
  code: string,
  status?: "pending" | "running" | "completed" | "failed"
) {
  const db = await getDb();
  if (!db) return [];

  if (status) {
    return await db
      .select()
      .from(agentTasks)
      .where(and(eq(agentTasks.agentCode, code), eq(agentTasks.status, status)))
      .orderBy(desc(agentTasks.createdAt));
  }

  return await db
    .select()
    .from(agentTasks)
    .where(eq(agentTasks.agentCode, code))
    .orderBy(desc(agentTasks.createdAt));
}

/**
 * Mettre à jour le statut d'une tâche
 */
export async function updateTaskStatus(
  taskId: number,
  status: "pending" | "running" | "completed" | "failed",
  output?: Record<string, unknown>,
  error?: string
) {
  const db = await getDb();
  if (!db) return;

  const updates: Record<string, unknown> = { status };

  if (status === "running") {
    updates.startedAt = new Date();
  } else if (status === "completed" || status === "failed") {
    updates.completedAt = new Date();
    if (output) updates.output = JSON.stringify(output);
    if (error) updates.error = error;
  }

  const { id } = agentTasks;
  await db
    .update(agentTasks)
    .set(updates as any)
    .where(eq(id, taskId));
}

/**
 * Obtenir les métriques historiques d'un agent
 */
export async function getAgentMetricsHistory(
  code: string,
  limit: number = 100
) {
  const db = await getDb();
  if (!db) return [];

  const { agentCode, timestamp } = agentMetrics;
  return await db
    .select()
    .from(agentMetrics)
    .where(eq(agentCode, code))
    .orderBy(desc(timestamp))
    .limit(limit);
}
