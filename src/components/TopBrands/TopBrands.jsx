import React from 'react';
import Marquee from 'react-fast-marquee';
import { NavLink, useLoaderData } from 'react-router-dom';

const TopBrands = () => {
    const {couponsData} = useLoaderData()



    return (
        <div className='my-10'>

            <Marquee pauseOnHover={true} speed={100}>
                <div className='flex items-center gap-56'>
                    {
                        couponsData.map(coupon => <NavLink to='/brandDetails' key={coupon._id} className='w-36 '>
                            <img className='w-full h-full' src={coupon.brand_logo} alt="" />
                        </NavLink>)
                    }

                </div>
            </Marquee>
        </div>
    );
};

export default TopBrands;