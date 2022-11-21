import React from 'react'



function handleClick(){
    
    window.location.href = 'https://www.youtube.com/';
}

function Projects() {
    return (
        <div className='mt-2 mb-2 justify-items-center place-items-center flex flex-row '>
            <button 
            
            onClick={handleClick}
            
            className=' rounded-lg bg-gradient-to-t from-slate-200 to-slate-500 '>
                <img
                    className='h-16 w-32 ml-2 mt-2 mb-2 rounded-lg '
                    src='https://studyingreece.edu.gr/wp-content/uploads/2021/05/International_Hellenic_University_logo.jpg'>
                </img>
                <div className='flex flex-col ml-2'>
                    <text className='text-sm'>Automation Engineer</text>
                    <text className='text-sm'>International Hellenic University</text>
                    <text className='text-sm'>2018-today</text>
                </div>


            </button>

            <div className='h-1 w-5 bg-gray-600  ' />



            <button 
            
            onClick={handleClick}
            className='bg-gray-200 rounded-lg bg-gradient-to-t from-slate-200 to-slate-500 '>
                <img
                    className='h-16 w-32 ml-2 mt-2 mb-2 rounded-lg  '
                    src='https://studyingreece.edu.gr/wp-content/uploads/2021/05/International_Hellenic_University_logo.jpg'>
                </img>
                <div className='flex flex-col ml-2'>
                    <text className='text-sm'>Automation Engineer</text>
                    <text className='text-sm'>International Hellenic University</text>
                    <text className='text-sm'>2018-today</text>
                </div>


            </button>

            <div className='h-1 w-5 bg-gray-600 ' />

            <button className='rounded-lg bg-gradient-to-t from-slate-200 to-slate-500'>
                <img
                    className='h-16 w-32 ml-2 mt-2 mb-2 rounded-lg '
                    src='https://studyingreece.edu.gr/wp-content/uploads/2021/05/International_Hellenic_University_logo.jpg'>
                </img>
                <div className='flex flex-col ml-2'>
                    <text className='text-sm'>Automation Engineer</text>
                    <text className='text-sm'>International Hellenic University</text>
                    <text className='text-sm'>2018-today</text>
                </div>


            </button>
        </div>
    )
}
export default Projects;