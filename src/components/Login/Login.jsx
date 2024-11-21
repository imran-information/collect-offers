import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { handleSignInUser, handleGoogleSignInUser } = useContext(AuthContext)
    const [toggle, setToggle] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleSignInUser(email, password)
            .then(res => {

                navigate(location?.state ? location.state : '/')
            }).catch(err => {
                setError({ ...error, login: err.code })

            })

    }
    const handleGoogleLogin = () => {
        handleGoogleSignInUser()
            .then(res => {

                navigate(location?.state ? location.state : '/')
            }).catch(error => {
                setError({ ...error, login: err.code })

            })
    }



    return (
        <div className="hero py-10">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-4xl font-bold pb-10">Welcome To Coupon Collecting</h1>

                </div>
                <div className="card bg-base-100  w-[500px]   shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold pt-5 text-center">Login Now!</h1>
                    <div onClick={handleGoogleLogin} className="form-control px-8 pt-10">
                        <button className="btn btn-outline"><FaGoogle className='font-bold text-2xl'></FaGoogle> Login with Google</button>
                    </div>
                    <form onSubmit={handleSubmit} className="card-body">

                        <p className='text-center pt-3'>or login with email:</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={toggle ? "text" : 'password'} name='password' placeholder="password" className="input input-bordered" required /> <p onClick={() => setToggle(!toggle)} className='absolute top-14 left-[400px] cursor-pointer' href="">{toggle ? <FaEyeSlash /> : <FaEye></FaEye>}</p>
                            {
                                error?.login && <label className="label text-sm text-red-500">
                                    {error?.login}
                                </label>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                        <p className='text-center font-semibold '> Don`t have an account?<NavLink to='/register' className='text-blue-600'> Sign Up for free</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;