import { Swiper, SwiperSlide } from "swiper/react"
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCoverflow,
} from "swiper"
import Image from "next/image"
import img from "../images/FuhadSanin.jpg"

import "swiper/swiper-bundle.min.css"
import Title from "./Title"
import data from "./detail.json"
const Team = ({ title }) => {
  return (
    <div id="team" className="mb-16">
      <Title title={title} />
      <div className="item h-fit mt-10">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={5}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-navigation-size": "30px",
            "--swiper-pagination-color": "black",
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {data &&
            data.map(item => {
              return (
                <SwiperSlide>
                  <div className="w-56 mx-7 mt-14 mb-14 h-[230px] bg-white border-gray-300 rounded-2xl shadow-xl">
                    <div className="p-2 flex flex-col items-center justify-center">
                      <div className="flex items-center relative top-[-80px] shadow-lg justify-center w-44 h-44 rounded-full ">
                        <div className="w-[150px] h-[150px]">
                          <Image
                            src={img}
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
            delay: 4000,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-navigation-size": "30px",
            "--swiper-pagination-color": "black",
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {data &&
            data.map(item => {
              return (
                <SwiperSlide>
                  <div className="w-56 mx-7 mt-14 mb-14 h-[230px] bg-white border-gray-300 rounded-2xl shadow-xl">
                    <div className="p-2 flex flex-col items-center justify-center">
                      <div className="flex items-center relative top-[-80px] shadow-lg justify-center w-44 h-44 rounded-full ">
                        <div className="w-[150px] h-[150px]">
                          <Image
                            src={img}
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
      <div className="item sm-mob">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            Autoplay,
            EffectCoverflow,
          ]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-navigation-size": "30px",
            "--swiper-pagination-color": "black",
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {data &&
            data.map(item => {
              return (
                <SwiperSlide>
                  <div className="w-[350px] h[350px]">
                    <Image
                      src={img}
                      width={350}
                      height={350}
                      objectFit="cover"
                      className="w-full h-full object-cover brightness-[0.7] rounded-2xl"
                    />
                  </div>
                  <div className="absolute text-center pb-4  h-fit w-full text-white  bottom-5">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <h6 class="text-[15px]">{item.position}</h6>
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
