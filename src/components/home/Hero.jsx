import BackToTop from '@/components/common/BackToTop'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='flex items-center justify-center mt-[50px]'>
        <Link href="/about">
          <button className='border-2 p-[15px_40px] border-green-600 bg-green-500 hover:border-green-500 hover:bg-green-600 duration-300 text-white font-extrabold text-3xl'>Email Js</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero