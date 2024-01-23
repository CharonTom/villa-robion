import React from "react";

function Contact() {
  return (
    <section className="text-xl sm: text-2xl md:text-3xl lg:text-4xl p-4">
      <p className="py-12 text-center md:w-[60%] mx-auto">
        Besoin d’informations supplémentaires ?
        <br />
        N&apos;hésitez pas à nous contacter si vous avez la moindre question ou
        demande.
      </p>
      <p className="text-center mb-12 mx-auto">
        Vous trouverez ci-dessous nos coordonnées :
      </p>
      <nav className="links-list w-fit mx-auto">
        <ul className="text-gray-500 text-center">
          <li>
            <a href="tel:+33621042123">
              <div>Lionel : 06.12.14.54</div>
            </a>
          </li>
          <li>
            <a href="tel:+33621042123">
              <div>Nathalie : 06.12.54.54</div>
            </a>
          </li>
          <li>
            <a href="mailto:charon.s.tom@gmail.com">
              <div>nathrobion@gmail.com</div>
            </a>
          </li>
          <li>
            <a href="mailto:charon.s.tom@gmail.com">
              <div>lnrobion@gmail.com</div>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Contact;
