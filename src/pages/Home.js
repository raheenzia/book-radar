import { useEffect, useState } from "react";
import GenreTabs from "../components/GenreTabs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Home() {
    const [showFullNavbar, setShowFullNavbar] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        setShowFullNavbar(scrollY > 400); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    return ( 
        <div className="flex flex-col min-h-screen">
            <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-100 ${showFullNavbar ? "translate-y-0" : "-translate-y-full"}`}>
                <Navbar />
            </div>
            <Hero/>
            <div className="flex-grow">
                <GenreTabs/>
            </div>
            <Footer/>
        </div>
     );
}

export default Home;
