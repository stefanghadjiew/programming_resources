import { createAuthClient } from 'better-auth/react'; // make sure to import from better-auth/react

export const { signIn, signUp, useSession } = createAuthClient({
  // you can pass client configuration here
});
