import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import {
  Keyboard,
  Scrollbar,
  FreeMode,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import logo1 from "../../assets/allLogos/1-w.png";
import logo2 from "../../assets/allLogos/2-w.png";
import logo3 from "../../assets/allLogos/3-w.png";
import logo4 from "../../assets/allLogos/4-w.png";
import logo5 from "../../assets/allLogos/5-w.png";
import logo6 from "../../assets/allLogos/6-w.png";
import logo7 from "../../assets/allLogos/7-w.png";
import logo8 from "../../assets/allLogos/8-w.png";
import logo9 from "../../assets/allLogos/9-w.png";
import logo10 from "../../assets/allLogos/10-w.png";
import TitleText from "../titleText/TitleText";

function LogoCarousel() {
  const logos = [
    { id: 1, src: logo1 },
    { id: 2, src: logo2 },
    { id: 3, src: logo3 },
    { id: 4, src: logo4 },
    { id: 5, src: logo5 },
    { id: 6, src: logo6 },
    { id: 7, src: logo7 },
    { id: 8, src: logo8 },
    { id: 9, src: logo9 },
    { id: 10, src: logo10 },
  ];

  return (
    <div className="relative w-full mx-auto pt-8 pb-4 bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 xl:px-30 md:px-14 px-0 mb-20">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content above overlay */}
      <div className="relative z-10 pb-10">
        <TitleText>
          <div className="my-10 text-gray-50 ">
            We protect companies just like yours
          </div>
        </TitleText>

        <div className="mt-20">
          <Swiper
            breakpoints={{
              400: { slidesPerView: 2, spaceBetween: 0 },
              640: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 6, spaceBetween: 30 },
            }}
            loop={true}
            freeMode={true}
            scrollbar={false}
            navigation={false}
            keyboard={{ enabled: false }}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[
              FreeMode,
              Pagination,
              Navigation,
              Scrollbar,
              Keyboard,
              Autoplay,
            ]}
            className="mySwiper"
          >
            {logos.map((logo) => (
              <SwiperSlide
                key={logo.id}
                className="flex justify-center items-center m-0 p-0"
              >
                <div className="w-30 h-20 flex justify-center items-center text-center m-0 p-0">
                  <img src={logo.src} alt={`Logo ${logo.id}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default LogoCarousel;
