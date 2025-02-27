"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn, fetchAuthSession } from "@aws-amplify/auth";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to check existing auth session
  const checkSession = useCallback(async () => {
    try {
      const session = await fetchAuthSession();
      if (session.tokens) {
        router.push("/dashboard"); // Redirect if already logged in
      }
    } catch {
      console.log("No active session");
    }
  }, [router]); // ✅ Dependency added

  useEffect(() => {
    checkSession();
  }, [checkSession]); // ✅ Fixed dependency array

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("❌ Both fields are required.");
      setLoading(false);
      return;
    }

    try {
      // Attempt sign-in with provided credentials
      await signIn({ username: formData.email, password: formData.password });

      setSuccess("✅ Login successful! Redirecting...");
      localStorage.setItem("isAuthenticated", "true"); // Store login state
      setTimeout(() => {
        router.push("/dashboard"); // Redirects to dashboard
      }, 1500);
    } catch (err: unknown) {
      setLoading(false);
      if (err instanceof Error) {
        setError("❌ Email or Password is incorrect."); // General error message for security reasons
      } else {
        setError("❌ Login failed. Please try again.");
      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-white p-6">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-primary text-center">Welcome Back</h1>
        <p className="text-gray-400 text-center mt-2">Login to your InboxFlowAI account.</p>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mt-4 text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-primary outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-primary outline-none"
              required
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <Link href="/forgot-password" className="text-accent hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className={`w-full bg-primary text-white font-semibold py-3 rounded-lg transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-secondary"
            }`}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Don’t have an account? <Link href="/signup" className="text-accent hover:underline">Sign up</Link>
        </p>
      </div>
    </main>
  );
}
