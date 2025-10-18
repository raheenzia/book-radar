import { useState, useEffect } from "react";

function useFetch(query){
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(()=>{
        if(!query)return;

        const q = query.startsWith("subject:")
            ? query
            : `${encodeURIComponent(query)}`;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=40&langRestrict=en`;
        const controller = new AbortController();
        
        setLoading(true);

        fetch(url,{ signal : controller.signal})
         .then( res => res.json() )
         .then(data =>{
             const sorted = (data.items || [])
            .filter(book => book.volumeInfo?.language === "en")
            .sort((a, b) => b.volumeInfo.ratingsCount - a.volumeInfo.ratingsCount);
            
            setBooks(sorted);
         })
         .catch(err => {
            if (err.name !== "AbortError") console.error(err);
         })
         .finally(() => setLoading(false));
    },[query]);

    return { books,loading}
        
}

export default useFetch;