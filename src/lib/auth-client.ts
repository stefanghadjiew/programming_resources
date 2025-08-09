import { createAuthClient } from 'better-auth/react'; // make sure to import from better-auth/react

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PROVIDERS = ['github', 'facebook', 'google'] as const;
type Provider = (typeof PROVIDERS)[number];

const { signIn, signUp, useSession, signOut } = createAuthClient({
  // you can pass client configuration here
});

const signInWithSocial = async (provider: Provider) => {
  try {
    await signIn.social({ provider });
  } catch (error) {
    console.error(`Sign-in with ${provider} failed`, error);
    throw error;
  }
};
const signUserOut = async (callback: () => void) => {
  await signOut({
    fetchOptions: {
      onSuccess: () => callback(),
      onError: (error) => console.error('Error when trying to sign user out :', error.error)
    }
  });
};
export { signInWithSocial, signUp, useSession, signUserOut };
