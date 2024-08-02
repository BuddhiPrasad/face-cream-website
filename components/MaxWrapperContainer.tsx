import React from 'react'

import { ReactNode } from "react"

const MaxWrapperContainer = ({children}:{children : ReactNode}) => {
  return (
    <div className='container mx-auto'>
      {children}
    </div>
  )
}

export default MaxWrapperContainer
