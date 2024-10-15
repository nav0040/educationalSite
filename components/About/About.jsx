import Image from 'next/image'
import React from 'react'
import { FaPlay } from "react-icons/fa";

const About = () => {
    return (
        <section id='about' className='my-12'>
            <div className='flex justify-center'>
                <div className="relative w-[80%] h-[28rem] overflow-hidden rounded-[1rem]">
                    <Image
                        src={'/images/Home2.jpeg'}
                        alt="Image with Overlay"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-0 "
                    />

                    <div className="absolute inset-0 z-10 custom-gradient-overlay"></div>
                    <div className='absolute top-44 left-20 flex flex-col gap-6'>
                        <div className='bg-white w-[50px] h-[50px]  flex justify-center items-center shadow-md rounded-full'>
                            <FaPlay className=' ' />
                        </div>
                        <h1 className='font-[500] text-white text-[20px] md:text-[38px] leading-[41.8px]'>Lorem ipsum dolor sit amet.</h1>
                        <div>
                            <span className='font-[500] text-white text-[25.98px] leading-[28.58px]'>Sanchez Alexis</span>
                            <p className='font-[400] text-white text-[19.99px] leading-[21.98px]'>CEO & Founder of Demo</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex md:flex-row flex-col justify-center  items-center my-6'>
                <div className='w-[500px] md:w-[823px] h-[534px] px-16'>
                    <h1 className='font-[500] text-[18px] md:text-[54px] leading-[72.9px]'>Lorem ipsum dolor sit amet, consectetur </h1>
                    <p className='font-[400] md:text-[20px] text-[12px] leading-[34px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue. Praesent auctor, purus non convallis accumsan, nibh odio gravida felis, vitae mollis massa lectus a neque. Mauris mollis elit quis iaculis iaculis. Vestibulum molestie nisl eget aliquet scelerisque. Vivamus efficitur dui eget velit interdum, non dapibus nisi fringilla. Mauris fermentum venenatis volutpat. Quisque efficitur ultricies erat eget rutrum. Phasellus feugiat quam eget est dapibus, non eleifend justo fermentum. Sed et commodo arcu, id euismod dui.
                    </p>
                </div>
                <div className='w-[590px] h-[429px] flex flex-col gap-16 md:px-5 px-12'>
                    <div className='border-l-4 px-8 border-black'>
                        <h3 className='font-[500] text-[17px] md:text-[26px] leading-[37.18px]'>Lorem ipsum</h3>
                        <p className=' text-[12px] md:text-[18px] leading-[25.74px] font-[400]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem.
                        </p>
                    </div>
                    <hr />
                    <div className='border-l-4 px-8 border-black'>
                        <h3 className='font-[500] text-[17px] md:text-[26px] leading-[37.18px]'>Lorem ipsum</h3>
                        <p className=' md:text-[18px] text-[12px] leading-[25.74px] font-[400]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About