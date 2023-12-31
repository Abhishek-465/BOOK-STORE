import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between gap-12 items-center'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt=""/>
        </div>
        <div className='md:w-1/2 space-y-6' >
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your Favorite <span className='text-blue-700'>Book here !</span> </h2>
        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vitae dignissimos natus fugiat sapiente, quis rerum. Cupiditate facilis provident eligendi vel voluptatem. Nemo id fugit repudiandae maiores ipsum similique quam!</p>
        
      
        
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div>
                <h3 className='text-3xl font-bold'>800+</h3>
                <p className='text-base'>Book Listing</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold'>600+</h3>
                <p className='text-base'>Register Users</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold'>700+</h3>
                <p className='text-base'>Downloads</p>
            </div>
        </div>
        <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black '>Explore More</button></Link>
        
        </div>

    </div>
  )
}

export default FavBook