"use client"
import React from 'react'
import Image from 'next/image';
// import { useState } from 'react';
// import { logo } from '@public/globalnew.png';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, RadioGroup, Radio } from "@nextui-org/react";
const Navbar = () => {
  return (
    <>
      <div className="nav bg-slate-100 sticky z-10 top-0 shadow-md">
        <div className="wraper flex justify-end mb-4">
          <div className="top-menu bg-[#122c74] w-[65%] absolute px-4">
            <ul>
              <li>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="light"
                      color=""
                      className='text-white'
                    >
                      Admissions
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                      Delete file
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
        <nav className='flex justify-between px-7  items-center relative '>
          <div className="logo flex items-center gap-2 relative bottom-3">
            <Image className='' src='/globalLogo.png' alt="Global Logo" width={200} height={200} />
            <div className='text flex flex-col'>
              {/* <span className='text-2xl font-bold '>Global</span>
            <span className='text-medium font-semibold ml-2'>Educational Institute</span> */}
            </div>
          </div>


          <div className="bottom-menu relative top-2">
            <ul className='flex pt-0 gap-2'>
              <li>
                <Button color="primary" variant="light">
                  Home
                </Button>
              </li>
              <li>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="light"
                      color="primary"
                    >
                      Courses
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                      Delete file
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li>
                <Button color="primary" variant="light">
                  placement
                </Button>
              </li>
              <li>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="light"
                      color="primary"
                    >
                      Infrastructure
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                      Delete file
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="light"
                      color="primary"
                    >
                      Events
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                      Delete file
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li>
                <Button color="primary" variant="light">
                  About us
                </Button>
              </li>
              <li>
                <Button color="primary" variant="light">
                  Contact us
                </Button>
              </li>
            </ul>
          </div>
          {/* <div className="flex gap-4 items-center">
          <div className='about'>
            <Image className='' src='/about.png' alt="Global Logo" width={30} height={30} />
          </div>
          <div className='contact'>
            <Image className='' src='/chat.png' alt="Global Logo" width={30} height={30} />
          </div>
        </div> */}
        </nav>
      </div>
    </>
  )
}

export default Navbar
