import { Fragment } from "react";
import Head from "next/head";

export default function Custom404() {
  return (
    <Fragment>
      <Head>
        <title>Next.js dApp | 404: This page could not be found.</title>
        <meta
          name="description"
          content="Next.js dApp template with Tailwind CSS and RainbowKit built in TypeScript."
        />
      </Head>

      <div className="w-full flex flex-col">
        <h1 className="flex flex-col sm:flex-row justify-center items-center text-4xl font-bold ">
          404
        </h1>
        <h2 className="text-2xl text-center mt-4">
          The requested URL /error was not found on this server.
        </h2>
      </div>
    </Fragment>
  );
}
