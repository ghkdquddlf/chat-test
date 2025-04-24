import { Inter } from "next/font/google";
import "@/shared/styles/globals.css";
import Header from "@/shared/layouts/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ai chatbot test",
  description: "chatbot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-full flex-col">
          <div className="flex h-full max-w-full flex-1 flex-col overflow-hidden">
            <main className="relative w-full h-full overflow-hidden">
              <div className="w-full h-full">
                {/* <div className="flex flex-col h-full"> */}
                  {/* <Header /> */}
                  {children}
                  
                {/* </div> */}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
