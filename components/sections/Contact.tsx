import Image from "next/image";
import React from "react";
import Map from "../Map";

function Contact() {
  return (
    <section>
      {/* image */}

      <div className="relative w-full h-[280px] w-full sm:h-[400px] rounded-xl mx-auto">
        <Image
          alt="maison"
          src="/images/contact.webp"
          fill
          className="object-cover"
          loading="eager"
          sizes="auto"
        />
        <h1 className="absolute text-white bottom-[10%] md:bottom-[5%] left-[2%] text-4xl md:text-5xl lg:text-6xl [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
          Contactez-nous.
        </h1>
      </div>
      {/* text */}

      <div className="p-4 py-6 md:py-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        <p className="text-center mb-6 md:mb-12">
          Besoin d’informations supplémentaires ?
        </p>
        <p className="text-center md:w-[80%] mx-auto">
          N&apos;hésitez pas à nous contacter si vous avez la moindre question
          ou demande.
          <br /> Vous trouverez ci-dessous nos coordonnées :
        </p>
      </div>

      {/* links */}

      <nav className="links-list w-full">
        <ul className="text-gray-500 text-xl w-fit text-center mx-auto sm:text-2xl md:text-3xl lg:text-4xl">
          <li>
            <a href="tel:+33621042123">
              <span>
                Lionel :{" "}
                <span className="text-primary-pink">06.10.36.13.38</span>
              </span>
            </a>
          </li>
          <li>
            <a href="tel:+33621042123">
              <span>
                Nathalie :{" "}
                <span className="text-primary-pink">06.12.23.31.71</span>
              </span>
            </a>
          </li>
          <li>
            <a href="mailto:charon.s.tom@gmail.com">
              <span>nathrobion@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="mailto:charon.s.tom@gmail.com">
              <span>lnrobion@gmail.com</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* map */}

      <div className="p-2 w-full mx-auto h-[300px] md:h-[500px] mt-4 md:mt-10 mb-16 md:mb-20">
        <Map />
      </div>
    </section>
  );
}

export default Contact;
