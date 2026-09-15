import Header from "@/components/Header";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Anshchildcare | Dr. Kamesh Patel | Pediatrician & Neonatologist",
  description:
    "One-stop child healthcare solutions with expert pediatric and neonatal care, vaccination support, OPD consultations, and compassionate family-centered treatment.",
  keywords: [
    "Anshchildcare",
    "Dr. Kamesh Patel",
    "pediatrician",
    "neonatologist",
    "pediatric OPD",
    "neonatal care",
    "child healthcare",
    "vaccination support",
  ],
  openGraph: {
    title: "Anshchildcare | Dr. Kamesh Patel",
    description: "Pediatric and neonatal care for newborns, children, and families.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
