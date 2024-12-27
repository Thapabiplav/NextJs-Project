import { text } from "drizzle-orm/mysql-core"
import { pgTable,serial } from "drizzle-orm/pg-core"



pgTable('recipes'),{
  id:serial('id').primaryKey(),
  name:varchar("name",{length:50}.notNull().unique()),
  description:text('description').notNull(),
}