import React, { PropsWithChildren, useState, useEffect } from "react";
//Importing Components
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: PropsWithChildren) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="wrapper">
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
