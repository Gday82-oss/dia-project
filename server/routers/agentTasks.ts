/**
 * tRPC router pour exécuter les tâches des agents
 */

import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import {
  minosAnalyzeCode,
  diagnosAnalyzeCoherence,
  luxOptimizeVisualization,
  chronosSyncEvents,
  letheManageMemory,
  psycheGenerateNarrative,
  deraSecureSystem,
  metisOptimizeStrategy,
  animaGenerateMotion,
  noesisSynthesizeInsights,
  erosCreateConnections,
  chlorosRegenerateSystem,
  executeAllAgentTasks,
} from "../services/agentServices";

export const agentTasksRouter = router({
  /**
   * Exécuter la tâche de MINOS
   */
  executeMinos: publicProcedure
    .input(z.object({ code: z.string() }))
    .mutation(async ({ input }) => {
      return await minosAnalyzeCode(input.code);
    }),

  /**
   * Exécuter la tâche de DIAGNOS
   */
  executeDiagnos: publicProcedure.mutation(async () => {
    return await diagnosAnalyzeCoherence();
  }),

  /**
   * Exécuter la tâche de LUX
   */
  executeLux: publicProcedure.mutation(async () => {
    return await luxOptimizeVisualization();
  }),

  /**
   * Exécuter la tâche de CHRONOS
   */
  executeChronos: publicProcedure.mutation(async () => {
    return await chronosSyncEvents();
  }),

  /**
   * Exécuter la tâche de LÉTHÉ
   */
  executeLethe: publicProcedure.mutation(async () => {
    return await letheManageMemory();
  }),

  /**
   * Exécuter la tâche de PSYCHE
   */
  executePsyche: publicProcedure
    .input(z.object({ context: z.string() }))
    .mutation(async ({ input }) => {
      return await psycheGenerateNarrative(input.context);
    }),

  /**
   * Exécuter la tâche de DERA
   */
  executeDera: publicProcedure.mutation(async () => {
    return await deraSecureSystem();
  }),

  /**
   * Exécuter la tâche de MÉTIS
   */
  executeMetis: publicProcedure.mutation(async () => {
    return await metisOptimizeStrategy();
  }),

  /**
   * Exécuter la tâche d'ANIMA
   */
  executeAnima: publicProcedure.mutation(async () => {
    return await animaGenerateMotion();
  }),

  /**
   * Exécuter la tâche de NOESIS
   */
  executeNoesis: publicProcedure.mutation(async () => {
    return await noesisSynthesizeInsights();
  }),

  /**
   * Exécuter la tâche d'EROS
   */
  executeEros: publicProcedure.mutation(async () => {
    return await erosCreateConnections();
  }),

  /**
   * Exécuter la tâche de CHLOROS
   */
  executeChlotos: publicProcedure.mutation(async () => {
    return await chlorosRegenerateSystem();
  }),

  /**
   * Exécuter toutes les tâches des agents en parallèle
   */
  executeAll: publicProcedure.mutation(async () => {
    return await executeAllAgentTasks();
  }),
});
