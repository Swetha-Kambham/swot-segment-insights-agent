import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "../../src/context/AuthContext";
import ClientOnly from "../../src/components/ClientOnly";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SWOT Segment Insights",
  description: "LLM-powered SWOT explorer by Swetha, Generated SWOT insights for selected customer segments",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </ClientOnly>
      </body>
    </html>
  );
}

