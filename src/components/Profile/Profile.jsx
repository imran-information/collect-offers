import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {
    const { user, handleSignOut } = useContext(AuthContext)
    console.log(user);

    const handleSignOutUser = () => {
        handleSignOut()
    }
    return (
        <div className='bg-img w-10/12 mx-auto flex justify-center py-20'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body text-center">
                    <h2 className=" text-xl font-semibold py-5 text-center">{user.email}</h2>
                    <img className='rounded-full w-16 mx-auto ' src={user.photoURL} alt="" />
                    <h2 className=" text-xl font-semibold  text-center">Hi, {user?.displayName}!</h2>
                    <form >
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