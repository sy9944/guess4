import { useRouter } from "next/router"; // useRouter gives you access to Next.js's router

export default function Home() {
  const router = useRouter();
  const handleSignUpClick = () => {
    router.push('/signup');
  };

  return (
    <div>
      <h1>Welcome to Guess4!</h1>
      <button onClick={handleSignUpClick}>Sign up</button>
    </div>
  );
}