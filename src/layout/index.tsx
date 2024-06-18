import React, { PropsWithChildren } from 'react';
//Importing Components
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="wrapper">
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
