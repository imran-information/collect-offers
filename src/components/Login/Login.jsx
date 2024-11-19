import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;


    }
    return (
        <div className="hero py-10">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-4xl font-bold pb-10">Welcome To Coupon Collecting</h1>

                </div>
                <div className="card bg-base-100  w-[500px]   shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold pt-5 text-center">Login Now!</h1>

                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control ">
                            <button className="btn ">Login with Google</button>
                        </div>
                        <p className='text-center pt-3'>or login with email:</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center font-semibold '> Don`t have an account?<NavLink to='/register' className='text-blue-600'> Sign Up for free</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;