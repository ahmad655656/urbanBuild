'use client'
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import { RiMenuFill } from 'react-icons/ri'
import Logo from './Logo'
import Socials from './Socials'
import { Link as ScrollLink } from "react-scroll"
const links = [
    {
      name: "home",
      path: "home",
    },
    {
      name: "about",
      path: "about",
    },
    {
      name: "services",
      path: "services",
    },
    {
      name: "projects",
      path: "projects",
    },
    {
      name: "contact",
      path: "contact",
    },
  ];
const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger onClick={() => setIsOpen(true)} className='text-white flex items-center justify-center text-3xl'>
    <RiMenuFill />
        </SheetTrigger>
        <SheetContent className="bg-primary border-none text-white">
            <div className='flex flex-col pt-16 pb-8 items-center justify-between h-full'>
                <SheetHeader>
                    <SheetTitle><Logo /></SheetTitle>
                    <SheetDescription className="sr-only  "></SheetDescription>
                </SheetHeader>
                <ul className='w-full flex flex-col items-center justify-center gap-10'>
                    {links.map((link, index) => {
                        return <li className='text-white uppercase font-primary font-medium tracking-[1.2px] ' key={index}>
                            <ScrollLink to={link.path} smooth spy className="cursor-pointer" activeClass='text-accent' onClick={() => setIsOpen(false)
                            } duration={500}>
                            {link.name}
                            </ScrollLink>
                        </li>
                    })}
                </ul>
                <Socials containerStyles={"text-white text-xl flex gap-6"} />
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default NavMobile