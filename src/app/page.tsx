'use client';
import { SignInButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ this is necessary

export default function HomePage() {
  const { isSignedIn } = useUser();
  const router = useRouter(); // ✅ initialize router

  useEffect(() => {
    if (isSignedIn) {
      router.push("/events"); // ✅ redirect to events
    }
  }, [isSignedIn]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Tier‑Based Event Showcase</h1>
      {!isSignedIn && (
        <SignInButton>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Sign In / Sign Up
          </button>
        </SignInButton>
        // <button className="px-4 py-2 bg-blue-600 text-white rounded">
        //   <a href="/sign-in">Sign In / Sign Up</a>
        // </button>
      )}
    </div>
  );
}