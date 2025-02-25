export default function AboutPage() {
    return (
      <div className="min-h-screen bg-background text-foreground p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4">About InboxFlowAI</h1>
          <p className="text-lg text-gray-400">
            InboxFlowAI is a cutting-edge AI-powered cold email automation platform designed for 
            sales teams, marketers, and agencies. By leveraging AI, automation, and email warm-up 
            techniques, we help businesses scale their outreach efficiently.
          </p>
  
          <h2 className="text-2xl font-semibold text-secondary mt-6">Why InboxFlowAI?</h2>
          <ul className="list-disc ml-6 text-gray-400 space-y-2">
            <li>🚀 AI-powered email personalization for higher engagement.</li>
            <li>📊 Advanced analytics to track open and reply rates.</li>
            <li>🔄 Automated follow-ups and domain rotation to prevent spam flags.</li>
            <li>🔒 Built-in email security and compliance with industry standards.</li>
          </ul>
  
          <h2 className="text-2xl font-semibold text-secondary mt-6">Our Mission</h2>
          <p className="text-gray-400">
            Our mission is to revolutionize email outreach with AI, ensuring businesses 
            can connect with their audiences in a smarter and more effective way.
          </p>
        </div>
      </div>
    );
  }
  