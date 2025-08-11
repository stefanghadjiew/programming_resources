'use client';

import { FormHTMLAttributes } from 'react';

import { PROVIDERS } from '@lib';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ProviderLoginButton } from '@components';

import { Button, Input, Label } from '@shadcn-components';

export const Form = ({ action }: { action: FormHTMLAttributes<HTMLFormElement>['action'] }) => {
  const path = usePathname();
  const isSignup = path.includes('signup');

  const formFooter = (
    <div className="text-center text-sm text-gray-500">
      {isSignup ? 'Already have an account?' : "Don't have an account?"}
      <Link href={isSignup ? '/login' : '/signup'} className="underline underline-offset-4 text-amber-400">
        {isSignup ? 'Log in' : 'Sign up'}
      </Link>
    </div>
  );

  const signupFields = (
    <div className="flex gap-3">
      <div className="grid gap-3">
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" type="text" required />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" type="text" required />
      </div>
    </div>
  );
  return (
    <form action={action}>
      <div className="grid gap-6">
        <div className="flex flex-col gap-4">
          <ProviderLoginButton provider={PROVIDERS.Facebook} />
          <ProviderLoginButton provider={PROVIDERS.Google} />
          <ProviderLoginButton provider={PROVIDERS.Github} />
        </div>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center">
          <span className="relative z-10 px-2 text-gray-500">Or continue with</span>
        </div>
        <div className="grid gap-6">
          {isSignup && signupFields}
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              {!isSignup && (
                <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline text-gray-500">
                  Forgot your password?
                </a>
              )}
            </div>

            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full cursor-pointer font-bold">
            Continue
          </Button>
        </div>
        {formFooter}
      </div>
    </form>
  );
};
