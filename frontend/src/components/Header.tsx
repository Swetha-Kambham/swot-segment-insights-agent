"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login"); // redirect to login after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">SWOT Insights</h1>
      {user && (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      )}
    </header>
  );
}
