import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
import Image from "next/image"
// Import Swiper styles
import "swiper/swiper-bundle.min.css"
import Title from "./Title"

export default function Achievements({ AchievementsData }) {
  const swiper = useSwiper()
  return (
    <div class="mb-16">
      <Title title="Achievements" />
      <div className="Card h-fit sm:block hidden">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={3}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-navigation-size": "30px",
            "--swiper-pagination-color": "black",
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {AchievementsData &&
            AchievementsData.map(item => {
              return (
                <SwiperSlide>
                  <div className="mb-[100px] mx-12 border-none gap-4 border-gray-300 rounded-2xl shadow-xl w-[350px] flex flex-col justify-center items-center">
                    <div className="w-[300px] h-[200px]">
                      <Image
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                        src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${item.image}`}
                        alt=""
                      />
                    </div>
                    <div class="bottom w-[280px] h-fit p-3">
                      <h1 class="text-center text-xl font-semibold mb-3">
                        {item.title}
                      </h1>
                      <p class="text-sm font-light text-gray-500 text-center">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
      <div className="sm:hidden block">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={1}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-navigation-size": "25px",
            "--swiper-pagination-color": "black",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {AchievementsData &&
            AchievementsData.map(item => {
              return (
                <SwiperSlide>
                  <div className="mb-[100px] mx-8 border-none gap-4 border-gray-300 rounded-2xl shadow-xl w-[300px]">
                    <div className="w-[300px] h-[200px]">
                      <Image
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                        src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${item.image}`}
                        alt=""
                      />
                    </div>
                    <div class="bottom w-[280px] h-fit p-3">
                      <h1 class="text-center text-xl font-semibold mb-3">
                        {item.title}
                      </h1>
                      <p class="text-sm font-light text-gray-500 text-center">
                        {item.desc}
                      </p>
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
