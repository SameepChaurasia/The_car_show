import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-grey-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
            <Image 
                src="/TransparentFullColor_TCS.png"
                alt="The Car Show logo"
                width={118}
                height={18}
                className='object-contain'
            />
            <p className='text-base text-grey-700 font-bold'> 
                The_Car_Show since 2003 <br/>
                BY_SAMEEP CHAURASIA <br/>
                All rights reserved &copy; <br/>
            </p>
            </div>
   
            <div className='footer__links'>
                {footerLinks.flatMap((link) => (
                  <div key={link.title} 
                  className='footer__link'>
                    <h3 className='font-bold'>{link.title}</h3>
                    {link.links.map((item) => (
                      <Link 
                        key={item.title}
                        href={item.url}
                        className='text-grey-500'
                      >
                        {item.title}
                     </Link>   
                    ))}
                  </div>
                ))}
            </div>
            </div>
            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
              <p>@2003  The_Car_Show All Rights Reserverd &copy;</p>
                  <div className='footer__copyrights-link'>
                      <Link href="/"
                        className='text-gray-500'
                      >
                        Privacy Policy
                      </Link>
                      <Link href="/"
                        className='text-gray-500'
                      >
                        Terms of use
                      </Link>
                  </div>
            </div>
      
    </footer>
  )
}

export default Footer

