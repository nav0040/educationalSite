'use client'

import React, { useState } from 'react'
import { GiHiking } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
const categories =[
    { name:"About Us",link:'#'},
    { name:'How We Help',link:"#trending"},
    { name:"Pricing",link:"#destinations"},
    { name:'Portfolios',link:'#portfolios'},
    { name:'Testimonials',link:'#testimonial'},
    { name:'Insights',link:'#insights'},


]
const Header = () => {
    const [visible, setVisible] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [id, setId] = useState('home');
  return (
    <header
    style={{ background: visible || showMenu ? 'var(--bg-main)':'transparent',
        boxShadow: visible ? '2px 20px 30px var(--shadow-color)':'none'
     }} 
     className='w-[100%] fixed top-0 left-0 z-[100] select-none transition-all ease-in-out-[0.3s]'

    >
        <nav className='w-[100%] max-w-[--max-width] flex justify-around  items-center mx-auto py-[15px] px-[25px]'>
            <Link href={'#'} className='logo flex items-center gap-3 text-[2.6rem] font-[700]'>
             <Image src='/images/image2.png' width={134} height={42}/>
            </Link>
            <div className='menu_btn' onClick={()=> setShowMenu(value => !value)}>
            { showMenu ? <IoMdClose /> : <CiMenuFries /> } 
            </div>
            <ul className='flex justify-center items-center ' style={{ height: showMenu ? 400 : 0}}>
                {
                  categories.map(category => (
                    <li key={category.name}>
                        <Link href={category.link} className={`text-[0.9rem] text-white mx-[12px] transition-all ease-[0.3s] capitalize ${id === category.name ? 'active':''}`}>
                          {category.name}
                        </Link>
                         
                    </li>
                  ))
                }
            </ul>
            <button className='hidden md:block bg-white rounded-md px-5 py-3'>Contact Us</button>
        </nav>
        
    </header>
  )
}

export default Header