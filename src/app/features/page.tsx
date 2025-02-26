import Image from "next/image";

export default function FeaturesPage() {
  const features = [
    {
      title: "AI-Powered Personalization",
      description: `Tired of generic, copy-paste emails getting ignored? With InboxFlowAI, our AI-powered system 
      crafts highly personalized cold emails based on your recipient’s industry, past interactions, and key interests. 
      Stand out in crowded inboxes by delivering messages that resonate with each prospect, driving higher response rates 
      and engagement.`,
      useCase: `Sales professionals use InboxFlowAI to personalize outreach for enterprise clients, 
      significantly increasing meeting bookings by 35%.`,
      image: "/images/features/ai-personalization.jpg",
      alt: "AI Personalization",
    },
    {
      title: "Automated Follow-Ups",
      description: `Studies show that 80% of sales require at least 5 follow-ups, yet most reps stop after 1-2 attempts. 
      Our AI-driven follow-up system automates reminders and personalized nudges, ensuring no lead is ever left cold. 
      By tracking prospect behavior and engagement, InboxFlowAI determines the best time and message to re-engage them.`,
      useCase: `A marketing agency improved client conversions by 50% after implementing AI-driven follow-up sequences 
      for abandoned leads.`,
      image: "/images/features/automated-followups.jpg",
      alt: "Automated Follow-Ups",
    },
    {
      title: "Inbox Rotation & Email Warm-Up",
      description: `If you're sending emails in bulk, your domain and sender reputation are at risk. 
      InboxFlowAI intelligently rotates inboxes to distribute email load and gradually warms up new email addresses 
      by simulating real conversations, improving deliverability and reducing spam flagging.`,
      useCase: `A SaaS company increased cold email deliverability by 60% using inbox rotation and warm-up strategies.`,
      image: "/images/features/inbox-rotation.jpg",
      alt: "Inbox Rotation & Warm-Up",
    },
    {
      title: "Advanced Analytics & Reporting",
      description: `How do you know if your emails are working? InboxFlowAI provides real-time, data-driven insights 
      on email open rates, link clicks, reply rates, and campaign performance. Use heatmaps and engagement trends to refine your strategy 
      and maximize results.`,
      useCase: `A B2B sales team used our analytics dashboard to tweak subject lines and boosted open rates by 45% within a month.`,
      image: "/images/features/email-analytics.jpg",
      alt: "Email Analytics",
    },
    {
      title: "AI-Generated Replies & Smart Responses",
      description: `Engaging leads is crucial, but crafting the perfect response takes time. InboxFlowAI analyzes 
      context and sentiment to suggest AI-powered replies, allowing you to maintain conversations without struggling to find the right words.`,
      useCase: `A freelance consultant using AI-generated responses saved 7+ hours per week, focusing more on closing deals instead of writing replies.`,
      image: "/images/features/ai-replies.jpg",
      alt: "AI-Generated Replies",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground p-8 flex flex-col items-center pt-24"> {/* Added pt-24 to push down */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold text-primary">InboxFlowAI Features</h1>
        <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
          Supercharge your cold email outreach with AI-driven automation, personalization, and real-time analytics.
        </p>
      </div>

      {/* Feature List */}
      <div className="mt-16 space-y-20">
        {features.map((feature, index) => (
          <section
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 py-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } motion-safe:animate-fadeInUp`}
          >
            {/* Feature Image */}
            <div className="flex-1">
              <Image
                src={feature.image}
                alt={feature.alt}
                width={600}
                height={350}
                className="rounded-lg shadow-2xl"
              />
            </div>

            {/* Feature Content */}
            <div className="flex-1 max-w-lg">
              <h3 className="text-4xl font-bold text-primary">{feature.title}</h3>
              <p className="text-lg text-gray-300 mt-5 leading-relaxed">{feature.description}</p>
              <p className="text-lg text-gray-400 mt-6 font-semibold">🔹 Real-World Use Case:</p>
              <p className="text-gray-400 text-lg">{feature.useCase}</p>
            </div>
          </section>
        ))}
      </div>

      {/* Call to Action */}
      <section className="text-center mt-20">
        <h2 className="text-4xl font-bold text-secondary">Ready to Transform Your Email Outreach?</h2>
        <p className="text-lg text-gray-400 mt-4">Sign up today and experience the power of AI-driven email automation.</p>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="/signup" className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-secondary transition">
            Get Started
          </a>
          <a href="/pricing" className="px-8 py-4 border border-gray-500 text-gray-300 rounded-lg text-lg font-semibold hover:border-accent hover:text-accent transition">
            View Pricing
          </a>
        </div>
      </section>
    </main>
  );
}
