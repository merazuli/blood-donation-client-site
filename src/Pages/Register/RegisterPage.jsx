import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { sendEmailVerification } from 'firebase/auth';
import { AuthContext } from '../../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';



const RegisterPage = () => {
    const { createUser, setUser, updateUserProfile, googleSignIn, districts, upazila } = useContext(AuthContext);
    const [show, setShow] = useState(false)

    const navigate = useNavigate()
    // handle login with google 

    // console.log(upazila)

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


    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const blood = e.target.bloodGroup.value;
        const district = e.target.recipientDistrict.value;
        const upazila = e.target.recipientUpazila.value;
        const file = photo.files[0]
        // console.log(upazila)


        if (password.length <= 6) {
            toast.error("please enter 6 digit password")
        }
        if (!/[A-Z]/.test(password)) {
            alert("Password must contain at least one uppercase letter.");
            return;
        }

        const res = await axios.post(`https://api.imgbb.com/1/upload?key=425e473eb9bb65f9ac6dd14c06658c4f`, { image: file }, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        const mainPhotoUrl = res.data.data.display_url;

        const formData = {
            name,
            password,
            email,
            mainPhotoUrl,
            blood,
            district,
            upazila,
        }

        if (res.data.success == true) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    // console.log(result.user)

                    return updateUserProfile({ displayName: name, photoURL: mainPhotoUrl })
                        .then(() => {
                            setUser({ ...user, displayName: name, photoURL: mainPhotoUrl });
                            axios.post('http://localhost:5000/users', formData)
                                .then(res => {
                                    console.log(res.data)
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                            return sendEmailVerification(user);
                        })
                        .then(() => {
                            toast.success("Please verify your email address");
                            toast.success("Registration successful!");

                            navigate("/login")
                        });

                })
                .catch(error => {
                    toast.error(`Error: ${error.code}`);
                });
        }




    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <title>Blood Donation – Register</title>
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
                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Email</label>
                        <input
                            type="email" name="email"
                            placeholder="Your Email"
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition" required
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Photo URL</label>
                        <input
                            type="file" name="photo"
                            placeholder="Photo URL"
                            className="input  w-full  border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        />
                    </div>


                    {/* Blood Group */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Your Blood Group</span>
                        </label>
                        <select
                            defaultValue="Select Your Blood Group"
                            name="bloodGroup"
                            className="select w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        >
                            <option disabled>Select Your Blood Group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>
                    </div>
                    {/*  District */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Your District</span>
                        </label>
                        <select
                            name="recipientDistrict"
                            defaultValue=""
                            className="select w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                            required
                        >
                            <option disabled value="">Select Your District</option>
                            {districts?.map((district) => (
                                <option key={district?.id
                                } value={district?.name}>{district?.name}</option>
                            ))}
                        </select>
                    </div>
                    {/* Upazila */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Your Upazila</span>
                        </label>
                        <select
                            name="recipientUpazila"
                            defaultValue=""
                            className="select w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-xl transition"
                            required
                        >
                            <option disabled value="">Select Your Upazila</option>

                            {
                                upazila.map((upazil) => (
                                    <option key={upazil?.id} value={upazil?.name}>{upazil?.name}</option>

                                ))
                            }
                        </select>
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
                {/* <button onClick={googleLogin} className="btn bg-white text-black w-full mt-10 hover:scale-105 border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button> */}
            </div>
            <ToastContainer />
        </div>
    );
};

export default RegisterPage;
