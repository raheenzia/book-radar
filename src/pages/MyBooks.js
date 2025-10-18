import useLocalStorage from "../components/useLocalStorage";
import BookGrid from "../components/BookGrid";
import Navbar from "../components/Navbar";
import { FaHeart, FaBookOpen, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";

function MyBooks() {
    const [activeTab,setActiveTab]=useState("favorites");
    const [myBooks,setMyBooks] = useLocalStorage("myBooks", {
        fav: [],
        current: [],
        read: [],
    });
    useEffect(() => {
        const handleUpdate = () => {
        const stored = JSON.parse(localStorage.getItem("myBooks"));
        if (stored) setMyBooks(stored);
        };

        window.addEventListener("myBooksUpdated", handleUpdate);
        return () => window.removeEventListener("myBooksUpdated", handleUpdate);
    },[setMyBooks]);

    const totalBooks = myBooks.fav.length + myBooks.read.length + myBooks.current.length;
    return (
        <div className="flex flex-col min-h-screen">
        <Navbar/>
        <div className="px-8 flex-grow">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-medium text-[#692c00] mt-9">My Books</h1>
            <p className="text-xs sm:text-sm text-[#692c00]/70 mt-0.5">
                {totalBooks} {totalBooks === 1 ? "book" : "books"} in your collection
            </p>

            <div className="grid grid-cols-3 mt-5 mb-12 bg-[#f6e6dc]/40 rounded-lg overflow-hidden">

                <button
                    onClick={() => setActiveTab("favorites")}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 m-1.5 rounded rounded-md text-sm sm:text-base font-medium transition-all
                    ${
                    activeTab === "favorites"
                        ? "bg-[#faeae1] text-[#692c00] shadow-sm"
                        : "text-[#713405]/70 hover:bg-[#edcdba]/30"
                    }`}
                >
                    <FaHeart className="text-lg" />
                    <span>Favorites</span>
                    <span className="text-xs text-[#713405]/50 ml-1">
                    ({myBooks.fav.length})
                    </span>
                </button>

                <button
                    onClick={() => setActiveTab("reading")}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2 my-1.5 rounded rounded-md text-sm sm:text-base font-medium transition-all
                    ${
                    activeTab === "reading"
                        ? "bg-[#faeae1] text-[#692c00] shadow-sm"
                        : "text-[#713405]/70 hover:bg-[#edcdba]/30"
                    }`}
                >
                    <FaBookOpen className="text-lg" />
                    <span>Reading</span>
                    <span className="text-xs text-[#713405]/50 ml-1">
                    ({myBooks.current.length})
                    </span>
                </button>

                <button
                    onClick={() => setActiveTab("read")}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1 py-2 m-1.5 rounded rounded-md text-sm sm:text-base font-medium transition-all
                    ${
                    activeTab === "read"
                        ? "bg-[#faeae1] text-[#692c00] shadow-sm"
                        : "text-[#713405]/70 hover:bg-[#edcdba]/30"
                    }`}
                >
                    <FaCheck className="text-lg" />
                    <span>Read</span>
                    <span className="text-xs text-[#713405]/50 ml-1">
                    ({myBooks.read.length})
                    </span>
                </button>
            </div>

            {activeTab === "favorites" && (
                myBooks.fav.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                    <FaHeart className="text-6xl text-[#713405]/30 mb-4" />
                    <p className="text-[#713405]/70 max-w-md">
                    You haven't added any favorite books yet.
                    </p>
                </div>
                ) : (
                <BookGrid books={myBooks.fav} />
                )
            )}

            {activeTab === "reading" && (
                myBooks.current.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                    <FaBookOpen className="text-6xl text-[#713405]/30 mb-4" />
                    <p className="text-[#713405]/70 max-w-md">
                    No books currently being read.
                    </p>
                </div>
                ) : (
                <BookGrid books={myBooks.current} />
                )
            )}

            {activeTab === "read" && (
                myBooks.read.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                    <FaCheck className="text-6xl text-[#713405]/30 mb-4" />
                    <p className="text-[#713405]/70 max-w-md">
                    You haven't finished any books yet.
                    </p>
                </div>
                ) : (
                <BookGrid books={myBooks.read} />
                )
            )}

        </div>
        </div>
        <Footer/>
        </div>

    );
}

export default MyBooks;
