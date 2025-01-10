'use client';

import React, { PropsWithChildren, useState } from 'react';
import Footer from '@/layout/footer';
import Navbar from '@/layout/navbar';
import Sidebar from '@/layout/sidebar';

export default function Layout({ children }: PropsWithChildren) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        isOpen={isSidebarOpen}
        toggleOpen={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleOpen={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <main className="flex-1 px-4 flex items-center w-full">{children}</main>
      <Footer />
    </div>
  );
}
