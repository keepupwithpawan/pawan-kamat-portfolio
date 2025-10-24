import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400&f[]=sentient@400&f[]=gambarino@400&f[]=aktura@400&f[]=tanker@400&display=swap" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/4b1022cf8e.js" crossOrigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
