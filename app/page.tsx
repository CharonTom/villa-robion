"use client";

import { useEffect } from "react";

import Welcome from "@/components/Welcome";
import Around from "@/components/Around";
import Booking from "@/components/Booking";
import Presentation from "@/components/Presentation";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({});
    })();
  }, []);

  return (
    <main>
      <Welcome />
      <Presentation />
      <Booking />
      <Around />
    </main>
  );
}
