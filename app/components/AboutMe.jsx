import { Link } from "react-router-dom";

export default function AboutMe() {
    return (
        <div id="aboutMe" className="bg-black p-10 text-secondary">
            <h1 className="text-7xl uppercase font-druk pt-12 pb-12"><span
                className="font-bebasneue uppercase text-[76px]">ü</span>ber mich</h1>
            <div className="flex items-center gap-4 justify-center">
                <div className="flex flex-col gap-7 w-1/2 font-josefin bg-secondary text-black border-primary border-2 p-10 rounded-xl">
                    <p className="text-lg">
                        Hallo! Ich bin Michelle Brändli, eine leidenschaftliche Informatikerin mit einem starken
                        Interesse
                        an Technologie und Innovation. Seit meiner Kindheit fasziniert mich die Welt der Computer und
                        Softwareentwicklung. Ich habe einen Abschluss in Informatik von der Universität Zürich und
                        verfüge über umfangreiche Erfahrung in verschiedenen Programmiersprachen und Technologien.

                        In meiner Freizeit experimentiere ich gerne mit neuen Technologien, arbeite an
                        Open-Source-Projekten
                        und bilde mich ständig weiter, um auf dem neuesten Stand der Technik zu bleiben. Ich bin auch
                        eine
                        begeisterte Teilnehmerin an Hackathons und Tech-Meetups, wo ich mein Netzwerk erweitern und von
                        anderen Fachleuten lernen kann.

                        Meine Stärken liegen in der Problemlösung, Teamarbeit und kreativen Denkweise. Ich freue mich
                        darauf,
                        meine Fähigkeiten in spannenden Projekten einzusetzen und zur Entwicklung innovativer Lösungen
                        beizutragen.
                    </p>
                    <Link to="https://github.com/Miche69" className="text-left bg-primary text-secondary w-fit before:content-[attr(before)] p-3 rounded-lg hover:bg-indigo-300 hover:text-black duration-200 ease-in-out">
                        GitHub Profile
                    </Link>
                </div>
                <div className="flex w-1/2 justify-center items-center">
                    <img className="border-primary rounded-xl border-2" src="https://i.pinimg.com/1200x/7b/90/a4/7b90a430a733d857d2b1b89a1892acd9.jpg" alt="Sonic the Hedgehog"
                    />
                </div>
            </div>
        </div>
    )
}