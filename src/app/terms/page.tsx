"use client";
import { useState } from "react";

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Introduction",
      content: `Welcome to InboxFlowAI! These Terms of Service (&quot;Terms&quot;) govern your use of our AI-powered email automation platform (&quot;Service&quot;). 
      By signing up, accessing, or using InboxFlowAI, you agree to these Terms. If you do not agree, please do not use our platform.`,
    },
    {
      title: "Who Can Use InboxFlowAI?",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>You must be at least 18 years old to use our platform.</li>
          <li>You must provide accurate and complete information when creating an account.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You must comply with all applicable laws and regulations, including email marketing and spam laws.</li>
        </ul>
      ),
    },
    {
      title: "Acceptable Use Policy",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>InboxFlowAI must not be used for spam, fraud, phishing, or deceptive practices.</li>
          <li>You must not use our platform to send unsolicited bulk emails that violate CAN-SPAM, GDPR, or similar laws.</li>
          <li>We prohibit the use of InboxFlowAI for harassment, abuse, or any illegal activities.</li>
          <li>Any attempt to bypass email filters or send harmful/malicious content is strictly forbidden.</li>
          <li>Failure to follow these guidelines may result in account suspension or termination.</li>
        </ul>
      ),
    },
    {
      title: "Account & Payment Terms",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>Users on free plans may have limited features compared to paid users.</li>
          <li>Subscriptions renew automatically unless canceled before the next billing cycle.</li>
          <li>We do not offer refunds for unused portions of a billing cycle.</li>
          <li>InboxFlowAI reserves the right to adjust pricing with prior notice.</li>
        </ul>
      ),
    },
    {
      title: "User Data & Privacy",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>We collect and process user data in accordance with our Privacy Policy.</li>
          <li>Your email content is never sold or shared with third parties without consent.</li>
          <li>We use industry-standard encryption to protect sensitive data.</li>
          <li>You may request data deletion at any time by contacting our support team.</li>
        </ul>
      ),
    },
    {
      title: "Intellectual Property Rights",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>InboxFlowAI and its related content, trademarks, and technology are owned by us.</li>
          <li>Users may not copy, reproduce, modify, or distribute our platform’s software, design, or AI algorithms.</li>
          <li>Any user-generated content (emails, templates, analytics) belongs to the user but grants us a non-exclusive license to process it.</li>
        </ul>
      ),
    },
    {
      title: "Service Availability & Updates",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>We strive for 99.9% uptime but do not guarantee uninterrupted service.</li>
          <li>Scheduled maintenance and unforeseen issues may cause temporary disruptions.</li>
          <li>InboxFlowAI reserves the right to modify, discontinue, or update features at any time.</li>
        </ul>
      ),
    },
    {
      title: "Limitation of Liability",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>InboxFlowAI is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind.</li>
          <li>We are not responsible for damages resulting from service interruptions, data loss, or third-party breaches.</li>
          <li>Our total liability under these Terms is limited to the amount paid for the service within the last 12 months.</li>
        </ul>
      ),
    },
    {
      title: "Termination of Service",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>Users may terminate their accounts at any time.</li>
          <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
          <li>Upon termination, all user data and access to the platform will be removed.</li>
        </ul>
      ),
    },
    {
      title: "Governing Law & Disputes",
      content: (
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>These Terms are governed by the laws of [Your State/Country].</li>
          <li>Any disputes must be resolved through binding arbitration or mediation.</li>
          <li>Users waive their right to participate in class-action lawsuits against InboxFlowAI.</li>
        </ul>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <div className="text-gray-300 mt-2">
          <p>If you have any questions about these Terms, please contact us:</p>
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
      {/* Terms of Service Header */}
      <div className="max-w-4xl text-center mt-20">
        <h1 className="text-5xl font-bold text-primary">Terms of Service</h1>
        <p className="text-lg text-gray-400 mt-4">
          Please read our terms carefully before using InboxFlowAI.
        </p>
      </div>

      {/* Terms Sections */}
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
        <p className="text-gray-400 mt-3">Contact our support team for inquiries.</p>
        <div className="mt-6">
          <a href="/contact" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}
