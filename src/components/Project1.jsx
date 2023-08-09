import React from 'react'
import { bill, s3, cloudfront } from '../assets'
import styles , { layout } from '../style'

const Project1 = () => (
    <section id='projects' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[3] -left-[50%] 
        top-0 w-[60%] h-[60%] rounded-full 
        white__gradient'/>
        <div className='absolute z-[0] -left-[50%] 
        bottom-0 w-[60%] h-[60%] rounded-full 
        pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Single page application 
        <br className='sm:block hidden'/> portfolio</h2>
        <p className={styles.paragraph + ' max-w-[550px] mt-5'}>
          Fully responsive single page application written with React JS and Tailwind,
          hosted on S3 and served via Cloudfront. The resources were deployed through 
          AWS Cloud Deveploment Kit (CDK) stacks written in Python. 
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6 divide-x w-full'>
          <img src={s3} alt='s3' className='w-1/2 h-[100px] object-contain cursor-pointer'/>
          <img src={cloudfront} alt='cloudfront' className='w-1/2 h-[100px] object-contain cursor-pointer'/>
        </div>
      </div>
    </section>
)


export default Project1