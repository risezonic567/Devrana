import { FaWhatsapp } from "react-icons/fa";

const WhatsAppSticky = () => {
  const phoneNumber = "919289595558"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 md:bottom-12 md:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-transform hover:scale-110"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppSticky;
