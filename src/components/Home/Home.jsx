import React, { useContext, useEffect } from 'react';

import TopBrands from '../TopBrands/TopBrands';
import Banner from '../banner/Banner';
import BrandOnSell from '../BrandOnSell/BrandOnSell';
import VoucherCodes from '../VoucherCodes/VoucherCodes';
{/* <link rel="stylesheet" href="bower_components/aos/dist/aos.css" /> */}
import { AuthContext } from '../AuthProvider/AuthProvider';

{/* <script src="bower_components/aos/dist/aos.js"></script> */}

const Home = () => {
    const { user } = useContext(AuthContext)
    // useEffect(() => {
    //     AOS.init();
    // }, []);
    return (
        <div data-aos="fade-up">
            {
                user && <h1 className='text-7xl  text-center pb-5'>Welcome <span className='text-accent'>{user.displayName}</span>!</h1>
            }

            <div className='w-10/12 mx-auto '>
                <Banner></Banner>
                <TopBrands></TopBrands>
            </div>
            <BrandOnSell></BrandOnSell>
            <VoucherCodes></VoucherCodes>
        </div>
    );
};

export default Home;