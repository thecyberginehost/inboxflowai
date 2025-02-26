"use client";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { fetchAuthSession, fetchUserAttributes, signOut } from "@aws-amplify/auth";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name?: string; email?: string; picture?: string } | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to check authentication status and fetch user data
  const checkAuth = async () => {
    try {
      const session = await fetchAuthSession();
      if (session.tokens) {
        const attributes = await fetchUserAttributes();
        setUser({
          name: attributes?.name || "User",
          email: attributes?.email || "",
          picture: attributes?.picture || "/images/default-profile.png",
        });
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  // Run authentication check on component mount
  useEffect(() => {
    checkAuth();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    await signOut();
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <nav className="bg-background border-b border-gray-800 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* Reduced navbar height */}
          {/* Logo + Company Name */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/images/features/logo.png" 
              alt="InboxFlowAI Logo" 
              width={55}  // Slightly smaller but still visible
              height={55}  
              className="rounded-md cursor-pointer hover:scale-105 transition-transform"
            />
            <span className="text-primary text-3xl font-bold hover:animate-pulse">
              InboxFlow<span className="text-accent animate-pulse">AI</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-base font-semibold text-gray-300 hover:text-primary transition">Home</Link>
            {isAuthenticated && <Link href="/dashboard" className="text-base font-semibold text-gray-300 hover:text-primary transition">Dashboard</Link>}
            <Link href="/about" className="text-base font-semibold text-gray-300 hover:text-primary transition">About</Link>
            <Link href="/features" className="text-base font-semibold text-gray-300 hover:text-primary transition">Features</Link>
            <Link href="/pricing" className="text-base font-semibold text-gray-300 hover:text-primary transition">Pricing</Link>

            {/* Login Button / Profile Dropdown */}
            {isAuthenticated ? (
              <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative flex items-center space-x-2">
                  <Image
                    src={user?.picture || "/images/default-profile.png"}
                    alt="Profile"
                    width={40}  
                    height={40}
                    className="rounded-full border-2 border-gray-500 cursor-pointer hover:border-primary"
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-2">
                    <p className="text-gray-300 px-4 py-2">{user?.email}</p>
                    <Link href="/account" className="block px-4 py-2 text-white hover:bg-gray-700">Account Settings</Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="px-6 py-2 bg-primary text-base rounded-lg text-white font-semibold hover:bg-secondary transition">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center py-4 space-y-4 bg-gray-900">
          <Link href="/" className="text-base font-semibold text-gray-300 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          {isAuthenticated && (
            <Link href="/dashboard" className="text-base font-semibold text-gray-300 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
          )}
          <Link href="/about" className="text-base font-semibold text-gray-300 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/features" className="text-base font-semibold text-gray-300 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>Features</Link>
          <Link href="/pricing" className="text-base font-semibold text-gray-300 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          
          {isAuthenticated ? (
            <>
              <Link href="/account" className="text-base font-semibold text-gray-300 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>Account Settings</Link>
              <button
                onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                className="w-full text-base text-left px-5 py-3 text-red-400 hover:bg-gray-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="px-6 py-3 bg-primary text-base rounded-lg text-white font-semibold hover:bg-secondary transition" onClick={() => setMobileMenuOpen(false)}>
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
