"use client";

import BgVideo from "@/components/Bg-video";
import Presentation from "@/components/Presentation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({});
    })();
  }, []);

  return (
    <main>
      <BgVideo />
      <Presentation />
    </main>
  );
}
