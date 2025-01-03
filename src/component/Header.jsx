import React, { useState } from 'react'
import logo from './logo 05.png'
import { Icon } from "@iconify/react";
import '../App.css'
import './darklight.css'
import './animations.css'
function Header({setDarkmode,darkmode}) {
  const [mode,setMode]=useState(false) 
  const [show,setShow]=useState(false)
  let devstyle1 = {
    color:'#1e2026',
    opacity:1,
  }
  let devstyle2 = {
    color:'#414750',
    opacity:1,
  }
  let devstyle3 = {
    color:'#d3a51000',
    opacity:1,
  }
  let devstyle4 = {
    color:'#d3a51000',
    opacity:1,
  }
  let devstyle5 = {
    color:'#d3a51000',
    opacity:1,
  }
  let devstyle6 = {
    color:'#d3a51000',
    opacity:1,
  }
  
  return (
    <div className={`do ${show?'active' :''}`}>
        <div className='flex  z-10 justify-between max-md:flex-col  showing h-[56px]  py-4 overflow-hidden items-center fixed w-[100%] bgblur headchange '>
          <div className='pl-[30px] max-md:place-self-start max-md:mt-[0px]'>
              {/* <img src={logo} alt="" className='w-[100px] '/> */}
             <a href="" className='outline-none'> <h1 className=' text-[18px] cursor-pointer text-blue-950 font-[700] textchange'>DINESH <Icon icon="jam:code" width="20" height="16" className='inline mb-[4px]' /></h1> </a> 
          </div>
          <div className='pr-[30px] max-md:pr-0 '>
            <ul className='max-md:hidden'>
              <li className='inline max-md:block max-md:text-center py-2 px-3 font-[700] text-[18px] cursor-pointer text-[#44b3fd] doom und 'onClick={()=>{setShow(false)} } ><a href="#home">HOME</a></li>
              <li className='inline max-md:block max-md:text-center py-2 px-3 font-[700] text-[18px] cursor-pointer text-[#44b3fd] doom und' onClick={()=>{setShow(false)}}><a href="#about">ABOUT</a></li>
              <li className='inline max-md:block max-md:text-center py-2  px-3 font-[700] text-[18px] cursor-pointer text-[#44b3fd] doom und' onClick={()=>{setShow(false)}}><a href="#skills">SKILLS</a></li>
              <li className='inline max-md:block max-md:text-center py-2 px-3 font-[700] text-[18px] cursor-pointer text-[#44b3fd] doom und' onClick={()=>{setShow(false)}}><a href="#projects">PROJECTS</a></li>
              <li className='inline max-md:block max-md:text-center py-2 px-3 font-[700] text-[18px] cursor-pointer text-[#44b3fd] doom und' onClick={()=>{setShow(false)}}><a href="#contact">CONTACT</a></li>
            </ul>
            <ul className='md:hidden'>
              <li className='inline max-md:block max-md:text-center py-2 px-3 font-[700] text-[18px] cursor-pointer text-[#44b3fd]  und 'onClick={()=>{setShow(false)} } ><a href="#home">HOME</a></li>
              <li className='inline max-md:block max-md:text-center py-2 px-3 font-[700] text-[18px] cursor-pointer text-[#44b3fd]  und' onClick={()=>{setShow(false)}}><a href="#about">ABOUT</a></li>
              <li className='inline max-md:block max-md:text-center py-2 px-3 font-[700] text-[18px] cursor-pointer text-[#44b3fd]  und' onClick={()=>{setShow(false)}}><a href="#skills">SKILLS</a></li>
              <li className='inline max-md:block max-md:text-center py-2 px-3 font-[700] text-[18px] cursor-pointer text-[#44b3fd]  und' onClick={()=>{setShow(false)}}><a href="#projects">PROJECTS</a></li>
              <li className='inline max-md:block max-md:text-center py-2 px-3 font-[700] text-[18px] cursor-pointer text-[#44b3fd]  und' onClick={()=>{setShow(false)}}><a href="#contact">CONTACT</a></li>
            </ul>

          </div>
          <div className='md:hidden max-md:pb-[100px] '>
          <div className="loader">
  <div className="modelViewPort">
    <div className="eva">
      <div className="head">
        <div className="eyeChamber">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
      </div>
      <div className="body">
        <div className="hand"></div>
        <div className="hand"></div>
        <div className="scannerThing"></div>
        <div className="scannerOrigin"></div>
      </div>
    </div>
  </div>
</div>

          </div>
          <div className='pr-[50px] max-md:pr-[52px] scaled max-md:absolute right-0 top-4 max-md:top-3 '>
            {/* {mode?<Icon icon="ic:round-light-mode"   onClick={()=>{setMode(!mode)}} className='cursor-pointer text-[#44b3fd] roll text-[30px]'/>:
             <Icon icon="material-symbols:dark-mode"  onClick={()=>{setMode(!mode)}} className='cursor-pointer text-[#44b3fd] roll text-[30px]' /> 
            } */}
            
            <label className="switch">
              <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
              <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
              <input type="checkbox" class="input" onClick={()=>{
                setDarkmode(!darkmode)
                
              }}/>
              <span className="slider"></span>
            </label>
          </div>
          {/* <Icon icon="entypo:menu" onClick={()=>{setShow(!show)}} className='
          absolute text-[#44b3fd] right-[10px] top-[10px] text-[40px] hidden max-md:block cursor-pointer'/> */}
         <div className='absolute text-[#44b3fd] right-[10px] top-[0px] text-[40px] hidden max-md:block cursor-pointer'>
         {/* <input id="burger-checkbox" type="checkbox" onClick={()=>{setShow(!show)}} />
         <label className="burger" for="burger-checkbox">
         <span></span>
         <span></span>
         <span></span>
        </label> */}
        {show? <Icon icon="iconoir:cancel" onClick={()=>{setShow(!show)}} className='absolute text-[#44b3fd] right-[10px] top-[10px] text-[40px] hidden max-md:block cursor-pointer rot' />:<Icon icon="majesticons:menu" onClick={()=>{setShow(!show)}} className='rot absolute text-[#44b3fd] right-[10px] top-[10px] text-[40px] hidden max-md:block cursor-pointer' />}
       
         </div>
         
        </div>
        
    </div>
  )
}

export default Header