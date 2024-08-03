import React from 'react'
import MaxWrapperContainer from './MaxWrapperContainer'


import catimage from '../public/cat.svg'
import Image from 'next/image'

const Cat = () => {
  return (
    <section>
        <div className='relative flex h-full w-full justify-center items-center'>
            <Image src={catimage} alt='catimage' className='min-h-[600px] object-cover'/>
            <div className='grid xl:grid-cols-2 absolute container'>
                <div className='max-w-[450px]'>
                    <h1 className='h3 text-white text-center xl:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h1>
                </div>
                <div className='bg-white p-4 rounded-[20px] mt-6 '>
                    <p className='text-center xl:text-left font-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst et sagittis morbi adipiscing netus feugiat. Vitae convallis at sit amet, dictum leo, pellentesque. Quis pellentesque in aenean ullamcorper ut at ut maecenas ac. Risus in feugiat mauris, morbi est vitae pellentesque aliquet. Aliquet mollis curabitur mi lectus elit scelerisque. Elementum duis quam est amet vitae enim. Accumsan a fringilla lacus montes, vitae magna arcu.</p>
                </div>
                
            </div> 
        </div>
       
        
        
    </section>
  )
}

export default Cat
