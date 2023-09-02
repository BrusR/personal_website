import React from 'react'
import { bill, s3, cloudfront, cloudformation } from '../assets'
import styles , { layout } from '../style'
import { links_project_1 } from '../constants'
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
          Cloudformation and the stacks, developed with AWS Cloud Deveploment Kit (CDK) 
          written in Python. 
        </p>
        <div className='flex flex-row flex-wrap sm:mt-6 mt-4 w-full'>
          <a href={links_project_1.github} target="_blank" className='w-1/2'>
            <h1 className='font-poppins font-normal text-dimWhite text-[18px] text-center hover:text-blue-100 hover:underline hover:scale-125'>
              View in code
            </h1>
          </a>
          <a href={links_project_1.live} className='w-1/2'>
            <h1 className='font-poppins font-normal text-dimWhite text-[18px] text-center hover:text-blue-100 hover:underline hover:scale-125'>
              Live deployment
            </h1>
          </a>
        </div>
        <div className='flex flex-row flex-wrap sm:mt-6 mt-4 w-full'>
          <img src={s3} alt='s3' className='w-1/3 h-[100px] object-contain cursor-pointer'/>
          <img src={cloudfront} alt='cloudfront' className='w-1/3 h-[100px] object-contain cursor-pointer'/>
          <img src={cloudformation} alt='cloudformation' className='w-1/3 h-[100px] object-contain cursor-pointer'/>
        </div>
        <div className='flex flex-row flex-wrap sm:mt-3 mt-2 w-full'>
          <h1 className='w-1/3 font-poppins font-normal text-dimWhite text-[18px] text-center'>S3</h1>
          <h1 className='w-1/3 font-poppins font-normal text-dimWhite text-[18px] text-center'>Cloudfront</h1>
          <h1 className='w-1/3 font-poppins font-normal text-dimWhite text-[18px] text-center'>Cloudformation</h1>
        </div>
      </div>
    </section>
)


export default Project1