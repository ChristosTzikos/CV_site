import React from 'react'
import {
    IoLogoPython, IoLogoReact,
}
    from "react-icons/io5";
import { SiAndroidstudio } from 'react-icons/si';
import DataProjects from '../data/DataProjects';





function Projects() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 max-w-4xl ' >
        {DataProjects.map(project => (

            <a


                href={project.link}

                className=' rounded-lg bg-gradient-to-t from-slate-200 to-slate-600 flex-col flex hover:shadow-2xl '>

                
                <img
                    className='w-full mt-2 mb-2 md:h-32 object-cover cursor-pointer rounded-xl '
                    src={project.imgUrl}
                    alt={project.language} 
            
                    
                    >
                </img>




                <div className='flex flex-col ml-2 '>
                    <h3 className='text-lg' > {project.title} </h3>
                    <text >{project.desc}</text>
                    <text >{project.time}</text>
                </div>


            </a>



            ))}
        </div>
    )
}
export default Projects;