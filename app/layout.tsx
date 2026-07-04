/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Corporate Communications and Partnerships Directorate | CLET Ghana",
  description:
    "The Corporate Communications and Partnerships (CCP) Directorate of the Council for Legal Education and Training (CLET), Republic of Ghana — the public voice, stakeholder bridge, and brand custodian of national legal education.",
  metadataBase: new URL("https://comms.clet.gov.gh"),
  openGraph: {
    title:
      "Corporate Communications and Partnerships Directorate | CLET Ghana",
    description:
      "Public communications, international relations and strategic partnerships for the Council for Legal Education and Training, Republic of Ghana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Roboto+Serif:opsz,wght@8..144,500;8..144,600;8..144,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
