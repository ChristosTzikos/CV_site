import React from 'react'
import {
    IoLogoPython, IoLogoReact,
}
    from "react-icons/io5";
import { SiAndroidstudio } from 'react-icons/si';



function handleClick() {

    window.location.href = 'https://www.youtube.com/';
}

function Projects() {
    return (
        <div className='mt-2 mb-2 justify-items-center place-items-center flex flex-row '>
            <button

                onClick={handleClick}

                className=' rounded-lg bg-gradient-to-t from-slate-200 to-slate-500 flex-col flex '>
                
                <IoLogoPython className='mt-2 ml-1 absolute ' /> 
                    <img
                        className='h-22 w-52 ml-1 mr-1 mt-2 mb-2  '
                        src='src/assets/robot.png'>
                    </img>

                   
                

                <div className='flex flex-col ml-2'>
                    <text className='text-sm'> Simple Robot Project </text>
                    <text className='text-sm'>International Hellenic University</text>
                    <text className='text-sm'>10/2021-1/2022</text>
                </div>


            </button>

            <div className='h-1 w-5 bg-gray-600  ' />



            <button

                onClick={handleClick}
                className='bg-gray-200 rounded-lg bg-gradient-to-t from-slate-200 to-slate-500 '>
                <SiAndroidstudio className='absolute mt-2 ml-2'/>
                <img
                    className='h-22 w-52 ml-2 mr-1 mt-2 mb-2 '
                    src='src/assets/homezy.png'>
                </img>
                
                <div className='flex flex-col ml-2'>
                    <text className='text-sm'>Homeazy (Frontend Android App)</text>
                    <text className='text-sm'>SKG Code</text>
                    <text className='text-sm'>10/2022-11/2022</text>
                </div>


            </button>

            <div className='h-1 w-5 bg-gray-600 ' />

            <button className='rounded-lg bg-gradient-to-t from-slate-200 to-slate-500'>
            <IoLogoReact className='absolute ml-2 mt-2'/>
                <img
                    className='h-22 w-52 ml-2 mr-1 mt-2 mb-2  '
                    src='src/assets/christos.png'>
                </img>
                <div className='flex flex-col ml-2'>
                    <text className='text-sm'>CV Website</text>
                    <text className='text-sm'>React Js Project</text>
                    <text className='text-sm'>11/2022</text>
                </div>


            </button>
        </div>
    )
}
export default Projects;