import React from 'react';



const Banner = () => {

    return (
        <div className="carousel h-[800px] w-full border  rounded-xl py-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://img.freepik.com/free-vector/creative-sale-banner-your-business_1017-15189.jpg?uid=R154519964&ga=GA1.1.1636464796.1729528393&semt=ais_hybrid"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://img.freepik.com/free-vector/sales-banner-origami-style_23-2148394227.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://img.freepik.com/free-vector/super-sale-creative-banner-design_1262-8024.jpg?ga=GA1.1.1636464796.1729528393&semt=ais_hybrid"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://img.freepik.com/free-vector/black-friday-super-sale-design-template_1150-52788.jpg?uid=R154519964&ga=GA1.1.1636464796.1729528393&semt=ais_hybrid"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;