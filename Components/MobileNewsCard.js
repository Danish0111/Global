import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MobileNewsCard = () => {
    const News = [
        { id: 1, img: "https://globalinst.in/wp-content/uploads/2024/10/SDP-BANNER-GLOBAL.png", alt: 'news 1' },
        { id: 2, img: "https://globalinst.in/wp-content/uploads/2024/08/Website-Banner-Global-Final.jpg", alt: 'news 2' },
        { id: 3, img: "https://globalinst.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-05-at-15.00.19.jpeg", alt: 'news 3' },
        { id: 4, img: "https://globalinst.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-13-at-15.39.02.jpeg", alt: 'news 4' },
        // More news items can be added here...
    ];

    return (
        <div className="news-carousel-container">
            <Carousel
                className="w-full sm:w-[90%] mx-auto"
                autoPlay={false}
                infiniteLoop={false}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
            >
                {News.map((news) => (
                    <div key={news.id} className="news-card flex flex-col md:hidden text-left bg-white rounded-xl shadow-lg p-2 sm:p-3 transition-transform transform duration-300">
                        <div className="img flex justify-center items-center mb-4 sm:mb-3">
                            <img className="rounded-lg w-full sm:h-36" src={news.img} alt={news.alt} />
                        </div>
                        <div className="date text-sm sm:text-xs font-semibold text-gray-500">29 Oct 2024</div>
                        <div className="title text-lg sm:text-base font-semibold my-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                            Suspension of M.P.Ed. First Year 2024-25 Admission Merit List
                        </div>
                        <div className="description text-sm sm:text-xs font-light text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates tempora, aspernatur nulla tenetur, voluptas distinctio architecto, harum eveniet qui magni impedit sequi beatae praesentium!
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MobileNewsCard;
