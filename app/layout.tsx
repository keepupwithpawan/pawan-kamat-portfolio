import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400&f[]=sentient@400&f[]=gambarino@400&f[]=aktura@400&f[]=tanker@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}

        {/* Load FontAwesome asynchronously and safely */}
        <Script
          src="https://kit.fontawesome.com/4b1022cf8e.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
