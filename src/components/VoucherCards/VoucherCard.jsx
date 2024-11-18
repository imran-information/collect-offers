import React from 'react';
import { NavLink } from 'react-router-dom';

const VoucherCard = ({ voucher }) => {
    const { brand_logo, brand_name, coupons, category, _id } = voucher

    return (
        <NavLink to={`/voucherDetails/${_id}`} className="card card-compact bg-base-100 w-96 rounded border">
            <figure>
                <img className='w-full h-60'
                    src={brand_logo}
                    alt={brand_name} />
            </figure>
            <div className="card-body">
                <p className='text-base font-semibold text-gray-500'>{category}</p>
                {
                    coupons.map(coupo => <h2 key={coupo.description} className="text-xl font-semibold">{coupo.description}</h2>)
                }
                <NavLink to={`/voucherDetails/${_id}`} className="text-xl font-bold text-green-500 hover:underline my-3">Show Voucher Codes </NavLink>
            </div >
        </NavLink >
    );
};

export default VoucherCard;