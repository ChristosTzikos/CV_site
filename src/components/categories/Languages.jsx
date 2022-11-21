import React from 'react'
import {
    IoLogoPython,
    IoLogoJavascript,
    IoLogoHtml5,
    IoLogoCss3,


}
    from "react-icons/io5";

import { SiCplusplus, SiKotlin } from "react-icons/si";

function Languages() {
    return (
        <div className='flex flex-row gap-x-3 mt-2 mb-2'>
            <IoLogoJavascript size='40' />
            <IoLogoHtml5 size='40' />
            <IoLogoCss3 size='40' />
            <IoLogoPython size='40'/>
            <SiCplusplus size='40' />
            <SiKotlin size='40'/>

        </div>
    )
}
export default Languages;