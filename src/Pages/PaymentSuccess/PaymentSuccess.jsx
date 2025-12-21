import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-4xl">
                        ✅
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Payment Successful!
                </h1>

                {/* Message */}
                <p className="text-gray-600 text-sm md:text-base mb-6">
                    Thank you for your generous donation.
                    Your support helps save lives and support emergency blood needs.
                </p>

                {/* Info Box */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-700 mb-6">
                    💉 Your donation has been securely processed.
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                    <Link
                        to="/"
                        className="btn bg-[#8B0000] hover:bg-[#6f0000] text-white"
                    >
                        Go to Home
                    </Link>

                    <Link
                        to="/dashboard"
                        className="btn btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                        View Dashboard
                    </Link>
                </div>

                {/* Footer */}
                <p className="text-xs text-gray-400 mt-6">
                    🔒 Transaction ID has been sent to your email
                </p>
            </div>
        </div>
    );
};

export default PaymentSuccess;
