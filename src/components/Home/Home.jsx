import React, { useContext, useEffect } from 'react';

import TopBrands from '../TopBrands/TopBrands';
import Banner from '../banner/Banner';
import BrandOnSell from '../BrandOnSell/BrandOnSell';
import VoucherCodes from '../VoucherCodes/VoucherCodes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../AuthProvider/AuthProvider';



const Home = () => {
    const { user } = useContext(AuthContext)
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
            {
                user && <h1 className='text-7xl  text-center pb-5'>Welcome <span className='text-accent'>{user.displayName}</span>!</h1>
            }

            <div className='w-10/12 mx-auto ' data-aos="fade-up" data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                <Banner></Banner>
                <TopBrands></TopBrands>
            </div>
            <BrandOnSell></BrandOnSell>
            <VoucherCodes></VoucherCodes>
        </div>
    );
};

export default Home;