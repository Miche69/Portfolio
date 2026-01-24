import Hamburger from 'hamburger-react'
import {useEffect, useState} from "react";
import Link from "next/link";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)

    function handleSmoothScroll(event, targetID) {
        event.preventDefault();
        const targetElement = document.getElementById(targetID)
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div className="hamburger-menu sm:hidden cursor-pointer">
            <Hamburger
                size={20}
                toggled={isOpen}
                toggle={setIsOpen}
            />
            {isOpen && (
                <div
                    className="fixed absolute flex flex-col left-0 top-0 h-screen w-screen bg-primary text-4xl gap-4 z-50">
                    <header className="fixed p-4 flex justify-end items-center w-full">
                        <Hamburger
                            size={20}
                            toggled={isOpen}
                            toggle={setIsOpen}
                        />
                    </header>
                    <div className="flex flex-col gap-6 w-full justify-center text-center h-screen items-center">
                        <Link href="/#aboutMe" className="font-josefin text-secondary uppercase hover:text-indigo-300"
                              onClick={(event) => {
                                  setIsOpen(false);
                                  handleSmoothScroll(event, "aboutMe");
                              }}>über mich</Link>
                        <Link href="/#skills" className="font-josefin text-secondary uppercase hover:text-indigo-300"
                              onClick={(event) => {
                                  setIsOpen(false);
                                  handleSmoothScroll(event, "skills");
                              }}>kompetenzen</Link>
                        <Link href="/#projects" className="font-josefin text-secondary uppercase hover:text-indigo-300"
                              onClick={(event) => {
                                  setIsOpen(false)
                                  handleSmoothScroll(event, "projects");
                        }}>projekte</Link>
                    </div>
                </div>
            )}
        </div>
    );
}