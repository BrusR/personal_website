import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'
const CardDeal = () => (
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
        <Button style='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )


export default CardDeal