import React from "react"
import Title from "./Title"
import img from "../images/FuhadSanin.jpg"
import Image from "next/image"

const Testimonials = () => {
  return (
    <div id="team" className="mb-16">
      <Title title="Testimonials" />
      <div class="mb-16 flex flex-col h-fit">
        <div className=" flex flex-row flex-wrap justify-between gap-6">
          <div
            data-aos="flip-up"
            class="sm:w-[500px] p-3 w-[350px] h-fit flex flex-col mb-2  border-none border-gray-300 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] "
          >
            <div class="w-[95%]  pb-0 h-[40%]  self-center">
              <p class="italic text-[12px] text-gray-500 text-center">
                " As a leading innovation hub, we are committed to fostering a
                culture of creativity and out-of-the-box thinking. We offer a
                range of programs and services designed to support innovators at
                all stages of their journey, from ideation to
                commercialization."
              </p>
            </div>
            <div className="flex pt-2 w-full justify-between">
              <div>
                <h2 className="text-md font-semibold line">Fuhad Sanin</h2>
                <p className="text-gray-500 text-xs">Technical Analyst 2023</p>
              </div>
              <div class="bg-white w-[50px] h-[50px] rounded-full mr-4 mb-4">
                <Image
                  class="rounded-full w-full h-full object-cover  shadow-xl"
                  width={50}
                  height={50}
                  src={img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
