import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
            <div className="container mx-auto flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
                {loading ? (
                    <p>Loading...</p>
                ):  user ? (
                    <div className="">
                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="bg-slate-200 p-5 shadow-md/70 hover:shadow-lg/70 w-3/4 rounded-2xl">
                                <div className="flex justify-start">
                                    <button onClick={goBack} className="bg-blue-700 hover:bg-blue-800 hover:cursor-pointer text-white font-bold py-1 px-4 rounded">← Go Back</button>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-5 w-full max-w-4xl text-slate-950 mt-10" key={user.id}>
                                    <div className="py-2">
                                        <img src={user.avatar} alt={user.first_name} className="rounded-full w-36 h-36 object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-1 text-center md:text-left">
                                        <p className="font-bold text-lg lg:text-2xl">{user.first_name} {user.last_name}</p>
                                        <p className="italic text-sm lg:text-lg">{user.email}</p>
                                        <p className="text-sm lg:text-lg">"{support.text}"</p>
                                        <div>
                                            <a 
                                                href={support.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 inline-block font-semibold py-1 px-2 rounded-lg shadow hover:bg-yellow-500 transition">☕ Support Me</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-5 bg-slate-200 p-5 shadow-md/70 hover:shadow-lg/70 rounded-2xl w-1/4">
                            <div className="flex flex-col gap-3">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="button-media">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    <div className="hover:text-shadow-lg/20">
                                        Instagram
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="button-media">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                    <div className="hover:text-shadow-lg/20">
                                        Linkedin
                                    </div>
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="button-media">
                                        <FontAwesomeIcon icon={faTwitter} size="2x"/>
                                    <div className="hover:text-shadow-lg/20">
                                        Twitter
                                    </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center mt-10 gap-5 text-sm lg:text-lg">
                            <div className="flex flex-col items-center w-1/3 bg-slate-200 p-5 shadow-md/70 hover:shadow-lg/70 rounded-2xl">
                                <h3 className="font-semibold">Portofolio:</h3>
                                <ul className="">
                                    <li>Website E-Commerce - React & Firebase</li>
                                    <li>Aplikasi To-Do - JavaScript</li>
                                    <li>Company Profile - HTML & Tailwind</li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center w-1/3 h-full bg-slate-200 p-5 shadow-md/70 hover:shadow-lg/70 rounded-2xl">
                                <div className="flex justify-start items-start font-semibold">
                                    <h3 >Skills:</h3>
                                </div>
                                <div>
                                    <ul className="">
                                        <li>React</li>
                                        <li>Tailwind CSS</li>
                                        <li>REST API</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="flex flex-col gap-5 w-1/3 h-full bg-slate-200 p-5 shadow-md/70 hover:shadow-lg/70 rounded-2xl">
                                <p className="mt-2 ">Location: Jakarta</p>
                                <p className="">Bio: Seorang developer React yang antusias membangun UI modern.</p>
                            </div>
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