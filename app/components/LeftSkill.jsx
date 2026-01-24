export default function LeftSkill(props) {
    return (
        <div id={`skill${props.skill.id}`}
             className="skills skill-card flex bg-black justify-center aspect-video w-80 skew-x-20 flex-col border-primary border-2 text-secondary items-center gap-4 p-4 shadow-md">
            <div className="flex flex-col justify-center items-center gap-4 -skew-x-20">
                <img src={props.skill.icon} alt="" className="w-20 h-20"/>
                <h3 className="text-2xl font-josefin">{props.skill.name}</h3>
            </div>
        </div>
    );
}