import {
    LayoutDashboard,
    Users,
    Droplet,
    HandHeart,
    Settings,
    LogOut,
    ShieldCheck
} from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Aside = () => {
    const { role, logOutUser } = useContext(AuthContext);
    const navItem =
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all";

    const activeItem =
        "bg-gray-300 text-gray-900 font-semibold";

    return (
        <aside className="w-64 min-h-screen bg-gray-300 border-r border-gray-300 flex flex-col">

            {/* ===== Brand / Logo ===== */}
            <div className="p-6 border-b border-gray-300 text-center bg-gray-200">
                <div className="flex justify-center mb-2">
                    <ShieldCheck size={34} className="text-gray-700" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                    {role == 'admin' && 'Admin Panel'}
                    {role == 'Donor' && 'Donor Dashboard'}
                    {role == 'volunteer' && 'Volunteer Panel'}
                </h2>

                {/* <p className="text-sm text-gray-600">
                    Blood Donation System
                </p> */}
            </div>

            {/* ===== Admin Info ===== */}
            {/* <div className="p-4 border-b border-gray-300 bg-gray-100">
                <div className="flex items-center gap-3">
                    <div className="avatar placeholder">
                        <div className="bg-gray-400 text-white rounded-full w-10">
                            <span>A</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm text-gray-800">
                            Admin
                        </h4>
                        <p className="text-xs text-gray-600">
                            admin@system.com
                        </p>
                    </div>
                </div>
            </div> */}

            {/* ===== Menu ===== */}
            <ul className="menu p-4 flex-1 gap-1 text-gray-700">

                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `${navItem} ${isActive
                                ? activeItem
                                : "hover:bg-gray-200"
                            }`
                        }
                    >
                        <LayoutDashboard size={18} />
                        Dashboard
                    </NavLink>
                </li>

                {
                    role == "admin" && (
                        <li>
                            <NavLink
                                to="/dashboard/all-users"
                                className={({ isActive }) =>
                                    `${navItem} ${isActive
                                        ? activeItem
                                        : "hover:bg-gray-200"
                                    }`
                                }
                            >
                                <Users size={18} />
                                All Users
                            </NavLink>
                        </li>
                    )
                }

                <li>
                    <NavLink
                        to="/dashboard/donors"
                        className={({ isActive }) =>
                            `${navItem} ${isActive
                                ? activeItem
                                : "hover:bg-gray-200"
                            }`
                        }
                    >
                        <HandHeart size={18} />
                        Donors
                    </NavLink>
                </li>

                {
                    role == "Donor" && (
                        <li>
                            <NavLink
                                to="/dashboard/create-donation-request"
                                className={({ isActive }) =>
                                    `${navItem} ${isActive
                                        ? activeItem
                                        : "hover:bg-gray-200"
                                    }`
                                }
                            >
                                <Droplet size={18} />
                                Add Blood Requests
                            </NavLink>
                        </li>
                    )
                }
                {/* Manage Request  */}
                <li>
                    <NavLink
                        to="/dashboard/my-donation-request"
                        className={({ isActive }) =>
                            `${navItem} ${isActive
                                ? activeItem
                                : "hover:bg-gray-200"
                            }`
                        }
                    >
                        <Droplet size={18} />
                        My Blood Requests
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/dashboard/settings"
                        className={({ isActive }) =>
                            `${navItem} ${isActive
                                ? activeItem
                                : "hover:bg-gray-200"
                            }`
                        }
                    >
                        <Settings size={18} />
                        Settings
                    </NavLink>
                </li>
            </ul>

            {/* ===== Logout ===== */}
            <div className="p-4 border-t border-gray-300 bg-gray-100">
                <button onClick={logOutUser} className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-300 transition-all">
                    <LogOut size={18} />
                    Logout
                </button>
            </div>

        </aside>
    );
};

export default Aside;
