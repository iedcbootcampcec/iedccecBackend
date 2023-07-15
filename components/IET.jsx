import img2 from "../images/entrepreneurship.jpeg"
import img3 from "../images/technology.jpeg"
import img1 from "../images/innovative.jpeg"
import Image from "next/image"

const Iet = () => {
  return (
    <div id="vision" className="mt-5 mb-5">
      <div className="flex justify-center items-center">
        <div className="w-[500px] h-fit" data-aos="flip-down">
          <h1 className="font-extrabold text-6xl text-center">
            "THE BEST WAY TO PREDICT THE FUTURE IS TO INVENT IT."
          </h1>
          <p className="text-center"> - Alan Kay</p>
        </div>
      </div>
      <div class="pt-16 mb-16 flex flex-col">
        <div className="flex flex-row flex-wrap sm:justify-between justify-center gap-6">
          <div
            data-aos="flip-up"
            data-aos-duration="500"
            class="w-[300px] h-[350px] flex flex-col items-center justify-center border-none border-gray-300 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
          >
            <div class="w-24 h-24 mb-3 flex">
              <Image class="w-full h-full object-cover" src={img1} alt="" />
            </div>
            <h1 class="text-center text-xl font-semibold mb-3">Innovation</h1>
            <div class="w-[70%]">
              <p class="text-[12px] text-gray-500 text-center">
                As a leading innovation hub, we are committed to fostering a
                culture of creativity and out-of-the-box thinking. We offer a
                range of programs and services designed to support innovators at
                all stages of their journey, from ideation to commercialization.
              </p>
            </div>
          </div>

          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            class="w-[300px] h-[350px] flex flex-col items-center justify-center border-none border-gray-300 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
          >
            <div class="w-24 h-24 mb-3 flex">
              <Image class="w-full h-full object-cover" src={img2} alt="" />
            </div>
            <h1 class="text-center text-xl font-semibold mb-3">
              Entrepreneurship
            </h1>
            <div class="w-[70%]">
              <p class="text-[12px] text-gray-500 text-center">
                Our organization is dedicated to fostering a culture of
                entrepreneurship in our local community. We partner with
                universities and incubators to provide mentorship and resources
                to aspiring entrepreneurs.
              </p>
            </div>
          </div>

          <div
            data-aos="flip-up"
            data-aos-duration="1500"
            class="w-[300px] h-[350px] flex flex-col items-center justify-center border-none border-gray-300 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
          >
            <div class="w-28 h-28 mb-3 overflow-hidden flex">
              <Image
                class="w-full h-full mt-2 scale-125 object-cover"
                src={img3}
                alt=""
              />
            </div>
            <h1 class="text-center text-xl font-semibold mb-3">Technology</h1>
            <div class="w-[70%]">
              <p class="text-[12px] text-gray-500 text-center">
                Our organization is dedicated to helping individuals and
                businesses stay ahead of the curve in the rapidly evolving world
                of technology. We host regular workshops and panel discussions
                that explore the latest trends and technologies shaping the
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Iet
