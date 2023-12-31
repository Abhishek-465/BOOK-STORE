
'use client';

import { Card } from 'flowbite-react';
import pic from "../assets/banner-books/book1.png"
import pic1 from "../assets/banner-books/book2.png"
import pic2 from "../assets/banner-books/book3.png"

function About() {
  return (
    <div className='flex flex-col justify-center items-center lg:mt-[60px] bg-teal-100 pb-4'>
    <Card className="max-w-sm my-4" imgSrc={pic} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    <Card className="max-w-sm my-4" imgSrc={pic1} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    <Card className="max-w-sm my-4" imgSrc= {pic2} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>

    </div>
  );
}
export default About
