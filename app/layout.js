import { Geist, Geist_Mono, Roboto} from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar/>
          </div> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
