import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import HeroImg from "../../public/images/banner.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className="section" id="hero">
      <div className={clsx(styles.heroContainer, "container")}>
        <div>
          <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleSpan}>Food</span>{" "}
            Delivery and Takeout!
          </h1>
          <p className={styles.heroDesc}>
          Food Recipes is an online food ordering and delivery platform. Here we delivered so fast!
          </p>
          <Link
          href="/menu"
          className={clsx(styles.heroButton, "button", "buttonFlex")}
        >
          See all
          <i
            className={clsx(styles.heroButtonIcon, "bx bx-label")}
          ></i>
        </Link>
          
        </div>
        <div className={styles.heroImg}>
          <Image src={HeroImg} alt="Car Market" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
