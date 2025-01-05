import clsx from "clsx";
import styles from "./CardSwiper.module.css";
import Link from "next/link";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const CardSwiper = ({ data }) => {
  return (
    <section
      className={clsx("section container", styles.cardSwiper)}
      id="cardSwiper"
    >
      <h3 className={styles.cardSwiperTitle}>Most popular</h3>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className={clsx(
          styles.cardSwiperContainer,
          "newSwiper-container container"
        )}
        loop={true}
        grabCursor={true}
        spaceBetween={10}
        breakpoints={{
          350: {
            slidesPerView: 1,
          },
          536: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1120: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {data.map((cardData) => (
          <SwiperSlide key={cardData.id}>
            <Card {...cardData} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="textAlign">
        <Link
          href="/category"
          className={clsx(styles.cardSwiperButton, "button", "buttonFlex")}
        >
          Lets order now
          <i
            className={clsx(
              styles.cardSwiperButtonIcon,
              "bx bx-right-arrow-alt"
            )}
          ></i>
        </Link>
      </div>
    </section>
  );
};

export default CardSwiper;
