import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const AddBloodRequest = () => {

    const { user, districts, upazila } = useContext(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const receiverName = form.recipientName.value;
        console.log('btn clicked')

        console.log(name, receiverName)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 p-6">
            <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 border border-purple-200">
                <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Create Donation Request</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Requester Name */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Requester Name</label>
                        <input
                            type="text"
                            defaultValue={user?.displayName}
                            readOnly name="name"
                            className="input w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                        />
                    </div>

                    {/* Requester Email */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Requester Email</label>
                        <input
                            type="email"
                            defaultValue={user?.email}
                            readOnly
                            className="input w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                        />
                    </div>

                    {/* Recipient Name */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Recipient Name</label>
                        <input
                            type="text"
                            name="recipientName"
                            defaultValue=""
                            placeholder="Recipient Name"
                            className="input w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"

                        />
                    </div>

                    {/* Recipient District */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Recipient District</span>
                        </label>
                        <select
                            name="recipientDistrict"
                            defaultValue=""
                            className="select w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                            required
                        >
                            <option disabled value="">Select District</option>
                            {districts?.map((district) => (
                                <option key={district?.id
                                } value={district?.name}>{district?.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Recipient Upazila */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Recipient Upazila</span>
                        </label>
                        <select
                            name="recipientUpazila"
                            defaultValue=""
                            className="select w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                            required
                        >
                            <option disabled value="">Select Upazila</option>

                            {
                                upazila.map((upazil) => (
                                    <option key={upazil.id} value={upazil}>{upazil.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    {/* Hospital Name */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Hospital Name</label>
                        <input
                            type="text"
                            name="hospitalName"
                            defaultValue=""
                            placeholder="Hospital Name"
                            className="input w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                            required
                        />
                    </div>

                    {/* Full Address */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Full Address</label>
                        <input
                            type="text"
                            name="fullAddress"
                            defaultValue=""
                            placeholder="Full Address"
                            className="input w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                            required
                        />
                    </div>

                    {/* Blood Group */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Your Blood Group</span>
                        </label>
                        <select
                            defaultValue="Select Your Blood Group"
                            name="bloodGroup"
                            className="select w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        >
                            <option disabled>Select Your Blood Group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>
                    </div>

                    {/* Donation Date */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Donation Date</label>
                        <input
                            type="date"
                            name="donationDate"
                            defaultValue=""
                            className="input w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                            required
                        />
                    </div>

                    {/* Donation Time */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Donation Time</label>
                        <input
                            type="time"
                            name="donationTime"
                            defaultValue=""
                            className="input w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                            required
                        />
                    </div>

                    {/* Request Message */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Request Message</label>
                        <textarea
                            name="requestMessage"
                            defaultValue=""
                            placeholder="Why you need blood..."
                            className="textarea w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control w-full mt-4">
                        <button
                            type="submit"
                            className="w-full py-3 font-semibold rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition transform hover:scale-105"
                        >
                            Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBloodRequest;
