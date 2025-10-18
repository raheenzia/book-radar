import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchResults from "../components/SearchResults";

function SearchPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <SearchResults />
            </div>
            <Footer />
        </div>
    );
}

export default SearchPage;