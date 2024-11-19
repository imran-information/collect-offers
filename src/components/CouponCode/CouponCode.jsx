import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

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
        <div className='w-10/12 mx-auto py-5 text-center'>
            <div className="flex flex-col justify-center items-center">
                <h3 className='text-3xl font-semibold pb-5'>{brand_name}</h3>
                <img className='w-96 rounded border ' src={brand_logo} alt="" />
                <div>
                    <ReactStars
                        count={rating}

                        size={28}
                        activeColor="#ffd700"
                    />
                </div>
            </div>
            {/* {
                "coupon_code": "TECH10",
                "description": "10% off on all electronics.",
                "expiry_date": "2024-12-31",
                "condition": "Minimum purchase of $50 required.",
                "coupon_type": "Percentage"
            },
            {
                "coupon_code": "FREEDEL",
                "description": "Free delivery on orders above $20.",
                "expiry_date": "2024-06-30",
                "condition": "Valid for online orders only.",
                "coupon_type": "Free Delivery"
            } */}
            <h3 className='text-2xl font-semibold pb-5'>All Coupons</h3>
            <div className="md:flex justify-around  mx-auto py-10">
                {
                    coupons.map(coup => <div className="card bg-neutral text-neutral-content w-96">
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