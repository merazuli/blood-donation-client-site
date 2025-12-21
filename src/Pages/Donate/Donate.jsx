import React, { useContext } from 'react';
import useAxios from '../Dashboard/AddRequests/Hooks/useAxios';
import { AuthContext } from '../../provider/AuthProvider';




const Donate = () => {

    const axiosInstance = useAxios();
    const { user } = useContext(AuthContext);


    console.log(user)
    const handleCheckOut = (e) => {
        e.preventDefault();
        const donationAmount = parseInt(e.target.donationAmount.value);
        const donarEmail = user?.email;
        const donarName = user?.displayName;
        const message = e.target.message.value;
        const formData = {
            donarEmail,
            donarName,
            donationAmount,
            message,
        }



        axiosInstance.post('/create-payment-checkout', formData)
            .then(res => {
                console.log(res.data)
                window.location.href = res.data.url;
            })

        console.log(donationAmount)
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center px-4">

            {/* Card */}
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-[#8B0000] text-white p-5 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        Support Blood Donation 💉
                    </h1>
                    <p className="text-sm md:text-base text-red-100">
                        Your contribution helps save lives and support emergency blood needs
                    </p>
                </div>

                {/* Content */}
                <div className="p-8 grid md:grid-cols-2 gap-8">

                    {/* Left Info */}
                    <div className="space-y-5">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Why Donate?
                        </h2>

                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li>❤️ Help patients in emergency situations</li>
                            <li>🏥 Support hospitals and donors</li>
                            <li>🚑 Save lives with timely blood support</li>
                        </ul>

                        <div className="bg-red-50 p-4 rounded-lg text-sm text-red-700">
                            Even a small donation can make a big difference.
                        </div>
                    </div>

                    {/* Right Form */}
                    <form onSubmit={handleCheckOut} className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Donation Details
                        </h2>

                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Your Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                defaultValue={user?.displayName}
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email Address</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                defaultValue={user?.email}
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Amount */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Donation Amount (৳)
                                </span>
                            </label>
                            <input
                                type="number"
                                name="donationAmount"
                                placeholder="Enter amount"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Message (Optional)</span>
                            </label>
                            <textarea
                                name="message"
                                placeholder="Write a message"
                                className="textarea textarea-bordered w-full"
                                rows="3"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn w-full bg-[#8B0000] hover:bg-[#6f0000] text-white text-lg"
                        >
                            Donate Now ❤️
                        </button>
                    </form>

                </div>

                {/* Footer Note */}
                <div className="bg-gray-50 text-center p-4 text-xs text-gray-500">
                    🔒 Your donation information is secure and confidential
                </div>
            </div>
        </div>
    );
};

export default Donate;
