import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'
import { s3, cloudfront, lambda, eventbridge, ecs } from '../assets'
const Project2 = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Serverless multitier 
          <br className='sm:block hidden'/>backend solution.
        </h2>
        <p className={styles.paragraph + ' max-w-[470px] mt-5'}>
          This project features many serverless services such as Lambda,
          ECS Fargate, SNS and Eventbridge.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-6 mt-4 w-full'>
          <a href="#" className='w-1/2'>
            <h1 className='font-poppins font-normal text-dimWhite text-[18px] text-center hover:text-blue-100 hover:underline hover:scale-125'>
              View in code
            </h1>
          </a>
          <a href="#" className='w-1/2'>
            <h1 className='font-poppins font-normal text-dimWhite text-[18px] text-center hover:text-blue-100 hover:underline hover:scale-125'>
              Live deployment
            </h1>
          </a>
        </div>
        <div className='flex flex-row flex-wrap sm:mt-6 mt-4 w-full'>
          <img src={lambda} alt='lambda' className='w-1/3 h-[100px] object-contain cursor-pointer'/>
          <img src={ecs} alt='ecs' className='w-1/3 h-[100px] object-contain cursor-pointer'/>
          <img src={eventbridge} alt='eventbridge' className='w-1/3 h-[100px] object-contain cursor-pointer'/>
        </div>
        <div className='flex flex-row flex-wrap sm:mt-3 mt-2 w-full'>
          <h1 className='w-1/3 font-poppins font-normal text-dimWhite text-[18px] text-center'>Lambda</h1>
          <h1 className='w-1/3 font-poppins font-normal text-dimWhite text-[18px] text-center'>ECS</h1>
          <h1 className='w-1/3 font-poppins font-normal text-dimWhite text-[18px] text-center'>Eventbridge</h1>
        </div>
        <Button style='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )


export default Project2