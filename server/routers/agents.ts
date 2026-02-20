/**
 * tRPC router pour les agents DIA
 */

import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import {
  getAllAgents,
  getAgentByCode,
  updateAgentStatus,
  updateAgentMetrics,
  addAgentLog,
  getAgentLogs,
  createAgentTask,
  getAgentTasks,
  updateTaskStatus,
  getAgentMetricsHistory,
  initializeAgents,
} from "../agents";

export const agentsRouter = router({
  /**
   * Initialiser les 12 agents DIA
   */
  initialize: protectedProcedure.mutation(async () => {
    await initializeAgents();
    return { success: true };
  }),

  /**
   * Obtenir tous les agents
   */
  list: publicProcedure.query(async () => {
    return await getAllAgents();
  }),

  /**
   * Obtenir un agent par code
   */
  getByCode: publicProcedure
    .input(z.object({ code: z.string() }))
    .query(async ({ input }) => {
      return await getAgentByCode(input.code);
    }),

  /**
   * Obtenir les logs d'un agent
   */
  getLogs: publicProcedure
    .input(z.object({ code: z.string(), limit: z.number().optional() }))
    .query(async ({ input }) => {
      return await getAgentLogs(input.code, input.limit);
    }),

  /**
   * Obtenir les tâches d'un agent
   */
  getTasks: publicProcedure
    .input(
      z.object({
        code: z.string(),
        status: z
          .enum(["pending", "running", "completed", "failed"])
          .optional() as any,
      })
    )
    .query(async ({ input }) => {
      return await getAgentTasks(input.code, input.status);
    }),

  /**
   * Obtenir l'historique des métriques d'un agent
   */
  getMetricsHistory: publicProcedure
    .input(z.object({ code: z.string(), limit: z.number().optional() }))
    .query(async ({ input }) => {
      return await getAgentMetricsHistory(input.code, input.limit);
    }),

  /**
   * Mettre à jour le statut d'un agent (admin only)
   */
  updateStatus: protectedProcedure
    .input(
      z.object({
        code: z.string(),
        status: z.enum(["active", "idle", "error"]) as any,
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized");
      }
      await updateAgentStatus(input.code, input.status as any);
      return { success: true };
    }),

  /**
   * Mettre à jour les métriques d'un agent
   */
  updateMetrics: protectedProcedure
    .input(
      z.object({
        code: z.string(),
        efficiency: z.number().min(0).max(100),
        health: z.number().min(0).max(100),
        load: z.number().min(0).max(100),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await updateAgentMetrics(
        input.code,
        input.efficiency,
        input.health,
        input.load
      );
      return { success: true };
    }),

  /**
   * Ajouter un log pour un agent
   */
  addLog: protectedProcedure
    .input(
      z.object({
        code: z.string(),
        level: z.enum(["info", "warn", "error"]) as any,
        message: z.string(),
        metadata: z.record(z.string(), z.any()).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await addAgentLog(
        input.code,
        input.level as any,
        input.message,
        input.metadata
      );
      return { success: true };
    }),

  /**
   * Créer une tâche pour un agent
   */
  createTask: protectedProcedure
    .input(
      z.object({
        code: z.string(),
        taskType: z.string(),
        input: z.record(z.string(), z.any()).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const result = await createAgentTask(
        input.code,
        input.taskType,
        input.input
      );
      return { success: true, taskId: (result as any)?.insertId };
    }),

  /**
   * Mettre à jour le statut d'une tâche
   */
  updateTaskStatus: protectedProcedure
    .input(
      z.object({
        taskId: z.number(),
        status: z.enum(["pending", "running", "completed", "failed"]) as any,
        output: z.record(z.string(), z.any()).optional(),
        error: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await updateTaskStatus(
        input.taskId,
        input.status as any,
        input.output,
        input.error
      );
      return { success: true };
    }),
});
