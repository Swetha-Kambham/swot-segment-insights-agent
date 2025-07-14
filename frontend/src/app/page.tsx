/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const segments = [
  "Gen Z Creators",
  "Urban Climate Advocates",
  "Cost-Sensitive SMB Owners",
];

const categories = [
  "Marketing OKRs",
  "Strengths",
  "Weaknesses",
  "Opportunities",
  "Threats",
  "Market Positioning",
  "Buyer Persona",
  "Investment Opportunities",
  "Channels & Distribution",
];

export default function HomePage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const [selectedSegment, setSelectedSegment] = useState(segments[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading]);

const fetchInsight = async () => {
  setLoading(true);
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      throw new Error("API URL not defined in environment variables.");
    }

    const res = await fetch(`${apiUrl}/api/swot`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        segment: selectedSegment,
        category: selectedCategory,
      }),
    });

    const text = await res.text();
    try {
      const data = JSON.parse(text);
      setResponse(data.choices?.[0]?.message?.content || "No response received.");
    } catch (jsonErr) {
      setResponse(`Invalid JSON: ${jsonErr}`);
    }
  } catch (err: any) {
    setResponse(`Error: ${err.message || err}`);
  } finally {
    setLoading(false);
  }
};


  if (authLoading || !user) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <main className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-4">Segments</h2>
        <ul className="space-y-2">
          {segments.map((segment) => (
            <li key={segment}>
              <button
                onClick={() => setSelectedSegment(segment)}
                className={`w-full text-left px-3 py-2 rounded-md ${
                  selectedSegment === segment
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {segment}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <section className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">SWOT Explorer</h1>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-blue-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Trigger Button */}
        <button
          onClick={fetchInsight}
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700"
        >
          {loading ? "Thinking..." : "Generate Insight"}
        </button>

        {/* Response Card */}
        <div className="mt-6 p-4 bg-white border rounded shadow text-gray-800 prose prose-sm max-w-none">
          <ReactMarkdown>{response}</ReactMarkdown>
        </div>
      </section>
    </main>
  );
}
