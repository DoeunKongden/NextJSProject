import React, { useState } from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'
import { FaArrowCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

function ImageSlider({ slides }) {

    const [current, setCurrent] = useState(0);
    const lenght = slides.lenght

    const nextSlide = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? lenght - 1 : current + 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div id='gallery' className='max-w-[1240px] mx-auto'>
            <h1 className='text-2xl font-bold text-center'>Gallery</h1>
            <div className='relative flex justify-center p-4'>
                <div>
                    {SliderData.map((slide, index) => {
                        return (
                            <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0 '}>

                                <FaArrowCircleLeft size={50} onClick={prevSlide} className='absolute top-[50%] left-[40px] text-white/70 cursor-pointer select-none z-[2] ' />
                                {index === current && (
                                    <Image src={slide.image} alt="/" width='1440' height='600' objectFit='cover' />
                                )}
                                <FaArrowAltCircleRight onClick={nextSlide} size={50} className='absolute top-[50%] right-[40px] text-white/70 cursor-pointer select-none z-[2] ' />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ImageSlider