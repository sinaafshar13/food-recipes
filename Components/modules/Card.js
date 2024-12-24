import Link from "next/link";
import styles from "./Card.module.css";
import Image from "next/image";
import clsx from "clsx";
import img1 from "../../public/images/1.jpeg"

const Card = (props) => {
  const { id, image, name, price, details, discount } = props;
  console.log(`/public/images/${id}.jpeg`);

  return (
    <div className={styles.menuCards}>
      <Image
        className={styles.cardsImage}
        src={`/images/${id}.jpeg`}
        alt="Car"
        width={300}
        height={200}
      />
      <div className={styles.cardsHeader}>
        <h3 className={styles.cardsName}>
          {name} {}
        </h3>
        <div className={styles.cardsScore}>
          <div className={styles.scoresNumber}>{}</div>
        </div>
      </div>
      <div className={styles.cardsInfos}>
        <div className={styles.cardsInfo}>
          <div>
          <i class="bx bx-category"></i>{" "}
          <span className={styles.infosText}>{details[1].RecipeType}</span>
          </div>
          <div>
          <i class='bx bx-cool'></i>{" "}
            <span className={styles.infosText}>{details[2].Difficulty}</span>
          </div>
        </div>
        <div className={styles.cardsInfo}>
          <div>
            <i className="bi bi-geo-alt"></i>{" "}
            <span className={styles.infosText}>{details[0].Cuisine}</span>
          </div>
          <div>
            <i className="bx bx-user"></i>
            <span className={styles.infosText}>{details[5].Serves}</span>
          </div>
        </div>
      </div>
      <div className={styles.cardsPrice}>
        <span className={styles.priceText}>Price</span>
        <span className={styles.priceNumber}>${price}</span>
      </div>
      <Link href="/" className={clsx(styles.cardsButton, "button")}>View Details</Link>
    </div>
  );
};

export default Card;
