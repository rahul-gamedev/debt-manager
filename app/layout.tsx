import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// const font = font({ subsets: ["latin"] });
const font = Roboto({
  weight: ["100","300", "400", "500", "700"],
  subsets: ["latin"],
  fallback: ["Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Debt Manager",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
