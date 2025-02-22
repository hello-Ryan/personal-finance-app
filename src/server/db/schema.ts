// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  pgTableCreator,
  real,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `personal-finance-app_${name}`,
);

export const transactions = createTable("transaction", {
  id: serial("id").primaryKey(),
  userId: varchar("userId", { length: 256 }).notNull(),
  title: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).default(""),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
  transactionDate: timestamp("transaction_date", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  amount: real("amount").default(0),
});
