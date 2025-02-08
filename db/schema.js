import { int, mysqlTable, bigint, varchar } from 'drizzle-orm/mysql-core';
export const usersTable = mysqlTable('users_table', {
    uid: bigint('id', {
        mode: 'number',
        unsigned: true,
    })
    .notNull()
    .autoincrement()
    .primaryKey()
    .unique(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
})