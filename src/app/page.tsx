export default function Home() {
  return (
    <main className="w-full text-center">
      {/* Section 1: Hero Section (AI-Themed Background) */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-white">
        {/* Background Image Only for the Top Section */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="/images/ai-background.jpg" 
            alt="Futuristic AI Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <h1 className="text-5xl font-bold text-primary leading-tight">
          The Future of <span className="text-accent">Cold Email Automation</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          AI-powered email outreach that personalizes, automates, and scales your campaigns—without getting flagged as spam.
        </p>

        <div className="mt-6 flex space-x-4">
          <a href="/signup" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">
            Get Started
          </a>
          <a href="/about" className="px-6 py-3 border border-gray-500 text-gray-300 rounded-lg font-semibold hover:border-accent hover:text-accent transition">
            Learn More
          </a>
        </div>
      </section>

      {/* Section 2: Why Choose InboxFlowAI? */}
      <section className="py-16 bg-gray-800 text-white motion-safe:animate-fadeInUp">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary motion-safe:animate-fadeIn">
            Why Choose InboxFlowAI?
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto motion-safe:animate-fadeIn delay-100">
            The most powerful AI-driven cold email automation platform designed to maximize response rates and streamline outreach.
          </p>

          {/* Feature Cards */}
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              { icon: "🤖", title: "AI-Powered Personalization", text: "Auto-generate highly personalized emails for better engagement." },
              { icon: "📊", title: "Advanced Analytics", text: "Track email open rates, click-throughs, and conversions with real-time data." },
              { icon: "🚀", title: "Automated Follow-Ups", text: "Set up intelligent follow-up sequences to nurture leads effortlessly." },
              { icon: "📬", title: "Smart Inbox Rotation", text: "Rotate between multiple email addresses to improve deliverability." },
              { icon: "💡", title: "AI-Generated Replies", text: "Get AI-suggested responses to improve engagement and close deals faster." },
              { icon: "🔥", title: "Email Warm-Up", text: "Gradually increase sending volume to boost sender reputation." },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center motion-safe:animate-slideUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-accent text-5xl">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mt-3">{feature.title}</h3>
                <p className="text-gray-300 mt-2">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works & Testimonials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-secondary">How It Works</h2>
          <p className="text-gray-400 mt-4">
            Get started with InboxFlowAI in just three simple steps.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold text-accent">1️⃣ Upload Your Leads</h3>
              <p className="text-gray-400 mt-2">Import your CSV file with prospect details.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold text-accent">2️⃣ AI Personalizes Emails</h3>
              <p className="text-gray-400 mt-2">Our AI dynamically generates engaging email content.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold text-accent">3️⃣ Automate & Track</h3>
              <p className="text-gray-400 mt-2">Send, automate follow-ups, and track engagement.</p>
            </div>
          </div>

          {/* Testimonials Section */}
          <h2 className="text-4xl font-bold text-primary mt-16">What Our Users Say</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <p className="text-gray-300">"InboxFlowAI tripled my email engagement! The AI personalization is a game-changer."</p>
              <h4 className="text-accent font-semibold mt-4">- Sarah J, Sales Manager</h4>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <p className="text-gray-300">"Saved me hours every week! AI-powered automation keeps my outreach seamless."</p>
              <h4 className="text-accent font-semibold mt-4">- Mike T, Startup Founder</h4>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <p className="text-gray-300">"Highly recommend for any sales team. InboxFlowAI makes cold emails effortless."</p>
              <h4 className="text-accent font-semibold mt-4">- Rachel P, Agency Owner</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
