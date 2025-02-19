import React, { useEffect } from 'react'
import htmlimage from './html.png'
import cssimage from './css.png'
import jsimage from './js.png'
import reactimage from './react js.png'
import tailwindimage from './tailwind css.png'
import bootstrap from './bootstrap.png'
import sassimage from './sass.png'
import mysqlimage from './mysql.png'
import pythonimage from './python.png'
import nodeimage from './node js.png'
import photoshop from './photoshop.png'
import express from './express js.png'

import mongodb from './mongodb.png'

import mus from './conactimages/1735407220227.png'
import shape1 from './conactimages/shape 01.png'
import shape2 from './conactimages/shape 02.png'
import './animations.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import bar from './bar 02.png'
import '../App.css'
function Skills() {
   useEffect(()=>{
        AOS.init({duration:600});
       },[]);
  const skillset = [
    {
    logo:htmlimage,
    name:'HTML',
  },
    {
    logo:cssimage,
    name:'CSS',
  },
    {
    logo:jsimage,
    name:'JAVASRIPT',
  },
    {
    logo:reactimage,
    name:'REACT JS',
  },
    {
    logo:tailwindimage,
    name:'TAILWIND CSS',
  },
    {
    logo:bootstrap,
    name:'BOOTSTRAP',
  },
    {
    logo:sassimage,
    name:'SASS',
  },
    {
    logo:mysqlimage,
    name:'MYSQL',
  },
    {
    logo:pythonimage,
    name:'PYTHON',
  },
    {
    logo:nodeimage,
    name:'NODE JS',
  },
  {
    logo:express,
    name:'EXPRESS JS',
  },
  {

    logo:mongodb,
    name:'MONGODB',
  },
  {

    logo:photoshop,
    name:'ADOBE PHOTOSHOP',
  },

]
  return (
    <div className='min-h-[100vh] max-sm:min-h-[60vh] relative pt-[100px] px-[20px] pb-[50px] ' id='skills'>
         <div className='shapeanime absolute z-[0] top-[-100px] left-0 max-sm:hidden max-md:left-[-100px] '>
          <img src={shape1} alt="" className='w-[380px]' />
        </div> 
        <div className=' absolute z-[0] right-[0px] bottom-[-30px] max-sm:hidden  '>
          <img src={shape1} alt="" className='w-[120px] flip' />
        </div> 
        <h2 className='font-[700] text-[#0F1655] text-[18px] pl-3 mb-3 text-center textchange headinganime'>SKILLSET  <img src={mus} alt="" className='inline-block w-[21px] pb-[5px] ml-1' /></h2>
        <div className='text-center w-[100%] flex items-center justify-center '>
        <p className='opacityanime relative z-[1] font-[400]  text-gray-400 text-[15px] max-w-[500px]  ml-3 mb-4 text-center graychange'>These are the technologies i'm proficient in. I'm 
          always learning and improving my skills.
        </p>
        </div>
        

        <div className='relative z-[1] grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-2 gap-4 max-sm:gap-3'>
          {skillset.map((item,index)=>{
            return<>
            <div key={index}  data-aos="fade-up-right" className='shadow shadow-gray-400 hov flex items-center justify-between  bg-[#f7fcfe] p-4 rounded-[20px] '>
          
          <div className='flex gap-6 max-sm:gap-2 items-center de'>
          <img src={item.logo} alt="" className='w-[100px]  max-sm:w-[40px]  h-[100px] max-sm:h-[40px]'/>
            <img src={bar} alt="" className='h-[120px] max-sm:hidden' />
 
            </div> 
                       <h2 className='text-[17px] max-sm:text-[13px] font-[500] text-[#0f1655] pr-5 max-sm:pr-0 text-center flex-1 cursor-default in'>{item.name}</h2>
          </div>
            </>
          })

          }
          
         
        </div>
    </div>
  )
}

export default Skills