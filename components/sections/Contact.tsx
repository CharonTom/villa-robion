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
        <h1 className="absolute text-white bottom-[8%] left-[2%] text-4xl md:text-5xl lg:text-6xl [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
          Contactez-nous.
        </h1>
      </div>
      {/* text */}

      <div className="p-4 py-8 md:py-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
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

      <nav className="links-list w-fit mx-auto block">
        <ul className="text-gray-500 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl block">
          <li>
            <a href="tel:+33621042123">
              <div>
                Lionel :{" "}
                <span className="text-primary-pink">06.10.36.13.38</span>
              </div>
            </a>
          </li>
          <li>
            <a href="tel:+33621042123">
              <div>
                Nathalie :{" "}
                <span className="text-primary-pink">06.12.23.31.71</span>
              </div>
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

      {/* map */}

      <div className="p-2 w-full mx-auto h-[300px] md:h-[500px] mt-4 md:mt-10 mb-16 md:mb-20">
        <Map />
      </div>
    </section>
  );
}

export default Contact;
