import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { getSession, setSession, clearSession, hashPassword, verifyPassword } from '@/lib/auth';
import { ensureWorkspaceCouriers, seedSampleShipmentsForWorkspace } from '@/lib/sla-engine';

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ authenticated: false });
    }

    const user = await db.user.findUnique({
      where: { id: session.userId },
      include: { workspace: true },
    });

    if (!user) {
      return NextResponse.json({ authenticated: false });
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        authProvider: user.authProvider,
      },
      workspace: user.workspace,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ authenticated: false, error: msg });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action } = body;

    if (action === 'logout') {
      await clearSession();
      return NextResponse.json({ success: true });
    }

    if (action === 'signup') {
      const { companyName, name, email, password, currency = 'GBP', country = 'United Kingdom', loadSampleData = true } = body;
      if (!companyName || !email || !password) {
        return NextResponse.json({ error: 'Company name, email, and password are required.' }, { status: 400 });
      }

      const cleanEmail = email.trim().toLowerCase();
      const existingUser = await db.user.findUnique({ where: { email: cleanEmail } });
      if (existingUser) {
        return NextResponse.json({ error: 'An account with this email already exists. Please sign in.' }, { status: 400 });
      }

      const baseSlug = companyName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'workspace';
      const slug = `${baseSlug}-${Date.now().toString(36).slice(-4)}`;

      const workspace = await db.workspace.create({
        data: {
          name: companyName.trim(),
          slug,
          email: cleanEmail,
          currency,
          country,
          senderName: `${companyName.trim()} Claims Desk`,
          senderEmail: cleanEmail,
        },
      });

      const user = await db.user.create({
        data: {
          workspaceId: workspace.id,
          name: (name || cleanEmail.split('@')[0]).trim(),
          email: cleanEmail,
          passwordHash: hashPassword(password),
          authProvider: 'EMAIL',
          role: 'ADMIN',
        },
      });

      await ensureWorkspaceCouriers(workspace.id);
      if (loadSampleData) {
        await seedSampleShipmentsForWorkspace(workspace.id);
      }

      await setSession({
        userId: user.id,
        workspaceId: workspace.id,
        email: user.email,
        name: user.name,
        workspaceName: workspace.name,
        role: user.role,
      });

      return NextResponse.json({ success: true, user, workspace });
    }

    if (action === 'login') {
      const { email, password } = body;
      if (!email || !password) {
        return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
      }

      const cleanEmail = email.trim().toLowerCase();
      const user = await db.user.findUnique({
        where: { email: cleanEmail },
        include: { workspace: true },
      });

      if (!user || !user.passwordHash || !verifyPassword(password, user.passwordHash)) {
        return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
      }

      await ensureWorkspaceCouriers(user.workspaceId);

      await setSession({
        userId: user.id,
        workspaceId: user.workspaceId,
        email: user.email,
        name: user.name,
        workspaceName: user.workspace.name,
        role: user.role,
      });

      return NextResponse.json({ success: true, user, workspace: user.workspace });
    }

    if (action === 'google') {
      const { email, name, companyName, currency = 'GBP', loadSampleData = true } = body;
      if (!email || !email.includes('@')) {
        return NextResponse.json({ error: 'Please enter a valid Google email address.' }, { status: 400 });
      }

      const cleanEmail = email.trim().toLowerCase();
      let user = await db.user.findUnique({
        where: { email: cleanEmail },
        include: { workspace: true },
      });

      if (!user) {
        const effectiveCompany = (companyName || `${name || cleanEmail.split('@')[0]}'s Logistics Workspace`).trim();
        const baseSlug = effectiveCompany.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'workspace';
        const slug = `${baseSlug}-${Date.now().toString(36).slice(-4)}`;

        const workspace = await db.workspace.create({
          data: {
            name: effectiveCompany,
            slug,
            email: cleanEmail,
            currency,
            senderName: `${effectiveCompany} Claims Desk`,
            senderEmail: cleanEmail,
          },
        });

        user = await db.user.create({
          data: {
            workspaceId: workspace.id,
            name: (name || cleanEmail.split('@')[0]).trim(),
            email: cleanEmail,
            authProvider: 'GOOGLE',
            role: 'ADMIN',
          },
          include: { workspace: true },
        });

        await ensureWorkspaceCouriers(workspace.id);
        if (loadSampleData) {
          await seedSampleShipmentsForWorkspace(workspace.id);
        }
      } else {
        await ensureWorkspaceCouriers(user.workspaceId);
      }

      await setSession({
        userId: user.id,
        workspaceId: user.workspaceId,
        email: user.email,
        name: user.name,
        workspaceName: user.workspace.name,
        role: user.role,
      });

      return NextResponse.json({ success: true, user, workspace: user.workspace });
    }

    return NextResponse.json({ error: 'Unknown auth action' }, { status: 400 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
