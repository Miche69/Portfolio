import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center p-10 justify-center gap-4 h-screen bg-primary text-secondary flex-col">
            <div className="flex justify-center flex-1 items-center gap-4 bg-primary text-secondary flex-col">
                <h1 className="text-[150px] font-druk">404</h1>
                <p className="text-2xl font-josefin">Seite nicht gefunden</p>
            </div>
            <Link href="/"
                  className="bg-secondary text-lg hover:text-indigo-300 text-primary font-josefin p-2 rounded-xl">
                Zurück zur Startseite
            </Link>
        </div>
    );
}