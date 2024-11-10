"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { faCaretDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Hamburger & Close icons
import Link from "next/link";

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
          <ul>
            <li>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light" color="" className="text-white">
                    Admissions
                    <FontAwesomeIcon icon={faCaretDown} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="brochure">
                    <Link href="/admission/brochure">Download Brochure</Link>
                  </DropdownItem>
                  <DropdownItem key="enquiry">
                    <Link href="/admission/enquiry">Admission Enquiry Form</Link>
                  </DropdownItem>
                  <DropdownItem key="courses">
                    <Link href="/admission/courses">Courses Offered</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
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
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="mca" onClick={() => handleNavigation("/courses/mca")}>
                    MCA
                  </DropdownItem>
                  <DropdownItem key="mca-integrated" onClick={() => handleNavigation("/courses/mca-integrated")}>
                    MCA Integrated
                  </DropdownItem>
                  <DropdownItem key="mca-integrated" onClick={() => handleNavigation("/courses/mba-integrated")}>
                    MBA Integrated
                  </DropdownItem>
                  <DropdownItem key="mba" onClick={() => handleNavigation("/courses/mba")}>
                    MBA
                  </DropdownItem>
                  <DropdownItem key="bca" onClick={() => handleNavigation("/courses/bca")}>
                    BCA
                  </DropdownItem>
                  <DropdownItem key="bba" onClick={() => handleNavigation("/courses/bba")}>
                    BBA
                  </DropdownItem>
                  <DropdownItem key="bcom" onClick={() => handleNavigation("/courses/bcom")}>
                    B.COM
                  </DropdownItem>
                  <DropdownItem key="ba" onClick={() => handleNavigation("/courses/ba")}>
                    BA
                  </DropdownItem>
                  <DropdownItem key="bed" onClick={() => handleNavigation("/courses/bed")}>
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
                  <DropdownItem key="new">Lecture Hall</DropdownItem>
                  <DropdownItem key="copy">Library</DropdownItem>
                  <DropdownItem key="edit">Lab</DropdownItem>
                  <DropdownItem key="edit">Cafeteria</DropdownItem>
                  <DropdownItem key="edit">Hostel</DropdownItem>
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
                  <DropdownItem key="new">Seminars</DropdownItem>
                  <DropdownItem key="copy">Workshops</DropdownItem>
                  <DropdownItem key="edit">Industrial Visit</DropdownItem>
                  <DropdownItem key="edit">Cultural Fest</DropdownItem>
                  <DropdownItem key="edit">Sports</DropdownItem>
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
                  <DropdownItem key="new">Global Institute & Overview</DropdownItem>
                  <DropdownItem key="copy">Mission Vision and Quality Policy</DropdownItem>
                  <DropdownItem key="edit">Organization</DropdownItem>
                  <DropdownItem key="edit">Advisory Board</DropdownItem>
                  <DropdownItem key="edit">Governing Body</DropdownItem>
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
                <DropdownItem key="mca" onClick={() => handleNavigation("/courses/mca")}>
                    MCA
                  </DropdownItem>
                  <DropdownItem key="mca-integrated" onClick={() => handleNavigation("/courses/mca-integrated")}>
                    MCA Integrated
                  </DropdownItem>
                  <DropdownItem key="mca-integrated" onClick={() => handleNavigation("/courses/mba-integrated")}>
                    MBA Integrated
                  </DropdownItem>
                  <DropdownItem key="mba" onClick={() => handleNavigation("/courses/mba")}>
                    MBA
                  </DropdownItem>
                  <DropdownItem key="bca" onClick={() => handleNavigation("/courses/bca")}>
                    BCA
                  </DropdownItem>
                  <DropdownItem key="bba" onClick={() => handleNavigation("/courses/bba")}>
                    BBA
                  </DropdownItem>
                  <DropdownItem key="bcom" onClick={() => handleNavigation("/courses/bcom")}>
                    B.COM
                  </DropdownItem>
                  <DropdownItem key="ba" onClick={() => handleNavigation("/courses/ba")}>
                    BA
                  </DropdownItem>
                  <DropdownItem key="bed" onClick={() => handleNavigation("/courses/bed")}>
                    B.ED
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
