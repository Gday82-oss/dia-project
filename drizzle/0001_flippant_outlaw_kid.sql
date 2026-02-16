CREATE TABLE `agentLogs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`agentCode` varchar(16) NOT NULL,
	`level` enum('info','warn','error') NOT NULL DEFAULT 'info',
	`message` text NOT NULL,
	`metadata` text,
	`timestamp` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `agentLogs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `agentMetrics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`agentCode` varchar(16) NOT NULL,
	`efficiency` int NOT NULL,
	`health` int NOT NULL,
	`load` int NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `agentMetrics_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `agentTasks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`agentCode` varchar(16) NOT NULL,
	`taskType` varchar(64) NOT NULL,
	`status` enum('pending','running','completed','failed') NOT NULL DEFAULT 'pending',
	`input` text,
	`output` text,
	`error` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`startedAt` timestamp,
	`completedAt` timestamp,
	CONSTRAINT `agentTasks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `agents` (
	`id` int AUTO_INCREMENT NOT NULL,
	`code` varchar(16) NOT NULL,
	`name` varchar(64) NOT NULL,
	`status` enum('active','idle','error') NOT NULL DEFAULT 'idle',
	`lastUpdate` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`efficiency` int NOT NULL DEFAULT 0,
	`health` int NOT NULL DEFAULT 100,
	`load` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `agents_id` PRIMARY KEY(`id`),
	CONSTRAINT `agents_code_unique` UNIQUE(`code`)
);
