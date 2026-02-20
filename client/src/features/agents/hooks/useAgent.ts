/**
 * Hook générique pour accéder à un agent DIA par son code ou slug.
 * Retourne l'agent et son thème visuel associé.
 */

import { getAgentByCode, getAgentTheme } from "../agent.data";
import type { Agent, AgentTheme } from "../agent.types";

export interface UseAgentResult {
  agent: Agent | undefined;
  theme: AgentTheme | undefined;
}

/**
 * @param code - Code de l'agent (ex: "AGT-001") ou slug (ex: "agt-001")
 */
export function useAgent(code: string | undefined): UseAgentResult {
  if (!code) return { agent: undefined, theme: undefined };

  const agent = getAgentByCode(code);
  const theme = agent ? getAgentTheme(agent.code) : undefined;

  return { agent, theme };
}
