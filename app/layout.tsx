import type { Metadata } from "next";
import { Lato, Roboto_Serif } from "next/font/google";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
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
      className={`${robotoSerif.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        {children}
      </body>
    </html>
  );
}
