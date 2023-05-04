import React from "react";
//Importing icon
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoFlash,
  IoPlanet,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-02 sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-09">
      <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-300 sm:mb-0">
        &copy; {new Date().getFullYear()}{" "}
        <a
          className="hover:underline"
          href="https://mashu.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matteo Celani
        </a>
        . All rights reserved.
      </p>
      <div className="flex justify-center items-center space-x-1">
        {/* GitHub */}
        <a
          href="https://github.com/matteocelani"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-300 hover:text-black hover:dark:text-black hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <IoLogoGithub className="w-5 h-5" />
          <span className="sr-only">Github</span>
        </a>
        {/* Twitter */}
        <a
          href="https://twitter.com/0xMashu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-300 hover:text-blue-600 hover:dark:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <IoLogoTwitter className="w-5 h-5" />
          <span className="sr-only">Twitter</span>
        </a>
        {/* Bitcoin Lightning */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-300 hover:text-primary hover:dark:text-primary hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <IoFlash className="w-5 h-5" />
          <span className="sr-only">Bitcoin Wallet</span>
        </a>
        {/* WebSite */}
        <a
          href="https://mashu.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-300 hover:text-green-500 hover:dark:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <IoPlanet className="w-5 h-5" />
          <span className="sr-only">Twitter</span>
        </a>
      </div>
    </footer>
  );
}
