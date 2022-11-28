import React from 'react'
import { 
    IoLogoReact,
    IoLogoGithub

} 
from 'react-icons/io5';

import { 
    SiAndroidstudio,
    SiVisualstudiocode,
    SiLinux, 
    SiZorin,
    SiTailwindcss

 }
  from 'react-icons/si';


function Technologies (){
    return(
        <div className='flex flex-row gap-x-3 mt-2 mb-2'>
            <IoLogoReact size='42'/>
            <SiAndroidstudio size='40'/>
            <SiTailwindcss size='40'/>
            <SiVisualstudiocode size='40'/>
            <IoLogoGithub size='40'/>
            <SiLinux size='40'/>
            <SiZorin size='40'/>
        </div>
    )
}
export default Technologies;