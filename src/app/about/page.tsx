export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6 flex items-center justify-center pt-24">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Header Section */}
        <section className="animate-fadeInUp">
          <h1 className="text-6xl font-extrabold text-primary tracking-tight">About InboxFlowAI</h1>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            The future of AI-driven email automation is here. InboxFlowAI helps businesses scale outreach effortlessly 
            with intelligent automation, hyper-personalization, and real-time analytics while ensuring maximum email deliverability.
          </p>
        </section>

        {/* Why InboxFlowAI Section */}
        <section className="animate-fadeInUp delay-100">
          <h2 className="text-4xl font-bold text-secondary">Why Choose InboxFlowAI?</h2>
          <p className="text-lg text-gray-400 mt-3 max-w-3xl mx-auto">
            We blend AI, automation, and cutting-edge technology to redefine how cold emails work.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
            {[
              { icon: "🤖", title: "AI-Powered Personalization", text: "Generate highly engaging and personalized emails to boost response rates." },
              { icon: "📊", title: "Advanced Analytics", text: "Track open rates, replies, and overall campaign performance in real time." },
              { icon: "🔄", title: "Automated Follow-Ups", text: "Schedule smart follow-ups to maintain engagement without extra effort." },
              { icon: "📬", title: "Smart Inbox Rotation", text: "Improve email deliverability and avoid spam filters with intelligent sender rotation." },
              { icon: "💡", title: "AI-Generated Replies", text: "Let AI craft relevant, human-like responses to keep the conversation going." },
              { icon: "🔥", title: "Email Warm-Up", text: "Boost sender reputation with automated warm-up sequences." },
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gray-800 p-6 rounded-lg shadow-md transition hover:scale-105">
                <span className="text-5xl">{feature.icon}</span>
                <div>
                  <h3 className="text-2xl font-semibold text-accent">{feature.title}</h3>
                  <p className="text-lg text-gray-300 mt-1 leading-relaxed">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="animate-fadeInUp delay-200">
          <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
          <p className="text-lg text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            We believe in smarter email outreach—one that combines AI-driven personalization, automation, 
            and strategic deliverability techniques to help businesses connect with the right people at the right time.
          </p>
          <p className="text-lg text-gray-400 mt-6 leading-relaxed">
            Our goal is to transform how businesses communicate through cold emails, ensuring 
            higher engagement, efficiency, and success—without the frustration of emails landing in spam folders.
          </p>
        </section>

        {/* Call to Action */}
        <section className="animate-fadeInUp delay-300">
          <h2 className="text-4xl font-bold text-secondary">Ready to Supercharge Your Outreach?</h2>
          <p className="text-lg text-gray-300 mt-4">
            Get started today and experience the power of AI-driven email automation.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="/signup" className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-secondary transition">
              Get Started
            </a>
            <a href="/pricing" className="px-8 py-4 border border-gray-500 text-gray-300 rounded-lg font-bold text-lg hover:border-accent hover:text-accent transition">
              View Pricing
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
