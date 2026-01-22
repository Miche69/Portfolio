"use client"

import Link from "next/link";
import {useEffect, useState} from "react";


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (typeof window !== `undefined`) {
                const scrollTop = document.documentElement.scrollTop
                setIsScrolled(scrollTop > 50)
            }
        }

        onScroll()
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    function handleSmoothScroll(event, targetID) {
        event.preventDefault();
        const targetElement = document.getElementById(targetID)
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div
            className={`w-full z-10 fixed flex text-secondary bg-primary p-4 items-center justify-between duration-75 ease-in-out ${isScrolled && "border-secondary border-b-2 duration-200 ease-in-out"}`}>
            <Link href="/#intro" className="font-druk text-center justify-start uppercase text-2xl"
                  onClick={(e) => {
                      handleSmoothScroll(e, "intro");
                  }}
            >Michelle Br<span
                className="uppercase font-bebasneue text-[25.5px]">ä</span>ndli</Link>
            <div className="flex items-center gap-6 justify-between">
                <Link href="/#aboutMe" className="font-josefin text-center uppercase hover:text-indigo-300"
                      onClick={(e) => {
                          handleSmoothScroll(e, "aboutMe");
                      }}>über mich</Link>
                <Link href="/#skills"
                      className="font-josefin uppercase hover:text-indigo-300"
                      onClick={(e) => {
                          handleSmoothScroll(e, "skills");
                      }}
                >kompetenzen</Link>
                <Link href="/#projects"
                      className="font-josefin uppercase hover:text-indigo-300"
                      onClick={(e) => {
                          handleSmoothScroll(e, "projects");
                      }}
                >projekte</Link>
            </div>
        </div>
    );
}