import { PrismaClient } from '@/generated/prisma';
import fs from 'fs';
import path from 'path';

function getDatabaseUrl(): string {
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NODE_ENV === 'production') {
    const tmpDbPath = '/tmp/courier-claims-os.db';
    try {
      if (!fs.existsSync(tmpDbPath)) {
        const candidates = [
          path.join(process.cwd(), 'prisma', 'seed.db'),
          path.join(process.cwd(), 'seed.db'),
        ];
        for (const src of candidates) {
          if (fs.existsSync(src)) {
            fs.copyFileSync(src, tmpDbPath);
            break;
          }
        }
      }
      if (fs.existsSync(tmpDbPath)) {
        return `file:${tmpDbPath}`;
      }
    } catch (e) {
      console.error('Database initialization warning:', e);
    }
  }
  return process.env.DATABASE_URL?.startsWith('file:') ? process.env.DATABASE_URL : 'file:./dev.db';
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: getDatabaseUrl(),
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;

export default db;
