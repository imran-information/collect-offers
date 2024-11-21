import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {
    return (
        <div className='pt-24'>
            <ToastContainer />
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-300px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;