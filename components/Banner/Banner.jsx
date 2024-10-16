import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section id='home' className='banner w-[100vw] h-[100vh] overflow-hidden relative'>
            {/* <Image src={'/images/image1.jpeg'} width={1920} height={100} className='h-[700px] w-[1728px] object-cover md:object-fill banner-img' /> */}
            <div className="relative w-full h-[720px]">
                <Image
                    src="/images/image1.jpeg" 
                    alt="Banner with Gradient"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0"
                />
                <div className="absolute inset-0 z-10 banner-gradient"></div>
         
            </div>
            <div className='box z-[1] max-w-[800px] absolute top-[60%] left-10 translate-y-[-50%] mx-[50px]'>
                <h2 className='text-[25px] md:text-[54px] font-[500] tracking-[1px] leading-[70.2px] mb-[30px] text-[#fff]'>Lorem ipsum dolor sit amet</h2>
                <p className='text-[13px] md:text-[18px] font-[400] leading-[30.6px] text-[#fff]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.
                </p>
            </div>
        </section>
    )
}

export default Banner