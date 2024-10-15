import React from 'react'

const Clients = () => {
  return (
    <div className='md:flex flex flex-col m-10 justify-center items-center gap-16 my-16'>
        <div className='md:border-r-2 px-8  flex flex-col justify-center items-center gap-5'>
            <h2 className='font-[600] text-[54px] leading-[37.8px]'>8Years</h2>
            <span className='font-[400] text-[34px] leading-[41.4px]'>of Success</span>
        </div>

        <div className='md:border-r-2  px-8  flex flex-col justify-center items-center gap-5'>
            <h2 className='font-[600] text-[54px] leading-[37.8px]'>200+</h2>
            <span className='font-[400] text-[34px] leading-[41.4px]'>Members</span>
        </div>

        <div className='md:border-r-2 px-8 flex flex-col justify-center items-center gap-5'>
            <h2 className='font-[600] text-[54px] leading-[37.8px]'>155+</h2>
            <span className='font-[400] text-[34px] leading-[41.4px]'>All Over The USA</span>
        </div>

        <div className='flex flex-col justify-center items-center gap-5'>
            <h2 className='font-[600] text-[54px] leading-[37.8px]'>200k</h2>
            <span className='font-[400] text-[34px] leading-[41.4px]'>Satisfied Clients</span>
        </div>
    </div>
  )
}

export default Clients