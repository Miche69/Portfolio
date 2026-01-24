import {useEffect, useState} from "react";

export default function ProjectNavBarMobile(props) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            let response = await fetch(`./projects.json`);
            let data = await response.json();
            setData(data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    });

    const totalProjects = data.projects ? data.projects.length : 0;
    const mobileTabs = document.getElementsByClassName("project-navbar-mobile");
    const projects = document.getElementsByClassName("project-content");
    const tabs = document.getElementsByClassName("project-tab");

    function lastProject(tabID) {
        const lastId = tabID - 1;
        const lastElement = document.getElementById(`mobileproject${lastId}`);
        const lastProjectElement = document.getElementById(`project${lastId}`);
        const lastTabElement = document.getElementById(`navBarProject${lastId}`);

        if (lastElement) {
            for (let i = 0; i < mobileTabs.length; i++) {
                mobileTabs[i].classList.remove("visible");
            }
            for (let i = 0; i < projects.length; i++) {
                projects[i].classList.remove("visible");
            }
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("visible");
            }
            lastElement.classList.add("visible");
            lastProjectElement.classList.add("visible");
            lastTabElement.classList.add("visible");
        }
    }

    function nextProject(tabID) {
        const nextId = tabID + 1;
        const nextElement = document.getElementById(`mobileproject${nextId}`);
        const nextProjectElement = document.getElementById(`project${nextId}`);
        const nextTabElement = document.getElementById(`navBarProject${nextId}`);
        if (nextElement) {
            for (let i = 0; i < mobileTabs.length; i++) {
                mobileTabs[i].classList.remove("visible");
            }
            for (let i = 0; i < projects.length; i++) {
                projects[i].classList.remove("visible");
            }
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("visible");
            }
            nextElement.classList.add("visible");
            nextProjectElement.classList.add("visible");
            nextTabElement.classList.add("visible");
        }
    }

    return (
        <div id={`mobileproject${props.project.id}`}
             className="project-navbar-mobile visible:flex w-full hidden text-black justify-between p-10 pb-5 items-center">
            <button onClick={() => {
                lastProject(props.project.id);
            }}   disabled={props.project.id === 1}
                    className="p-2 w-10 bg-zinc-300 text-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-400">
                {"<"}
            </button>
            <p className="text-md flex justify-center items-center bg-zinc-300 rounded-4xl p-3">{props.project.name}</p>
            <button onClick={() => {
                nextProject(props.project.id);
            }}
                    disabled={props.project.id === totalProjects}
                    className="p-2 w-10 bg-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed text-black rounded-full hover:bg-zinc-400">
                {">"}
            </button>

        </div>
    );
}