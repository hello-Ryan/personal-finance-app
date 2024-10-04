// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration
import { sql } from "drizzle-orm";
import {
  integer,
  pgTableCreator,
  serial,
  timestamp,
  uuid,
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

export const categories = createTable("category", {
  id: serial("id").primaryKey().notNull(),
  userId: varchar("user_id", { length: 256 }).notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const transactions = createTable("transaction", {
  id: serial("id").primaryKey().notNull(),
  userId: varchar("user_id", { length: 256 }).notNull(),
  categoryId: integer("category_id").references(() => categories.id),
  title: varchar("title", { length: 256 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
  amount: integer("amount").notNull(),
  description: varchar("desription", { length: 256 }),
  date: timestamp("date", { withTimezone: true }).defaultNow().notNull(),
});
