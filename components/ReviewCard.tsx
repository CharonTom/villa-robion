import Image from "next/image";
import React from "react";
import { RiStarSFill } from "react-icons/ri";

function ReviewCard({ name, text, date, logo, starColor }) {
  return (
    <div className="w-full h-[255px] bg-gray-200 rounded-lg p-4 relative">
      <Image
        src={logo}
        alt="logo"
        width={25}
        height={25}
        className="absolute top-4 right-4 rounded-lg"
      />
      <div className="flex gap-x-4 mb-2">
        <div className="h-14 w-14 rounded-full bg-red-200"></div>
        <div>
          <div>{name}</div>
          <div className="text-sm">{date}</div>
        </div>
      </div>
      <div className="flex mb-2">
        <RiStarSFill style={{ color: starColor }} />
        <RiStarSFill style={{ color: starColor }} />
        <RiStarSFill style={{ color: starColor }} />
        <RiStarSFill style={{ color: starColor }} />
        <RiStarSFill style={{ color: starColor }} />
      </div>
      <div className="">
        <p className="text-xs">{text}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
