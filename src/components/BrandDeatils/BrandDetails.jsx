import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BrandDetails = () => {
    const coupon = useLoaderData()
    const { brand_logo, brand_name, rating, description, isSaleOn, _id } = coupon;
    return (
        <div>
            <h1 className='text-4xl text-center'>{brand_name}</h1>
        </div>
    );
};

export default BrandDetails; 