import React from 'react'

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import {FaBlog } from "react-icons/fa6";

const MobileDashboard = () => {
  return (
    <div className='px-4'>
        <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-3xl font-bold text-blue-700 flex items-center gap-2">
        <FaBlog className="inline-block"/>Books
        </span>
      </Navbar.Brand>
      <div className="flex gap-10">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <p>
            Dashboard
          </p>
          <p>
            Settings
          </p>
          <p>
            Earnings
          </p>
          <Dropdown.Divider />
          <p>
            Sign out
          </p>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="/admin/dashboard">
        Dashboard
        </Navbar.Link>
        <Navbar.Link href="/admin/dashboard/upload">
          Upload Book
        </Navbar.Link>
        <Navbar.Link href="/admin/dashboard/manage">
          Manage Books
        </Navbar.Link>
        <Navbar.Link href="logout">
          Signout
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default MobileDashboard