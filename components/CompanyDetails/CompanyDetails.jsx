import Image from 'next/image'
import React from 'react'

const CompanyDetails = () => {
    return (
        <section id='company' className='my-20 relative'>
            <div class="background-container">
            </div>
            <div className='absolute top-[10%] left-[30%] md:top-[15%] md:left-[10%] md:flex-row flex flex-col gap-10  md:gap-32 justify-center items-center'>
                <div className='md:w-[741px] md:h-[418px] w-[300px] h-[400px] '>
                    <h2 className='font-[500] text-[12px] md:text-[54px] leading-[66.42px] mb-10'>
                        Lorem Ipsum dolor sit consectetur
                    </h2>
                    <span className='font-[400] text-[10px] md:text-[20px] leading-[34px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum.
                    </span>
                </div>
                <div className='md:w-[400px] md:h-[500px] w-[300px] h-[400px] bg-[#fff] rounded-[14px] px-2 shadow-lg border'>
                     <h2 className='text-start font-[500] text-[29px] leading-[31.9px] p-10'>Lorem Ipsum?
                     </h2>
                     <div className='details relative'>
                        <Image src={'/images/graduation.png'} width={512} height={527} className='rounded-[14px]' />
                        <div className='absolute bottom-3 px-5'>
                             <h3 className='font-[500] text-[12px] md:text-[29px] leading-3 md:leading-[31.9px] mb-4'>Lorem Ipsum</h3>
                             <span className='font-[400] text-[10px] md:text-[16px] leading-[27.2px] pb-2'>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                             </span>
                        </div>
                     </div>
                </div>
            </div>

        </section>
    )
}

export default CompanyDetails