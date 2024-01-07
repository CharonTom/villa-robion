import React from "react";

interface ReservationButtonProps {
  openPanel: () => void;
}

function ReservationButton({ openPanel }: ReservationButtonProps) {
  return (
    <button
      onClick={openPanel}
      className="w-[350px] bg-white rounded-full p-3 book-button learn-more "
    >
      <span className="circle bg-primary-pink rounded-full" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <p className="book-button-text absolute top-0 bottom-0 right-0 left-0 flex-center ml-8 text-black">
        Réservez votre séjour
      </p>
    </button>
  );
}

export default ReservationButton;
