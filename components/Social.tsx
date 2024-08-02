import React from 'react'

import { RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill} from 'react-icons/ri';

import { FaFacebook, FaYoutube, FaTwitter, FaInstagram , FaLinkedinIn   } from "react-icons/fa";
import Link from 'next/link';



//Socialicon
const socialIcon = [
    {
        path: '/',
        name: <FaFacebook/>,
    },
    {
        path: '/',
        name: <FaYoutube/>,
    },
    {
        path: '/',
        name: <FaTwitter  />,
    },
    {
        path: '/',
        name: <FaInstagram  />,
    },
    {
        path: '/',
        name: <FaLinkedinIn  />,
    }
  ]

const Social = () => {
  return (
    <div className='flex gap-x-4'>
      {socialIcon.map((path, index)=>{
        return <Link href={path.path}>{path.name}
        </Link>
      })}
    </div>
  )
}

export default Social
