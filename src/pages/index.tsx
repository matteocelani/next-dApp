import React, { Fragment, useEffect } from "react";
//Importing Next
import Head from "next/head";
//Importing Hooks
import { useAccount } from "wagmi";
//Importing Components
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      console.log("Wallet address: ", address);
    } else {
      console.log("Not connected");
    }
  }, [address, isConnected]);

  return (
    <Fragment>
      <Head>
        <title>Next.js dApp</title>
        <meta
          name="description"
          content="Next.js dApp template with Tailwind CSS and RainbowKit built in TypeScript."
        />
      </Head>

      <div className="w-full flex flex-col">
        <h1 className="flex flex-col sm:flex-row justify-center items-center text-4xl font-bold ">
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          <span className="mx-2 hidden sm:block">+</span>
          <a
            className="mt-4 sm:mt-0"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          <span className="mx-2 hidden sm:block">+</span>
          <a
            className="mt-4 sm:mt-0"
            href="https://www.rainbowkit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RainbowKit
          </a>
        </h1>
        <h2 className="text-2xl text-center mt-4">
          with{" "}
          <a href=" #" target="_blank" rel="noopener noreferrer">
            TypeScript
          </a>
        </h2>
        <div className="flex justify-center mt-8">
          <ThemeSwitch />
        </div>
      </div>
    </Fragment>
  );
}
