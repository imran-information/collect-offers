import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icon.webp'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const NavBar = () => {
    const { user, handleSignOut } = useContext(AuthContext)


    const handleSignOutUser = () => {
        handleSignOut()
            .then(res => {
                toast.info("Log Out successfully !", {
                    position: "top-center"
                });

            }).catch(error => {

                toast.warn("Please try again...!", {
                    position: "top-center"
                });
            })
    }
    const links = <>
        <li className='text-base font-semibold'><NavLink to='/'>Home</NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/brands'>Brands</NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/profile'>Profile</NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/about'>About Dev</NavLink></li>

    </>
    return (
        <div className="navbar border-b-2 border-accent md:px-20 fixed backdrop-blur-lg top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div>
                    <NavLink to="/" className=" text-2xl font-semibold flex items-center gap-3">
                        <img className='w-14' src={logo} alt="" /> <span className='text-accent text-2xl'>Coupon Collecting</span></NavLink>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <><NavLink to='/profile'><img className='w-14 h-14 border border-accent p-1 rounded-full mr-5' src={user.photoURL} alt="" /></NavLink> <NavLink onClick={handleSignOutUser} to="/login" className="btn btn-neutral text-base font-semibold">Log Out</NavLink> </> : <NavLink to="/login" className="btn btn-neutral text-base font-semibold">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default NavBar;