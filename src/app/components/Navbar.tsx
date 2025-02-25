"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-gray-800 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-primary text-3xl font-bold flex items-center space-x-2">
            <span className="hover:animate-pulse">InboxFlow</span>
            <span className="text-accent animate-pulse">AI</span>
          </Link>

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

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/dashboard" className="nav-link">Dashboard</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/faq" className="nav-link">FAQ</Link>
            <Link href="/pricing" className="nav-link">Pricing</Link>
            <Link href="/login" className="px-4 py-2 bg-primary rounded-lg text-white font-semibold hover:bg-secondary transition">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center py-4 space-y-4 bg-gray-900">
          <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/dashboard" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
          <Link href="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/faq" className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          <Link href="/pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link href="/login" className="px-4 py-2 bg-primary rounded-lg text-white font-semibold hover:bg-secondary transition" onClick={() => setMobileMenuOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
