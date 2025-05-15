import People from '../src/assets/people.png'
import { Link } from 'react-router-dom';
function Landing () {
    return (
        <div className='container mx-auto flex flex-col justify-center'>
            <div className="flex flex-row justify-around">
                <div className='flex flex-col justify-between'>
                    <div className='text-slate-950 text-[2rem] md:text-[4rem] font-semibold'>
                        <p>Company</p>
                        <p>Employee</p>
                        <p>Profile</p>
                    <div className='flex flex-col justify-center md:items-center top-1/2 transform translate-y-1/4'>
                        <div className='hidden md:flex md:flex-col items-center'>
                            <h1 class="text-xl font-bold text-gray-800">Meet Our Team</h1>
                            <p class="text-sm text-gray-600 mt-1">Get to know the people behind our success.</p>
                        </div>
                        <Link 
                            to={'/register'}
                            className='flex justify-center items-center py-2 w-20 md:w-35 text-[12px] md:text-lg rounded-sm md:rounded-lg hover:cursor-pointer text-white bg-green-900 hover:bg-green-700 md:mt-4'
                        >
                            <p>Register →</p>
                        </Link>
                    </div>
                    </div>
                    <div className='hidden md:block md:h-1 md:w-[30rem] md:bg-black'>  
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <div className='hidden md:block md:h-1 md:w-[30rem] md:bg-black'>  
                    </div>
                    <img src={People} alt="people" className="w-[12rem] md:w-[30rem]" />
                </div>
            </div>
            <div className='md:hidden flex flex-col justify-center items-center mt-20'>
                <h1 class="text-xl font-bold text-gray-800">Meet Our Team</h1>
                <p class="text-sm text-gray-600 mt-1">Get to know the people behind our success.</p>
            </div>
        </div>
    )
}

export default Landing;