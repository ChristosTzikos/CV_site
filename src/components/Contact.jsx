import React from 'react'
import { IoLogoGithub, IoLogoGoogle, IoLogoLinkedin } from 'react-icons/io5';

function Contact() {
    return (
        <div className='flex items-center justify-center flex-col'>
        <text className='text-xl font-semibold underline-offset-1 underline text-center '> Contact Me </text>
            <div className='mt-5 flex flex-row gap-x-4'>
                <a
                href='https://github.com/ChristosTzikos'>
                <IoLogoGithub
                    
                    size={50}
                    className='bg-gradient-to-t from-slate-500 to-slate-200 rounded-full' />
                    </a>
                <a
                href='https://www.linkedin.com/in/christos-tzikos-07ab08257/'
                >
                <IoLogoLinkedin
                    size={50}
                    className='bg-gradient-to-t from-slate-500 to-slate-200 rounded-full'

                />
                </a>

            </div>
            <form
                method='POST'
                className='mt-5 flex flex-col w-full md:w-3/12'
            >
                
                <input
                    name='name'
                    type="text"
                    placeholder='Name'
                    className='mt-1 row-end-7 cursor-text border-4 rounded-md bg-transparent focus:outline-none ' />
                <input
                    name='email'
                    placeholder='Email'
                    className=' mt-1  row-end-7 cursor-text border-4 rounded-md bg-transparent focus:outline-none' />
                <textarea
                    name='message'
                    placeholder='Message'
                    rows='10'
                    className='mt-1 row-end-7 cursor-text border-4 rounded-l bg-transparent focus:outline-none'
                />
                <button

                    type='button'
                    className='text-center text-white
                 mt-1 shadow-yellow-100 shadow-md
                rounded-lg w-32
                bg-gradient-to-r from-yellow-200 to-orange-500 
            
                '
                >
                    GET IN TOUCH
                </button>
            </form>


        </div>

    )
}
export default Contact;