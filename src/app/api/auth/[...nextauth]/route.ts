import NextAuth, { SessionStrategy } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoClient } from 'mongodb';
import { compare } from 'bcryptjs';

const uri = process.env.MONGODB_URI || '';

async function getUser(email: string) {
  // Placeholder: Replace with real DB lookup
  if (email === 'test@myntra.com') {
    return { id: '1', email: 'test@myntra.com', password: '$2a$10$abcdefghijklmnopqrstuv' };
  }
  return null;
}

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Record<string, string> | undefined) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await getUser(credentials.email);
        if (!user) return null;
        // For demo, skip password check. Use bcrypt.compare in real app.
        // const isValid = await compare(credentials.password, user.password);
        // if (!isValid) return null;
        return { id: user.id, email: user.email };
      },
    }),
  ],
  session: { strategy: 'jwt' as SessionStrategy },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions }; 