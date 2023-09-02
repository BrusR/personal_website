import React from 'react'
import { features, habilities } from '../constants'
import  styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({icon, title, content, index}) => (
   <div className={'flex flex-row p-6 rounded-[20px] feature-card ' + (index !== features.length - 1 ? 'mb-6' : 'mb-0')}>
    <div className={'w-[120px] h-[120px] rounded-full bg-white ' + styles.flexCenter}>
      <img src={icon} alt="icon" className='w-[70%] h-[70%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
   </div>
)

const About = () => (
    <section id='about' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Some things <br className='sm:block hidden'/>
          about me</h2>
        <p className={styles.paragraph + ' max-w-[470px] mt-5'}>
        With a natural love for Python programming, AWS, and IOT, 
        I am committed to architecting cutting-edge cloud solutions that revolutionize 
        the way we interact with technology. </p>
        <Button style='mt-10'/>
      </div>
      <div className={layout.sectionImg + ' flex-col'}>
        {habilities.map((hability, index) => (
          <FeatureCard key={hability.id} {...hability} index={index}/>
        ))}
      </div>
    </section>
  )


export default About