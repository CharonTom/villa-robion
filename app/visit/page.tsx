"use client";

import React from "react";
import VisitDetails from "@/components/VisitDetails";
import SliderReview from "@/components/sliders/SliderReview";
import Galleries from "@/components/sections/Galleries";
import Booking from "@/components/sections/Booking";

function page() {
  return (
    <main className="pt-[100px]">
      <Galleries />
      <Booking />
    </main>
  );
}

export default page;
