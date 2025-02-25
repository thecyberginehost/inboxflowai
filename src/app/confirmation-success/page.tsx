"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmationSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login after 5 seconds
    const timer = setTimeout(() => {
      router.push("/login");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-white p-6">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-primary">Email Verified!</h1>
        <p className="text-gray-400 mt-4">Your email has been successfully verified.</p>
        <p className="text-gray-300 mt-2">Redirecting to the login page in 5 seconds...</p>
      </div>
    </main>
  );
}
