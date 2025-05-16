import { useState, useEffect } from "react";

function SearchBar({ onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    // useEffect(() => {
    //     getUser();
    // },[])


    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if(searchTerm.trim() === ""){
                onSearch("");
            } else {
                onSearch(searchTerm);
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);

    }, [searchTerm, onSearch]);

    return (
        <div className="">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
        </div>
    )
}

export default SearchBar;