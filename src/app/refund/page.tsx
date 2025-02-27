"use client";
import { useState } from "react";

export default function RefundPolicyPage() {
  const sections = [
    {
      title: "Introduction",
      content: `At InboxFlowAI, we strive to provide high-quality AI-powered email automation services. 
      We understand that circumstances may arise where you require a refund. This Refund Policy explains 
      the terms under which refunds are granted and how to request one.`,
    },
    {
      title: "Eligibility for Refunds",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>Refunds are only available for paid subscription plans.</li>
          <li>You must request a refund within 7 days of your initial payment.</li>
          <li>Refunds are only granted if you experience technical issues that prevent you from using our service and our support team is unable to resolve them.</li>
          <li>Refunds will not be issued for user error, lack of usage, or failure to cancel a subscription before renewal.</li>
        </ul>
      ),
    },
    {
      title: "Non-Refundable Cases",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>Refunds are not available for free trials or free-tier plans.</li>
          <li>Refunds are not provided for renewal payments after the 7-day refund window.</li>
          <li>If you have violated our Terms of Service, no refund will be issued.</li>
          <li>One-time service fees, setup fees, and promotional discounts are non-refundable.</li>
        </ul>
      ),
    },
    {
      title: "Requesting a Refund",
      content: `If you believe you qualify for a refund, follow these steps:  
      1. Contact our support team via email at **[support@inboxflowai.com](mailto:support@inboxflowai.com)** with your refund request.  
      2. Provide your account details and proof of purchase.  
      3. Explain the reason for your refund request, including any technical issues encountered.  
      4. Our team will review your request within 5 business days and respond accordingly.`,
    },
    {
      title: "Refund Processing Time",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>Approved refunds will be processed within 7-10 business days.</li>
          <li>The refunded amount will be credited to the original payment method used for purchase.</li>
          <li>Depending on your bank or payment provider, it may take additional time for funds to reflect in your account.</li>
        </ul>
      ),
    },
    {
      title: "Modifications to the Refund Policy",
      content: `InboxFlowAI reserves the right to modify or update this Refund Policy at any time. 
      Changes will be reflected on this page, and continued use of our service after an update constitutes acceptance of the new terms.`,
    },
    {
      title: "Contact Us",
      content: (
        <div className="text-gray-300 mt-2">
          <p>If you have any questions regarding our Refund Policy, contact us:</p>
          <p>📧 <strong>Email:</strong> <a href="mailto:support@inboxflowai.com" className="text-accent hover:underline">support@inboxflowai.com</a></p>
          <p>📝 <strong>Support Form:</strong> <a href="/contact" className="text-accent hover:underline">Contact Us</a></p>
        </div>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-background text-white p-6 flex flex-col items-center">
      {/* Refund Policy Header */}
      <div className="max-w-4xl text-center mt-20">
        <h1 className="text-5xl font-bold text-primary">Refund Policy</h1>
        <p className="text-lg text-gray-400 mt-4">
          Understand our refund terms and how to request one.
        </p>
      </div>

      {/* Refund Policy Sections */}
      <div className="max-w-3xl w-full mt-12 space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-5 transition-all">
            <button onClick={() => toggleSection(index)} className="w-full flex justify-between items-center text-left focus:outline-none">
              <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
              <span className="text-gray-400 text-2xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && <div className="mt-3 text-gray-300 text-lg">{section.content}</div>}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-secondary">Need Help?</h2>
        <p className="text-gray-400 mt-3">Reach out to our support team for refund inquiries.</p>
        <div className="mt-6">
          <a href="/contact" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}
