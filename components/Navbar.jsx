import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {

    const [nav,setNav] = useState(false);
    const [color,setColor] = useState('transparent');
    const [textcolor,setTextColor] = useState('white');

    useEffect(() => {
     const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor('#ffffff')
            setTextColor('#000000')
        }else{
            setColor('transparent')
            setTextColor('#ffffff')
        }
     }  
     window.addEventListener('scroll',changeColor); 
    },[]);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div style={{backgroundColor: `${color}`}} className='fixed top-0 left-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <h1 style={{color:`${textcolor}`}} className='font-bold text-4xl'>Capture</h1>
                </Link>

                <ul style={{color:`${textcolor}`}} className='hidden  sm:flex'>
                    <li className='p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/#gallery'>Gallery</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/Work'>Work</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/Contact'>Contact</Link>
                    </li>
                </ul>

                {/* Mobile Buttom */}
                <div onClick={handleNav} className='cursor-pointer block sm:hidden z-10'>
                    {nav ? <AiOutlineClose onClick={handleNav} size={20} /> : <AiOutlineMenu size={20} style={{color:`${textcolor}`}} /> }
                </div>

                {/* Mobile Menu */}
                <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' :'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#gallery'>Gallery</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/Work'>Work</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar