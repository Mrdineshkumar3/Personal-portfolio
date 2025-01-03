import React from 'react'
import '../App.css'
import profile from './Dp 03.png'
import art1 from './Tproject-1.jpg'
import art2 from './Homesale.jpg'
import art3 from './burger.jpg'
import art4 from './sprite.jpg'
import './animations.css'
import ab from './conactimages/1735389276968.png'
import creative from './conactimages/1735407219825.png'
import education from './conactimages/1735407219836.png'
import certificate from './conactimages/1735407220078.png'

function About() {
  return (
    <div className='relative overflow-clip' id='about'>
   <div class="custom-shape-divider-top-1735109810 max-md:hidden">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
   </div>
   <div className='pt-[200px] max-md:pt-[80px]'>
   <div className='flex  '>
    <div className='w-[50%]  max-md:hidden  '>
    <div className='aboutprofile flex  justify-center items-start sticky top-[100px] '>
      <img src={profile} alt="" className='w-[430px] scale-x-[-1]'/>
   </div>
    </div>
   
    

<div className='w-[50%] max-md:w-[100%] max-md:px-[20px] px-3 '>
    <h2 className='font-[700] text-[#0F1655] text-[18px] textchange headinganime'>About ME <img src={ab} alt="" className='inline-block w-[21px] pb-[5px] ml-1' /> </h2>
    <p className='abanime01 mt-[20px] text-[15px] max-w-[600px] bg-[#f0f3fcb0] border border-[#d3d3d6c0] shad0 p-4 rounded-[4px] backchange'>Hi! I'm <span className='text-[#44b3fd] font-[500]'> DINESHKUMAR P</span>, a final-year B.Tech student specializing in Information Technology. I am passionate about the world of web development, with a particular love for creating beautiful, user-centric websites that offer both functionality and aesthetics. Throughout my academic journey, I’ve honed my skills in front-end developement, along with various web technologies like HTML, CSS, JavaScript,React and Tailwind.</p>
    <div className='mt-[20px]'>
        <h2 className='font-[500] text-[#0F1655] text-[16px] textchange'>Creative Activity <img src={creative} alt="" className='inline-block w-[20px] pb-[5px] ml-1' /></h2>
        <p  className='abanime01 mt-[10px] text-[15px] max-w-[600px] bg-[#f0f3fcb0] border border-[#d3d3d6c0] shad0 p-4 rounded-[4px] backchange'>I have a deep passion for graphic design, and one of my favorite creative outlets is using Adobe Photoshop to craft unique posters and logos. This activity allows me to combine my technical skills with artistic expression, producing designs that are both visually striking and conceptually meaningful. For your referance, </p>
        <div className='grid grid-cols-2 gap-3 mt-5'>
            <div className=''>
                <img src={art1} alt=""  className='hover:scale-[1.04] transition opacityanime' />
            </div>
            <div className=''>
                <img src={art2} alt=""  className='hover:scale-[1.04] transition opacityanime'/>
            </div>
            <div className=''>
                <img src={art3} alt=""  className='hover:scale-[1.04] transition opacityanime' />
            </div>
            <div className=''>
                <img src={art4} alt="" className='hover:scale-[1.04] transition opacityanime' />
            </div>
        </div>
       
    </div>
    <div className='mt-[20px]'>
        <h2 className='font-[500] text-[#0F1655] text-[16px] textchange'>Education <img src={education} alt="" className='inline-block w-[20px] pb-[5px] ml-1' /></h2>
         <div className='abanime01 mt-[10px] bg-[#f0f3fcb0] backchange border border-[#d3d3d6c0] shad0 p-4 rounded-[4px]'>
         <p className='text-[15px] '>
         Global Institute of Engineering & Teachnology
         </p>
         <p className='text-[15px] '>B.Tech in Information Technology <span className='font-[500] pl-[10px]'>(CGPA 7.83)</span></p>

         </div>
                 
   </div>
   <div className='mt-[20px]'>
        <h2 className='font-[500] text-[#0F1655] text-[16px] textchange'>Certification <img src={certificate} alt="" className='inline-block w-[20px] pb-[5px] ml-1' /></h2>
         <div className='abanime01 mt-[10px] bg-[#f0f3fcb0] backchange border border-[#d3d3d6c0] shad0 p-4 rounded-[4px]'>
        {/* <img src={pythonintern} alt="Python internship" className='w-[600px] ' /> */}
        <p className='text-[15px] max-w-[600px]  '>Certified in Python Programming by Strydo Technologies PVT. LTD, Demonstrating proficiency and commitment to
        ongoing skill enhancement. <span className='font-[500] pl-[10px]'>(July 2023)</span></p>
         </div>
                 
   </div>
</div>
   </div>
   </div>
   

        
    </div>
  )
}

export default About