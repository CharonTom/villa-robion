"use client";

// Importez le composant d'icône que vous utilisez (par exemple, FaTimes pour Font Awesome)
import { FaTimes } from "react-icons/fa";

const ReservationPanel = ({ isOpen, togglePanel }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full transition-transform ease-in-out duration-300 transform  ${
        isOpen ? "h-1/2 translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Contenu du volet de navigation */}
      <div className="bg-white h-[40vh]">
        {/* Bouton pour fermer le volet */}
        <button
          onClick={togglePanel}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={24} />
        </button>
      </div>
    </div>
  );
};

export default ReservationPanel;
