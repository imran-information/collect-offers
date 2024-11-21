import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { Helmet } from 'react-helmet-async';

const CouponCode = () => {
    const singleCoupon = useLoaderData()
    const { brand_name, rating, coupons, brand_logo, shop_link } = singleCoupon


    const handleRedirect = () => {

        window.open(shop_link, "_blank");
    };
    const handleCopyText = () => {
        var copyText = document.getElementById("myInput");
        copyText.select();
        handleRedirect()
    }
    return (
        <div className='w-10/12 mx-auto my-5 text-center bg-green-50'>
             <Helmet>
                <title>Coupon Collecting | Coupon Code {brand_name}</title>
            </Helmet>
            <div className="flex flex-col justify-center items-center">
                <h3 className='text-3xl font-semibold py-5'>{brand_name}</h3>
                <img className='w-96 rounded border ' src={brand_logo} alt="" />
                <div>
                    <ReactStars
                        count={rating}

                        size={28}
                        activeColor="#ffd700"
                    />
                </div>
            </div>
           
            <h3 className='text-2xl font-semibold pb-5'>All Coupons</h3>
            <div className="md:flex justify-around gap-2 mx-auto py-10">
                {
                    coupons.map(coup => <div className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{coup.description}</h2>
                            <p>{coup.condition}</p>
                            <p>{coup.expiry_date}</p>
                            <p>{coup.coupon_type}</p>
                            <div className="card-actions justify-center py-5">
                                <input
                                    id='myInput'
                                    value={coup.coupon_code}
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered text-black font-bold input-success w-full max-w-lg" />
                                <button onClick={handleCopyText} className="btn btn-success text-white font-bold text-xl">Copy Code</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CouponCode;