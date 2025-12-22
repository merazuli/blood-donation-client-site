import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { Link, NavLink } from 'react-router';
import userIcon from '../../assets/user.png'

const Navbar = () => {
    const { user, setUser, logOutUser } = useContext(AuthContext);
    const [isChecked, setIsChecked] = useState(true);
    const handleThemeChange = () => {
        setIsChecked(!isChecked);

        const html = document.querySelector("html");

        if (isChecked) {
            html.setAttribute("data-theme", "dark");
        } else {
            html.setAttribute("data-theme", "light");
        }
    };



    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success("Successfully Logged Out!");
                setUser(null);
            })
            .catch(error => {
                toast.error(`Logout Failed: ${error.code}`);
            });
    };


    return (
        <div className="navbar bg-base-100 shadow-sm lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink className='font-semibold' to="/">Home</NavLink>
                        <NavLink className='font-semibold' to="/all-request">All Requests</NavLink>
                        <NavLink className='font-semibold' to="/search">Search</NavLink>
                        <NavLink className='font-semibold' to="/dashboard">Dashboard</NavLink>

                    </ul>
                </div>
                <a className="lg:text-4xl text-3xl font-bold 
bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500 
bg-clip-text text-transparent tracking-wide">
                    BloodLink
                </a>



            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-10  px-1">
                    <NavLink className='font-semibold' to="/">Home</NavLink>
                    <NavLink className='font-semibold' to="/all-requests">All Requests</NavLink>
                    <NavLink className='font-semibold' to="/search">Search</NavLink>
                    <NavLink className='font-semibold' to="/dashboard">Dashboard</NavLink>



                </ul>
            </div>
            <div className="navbar-end gap-5">
                {/* <Link to={'/dashboard'} className='btn sm:block'>Dashboard</Link> */}
                <label className="flex cursor-pointer gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input onClick={handleThemeChange} type="checkbox" value="synthwave" className="toggle theme-controller" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
                <img
                    className="w-10 h-10 object-cover rounded-full"
                    src={user?.photoURL ? user.photoURL : userIcon}
                    alt={user?.displayName ? user.displayName : "Ashik"}
                    title={user?.displayName ? user.displayName : "Guest User"}
                />


                {user ? <button onClick={handleLogout} className='btn bg-indigo-500 hover:bg-indigo-700 text-white'>Log Out</button> : <Link to="/login" className='btn bg-green-500 hover:bg-green-700'>Login</Link>}


            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;