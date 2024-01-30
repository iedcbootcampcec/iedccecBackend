import { Swiper, SwiperSlide } from "swiper/react"
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCoverflow,
} from "swiper"
import Image from "next/image"

import "swiper/swiper-bundle.min.css"
import Title from "./Title"

const Team = ({ title, time, TeamData }) => {
  return (
    <div id="team" className="mb-16">
      {/* <Title title={title} />
      <div className="item h-fit mt-10">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={5}
          autoplay={{
            delay: time,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-navigation-size": "30px",
            "--swiper-pagination-color": "black",
          }}
          pagination={{ clickable: true }}
        >
          {TeamData &&
            TeamData.map(item => {
              return (
                <SwiperSlide>
                  <div className="w-56 mx-7 mt-20 mb-14 h-[230px] bg-white border-gray-300 rounded-2xl shadow-xl flex justify-center">
                    <div className="p-2 flex flex-col items-center justify-center">
                      <div className="flex items-center relative top-[-80px] shadow-lg justify-center w-44 h-44 rounded-full ">
                        <div className="w-[150px] h-[150px]">
                          <Image
                            src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${item.image}`}
                            width={150}
                            height={150}
                            objectFit="cover"
                            alt="Circular Image"
                            className="rounded-full w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="text-center mt-[-50px]">
                        <h2 className="text-lg font-bold">{item.name}</h2>
                        <p className="text-gray-500 text-xs">{item.position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>

      <div className="item mob">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={3}
          autoplay={{
            delay: time,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-navigation-size": "30px",
            "--swiper-pagination-color": "black",
          }}
          pagination={{ clickable: true }}
        >
          {TeamData &&
            TeamData.map(item => {
              return (
                <SwiperSlide>
                  <div className="w-56 mx-7 mt-14 mb-14 h-[230px] bg-white border-gray-300 rounded-2xl shadow-xl">
                    <div className="p-2 flex flex-col items-center justify-center">
                      <div className="flex items-center relative top-[-80px] shadow-lg justify-center w-44 h-44 rounded-full ">
                        <div className="w-[150px] h-[150px]">
                          <Image
                            src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${item.image}`}
                            width={150}
                            height={150}
                            objectFit="cover"
                            alt="Circular Image"
                            className="rounded-full w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="text-center mt-[-50px]">
                        <h2 className="text-lg font-bold">{item.name}</h2>
                        <p className="text-gray-500 text-xs">{item.position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div> */}
      <div className="item sm-mob ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={1}
          autoplay={{
            delay: time,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-navigation-size": "30px",
            "--swiper-pagination-color": "black",
          }}
          pagination={{ clickable: true }}
        >
          {TeamData &&
            TeamData.map(item => {
              return (
                <SwiperSlide>
                  <div className="w-60 mx-16 mt-14 mb-14 h-[230px] bg-white border-gray-300 rounded-2xl shadow-xl">
                    <div className="p-2 flex flex-col items-center justify-center">
                      <div className="flex items-center relative top-[-80px] shadow-lg justify-center w-44 h-44 rounded-full ">
                        <div className="w-[150px] h-[150px]">
                          <Image
                            src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${item.image}`}
                            width={150}
                            height={150}
                            objectFit="cover"
                            alt="Circular Image"
                            className="rounded-full w-full h-full object-cover pt-2"
                          />
                        </div>
                      </div>
                      <div className="text-center mt-[-50px]">
                        <h2 className="text-lg font-bold">{item.name}</h2>
                        <p className="text-gray-500 text-xs">{item.position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}

export default Team
