// src/app/page.tsx
"use client"; // This line must be at the very top

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Welcome to your App</h1>
      {session ? (
        <p>Signed in as {session.user.email}</p>
      ) : (
        <p>You are not signed in</p>
      )}
    </div>
  );
}
