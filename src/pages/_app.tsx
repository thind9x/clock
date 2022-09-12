import React, { useEffect } from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import {Navbar} from "../components";


export default function MyApp({ Component, pageProps }:AppProps) {
  return (
    <React.Fragment>
        <Component {...pageProps} />
    </React.Fragment>
  );
}
