import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Dashboard/AddRequests/Hooks/useAxiosSecure';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([]);
    // const { user } = useContext(AuthContext);


    useEffect(() => {
        axiosSecure.get('/users')
            .then(res => {
                setUsers(res.data)
            })
    }, [axiosSecure])
    // console.log(users[0]?.email);


    const handleUpdateStatus = async (email, status) => {
        try {
            await axiosSecure.patch(
                `/update/user/status?email=${email}&status=${status}`
            );
            const res = await axiosSecure.get('/users');
            setUsers(res.data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 p-6">

            <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-10">
                👥 User Management
            </h2>

            {/* ===== Desktop Glass Table ===== */}
            {/* <div className="hidden lg:block"> */}
            <div className="">
                <div className="overflow-x-auto backdrop-blur-lg bg-white/60 rounded-3xl shadow-xl border border-white/30">
                    <table className="table w-full">
                        <thead>
                            <tr className="text-purple-700">
                                <th>#</th>
                                <th>User Name/Email</th>
                                <th>User Role</th>
                                <th>User Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users?.map((u, i) => (
                                <tr key={u._id} className="hover:bg-white/40 transition">
                                    <td className="font-bold">{i + 1}</td>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-12 rounded-full ring ring-purple-300">
                                                    <img
                                                        src={u?.mainPhotoUrl || "https://i.pravatar.cc/150"}
                                                        alt="avatar"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{u?.name}</h3>
                                                <p className="text-xs text-gray-500">{u?.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold
                                    ${u.role === 'Admin'
                                                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                                                : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'}
                                `}>
                                            {u?.role}
                                        </span>
                                    </td>

                                    <td>
                                        <span
                                            className={`
                                                        badge badge-outline font-semibold
                                                        ${u?.status === 'Active'
                                                    ? 'badge-success text-green-600 border-green-400'
                                                    : 'badge-error text-red-600 border-red-400'
                                                }
                                                         `}
                                        >
                                            {u?.status === 'Active' ? '🟢 Active' : '⛔ Blocked'}
                                        </span>

                                    </td>

                                    <td>
                                        <div className="flex gap-3">
                                            {/* Active Button */}
                                            {u?.status !== 'Active' && (
                                                <button
                                                    onClick={() => handleUpdateStatus(u?.email, 'Active')}
                                                    className="
                                                                px-4 py-1.5 text-sm font-semibold rounded-full
                                                                bg-gradient-to-r from-green-400 to-emerald-500
                                                                text-white shadow-md
                                                                hover:from-green-500 hover:to-emerald-600
                                                                hover:shadow-lg
                                                                transition-all duration-300
                                                                active:scale-95
                                                                flex items-center gap-1
                                                            "
                                                >
                                                    🟢 Active
                                                </button>
                                            )}


                                            {/* Block Button */}
                                            {u?.status !== 'blocked' && (
                                                <button
                                                    onClick={() => handleUpdateStatus(u?.email, 'blocked')}
                                                    className="
                                                        px-4 py-1.5 text-sm font-semibold rounded-full
                                                        bg-gradient-to-r from-red-500 to-pink-600
                                                        text-white shadow-md
                                                        hover:from-red-600 hover:to-pink-700
                                                        hover:shadow-lg
                                                        transition-all duration-300
                                                        active:scale-95
                                                        flex items-center gap-1
                                                    "
                                                >
                                                    ⛔ Block
                                                </button>
                                            )}

                                        </div>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ===== Mobile Timeline Cards ===== */}
            {/* <div className="lg:hidden space-y-6">
                {users.map((u) => (
                    <div
                        key={u._id}
                        className="relative bg-white rounded-3xl shadow-xl border-l-8
                border-gradient-to-b from-purple-500 to-pink-500 p-5"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="avatar">
                                <div className="w-14 rounded-full ring ring-purple-400">
                                    <img
                                        src={u.photo || "https://i.pravatar.cc/150"}
                                        alt="avatar"
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">{u.name}</h3>
                                <p className="text-xs text-gray-500">{u.email}</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <span className={`px-4 py-1 rounded-full text-xs font-semibold
                        ${u.role === 'Admin'
                                    ? 'bg-red-100 text-red-600'
                                    : 'bg-purple-100 text-purple-600'}
                    `}>
                                {u.role}
                            </span>

                            <button className="btn btn-sm rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                Details
                            </button>
                        </div>
                    </div>
                ))}
            </div> */}

        </div>


    );
};

export default AllUsers;