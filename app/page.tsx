import Welcome from "@/components/sections/Welcome";
import Around from "@/components/sections/Around";
import Booking from "@/components/sections/Booking";
import Presentation from "@/components/sections/Presentation";
import Localisation from "@/components/sections/Localisation";

export default function Home() {
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
