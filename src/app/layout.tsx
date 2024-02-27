import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex min-h-screen bg-[#FAFAFA]">
          {children}
        </main>
      </body>
    </html>
  );
}
