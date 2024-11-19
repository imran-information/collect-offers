import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import BrandDetails from "../components/BrandDeatils/BrandDetails";
import VoucherDetails from "../components/VoucherDetails/VoucherDetails";
import Brands from "../components/Brands/Brands";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const couponsRes = await fetch('/coupons.json')
                    const data = await couponsRes.json()
                    const couponsData = await data.filter(coupon => coupon.isSaleOn == true)

                    const voucherRes = await fetch('/voucher.json')
                    const voucherData = await voucherRes.json()

                    return { couponsData, voucherData }
                }

            },
            {
                path: '/brandDetails',
                element: <BrandDetails></BrandDetails>
            },
            {
                path: '/voucherDetails/:id',
                element: <VoucherDetails></VoucherDetails>,
                loader: async ({ params }) => {
                    const voucherRes = await fetch('/voucher.json')
                    const voucherData = await voucherRes.json()
                    const singleVoucher = voucherData.find(voucher => voucher._id == params.id)
                    return singleVoucher
                }

            },
            {
                path: '/brands',
                element: <Brands></Brands>,
                loader: () => fetch('/coupons.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router