import React from 'react'
import DataEducation from '../data/DataEducation';

function Education() {
    return (
        
            DataEducation.map(course => (
                <div className='mt-2 mb-2 flex flex-col '>


                    <a
                        href={course.link}
                        className='bg-gradient-to-b from-slate-200 to-slate-500 rounded-lg flex flex-row w-56 hover:shadow-2xl'>
                        <img
                            className='h-16 w-16 ml-2 mt-2 mb-2 rounded-lg '
                            src={course.imgUrl}>
                        </img>
                        <div className='flex flex-col ml-2'>
                            <text className='text-sm'>{course.title}</text>
                            <text className='text-sm'>{course.desc}</text>
                            <text className='text-sm'>{course.time}</text>
                        </div>
                    </a>

                </div>
            ))
        
    )

}
export default Education;