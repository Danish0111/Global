"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { faCaretDown, faBars, faTimes, faGraduationCap } from "@fortawesome/free-solid-svg-icons"; // Hamburger & Close icons
import Link from "next/link";
import { Divider } from "@nextui-org/react";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  // Toggle the menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="nav bg-slate-100 sticky z-10 top-0 shadow-md">
      <div className="wraper hidden lg:flex justify-end lg:mb-4">
        <div className="top-menu bg-[#122c74] w-[65%] absolute px-4">
          <ul className="flex items-center gap-6 text-sm font-semibold">
            <li>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light" color="" className="text-white">
                    Admissions
                    <FontAwesomeIcon icon={faCaretDown} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem className="dropdown" key="brochure">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    <Link href="/admission/brochure">Download Brochure
                      <div className="divider h-[1px] bg-gray-300 w-full"></div></Link>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="enquiry">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    <Link href="/admission/enquiry">Admission Enquiry Form
                      <div className="divider h-[1px] bg-gray-300 w-full"></div></Link>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="courses">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    <Link href="/admission/courses">Courses Offered
                      <div className="divider h-[1px] bg-gray-300 w-full"></div></Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <div className="admission text-white">Admission open 2024</div>
              <style jsx>{`
  .admission {
    text-align: center;
    padding: 5px 5px;
    color: white;
    background-color: #000; /* Black background to make colors pop */
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    /* Enhanced box shadow with wider spread */
    box-shadow: 0 0 15px rgba(0, 255, 255, 1), 
                0 0 20px rgba(0, 0, 255, 1), 
                0 0 25px rgba(255, 0, 0, 1);

    /* Sharper text shadow */
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.9), 
                 0 0 10px rgba(0, 0, 255, 0.9), 
                 0 0 15px rgba(255, 0, 0, 0.9);

    /* Animation */
    animation: glowingShadow 3s infinite ease-in-out;
  }

  @keyframes glowingShadow {
    0% {
      box-shadow: 0 0 15px rgba(0, 255, 255, 1), 
                  0 0 20px rgba(0, 0, 255, 1), 
                  0 0 25px rgba(255, 0, 0, 1);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 0, 0, 1), 
                  0 0 25px rgba(0, 255, 255, 1), 
                  0 0 30px rgba(0, 0, 255, 1);
    }
    100% {
      box-shadow: 0 0 15px rgba(0, 255, 255, 1), 
                  0 0 20px rgba(0, 0, 255, 1), 
                  0 0 25px rgba(255, 0, 0, 1);
    }
  }
`}</style>
            </li>
          </ul>
        </div>
      </div>

      <nav className="flex justify-between px-7 items-center relative">
        <div className="logo flex items-center gap-2 relative lg:bottom-3">
          <Image
            className=""
            src="/globalLogo.png"
            alt="Global Logo"
            width={200}
            height={200}
            style={{ height: "auto" }}
          />
        </div>

        {/* Hamburger Button (Mobile View) */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl cursor-pointer" />
        </div>

        {/* Menu for Desktop */}
        <div className="bottom-menu relative top-2 hidden lg:flex">
          <ul className="flex pt-0 gap-2">
            <li>
              <Link href="/">
                <Button color="primary" variant="light">
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light" color="primary">
                    Courses
                    <FontAwesomeIcon icon={faCaretDown} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu className="" aria-label="Static Actions">
                  <DropdownItem className="dropdown" key="mca" onClick={() => handleNavigation("/courses/mca")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    MCA
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="mca-integrated" onClick={() => handleNavigation("/courses/mca-integrated")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    MCA Integrated
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="mca-integrated" onClick={() => handleNavigation("/courses/mba-integrated")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    MBA Integrated
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="mba" onClick={() => handleNavigation("/courses/mba")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    MBA
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="bca" onClick={() => handleNavigation("/courses/bca")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    BCA
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="bba" onClick={() => handleNavigation("/courses/bba")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    BBA
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="bcom" onClick={() => handleNavigation("/courses/b-com")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    B.COM
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="ba" onClick={() => handleNavigation("/courses/ba")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    BA
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="bed" onClick={() => handleNavigation("/courses/b-ed")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    B.ED
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Button color="primary" variant="light">
                Placement
              </Button>
            </li>
            <li>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light" color="primary">
                    Infrastructure
                    <FontAwesomeIcon icon={faCaretDown} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem className="dropdown" key="new">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Lecture Hall
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="copy">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Library
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="edit">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Lab
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="edit">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Cafeteria
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="edit">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Hostel
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light" color="primary">
                    Events
                    <FontAwesomeIcon icon={faCaretDown} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem className="dropdown" key="new">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Seminars
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="copy">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Workshops
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="edit">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Industrial Visit
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="edit">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Cultural Fest
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="edit">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Sports
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light" color="primary">
                    About Us
                    <FontAwesomeIcon icon={faCaretDown} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem className="dropdown" key="new">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Global Institute & Overview
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="copy">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Mission Vision and Quality Policy
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="edit">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Organization
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="edit">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Advisory Board
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="edit">
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    Governing Body
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Button color="primary" variant="light">
                Contact Us
              </Button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu (Visible when isMenuOpen is true) */}
        <div
          className={`lg:hidden absolute top-16 right-0 w-[100%] md:w-[50%] h-[100vh] flex flex-col justify-start bg-white shadow-md p-4 ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          <ul>
            <li>
              <Button color="primary" variant="light" className="">
                Home
              </Button>
            </li>
            <li>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light" color="primary" className="">
                    Courses
                    <FontAwesomeIcon icon={faCaretDown} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem className="dropdown" key="mca" onClick={() => handleNavigation("/courses/mca")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    MCA
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="mca-integrated" onClick={() => handleNavigation("/courses/mca-integrated")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    MCA Integrated
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="mca-integrated" onClick={() => handleNavigation("/courses/mba-integrated")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    MBA Integrated
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="mba" onClick={() => handleNavigation("/courses/mba")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    MBA
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="bca" onClick={() => handleNavigation("/courses/bca")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    BCA
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="bba" onClick={() => handleNavigation("/courses/bba")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    BBA
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="bcom" onClick={() => handleNavigation("/courses/bcom")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    B.COM
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="ba" onClick={() => handleNavigation("/courses/ba")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    BA
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                  <DropdownItem className="dropdown" key="bed" onClick={() => handleNavigation("/courses/bed")}>
                    <FontAwesomeIcon className="pr-2" icon={faGraduationCap} />
                    B.ED
                    <div className="divider h-[1px] bg-gray-300 w-full"></div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Button color="primary" variant="light" className="">
                Placement
              </Button>
            </li>
            <li>
              <Button color="primary" variant="light" className="">
                Infrastructure
              </Button>
            </li>
            <li>
              <Button color="primary" variant="light" className="">
                Events
              </Button>
            </li>
            <li>
              <Button color="primary" variant="light" className="">
                About Us
              </Button>
            </li>
            <li>
              <Button color="primary" variant="light" className="">
                Contact Us
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
