import People from '../src/assets/people.png'
function Landing () {
    return (
        <div className="flex flex-row justify-around items-center">
            <p className="text-slate-950 text-[6rem] font-semibold">
                Company <br /> Profile <br /> Website
            </p>
            <div>
                <img src={People} alt="people" className="w-[30rem]" />
            </div>
        </div>
    )
}

export default Landing;