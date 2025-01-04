import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login", // Customize sign-in page
    error: "/dashboard", // Redirect to login on errors
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("Sign-in callback triggered:", { user, account, profile });
      return true; // Allow all logins
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  debug: true, // Enable detailed logs
});

export { handler as GET, handler as POST };
