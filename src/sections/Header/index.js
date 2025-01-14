import React from 'react'

function Header() {
  return (
    <div className='flex flex-row justify-between px-[60px] py-[30px]'>
      <div className="flex gap-[40px] font-bold">
        <a href="/" class="no-underline text-[#74512D]"><li className='list-none'>Home</li></a>
        <a href="/" class="no-underline text-[#74512D]"><li className='list-none'>Services</li></a>
        <a href="/" class="no-underline text-[#74512D]"><li className='list-none'>About Us</li></a>
        <a href="/" class="no-underline text-[#74512D]"><li className='list-none'>Portfolio</li></a>
        <a href="/" class="no-underline text-[#74512D]"><li className='list-none'>Contacts</li></a>
      </div>
      <div className="text-[#74512D] font-bold">EN</div>
    </div>
  )
}

export default Header
