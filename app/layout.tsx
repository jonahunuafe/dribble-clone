import "./globals.css";

export const metadata = {
  title: "Friddle",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        Navbar
        <main>
          {children}
        </main>
        Footer
      </body>
    </html>
  );
}
