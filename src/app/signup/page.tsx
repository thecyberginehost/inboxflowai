"use client";  // ✅ Ensure this is the first line

import { useState } from "react";
import { Amplify } from "aws-amplify";
import { signUp } from "aws-amplify/auth";
import Link from "next/link";
import awsExports from "../../aws-exports"; // Adjust path if needed

// Configure Amplify
Amplify.configure(awsExports);

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    try {
      await signUp({
        username: formData.email,
        password: formData.password,
        options: {
          userAttributes: {
            email: formData.email,
            name: formData.name,
          },
        },
      });

      setSuccess("Signup successful! Please check your email for verification.");
    } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Signup failed. Please try again.");
        }
      }   
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-white p-6">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-primary text-center">Create an Account</h1>
        <p className="text-gray-400 text-center mt-2">Sign up to start using InboxFlowAI.</p>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mt-4 text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-primary outline-none"
              required
            />
          </div>

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

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-300">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-primary outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-lg transition mt-4"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Already have an account? <Link href="/login" className="text-accent hover:underline">Log in</Link>
        </p>
      </div>
    </main>
  );
}
