import { signUserIn, signUserUp } from 'server/actions/auth';

import { Icons } from '@components';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shadcn-components';

import { cn } from '@shadcn/lib/utils';

import { Form } from './form';

export function FormWrapper({ className, ...props }: React.ComponentProps<'div'> & { type: 'login' | 'signup' }) {
  const { type } = props;
  const formAction = type === 'login' ? signUserIn : signUserUp;
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="bg-inherit text-amber-400 font-bold">
        <Icons.Logo className="m-auto cursor-pointer" />
        <CardHeader className="text-center">
          <CardTitle className="text-xl ">Welcome back</CardTitle>
          <CardDescription className="text-gray-500">Login with your Facebook or Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form action={formAction} />
        </CardContent>
      </Card>
    </div>
  );
}
