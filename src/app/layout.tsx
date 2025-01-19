import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Planet Media Assessment",
  description: "All purpose POS software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex bg-gray-100 flex-col min-h-[calc(106vh-3.5rem-1px)]">
          <div className="flex flex-1 flex-col h-full">{children}</div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
