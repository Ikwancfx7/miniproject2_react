import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListUser () {
    const [data, setData] = useState([]);
    const API = 'https://reqres.in/api/users?page=2'

    const getUser = async () => {
        try {
            const response = await axios.get(API,{
                headers:{
                    'x-api-key': 'reqres-free-v1',
                    'Content-Type': 'application/json'
                }
            });
            setData(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            {/* <button className="bg-green-800 text-white px-3 py-2 m-2 hover:cursor-pointer" onClick={getUser}>Get User</button> */}
            <p className="text-lg font-bold mt-10">List Users:</p>
            <ol className="mt-2">
                {data.map((user) => (
                    <li className="list-decimal list-1" key={user.id}>
                        <p>{user.first_name} {user.last_name}</p>
                        <Link className="button-1" to={`/single-user/${user.id}`}> User Detile</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ListUser;