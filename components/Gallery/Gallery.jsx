import Image from 'next/image'
import React from 'react'

const Gallery = () => {

    
    return (
        <section id='gallery' className='bg-[#F2F2F2] p-10 py-20'>
            <div className='flex justify-center flex-col items-start mx-10'>
                <h1 className='font-[500] text-[25px] md:text-[54px] leading-[60.9px] my-10'>Lorem ipsum dolor sit amet, <br /> consectetur</h1>
                <div className='flex md:flex-row flex-col gap-10'>
                    <div className='flex flex-col gap-10'>
                        <div className='relative'>
                            <Image src={'/images/gallery1.jpeg'} width={750} height={363} className='rounded-[12px] w-[360px] h-[400px] md:h-auto md:w-auto object-cover' />
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-transparent to-transparent rounded-[12px]"></div>

                            <div className='absolute inset-0 top-[45%] md:top-[60%] z-20 text-white p-4'>
                                <h2 className='md:text-2xl text-[16px] font-bold'>Consectetur adipiscing elit</h2>
                                <span className='block font-[300] text-white mt-2 md:text-[18px] text-[14px]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.
                                </span>
                            </div>
                        </div>

                        <div className='relative'>
                            <Image src={'/images/gallery3.jpeg'} width={748} height={295} className='rounded-[12px] w-[360px] h-[400px]  md:w-auto  md:h-[370px] object-cover' />

                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-transparent to-transparent rounded-[12px]"></div>

                            <div className='absolute inset-0 top-[57%] md:top-[60%] z-20 text-white p-4'>
                                <h2 className=' md:text-2xl text-[16px] text-2xl font-bold'>Consectetur adipiscing elit</h2>
                                <span className='block font-[300] text-white mt-2 md:text-[18px] text-[12px]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='relative'>
                            <Image src={'/images/gallery2.jpeg'} width={748} height={295} className='rounded-[12px] w-[360px] h-[400px] md:h-auto md:w-auto object-cover' />

                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-transparent to-transparent rounded-[12px]"></div>

                            <div className='absolute inset-0 top-[35%] md:top-[60%] z-20 text-white p-4'>
                                <h2 className='md:text-2xl text-[16px] text-2xl font-bold'>Consectetur adipiscing elit</h2>
                                <span className='block font-[300] text-white mt-2 md:text-[18px] text-[14px]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.
                                </span>
                            </div>
                        </div>

                        <div className='relative'>
                            <Image src={'/images/gallery4.jpeg'} width={750} height={363} className='rounded-[12px] w-[360px] h-[400px] md:h-auto md:w-auto object-cover' />

                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-transparent to-transparent rounded-[12px]"></div>

                            <div className='absolute inset-0 top-[45%] md:top-[60%] z-20 text-white p-4'>
                                <h2 className='md:text-2xl text-[16px] text-2xl font-bold'>Consectetur adipiscing elit</h2>
                                <span className='block font-[300] text-white mt-2 md:text-[20px] text-[14px]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery