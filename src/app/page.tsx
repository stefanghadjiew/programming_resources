import { getSessionCookie } from 'better-auth/cookies';
import { redirect } from 'next/navigation';

export default function Home() {
  return <div style={{ color: 'red' }}>This is the home page</div>;
}
