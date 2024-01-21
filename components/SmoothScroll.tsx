"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1,
        easing: function easeOutQuint(x: number): number {
          return 1 - Math.pow(1 - x, 5);
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
