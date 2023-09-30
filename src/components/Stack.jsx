import { stacks } from '../constants'
import styles, { layout } from '../style'

const Stack = () => (
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Tech stack</h2>
      <div className={styles.flexCenter + ' mt-5 flex-row flex-wrap bg-white rounded-[20px] w-full'}>
        {stacks.map((stack) => (
          <img src={stack.logo} alt="stack" className='sm:w-[192px] p-2 h-[100px] object-contain'/>
        ))}
      </div>
    </div>
  )

export default Stack