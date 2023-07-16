import React, { useEffect } from "react"
import AOS from "aos"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Scrollbar, Mousewheel } from "swiper"
import "aos/dist/aos.css"
import "swiper/swiper-bundle.min.css"
import Title from "./Title"

const Announcement = ({ AnnouncementData }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])
  return (
    <div id="announcement" class="flex flex-row">
      <div class="mb-16 ">
        <Title title="Announcement" />

        <div className="Card h-fit sm:block hidden w-[100%]">
          <Swiper
            height={200}
            direction={"vertical"}
            slidesPerView={1}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className="mySwiper"
            spaceBetween={20}
            loop={true}
          >
            {AnnouncementData &&
              AnnouncementData.map(item => {
                return (
                  <SwiperSlide>
                    <div class="mt-7 mb-32">
                      <div class="mt-1 mb-7">
                        <div class="flex flex-row h- gap-5">
                          <div class="flex flex-col w-[280px]">
                            <a href="" class="font-bold text-[16px] mb-2">
                              {item.title}
                            </a>
                            <span class="text-[13px] text-gray-600 mb-2">
                              {item.desc}
                            </span>
                          </div>
                          <div class="w-[180px] h-[180px] ">
                            <img
                              class="w-full h-full object-cover"
                              src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${item.image}`}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
        <div className="h-fit sm:hidden block ">
          <Swiper
            height={450}
            direction={"vertical"}
            slidesPerView={1}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className="mySwiper"
            spaceBetween={10}
          >
            {AnnouncementData &&
              AnnouncementData.map(item => {
                return (
                  <SwiperSlide>
                    <div class="mt-7 mb-32 h-fit">
                      <div class="mt-1 mb-7 flex">
                        <div class="flex flex-col-reverse justify-center text-center border-none border-gray-300 rounded-2xl shadow-xl p-4 ">
                          <div class="flex flex-col h-fit w-fit  ">
                            <a href="" class="font-bold text-[16px] mb-2">
                              {item.title}
                            </a>
                            <span class="text-[13px] text-gray-600 mb-2">
                              {item.desc}
                            </span>
                          </div>
                          <div class="w-44 h-44 mb-3 self-center">
                            <img
                              class="w-full h-full object-cover"
                              src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${item.image}`}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
      </div>

      <div data-aos="fade-left" class="ml-96 mt-16 sm:block hidden ">
        <ul class="flex items-center">
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Workshop
            </button>
          </li>
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Orientation
            </button>
          </li>
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Seminar
            </button>
          </li>
        </ul>
        <ul class="flex item-centre">
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Lecture
            </button>
          </li>
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Hackathon
            </button>
          </li>
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Acheivements
            </button>
          </li>
        </ul>
        <ul class="flex items-center my-2">
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Workshop
            </button>
          </li>
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Seminar
            </button>
          </li>
          <li class="flex mr-6 my-2">
            <button class="text-[12px] text-gray-600 bg-white hover:bg-gray-100 text-gray-800 py-2 px-6 border border-gray-200 rounded shadow">
              Orientation
            </button>
          </li>
        </ul>
        <span class="text-[13px] text-gray-600 mb-2">
          IEDC Bootcamp CEC in association with IPL, Innovators Premier <br />{" "}
          League is here with a session on Resume Building.
        </span>
        <div class="mb-4">
          <input
            class="shadow appearance-none border border-gray-300 rounded w-60 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline mr-2.5 my-6 placeholder-gray-600 placeholder-opacity-75"
            id="have idea for any event?"
            type="text"
            placeholder="Have idea for any event? "
          />
          <button class="text-sm text-white bg-black rounded-md px-4 py-2 transition hover:bg-transparent hover:text-black hover:ring-2 hover:ring-black cursor-pointer">
            Request
          </button>
        </div>
      </div>
    </div>
  )
}

export default Announcement
