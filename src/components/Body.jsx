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

        <div className='flex mt-4   text-lg justify-center self-center'>
            <div className=' flex flex-col md-flex-row '>
                <div className='flex flex-row'>
                    <IoBookOutline className='mt-1' />
                    <text className=''>Education & Certificates</text>
                </div>
                <Education/>

                <div className='flex flex-row'>
                    <IoLaptopOutline className='mt-1' />
                    <text className=''>Projects</text>
                </div>
                <Projects/>

                







                <div className='flex flex-row'>
                    <IoCodeSlashOutline className='mt-1' />
                    <text className=''>Programming & Mockup Languages</text>
                </div>
                <Languages />

                <div className='flex flex-row'>
                    <IoRocketOutline className='mt-1' />
                    <text className=''>Technologies / Frameworks / OS</text>
                </div>
                <Technologies/>

                <div className='flex flex-row'>
                    <IoAccessibilityOutline className='mt-1' />
                    <text className=''>Skills & Qualities</text>
                </div>
                <Skills/>


                <div className='flex flex-row'>
                    <IoCafeOutline className='mt-1' />
                    <text className=''>Hobbies</text>
                </div>
                <Hobbies/>


            </div>

        </div>



    )
}
export default Body;