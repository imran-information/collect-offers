import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SellCard from '../SellCards/SellCard';

const BrandOnSell = () => {
    const { couponsData } = useLoaderData()
    return (
        <div className='my-10'>
            <h2 className='text-5xl font-semibold text-center'>Today`s Top Coupons, Deals & Offers</h2>
            <p className='text-base font-semibold text-gray-500 text-center mt-4'>Get your flight, hotels, smartphones, laptops, clothing, footwear, electronics, and everything, availed online. <br /> Save biggest with promo codes, and discounts offers.   </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto gap-4 my-20">
                {
                    couponsData.map(coupon => <SellCard key={coupon._id} coupon={coupon}></SellCard>)
                }
            </div>
        </div>
    );
};

export default BrandOnSell;