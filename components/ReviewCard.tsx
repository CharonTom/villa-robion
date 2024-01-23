import Image from "next/image";
import React from "react";
import { IoIosStar } from "react-icons/io";

interface ReviewCardProps {
  name: string;
  text: string;
  date: string;
  logo: string;
  starColor: string;
  profil: string;
}

function ReviewCard({
  name,
  text,
  date,
  logo,
  starColor,
  profil,
}: ReviewCardProps) {
  return (
    <div className="w-full h-[270px] bg-gray-100 rounded-lg p-6 relative">
      <Image
        src={logo}
        alt="logo"
        width={20}
        height={20}
        className="absolute top-6 right-6 rounded-lg"
      />
      <div className="flex gap-x-4 mb-2">
        <div className="h-12 w-12 relative">
          <Image
            alt="profil"
            src={profil}
            className="rounded-full bg-red-200"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <div className="text-base font-bold">{name}</div>
          <div className="text-xs text-gray-500">{date}</div>
        </div>
      </div>
      <div className="flex mb-2 text-base">
        <IoIosStar style={{ color: starColor }} />
        <IoIosStar style={{ color: starColor }} />
        <IoIosStar style={{ color: starColor }} />
        <IoIosStar style={{ color: starColor }} />
        <IoIosStar style={{ color: starColor }} />
      </div>
      <div className="">
        <p className="text-xs">{text}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
