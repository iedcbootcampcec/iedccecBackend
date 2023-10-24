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
    <motion.div animate={{height:!Expanding ? 750:700}} type={spring} Layout data-aos="flip-up"  className='b0g-white h-fit  w-[440px] mb-6 rounded-lg  shadow-2xl hover:shadow-black   '  >
        <div className='flex flex-col h-full'>
            <div>
                <Image     
                    width={150}
                    height={150}
                    effect="blur"
                    className="w-full h-full object-cover  p-2"
                    src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${props.image}`}
                    alt=""/>
            </div>
            <div className="flex flex-col h-full  ">
            <div className="flex items-center">

            <a href="" className="flex justify-center font-bold text-[35px] mb-2 mx-2">{props.title}</a>
            
            
            <a
                href="https://www.linkedin.com/company/iedc-bootcamp-cec/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 flex justify-end items-center  w-full"
              >
                <FaLinkedin className='h-8 w-8' />
              </a>
              
              <Popup
                
              trigger=
                {<button className='w-20 h-10'>  <FaShareAltSquare className='h-8 w-8' /> </button>}
                position="right center" >
                <div className='text-center' data-aos="zoom-in-right" data-aos-duration="600">Share</div>
                <div className='flex gap-2' data-aos="zoom-in-right" data-aos-duration="600">
                      <WhatsappShareButton url='https://www.youtube.com/watch?v=u8vaAc3ivcY&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=10'>
                        <WhatsappIcon round="True" size={32}></WhatsappIcon>
                      </WhatsappShareButton>
                      
                      <FacebookShareButton url="https://www.youtube.com/watch?v=u8vaAc3ivcY&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=10">
                        <FacebookIcon round="True" size={32}></FacebookIcon>
                      </FacebookShareButton>
                      
                      <RedditShareButton url="https://www.youtube.com/watch?v=u8vaAc3ivcY&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=10">
                      <RedditIcon round="True" size={32}></RedditIcon>
                      </RedditShareButton>
                      
                      <TelegramShareButton>
                        <TelegramIcon round="True" size={32}></TelegramIcon>
                      </TelegramShareButton>

                      <TwitterShareButton url="https://www.youtube.com/watch?v=u8vaAc3ivcY&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=10">
                        <TwitterIcon round="True" size={32}></TwitterIcon>
                      </TwitterShareButton>

                </div>
            </Popup>
              
            </div>
            <div>
            <a href="" className="flex   text-[15px] mb-2 mx-2">{props.Date}</a>
            </div>
           <motion.div  className="mx-2 pr-5 w-full  break-words text-gray-500 ">
              <Readmore Expanding={Expanding} setExpanding={setExpanding} onClick={() => setExpanding(!Expanding)} >
              
              {/* <span className="text-[13px] text-gray-600 mb-4 mx-2 overflow-auto "> */}
              {props.desc}
            {/* </span> */}
              </Readmore>
             
           </motion.div>
           
            <div className="w-full h-full flex justify-center items-end my-3">
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
  )
}

export default Card