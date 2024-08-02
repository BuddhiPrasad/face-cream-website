import React from 'react'
import MaxWrapperContainer from './MaxWrapperContainer'
import Image from 'next/image'

import productImage from '../public/hero 02.jpg'

import cart from '../public/Cart.svg'
import heart from '../public/Heart.svg'
import { Button } from './ui/button'


const OurProduct = () => {
  return (
    <section>
        <MaxWrapperContainer>
            <div className='pt-10 pb-10'>
                {/*text */}
                <div className='pt-10 mb-8'>
                    <h1 className='section-title'>Our Products</h1>
                    <p className='text-muted-foreground text-center'>Accumsan non et augue urna sit id pharetra.</p>
                </div>

                <div className='flex flex-col xl:flex-row items-center gap-x-8'>
                    {/*image */}
                    <Image src={productImage} alt='productImage'/>
                    
                    
                    <div className='flex flex-col gap-y-6 mt-8 xl:mt-0'>
                            <h3 className='h3'>Vitamin E Moisture Cream</h3>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vitae auctor nisl, habitasse in. Netus dui netus donec malesuada in in aenean. Metus arcu euismod cursus cras. Feugiat erat pellentesque pellentesque odio sit sapien mauris lobortis. Ipsum tincidunt gravida dis vel nascetur. Congue sit adipiscing augue ac eget et nisl. Sed mollis in amet, mauris. Id ornare.</p>
                            <div className='flex justify-between'>
                                <div className='flex gap-x-2'>
                                    <span className='font-medium'>$</span><h1 className='text-4xl font-bold'>15</h1>
                                    <p className='items-center m-2 font-medium'>70g</p>
                                </div>
                                <div className='flex gap-x-4 items-center'>
                                    <Image src={heart} alt='heart' className='text-primary'width={25}/>
                                    <Image src={cart} alt='cart' className='text-primary' width={25}/>
                                    <Button className='uppercase px-8'>Buy Now</Button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            
        </MaxWrapperContainer>
      
    </section>
  )
}

export default OurProduct
