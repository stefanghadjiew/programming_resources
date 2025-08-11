'use server';

import { auth } from '@lib';
import { redirect } from 'next/navigation';

// TODO : add user to DB once DB adapter is created

const signUserIn = async (formdata: FormData) => {
  const rawFormData = {
    email: formdata.get('email') as string,
    password: formdata.get('password') as string
  };
  const { email, password } = rawFormData;
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password
      }
    });
    redirect('/');
  } catch (err) {
    throw new Error('Error while signing user in:', err);
  }
};
const signUserUp = async (formdata: FormData) => {
  const rawFormData = {
    firstName: formdata.get('firstName') as string,
    lastName: formdata.get('lastName') as string,
    email: formdata.get('email') as string,
    password: formdata.get('password') as string
  };
  const { firstName, lastName, email, password } = rawFormData;

  try {
    await auth.api.signUpEmail({
      body: {
        name: `${firstName} ${lastName}`,
        email,
        password
      }
    });
    redirect('/');
  } catch (err) {
    throw new Error('Error while signing user up:', err);
  }
};
export { signUserIn, signUserUp };
