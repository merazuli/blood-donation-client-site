import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Dashboard/AddRequests/Hooks/useAxiosSecure';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([]);
    console.log(users)


    useEffect(() => {
        axiosSecure.get('/users')
            .then(res => {
                setUsers(res.data)
            })
    }, [axiosSecure])
    console.log(users)
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 p-6">

            <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-10">
                👥 User Management
            </h2>

            {/* ===== Desktop Glass Table ===== */}
            <div className="hidden lg:block">
                <div className="overflow-x-auto backdrop-blur-lg bg-white/60 rounded-3xl shadow-xl border border-white/30">
                    <table className="table w-full">
                        <thead>
                            <tr className="text-purple-700">
                                <th>#</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((u, i) => (
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
                                                <p className="font-semibold">{u.name}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-sm text-gray-600">
                                        {u.email}
                                    </td>

                                    <td>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold
                                    ${u.role === 'Admin'
                                                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                                                : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'}
                                `}>
                                            {u.role}
                                        </span>
                                    </td>

                                    <td>
                                        <span className="badge badge-success badge-outline">
                                            Active
                                        </span>
                                    </td>

                                    <td>
                                        <button className="btn btn-sm rounded-full btn-outline hover:btn-primary">
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ===== Mobile Timeline Cards ===== */}
            <div className="lg:hidden space-y-6">
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
            </div>

        </div>


    );
};

export default AllUsers;