import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';


const LoginPage = () => {
    const { handleLogin, setUser, forget, googleSignIn } = useContext(AuthContext);
    const emailRef = useRef()
    const location = useLocation();
    const navigate = useNavigate()

    // show password 
    // handle login with google 

    const googleLogin = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                setUser(user)
                toast.success("Google Login")
                navigate("/")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [show, setShow] = useState(false)
    // console.log(location, navigate)

    const loginHandle = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        handleLogin(email, password)
            .then(result => {
                const user = result.user;
                toast.success("Login Success")
                navigate('/dashboard')
                setUser(user);
                if (!user.emailVerified) {
                    toast('please verify your email address')
                    return
                }
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                console.log(error)
                toast.error("please inter valid password")
            })
    }
    // forget password 
    const handleForgetPassword = (e) => {
        const email = emailRef.current.value;
        console.log(email)
        e.preventDefault()
        forget(email)
            .then(() => {
                toast('please check your email ')
            })
            .catch((error) => {
                toast.error(error)
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <title>Blood Donation – Login</title>
            <div className="card w-full max-w-md bg-purple-50 rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
                    Login Your Account
                </h2>
                <form onSubmit={loginHandle} className="space-y-4" >


                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Email</label>
                        <input
                            type="email" name='email'
                            placeholder="Your Email" ref={emailRef}
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col relative">
                        <label className="mb-1 font-semibold text-gray-700">Password</label>
                        <input
                            type={show ? "text" : "password"}
                            placeholder="Password" name="password"
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        />
                        <span onClick={() => setShow(!show)} className='absolute right-5 top-10'>
                            {show ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>

                    <div onClick={handleForgetPassword}><a href="" className='link link-hover'>Forget Password?</a> </div>



                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 font-semibold rounded-xl bg-purple-500 hover:bg-purple-600 text-white shadow-lg transition"
                    >
                        Login
                    </button>

                    {/* Links */}
                    <div className="flex justify-between items-center text-md">

                        <p className="  hover:text-purple-700 ">
                            Don't have an account? <Link to="/register" className='font-bold text-red-600'>Register</Link>
                        </p>
                    </div>
                </form>
                {/* Google */}
                {/* <button onClick={googleLogin} className="btn bg-white text-black w-full mt-10 hover:scale-105 border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button> */}
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginPage;