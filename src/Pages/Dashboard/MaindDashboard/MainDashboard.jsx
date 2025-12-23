import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosSecure from '../AddRequests/Hooks/useAxiosSecure';
import { Link } from 'react-router';
import FeaturedStats from '../../../components/FeaturedStats ';
import Navbar from '../../../components/navbar/Navbar';

const MainDashboard = () => {
    const { user, role } = useContext(AuthContext);
    const [myRequests, setMyRequests] = useState([]);
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        axiosSecure.get('/my-requests')
            .then(res => {
                setMyRequests(res.data.request.slice(0, 3));
            });
    }, [axiosSecure]);

    const handleDelete = (id) => {

    };

    const handleStatusUpdate = (id, status) => {

    };
    // console.log(role)

    return (



        // chatgpt 
        <div className="p-6 bg-gray-50 ">
            {/* Welcome Section */}
            <div className="mb-6 text-center md:text-left">
                <h1 className="text-2xl font-bold text-[#435585]">
                    Welcome, {user?.displayName} 👋
                </h1>
                <p className="text-gray-500">
                    Thank you for being a lifesaver.
                </p>
            </div>

            {/* Conditional Rendering */}
            {role === "Donor" && myRequests.length > 0 && (
                <div className="bg-white shadow rounded-lg p-4">
                    {/* Donor Recent Donation Requests Table */}
                    <h2 className="text-xl font-semibold mb-4 text-[#435585]">
                        My Recent Donation Requests
                    </h2>
                    {/* --- Desktop Table --- */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="table w-full">
                            <thead className="bg-[#435585] text-white">
                                <tr>
                                    <th>Recipient</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Blood</th>
                                    <th>Status</th>
                                    <th>Donor Info</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myRequests.map((req) => (
                                    <tr key={req._id} className="hover:bg-gray-100">
                                        <td>{req.recipientName}</td>
                                        <td>{req.recipientDistrict}, {req.recipientUpazila}</td>
                                        <td>{req.donationDate}</td>
                                        <td>{req.donationTime}</td>
                                        <td>
                                            <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 font-semibold text-sm">
                                                {req.bloodGroup}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`px-2 py-1 rounded-full text-sm font-semibold
                                        ${req.status === "pending" ? "bg-yellow-100 text-yellow-700" : ""}
                                        ${req.status === "inprogress" ? "bg-blue-100 text-blue-700" : ""}
                                        ${req.status === "done" ? "bg-green-100 text-green-700" : ""}
                                        ${req.status === "canceled" ? "bg-red-100 text-red-700" : ""}`}>
                                                {req.status}
                                            </span>
                                        </td>
                                        <td>
                                            {req.status === "inprogress" ? (
                                                <div>
                                                    <p>{req.donorName}</p>
                                                    <p className="text-xs text-gray-500">{req.donorEmail}</p>
                                                </div>
                                            ) : "-"}
                                        </td>
                                        <td className="flex flex-wrap gap-1">
                                            <Link
                                                to={`/donation-request/${req._id}`}
                                                className="btn btn-xs bg-[#435585] text-white hover:bg-[#2f3d6b]"
                                            >
                                                View
                                            </Link>
                                            <Link
                                                to={`/dashboard/edit-donation/${req._id}`}
                                                className="btn btn-xs bg-[#6f4dbf] text-white hover:bg-[#5a3f9a]"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(req._id)}
                                                className="btn btn-xs bg-red-600 text-white hover:bg-red-700"
                                            >
                                                Delete
                                            </button>
                                            {req.status === "inprogress" && (
                                                <>
                                                    <button
                                                        onClick={() => handleStatusUpdate(req._id, "done")}
                                                        className="btn btn-xs bg-green-600 text-white hover:bg-green-700"
                                                    >
                                                        Done
                                                    </button>
                                                    <button
                                                        onClick={() => handleStatusUpdate(req._id, "canceled")}
                                                        className="btn btn-xs bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                    >
                                                        Cancel
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* --- Mobile Card View --- */}
                    <div className="md:hidden space-y-4">
                        {myRequests.map((req) => (
                            <div key={req._id} className="bg-white shadow rounded-lg p-4 border">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-sm text-gray-500">{req.recipientName}</span>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                                ${req.status === "pending" ? "bg-yellow-100 text-yellow-700" : ""}
                                ${req.status === "inprogress" ? "bg-blue-100 text-blue-700" : ""}
                                ${req.status === "done" ? "bg-green-100 text-green-700" : ""}
                                ${req.status === "canceled" ? "bg-red-100 text-red-700" : ""}`}>
                                        {req.status}
                                    </span>
                                </div>

                                <p className="text-sm"><span className="font-medium">Location:</span> {req.recipientDistrict}, {req.recipientUpazila}</p>
                                <p className="text-sm"><span className="font-medium">Date:</span> {req.donationDate}</p>
                                <p className="text-sm"><span className="font-medium">Time:</span> {req.donationTime}</p>
                                <p className="text-sm">
                                    <span className="font-medium">Blood:</span>{" "}
                                    <span className="px-2 py-1 rounded-full bg-red-100 text-red-600 font-semibold text-sm">
                                        {req.bloodGroup}
                                    </span>
                                </p>

                                {/* Mobile Actions */}
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <Link
                                        to={`/donation-request/${req._id}`}
                                        className="btn btn-sm w-full bg-[#435585] text-white hover:bg-[#2f3d6b]"
                                    >
                                        View
                                    </Link>
                                    <Link
                                        to={`/dashboard/edit-donation/${req._id}`}
                                        className="btn btn-sm w-full bg-[#6f4dbf] text-white hover:bg-[#5a3f9a]"
                                    >
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-4">
                        <Link
                            to="/dashboard/my-donation-request"
                            className="btn btn-outline border-[#435585] text-[#435585] hover:bg-[#435585] hover:text-white"
                        >
                            View My All Requests
                        </Link>
                    </div>
                </div>
            )}

            {role === "admin" && (
                <div className="bg-white shadow rounded-lg text-center">
                    <FeaturedStats></FeaturedStats>
                </div>
            )}
        </div>


    );
};

export default MainDashboard;
