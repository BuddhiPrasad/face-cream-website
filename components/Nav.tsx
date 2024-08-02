import Link from 'next/link'
import React from 'react'

const Links = [
    {path: '/', name:'Home'},
    {path: '/about-us', name:'About Us'},
    {path: '/contact-us', name:'Contact Us'},
]

const Nav = ({containerStyle}) => {
  return (
    <nav className={containerStyle}>
      {Links.map((item, index)=>{
        return <Link href={item.path} className='hover:text-primary'>{item.name}</Link>
      })}
    </nav>
  )
}

export default Nav
