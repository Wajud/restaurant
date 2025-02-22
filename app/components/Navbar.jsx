"use client"
import React, {useState} from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {

    const pathName = usePathname()

    const links = [
        {
        name: "Home",
        href: "/"
    },
        {
        name: "Foods",
        href: "/foods"
    },
        {
        name: "Drinks",
        href: "/drinks"
    },
]
  return (
    <div className='text-red-600 text-lg font-semibold flex gap-8 justify-end pr-8 py-4 bg-white'>
        {
            links.map(
                link=>(
                    <Link href={link.href} key={link.name} className={pathName === link.href ? 'relative before:absolute before:left-0 before:bottom-[-3px] before:bg-red-500 before:py-[1px] before:w-full':""}>{link.name}</Link>
                )
            )
        }
    </div>
  )
}

export default Navbar