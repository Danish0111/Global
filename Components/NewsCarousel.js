import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const NewsCarousel = () => {
    const News = [
        { id: 1, img: "https://globalinst.in/wp-content/uploads/2024/10/SDP-BANNER-GLOBAL.png", alt: 'news 1' },
        { id: 2, img: "https://globalinst.in/wp-content/uploads/2024/08/Website-Banner-Global-Final.jpg", alt: 'news 2' },
        { id: 3, img: "https://globalinst.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-05-at-15.00.19.jpeg", alt: 'news 3' },
        { id: 4, img: "https://globalinst.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-13-at-15.39.02.jpeg", alt: 'news 4' },
        // More news items can be added here...
    ];

    const groupedNews = [];
    for (let i = 0; i < News.length; i += 2) {
        groupedNews.push(News.slice(i, i + 2));
    }

    return (
        <div className="">
            <Carousel
                className="news-carousel-container w-[100%]"
                autoPlay={false} // Manual slide
                infiniteLoop={false}
                showThumbs={false}
                showArrows={false} // No arrows
                showStatus={false}
                showIndicators={false} // No indicators
            >
                {groupedNews.map((newsPair, index) => (
                    <div key={index} className="hidden md:flex justify-center gap-4 lg:hidden">
                        {newsPair.map((news) => (
                            <div key={news.id} className="news-card flex flex-col bg-white rounded-xl shadow-lg p-4 transition-transform transform duration-300">
                                <div className="img flex justify-center items-center mb-4">
                                    <img className="rounded-lg w-full" src={news.img} alt={news.alt} />
                                </div>
                                <div className="date text-sm font-semibold text-gray-500">29 Oct 2024</div>
                                <div className="title text-lg font-semibold my-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                                    Suspension of M.P.Ed. First Year 2024-25 Admission Merit List
                                </div>
                                <div className="description text-sm font-light text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates tempora, aspernatur nulla tenetur, voluptas distinctio architecto, harum eveniet qui magni impedit sequi beatae praesentium!
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default NewsCarousel;
