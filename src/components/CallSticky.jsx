import { FaPhone } from "react-icons/fa";

const CallStick = () => {
  const phoneNumber = "+91 78270 02538";
  const telHref = `tel:${phoneNumber.replace(/\s+/g, '')}`;

  return (
    <a
      href={telHref}
      className="fixed z-50 bottom-64 right-6 md:bottom-32 md:right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-transform hover:scale-110"
      title={`Call ${phoneNumber}`}
      aria-label={`Call ${phoneNumber}`}
    >
      <FaPhone className="text-2xl" />
    </a>
  );
};

export default CallStick;
