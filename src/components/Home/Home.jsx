import React from 'react';

import TopBrands from '../TopBrands/TopBrands';
import Banner from '../banner/Banner';
import BrandOnSell from '../BrandOnSell/BrandOnSell';
import VoucherCodes from '../VoucherCodes/VoucherCodes';

const Home = () => {

    return (
        <div>
            {/* <Banner></Banner> */}
            <TopBrands></TopBrands>
            <BrandOnSell></BrandOnSell>
            <VoucherCodes></VoucherCodes>
        </div>
    );
};

export default Home;