import React from 'react'
import bookPic from '../../assets/awardbooks.png'

const PromoBanner = () => {
    return (
        <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12'>
                {/* picture */}
                <div>
                    <img src={bookPic} alt="" className='w-96' />
                </div>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl font-bold mb-6 leading-snug'>2023 National Book Awards for Fiction Shortlist</h2>
                    <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 '>Explore Now</button>
                </div>
            </div>
        </div>
    )
}

export default PromoBanner