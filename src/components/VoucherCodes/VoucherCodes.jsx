import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VoucherCard from '../VoucherCards/VoucherCard';

const VoucherCodes = () => {
    const { voucherData } = useLoaderData()


    return (
        <div className='my-10' data-aos="fade-up">
            <h2 className='text-5xl font-semibold text-center'>Best Voucher Codes</h2>
            <p className='text-base font-semibold text-gray-500 text-center mt-4'>Find the greatest offers and insight about shopping, with a righteous match for the <br /> spectacular purchases you`re about to make.  </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto gap-4 my-20">
                {
                    voucherData.map(voucher => <VoucherCard key={voucher._id} voucher={voucher}></VoucherCard>)
                }
            </div>
        </div>
    );
};

export default VoucherCodes;