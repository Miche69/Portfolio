'use client'

import { HashLink } from 'react-router-hash-link';
import {useEffect, useState} from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        let scrollLength = typeof document !== "undefined" && document.documentElement.scrollTop
        if ( scrollLength > 50) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className={`w-full z-10 fixed flex text-secondary bg-primary p-4 items-center justify-between duration-75 ease-in-out ${isScrolled && "border-secondary border-b-2 duration-200 ease-in-out"}`}>
            <HashLink smooth to="/#intro" className="font-druk text-center justify-start uppercase text-2xl">Michelle Br<span className="uppercase font-bebasneue text-[25.5px]">ä</span>ndli</HashLink>
            <div className="flex items-center gap-6 justify-between">
                <HashLink smooth to="/#aboutMe" className="font-josefin text-center uppercase hover:text-indigo-300" onClick={() => {
                }}>über mich</HashLink>
                <HashLink smooth to="/#skills" className="font-josefin uppercase hover:text-indigo-300">kompetenzen</HashLink>
                <HashLink smooth to="/#projects" className="font-josefin uppercase hover:text-indigo-300">projekte</HashLink>
                <HashLink className="font-josefin cursor-not-allowed uppercase hover:text-indigo-300">kontakt</HashLink>
            </div>
        </div>
    );
}