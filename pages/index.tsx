import { signIn } from 'next-auth/react';
import Button from "./Button";

export default function Home() {
  return (
    <div>
      <Button 
        onClick={() => signIn('google')}
        label='google Login'
        outline
      />
    </div>
  )
}
