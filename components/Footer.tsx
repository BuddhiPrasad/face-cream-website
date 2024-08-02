import React from 'react'
import MaxWrapperContainer from './MaxWrapperContainer'
import Logo from './Logo'
import Social from './Social'


const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
        <MaxWrapperContainer>
            <div className='flex flex-col items-center gap-y-6'>
                {/*Logo */}
                <Logo/>
                {/*Social */}
                <Social/>
                {/*Copyright */}
                <div className='text-muted-foreground'>
                    Copyright &copy; Suyaama.co. All rights reserved.
                </div>
            </div>
        </MaxWrapperContainer>
      
    </footer>
  )
}

export default Footer
