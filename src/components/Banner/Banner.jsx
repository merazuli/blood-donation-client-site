import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mt-10 bg-gradient-to-r from-indigo-800 to-red-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Donate Blood, <span className="text-yellow-300">Save Lives</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-gray-200">
                    Join our blood donation community and help patients get the
                    blood they need in emergency situations.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/register">
                        <button className="btn bg-white text-[#8B0000] hover:bg-gray-200 px-8">
                            Join as a Donor
                        </button>
                    </Link>

                    <Link to="/donate">
                        <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#8B0000] px-8">
                            Donate
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Banner;
