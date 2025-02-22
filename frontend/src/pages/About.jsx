import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex  flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>We believe in style, quality, and confidence. Our mission is to bring you trendy, high-quality fashion at the best prices. Shop with us and express your unique style effortlessly!</p>
          <p>Inspired by fashion, driven by quality. We are committed to bringing you the latest trends with premium craftsmanship.</p>
          <b  className='text-gray-800' >Our Mission</b>
          <p>Our mission is to redefine fashion by offering stylish, high-quality, and affordable clothing for everyone.</p>
        </div>
      </div>
      <div  className='text-xl py-4' >
         <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row  text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurane:</b>
          <p className='text-gray-600' >Premium materials, strict quality checks, and timeless style—guaranteed for your confidence.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Seamless shopping, secure payments, and fast delivery—fashion at your fingertips.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We're here for you! Fast support, hassle-free returns, and a shopping experience you can trust.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
