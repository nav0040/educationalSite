import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
        <div>
            <div className='footer-gradient-bg flex md:flex-row flex-col  justify-between px-36 items-center'>
                <div className='w-[250px] md:w-[771px] md:h-[201px] h-[100px] text-white md:mt-0 mt-7'>
                    <h1 className='font-[500] text-[17px] md:text-[46px] leading-[20px] md:leading-[55.66px] md:mb-10'>Let’s work Together</h1>
                    <span className='font-[300] text-[13px] md:text-[18px] leading-[20px] md:leading-[34.8px]'>Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare tristique euismod rcu tristique nisl id nibh. viverra feugiat viverra.Lorem ipsum dolor sit amet consectetur</span>
                </div>
                <div className='md:my-12 my-14 text-center'>
                    <button className='bg-[#fff] md:px-8  md:py-3 px-20 text-[10px] md:text[15px] font-[500] rounded-md'>View Vacancies</button>
                </div>
            </div>
            <div className='bg-[#002A3A]  pb-10'>
                <div className='flex flex-wrap md:px-0 px-6 justify-center py-10 items-center gap-10 text-white' >
                    <h2 className='font-[500] text-[24px] leading-[36px]'>Quick Links</h2>
                    <span className='font-[300] text-[17px]'>Home</span>
                    <span className='font-[300] text-[17px]'>About Us</span>
                    <span className='font-[300] text-[17px]'>Pricing</span>
                    <span className='font-[300] text-[17px]'>Portfolios</span>
                    <span className='font-[300] text-[17px]'>Insights</span>
                </div>
                <div className='flex md:flex-row flex-col justify-center items-center'>

                    <div className=' border-none md:border text-white border-gray-500 w-[510px] h-[600px] flex flex-col gap-10 justify-center items-center'>
                        <div className='flex justify-center items-center gap-1 bg-[#183b48] px-3 py-4 rounded-md'>
                            <Image src='/images/footer1.png' width={20} height={20} />
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                        <div className='flex justify-center items-center gap-1 bg-[#183b48] px-3 py-4 rounded-md'>
                            <Image src='/images/footer2.png' width={20} height={20} />
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>
                        <div className='flex justify-center items-center gap-1 bg-[#183b48] px-3 py-4 rounded-md'>
                            <Image src='/images/footer3.png' width={20} height={20} />
                            <span>Lorem ipsum dolor sit amet</span>
                        </div>

                    </div>
                    <div className='border-none md:border text-white border-gray-500 md:border-l-0  w-[510px] h-[600px] flex flex-col gap-10 justify-center items-center'>
                        <div className='flex justify-center items-center gap-1 bg-[#183b48] px-3 py-4 rounded-md w-[300px]'>
                            <span>Lorem</span>
                        </div>
                        <div className='flex justify-center items-center gap-1 bg-[#183b48] px-3 py-4 rounded-md w-[300px]'>
                            <span>Ipsum</span>
                        </div>
                        <div className='flex justify-center items-center gap-1 bg-[#183b48] px-3 py-4 rounded-md w-[300px]'>
                            <span>Consectetur</span>
                        </div>
                        <div className='flex justify-center items-center gap-1 bg-[#183b48] px-3 py-4 rounded-md w-[300px]'>
                            <span>Efficitur</span>
                        </div>

                    </div>
                    <div className='border-none md:border border-gray-500 md:border-l-0 text-white   w-[510px] h-[600px] flex  flex-col justify-center items-start'>
                        <div className='flex  flex-col justify-start items-start px-16 gap-7'>
                            <h2 className='font-[500] text-[26px] leading-[15px]'>Contact Us</h2>
                            <span className='font-[300] text-[16px]'>Lorem Ipsum, Iso lorem, <br /> Iso Lorem Posum</span>
                            <div className='flex flex-col'>
                            <span>+91 00000 00000</span>
                            <span>info@demo.com</span>
                            </div>
                            <div className='flex flex-col gap-3'> 
                              <span>Follow us on</span>
                              <div className='flex gap-3'>
                              <FaFacebookF className='bg-[#183b48] text-[35px] px-3 rounded-md '/>
                              <FaXTwitter className='bg-[#183b48] text-[35px] px-3 rounded-md ' />
                              <FaLinkedinIn className='bg-[#183b48] text-[35px] px-3 rounded-md ' />
                              <IoLogoYoutube className='bg-[#183b48] text-[35px] px-3 rounded-md ' />
                              <FaInstagram className='bg-[#183b48] text-[35px] px-3 rounded-md ' />
                              </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='text-white md:px-20 pt-7 text-center '>
                    <span>©{currentYear} Demo. All rights reserved.</span>
                </div>

            </div>
        </div>
    )
}

export default Footer