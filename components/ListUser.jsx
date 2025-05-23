import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function ListUser () {
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [originalData, setOriginalData] = useState([]);
    const API = `https://reqres.in/api/users?page=`;

    const getUser = async () => {
        try {
            const response = await axios.get(`${API}${page}`,{
                headers:{
                    'x-api-key': 'reqres-free-v1',
                    'Content-Type': 'application/json'
                }
            });
            setData(response.data.data);
            setOriginalData(response.data.data);
            setTotalPages(response.data.total_pages);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    const changePage = (direction) => {
            setPage((prev=>{
                const nextPage = direction === 'next' ? prev + 1 : prev - 1;
                
                if(nextPage >= 1 && nextPage <= totalPages) {
                    return nextPage;
                } else {
                    return prev;
                }   
            }))
    }

    const handleSearch = (searchTerm) => {
        if(searchTerm === ""){
            setData(originalData);
        } else {
            const filteredData = originalData.filter((user) => {
                const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
                return fullName.includes(searchTerm.toLowerCase())
            });
            setData(filteredData);
        }
    }

    useEffect(() => {
        getUser();
    }, [page]);

    return (
        <div className="pt-3 pb-10 lg:py-5 lg:px-30">
            <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center mb-5">
                <p className="flex content-center justify-center text-lg lg:text-3xl font-semibold">Users Profile</p>
                <div className="p-4 max-w-md w-3/4 md:w-1/3">
                    <SearchBar onSearch={handleSearch} data={data} setData={setData} />
                </div>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-screen -mt-30">
                        <svg className="mr-3 size-20 animate-spin" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                fill="none"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                            >
                            </circle>
                            <circle 
                                className="opacity-80" 
                                fill="none" cx="12" cy="12" r="10" 
                                stroke="currentColor" 
                                strokeWidth="3" 
                                strokeLinecap="round"
                                strokeDasharray="60"
                                strokeDashoffset="30"
                            >    
                            </circle>
                        </svg>
                    </div>
            ):  data ? (
                    <div className="mt-2 w-full grid grid-cols-2 md:grid-cols-3 gap-4">
                        {data.map((user) => (
                            <div key={user.id}>
                                <Link className="" to={`user/${user.id}`}>
                                    <div className="card-user">
                                        <div>
                                            <img className="w-[140px] md:w-[240px] rounded-full lg:text-sm object-cover aspect-square" src={user.avatar} alt={user.first_name} />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="md:text-lg lg:text-xl font font-semibold">{user.first_name} {user.last_name}</div>
                                            <div className="italic text-sm lg:text-lg">{user.email}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Data not found</p>
                )
            }
            
            <div className="mt-10 flex justify-center gap-3 w-full">
                <button className={`button-page ${page === 1 && 'opacity-50 pointer-events-none'}`} onClick={()=>changePage('prev')}>
                    ← Prev
                </button>
                <button className={`button-page ${page === totalPages && 'opacity-50 pointer-events-none'}`} onClick={()=>changePage('next')}>
                    Next →
                </button>
            </div>
        </div>
    );
}

export default ListUser;