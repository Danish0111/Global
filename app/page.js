"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
    return (
        <>
            <div className="">
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
            </div>
        </>
    );
};

