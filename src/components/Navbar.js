import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { FaSearch,FaUser } from "react-icons/fa";

function Navbar() {
    const [query, setQuery] = useState("");
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim()) {
        setMobileSearchOpen(false);
        navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };
    
    return ( 
        <nav className="px-8 py-5 shadow-md z-50 min-h-20 h-30 sticky top-0 
                        bg-gradient-to-r from-[#edcdba] via-[#e3bfa8] to-[#d6a98d]">
            <div className=" max-w-6xl mx-auto flex flex-row items-center justify-between">
                
                <Link to="/">
                <h1 className="text-3xl text-[#511400] focus:outline-none">
                    <span className="font-normal">book</span>
                    <span className="font-bold">radar</span>
                </h1>               
                </Link>

                <div className="flex flex-row gap-2">
                {/*Desktop*/}
                <div  className="hidden sm:flex ml-10 ">
                    <input
                    type="text"
                    placeholder="Search books..."
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch();
                    }}
                    className="flex-1 px-5 pr-12 py-1 border border-[#713405] rounded-l-2xl focus:outline-none"
                    />
                    <button 
                    onClick={handleSearch}
                    className="bg-[#511400] text-white py-2 px-3 rounded-r-2xl flex items-center justify-center hover:bg-[#713405]/90">
                        <FaSearch className="w-4 h-4"/>
                    </button>
                </div>

                {/* Mobile */}
                <button 
                    onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                    className="sm:hidden bg-[#511400] text-white p-2 rounded-2xl flex items-center justify-center hover:bg-[#713405]/90">
                        <FaSearch className="w-4 h-4"/>
                </button>

                <Link
                    to="/mybooks"
                    className="bg-[#511400] text-white p-2 rounded-full hover:bg-[#713405]/90 transition"
                    title="My Books"
                >
                    <FaUser className="w-4 h-4" />
                </Link>
                </div>
            </div>
            {mobileSearchOpen &&(
                <div className="sm:hidden z-50 mt-6 py-4 w-full">
                <div className="flex items-center max-w-6xl mx-auto">
                    <input
                    type="text"
                    placeholder="Search books..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch();
                    }}
                    className="flex-1 h-9 px-5 py-1 border border-[#713405] rounded-l-2xl focus:outline-none"
                    />
                    <button
                    onClick={handleSearch}
                    className=" h-9 text-[#713405] bg-white p-2 border border-[#713405] rounded-r-2xl flex items-center justify-center"
                    >
                        <FaSearch className="w-4 h-4" />
                    </button>
                    <button
                        className="ml-3 text-2xl text-[#713405]"
                        onClick={() => setMobileSearchOpen(false)}
                    >
                        ✕
                    </button>
                </div>
                </div>
            )}
        </nav>
    );
}


export default Navbar;