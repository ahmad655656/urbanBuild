import React from 'react'
import { RiPhoneFill, RiMailFill } from 'react-icons/ri'
import Socials from './Socials'
const TopBar = () => {
  return (
    <section className='py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#ffc221] to-[#ffd76e] flex items-center '>
      <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
    <div className='flex hidden xl:flex items-center gap-8'>
     <div className='flex items-center gap-3'>
          <div className='w-8 h-8 bg-primary flex items-center text-white justify-center'>
            <RiPhoneFill />
          </div>
          <p className='font-medium text-primary'>(+963) 983 796 029</p>
        </div>
        <div className="flex items-center gap-3">
        <div className='w-8 h-8 bg-primary flex items-center text-white justify-center'>
            <RiMailFill />
          </div>
          <p className='font-medium text-primary'>haedarahasan69@gmail.com</p>
        </div>
        {/* socials */}
     </div>
        <Socials containerStyles={"flex items-center gap-8 mx-auto xl:mx-0 "} iconStyles={"text-primary"}   />
    </div>
      </div>
    </section>
  )
}

export default TopBar