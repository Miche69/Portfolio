import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata = {
    title: 'Michelle Brändli - Informatikerin',
    description: 'Portfolio von Michelle Brändli, Informatikerin',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className="skills">
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
