import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxios from "../Dashboard/AddRequests/Hooks/useAxios";

const SearchRequest = () => {
    const { districts, upazila } = useContext(AuthContext);
    const [donors, setDonors] = useState([]);
    const axiosInstance = useAxios();

    const handleSearch = (e) => {
        e.preventDefault();
        const bloodGroup = e.target.bloodGroup.value;
        const district = e.target.recipientDistrict.value;
        const upazilaValue = e.target.recipientUpazila.value;

        axiosInstance
            .get(
                `/search-request?bloodGroup=${encodeURIComponent(
                    bloodGroup
                )}&district=${encodeURIComponent(
                    district
                )}&upazila=${encodeURIComponent(upazilaValue)}`
            )
            .then((res) => {
                setDonors(res.data);
            })
            .catch((err) => {
                console.error("Error fetching donors:", err);
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-[#435585] mb-6">
                Search Donors
            </h1>

            <form
                onSubmit={handleSearch}
                className="bg-white shadow rounded-lg p-6 grid gap-4 md:grid-cols-4"
            >
                {/* Blood Group */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">
                            Your Blood Group
                        </span>
                    </label>
                    <select
                        defaultValue="Select Your Blood Group"
                        name="bloodGroup"
                        className="select w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        required
                    >
                        <option disabled>Select Your Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                {/* District */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">Your District</span>
                    </label>
                    <select
                        name="recipientDistrict"
                        defaultValue=""
                        className="select w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                        required
                    >
                        <option disabled value="">
                            Select Your District
                        </option>
                        {districts?.map((district) => (
                            <option key={district?.id} value={district?.name}>
                                {district?.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Upazila */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">Your Upazila</span>
                    </label>
                    <select
                        name="recipientUpazila"
                        defaultValue=""
                        className="select w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                        required
                    >
                        <option disabled value="">
                            Select Your Upazila
                        </option>
                        {upazila.map((up) => (
                            <option key={up?.id} value={up?.name}>
                                {up?.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                    <button
                        type="submit"
                        className="btn bg-[#435585] text-white hover:bg-[#2f3d6b] w-full md:w-auto"
                    >
                        Search
                    </button>
                </div>
            </form>

            {/* Donors List */}
            <div className="mt-6">
                {donors.length > 0 ? (
                    <>
                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto bg-white shadow rounded-lg p-4">
                            <h2 className="text-xl font-semibold mb-4 text-[#435585]">
                                Donors List
                            </h2>
                            <table className="table w-full">
                                <thead className="bg-[#435585] text-white">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Blood</th>
                                        <th>District</th>
                                        <th>Upazila</th>
                                        <th>Why Need</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {donors.map((donor, index) => (
                                        <tr key={donor._id} className="hover:bg-gray-100">
                                            <th>{index + 1}</th>
                                            <td>{donor?.recipientName}</td>
                                            <td>
                                                <span className="px-2 py-1 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
                                                    {donor.bloodGroup}
                                                </span>
                                            </td>
                                            <td>{donor.recipientDistrict}</td>
                                            <td>{donor.recipientUpazila}</td>
                                            <td>{donor.recipientUpazila}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Card View */}
                        <div className="md:hidden space-y-4">
                            {donors.map((donor, index) => (
                                <div
                                    key={donor._id}
                                    className="bg-white shadow rounded-lg p-4 border"
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold text-sm text-gray-500">
                                            #{index + 1}
                                        </span>
                                        <span className="px-2 py-1 rounded bg-red-100 text-red-600 text-xs font-semibold">
                                            {donor.bloodGroup}
                                        </span>
                                    </div>

                                    <p className="text-sm">
                                        <span className="font-medium">Name:</span> {donor?.recipientName}
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-medium">District:</span>{" "}
                                        {donor.recipientDistrict}
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-medium">Upazila:</span>{" "}
                                        {donor.recipientUpazila}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    donors.length === 0 && (
                        <div className="mt-20 flex flex-col items-center justify-center">
                            <div className="bg-yellow-50 border border-yellow-300 text-yellow-700 px-6 py-4 rounded-lg shadow-md flex items-center space-x-3">
                                <svg
                                    className="w-6 h-6 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13 16h-1v-4h-1m0-4h.01M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"
                                    />
                                </svg>
                                <span className="font-medium text-center">
                                    No donors found yet. Try adjusting your search criteria.
                                </span>
                            </div>
                        </div>
                    )

                )}
            </div>
        </div>
    );
};

export default SearchRequest;
