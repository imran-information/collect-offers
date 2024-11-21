import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const { user, handleSignOut, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignOutUser = () => {
        handleSignOut()
    }
    const handleUpdateUser = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        console.log(name, photo);

        updateUserProfile(name, photo)
            .then(res => {
                navigate('/')
                toast.success("Profile Updated !", {
                    position: "top-center"
                });
            })
            .catch(error => {
                toast.warn("Please try again...!", {
                    position: "top-center"
                });
            })
    }
    return (
        <div className='bg-img w-10/12 mx-auto flex justify-center py-20'>
            <Helmet>
                <title>Coupon Collecting | Profile</title>
            </Helmet>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body text-center">
                    <h2 className=" text-xl font-semibold py-5 text-center">{user.email}</h2>
                    <img className='w-14 h-14 border border-accent p-1 rounded-full mx-auto ' src={user.photoURL} alt="" />
                    <h2 className=" text-xl font-semibold  text-center">Hi, {user?.displayName}!</h2>
                    <form onSubmit={handleUpdateUser}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <button className="btn btn-neutral w-full my-4">Update Profile</button>
                    </form>

                    <button onClick={handleSignOutUser} className="btn btn-outline">Sign Out</button>

                </div>
            </div>
        </div>
    );
};

export default Profile;