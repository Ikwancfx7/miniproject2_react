import People from '../src/assets/people.png'
import { Link } from 'react-router-dom';
import Partner1 from '../src/assets/partner1.png'
import Partner2 from '../src/assets/partner2.png'
import Partner3 from '../src/assets/partner3.jpg'
import Partner4 from '../src/assets/partner4.png'
import Partner5 from '../src/assets/partner5.jpg'

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
            <div className="mt-18 md:hidden flex flex-col justify-center gap-1 items-center px-6">
                <h1 className='text-xl font-bold text-gray-800 mb-1'>Our Partner:</h1>
                <div className='flex flex-row justify center items-center gap-2'>
                    <img src={Partner1} alt="Partner 1" className="partner" />
                    <img src={Partner2} alt="Partner 2" className="partner" />
                    <img src={Partner3} alt="Partner 3" className="partner" />
                    <img src={Partner4} alt="Partner 4" className="partner" />
                    <img src={Partner5} alt="Partner 5" className="partner" />
                </div>
            </div>
        </div>
    )
}

export default Landing;