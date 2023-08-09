const Form = () => {
    return (
      <div className="bg-dimWhite rounded-xl shadow-lg p-8">
        <form action="" className="flex flex-col space-y-4">
          <div>
            <label htmlFor="" className="text-sm">Your Name</label>
            <input type="email" placeholder="Your name" className="ring-1 ring-gray-300 mt-2 w-full rounded-md \
            px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400"/>
          </div>
          <div>
            <label htmlFor="" className="text-sm">Email</label>
            <input type="text" placeholder="Email" className="ring-1 ring-gray-300 mt-2 w-full rounded-md \
            px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400"/>
          </div>
          <div>
            <label htmlFor="" className="text-sm">Message</label>
            <textarea placeholder="Message" rows="3" className="ring-1 ring-gray-300 mt-2 w-full rounded-md \
            px-4 py-2 outline-none focus:ring-2 focus:ring-slate-400"></textarea>
          </div>
          <button type="button" className="inline-block self-end bg-cyan-700 active:bg-cyan-900 text-white font-bold rounded-lg px-6 py-2 \
          uppercase text-sm">
            Send Messsage
          </button>
        </form>
      </div>
    )
  }
  
  export default Form