import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleUser () {
    const [user, setUser] = useState(null); 
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
            {loading ? (
                <p>Loading...</p>
            ):  user ? (
                    <div className="flex flex-row items-center gap-5 p-2 " key={user.id}>
                        <img src={user.avatar} alt={user.first_name} className="rounded-full" />
                        <div>
                            <p className="font-bold">{user.first_name} {user.last_name}</p>
                            <p className="italic">{user.email}</p>
                        </div>
                    </div>
                ):(
                    <p>User not found</p>
                )
            }
        </div>
    );
}

export default SingleUser;