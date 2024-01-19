import React from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-scroll";

function ScrollDown() {
  return (
    <>
      <Link
        smooth={true}
        to="presentation"
        duration={500}
        className="cursor-pointer group absolute bottom-3 right-1/2 translate-x-1/2 text-white flex-center flex-col py-3 "
      >
        <p className="[text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
          scroll down
        </p>
        <FaAnglesDown className="anim-icon" />
      </Link>
    </>
  );
}

export default ScrollDown;
