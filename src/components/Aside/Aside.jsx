import {
    LayoutDashboard,
    Users,
    Droplet,
    LogOut,
    ShieldCheck
} from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Aside = () => {
    const { user, role, logOutUser } = useContext(AuthContext);

    const navItem = "flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-white";
    const activeItem = "bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold";

    return (
        <aside className="w-64 fixed   bg-gradient-to-b from-purple-600 to-purple-800 flex flex-col shadow-lg">
            {/* Brand / Logo */}
            <div className="text-white">
                <div className="p-6 border-b border-purple-900 text-center">
                    <div className="flex justify-center mb-2">
                        <ShieldCheck size={34} className="text-white" />
                    </div>
                    <h2 className="text-xl font-bold">
                        {role === 'admin' && 'Admin Panel'}
                        {role === 'Donor' && 'Donor Dashboard'}
                        {role === 'volunteer' && 'Volunteer Panel'}
                    </h2>
                    <p className="text-sm text-purple-300 font-medium">
                        Blood Donation System
                    </p>
                </div>

                {/* User Info */}
                <div className="p-4 border-b border-purple-900 bg-purple-700">
                    <div className="flex items-center gap-3">
                        <div className="avatar placeholder">
                            <div className="rounded-full w-10 h-10 overflow-hidden">
                                <img src={user?.photoURL} alt="avatar" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-xl">{user?.displayName}</h4>
                            <p className="text-purple-300 text-xs">{user?.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <ul className="menu p-4 flex-1 gap-1 text-white">
                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `${navItem} ${isActive ? activeItem : "hover:bg-purple-600"}`
                        }
                    >
                        <LayoutDashboard size={18} />
                        Dashboard
                    </NavLink>
                </li>

                {role === "admin" && (
                    <li>
                        <NavLink
                            to="/dashboard/all-users"
                            className={({ isActive }) =>
                                `${navItem} ${isActive ? activeItem : "hover:bg-purple-600"}`
                            }
                        >
                            <Users size={18} />
                            All Users
                        </NavLink>
                    </li>
                )}

                <li>
                    <NavLink
                        to="/dashboard/create-donation-request"
                        className={({ isActive }) =>
                            `${navItem} ${isActive ? activeItem : "hover:bg-purple-600"}`
                        }
                    >
                        <Droplet size={18} />
                        Add Blood Requests
                    </NavLink>
                </li>


                <li>
                    <NavLink
                        to="/dashboard/my-donation-request"
                        className={({ isActive }) =>
                            `${navItem} ${isActive ? activeItem : "hover:bg-purple-600"}`
                        }
                    >
                        <Droplet size={18} />
                        My Blood Requests
                    </NavLink>
                </li>

            </ul>

            {/* Logout */}
            <div className="p-4 border-t border-purple-900 bg-purple-700">
                <button
                    onClick={logOutUser}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-purple-900 hover:bg-purple-950 text-white transition-all"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Aside;
