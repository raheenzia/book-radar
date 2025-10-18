function BookCard({ book }) {
  const info = book.volumeInfo;
  return (
    <div className="relative flex flex-row flex-none h-[215px] w-full max-w-[320px] mr-6 transform hover:scale-[1.03] transition-all duration-300 ease-out hover:-translate-y-2">
      {/* Book Cover */}
      <img
        src={info.imageLinks?.thumbnail || "https://placehold.co/240x320?text=No+Cover"}
        alt={info.title}
        className="absolute left-2 w-[150px] h-[200px] object-cover-[70%] shadow-lg z-20 select-none pointer-events-none"
      />

      {/* Details */}
      <div className="absolute pl-[170px] bottom-0 h-[150px] w-full max-w-[320px] bg-[#faeae1] rounded-r-xl
                      border hover:border-[#713405]
                      z-10 flex flex-col justify-center pl-2 pr-2 
                      shadow-[0_2px_8px_rgba(113,52,5,0.1)]
                      hover:shadow-[0_8px_24px_rgba(113,52,5,0.2)]
                      transition-all duration-300 ease-out
                      bg-gradient-to-br from-[#f6e6dc] via-[#faeae1] to-[#edcdba]">
        <h3 className="m-0 text-[#511400] text-base font-bold line-clamp-3 transition-colors">{info.title}</h3>
        <p className="m-0 text-[#692c00] text-sm line-clamp-2">{info.authors?.join(", ") || "Unknown Author"}</p>
      </div>
    </div>
  );
}

export default BookCard;


