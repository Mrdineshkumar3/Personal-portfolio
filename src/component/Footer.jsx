import React from 'react'
import linkedin from './conactimages/w-linkedin.png'
import insta from './conactimages/w-insta.png'
import facebook from './conactimages/w-facebook.png'
import x from './conactimages/w-x.png'

function Footer() {
  return (
    <div className=' bg-[#0F1655]  min-h-[60px] p-3 flex  flex-wrap justify-between  max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-2  '>
     
      <div className=''>
        <div>
          <div className='flex gap-3 flex-wrap '>
            <a href="#home" className='text-gray-200 max-sm:text-[13px] hover:tracking-[1px] transition-all'>HOME</a>
            <a href="#about" className='text-gray-200 max-sm:text-[13px] hover:tracking-[1px] transition-all'>ABOUT</a>
            <a href="#skills" className='text-gray-200 max-sm:text-[13px] hover:tracking-[1px] transition-all'>SKILLS</a>
            <a href="#projects" className='text-gray-200 max-sm:text-[13px] hover:tracking-[1px] transition-all'>PROJECTS</a>
            <a href="#contact" className='text-gray-200 max-sm:text-[13px] hover:tracking-[1px] transition-all'>CONTACT</a>
          </div>
        
        </div>
      
      </div>
      <div className='text-center'>
      
        <div className='flex gap-3'>
       <a href="https://linkedin.com/in/dineshkumar-p-453b09232"><img src={linkedin} alt="" className='w-[24px] hover:scale-105 transition-all' /></a>
       <a href="https://www.instagram.com/_dinesh_kratos_x3?igsh=MWE1ZnBndjd0bzR5cQ=="><img src={insta} alt="" className='w-[24px] hover:scale-105 transition-all' /></a>
       <a href="https://www.facebook.com/profile.php?id=100071006023063"><img src={facebook} alt="" className='w-[24px] hover:scale-105 transition-all' /></a>
       <a href="https://x.com/Dineshkuma67630?t=FgrJcyoshlKoACg4yttz_g&s=09"><img src={x} alt="" className='w-[24px] hover:scale-105 transition-all' /></a>
        </div>
      </div>
      <div>
        <p className='text-gray-200 max-sm:text-[14px]'>
         &copy; 2025 Dineshkumar P. All rights reserved. 
        </p>
        </div>

    </div>
  )
}

export default Footer