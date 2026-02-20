import {
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Tables pour les agents DIA
export const agents = mysqlTable("agents", {
  id: int("id").autoincrement().primaryKey(),
  code: varchar("code", { length: 16 }).notNull().unique(), // AGT-001, AGT-002, etc.
  name: varchar("name", { length: 64 }).notNull(), // MINOS, DIAGNOS, etc.
  status: mysqlEnum("status", ["active", "idle", "error"])
    .default("idle")
    .notNull(),
  lastUpdate: timestamp("lastUpdate").defaultNow().onUpdateNow().notNull(),
  efficiency: int("efficiency").default(0).notNull(), // 0-100
  health: int("health").default(100).notNull(), // 0-100
  load: int("load").default(0).notNull(), // 0-100
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Agent = typeof agents.$inferSelect;
export type InsertAgent = typeof agents.$inferInsert;

// Logs des agents
export const agentLogs = mysqlTable("agentLogs", {
  id: int("id").autoincrement().primaryKey(),
  agentCode: varchar("agentCode", { length: 16 }).notNull(),
  level: mysqlEnum("level", ["info", "warn", "error"])
    .default("info")
    .notNull(),
  message: text("message").notNull(),
  metadata: text("metadata"), // JSON string
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export type AgentLog = typeof agentLogs.$inferSelect;
export type InsertAgentLog = typeof agentLogs.$inferInsert;

// Tâches assignées aux agents
export const agentTasks = mysqlTable("agentTasks", {
  id: int("id").autoincrement().primaryKey(),
  agentCode: varchar("agentCode", { length: 16 }).notNull(),
  taskType: varchar("taskType", { length: 64 }).notNull(), // "analyze", "optimize", "secure", etc.
  status: mysqlEnum("status", ["pending", "running", "completed", "failed"])
    .default("pending")
    .notNull(),
  input: text("input"), // JSON string
  output: text("output"), // JSON string
  error: text("error"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  startedAt: timestamp("startedAt"),
  completedAt: timestamp("completedAt"),
});

export type AgentTask = typeof agentTasks.$inferSelect;
export type InsertAgentTask = typeof agentTasks.$inferInsert;

// Métriques des agents (historique)
export const agentMetrics = mysqlTable("agentMetrics", {
  id: int("id").autoincrement().primaryKey(),
  agentCode: varchar("agentCode", { length: 16 }).notNull(),
  efficiency: int("efficiency").notNull(),
  health: int("health").notNull(),
  load: int("load").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export type AgentMetric = typeof agentMetrics.$inferSelect;
export type InsertAgentMetric = typeof agentMetrics.$inferInsert;
