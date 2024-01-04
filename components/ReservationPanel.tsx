"use client";

// Importez le composant d'icône que vous utilisez (par exemple, FaTimes pour Font Awesome)
import { useReservationContext } from "@/context/NavBar";
import { FaTimes } from "react-icons/fa";

const ReservationPanel = () => {
  const { isOpen, closePanel } = useReservationContext();
  return (
    <div
      className={`fixed top-0 left-0 w-full transition-transform ease-in-out duration-300 transform bg-white h-1/2  ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Contenu du volet de navigation */}
      <div className="">
        {/* Bouton pour fermer le volet */}
        <button
          onClick={closePanel}
          className="absolute bottom-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={24} />
        </button>
      </div>
    </div>
  );
};

export default ReservationPanel;
