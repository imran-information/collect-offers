import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import BrandDetails from "../components/BrandDeatils/BrandDetails";
import VoucherDetails from "../components/VoucherDetails/VoucherDetails";
import Brands from "../components/Brands/Brands";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import CouponCode from "../components/CouponCode/CouponCode";
import Profile from "../components/Profile/Profile";
import About from "../components/About/About";

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
                path: '/brandDetails/:id',
                element: <PrivateRoute>
                    <BrandDetails></BrandDetails>
                </PrivateRoute>,
                loader: async ({ params }) => {
                    const couponsRes = await fetch('/coupons.json')
                    const couponsData = await couponsRes.json()
                    const singleCoupon = couponsData.find(coupon => coupon._id == params.id)
                    return singleCoupon
                }
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
            },
            {
                path: '/coupon/:id',
                element: <PrivateRoute>
                    <CouponCode></CouponCode>
                </PrivateRoute>,
                loader: async ({ params }) => {
                    const couponRes = await fetch('/coupons.json')
                    const couponData = await couponRes.json()
                    const singleCoupon = couponData.find(couponData => couponData._id == params.id)
                    return singleCoupon
                }
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default router