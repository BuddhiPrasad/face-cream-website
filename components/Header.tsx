import React from 'react'
import MaxWrapperContainer from './MaxWrapperContainer'
import Logo from './Logo'
import Nav from './Nav'
import { ThemeToggler } from './ThemeToggler'

import { FaCartArrowDown } from 'react-icons/fa'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='py-4 sticky top-0 bg-secondary'>
        <MaxWrapperContainer>
            <div className='flex justify-between items-center'>
                <div>
                  {/*Logo */}
                    <Logo/> 
                </div>
                <div className='flex items-center gap-x-4'> 
                    {/*Nav-Desktop */}
                    <Nav containerStyle='hidden xl:flex gap-x-8 items-center'/>
                     {/*ThemeToggler */}
                    <div className='hidden xl:flex'>
                        <ThemeToggler/>
                    </div>
                    
                    <FaCartArrowDown />
                    <div className='xl:hidden'>
                        <MobileNav/>
                    </div>
                    
                </div>
                 
            </div>
        </MaxWrapperContainer>
      
    </header>
  )
}

export default Header
