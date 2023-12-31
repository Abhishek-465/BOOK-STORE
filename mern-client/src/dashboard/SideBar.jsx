import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiBookOpen, HiChartPie, HiCloudUpload, HiInbox, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import userImg from "../assets/profile.jpg"

const SideBar = () => {
  return (
    <div>
        <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="#" img={userImg} imgAlt="Flowbite logo">
        User
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiBookOpen}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBar