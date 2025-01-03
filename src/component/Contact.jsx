import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";
import github from "./conactimages/1735286773892.png";
import email from "./conactimages/1735286773884.png";
import mode from "./conactimages/1735522772186.png";
import linkedin from "./conactimages/1735522772174.png";
import insta from "./conactimages/1735522772161.png";
import facebook from "./conactimages/1735522772152.png";
import x from "./conactimages/1735522772127.png";
import rocket from "./conactimages/laptop.png";
import text from "./conactimages/1735407220054.png";
import smile from "./conactimages/1735626124230.png";
import '../App.css'
function Contact() {
  const form = useRef();
  const [typename,setTypename] = useState('')
  const [typeemail,setTypeemail] = useState('')
  const [typemessage,setTypemessage] = useState('')
  const [no,setNo]=useState(false)
  const [errors, setErrors] = useState({ name: '', email: '',message: '' });
  const validate = () => {
    let formErrors = { name: '', email: '',message: '' };

    if (typename === '') {
      formErrors.name = 'Name is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeemail === '') {
      formErrors.email = 'Email is required';
    } else if (!emailRegex.test(typeemail)) {
      formErrors.email = 'Email is not valid';
    }
    if (typemessage === '') {
      formErrors.message = 'Message should not be empty';
    }
    setErrors(formErrors);
    return Object.values(formErrors).every((error) => error === '');
  }
  const successed = () =>{
    setTypename('')
    setTypeemail('')
    setTypemessage('')
    setNo(true)
    setTimeout(()=>{
    setNo(false)
    },6000)
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if(validate()){
    emailjs
      .sendForm("service_b9oo3mq", "template_1763why", form.current, {
        publicKey: "00XC1omEFILpkZYNK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          successed()
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    }
    else{
      console.log('something is wrong')
    }
    
    
  };

  return (
    <div className={`noteshow ${no?'sn':''} overflow-clip relative  px-[20px] pt-[70px] pb-[60px]`}  id="contact">
      <h2 className="font-[700] text-[#0F1655] text-[18px] ml-3 mb-3 text-center textchange headinganime">
        CONTACT ME{" "}
        <img
          src={text}
          alt=""
          className="inline-block w-[21px] pb-[5px] ml-1"
        />
      </h2>
      <div className="">
        <p className=" m-auto max-w-[500px] text-center text-gray-500 graychange opacityanime">
          Feel free to reach out me through any of the platforms below. i'd love
          to connect with you!
        </p>
      </div>
      <div className="flex min-h-[60vh] mt-6 max-md:flex-col">
        <div className="w-[50%] max-md:w-[100%] cantactanime01 ">
          <div className="w-[80%] max-sm:w-[90%] mt-[24px] rounded-md  m-auto bg-gray-200 shadow shadow-[#8a8787e5] conchange min-h-[100px] p-4">
            <h2 className=" text-[#0F1655] font-[600] text-[20px] textchange ">
              Send me a message{" "}
              <img src={rocket} alt="" className="w-[25px] inline-block" />
            </h2>
            <div>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                   name="from_name"
                   value={typename}
                   onChange={(e)=>{setTypename(e.target.value)}}
                  id=""
                  placeholder="Full Name*"
                  className="ch foo block outline-none w-[100%] py-3 px-4 mt-3 mb-2 font-[500] rounded-[6px]"
                />
                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                <input
                  type="email"
                  name="from_email"
                  value={typeemail}
                  onChange={(e)=>{setTypeemail(e.target.value)}}
                  id=""
                  placeholder="Email address*"
                  className="ch foo block outline-none w-[100%] py-3 px-4 mt-3 mb-2 font-[500] rounded-[6px]"
                />
                {errors.email && <span style={{ color: 'red' }} >{errors.email}</span>}
                {/* <label htmlFor="message" className='block'>Type your message here!</label> */}
                <textarea
                   name="message"
                  id="message"
                  value={typemessage}
                  onChange={(e)=>{setTypemessage(e.target.value)}}
                  placeholder="Type your message here"
                  className="ch foo resize-none min-h-[200px] block outline-none w-[100%] py-3 px-4 mt-3 mb-2 font-[500] rounded-[6px]"
                ></textarea>
                {errors.message && <span style={{ color: 'red' }} className="inline-block pb-2">{errors.message}</span>}
                {/* <input type="submit" value="Send Message" className='bg-blue-900 px-3 py-2 rounded-md text-white max-sm:text-[13px] font-bold' /> */}
                <div>
                  <button className="button mt-2 " type="submit">
                    <svg
                      viewBox="0 0 16 16"
                      class="bi bi-lightning-charge-fill "
                      fill="currentColor"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
                    </svg>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center mt-6 justify-center gap-4">
            <a href="https://linkedin.com/in/dineshkumar-p-453b09232">
              <img
                src={linkedin}
                alt=""
                className="w-[41px] max-sm:w-[32px] cursor-pointer hover:translate-y-[-4px] transition-all"
              />
            </a>
            <a href="https://www.instagram.com/_dinesh_kratos_x3?igsh=MWE1ZnBndjd0bzR5cQ==">
              <img
                src={insta}
                alt=""
                className="w-[32px] cursor-pointer max-sm:w-[25px] hover:translate-y-[-4px] transition-all"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100071006023063">
              <img
                src={facebook}
                alt=""
                className="w-[42px]  cursor-pointer  max-sm:w-[32px] hover:translate-y-[-4px] transition-all"
              />
            </a>
            <a href="https://x.com/Dineshkuma67630?t=FgrJcyoshlKoACg4yttz_g&s=09">
              <img
                src={x}
                alt=""
                className="w-[34px] cursor-pointer max-sm:w-[26px] hover:translate-y-[-4px] transition-all"
              />
            </a>
          </div>
        </div>
        <div className="w-[50%] max-md:w-[100%] cantactanime02">
          <div className="relative ">
            <div className="flex justify-center">
              <div className="absolute top-6 sxs bg-gray-100 w-[90%] shadow-sm shadow-gray-400 rounded-[5px] px-6  py-2">
                <div className="flex py-1 cursor-pointer items-center ">
                  <a href="mailto:mrdinesh105@gmail.com">
                    <img src={email} alt="" className="w-[25px] inline ww" />{" "}
                    <span className="pl-1 font-[500] text-[#0F1655] inline-block git">
                      mrdinesh105@gmail.com
                    </span>
                  </a>
                </div>
                <div className="flex py-1 cursor-pointer items-center">
                  <a href="https://github.com/Mrdineshkumar3">
                    <img src={github} alt="" className="w-[25px] inline ww " />{" "}
                    <span className="pl-1 font-[500] text-[#0F1655] inline-block git">
                      git hub account
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={mode}
              alt=""
              className="max-lg:mt-[60px] max-md:mt-[10px] max-sm:mt-[30px]"
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="pb-[10px] m-auto max-w-[500px] text-center text-gray-500 graychange opacityanime">
          Get in touch with me via social media or send me an email, Thank you
          for visiting my portfolio.
        </p>
      </div>

      <div className="custom-shape-divider-bottom-1735458064">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="note overflow-hidden fixed bottom-[20px] rounded w-[300px] right-[20px] bg-[#e8e8e9] shadow  shadow-gray-500">
       
       <h2 className="text-[18px] text-[#123b57] px-6 py-2 font-[500] relative">Message Received <img src={smile} alt="" className="pb-[3px] w-[20px] inline" /> <Icon icon="fxemoji:cancellationx" onClick={()=>{setNo(false) }} className="absolute right-[5px] top-1 text-[10px] cursor-pointer"  /> </h2>
       
         <p className="h-1  bar"></p>
        

      
            </div>
    </div>
  );
}

export default Contact;
