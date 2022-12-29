import Image from 'next/image'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

function Instagramming({ socialImg }) {
    return (
        <div className='relative'>
            <Image className='w-full h-full' layout='responsive' width='100' height='100' src={socialImg} />
            {/*Overlay*/}
            <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50'>
                <p className='text-gray-300 group-hover:block'><FaInstagram size={30} /></p>
            </div>
        </div>
    )
}

export default Instagramming