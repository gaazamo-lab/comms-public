import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

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
    <html
      lang="en"
      className={`${merriweather.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        {children}
      </body>
    </html>
  );
}
