import { stacks } from '../constants'
import styles from '../style'
const Stack = () => (
    <section className={styles.flexCenter + ' my-4'}>
      <h2 className='font-poppins font-semibold xs:text-[36px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full w-1/4'>Tech stack</h2>
      <div className={styles.flexCenter + ' flex-wrap w-full bg-white rounded-[20px]'}>
        {stacks.map((stack) => (
          <div key={stack.id} className='flex-1 sm:min-w-[192px] min-w-[120px]'>
            <img src={stack.logo} alt="stack" className='sm:w-[192px] p-4 h-[100px] object-contain'/>
          </div>
        ))}
      </div>
    </section>
  )

export default Stack