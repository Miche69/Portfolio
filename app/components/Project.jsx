import Link from "next/link";

export default function Project(props) {
    return (
        <div id={props.project.name} className="project-content visible:flex hidden p-10  flex-col gap-5">
            <Link href={`${props.project.liveUrl}`}
                  className="bg-white w-full flex  items-center p-4 text-zinc-700 border gap-2 border-zinc-300 rounded-xl">
                <img src="./lock-closed-outline.svg" alt="Locked Project"
                     className="w-5 h-5 pb-1"
                />
                {props.project.liveUrl}
            </Link>
            <h1 className="font-druk text-5xl pt-3 pb-3 uppercase text-primary">{props.project.name}</h1>
            <img src={props.project.thumbnail} alt={props.project.name}
                 className="w-full h-110 rounded-xl object-cover object-top"/>
            <p className="project-description">{props.project.description}</p>
            <Link href={`${props.project.githubUrl}`}
                  className="bg-primary p-4 w-fit flex gap-4 text-secondary rounded-xl"
            >
                <img src="./logo-github.svg" alt="Github Project" className="invert w-5 h-5"/>
                GitHub Repository
            </Link>
        </div>
    )
}