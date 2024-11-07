"use client";
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const mapRef = useRef(null);
  const apiKey = "AIzaSyBkLqWU_5IOPE8F_Hpkb4f3z6sIS8mVt5Y"; // Temporarily hard-coded
  console.log(apiKey);

  useEffect(() => {
    // Helper function to load the Google Maps script
    const loadGoogleMapsScript = () => {
      if (document.getElementById('google-maps')) return; // Prevent duplicate script tags
      // console.log("Google Maps API Key:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

      const script = document.createElement('script');
      script.id = 'google-maps';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.onload = () => {
        if (window.google && window.google.maps) {
          initMap();
        } else {
          console.error("Google Maps failed to load");
        }
      };
      document.body.appendChild(script);
    };

    // Initialize the map
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 28.467853546142578, lng: 77.5029296875 },
        zoom: 14,
      });

      // Add a marker at the specified location
      new window.google.maps.Marker({
        position: { lat: 28.467853546142578, lng: 77.5029296875 },
        map,
        title: 'My location',
      });
    };

    // Load the Google Maps script
    loadGoogleMapsScript();
  }, []);

  return (
    <>
      <footer className='flex justify-around bg-[#14297a] text-white py-10 px-5 gap-10'>
        <div className="contact flex flex-col gap-2 w-[30%]">
          <h2 className='text-xl font-semibold mb-4 underline underline-offset-8'>Contact Us</h2>
          <div ref={mapRef} className="w-full h-64 rounded-lg mt-4"></div>
          <p className='text-sm font-semibold'>Global Educational Institutes, 32-A Knowledge Park-1, Greater Noida, UP-201308</p>
          <div className="phone flex flex-col">
            <span className='mt-2 text-lg font-bold text-yellow-400'><FontAwesomeIcon icon={faPhone}/> Phone:</span>
            <span className='text-sm font-semibold'>Toll Free No: 18003090801</span>
            <span className='text-sm font-semibold'>+91-9350592987</span>
            <span className='text-sm font-semibold'>+91-9350592988</span>
          </div>
          <div className="email flex items-center gap-2">
            <span className='text-lg font-bold text-yellow-400'><FontAwesomeIcon icon={faEnvelope}/> Email:</span>
            <span className='text-sm font-semibold'>admissiongiit@gmail.com</span>
          </div>
          <div className="social flex gap-4 text-xl">
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faTwitter}/>
          </div>
        </div>

        {/* Admissions Section */}
        <div className="links w-[40%] grid  grid-cols-2 gap-4 ">
          <div className="admission">
            <h2 className='text-xl font-semibold mb-4 underline underline-offset-8'>Admissions</h2>
            <ul className='space-y-2 text-sm font-semibold'>
              <li><a href="#" className='hover:underline'>Download Brochure</a></li>
              <li><a href="#" className='hover:underline'>Admission Enquiry Form</a></li>
              <li><a href="#" className='hover:underline'>Courses Offered</a></li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div className="important-link">
            <h2 className='text-xl font-semibold mb-4 underline underline-offset-8'>Important Links</h2>
            <ul className='space-y-2 text-sm font-semibold'>
              <li><a href="#" className='hover:underline'>Courses</a></li>
              <li><a href="#" className='hover:underline'>Research & Journals</a></li>
              <li><a href="#" className='hover:underline'>Publications</a></li>
              <li><a href="#" className='hover:underline'>Contact</a></li>
            </ul>
          </div>

          <div className="About-us">
            <h2 className='text-xl font-semibold mb-4 underline underline-offset-8'>About us</h2>
            <ul className='space-y-2 text-sm font-semibold'>
              <li><a href="#" className='hover:underline'>GLOBAL INSTITUTE & OVERVIEW</a></li>
              <li><a href="#" className='hover:underline'>MISSION VISION & QUALITY POLICY</a></li>
              <li><a href="#" className='hover:underline'>Advisory Board</a></li>
              <li><a href="#" className='hover:underline'>GOVERNING BODY</a></li>
            </ul>
          </div>

          <div className="important-link">
            <h2 className='text-xl font-semibold mb-4 underline underline-offset-8'>Quick Links</h2>
            <ul className='space-y-2 text-sm font-semibold'>
              <li><a href="#" className='hover:underline'>Lease Deed</a></li>
              <li><a href="#" className='hover:underline'>Trust Deed</a></li>
              <li><a href="#" className='hover:underline'>Building Plan</a></li>
              <li><a href="#" className='hover:underline'>Lease Deed Possesion</a></li>
              <li><a href="#" className='hover:underline'>Certificate</a></li>
              <li><a href="#" className='hover:underline'>Mandatory Disclosure</a></li>
              <li><a href="#" className='hover:underline'>Students Feedback</a></li>
              <li><a href="#" className='hover:underline'>Teachers Feedback</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright bg-yellow-400 p-2 flex justify-center items-center gap-4">
        <div className="img">
          <img className='w-16' src="/global-footer.png" alt="" />
        </div>
        <span className='text-sm font-bold flex items-center gap-1'> <span className='text-lg'> &copy;</span> Global Educational Institute. All Right Reserved</span>
      </div>
    </>

  );
};

export default Footer;
