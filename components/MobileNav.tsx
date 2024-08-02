import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { AlignJustify } from 'lucide-react'
import Nav from './Nav'
import Logo from './Logo'
import { ThemeToggler } from './ThemeToggler'
import Social from './Social'

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <AlignJustify/>
        </SheetTrigger>
        <SheetContent>
            <div className='flex flex-col items-center justify-between h-full py-8'>
                <div className='flex flex-col items-center gap-y-32 w-full'>
                    <div className='flex w-full justify-between'>
                    <Logo/>
                    <ThemeToggler/>
                    </div>
                
                    <div>
                    <Nav containerStyle='flex flex-col items-center gap-y-6'/>
                    </div>

                </div>
                
                <div>
                    <Social/>
                </div>
            </div>

               
            
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
