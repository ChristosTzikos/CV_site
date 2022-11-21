import React from 'react'

function Contact() {
    return (
        <div className='flex items-center justify-center flex-col'>
            <form
                method='POST'
                className='flex flex-col w-full md:w-3/12'
            >
                <text className='text-xl font-semibold underline-offset-1 underline text-center '> Contact Me </text>
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
                    rows = '10'
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