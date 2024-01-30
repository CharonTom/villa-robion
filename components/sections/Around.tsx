import SliderArea from "../sliders/SliderArea";

function Around() {
  return (
    <section className="p-4 md:p-8 mx-auto md:py-10">
      <h2 className="text-center my-6 sm:p-6 text-3xl md:text-4xl lg:text-5xl mx-auto md:w-[80%]">
        Ce que vous allez adorer dans la région
      </h2>
      <SliderArea />
      <p className="text-left mt-6 sm:p-10 text-xl sm:text-2xl md:text-3xl md:w-[60%] ">
        <strong>La Véloroute,</strong> voie verte du Calavon se situe à 100
        mètres de la maison.
        <strong> C&apos;est 45 km de piste cyclable</strong> qui vous amèneront
        de <strong>Cavaillon </strong>
        jusqu&apos;à <strong>Apt</strong> et au-delà.
      </p>
    </section>
  );
}

export default Around;
