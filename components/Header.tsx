import React from "react";

function Header() {
  return (
    <header className="w-full fixed z-20 text-white">
      <div className="bg-primary-pink h-3 w-full"></div>
      <div className="mx-14 flex justify-between items-center p-5">
        <div>
          <div className="">Logo</div>
        </div>
        <div className="flex-center gap-x-20">
          <div>Réserver</div>
          <div>Visite virutelle</div>
          <div>Nous contacter</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
