import React from 'react'

const Description = () => {

    const description =[
        {
            id:1,
            title:'Lorem ipsum dolor sit amet, consectetur',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.',

        },
        {
            id:2,
            title:'Lorem ipsum dolor sit amet, consectetur',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.',

        },
        {
            id:3,
            title:'Lorem ipsum dolor sit amet, consectetur',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.',

        },
    ]
  return (
    <div className='m-10 mt-32 '>
        <div className='max-w-[903px] h-[206px] mx-8 '>
            <h1 className='font-[400] text-[54px] leading-[68.04px] mb-8'>Lorem Ipsum </h1>
            <span className='font-[400] text-[20px] leading-[34px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum.

            </span>
        </div>

        <div className='flex flex-col md:flex-row md:justify-center items-center mx-8 my-10 gap-[10px]'>
            
            {
                description.map((des)=>(
                    <div key={des.id} className={`${des.id === 3 ? 'bg-[#002A3A] text-white': 'bg-[#ECFAFF] text-black'}  w-[496px] h-[519px] rounded-md flex flex-col justify-start p-10 gap-10`}>
                       <span className={`font-[600] text-[36px] leading-[39px]`}>0{des.id}</span>
                       <hr  />
                       <h2 className='font-[600] text-[28px] leading-[35.28px]'>{des.title}</h2>
                       <span>{des.content}</span>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Description