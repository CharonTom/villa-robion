import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReservationProvider } from "@/context/NavBar";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import ReservationPanel from "@/components/ReservationPanel";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La maison de Nath et Lio",
  description:
    "Une charmante maison nichée dans le parc régional du Luberon à Robion. Une résidence lumineuse qui offre une échappée paisible où le style contemporain s'harmonise avec le calme provençal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={dmSans.className}>
        <ReservationProvider>
          <Header />
          {/* <ReservationPanel /> */}
          {children}
        </ReservationProvider>
      </body>
    </html>
  );
}
