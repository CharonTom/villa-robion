import { FaLocationDot } from "react-icons/fa6";

function Map() {
  return (
    <div className="w-full h-full">
      <iframe
        title="Google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46039.233422503174!2d5.104674332677932!3d43.84645750895356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ca08893846e7ef%3A0x40819a5fd8fc0f0!2sRobion!5e0!3m2!1sfr!2sfr!4v1704899372899!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl"
      ></iframe>
      <div className="text-center text-base mt-4 text-gray-800 flex-center gap-2">
        <FaLocationDot />
        <div>84440, Robion</div>
      </div>
    </div>
  );
}

export default Map;
