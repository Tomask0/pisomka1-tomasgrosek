import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button onClick={() => signIn("google")} style={{ padding: "10px", margin: "20px" }}>
      Sign in with Google
    </button>
  );
};

export default SignInButton;
