import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxios from '../Dashboard/AddRequests/Hooks/useAxios';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const [paymentInfo, setPaymentInfo] = useState();
    const axiosInstance = useAxios();

    useEffect(() => {
        axiosInstance.post(`/success-payment?session_id=${sessionId}`)
            .then(res => {
                console.log(res.data);
            })
    }, [sessionId, axiosInstance])
    useEffect(() => {
        axiosInstance.get('/payment-user')
            .then(res => {
                console.log(res.data)
                setPaymentInfo(res.data)
            })

    }, [axiosInstance])

    return (
        <div>


            <div className="max-w-5xl mx-auto mt-20 bg-green-200 border border-gray-200 rounded-xl shadow p-6">

                {/* Title */}
                <h2 className="text-xl font-semibold text-[#435585] mb-6 text-center ">
                    Payment Details
                </h2>

                {/* Info Rows */}
                <div className="space-y-3 text-sm">

                    <div className="flex justify-between">
                        <span className="text-gray-500">Transaction ID</span>
                        <span className="font-medium text-gray-800">
                            pi_3SgnqLIsggGryqPa0F8nyyHb
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Donor Email</span>
                        <span className="font-medium text-gray-800">
                            ashik@gmail.com
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Amount</span>
                        <span className="font-medium text-gray-800">
                            $20 USD
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Payment Status</span>
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                            PAID
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Paid At</span>
                        <span className="font-medium text-gray-800">
                            21 Dec 2025, 8:42 PM
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link
                    to="/"
                    className="btn px-6 bg-[#435585] text-white hover:bg-[#2f3d6b] flex items-center justify-center gap-2"
                >
                    🏠 Go Home
                </Link>

                <Link
                    to="/dashboard"
                    className="btn px-6 bg-green-600 text-white hover:bg-green-700 flex items-center justify-center gap-2"
                >
                    📊 Go Dashboard
                </Link>
            </div>

        </div>
    );
};

export default PaymentSuccess;
