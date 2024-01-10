"use client";

import { useEffect } from "react";

import Welcome from "@/components/sections/Welcome";
import Around from "@/components/sections/Around";
import Booking from "@/components/sections/Booking";
import Presentation from "@/components/sections/Presentation";
import Localisation from "@/components/sections/Localisation";

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
      <Localisation />
    </main>
  );
}
