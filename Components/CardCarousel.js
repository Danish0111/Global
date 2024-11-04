import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';

const News = [
    { id: 1, img: "https://globalinst.in/wp-content/uploads/2024/10/SDP-BANNER-GLOBAL.png", alt: 'news 1' },
    { id: 2, img: "https://globalinst.in/wp-content/uploads/2024/08/Website-Banner-Global-Final.jpg", alt: 'news 2' },
    { id: 2, img: "https://globalinst.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-05-at-15.00.19.jpeg", alt: 'news 3' },
    { id: 2, img: "https://globalinst.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-13-at-15.39.02.jpeg", alt: 'news 4' },
    // { id: 2, img: 'APJ.png', alt: 'news 5' },
    // ... more newss
];
class MyCarousel extends Component {
    static get CONTAINER_STYLE() {
        return {
            position: "relative",
            top: "100px",
            right: "50px",
            height: "100%",
            width: "800px",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
        };
    }

    static get CARD_STYLE() {
        return {
            height: "200px",
            width: "100%",
            // background: "#52C0F
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "10px",
        };
    }


    render() {
        return (
            <div style={MyCarousel.CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={true} autoplay_speed={7000}>
                    {News.map((news, index) => (
                        <div style={MyCarousel.CARD_STYLE}>

                            <div key={news.id} className="news-card flex flex-col bg-white rounded-xl shadow-lg p-4 transition-transform transform duration-300">
                                <div className="img flex justify-center items-center mb-4">
                                    <img className="rounded-lg w-[100%]" src={news.img} alt="" />
                                </div>
                                <div className="date text-sm font-semibold text-gray-500">29 Oct 2024</div>
                                <div className="title text-lg font-semibold my-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">Suspension of M.P.Ed. First Year 2024-25 Admission Merit List</div>
                                <div className="description text-sm font-light text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates tempora, aspernatur nulla tenetur, voluptas distinctio architecto, harum eveniet qui magni impedit sequi beatae praesentium!</div>
                            </div>
                        </div>
                    ))}

                </ReactCardCarousel>
            </div>
        );
    }
}

export default MyCarousel;