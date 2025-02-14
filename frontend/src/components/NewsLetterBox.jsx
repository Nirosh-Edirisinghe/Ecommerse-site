import React from 'react'

const NewsLetterBox = () => {

   const onSubmitHandler = (event)=>{
         event.preventDefault();
   }
  return (
    <div className='text-center'>
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-3">Subscribe to our newsletter for exclusive deals, the latest trends, and early access to new collections. </p>

      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
         <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required />
         <button onSubmit={onSubmitHandler} type='submit' className='bg-black text-white text-xs px-10 py-4 hover:bg-gray-900'>SUBSCRIBE</button>
      </form>
      
    </div>
  )
}

export default NewsLetterBox
