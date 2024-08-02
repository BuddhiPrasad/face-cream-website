import React from 'react'
import MaxWrapperContainer from './MaxWrapperContainer'

import whereTobuy from '../public/wheretobuy.svg'
import Image from 'next/image'

const WheretoBuy = () => {
  return (
    <section className='bg-secondary pt-10 pb-10'>
      <MaxWrapperContainer>
        <div >
            <div className='flex flex-col'>
                <h1 className='section-title xl:text-left'>Where to Buy?</h1>
                <p className='text-center'>Hands on purchasing can be made through our island wide dealer network. Find your nearest sales person to get yourself fueled up for a safer tomorrow.</p>
                <Image src={whereTobuy} alt='whereTobuy'/>
            </div>
            
        </div>
      </MaxWrapperContainer>
    </section>
  )
}

export default WheretoBuy
