import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import crypto from 'crypto';

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || 'courier-claims-os-enterprise-secret-key-2026'
);

export const COOKIE_NAME = 'ccos_session';

export interface SessionPayload {
  userId: string;
  workspaceId: string;
  email: string;
  name: string;
  workspaceName: string;
  role: string;
}

export function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password + '_ccos_salt').digest('hex');
}

export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash;
}

export async function createToken(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('14d')
    .sign(SECRET_KEY);
}

export async function verifyToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<SessionPayload | null> {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(COOKIE_NAME);
    if (!cookie?.value) return null;
    return await verifyToken(cookie.value);
  } catch {
    return null;
  }
}

export async function setSession(payload: SessionPayload) {
  const token = await createToken(payload);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 14,
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
