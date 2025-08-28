// Mock Prisma client for environments where Prisma can't be generated
interface MockPrismaClient {
  user: {
    findMany: () => Promise<any[]>
    findUnique: (args: any) => Promise<any>
    create: (args: any) => Promise<any>
    update: (args: any) => Promise<any>
    delete: (args: any) => Promise<any>
  }
  project: {
    findMany: () => Promise<any[]>
    findUnique: (args: any) => Promise<any>
    create: (args: any) => Promise<any>
    update: (args: any) => Promise<any>
    delete: (args: any) => Promise<any>
  }
  message: {
    create: (args: any) => Promise<any>
  }
}

const createMockPrismaClient = (): MockPrismaClient => ({
  user: {
    findMany: async () => [],
    findUnique: async (args: any) => null,
    create: async (args: any) => ({ id: 'mock-id', ...args.data }),
    update: async (args: any) => ({ id: args.where.id, ...args.data }),
    delete: async (args: any) => ({ id: args.where.id }),
  },
  project: {
    findMany: async () => [],
    findUnique: async (args: any) => null,
    create: async (args: any) => ({ id: 'mock-id', ...args.data }),
    update: async (args: any) => ({ id: args.where.id, ...args.data }),
    delete: async (args: any) => ({ id: args.where.id }),
  },
  message: {
    create: async (args: any) => ({ id: 'mock-id', ...args.data }),
  },
})

let client: any

try {
  // Try to import the real Prisma client
  const { PrismaClient } = require("@prisma/client")
  
  const globalForPrisma = globalThis as unknown as {
    prisma: any | undefined
  }

  client = globalForPrisma.prisma ?? new PrismaClient({
    log: ["query"],
  })

  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client
} catch (error) {
  // If Prisma client is not available, use mock
  console.warn("Prisma client not available, using mock client")
  client = createMockPrismaClient()
}

export const db = client