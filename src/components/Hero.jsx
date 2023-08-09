import React from 'react'
import styles from '../style'
import { discount, me_professional } from '../assets'
import GetStarted from './GetStarted'
const HeroTop = ({icon, title, content, index}) => (
  <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient \
    rounded-[10px] mb-2'>
    <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
    <p className={styles.paragraph + ' ml-2'}>
      <span className='text-white'>20%</span> Discount For {' '}
      <span className='text-white'>1 Month</span> Account
    </p>
  </div>
)
const Hero = () => (
    <section id='home' className={'flex md:flex-row flex-col '+ styles.paddingY}>
      <div className={'flex-1 ' + styles.flexStart + ' flex-col xl:px-0 sm:px-16 px-6'}> 
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[70px] text-[50px] \
            text-white ss:leading-[100px] leading-[75px]'>
            Welcome <br className='sm:block hidden'/>{' '}
            <span className='text-gradient ss:text-[60px] text-[45px]'>I am BRUS ROJAS</span>{' '}
          </h1>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[70px] text-[55px] \
            text-white ss:leading-[100px] leading-[75px] w-full'>
          Cloud Architect
        </h1>
        <p className={styles.paragraph + ' w-full mt-5'}>
          Hello, and welcome to my personal portfolio! <br /> I'm Brus Rojas, an ambitious Cloud Architect with a year of hands-on experience, fervently seeking new professional opportunities to elevate the cloud industry to new heights. <br />
        </p>
      </div>
      <div className={'flex-1 flex ' + styles.flexCenter + ' md:my-0 my-10 relative'}>
        <img src={me_professional} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div>
      <div className='ss:hidden flex-center'>
        <GetStarted/>
      </div>
    </section>
  )

export default Hero