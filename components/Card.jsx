import React ,{useState , useEffect}  from 'react'
import Image from "next/image"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaShareAltSquare } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import AOS from "aos"
import Readmore from './Readmore'
import 'reactjs-popup/dist/index.css'
import Popup from 'reactjs-popup'
import {FacebookShareButton,RedditShareButton,TelegramShareButton,TwitterShareButton,WhatsappShareButton,} from "react-share"
import {FacebookIcon,RedditIcon,TelegramIcon,TwitterIcon,WhatsappIcon,} from "react-share"
import{motion, spring} from 'framer-motion'


function Card(props) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])
    let [Expanding ,setExpanding] = useState(true)
  return (
    <div className="h-fit w-fit " data-aos="flip-up">
      <motion.div animate={{height:!Expanding ? 'auto':580 }}  type={spring} Layout  duration="2000"  className='b0g-white h-fit  w-[350px]  rounded-lg  shadow-2xl hover:shadow-slate-700  ' style={{
      transition: 'box-shadow 0.7s ease ',  
    }} >
        <div className='flex flex-col h-full  '>
            <div className='flex justify-center '>
                <Image     
                    width={350}
                    height={250}
                    effect="blur"
                    className=" "
                    src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${props.image}`}
                    alt=""/>
            </div>
            <div className="flex flex-col h-full  m-1  ">
            <div className="flex items-center ">

            <a href="" className="flex   font-bold text-[25px] mb-2 ml-2  w-[500px]">{props.title}</a>
            
            
            <div
                className="mr-2 flex justify-end items-center  w-full"
              >
                <a 
                
                href="https://www.linkedin.com/company/iedc-bootcamp-cec/mycompany/"
                target="_blank"
                rel="noopener noreferrer">
                  <FaLinkedin className='h-6 w-6' />
                </a>
              </div>
              
              <Popup
                
              trigger=
                {<button className='w-20 h-10'>  <FaShareAltSquare className='h-6 w-6' /> </button>}
                position="right center" >
                <div className='text-center ' data-aos="zoom-in-right" data-aos-duration="600">Share</div>
                <div className='flex gap-2 mr-4' data-aos="zoom-in-right" data-aos-duration="600">
                      <WhatsappShareButton url={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${props.image}`}>
                        <WhatsappIcon round="True" size={32}></WhatsappIcon>
                      </WhatsappShareButton>
                      
                      <FacebookShareButton url={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${props.image}`}>
                        <FacebookIcon round="True" size={32}></FacebookIcon>
                      </FacebookShareButton>
                      
                      <RedditShareButton url={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${props.image}`}>
                      <RedditIcon round="True" size={32}></RedditIcon>
                      </RedditShareButton>
                      
                      <TelegramShareButton url={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${props.image}`}>
                        <TelegramIcon round="True" size={32}></TelegramIcon>
                      </TelegramShareButton>

                      <TwitterShareButton url={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${props.image}`}>
                        <TwitterIcon round="True" size={32}></TwitterIcon>
                      </TwitterShareButton>

                </div>
            </Popup>
              
            </div>
            <div>
            <a href="" className="flex   text-[15px] mb-2 ml-2">DD/MM/YY{props.Date}</a>
            </div>
           <motion.div  className="mx-1 ml-4 pr-5 w-full  break-words text-gray-500 ">
              <Readmore Expanding={Expanding} setExpanding={setExpanding} onClick={() => setExpanding(!Expanding)} >
              
              {/* <span className="text-[13px] text-gray-600 mb-4 mx-2 overflow-auto "> */}
              {props.desc}
            {/* </span> */}
              </Readmore>
             
           </motion.div>
           
            <div className="w-full h-fit flex justify-center items-start my-3">
            {props.link === "closed" ?
             (
                <button class="text-sm text-white bg-red-800 rounded-md w-[50%] py-1 cursor-pointer flex items-center justify-center gap-3">
                    
                    <div className="m-2">
                    Closed
                    </div>
                </button>
            ) : props.link ?
            (
                <a
                    href={props.gflink}
                    target="_blank"
                    rel="noopener" 
                >
                    <button class="text-sm text-white bg-teal-900 rounded-md w-full  py-1 transition hover:bg-transparent hover:text-black hover:ring-2 hover:ring-black cursor-pointer">
                      <div className="m-2">
                      Register Now
                      </div>

                    </button>
                </a>
            ) : null}
            </div>
            </div>
        </div>
    </motion.div>
    </div>
  )
}

export default Card