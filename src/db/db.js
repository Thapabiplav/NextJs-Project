import postgres from 'postgres'
import {drizzle} from 'drizzle-orm/postgres-js'

const connectionString= 'postgresql://postgres.jwxvhjvuvmiiuedsgwev:Mayday!02@aws-0-ap-south-1.pooler.supabase.com:6543/postgres'

export const connection = postgres(connectionString)
export const db = drizzle(connection)