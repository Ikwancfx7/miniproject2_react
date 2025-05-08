import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListUser () {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const API = `https://reqres.in/api/users?page=`

    const getUser = async () => {
        try {
            const response = await axios.get(`${API}${page}`,{
                headers:{
                    'x-api-key': 'reqres-free-v1',
                    'Content-Type': 'application/json'
                }
            });
            setData(response.data.data);
            setTotalPages(response.data.total_pages);
        } catch (error) {
            console.error(error);
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

    useEffect(() => {
        getUser();
    }, [page]);

    return (
        <div>
            {/* <button className="bg-green-800 text-white px-3 py-2 m-2 hover:cursor-pointer" onClick={getUser}>Get User</button> */}
            <p className="text-md lg:text-lg font-bold mt-10">List Users:</p>
            <table className="mt-2 w-full">
                <tr>
                    <th className="w-12 h-12">No</th>
                    <th>Name</th>
                    <th>Action</th> 
                </tr>
                {data.map((user) => (
                    <tr key={user.id}>
                        <td><div className="flex items-center justify-center">{user.id}</div></td>
                        <td><div className="flex items-center justify-center">{user.first_name} {user.last_name}</div></td>
                        <td><Link className="button-1" to={`/single-user/${user.id}`}>Detile</Link></td>
                    </tr>
                ))}
            </table>
            <div className="my-2 flex justify-end gap-3 w-full">
                <button className="bg-green-800 text-white px-3 py-2 hover:cursor-pointer" onClick={()=>changePage('prev')}>
                    Prev Page
                </button>
                <button className="bg-green-800 text-white px-3 py-2 hover:cursor-pointer" onClick={()=>changePage('next')}>
                    Next Page
                </button>
            </div>
        </div>
    );
}

export default ListUser;