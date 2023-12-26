import BgVideo from "@/components/Bg-video";
import Presentation from "@/components/Presentation";
import ScrollContainer from "@/components/Scroll-container";

export default function Home() {
  const scrollIntertia = 70;

  return (
    <main>
      {/* <ScrollContainer scrollIntertia={scrollIntertia}> */}
      <BgVideo />
      <Presentation />
      {/* </ScrollContainer> */}
    </main>
  );
}
