import React from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-scroll";

function ScrollDown() {
  return (
    <>
      <Link smooth={true} to="presentation" href="#presentation" duration={500}>
        <p className="[text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
          scroll down
        </p>
        <FaAnglesDown className="anim-icon mx-auto" />
      </Link>
    </>
  );
}

export default ScrollDown;
