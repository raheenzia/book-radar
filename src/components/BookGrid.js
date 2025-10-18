import { useState } from "react";
import BookCard from "./BookCard";
import BookModal from "./BookModal";

export default function BookGrid({ books }) {
  const [visibleCount, setVisibleCount] = useState(9); 
  const [selectedBook, setSelectedBook] = useState(null);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 9); 
  };

  const visibleBooks = books?.slice(0, visibleCount) || [];
  console.log(visibleBooks);

  return (
    <section className="sm:px-8 px-4 mt-10">
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(290px,_1fr))] gap-6 max-w-6xl mx-auto">
        {visibleBooks.map(book => (
            <div key={book.id} onClick={() => setSelectedBook(book)} 
                 className="cursor-pointer w-full max-w-[320px] mx-auto">
             <BookCard book={book} />
            </div>
        ))}
    </div>
    {/* Show More Button */}
    {books?.length > visibleCount && (
      <div className="flex justify-center mt-6">
        <button
          onClick={handleShowMore}
          className="mt-2 px-4 py-2 text-[#713405] bg-[#edcdba]/40 text-xs rounded-2xl border border-[#713405] hover:bg-[#edcdba]/50 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200"
        >
        Show More
        </button>
      </div>
    )}
    {selectedBook && <BookModal book={selectedBook} onClose={()=>setSelectedBook(null)}/> }
    </section>
  );
}
