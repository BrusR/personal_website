import styles from "../style"
import Form from "./Form"
import { socialMedia } from "../constants"
const Contact = () => (
    <section id='contact' className={styles.flexCenter + ' ' + styles.marginY + ' ' + styles.padding + ' sm:flex-row \
    flex-col bg-black-gradient-2 rounded-[20px] box-shadow'}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Get in touch</h2>
        <p className={styles.paragraph + ' max-w-[470px] mt-5'}>
            Thank you for taking the time to explore my portfolio. If you're interested in collaborating, 
            have a project in mind, or just want to connect, I'd love to hear from you. Feel free to reach 
            out using the form to send me a message directly. 
        </p>
        <div className='w-full flex justify-between items-center mt-4 md:flex-row flex-col pt-6'>
          <div className='flex flex-row md:mt-0 mt-6'>
            {socialMedia.map((social, index) => (
              <a href={social.link} target="_blank"><img 
                key={social.id} 
                src={social.icon} 
                alt={social.id} 
                className={'w-[40px] h-[40px] object-contain cursor-pointer hover:scale-125 ' + (index !== socialMedia.length -1 ? 'mr-6' : 'mr-0')}/></a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.flexCenter + ' sm:ml-10 ml-0 sm:mt-0 mt-10'}>
        <Form/>
      </div>
    </section>
  )

export default Contact