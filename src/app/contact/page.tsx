"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: false, message: "" });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ success: false, message: "" });
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus({ success: true, message: "✅ Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus({ success: false, message: "❌ Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ success: false, message: "❌ Server error. Please try again later." });
    }
    
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-background text-white p-6 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-4xl text-center mt-20">
        <h1 className="text-5xl font-bold text-primary">Contact Us</h1>
        <p className="text-lg text-gray-400 mt-4">
          Have questions? Send us a message and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl w-full mt-12 bg-gray-800 p-8 rounded-lg shadow-md">
        {status.message && (
          <p className={`text-center text-lg font-semibold ${status.success ? "text-green-400" : "text-red-400"}`}>
            {status.message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-primary outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-primary outline-none"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-primary outline-none"
              rows={5}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Additional Contact Info */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-secondary">Other Ways to Reach Us</h2>
        <p className="text-gray-400 mt-3">Need further assistance? Get in touch via email or phone.</p>
        <div className="mt-6 space-y-2 text-lg">
          <p>📧 <strong>Email:</strong> <a href="mailto:support@inboxflowai.com" className="text-accent hover:underline">support@inboxflowai.com</a></p>
        </div>
      </div>
    </main>
  );
}
