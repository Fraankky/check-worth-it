import { PrismaClient } from './generated/client/index.js'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'postgres',
  database: 'check_worthit'
})
const adapter = new PrismaPg(pool)

export const prisma = new PrismaClient({ adapter })
export { PrismaClient }