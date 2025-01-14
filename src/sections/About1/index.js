import React from 'react'
import Img1 from './../../assets/img4.jpg'
import Img2 from './../../assets/img7.jpg'

function About1() {
  return (
    <div className='flex flex-row max-w-[1300px] gap-8 px-[25px] m-auto'>
      <div className='w-1/5'><img src={Img1} alt="" /></div>
      <div className='w-4/5'>
        <div className='w-3/5 text-left m-auto'>
            <p className='text-[#DFA878] font-acme font-bold text-[45px] leading-[50px] overflow-visible text-nowrap'>We are not just photographers</p>
            <p className='text-[#74512D] font-acme font-bold text-[45px] leading-[50px]'>We are storytellers</p>
            <p className='text-[#74512D] py-[10px] w-3/5'>Welcome to our e-commerce photo studio, where every photo becomes a source of inspiration and success for your business. We create unique and high-quality images that highlight the benefits of your product and attract the attention of potential buyers. Trust us with your visual presentation and see the powerful impact of professional photography on your online platform</p>
        </div>
        <div className='flex items-center px-[20px] mt-[-130px] text-left gap-4'>
            <div className='text-[#74512D] py-[10px] w-3/5'>In our photo studio, we value the uniqueness of each client and approach each project individually. We carefully study the features of your product, understand your target audience and create photographs that perfectly match your brand and objectives. Our professional approach allows us to accurately convey your vision and differentiate your products from the competition. Trust our experience and attention to detail to help you achieve impressive results</div>
            <img src={Img2} className='w-2/5' alt="" />
        </div>
      </div>
    </div>
  )
}

export default About1
