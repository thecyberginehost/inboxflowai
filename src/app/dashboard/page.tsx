"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { fetchUserAttributes, signOut, fetchAuthSession } from "@aws-amplify/auth";
import Image from "next/image";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Line, Pie } from "react-chartjs-2";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{ name?: string; email?: string; picture?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const session = await fetchAuthSession({ forceRefresh: true });

        if (!session.tokens) {
          throw new Error("No active session");
        }

        const attributes = await fetchUserAttributes();
        setUser({
          name: attributes?.name || "User",
          email: attributes?.email || "",
          picture: attributes?.picture || "/images/default-profile.png",
        });

        setIsAuthenticated(true);
      } catch (err) {
        console.error("Authentication error:", err);
        setIsAuthenticated(false);
        router.replace("/login"); // 🔥 Redirect immediately if not authenticated
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    await signOut();
    setIsAuthenticated(false);
    setUser(null);
    router.replace("/login"); // 🔥 Instant logout redirect
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4">Checking authentication...</p>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return null; // Ensures no UI is shown before redirecting
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* ✅ Top Section: Profile & Logout */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src={user?.picture || "/images/default-profile.png"}
              alt="User"
              width={50}
              height={50}
              className="rounded-full border-2 border-accent"
            />
            <h2 className="text-2xl font-semibold">
              Welcome, {user?.name}
            </h2>
          </div>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-600">
            Logout
          </button>
        </div>

        {/* ✅ Overview Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Emails Sent", value: "1,250", icon: "📩" },
            { title: "Open Rate", value: "78%", icon: "📊" },
            { title: "AI Success Rate", value: "89%", icon: "🔥" },
            { title: "Warm-Up Progress", value: "92%", icon: "🚀" },
          ].map((card, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition">
              <div className="text-4xl">{card.icon}</div>
              <h3 className="text-xl font-semibold mt-3">{card.title}</h3>
              <p className="text-2xl text-accent mt-2">{card.value}</p>
            </div>
          ))}
        </div>

        {/* ✅ Charts Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Line Chart */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">Engagement Trends</h3>
            <Line
              data={{
                labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                datasets: [
                  {
                    label: "Open Rate",
                    data: [55, 65, 80, 78],
                    borderColor: "#00FFFF",
                    backgroundColor: "rgba(0, 255, 255, 0.2)",
                    fill: true,
                  },
                  {
                    label: "Click Rate",
                    data: [25, 40, 55, 65],
                    borderColor: "#FF007F",
                    backgroundColor: "rgba(255, 0, 127, 0.2)",
                    fill: true,
                  },
                ],
              }}
            />
          </div>

          {/* Pie Chart */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">Response Breakdown</h3>
            <Pie
              data={{
                labels: ["Positive", "Neutral", "Ignored"],
                datasets: [
                  {
                    label: "Response Rate",
                    data: [45, 30, 25],
                    backgroundColor: ["#00FF7F", "#FFD700", "#FF4500"],
                  },
                ],
              }}
            />
          </div>
        </div>

        {/* ✅ Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "📧 Compose AI Email", link: "/compose" },
            { label: "🚀 Start New Campaign", link: "/campaigns" },
            { label: "📊 Analyze Engagement", link: "/analytics" },
          ].map((action, index) => (
            <Link
              key={index}
              href={action.link}
              className="p-6 bg-accent rounded-lg shadow-lg text-center text-white font-semibold hover:scale-105 transition"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
