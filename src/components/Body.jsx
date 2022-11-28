import React from 'react'
import {
    IoBookOutline,
    IoCafeOutline,
    IoBodyOutline,
    IoBriefcaseOutline,
    IoLaptopOutline,
    IoCodeSlashOutline,
    IoRocketOutline,
    IoAccessibilityOutline
}
    from "react-icons/io5";
import Education from './categories/Education';
import Hobbies from './categories/Hobbies';


import Languages from './categories/Languages';
import Projects from './categories/Projects';
import Skills from './categories/Skills';
import Technologies from './categories/Technologies';






function Body() {


    return (

        
            <div className='mt-5 justify-center items-center flex flex-col '>
                
                <div className='flex flex-row justify-center items-center gap-x-1 '>
                    <IoBookOutline className='mt-0.5' />
                    <text className=''>Education & Certificates</text>
                </div>
                <Education/>

                
                
                
                <div className='flex flex-row gap-x-1'>
                    <IoLaptopOutline className='mt-0.5 ' />
                    <text className=''>Projects</text>
                </div>
                <Projects/>

            
                <div className='flex flex-row gap-x-1 '>
                    <IoCodeSlashOutline className='mt-1' />
                    <text className=''>Programming & Markup Languages</text>
                </div>
                <Languages />

                <div className='flex flex-row gap-x-1'>
                    <IoRocketOutline className='mt-1' />
                    <text className=''>Technologies / Frameworks / OS</text>
                </div>
                <Technologies/>

                <div className='flex flex-row gap-x-1'>
                    <IoAccessibilityOutline className='mt-0.5' />
                    <text className=''>Skills & Qualities</text>
                </div>
                <Skills/>


                <div className='flex flex-row gap-x-1'>
                    <IoCafeOutline className='mt-1' />
                    <text className=''>Hobbies</text>
                </div>
                <Hobbies/>


            </div>

        



    )
}
export default Body;