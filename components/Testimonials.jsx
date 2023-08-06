import React from "react"
import Title from "./Title"
import img from "../images/user.jpg"
import Image from "next/image"

const Testimonials = ({ TestimonialsData }) => {
  return (
    <div id="Testimonials" className="mb-16">
      <Title title="Testimonials" />
      <div class="mb-16 flex flex-col h-fit">
        <div className=" flex flex-row flex-wrap justify-between gap-6">
          {TestimonialsData &&
            TestimonialsData.map(item => (
              <div
                data-aos="flip-up"
                class="sm:w-[500px] p-3 w-[350px] h-fit flex flex-col mb-2  border-none border-gray-300 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] "
              >
                <div class="w-[95%]  pb-0 h-[40%]  self-center">
                  <p class="italic text-[12px] text-gray-500 text-center">
                    "{item.desc}"
                  </p>
                </div>
                <div className="flex pt-2 w-full justify-between px-4">
                  <div>
                    <h2 className="text-md font-semibold line">{item.name}</h2>
                    <p className="text-gray-500 text-xs">{item.position}</p>
                  </div>
                  <div class="bg-white w-[50px] h-[50px] rounded-full  mb-4">
                    <Image
                      class="rounded-full w-full h-full object-cover  shadow-xl"
                      width={50}
                      height={50}
                      src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${item.image}`}
                      alt={img}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
