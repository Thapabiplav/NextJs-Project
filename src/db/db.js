import postgres from 'postgres'
import {drizzle} from 'drizzle-orm'

const connectionString= ''

const connection = postgres(connectionString)
export const db = drizzle(connection)