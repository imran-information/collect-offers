import React from 'react';
import { NavLink } from 'react-router-dom';

const SellCard = ({ coupon }) => {

    const { brand_logo, brand_name, coupons, category, _id } = coupon

    return (
        <NavLink to={`/coupon/${_id}`} className="card card-compact bg-base-100  rounded border">
            <figure>
                <img className='w-full h-60'
                    src={brand_logo}
                    alt={brand_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{brand_name}</h2>
                <p className='text-base font-semibold text-gray-500'>{category}</p>
                {
                    coupons.map(coupo => <h2 key={coupo.description} className="text-xl font-semibold">{coupo.description}</h2>)
                }
            </div>
        </NavLink>
    );
};

export default SellCard;