import {FaHeart, FaBookOpen, FaBook } from "react-icons/fa";
import useLocalStorage from "./useLocalStorage";

export default function BookModal({ book, onClose }) {
  const info = book.volumeInfo;
  const [myBooks,setMyBooks] = useLocalStorage("myBooks",{
    fav:[],
    current:[],
    read:[]
  });

  const toggleBook = (listname) =>{
    setMyBooks((prev)=>{
      const exists = prev[listname].some((b)=> b.id === book.id);
      const update= {
        ...prev,
        [listname]: exists
                  ? prev[listname].filter((b)=>b.id !== book.id) //remove
                  : [...prev[listname],book]  //add

      };
      // window.dispatchEvent(new Event("myBooksUpdated"));
      setTimeout(() => {
            window.dispatchEvent(new Event("myBooksUpdated"));
      }, 0); 
      return update;
    });
  };

  const isInList = (listName) =>
    myBooks[listName].some((b) => b.id === book.id);

  return (
    <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in duration-300" 
        onClick={onClose}>
      <div
          className="bg-[#f6e6dc] max-w-3xl w-full shadow-xl p-6 relative overflow-y-auto max-h-[90vh] scrollbar-hide backdrop-blur-sm animate-fade-in duration-200 rounded rounded-md" 
          onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 text-[#713405] text-2xl font-bold rounded-full hover:bg-white/30 hover:text-[#5c2d02] transition-colors duration-200"
        >
        ✕
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
          <img
            src={info.imageLinks?.thumbnail || "https://placehold.co/240x320?text=No+Cover"}
            alt={info.title}
            className="w-[150px] h-[210px] object-cover shadow-2xl"
          />

          <div className="flex flex-col items-center md:items-start text-[#4f3525]">
            <h2 className="text-2xl font-semibold mb-1 text-[#511400] mr-1">{info.title}</h2>
            <p className="text-lg mb-2 text-[#412b1e] italic">{info.authors?.join(", ") || "Unknown"}</p>
            <p className="text-sm mb-1"><strong>Publisher:</strong> {info.publisher || "N/A"}</p>
            <p className="text-sm mb-3"><strong>Published:</strong> {info.publishedDate || "N/A"}</p>

            <div className="mb-3">
              <div className="flex flex-wrap gap-2">
                {info.categories?.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-[#E9D6C8] text-[#713405] rounded-full border border-[#E9E0DA]"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-6 mt-4 text-2xl">
              <button onClick={() => toggleBook("fav")}>
                <FaHeart
                  className={`transition-colors ${
                    isInList("fav") ? "text-[#713405]" : "text-[#713405]/30"
                  }`}
                  title="Add to Favorites"
                />
              </button>
              <button onClick={() => toggleBook("current")}>
                <FaBookOpen
                  className={`transition-colors ${
                    isInList("current") ? "text-[#713405]" : "text-[#713405]/30"
                  }`}
                  title="Mark as Currently Reading"
                />
              </button>
              <button onClick={() => toggleBook("read")}>
                <FaBook
                  className={`transition-colors ${
                    isInList("read") ? "text-[#713405]" : "text-[#713405]/30"
                  }`}
                  title="Mark as Read"
                />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[250px] mt-4 thin-scrollbar">
              <p className="text-sm text-[#412b1e] leading-relaxed ">
                {info.description || "No description available."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
