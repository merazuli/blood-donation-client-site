import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { sendEmailVerification } from 'firebase/auth';
import { AuthContext } from '../../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const RegisterPage = () => {
    const { createUser, setUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const [show, setShow] = useState(false)

    const navigate = useNavigate()
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


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length <= 6) {
            toast.error("please enter 6 digit password")
        }
        if (!/[A-Z]/.test(password)) {
            alert("Password must contain at least one uppercase letter.");
            return;
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;

                return updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });


                        return sendEmailVerification(user);
                    })
                    .then(() => {
                        toast.success("Please verify your email address");
                        toast.success("Registration successful!");
                        navigate("/auth/login")
                    });

            })
            .catch(error => {
                toast.error(`Error: ${error.code}`);
            });

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <title>PawMart – Register</title>
            <div className="card w-full max-w-md bg-purple-50 rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
                    Register Your Account
                </h2>
                <form className="space-y-2" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Name</label>
                        <input name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Photo URL</label>
                        <input
                            type="text" name="photo"
                            placeholder="Photo URL"
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Email</label>
                        <input
                            type="email" name="email"
                            placeholder="Your Email"
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition" required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col relative">
                        <label className="mb-1 font-semibold text-gray-700">Password</label>
                        <input
                            type={show ? "text" : "password"}
                            placeholder="Your Password" name="password"
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        />
                        <span onClick={() => setShow(!show)} className='absolute right-5 top-10'>
                            {show ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>

                    {/* Links */}
                    <div className="flex justify-between items-center text-md">

                        <p className="  hover:text-purple-700 ">
                            Already have an account? <Link to="/login" className='font-bold text-red-600'>Login</Link>
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 font-semibold rounded-xl bg-purple-500 hover:bg-purple-600 text-white shadow-lg transition hover:scale-105 "
                    >
                        Register
                    </button>
                </form>
                {/* Google */}
                <button onClick={googleLogin} className="btn bg-white text-black w-full mt-10 hover:scale-105 border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RegisterPage;
