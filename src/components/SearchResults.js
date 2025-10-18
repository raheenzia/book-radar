import { useSearchParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "./Loader";
import BookGrid from "./BookGrid";

function SearchResults() {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") || "";
    const {books ,loading} = useFetch(q);
    return (
        <div >
            <div className="px-8 mt-9">
            <h2 className="text-2xl md:text-3xl font-medium pb-4 text-[#692c00] mx-auto max-w-6xl">Search results for "{q}"</h2>
            </div>
            {loading ? (<Loader />) 
            : books && books.length > 0 ? (<BookGrid books={books} />) 
                :(<div className="text-center text-[#692c00] py-10 text-lg font-medium">
                    Sorry, no records found. Try another search.
                </div>)
            }
        </div>
    );
}

export default SearchResults;