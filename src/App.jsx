import React from 'react'
import styles from './style';
import { Navbar, Hero, Stats, Visitors, Contact, 
  Stack,Footer, About, Project1, Project2} from './components';
const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={styles.paddingX + ' ' + styles.flexStart}>
        <div className={styles.boxWidth}>
          <Navbar/>
        </div>
      </div>

      <div className={'bg-primary ' + styles.flexStart}>
        <div className={styles.boxWidth}>
          <Hero/>
        </div>
      </div>

      <div className={'bg-primary '+ styles.paddingX + ' ' + styles.flexStart}>
        <div className={styles.boxWidth}>
          <Stats/>
          <Visitors/>
          <About/>
          <Stack/>
          <Project1/>
          <Project2/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </div>
);

export default App