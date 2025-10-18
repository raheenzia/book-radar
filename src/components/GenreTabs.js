import { Link, useNavigate, useParams } from "react-router-dom";
// import { useEffect } from "react";
import useFetch from "./useFetch";
import Loader from "./Loader";
import BookGrid from "./BookGrid";


export default function GenreTabs() {
    const genres = ["All Genres", "Classics", "Science", "Fiction", "Philosophy", "Biography"];
    const {genre} = useParams();
    const activeGenre = genre ? decodeURIComponent(genre) : "All Genres";
    const query = activeGenre === "All Genres"
        ? "bestseller"
        : `subject:${activeGenre}`;

    const {books , loading}=useFetch(query);
    const navigate = useNavigate();
//     useEffect(() => {
//         if (!loading && books) {
//         const el = document.getElementById("book-grid");
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//   }
//     }, [genre,loading,books]);
    const handleChange =(e)=> {
        const selected = e.target.value;
        navigate(selected === "All Genres" ? "/" :`/genre/${encodeURIComponent(selected)}`);
    }

    return (
        <section className="">
        <div className="w-full border-b mt-7 pt-3 px-8 shadow-b sticky top-20 z-40 bg-white">
        <div className="max-w-6xl mx-auto flex direction-row items-center justify-between text-[#692c00]">
            <h2 className="text-lg font-medium md:pb-4 sm:pb-2">Popular by Genre</h2>

            <div className="md:hidden">
                <select
                    value={activeGenre}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 border-[#713405] cursor-pointer focus:outline-none"
                >
                    {genres.map((g) => (
                        <option key={g} value={g}>{g}</option>
                    ))}
                </select>
            </div>

            {/*Desktop*/}
            <div className="hidden md:flex space-x-6 sm:px-1 overflow-x-auto overflow-y-hidden">
            {genres.map((g) => (
                <Link
                key={g}
                to={g === "All Genres" ? "/" : `/genre/${encodeURIComponent(g)}`}
                className={`pb-4 border-b-2 transition-all duration-100 transform ${
                    activeGenre === g
                    ? "border-[#713405] font-semibold"
                    : "border-transparent text-[#692c00]/80 hover:text-[#692c00] hover:scale-105 "
                }`}
                >
                {g}
                </Link>
            ))}
            </div>
        </div>
        </div>
        <div id="book-grid" className="">
        {loading ? <Loader /> : <BookGrid books={books} />}
        </div>
        </section>
    );
}
