import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Dashboard/AddRequests/Hooks/useAxiosSecure';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosSecure.get('/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, [axiosSecure]);

    const handleUpdateStatus = async (email, status) => {
        try {
            await axiosSecure.patch(`/update/user/status?email=${email}&status=${status}`);
            const res = await axiosSecure.get('/users');
            setUsers(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 p-6">
            <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-10">
                All User Management
            </h2>

            {/* ===== Desktop Table ===== */}
            <div className="hidden lg:block">
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
                                                    <img src={u?.mainPhotoUrl || "https://i.pravatar.cc/150"} alt="avatar" />
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
                                                : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'}`}>
                                            {u?.role}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`badge badge-outline font-semibold
                                            ${u?.status === 'Active'
                                                ? 'badge-success text-green-600 border-green-400'
                                                : 'badge-error text-red-600 border-red-400'}`}>
                                            {u?.status === 'Active' ? '🟢 Active' : '⛔ Blocked'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="flex gap-3 flex-wrap">
                                            {u?.status !== 'Active' && (
                                                <button
                                                    onClick={() => handleUpdateStatus(u?.email, 'Active')}
                                                    className="px-4 py-1.5 text-sm font-semibold rounded-full
                                                    bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-md
                                                    hover:from-green-500 hover:to-emerald-600 hover:shadow-lg
                                                    transition-all duration-300 active:scale-95 flex items-center gap-1">
                                                    🟢 Active
                                                </button>
                                            )}
                                            {u?.status !== 'blocked' && (
                                                <button
                                                    onClick={() => handleUpdateStatus(u?.email, 'blocked')}
                                                    className="px-4 py-1.5 text-sm font-semibold rounded-full
                                                    bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-md
                                                    hover:from-red-600 hover:to-pink-700 hover:shadow-lg
                                                    transition-all duration-300 active:scale-95 flex items-center gap-1">
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

            {/* ===== Tablet & Mobile Cards ===== */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
                {users?.map((u, i) => (
                    <div key={u._id} className="bg-white rounded-3xl shadow-xl border-l-8 border-gradient-to-b from-purple-500 to-pink-500 p-5">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="avatar">
                                <div className="w-14 rounded-full ring ring-purple-400">
                                    <img src={u?.mainPhotoUrl || "https://i.pravatar.cc/150"} alt="avatar" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{u?.name}</h3>
                                <p className="text-xs text-gray-500">{u?.email}</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold
                                ${u.role === 'Admin'
                                    ? 'bg-red-100 text-red-600'
                                    : 'bg-purple-100 text-purple-600'}`}>
                                {u.role}
                            </span>

                            <span className={`px-3 py-1 rounded-full text-xs font-semibold
                                ${u?.status === 'Active'
                                    ? 'bg-green-100 text-green-600'
                                    : 'bg-red-100 text-red-600'}`}>
                                {u?.status === 'Active' ? '🟢 Active' : '⛔ Blocked'}
                            </span>

                            <div className="flex gap-2 flex-wrap">
                                {u?.status !== 'Active' && (
                                    <button
                                        onClick={() => handleUpdateStatus(u?.email, 'Active')}
                                        className="px-3 py-1 text-xs font-semibold rounded-full bg-green-400 text-white">
                                        🟢 Active
                                    </button>
                                )}
                                {u?.status !== 'blocked' && (
                                    <button
                                        onClick={() => handleUpdateStatus(u?.email, 'blocked')}
                                        className="px-3 py-1 text-xs font-semibold rounded-full bg-red-500 text-white">
                                        ⛔ Block
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllUsers;
