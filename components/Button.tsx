import React from "react";

function Button({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      className="p-3 bg-primary-pink rounded-xl text-white hover:bg-pink-500 transition"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
