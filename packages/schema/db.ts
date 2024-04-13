import { PrismaClient } from './prisma/generated/client'
import { PrismaClient as PrismaEdge } from './prisma/generated/client/edge'

export const prisma = process.env.NODE_ENV !== 'local' ? new PrismaEdge({ datasourceUrl: 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNmU1MzM2ZDctMjVkNS00OGRiLThjMDUtNmFiMGJmZWQ3MWZhIiwidGVuYW50X2lkIjoiMzFjMzk3Y2ExYzQyNzVhOGYyNGMxYTMwN2EwMzdjN2JhOGZlZjRkYjM0ODdmMjE1YmIyODFmNmRkOTdmMGNjYSIsImludGVybmFsX3NlY3JldCI6IjYyNGEwZmQ2LTdjNjEtNGVkNy04YTg3LWExMzQzNjUxMTk0YiJ9.xY0-n8kAELzx0uMifjO5e5MAyuP254hUpLh0WjV5ux4' }) : new PrismaClient()
// export const prisma = process.env.NODE_ENV === 'production' ? new PrismaEdge() : new PrismaClient()
