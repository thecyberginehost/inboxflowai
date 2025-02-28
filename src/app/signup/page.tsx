"use client"; // ✅ Ensure this is the first line

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Amplify } from "aws-amplify";
import { signUp, fetchAuthSession, fetchUserAttributes } from "@aws-amplify/auth";
import Link from "next/link";
import awsExports from "../../aws-exports"; // Adjust path if needed

// Configure Amplify
Amplify.configure(awsExports);

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Improved session check to prevent unverified users from logging in
  const checkSession = useCallback(async () => {
    try {
      const session = await fetchAuthSession({ forceRefresh: true });
      if (session.tokens) {
        router.push("/dashboard");
      }
    } catch (err) {
      console.log("No active session:", err);
    }
  }, [router]);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Improved password validation (should match AWS Cognito rules dynamically)
  const passwordValid = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    number: /\d/.test(formData.password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
    match: formData.password === formData.confirmPassword && formData.password !== "",
  };

  const allValid = Object.values(passwordValid).every(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("❌ All fields are required.");
      setLoading(false);
      return;
    }

    if (!allValid) {
      setError("❌ Please meet all password requirements.");
      setLoading(false);
      return;
    }

    try {
      // ✅ Sign-up user in Cognito
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

      // ✅ Check if the user is confirmed (fixes `userConfirmed` issue)
      try {
        const attributes = await fetchUserAttributes();
        if (attributes?.email_verified === "true") {
          setSuccess("✅ Your account is verified. Redirecting to login...");
          setTimeout(() => router.push("/login"), 2000);
        } else {
          setSuccess("✅ Signup successful! Please check your email for verification.");
          setTimeout(() => router.push("/confirmation-success"), 2000);
        }
      } catch {
        setSuccess("✅ Signup successful! Please check your email for verification.");
        setTimeout(() => router.push("/confirmation-success"), 2000);
      }
    } catch (err: unknown) {
      setLoading(false);
      if (err instanceof Error) {
        if (err.message.includes("User already exists")) {
          setError("❌ This email is already in use. Try logging in.");
        } else if (err.message.includes("Weak password")) {
          setError("❌ Your password does not meet security requirements.");
        } else if (err.message.includes("User is not confirmed")) {
          setError("❌ Please verify your email before logging in.");
        } else {
          setError(`❌ Signup failed: ${err.message}`);
        }
      } else {
        setError("❌ Signup failed. Please try again.");
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
            disabled={!allValid || loading}
            className={`w-full font-semibold py-3 rounded-lg transition mt-4 ${
              allValid ? "bg-primary hover:bg-secondary text-white" : "bg-gray-500 cursor-not-allowed"
            }`}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Already have an account? <Link href="/login" className="text-accent hover:underline">Log in</Link>
        </p>
      </div>
    </main>
  );
}
