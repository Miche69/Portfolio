import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: 'Michelle Brändli - Informatikerin',
    description: 'Portfolio von Michelle Brändli, Informatikerin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
        {children}
      </body>
    </html>
  );
}
