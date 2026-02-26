export default function LeftSkill(props) {
    return (
        <div id={`skill${props.skill.id}`}
             className="skills skill-card flex bg-black justify-center aspect-video skew-x-20 flex-col border-primary border-2 transition-all duration-500 text-secondary items-center gap-4 p-4 shadow-md"
             style={{ width: "clamp(0.5rem, 30vw, 20rem)"}}
        >

            <div className="flex flex-col justify-center items-center gap-4 -skew-x-20"
                 style={{ width: "clamp(1.5rem, 6vw, 5rem)", fontSize: "clamp(0.5rem, 3vw, 1.5rem)"}}

            >
                <img src={props.skill.icon} alt=""/>
                <h3 className="font-josefin">{props.skill.name}</h3>
            </div>
        </div>
    );
}