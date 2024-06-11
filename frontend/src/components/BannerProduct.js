import React, { useEffect, useState } from 'react'
import image1 from '../assest/banner/images-1.webp'
import image2 from '../assest/banner/image-2.png'
import image3 from '../assest/banner/images-3.webp'
import image4 from '../assest/banner/images-4.webp'
import image5 from '../assest/banner/images-5.webp'

import image1Mobile from '../assest/banner/images-1.webp'
import image2Mobile from '../assest/banner/image-2.png'
import image3Mobile from '../assest/banner/images-3.webp'
import image4Mobile from '../assest/banner/images-4.webp'
import image5Mobile from '../assest/banner/images-5.webp'

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {
    const [currentImage, setCurrentImage] = useState(0)

    const desktopImages = [
        image1,
        image2,
        image3,
        image4,
        image5
    ]

    const mobileImages = [
        image1Mobile,
        image2Mobile,
        image3Mobile,
        image4Mobile,
        image5Mobile
    ]

    const nextImage = () => {
        if (currentImage < desktopImages.length - 1) {
            setCurrentImage(currentImage + 1)
        } else {
            setCurrentImage(0)
        }
    }

    const preveImage = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1)
        } else {
            setCurrentImage(desktopImages.length - 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(nextImage, 5000)
        return () => clearInterval(interval)
    }, [currentImage])

    return (
        <div className='container mx-auto px-4 rounded'>
            <div className='h-56 md:h-72 w-full bg-slate-600 relative'>
                <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
                    <div className='flex justify-between w-full text-2xl'>
                        <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'>
                            <FaAngleLeft />
                        </button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

                {/** Desktop and tablet version */}
                <div className='hidden md:flex h-full w-full overflow-hidden'>
                    {desktopImages.map((imageURL, index) => (
                        <div
                            className='w-full h-full min-w-full min-h-full transition-transform duration-500 ease-in-out'
                            key={index}
                            style={{ transform: `translateX(-${currentImage * 100}%)` }}
                        >
                            <img src={imageURL} className='w-full h-full object-cover' alt={`slide-${index}`} />
                        </div>
                    ))}
                </div>

                {/** Mobile version */}
                <div className='flex h-full w-full overflow-hidden md:hidden'>
                    {mobileImages.map((imageURL, index) => (
                        <div
                            className='w-full h-full min-w-full min-h-full transition-transform duration-500 ease-in-out'
                            key={index}
                            style={{ transform: `translateX(-${currentImage * 100}%)` }}
                        >
                            <img src={imageURL} className='w-full h-full object-cover' alt={`slide-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BannerProduct
