import React from 'react'
import profile from './Dp 03.png'
import '../App.css'
import resume from './DINESHKUMAR P.pdf'
import swag from './conactimages/swag 01.png'
import './animations.css'
function Pro() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume; 
    link.download = 'DINESHKUMAR P (resume).pdf'; // File name
    link.click(); // Trigger the download
  };
  return (
    <div className='min-h-[100vh] relative  w-full flex max-md:flex-col max-md:py-[80px] max-md:gap-[80px]'>
      <div className="custom-shape-divider-top-1735107932 max-md:hidden">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    <div className='absolute bottom-0 md:hidden max-md:bottom-[-100px] max-sm:bottom-[-50px]'>
     <img src={swag} alt="" className='graying' />
   </div>
        <div className='proanime01 w-[51.4%] max-md:pl-0 max-lg:pl-5 max-md:w-[100%] flex  items-center justify-center relative z-[1]'>
          <div className='max-lg:p-2'>
            <h1 className='text-blue-950 font-[800] text-[35px] max-sm:text-[22px] textchange'>Hey! I'm DINESH</h1>
            <div className='md:hidden'>
           <h1 className='text-[#44b3fd] font-[800] text-[45px] max-sm:text-[30px] max-lg:text-[35px]'>WEB DEVOLPER</h1>
          
           </div>
           <div className='boom max-md:hidden'>
           <h1 className='text-[#44b3fd] font-[800] text-[45px] max-sm:text-[30px] max-lg:text-[35px]'>WEB DEVOLPER</h1>
           <h1 className='text-[#44b3fd] font-[800] text-[45px] max-sm:text-[30px] max-lg:text-[35px]'>WEB DEVOLPER</h1>
           </div>
            
            
            <p className='max-w-[450px] max-sm:max-w-[300px] text-[13px] text-[#171927] roboto-condensed-my graychange' > I am passionate about creating beautiful and functional websites, constantly
                learning and growing in web developement.
            </p>
            {/* <button className='bg-[#44b3fd] mt-[20px] text-white px-4 py-2 rounded-[5px] tracking-[2px]'>DOWNLOAD CV</button> */}
            <button class="custom-btn btn-15 mt-[20px] -z-0 max-md:text-[14px]" onClick={handleDownload}>DOWNLOAD CV</button>
          </div>
        </div>
        <div className='proanime02 w-[48.6%]  max-md:w-[100%]  flex items-center justify-center '>
        <div ><img src={profile} alt="" className='w-[430px] z-[1] relative'/></div>
        
        </div>
    </div>
  )
}

export default Pro