import "./globals.css";
import { Navbar } from "@/app/components/Navbar";

export const metadata = {
  title: "WikiRockets",
  description: "Wikipedia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-400">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
