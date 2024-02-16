import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ReservationProvider } from "@/context/PanelContext";
import Header from "@/components/layouts/Header";
import ReservationPanel from "@/components/layouts/ReservationPanel";
import Footer from "@/components/layouts/Footer";
import MobileSideBar from "@/components/layouts/MobileSideBar";
import SidebarProvider from "@/context/SidebarContext";
import SmoothScroll from "@/components/SmoothScroll";
import "@/styles/globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La maison de Nath et Lio - Location et échange dans le Luberon",
  description:
    "Séjournez dans une charmante maison nichée dans le parc régional du Luberon à Robion. Louez ou échangez une villa lumineuse qui offre une échappée paisible où le style contemporain s'harmonise avec le calme provençal.",
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
          <SidebarProvider>
            <SmoothScroll>
              <Header />
              {children}
              <ReservationPanel />
              <MobileSideBar />
              <Footer />
            </SmoothScroll>
          </SidebarProvider>
        </ReservationProvider>
      </body>
    </html>
  );
}
