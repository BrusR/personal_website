const Button = ({style}) => {
  return (
    <button type='button' className={'py-4 px-6 bg-blue-gradient font-poppins \
    font-medium text-[18px] text-primary outline-none rounded-[10px] ' + style}>
      Let's get in touch
    </button>
  )
}

export default Button