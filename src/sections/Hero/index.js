import React from 'react'
import Img1 from './../../assets/img6.jpg'
import Img2 from './../../assets/img5.jpg'
import Img3 from './../../assets/img8.jpg'
import ImgHero from './../../assets/hero.png'
function Hero() {
  return (
    <div className='flex flex-row justify-between items-center gap-2 h-[75vh] py-8 px-[25px] max-w-[1300px] m-auto'>
      <div className='w-1/3 text-left flex flex-col gap-3'>
        <div className='text-[#DFA878] font-acme font-bold text-[45px] leading-[50px]'>Capturing the Beauty in Every Frame.</div>
        <div className='text-[#74512D]'>We transform your memories into timeless stories through the perfect blend of light and lens.</div>
      </div>
      <div className='w-2/3 flex p-8 flex-row gap-4 items-center relative'>
        <img src={ImgHero} className='' alt="" />
      </div>
    </div>
  )
}

export default Hero
