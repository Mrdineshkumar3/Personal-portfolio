import React from 'react'
import zara from './ZARA.png'

import student from './student info portal.png'

import Happy from './Happy Trip Industry.png'
import Dtool from './d tool.png'
import Menze from './menze.png'
import bomb from './conactimages/1735407220169.png' 
import '../App.css'
import './animations.css'

function Projects() {
  const Projectsdone = [
    {id:0,

      title:'Student Info Portal',
      desc:`A web application built to manage and store student-related data efficiently. The system allows users to easily store, retrieve, update, and delete student information
 `,
      link:'https://student-portal-frontend-alpha.vercel.app',
      tech:['MongoDB','Express js','React js','Node js'],
      image:student,
 
   },
    {id:1,

     title:'Zara',
     desc:`This front-end project is responsive music streaming
           platform.which showcases album art, and trending music.
`,
     link:'https://zara-62.vercel.app',
     tech:['React js','Tailwind CSS','Bootstrap 5'],
     image:zara,

  },



  {id:2,

    title:'Happy Trip Industry',
    desc:`This is a responsive travel agency website to enhance customer engagement and
          streamline trip planning.`,
    link:'https://peppy-scone-cde9f3.netlify.app',
    tech:['React js','Tailwind CSS','Bootstrap 5'],
    image:Happy,

 },
 
 {id:3,

  title:'D Tool',
  desc:`The website is a multifunctional web application providing users with a suite of tools, including a currency
        converter,QR code generator and more.
       `,
  link:'https://resplendent-bunny-3b3322.netlify.app',
  tech:['React js','Tailwind CSS','API'],
  image:Dtool,

},

{id:4,

  title:'Menze',
  desc:`This is a Frontend men's wear E-Commerce Website,which is a fully responsive all platforms.`,
  link:'https://comforting-piroshki-0bceec.netlify.app',
  tech:['Html','SASS','Javascript','React js'],
  image:Menze,
},
]
  return (

    <div className='pt-[60px]' id='projects'>
 <div className='  px-[20px] min-h-[100vh] pb-[60px] bgba pt-[20px] '  >
         <h2 className='font-[700] text-[#ffff] text-[18px] ml-3 mb-3 text-center headinganime'>PROJECTS <img src={bomb} alt="" className='inline-block w-[21px] pb-[5px] ml-1' /></h2>
        <div className='text-center w-[100%] flex items-center justify-center '>
        <p className='font-[400] text-gray-200 text-[15px]   ml-3 mb-5 max-w-[600px] opacityanime '>
          These are my Projects which represent my skills in Web Development and you can explore the project through hover the card and click the view button. 
        </p>
        </div>
         
        <div >
          <div className=' grid grid-cols-4 max-xl:grid-cols-3 items-center justify-center min-h-[83vh] max-md:grid-cols-2 max-sm:grid-cols-1 gap-3 max-sm:gap-6'>
            {Projectsdone.map((item,index)=>{
              return<>
                <div key={index} className="projectanime shaa blu relative bg-[#ffffff49] cursor-pointer shadow shadow-gray-400 w-[100%] hover:shadow-none " >
                <div className='bg-[#141146] max-sm:bg-[#091231]  opacity-0 ani overflow-hidden flex items-center justify-center absolute h-full'>
          
            <button className='w-[60%] mt-2 act' >
            <a href={item.link} className=" alegreya-sans-sc-medium w-[100%] tracking-wide block border border-white decoration-transparent text-white px-5 pt-[7px] pb-[10px] text-[20px]">view</a>
            </button>
            </div>
           <img src={item.image} className=" p-3 w-[100%] h-[160px] max-sm:h-[200px] " alt="..."/>
           <div className="px-4 py-1 ">
          <h2 className=" text-[18px] text-[#Ffff] font-[500] it alegreya-sans-sc-medium">{item.title}</h2>
            <p className="card-text text-[13px] text-gray-100 min-h-[70px] max-sm:min-h-[50px] des">{item.desc}</p>
            <p className='text-[15px] text-[#ffff] font-[500] pt-2 it'>Technologies used </p>
            <p className='flex flex-wrap gap-1 py-2 pb-[20px]'>{item.tech.map((item2,index2)=>{
              return<>
              <span className='bg-gray-300 text-gray-700 rounded text-[13px] px-2 py-1 inline-block '>{item2}</span>
              </>
            })

            }</p>
           

            
              {/* <button class="custom-btn btn-3"><span>Read More</span></button> */}
          
             </div>
            </div>
              </>
            })

            }
        
          </div>
        </div>
    </div>
    </div>
   
  )
}

export default Projects