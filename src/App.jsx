
import { useEffect, useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Header from './component/Header'
import Pro from './component/Pro'
import Projects from './component/Projects'
import Loader from './component/Loader'
import Skills from './component/Skills'
import './component/darklight.css'
import './component/animations.css'
function App() {
  const [darkmode,setDarkmode]=useState(false)
  const [loading,seLoading] = useState(false)
useEffect(()=>{
  seLoading(true)
  setTimeout(()=>{
    seLoading(false)
  },3000)
},[])
  return (
    <>
      { loading ?<div className='w-[100vw] h-[100vh] flex items-center justify-center bg-white'>
        <Loader />
      </div>:
      <div className={`modes ${darkmode?'activated':''}`}id="home">
      <Header 
      darkmode={darkmode}
      setDarkmode={(aa)=>{setDarkmode(aa)}}
      />
      <Pro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
  
         
    </div>}
        
    </>
  )
}

export default App
