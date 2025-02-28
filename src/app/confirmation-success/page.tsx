"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchAuthSession } from "@aws-amplify/auth";

export default function ConfirmationSuccessPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(5); // Countdown timer

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await fetchAuthSession();
        if (session.tokens) {
          setIsAuthenticated(true);
          return;
        }
      } catch (err) {
        setIsAuthenticated(false);
        setError(err instanceof Error ? err.message : "Unknown error occurred.");
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) return; // Stop redirecting if auth fails

    if (isAuthenticated === true) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            router.push("/dashboard");
            clearInterval(timer);
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer on unmount
    }
  }, [isAuthenticated, router]);

  // Function to copy error to clipboard
  const copyErrorToClipboard = () => {
    if (error) {
      navigator.clipboard.writeText(error);
      alert("Error copied to clipboard. Please send it to support.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-white p-6">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        {isAuthenticated === null ? (
          <p className="text-gray-400">Checking authentication...</p>
        ) : isAuthenticated ? (
          <>
            <h1 className="text-3xl font-bold text-primary">Email Verified!</h1>
            <p className="text-gray-400 mt-4">Your email has been successfully verified.</p>
            <p className="text-gray-300 mt-2">
              Redirecting to the dashboard in {countdown} seconds...
            </p>
            <p className="mt-4">
              <a href="/dashboard" className="text-accent hover:underline">
                Click here if you don&apos;t want to wait
              </a>
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-red-500">Verification Failed</h1>
            <p className="text-gray-400 mt-4">
              We could not verify your authentication status. Please log in again.
            </p>
            {error && (
              <>
                <p className="text-gray-300 mt-2">
                  Error: <span className="text-red-400">{error}</span>
                </p>
                <button
                  onClick={copyErrorToClipboard}
                  className="mt-3 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                >
                  Copy Error to Clipboard
                </button>
              </>
            )}
            <p className="mt-4">
              <a href="/login" className="text-accent hover:underline">
                Go to Login
              </a>
            </p>
          </>
        )}
      </div>
    </main>
  );
}
