import React, { useContext } from 'react';
import ReactStars from "react-rating-stars-component";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';



const BrandsCard = ({ coupon }) => {
    const { brand_logo, brand_name, rating, description, isSaleOn, _id } = coupon;
    const { user } = useContext(AuthContext)

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">

            <div className="card-body md:flex-row justify-between items-center">
                <div className="border p-5 rounded">
                    <figure>
                        <img className='border w-72 '
                            src={brand_logo}
                            alt="Album" />
                    </figure>
                    <h2 className="card-title pt-2">{brand_name}</h2>
                    <div><ReactStars
                        count={rating}

                        size={28}
                        activeColor="#ffd700"
                    />,</div>
                </div>
                <div className="">
                    <h2 className="card-title pt-2 text-2xl justify-center">{brand_name}</h2>
                    <p className='py-2 text-lg font-semibold text-gray-500'>{description}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <p className='text-lg font-semibold text-green-600'> {isSaleOn ? 'Sale Is On' : ''} </p>
                    {
                        isSaleOn && <NavLink to={`/brandDetails/${_id}`} className="btn btn-neutral">View Coupons</NavLink>
                    }
                </div>

            </div>
        </div>
    );
};

export default BrandsCard;