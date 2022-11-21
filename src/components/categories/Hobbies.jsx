import React from 'react'

import {GiGuitarHead} from  "react-icons/gi"

import {IoGameController , IoFootballOutline , } from "react-icons/io5"

import {HiDesktopComputer} from "react-icons/hi"

import {FaChess} from "react-icons/fa"

function Hobbies(){
    return(
        <div className='flex flex-row gap-x-3 mt-2 mb-2 color-black'>
            <GiGuitarHead size='40'/>
            <HiDesktopComputer size='40'/>
            <IoFootballOutline size='40'/>
            <IoGameController size='40'/>
            <FaChess size='40'/>
        </div>
    )
}
export default Hobbies;