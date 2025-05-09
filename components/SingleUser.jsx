import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleUser () {
    const [user, setUser] = useState(null);
    const [support, setSupport] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const API = `https://reqres.in/api/users/${id}`;

    const getSingleUser = async () => {
        try {
            const response = await axios.get(API,{
                headers: {
                    'x-api-key': 'reqres-free-v1',
                    'Content-Type': 'application/json'
                }
            })
            setUser(response.data.data);
            setSupport(response.data.support);
        } catch (error) {
            console.error("Gagal mendapatkan user",error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        getSingleUser();
    },[id]);

    return (
        <div>
            <div className="container mx-auto flex flex-col items-center py-4 px-4 sm:px-6 lg:px-8">
                {loading ? (
                    <p>Loading...</p>
                ):  user ? (
                        <div className="flex flex-col md:flex-row items-center gap-5 p-2 px-3 w-full max-w-4xl text-slate-950" key={user.id}>
                            <img src={user.avatar} alt={user.first_name} className="rounded-full w-36 h-36 object-cover" />
                            <div className="flex flex-col gap-1 text-center md:text-left">
                                <p className="font-bold">{user.first_name} {user.last_name}</p>
                                <p className="italic">{user.email}</p>
                                <a href={support.url} className="hover:text-blue-900">{support.url}</a>
                                <p>{support.text}</p>
                            </div>
                        </div>
                    ):(
                        <p>User not found</p>
                    )
                }
            </div>
        </div>
    );
}

export default SingleUser;