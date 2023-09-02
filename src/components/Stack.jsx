import { stacks } from '../constants'
import styles, { layout } from '../style'

const Stack = () => (
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Tech stack</h2>
      <div className={styles.flexCenter + ' mt-5 flex-wrap w-full bg-white rounded-[20px]'}>
        {stacks.map((stack) => (
          <div key={stack.id} className='ml-2 flex-1 sm:min-w-[192px] min-w-[120px]'>
            <img src={stack.logo} alt="stack" className='sm:w-[192px] p-2 h-[100px] object-contain'/>
          </div>
        ))}
      </div>
    </div>
  )

export default Stack