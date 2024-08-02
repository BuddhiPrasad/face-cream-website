import Image from 'next/image'
import React from 'react'

import logo from '@/public/logo.svg'

const Logo = () => {
  return (
    <div>
       <Image src={logo} alt='logo' width={130}/> 
    </div>
    
  )
}

export default Logo
