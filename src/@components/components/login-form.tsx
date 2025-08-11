import { PROVIDERS } from '@lib';
import { Button } from '@shadcnui';

import { Icons, ProviderLoginButton } from '@components';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/components/ui/card';
import { Input } from '@components/components/ui/input';
import { Label } from '@components/components/ui/label';
import { cn } from '@components/lib/utils';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="bg-inherit text-amber-400 font-bold">
        <Icons.Logo className="m-auto cursor-pointer" />
        <CardHeader className="text-center">
          <CardTitle className="text-xl ">Welcome back</CardTitle>
          <CardDescription className="text-gray-500">Login with your Facebook or Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
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
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline text-gray-500">
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full cursor-pointer font-bold">
                  Login
                </Button>
              </div>
              <div className="text-center text-sm text-gray-500">
                Don&apos;t have an account?{' '}
                <a href="#" className="underline underline-offset-4 text-amber-400">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
