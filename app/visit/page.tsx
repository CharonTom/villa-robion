import React from "react";
import Galleries from "@/components/sections/Galleries";
import Booking from "@/components/sections/Booking";
import VisitVideo from "@/components/sections/VisitVideo";

function page() {
  return (
    <main className="pt-[100px]">
      <Galleries />
      <VisitVideo />
      <Booking />
    </main>
  );
}

export default page;
