import { Inter } from "next/font/google";
import '@/shared/styles/globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ai chatbot test",
  description: "rag feature test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
