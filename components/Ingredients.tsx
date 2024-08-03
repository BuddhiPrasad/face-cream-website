import React from 'react'
import MaxWrapperContainer from './MaxWrapperContainer'
import Image from 'next/image'


import Ingredientimage from '../public/Ingredients.png'


const ingredientDetails = [
    {
        title: 'Ginger (Zingiber officinale)',
        description: 'not only tastes good, but it is a powerful anti-inflammatory.',
    },
    {
        title: 'Garlic (Allium sativum)',
        description: 'is a powerful immune boosting food item that can fight viral conditions such as common cold and its related symptoms of sneezing, coughing, sore throat and runny nose. ',
    },
    {
        title: 'Coriander (Coriandrum sativum)',
        description: 'These antioxidants include terpinene, quercetin, and tocopherols. These antioxidants are proved to have immune-boosting and anti-cancer effects. ',
    },
    {
        title: 'Holy Basil (Ocimum  sanctum)',
        description: 'Benefits holds substantial anti-inflammatory and immune boosting elements that fight against stress, fever, pain and even protect vital organs.',
    },
    {
        title: 'Sweet Flag (Acorus  calamus)',
        description: 'Acts as an antibiotic preventing various internal and external infections.',
    },
    {
        title: 'Malabar Nut (Justicia adhatoda)',
        description: 'The leaves of Justicia adhatoda contains phytochemicals such as alkaloids, tannins, saponins, phenolics and flavonoids',
    }
];

const Ingredients = () => {
  return (
    <section className='pt-10 pb-10'>
        <MaxWrapperContainer>
            <div className='flex flex-col xl:flex-row justify-between'>
                <div className='xl:w-1/2 items-center'>
                <div className='relative flex items-center justify-center '>
                    <Image src={Ingredientimage} alt='Ingredientimage'/>
                    <div className='bg-white/45 absolute max-w-[250px]'>
                        <h1 className='section-title'>What are the Ingredients?</h1>
                    </div>
                </div>
                    
                    
                </div>

                <div className='xl:w-1/2 items-center'>
                    <div className='border-x-2 border-y-2 border-4 '>
                        <div className='m-4'>
                            {ingredientDetails.map((item, index)=>{
                                return <div key={index} className='mb-2'>
                                    <p className='font-medium'>{item.title}</p>
                                    <p className='text-muted-foreground'>{item.description}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </MaxWrapperContainer>
      
    </section>
  )
}

export default Ingredients
