"use client";
import { useState } from "react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Introduction",
      content: `InboxFlowAI (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting it 
      through this Privacy Policy. This document outlines how we collect, use, and safeguard your information when you use our services.`,
    },
    {
      title: "Information We Collect",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li><strong>Personal Information:</strong> Name, email address, billing details (for paid plans), and account credentials.</li>
          <li><strong>Usage Data:</strong> Log files, browser type, IP address, device information, and interaction logs.</li>
          <li><strong>Email Content & Metadata:</strong> To provide AI-driven personalization, we analyze non-sensitive email data.</li>
          <li><strong>Cookies & Tracking Technologies:</strong> Used to improve user experience and track site analytics.</li>
        </ul>
      ),
    },
    {
      title: "How We Use Your Information",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>Provide, maintain, and improve our AI-powered email automation services.</li>
          <li>Process transactions and send billing updates (for paid users).</li>
          <li>Enhance personalization and analytics for better engagement.</li>
          <li>Detect, prevent, and respond to security threats.</li>
          <li>Comply with legal obligations and enforce our Terms of Service.</li>
        </ul>
      ),
    },
    {
      title: "Data Security Measures",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li><strong>Encryption:</strong> All sensitive data is encrypted both in transit (SSL/TLS) and at rest.</li>
          <li><strong>Access Controls:</strong> Only authorized personnel have access to critical systems.</li>
          <li><strong>Anomaly Detection:</strong> We use AI to monitor unusual account activity for enhanced security.</li>
          <li><strong>Third-Party Audits:</strong> Regular security audits ensure compliance with best practices.</li>
        </ul>
      ),
    },
    {
      title: "User Rights & Choices",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li><strong>Access & Portability:</strong> Request a copy of your personal data.</li>
          <li><strong>Correction:</strong> Update inaccurate or incomplete information.</li>
          <li><strong>Deletion (&quot;Right to be Forgotten&quot;):</strong> Request account and data deletion.</li>
          <li><strong>Marketing Opt-Out:</strong> Unsubscribe from marketing emails at any time.</li>
          <li><strong>Restrict Processing:</strong> Limit how we use your data in certain cases.</li>
        </ul>
      ),
    },
    {
      title: "Third-Party Sharing & Compliance",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>We do <strong>not</strong> sell your data.</li>
          <li><strong>Service Providers:</strong> We work with trusted vendors (e.g., payment processors, analytics services) under strict data protection policies.</li>
          <li><strong>Legal Requirements:</strong> If required by law, subpoena, or court order.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your data may be transferred under the same privacy safeguards.</li>
        </ul>
      ),
    },
    {
      title: "Cookies & Tracking Technologies",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>Remember user preferences and improve experience.</li>
          <li>Analyze site performance and optimize our platform.</li>
          <li>Allow authentication and security features.</li>
        </ul>
      ),
    },
    {
      title: "Data Retention & Deletion",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li><strong>Active Accounts:</strong> Data is retained while your account is in use.</li>
          <li><strong>Inactive Accounts:</strong> We automatically delete data after a specified retention period.</li>
          <li><strong>Immediate Deletion Requests:</strong> Users can request immediate deletion of their personal information.</li>
        </ul>
      ),
    },
    {
      title: "GDPR, CCPA, & Global Compliance",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li><strong>GDPR Compliance:</strong> Users can request data access, deletion, and processing restrictions.</li>
          <li><strong>CCPA Rights:</strong> California residents can opt out of data collection and request personal data details.</li>
          <li><strong>International Transfers:</strong> We implement Standard Contractual Clauses (SCCs) for international data transfers.</li>
        </ul>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <div className="text-gray-300 mt-2">
          <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
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
      {/* Privacy Policy Header */}
      <div className="max-w-4xl text-center mt-20">
        <h1 className="text-5xl font-bold text-primary">Privacy Policy</h1>
        <p className="text-lg text-gray-400 mt-4">
          Your privacy matters. Learn how we collect, use, and protect your data.
        </p>
      </div>

      {/* Privacy Policy Sections */}
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
        <h2 className="text-3xl font-semibold text-secondary">Need More Information?</h2>
        <p className="text-gray-400 mt-3">Contact our privacy team for inquiries.</p>
        <div className="mt-6">
          <a href="/contact" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">
            Contact Privacy Team
          </a>
        </div>
      </div>
    </main>
  );
}
