import React, { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import "aos/dist/aos.css";
import "swiper/swiper-bundle.min.css";
import Title from "./Title";
import Image from "next/image";
import "../node_modules/react-lazy-load-image-component/src/effects/blur.css";
import { ImCross } from "react-icons/im";


//💀
const Announcement = ({ AnnouncementData }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="announcement" className="flex flex-row">
      <div className="mb-16 flex-col md:flex w-full">
        <Title title="Announcement" />

        <div className="Card h-fit sm:block hidden w-full">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className="mySwiper"
            spaceBetween={20}
            style={{ height: "500px" }}
          >
            {AnnouncementData &&
              AnnouncementData.map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="mt-7 mb-32">
                    <div className="mt-1 mb-7">
                      <div className="flex flex-row gap-5">
                        <div className="flex flex-col w-[280px]">
                          <p className="font-bold text-[16px] mb-2">
                            {item.title}
                          </p>
                          <span className="text-[13px] text-gray-600 mb-2">
                            {item.desc}
                          </span>
                          {item.link === "closed" ? (
                            <button className="text-sm text-white bg-red-800 rounded-md w-[50%] py-1 cursor-pointer flex items-center justify-center gap-3">
                              <ImCross />
                              Closed
                            </button>
                          ) : item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="text-sm text-white bg-teal-900 rounded-md w-[50%] py-1 transition hover:bg-transparent hover:text-black hover:ring-2 hover:ring-black cursor-pointer">
                                Register Now
                              </button>
                            </a>
                          ) : null}
                        </div>
                        <div className="w-[180px] h-[180px]">
                          <Image
                            width={180}
                            height={180}
                            className="w-full h-full object-cover"
                            src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${item.image}`}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="h-fit sm:hidden block">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className="mySwiper"
            spaceBetween={20}
            style={{ height: "550px" }}
          >
            {AnnouncementData &&
              AnnouncementData.map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="h-full flex items-center justify-center p-4">
                    <div className="flex flex-col justify-center text-center border-none border-gray-300 rounded-2xl shadow-xl p-4 max-w-[300px]">
                      <div className="w-44 h-44 mb-3 self-center">
                        <Image
                          width={180}
                          height={180}
                          className="w-full h-full object-cover"
                          src={`https://firebasestorage.googleapis.com/v0/b/iedccecbackend.appspot.com/o/${item.image}`}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col h-fit w-full">
                        <h3 className="font-bold text-[16px] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[13px] text-gray-600 mb-4">
                          {item.desc}
                        </p>
                        {item.link === "closed" ? (
                          <button className="text-sm text-white bg-red-800 rounded-md w-full py-1 cursor-pointer flex items-center justify-center gap-3">
                            <ImCross />
                            Closed
                          </button>
                        ) : item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <button className="text-sm text-white bg-teal-900 rounded-md w-full py-1 transition hover:bg-transparent hover:text-black hover:ring-2 hover:ring-black cursor-pointer">
                              Register Now
                            </button>
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Announcement;