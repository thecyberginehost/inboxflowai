"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    // TODO: Implement AWS Cognito Login API call
    setSuccess("Login successful! Redirecting...");
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
            className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-lg transition"
          >
            Log In
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Don’t have an account? <Link href="/signup" className="text-accent hover:underline">Sign up</Link>
        </p>
      </div>
    </main>
  );
}
