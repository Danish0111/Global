"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import ReactCardCarousel from "react-card-carousel";
import CardCarousel from './CardCarousel';
import NewsCarousel from './NewsCarousel';

const News = [
  { id: 1, img: "https://globalinst.in/wp-content/uploads/2024/10/SDP-BANNER-GLOBAL.png", alt: 'news 1' },
  { id: 2, img: 'AICTE.png', alt: 'news 2' },
  { id: 2, img: 'NCTE.png', alt: 'news 3' },
  { id: 2, img: 'CCSU.png', alt: 'news 4' },
  { id: 2, img: 'APJ.png', alt: 'news 5' },
  // ... more newss
];


const LatestNews = () => {
  return (
    <>
      <div className="news-and-events flex flex-col lg:flex-row justify-center lg:justify-around items-start bg-slate-100 p-6">
        {/* Latest News Section */}
        <div className="News w-[50%]">
          <div className="svg w-8 relative top-6">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="2.98 4.46 31.51 31.05" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" data-type="ugc" role="presentation" aria-hidden="true" aria-label="">
              <g>
                <path d="M19.28 4.48c.3.47 2.74 9.77-1.73 12.73-4.48 2.96-5.79-.17-14.57 2.47 0 0 11.51-2.92 13.58 2.65 1.67 4.1-.3 4.55 1.33 13.18-.13-3.76-1.75-9.87 2.75-12.59 2.11-1.47 6.79.07 13.85-2.15-2.74.28-10 3.01-13.03-2.21-1.79-2.83-.06-10.55-2.17-14.1Z" fill="#f6605b" stroke="#000000" strokeMiterlimit="10" strokeWidth=".5"></path>
              </g>
            </svg>
          </div>
          <h1 className='text-2xl font-semibold text-blue-700 my-4'>Latest News</h1>
          {/* <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            
          >
            {News.map((news, index) => (
              <SwiperSlide key={news.id}>
                <div className="news-card flex flex-col bg-white rounded-xl shadow-lg p-4 transition-transform transform hover:scale-105 duration-300">
                  <div className="img flex justify-center items-center mb-4">
                    <img className="rounded-lg w-[100%]" src={news.img} alt="" />
                  </div>
                  <div className="date text-sm font-semibold text-gray-500">29 Oct 2024</div>
                  <div className="title text-lg font-semibold my-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">Suspension of M.P.Ed. First Year 2024-25 Admission Merit List</div>
                  <div className="description text-sm font-light text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates tempora, aspernatur nulla tenetur, voluptas distinctio architecto, harum eveniet qui magni impedit sequi beatae praesentium!</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          <CardCarousel />
          <NewsCarousel className="sm:block lg:hidden"/>
          <div className="svg relative top-96 z-10 w-14">
            {/* <svg preserveAspectRatio="xMidYMid meet" data-bbox="21.001 21.001 112.001 112" viewBox="21.001 21.001 112.001 112" height="" width="" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
              <g>
                <path fill="#ff5764" d="M48.595 124.666c26.328 15.692 60.388 7.072 76.075-19.253 15.688-26.325 7.062-60.387-19.266-76.079-26.328-15.692-60.388-7.072-76.075 19.253-15.687 26.325-7.062 60.386 19.266 76.079Z" data-color="1"></path>
                <path fill="#d8503f" d="M105.402 29.734c-4.378-2.587-8.984-4.453-13.673-5.734.767.361 1.52.761 2.231 1.199 6.61 4.063 12.521 9.535 16.368 16.31 1.825 3.205 3.333 6.719 4.167 10.305 3.762 22.703-7.874 32.072-7.874 32.072-5.221 5.428-25.272 9.612-27.522 9.957-16.451 2.519-25.281 15.452-31.6 29.657.38.233.728.504 1.118.734 26.319 15.555 60.372 7.01 76.055-19.086 15.682-26.094 7.058-59.863-19.261-75.418l-.011.003Z" data-color="2"></path>
                <path fill="#000000" d="m105.675 28.903-.182-.109-.011.003c-.28-.165-.576-.308-.859-.468a56.716 56.716 0 0 0-1.979-1.078 48.666 48.666 0 0 0-.758-.379c-11.971-5.964-25.525-7.457-38.627-4.146-14.509 3.666-26.718 12.761-34.378 25.61-15.806 26.514-7.084 60.942 19.444 76.748 8.788 5.235 18.61 7.917 28.58 7.917 4.604 0 9.242-.572 13.822-1.73 7.255-1.833 13.936-5.024 19.76-9.363 5.829-4.339 10.801-9.828 14.634-16.257 15.807-26.514 7.084-60.942-19.445-76.746ZM90.494 130.295c-14.235 3.596-29.027 1.439-41.643-6.078-.203-.121-.393-.253-.583-.384l-.163-.112c5.473-12.304 13.965-26.594 31.065-29.235 2.646-.41 22.54-4.657 27.774-10.149.123-.099 3.028-2.495 5.488-7.763 2.257-4.83 4.534-13.098 2.563-25.083-.791-3.424-2.211-6.966-4.222-10.526-3.335-5.921-8.475-11.281-14.93-15.589a54.606 54.606 0 0 1 6.947 3.062c.794.423 1.582.866 2.36 1.33 26.055 15.524 34.623 49.34 19.097 75.383-3.76 6.307-8.637 11.694-14.353 15.954-5.718 4.258-12.276 7.389-19.398 9.189Zm-60.756-81.45c7.524-12.621 19.515-21.554 33.766-25.154 9.362-2.366 18.959-2.227 28.023.272l-.014.038c.789.374 1.523.771 2.184 1.182 7.075 4.384 12.678 10.01 16.204 16.272 1.964 3.477 3.35 6.929 4.113 10.229 3.667 22.312-7.588 31.787-7.748 31.923-5.012 5.254-24.769 9.509-27.25 9.894-17.531 2.706-26.203 17.203-31.78 29.717-24.789-15.938-32.699-48.877-17.498-74.373Z" data-color="3"></path>
              </g>
            </svg> */}
          </div>
        </div>

        {/* Events Section */}
        <div className="Event-container flex flex-col justify-center w-[30%] h-[600px]">
          <h1 className='text-2xl font-semibold text-blue-700 my-4'>Events</h1>
          <div className="events gap-2 bg-white rounded-xl shadow-lg px-2 h-[70%] overflow-y-scroll border border-gray-300">
            <div className="event-card flex flex-col py-2 px-2 my-2 rounded-xl hover:bg-blue-50 transition-colors duration-300 hover:cursor-pointer">
              <div className="date text-sm font-semibold text-blue-500">29 Oct 2024</div>
              <div className="title text-sm font-semibold my-2 transition-colors duration-300">11th International and 13th Indian Psychological Science Congress (Conference) at: Psychology Department, C.C.S. University Meerut during 29th-30th November and 1st December, 2024. Abstract invited by 30th October, 2024.</div>
            </div>
            <div className="divider h-[1px] bg-gray-300 w-full"></div>
            <div className="event-card flex flex-col py-2 px-2 my-2 rounded-xl hover:bg-blue-50 transition-colors duration-300 hover:cursor-pointer">
              <div className="date text-sm font-semibold text-blue-500">29 Oct 2024</div>
              <div className="title text-sm font-semibold my-2 transition-colors duration-300">Anti Ragging Awareness Mahautsav 12-18 August, 2024</div>
            </div>
            <div className="divider h-[1px] bg-gray-300 w-full"></div>
            <div className="event-card flex flex-col py-2 px-2 my-2 rounded-xl hover:bg-blue-50 transition-colors duration-300 hover:cursor-pointer">
              <div className="date text-sm font-semibold text-blue-500">29 Oct 2024</div>
              <div className="title text-sm font-semibold my-2 transition-colors duration-300">Anti Ragging Awareness Mahautsav 12-18 August, 2024</div>
            </div>
            <div className="divider h-[1px] bg-gray-300 w-full"></div>
            <div className="event-card flex flex-col py-2 px-2 my-2 rounded-xl hover:bg-blue-50 transition-colors duration-300 hover:cursor-pointer">
              <div className="date text-sm font-semibold text-blue-500">29 Oct 2024</div>
              <div className="title text-sm font-semibold my-2 transition-colors duration-300">Anti Ragging Awareness Mahautsav 12-18 August, 2024</div>
            </div>
            <div className="divider h-[1px] bg-gray-300 w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestNews;
