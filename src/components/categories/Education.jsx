import React from 'react'

function Education() {
    return (
        <div className='mt-2 mb-2 justify-items-center place-items-center content-center '>
            <a 
            href='http://www.iem.ihu.gr/'
            className='bg-gradient-to-b from-slate-200 to-slate-500 rounded-lg flex flex-row w-56'>
                <img
                    className='h-16 w-16 ml-2 mt-2 mb-2 rounded-lg '
                    src='https://studyingreece.edu.gr/wp-content/uploads/2021/05/International_Hellenic_University_logo.jpg'>
                </img>
                <div className='flex flex-col ml-2'>
                    <text className='text-sm'>Automation Engineer</text>
                    <text className='text-sm'>International Hellenic University</text>
                    <text className='text-sm'>2018-today</text>
                </div>
            </a>
<div className='h-1 w-5 bg-gray-200 mt-2 mb-2 rotate-90 '>

</div>



            <a 
            href='https://skg.education/'
            className='bg-gradient-to-b from-slate-200 to-slate-500 rounded-lg flex flex-row w-60'>
                <img
                    className='h-16 w-16 ml-2 mt-2 mb-2 rounded-lg '
                    src='https://skg.education/wp-content/uploads/2022/04/skg.code_logo_new-edu-1-e1649359344715.png'>
                </img>
                <div className='flex flex-col ml-2'>
                    <text className='text-sm'>Soft Skills for the Workplace </text>
                    <text className='text-sm'> ACTA / SKG-Education</text>
                    <text className='text-sm'>10/2022 - 11/2022 </text>
                </div>
            </a>
            
            <div className='h-1 w-5 bg-gray-200 mt-2 mb-2 rotate-90'/>
            
            <a 
            href='https://michiganassessment.org/michigan-tests/ecpe/'
            className='bg-gradient-to-b from-slate-200 to-slate-500 rounded-lg flex flex-row w-64'>
            
                <img
                    className='h-16 w-16 ml-2 mt-2 mb-2 rounded-lg '
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Seal_of_the_University_of_Michigan.svg/1200px-Seal_of_the_University_of_Michigan.svg.png'>
                </img>
                <div className='flex flex-col ml-2'>
                    <text className='text-sm'>Certiﬁcate of Proﬁciency in English</text>
                    <text className='text-sm'> Michigan University</text>
                    <text className='text-sm'> 2012 </text>
                </div>
            </a>
        </div>
    )
}
export default Education;