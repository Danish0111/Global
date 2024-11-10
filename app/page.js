"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Affiliation from "./Affiliation";
import LatestNews from "@/Components/LatestNews";
import Head from "next/head";
import Courses from "@/Components/Courses";
import WhyToChoose from "@/Components/WhyToChoose";
import Advantages from "@/Components/Advantages";
import TextSlider from "@/Components/TextSlider";
import Alumini from "@/Components/Alumini";
import FAQS from "@/Components/FAQS";
import Footer from "@/Components/Footer";

export default function Home() {
    return (
        <>
            <div className="">
                <TextSlider />
                <Carousel className="carousal-container"
                    autoPlay
                    interval={5000} // Time in ms, here it's 3 seconds
                    infiniteLoop
                    showThumbs={false} // Hides thumbnails, optional
                    showStatus={false} // Hides the status (e.g., "1/5"), optional
                >
                    <div>
                        <img className=""
                            src="one.png"
                            alt="image1"
                        />
                    </div>
                    <div>
                        <img className=""
                            src="two.jpeg"
                            alt="image2"
                        />
                    </div>
                    <div>
                        <img className=""
                            src="three.jpeg"
                            alt="image3"
                        />
                    </div>
                    <div>
                        <img className=""
                            src="four.jpeg"
                            alt="image4"
                        />
                    </div>
                </Carousel>
                <LatestNews />
                <Courses />
                <WhyToChoose />
                <Advantages />
                <Alumini />
                <Affiliation />
                <FAQS />
                {/* <Footer /> */}
            </div>
        </>
    );
};

