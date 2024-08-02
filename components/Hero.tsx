import Image from 'next/image'
import React from 'react'

import MaxWrapperContainer from './MaxWrapperContainer'

import productImage from '../public/hero 02.jpg'


const Hero = () => {
  return (
    <section className='py-12 xl:py-24 xl:pt-28 bg-[#F8F3E9]'>
      <MaxWrapperContainer>
        {/**Main Hero */}
        <div className='xl:flex justify-between items-center'>
          {/*text */}
            <div className='flex flex-col items-center xl:items-start'>
              <div className="text-sm uppercase font-semibold mb-2 text-yellow-500 tracking-[4px] ">A Break thorough in</div>
              <h1 className='h1 mb-2 uppercase dark:text-secondary'>innovation</h1>
              <p className='max-w-[650px] text-center xl:text-left dark:text-secondary'>MeGha Primal Intake is a food source developed by a team of Scientists and Western Doctors after month of intense research and development, which is a blend of local herbs and scientific minds.</p>
            </div>

        {/*image */}
          <div className=' flex flex-col items-center p-6'>
            <Image src={productImage} alt='productImage' />
          </div>
        </div>

        {/*Sub her0 */}
        <div className='flex flex-col bg-white rounded-[20px] p-5'>
          <div className='flex flex-col items-center'>
            <h3 className='h3 mb-4 text-yellow-500'>Welcome to Suyaama !</h3>
            <p className='max-w-[650px] xl:mx-w-auto text-center dark:text-secondary'>The official distributor of Megha Primal Intake, the most trusted food supplement to prevent and protect you from Covid-19. Trusted by thousands and has delivered excellent results!</p>
          </div>
        </div>
      </MaxWrapperContainer>
    </section>
  )
}

export default Hero
