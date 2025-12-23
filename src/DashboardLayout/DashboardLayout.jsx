import React, { useState } from "react";
import { Outlet } from "react-router";
import Aside from "../components/Aside/Aside";
import { Menu } from "lucide-react";


const DashboardLayout = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* <Navbar /> */}


            <div className="min-h-screen  flex bg-gray-100">
                {/* Sidebar */}
                <div
                    className={`
                    fixed z-40 inset-y-0 left-0 w-64 bg-base-200 transform
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    transition-transform duration-300 ease-in-out
                    lg:static lg:translate-x-0
                `}
                >
                    <Aside />
                </div>

                {/* Overlay (mobile only) */}
                {open && (
                    <div
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black/40 z-30 lg:hidden"
                    ></div>
                )}

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Top bar (mobile only) */}
                    <div className="lg:hidden flex items-center gap-3 p-4 bg-white shadow">
                        <button
                            onClick={() => setOpen(!open)}
                            className="btn btn-ghost btn-sm"
                        >
                            <Menu />
                        </button>
                        <h2 className="text-lg font-semibold">Dashboard</h2>
                    </div>

                    {/* Page Content */}
                    <div className="p-4 lg:p-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
