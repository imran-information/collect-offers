import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VoucherDetails = () => {
    const singleVoucher = useLoaderData()
    const { brand_logo, brand_name, coupons, category, _id, coupon_code } = singleVoucher;

    const handleCopyText = () => {
        var copyText = document.getElementById("myInput");
        copyText.select();

    }
    return (
        <div className='w-10/12 mx-auto  flex justify-center py-20'>
            <div className="card bg-base-100 image-full w-[80%] shadow-xl">
                <figure>
                    <img className='w-[50%]'
                        src={brand_logo}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto text-2xl">{brand_name}</h2>
                    {
                        coupons.map(coupo => <h2 key={coupo.description} className="text-xl font-semibold mx-auto">{coupo.description}</h2>)
                    }
                    <div className="card-actions justify-center py-5">
                        <input
                            id='myInput'
                            value={coupon_code}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered text-black font-bold input-success w-full max-w-lg" />
                        <button onClick={handleCopyText} className="btn btn-success text-white font-bold text-xl">Copy Code</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoucherDetails;