import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleUser () {
    const [user, setUser] = useState(null);
    const [support, setSupport] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const Navigate = useNavigate();
    const goBack = () => Navigate(-1);
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
                    <div className="min-h-screen w-full bg-slate-100 p-5 shadow-2xl">
                        <div className="flex justify-start">
                            <button onClick={goBack} className="bg-blue-700 hover:bg-blue-800 hover:cursor-pointer text-white font-bold py-1 px-4 rounded">← Go Back</button>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-5 p-2 px-3 w-full max-w-4xl text-slate-950 mt-10" key={user.id}>
                            <img src={user.avatar} alt={user.first_name} className="rounded-full w-36 h-36 object-cover" />
                            <div className="flex flex-col gap-1 text-center md:text-left">
                                <p className="font-bold text-xl">{user.first_name} {user.last_name}</p>
                                <p className="italic">{user.email}</p>
                                <a href={support.url} className="hover:text-blue-900">{support.url}</a>
                                <p>{support.text}</p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
                            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                            <a href="#" className="text-blue-600 hover:underline">Twitter</a>
                        </div>
                        <div className="mt-6">
                            <h3 className="font-semibold">Portofolio:</h3>
                            <ul className="list-disc list-inside text-sm">
                                <li>Website E-Commerce - React & Firebase</li>
                                <li>Aplikasi To-Do - JavaScript</li>
                                <li>Company Profile - HTML & Tailwind</li>
                            </ul>
                        </div>
                        <div>
                            <p className="mt-2 text-sm">Lokasi: Jakarta</p>
                            <p className="text-sm">Bio: Seorang developer React yang antusias membangun UI modern.</p>
                            <h3 className="font-semibold mt-3">Skills:</h3>
                            <ul className="list-disc list-inside text-sm">
                                <li>React</li>
                                <li>Tailwind CSS</li>
                                <li>REST API</li>
                            </ul>
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