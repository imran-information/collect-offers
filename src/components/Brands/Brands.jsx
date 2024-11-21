import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandsCard from '../BrandsCard/BrandsCard';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Brands = () => {
    const couponsData = useLoaderData()
    const { user } = useContext(AuthContext)

    return (
        <div className='w-10/12 mx-auto py-10'>
            <Helmet>
                <title>Coupon Collecting | Brands</title>
            </Helmet>
            <h1 className='text-4xl text-gray-700 text-center  font-bold '> All brands </h1>
            <div className='grid grid-cols-1 gap-5'>

                {
                    couponsData.map(coupon => <BrandsCard key={coupon._id} coupon={coupon}></BrandsCard>)
                }
            </div>
        </div>
    );
};

export default Brands;