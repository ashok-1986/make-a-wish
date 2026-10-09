import "./styles/global.css";

export const metadata = {
  title: "Make a Wish | Prabhav Pratishthan Event Services",
  description: "Prabhav Pratishthan - Navi Mumbai's premier event management company offering comprehensive event solutions including collection, paper flowers, festivals, exhibitions, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bg-primary text-text-primary font-body antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}