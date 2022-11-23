import React from 'react'
import {
    IoLogoPython, IoLogoReact,
}
    from "react-icons/io5";
import { SiAndroidstudio } from 'react-icons/si';
import DataProjects from '../data/DataProjects';





function Projects() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
        {DataProjects.map(project => (

            <a


                href={project.link}

                className=' rounded-lg bg-gradient-to-t from-slate-200 to-slate-500 flex-col flex '>

                <text className='absolute text-xs mt-2 ml-2'>{project.language} </text>
                <img
                    className='h-22 w-52 ml-1 mr-1 mt-2 mb-2  '
                    src={require(project.imgUrl)}>
                </img>




                <div className='flex flex-col ml-2'>
                    <text className='text-sm'> {project.title} </text>
                    <text className='text-sm'>{project.desc}</text>
                    <text className='text-sm'>{project.time}</text>
                </div>


            </a>



            ))}
        </div>
    )
}
export default Projects;