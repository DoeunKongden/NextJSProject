import Image from 'next/image'
import React from 'react'

function Portfolio() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Travel Photo</h1>
      <div className='grid grid-rows-2 gap-2 md:grid-cols-5 p-4 md:gap-2'>
          <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
            <Image src='https://images.unsplash.com/photo-1670969548019-18ec1aae8abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='/'
              layout='responsive'
              width='677'
              height='351'
            />
          </div>
          <div className='w-full h-full '>
            <Image src='https://images.unsplash.com/photo-1662727248669-c5308ee2299e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='/'
              layout='responsive'
              width='215'
              height='217'
              objectFit='cover'
            />
          </div>
          <div className='w-full h-full'>
            <Image src='https://images.unsplash.com/photo-1670969542635-5a3b03dd4121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='/'
              layout='responsive'
              width='215'
              height='217'
              objectFit='cover'
            />
          </div>
          <div className='w-full h-full'>
            <Image src='https://images.unsplash.com/photo-1633974893032-aea04d1d17cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='/'
              layout='responsive'
              width='215'
              height='217'
              objectFit='cover'
            />
          </div>
          <div className='w-full h-full'>
            <Image src='https://images.unsplash.com/photo-1662727248641-14d485bf564f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='/'
              layout='responsive'
              width='215'
              height='217'
              objectFit='cover'
            />
          </div>
      </div>
    </div>
  )
}

export default Portfolio