import React from "react";
import { RiStarSFill } from "react-icons/ri";

function ReviewCard() {
  return (
    <div className="w-full bg-gray-200 rounded-lg p-4 relative">
      <div className="bg-red-500 h-2 w-2 absolute top-4 right-4"></div>
      <div className="flex gap-x-4 mb-2">
        <div className="h-14 w-14 rounded-full bg-red-200"></div>
        <div>
          <div>Nom et Prénom</div>
          <div className="text-sm">date</div>
        </div>
      </div>
      <div className="flex mb-2">
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
      </div>
      <div className="">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at
          velit debitis. Vero omnis ratione velit harum molestias officiis
          voluptates quibusdam fugiat repellendus recusandae, consequatur,
          reiciendis mollitia dolorum assumenda! Hic?
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
