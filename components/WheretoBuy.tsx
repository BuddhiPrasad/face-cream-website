import React from 'react'
import MaxWrapperContainer from './MaxWrapperContainer'

import whereTobuy from '../public/wheretobuy.svg'
import Image from 'next/image'
import { Button } from './ui/button'

const WheretoBuy = () => {
  return (
    <section className='bg-secondary pt-10 pb-10'>
      <MaxWrapperContainer>
        <div className='flex flex-col xl:flex-row items-center gap-x-8'>

            <div className='flex flex-col gap-y-6 mb-8 xl:mt-0'>
              <div className='flex flex-col'>
                <h1 className='section-title xl:text-left'>Where to Buy?</h1>
                <p className='text-center xl:text-left'>Hands on purchasing can be made through our island wide dealer network. Find your nearest sales person to get yourself fueled up for a safer tomorrow.</p>
              </div>
              <Button className='uppercase px-8'>AUTHORIZED AGENTS</Button>

            </div>
            
            <Image src={whereTobuy} alt='whereTobuy'/>
            </div>

      </MaxWrapperContainer>
    </section>
  )
}

export default WheretoBuy
