import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch,FaUser } from "react-icons/fa";

function Hero() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim()) {
        navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };
    return (
        <div 
            className="bg-[#edcdba] w-full bg-cover bg-center"
            style={{ backgroundImage: `url('/hero.jpg')` }}
        >
            <div className="absolute inset-0 bg-black/40 h-[375px]"></div>
            <nav className="relative px-8 py-5 z-50">
                <div className="max-w-6xl mx-auto flex flex-row justify-between">

                <div className="z-50">
                    <h1 className="text-3xl text-[#f6e6dc]">
                    <span className="font-normal">book</span>
                    <span className="font-bold">radar</span>
                    </h1>
                </div>
                <Link
                    to="/mybooks"
                    className="text-[#f6e6dc] p-2 rounded-full hover:bg-[#f6e6dc]/20 transition"
                    title="My Books"
                    >
                    <FaUser className="w-4 h-4" />
                </Link>
                </div>
            </nav>

            <div className="h-[300px] px-8 py-16 min-h-[300px]">
                <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-10 text-[#f6e6dc] text-3x1 ">
                {/* Heading + Subheading + Search */}
                <div className="flex-1 min-w-300px z-50">
                    <h3 className="text-3xl md:text-5xl ">Not sure what to read next?</h3>
                    <p className="mt-4 text-lg">
                        Find your next page-turner here.
                    </p>

                    <div className="mt-7 flex max-w-md w-full">
                        <input
                        type="text"
                        placeholder="Search books..."
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSearch();
                        }}
                        className="flex-1 px-4 py-1 border border-[#713405] rounded-l-md focus:outline-none text-[#713405]"
                        />
                        <button 
                        onClick={handleSearch}
                        className="bg-[#511400] text-white px-4 py-2 rounded-r-md hover:bg-[#713405]/90">
                         <FaSearch  className="text-lg"/>
                        </button>
                    </div>
                </div>
                </div>                                                                              
            </div>
        </div>

    );
}

export default Hero;