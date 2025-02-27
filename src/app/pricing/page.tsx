"use client";
import { useState } from "react";
import Link from "next/link"; // Import Link for navigation

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const isLoggedIn = false; // Placeholder: Replace with real auth check

  // Pricing Data with Adjusted Prices
  const plans = [
    {
      name: "Starter",
      monthlyPrice: 0, 
      annualPrice: 0,
      features: ["AI-Powered Emails", "Basic Analytics", "50 Emails/Month"],
    },
    {
      name: "Pro",
      monthlyPrice: 99,
      annualPrice: 999, // 15% discount applied
      annualMonthly: 84, // Displayed as $84/mo
      discount: "15%", 
      features: ["Everything in Starter", "Advanced Analytics", "10,000 Emails/Month", "Automated Follow-Ups"],
      popular: true, // Highlights Pro Plan
    },
    {
      name: "Enterprise",
      monthlyPrice: 199,
      annualPrice: 1908, // 20% discount applied
      annualMonthly: 159, // Displayed as $159/mo
      discount: "20%", 
      features: ["Everything in Pro", "Dedicated Support", "Unlimited Emails", "Custom API Access"],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-white p-6">
      <div className="max-w-5xl mx-auto text-center mt-20"> {/* Added mt-20 to move content down */}
        <h1 className="text-5xl font-bold text-primary">Choose Your Plan</h1>
        <p className="text-gray-400 mt-4">Flexible pricing that scales with your needs.</p>

        {/* Toggle Button for Monthly vs Annual */}
        <div className="mt-6 flex justify-center">
          <button
            className={`px-6 py-2 rounded-l-lg ${!isAnnual ? "bg-primary text-white" : "bg-gray-700 text-gray-300"} transition`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-r-lg ${isAnnual ? "bg-primary text-white" : "bg-gray-700 text-gray-300"} transition`}
            onClick={() => setIsAnnual(true)}
          >
            Annual (Save Up to 20%!)
          </button>
        </div>

        {/* Pricing Plans */}
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 flex flex-col relative ${
                plan.popular ? "border-4 border-accent" : ""
              }`}
            >
              {/* Highlight Pro Plan */}
              {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-lg text-sm font-semibold">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="text-gray-400 mt-2">{isAnnual ? "Billed Annually" : "Billed Monthly"}</p>
              
              {/* Price Display with Discount */}
              <p className="text-4xl font-bold text-accent mt-4">
                {plan.monthlyPrice === 0 ? "Free" : `$${isAnnual ? plan.annualMonthly : plan.monthlyPrice}`}
                <span className="text-lg"> /mo</span>
              </p>
              {isAnnual && plan.monthlyPrice !== 0 && (
                <p className="text-gray-400 text-sm mt-1">({plan.discount} off)</p>
              )}

              {/* Feature List */}
              <ul className="mt-4 text-gray-300 space-y-2 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              {/* Action Button (Always aligned at bottom) */}
              <div className="mt-auto">
                {plan.monthlyPrice === 0 ? (
                  <Link href="/signup">
                    <button className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">
                      {isLoggedIn ? "Current Plan" : "Create Free Account"}
                    </button>
                  </Link>
                ) : (
                  <button 
                    className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition"
                  >
                    Get Started
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
