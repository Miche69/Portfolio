import {useEffect, useState} from "react";
import Project from "@/app/components/Project";
import ProjectNavBar from "@/app/components/ProjectNavBar";
import ProjectNavBarMobile from "@/app/components/ProjectNavBarMobile";

export default function Projects() {
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
    })

    return (
        <div id="projects"
             className="projects-section bg-primary sm:p-10 sm:pb-15 pb-15 p-5 text-secondary flex flex-col">
            <h2 className="font-druk uppercase text-7xl sm:pb-12 sm:pt-12 pb-20 pt-20">Projekte</h2>
            <div className="bg-zinc-200 font-josefin rounded-xl flex flex-col text-black">
                <div className="flex pr-5 gap-2 p-4">
                    <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                    <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
                    <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                </div>
                <div className="flex flex-col bg-secondary">
                    <div className="sm:flex hidden bg-zinc-300 gap-0.25 pt-0.5">
                        {data.projects && data.projects.map((project) => (
                            <ProjectNavBar key={project.id} project={project}/>
                        ))}
                    </div>
                    {data.projects && data.projects.map((project) => (
                        <Project key={`${project.id}-${project.name}`} project={project}/>
                    ))}
                    <div className="sm:hidden flex justify-center items-center p-2 gap-1 text-sm">
                        {data.projects && data.projects.map((project) => (
                         <ProjectNavBarMobile key={project.id} project={project}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}