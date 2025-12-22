import React from "react";
import { Link } from "react-router-dom";
import { HeartHandshake, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-indigo-800 to-red-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* ===== Brand / About ===== */}
                <div>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <HeartHandshake className="w-6 h-6" />
                        LifeDrop
                    </h2>
                    <p className="text-sm mt-3 text-red-100">
                        LifeDrop is a blood donation platform that connects
                        donors with people in need. One donation can save
                        multiple lives.
                    </p>
                </div>

                {/* ===== Useful Links ===== */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/search" className="hover:underline">Search Donors</Link>
                        </li>
                        <li>
                            <Link to="/register" className="hover:underline">Become a Donor</Link>
                        </li>
                        <li>
                            <Link to="/login" className="hover:underline">Login</Link>
                        </li>
                    </ul>
                </div>

                {/* ===== Quick Actions ===== */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/dashboard" className="hover:underline">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/create-donation-request" className="hover:underline">
                                Request Blood
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/my-donation-request" className="hover:underline">
                                My Requests
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* ===== Contact Info ===== */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm text-red-100">
                        <li className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            +880 1700-000000
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            support@lifedrop.com
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Dhaka, Bangladesh
                        </li>
                    </ul>
                </div>
            </div>

            {/* ===== Bottom Bar ===== */}
            <div className="border-t border-red-400 py-4 text-center text-sm text-red-100">
                © {new Date().getFullYear()} LifeDrop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
