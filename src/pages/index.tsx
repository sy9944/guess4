export default function Home() {
  const handleSignUpClick = () => {
    console.log('Sign up button clicked!');
  };

  return (
    <div>
      <h1>Welcome to Guess4!</h1>
      <button onClick={handleSignUpClick}>Sign up</button>
    </div>
  );
}
