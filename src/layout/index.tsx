import React, { PropsWithChildren, useState } from 'react';
//Importing Components
import Navbar from '@/layout/navbar';
import Sidebar from '@/layout/sidebar';
import Footer from '@/layout/footer';

export default function Layout({ children }: PropsWithChildren) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="wrapper">
      <Navbar isOpen={isSidebarOpen} toggleOpen={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleOpen={toggleSidebar} />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
