"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1,
        easing: function easeOutQuint(x) {
          return 1 - Math.pow(1 - x, 5);
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
