import People from '../src/assets/people.png'
import { Link } from 'react-router-dom';
function Landing () {
    return (
        <div className="flex flex-row justify-around items-center">
            <div className='flex justify-center flex-col gap-6'>
                <div className='text-slate-950 text-[2rem] md:text-[5rem] font-semibold'>
                    <p>Company</p>
                    <p>Employee</p>
                    <p>Profile</p>
                </div>
                <Link 
                    to={'/register'}
                    className='flex justify-center items-center py-2 w-28 md:w-44 text-sm md:text-lg rounded-sm md:rounded-lg hover:cursor-pointer text-white bg-green-900 hover:bg-green-700'
                >
                    <p>Register →</p>
                </Link>
                
            </div>
            <div>
                <img src={People} alt="people" className="w-[12rem] md:w-[30rem]" />
            </div>
        </div>
    )
}

export default Landing;