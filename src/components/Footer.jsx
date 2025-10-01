import { FaFacebookF, FaInstagram, FaTwitter, FaTripadvisor, FaPinterest } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Logo & Tagline */}
                <div>
                    <h2 className="text-3xl font-serif font-bold text-white">Devrana</h2>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                        Experience unmatched luxury and comfort in the heart of tradition.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><NavLink to="/rooms-cottage" className="hover:text-white transition">Rooms & Cottage</NavLink></li>
                        <li><NavLink to="/event-and-packages" className="hover:text-white transition">Event and packages</NavLink></li>
                        <li><NavLink to="/restaurant" className="hover:text-white transition">Restaurant</NavLink></li>
                        <li><NavLink to="/menu" className="hover:text-white transition">Menu </NavLink></li>
                        <li><NavLink to="/blog" className="hover:text-white transition">Blogs </NavLink></li>
                        <li><NavLink to="/gallery" className="hover:text-white transition">Gallery</NavLink></li>

                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li>📍 Devrana, Delhi-Haridwar Highway, Mansurpur, Muzaffarnagar
                        </li>
                        <li>📞 For Franchise: +91 78270 02538</li>
                        <li>📞 +91 78270 02538</li>
                        <li>✉️ info@devrana.com</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                    <p className="text-gray-400 mb-4">Subscribe to receive special offers and updates.</p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 rounded-l-md w-full focus:outline-none"
                        />
                        <button className="bg-primary hover:bg-Secondary text-white px-4 py-2 rounded-r-md transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Devrana Hotel. All rights reserved.
                </p>

                {/* Socials */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition">
                        <FaInstagram />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition">
                        <FaTwitter />
                    </a>
                   
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition">
                        <FaPinterest />
                    </a>
                </div>
            </div>
        </footer>
    );
}
