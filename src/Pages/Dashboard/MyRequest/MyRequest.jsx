import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosSecure from '../AddRequests/Hooks/useAxiosSecure';


const MyRequest = () => {
    const [requests, setRequests] = useState([]);
    const [totalRequest, setTotalRequest] = useState(0)
    const [itemPerPage, setItemPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1)
    const axiosSecure = useAxiosSecure();

    // console.log(requests)


    useEffect(() => {
        axiosSecure.get(`/my-requests?page=${currentPage - 1}&size=${itemPerPage}`)
            .then(res => {
                // console.log(res.data)
                setRequests(res.data.request)
                setTotalRequest(res.data.totalRequest)
            })
            .catch(err => {
                console.log(err)
            })

    }, [axiosSecure, currentPage, itemPerPage])

    const numberOfPages = Math.ceil(totalRequest / itemPerPage);
    const pages = [...Array(numberOfPages).keys().map(e => e + 1)];

    // console.log(pages)

    // console.log(totalRequest, requests)

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className="max-w-6xl mx-auto p-4">

            <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">My Request</h1>

            {/* ===== Desktop Table ===== */}
            <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow border">
                <table className="table w-full">
                    <thead className="bg-[#435585] text-white">
                        <tr>
                            <th>#</th>
                            <th>Recipient</th>
                            <th>Hospital</th>
                            <th>Date</th>
                            <th>Blood Group</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            requests.map((request, index) => (
                                <tr key={request._id} className="hover:bg-base-200">
                                    <th>
                                        {(currentPage - 1) * itemPerPage + index + 1}
                                    </th>
                                    <td>{request.recipientName}</td>
                                    <td>{request.hospitalName}</td>
                                    <td>{request.donationDate}</td>
                                    <td>
                                        <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 font-semibold text-sm">
                                            {request.bloodGroup}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* ===== Mobile Card View ===== */}
            <div className="md:hidden space-y-4">
                {
                    requests.map((request, index) => (
                        <div
                            key={request._id}
                            className="bg-white shadow rounded-lg p-4 border"
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold text-sm text-gray-500">
                                    #{(currentPage - 1) * itemPerPage + index + 1}
                                </span>
                                <span className="px-2 py-1 rounded bg-red-100 text-red-600 text-xs font-semibold">
                                    {request.bloodGroup}
                                </span>
                            </div>

                            <p className="text-sm">
                                <span className="font-medium">Recipient:</span>{" "}
                                {request.recipientName}
                            </p>
                            <p className="text-sm">
                                <span className="font-medium">Hospital:</span>{" "}
                                {request.hospitalName}
                            </p>
                            <p className="text-sm">
                                <span className="font-medium">Date:</span>{" "}
                                {request.donationDate}
                            </p>
                        </div>
                    ))
                }
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="btn btn-sm disabled:opacity-40"
                >
                    Prev
                </button>

                {
                    pages.map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`btn btn-sm rounded-full
                    ${page === currentPage
                                    ? 'bg-[#435585] text-white'
                                    : ''
                                }`}
                        >
                            {page}
                        </button>
                    ))
                }

                <button
                    onClick={handleNextPage}
                    disabled={currentPage === pages.length}
                    className="btn btn-sm disabled:opacity-40"
                >
                    Next
                </button>
            </div>
        </div>

    );

};

export default MyRequest;