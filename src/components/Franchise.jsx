import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Franchise = () => {
    // Replace with your WhatsApp number

    return (
        <div

            className="fixed z-50 left-0 top-64 md:left-0 bg-primary text-white  shadow-lg  flex items-center justify-center transition-transform hover:scale-110"

        >
            <button className="bg-primary  text-white text-sm uppercase font-semibold px-4 py-2 rounded hover:bg-Secondary transition">
                <Link to="/contact-us">  Franchise</Link>
            </button>
        </div>
    );
};

export default Franchise;
