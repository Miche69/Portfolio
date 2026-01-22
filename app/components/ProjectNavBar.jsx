"use client";
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import {event} from "next/dist/build/output/log";

export default function ProjectNavBar(props) {

    const tabs = document.getElementsByClassName("project-tab");
    const projects = document.getElementsByClassName("project-content");

    function activeTab(tabID, tabName) {
        const currentTab = document.getElementById(`project${tabID}`);
        const currentProject = document.getElementById(`${tabName}`);

        if (!currentTab.classList.contains("visible")) {
            for (let i = 0; i < projects.length; i++) {
                projects[i].classList.remove("visible");
            }
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("visible");
            }
            currentTab.classList.add("visible");
            currentProject.classList.add("visible");
        }
    }

    return (
        <nav id={`project${props.project.id}`}
             onLoad={() => {
                 const firstTab = tabs[0];
                 const firstProject = projects[0];
                 if (firstTab && firstProject) {
                     firstTab.classList.add("visible");
                     firstProject.classList.add("visible");
                 }
             }
             }
             className="project-tab items-center flex bg-zinc-500 visible:bg-secondary p-1 rounded-t-lg"
             onClick={(event) => {
                 event.preventDefault()
                 activeTab(props.project.id, props.project.name);
             }}
        >
            <div
                className="flex flex-wrap  gap-5 visible:hover:bg-transparent hover:bg-zinc-400 cursor-pointer rounded-2xl p-3 justify-center">
                <img src={props.project.icon} alt={props.project.name} className="w-5 h-5"/>
                <p className="">{props.project.name}</p>
                <img src="./close-outline.svg" className="w-5 h-5" alt="Close Modal"/>
            </div>
        </nav>
    );
}