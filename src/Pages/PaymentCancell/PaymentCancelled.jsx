import React from 'react';
import { Link } from 'react-router-dom';

const PaymentCancelled = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-4xl">
                        ❌
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Payment Cancelled
                </h1>

                {/* Message */}
                <p className="text-gray-600 text-sm md:text-base mb-6">
                    Your payment was not completed.
                    Don’t worry — no money has been deducted from your account.
                </p>

                {/* Info Box */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700 mb-6">
                    ⚠️ You can try again anytime to support blood donation.
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                    <Link
                        to="/donate"
                        className="btn bg-[#8B0000] hover:bg-[#6f0000] text-white"
                    >
                        Try Again
                    </Link>

                    <Link
                        to="/"
                        className="btn btn-outline border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    >
                        Go to Home
                    </Link>
                </div>

                {/* Footer */}
                <p className="text-xs text-gray-400 mt-6">
                    💡 If you faced any issue, please contact support
                </p>
            </div>
        </div>
    );
};

export default PaymentCancelled;
