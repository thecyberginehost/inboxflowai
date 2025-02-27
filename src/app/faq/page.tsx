"use client";
import { useState } from "react";

export default function FaqPage() {
  const faqs = [
    {
      question: "What is InboxFlowAI?",
      answer:
        "InboxFlowAI is an AI-driven email automation platform designed to help businesses scale their cold email outreach efficiently. It automates email personalization, follow-ups, and deliverability enhancements while providing advanced analytics.",
    },
    {
      question: "How does AI-powered personalization work?",
      answer:
        "Our AI analyzes recipient data, past interactions, and industry-specific language to generate highly personalized email content, increasing response rates and engagement.",
    },
    {
      question: "Can InboxFlowAI prevent emails from landing in spam?",
      answer:
        "Yes! We use advanced email warm-up, inbox rotation, and domain reputation management to maximize deliverability and reduce the chances of emails being marked as spam.",
    },
    {
      question: "What are the pricing plans?",
      answer:
        "We offer flexible pricing, including a Free Starter plan, a Pro plan at $99/month, and an Enterprise plan with unlimited emails and dedicated support. View our pricing page for details.",
    },
    {
      question: "Is InboxFlowAI suitable for small businesses?",
      answer:
        "Absolutely! InboxFlowAI is designed for businesses of all sizes, from startups to enterprise sales teams, helping them optimize their outreach efforts with automation and AI insights.",
    },
    {
      question: "What integrations does InboxFlowAI support?",
      answer:
        "InboxFlowAI integrates seamlessly with major CRM platforms like HubSpot, Salesforce, and email providers like Gmail and Outlook.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription anytime without any penalties. However, refunds are not available for already processed payments.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes! Our Starter plan allows you to try InboxFlowAI for free, giving you access to core features before upgrading to a premium plan.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-background text-white p-8 flex flex-col items-center">
      {/* FAQ Header Section */}
      <div className="max-w-4xl text-center mt-24">
        <h1 className="text-5xl font-bold text-primary">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-400 mt-4">Got questions? We&apos;ve got answers.</p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl w-full mt-12 space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-5 transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <h3 className="text-xl font-semibold text-primary">{faq.question}</h3>
              <span className="text-gray-400 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-300 text-lg">{faq.answer.replace(/'/g, "&apos;").replace(/"/g, "&quot;")}</p>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-secondary">Still have questions?</h2>
        <p className="text-gray-400 mt-3">
          Contact our support team for more information.
        </p>
        <div className="mt-6">
          <a
            href="/contact"
            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}
