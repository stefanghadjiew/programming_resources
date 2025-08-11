import { createAuthClient } from 'better-auth/react'; // make sure to import from better-auth/react

export const PROVIDERS = {
  Github: 'Github',
  Facebook: 'Facebook',
  Google: 'Google'
} as const;

export type Provider = (typeof PROVIDERS)[keyof typeof PROVIDERS];

const { signIn, signUp, useSession, signOut } = createAuthClient({
  // you can pass client configuration here
});

const signInWithSocial = async (provider: Provider) => {
  try {
    await signIn.social({ provider: provider.toLowerCase() });
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
