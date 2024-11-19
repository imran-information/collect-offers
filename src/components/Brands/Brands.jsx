import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandsCard from '../BrandsCard/BrandsCard';

const Brands = () => {
    const couponsData = useLoaderData()
    console.log(couponsData);

    return (
        <div className='w-10/12 mx-auto '>
            <h1 className='text-4xl text-gray-700 text-center py-10 font-bold '> All brands information</h1>
            <div className='grid grid-cols-1 gap-5'>

                {
                    couponsData.map(coupon => <BrandsCard key={coupon._id} coupon={coupon}></BrandsCard>)
                }
            </div>
        </div>
    );
};

export default Brands;