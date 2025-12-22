import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from './Dashboard/AddRequests/Hooks/useAxiosSecure';

const DetailsPage = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    // DetailsPage.jsx
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/view-details/${id}`)
            .then(res => setFormData(res.data))
            .catch(err => console.error(err));
    }, [id, axiosSecure])

    console.log(formData)

    const handleStatusChange = () => {
        const statusSpan = document.getElementById("status"); // DOM element
        statusSpan.innerText = "Complete"; // ✅ ঠিকভাবে UI update
    };


    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
                Blood Donation Request Details
            </h1>

            <div className="space-y-4">
                <div className="p-4 bg-gray-100 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Requester Info</h2>
                    <p>
                        <span className="font-medium">Name:</span> {formData.requesterName}
                    </p>
                    <p>
                        <span className="font-medium">Email:</span> {formData.requesterEmail}
                    </p>

                    <p>
                        <span className="font-medium">Status:</span>{" "}
                        <span id="status" className="text-yellow-700 font-bold text-lg">Pending</span>
                    </p>
                    <button onClick={handleStatusChange}></button>

                    <p>
                        <span className="font-medium">Created At:</span>{" "}
                        {new Date(formData.createdAt).toLocaleString()}
                    </p>
                    <button onClick={handleStatusChange} className='btn bg-indigo-700 mx-auto w-10/12 hover:bg-yellow-400 text-white text-center ml-10 mt-5'>Donate</button>

                </div>

            </div>
        </div>
    );


};

export default DetailsPage;