export default function LeftSkill(props) {
    return (
        <div id={`skill${props.skill.id}`} className="skills skill-card flex bg-black justify-center oppositeRhombus flex-col border-primary border-2 text-secondary items-center gap-4 p-4 shadow-md">
            <img src={props.skill.icon} alt="" className="w-20 bg-white p-2 rounded-xl h-20" />
            <h3 className="text-xl font-josefin mb-2">{props.skill.name}</h3>
        </div>
    );
}