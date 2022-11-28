import React from 'react'


function Intro() {
    
    return(
        <div  
        className=' w-full min-w-max   flex flex-col items-center justify-center    shadow-xl shadow-slate-400 bg-gradient-to-bl from-blue-100 to-slate-500 '>
            <h1 className='text-3xl mt-3 md:text-5xl font-bold'>Christos Tzikos</h1>
            <h2 className='text-xl md:text-lg mb-1 font-bold'>Junior Software Developer</h2>
            <p className='text-lg max-w-xl font-semibold mb-2 '>I am an Automation Engineering student and I am trying to become a full-stack developer.
I am currently looking for my first job/internship as a software
engineer. My goal is to hone my coding skills and work with other
people on inspiring projects.</p>
        </div>

    )
}
export default Intro;