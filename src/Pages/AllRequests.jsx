import React, { useEffect, useState } from 'react';
import useAxios from './Dashboard/AddRequests/Hooks/useAxios';
import { Droplet } from 'lucide-react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const AllRequests = () => {
    const axiosInstance = useAxios();
    const [allRequests, setAllRequests] = useState([]);
    useEffect(() => {
        axiosInstance.get('/all-requests')
            .then(res => setAllRequests(res.data))
            .catch(err => console.error(err));
    }, [axiosInstance]);


    return (
        <div className="min-h-screen max-w-11/12 mx-auto bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">All Blood Donation Requests</h1>
            {allRequests.length === 0 ? (
                <p className="text-gray-500">No requests found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {allRequests.map(req => (
                        <div
                            key={req._id}
                            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:scale-105 transform transition"
                        >
                            <div className="flex items-center mb-4">
                                <Droplet size={36} className="text-red-500 mr-3" />
                                <h2 className="text-xl font-semibold">{req.recipientName}</h2>
                            </div>
                            <p className="text-gray-600 mb-2">
                                <span className="font-medium">Location:</span> {req.recipientDistrict}, {req.recipientUpazila}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <span className="font-medium">Blood Group:</span> {req.bloodGroup}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <span className="font-medium">Date:</span> {req.donationDate}
                            </p>
                            <p className="text-gray-600 mb-4">
                                <span className="font-medium">Time:</span> {req.donationTime}
                            </p>
                            <p className="text-gray-600 mb-4">
                                <span className="font-medium">Status:</span> <span className='text-yellow-700 font-bold'>{req.status}</span>
                            </p>
                            <Link to={`/view-details/${req?._id}`} className="mt-auto text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-[#2f3d6b] transition">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllRequests;
