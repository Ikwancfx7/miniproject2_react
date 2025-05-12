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
                ):  user ? (
                    <div className="">
                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="flex flex-col bg-[rgba(4,144,1,0.2)] p-10 gap-10 shadow-md/70 hover:shadow-lg/70 w-3/4 rounded-2xl">
                                <div className="flex justify-start">
                                    <button onClick={goBack} className="bg-blue-500 hover:bg-blue-800 hover:cursor-pointer text-white font-bold py-1 px-3 rounded">← Back</button>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-5 w-full max-w-4xl text-slate-950" key={user.id}>
                                    <div className="drop-shadow-xl/80">
                                        <img src={user.avatar} alt={user.first_name} className="rounded-full w-36 h-36 object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-1 text-center md:text-left">
                                        <p className="font-bold text-lg lg:text-2xl">{user.first_name} {user.last_name}</p>
                                        <p className="italic text-sm"><strong>Email: </strong>{user.email}</p>
                                        <p className="text-sm">"{support.text}"</p>
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
                            <div className="flex flex-col justify-center items-center gap-5 bg-[rgba(4,144,1,0.2)] p-5 shadow-md/70 hover:shadow-lg/70 rounded-2xl w-1/4">
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
                        <div className="flex flex-col lg:flex-row items-center mt-5 gap-5 text-sm">
                            <div className="flex flex-col items-center w-1/3 h-36 gap-2 bg-[rgba(4,144,1,0.2)] p-5 shadow-md/70 hover:shadow-lg/70 rounded-2xl">
                                <div>
                                    <h3 className="font-semibold text-lg">Portofolio:</h3>
                                </div>
                                <div>
                                    <ul className="">
                                        <li>Website E-Commerce - React & Firebase</li>
                                        <li>Aplikasi To-Do - JavaScript</li>
                                        <li>Company Profile - HTML & Tailwind</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-1/3 h-36 gap-2 bg-[rgba(4,144,1,0.2)] p-5 shadow-md/70 hover:shadow-lg/70 rounded-2xl">
                                <div className="flex justify-start items-start font-semibold text-lg">
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
                            <div className="flex flex-col items-center w-1/3 h-36 gap-2 bg-[rgba(4,144,1,0.2)] p-5 shadow-md/70 hover:shadow-lg/70 rounded-2xl">
                                <div className="flex justify-start items-start font-semibold text-lg">
                                    <h3>Experience:</h3>
                                </div>
                                <div>
                                    <ul className="">
                                        <li>Google (Alphabet Inc.)</li>
                                        <li>Microsoft</li>
                                        <li>Samsung Electronics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-full gap-1 mt-5 bg-[rgba(4,144,1,0.2)] p-5 shadow-md/70 hover:shadow-lg/70 rounded-2xl">
                            <div>
                                <p className="mt-2"><span className="text-lg font-semibold">Location: </span>Jakarta</p>
                            </div>
                            <div>
                                <p className="text-sm"><span className="text-lg font-semibold">Bio: </span>An enthusiastic React developer focused on building modern and user-friendly interfaces.</p>
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