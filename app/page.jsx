'use client';
import Image from "next/image";
import Intro from "@/app/components/Intro.jsx";
import Navbar from "@/app/components/Navbar";
import AboutMe from "@/app/components/AboutMe";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";

export default function Home() {
    return (
        <div className="home-page">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Intro/>}/>
                </Routes>
                <Routes>
                    <Route path="/" element={<AboutMe/>}/>
                </Routes>
                <Routes>
                    <Route path="/" element={<Skills/>}/>
                </Routes>
                <Routes>
                    <Route path="/" element={<Projects/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
