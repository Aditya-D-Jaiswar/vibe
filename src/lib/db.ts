// Mock database for demo purposes - replace with actual Prisma client after running prisma generate
export const db = {
  user: {
    create: async (data: any) => ({ id: "mock-id", ...data.data }),
    findUnique: async (args: any) => null,
    findMany: async (args: any) => [],
  },
  project: {
    create: async (data: any) => ({ id: "mock-id", ...data.data }),
    findUnique: async (args: any) => null,
    findMany: async (args: any) => [],
  },
  message: {
    create: async (data: any) => ({ id: "mock-id", ...data.data }),
    findMany: async (args: any) => [],
  },
};