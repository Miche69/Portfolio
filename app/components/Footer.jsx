import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer  flex bg-black text-secondary items-center justify-between text-center">
            <div className="flex flex-wrap items-center  justify-center gap-2 p-10">
                <Link href="https://github.com/Miche69"
                      className=" p-1 rounded-full">
                    <img src="./logo-github.svg" alt="github"
                         className="sm:w-6 w-3 invert hover:invert-75 aspect-square"/>
                </Link>
                <Link href={`mailto:michelle.braendli@hotmail.com"`}
                      className=" cursor-pointer p-2 rounded-full">
                    <img src="./email.png" alt="email"
                         className="sm:w-5 w-3 invert hover:invert-75"/>
                </Link>
                <Link href="tel:+41774076388" className=" p-2 rounded-full">
                    <img src="./phone-call.png" alt="telefon"
                         className="sm:w-5 w-3 invert hover:invert-75 aspect-square"/>
                </Link>
            </div>
            <p className="font-josefin sm:text-base text-sm p-10">© 2026 Michelle Brändli</p>
        </footer>
    );
}