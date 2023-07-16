import React from "react"
import college from "../images/College_clipart.jpg"
import Image from "next/image"
import { Tab } from "./Tab"
import Title from "./Title"

const About = () => {
  return (
    <div id="About" className="flex flex-col mb-16 h-fit">
      <Title title="Who we are" />
      <div className="flex justify-center items-center">
        <div className="w-[100%] sm:w-[80%] h-fit border-none border-gray-300 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col justify-center items-center">
          <p
            data-aos="fade-in"
            className="sm:p-14 p-4 font-light text-gray-400 text-md text-center"
          >
            The Innovation and Entrepreneurship Development Cell [IEDC] Bootcamp
            College of Engineering Chengannur was established in June 2015 in
            association with Kerala Startup Mission [KSUM], with the vision of
            molding youngsters into technological entrepreneurs and innovative
            leaders. KSUM serves as a stepping stone for aspiring business
            owners looking to enter the field of technology-based jobs and
            supports entrepreneurs in pursuing their goals.
            <br />
            <br /> IEDC CEC promotes entrepreneurship, cultivates an innovative
            attitude, and encourages students to pursue their passion. The cell
            organizes myriad programs that will inspire young, aspiring
            technology graduates to pursue entrepreneurship as a profession and
            become job providers rather than job seekers.
          </p>
          <div className=" lg:w-[550px] overflow-hidden">
            <Image src={college} className="w-full h-full object-cover" />
          </div>
          <h3 className="pb-10 text-gray-500 text-center" data-aos="fade-in">
            COLLEGE OF ENGINEERING CHENGANNUR
          </h3>
        </div>
      </div>
    </div>
  )
}
export default About
