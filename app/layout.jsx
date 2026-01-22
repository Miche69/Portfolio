import "./globals.css";
import Navbar from "@/app/components/Navbar";
//import {ProjectContext} from "@/app/components/ProjectContext";
//import {useState} from "react";

export const metadata = {
    title: 'Michelle Brändli - Informatikerin',
    description: 'Portfolio von Michelle Brändli, Informatikerin',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
